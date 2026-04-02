import Web3 from "web3";

enum Types {
	UUID,
	Float,
	Hash
}

const web3 = new Web3(null);

export interface IDecodedArg {
	name: string;
	type: string;
	value: string;
}

export interface IDecodedContractCall {
	functionName: string;
	inputs: IDecodedArg[];
}

export interface IContractData {
	abi: any[];
	typesNames: Record<string, number>;
}

const cache = new Map<string, IContractData>();

export async function fetchContractData(address: string): Promise<IContractData | null> {
	const key = address.toLowerCase();

	if (cache.has(key)) {
		return cache.get(key)!;
	}

	try {
		const res = await fetch(`/abi/${key}`);
		if (!res.ok) {
			return null;
		}
		const raw = await res.json();
		const data: IContractData = {
			abi: JSON.parse(raw.abi),
			typesNames: JSON.parse(raw.types)
		};
		cache.set(key, data);
		return data;
	} catch {
		return null;
	}
}

export function decodeContractCall(contractData: IContractData, payload: string): IDecodedContractCall | undefined {
	if (!payload || payload.length < 10) {
		return undefined;
	}

	const selector = payload.slice(0, 10).toLowerCase();
	const functions = contractData.abi.filter(item => item.type === "function");

	for (const fn of functions) {
		const inputTypes = (fn.inputs || []).map((i: any) => i.type).join(",");
		const fnSignature = `${fn.name}(${inputTypes})`;
		const fnSelector = web3.eth.abi.encodeFunctionSignature(fnSignature).toLowerCase();

		if (fnSelector !== selector) {
			continue;
		}

		try {
			const encodedArgs = "0x" + payload.slice(10);
			const decoded = web3.eth.abi.decodeParameters(fn.inputs, encodedArgs);

			const inputs: IDecodedArg[] = (fn.inputs || []).map((input: any) => ({
				name: input.name,
				type: input.type,
				value: String(decoded[input.name])
			}));

			for (const input of inputs) {
				if (contractData.typesNames[input.name] === undefined) {
					continue;
				}
				switch (contractData.typesNames[input.name]) {
					case Types.UUID: {
						const hex = (globalThis as any).BigInt(input.value).toString(16).padStart(32, "0");
						const uuid = ([
							hex.slice(0, 8),
							hex.slice(8, 12),
							hex.slice(12, 16),
							hex.slice(16, 20),
							hex.slice(20, 32)
						] as any).join("-");
						input.value = uuid;
						break;
					}
					case Types.Float: {
						input.value = (Number(input.value) / 10000).toString(10);
						break;
					}
					case Types.Hash: {
						break;
					}
				}
			}

			return { functionName: fn.name, inputs };
		} catch {
			return undefined;
		}
	}

	return undefined;
}
