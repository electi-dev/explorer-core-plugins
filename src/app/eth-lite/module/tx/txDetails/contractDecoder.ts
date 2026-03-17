import Web3 from "web3";

enum Types {
    UUID,
    Float
}

export const CONTRACTS: any = {
    "0xc01ee7f10ea4af4673cfff62710e1d7792aba8f3": {
        "abi": [
            {
                inputs: [],
                stateMutability: "nonpayable",
                type: "constructor"
            },
            {
                inputs: [
                    {
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }
                ],
                name: "OwnableInvalidOwner",
                type: "error"
            },
            {
                inputs: [
                    {
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }
                ],
                name: "OwnableUnauthorizedAccount",
                type: "error"
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: "address",
                        name: "authority",
                        type: "address"
                    },
                    {
                        indexed: true,
                        internalType: "address",
                        name: "addedBy",
                        type: "address"
                    }
                ],
                name: "AuthorityAdded",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: "address",
                        name: "authority",
                        type: "address"
                    },
                    {
                        indexed: true,
                        internalType: "address",
                        name: "removedBy",
                        type: "address"
                    }
                ],
                name: "AuthorityRemoved",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: "address",
                        name: "addedBy",
                        type: "address"
                    },
                    {
                        indexed: true,
                        internalType: "uint128",
                        name: "ID",
                        type: "uint128"
                    },
                    {
                        indexed: true,
                        internalType: "uint128",
                        name: "contractID",
                        type: "uint128"
                    }
                ],
                name: "DeliveryResultAdded",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: "address",
                        name: "addedBy",
                        type: "address"
                    },
                    {
                        indexed: true,
                        internalType: "uint128",
                        name: "contractID",
                        type: "uint128"
                    }
                ],
                name: "EnergyTradeContractAdded",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    },
                    {
                        indexed: true,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }
                ],
                name: "OwnershipTransferred",
                type: "event"
            },
            {
                inputs: [
                    {
                        internalType: "address",
                        name: "_authority",
                        type: "address"
                    }
                ],
                name: "addAuthority",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                inputs: [
                    {
                        internalType: "uint128",
                        name: "id",
                        type: "uint128"
                    },
                    {
                        internalType: "uint128",
                        name: "EnergyTradeContractID",
                        type: "uint128"
                    },
                    {
                        internalType: "uint256",
                        name: "EnergyDeliveredByProducer",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "EnergyConsumedByConsumer",
                        type: "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "GridPowerForProducerShortfall",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "GridPowerForConsumerExcess",
                        "type": "uint256"
                    }
                ],
                "name": "addDeliveryResult",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint128",
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "ProducerID",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "ConsumerID",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint256",
                        "name": "Amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "PricePerKwh",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint64",
                        "name": "ContractStartDate",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "ContractEndDate",
                        "type": "uint64"
                    }
                ],
                "name": "addEnergyTradeContract",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "authorities",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint128",
                        "name": "",
                        "type": "uint128"
                    }
                ],
                "name": "contracts",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "AddedBy",
                        "type": "address"
                    },
                    {
                        "internalType": "uint128",
                        "name": "ProducerID",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "ConsumerID",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint256",
                        "name": "Amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "PricePerKwh",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint64",
                        "name": "ContractStartDate",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "ContractEndDate",
                        "type": "uint64"
                    },
                    {
                        "internalType": "bool",
                        "name": "exists",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "atBlock",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint128",
                        "name": "",
                        "type": "uint128"
                    }
                ],
                "name": "deliveryResults",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "AddedBy",
                        "type": "address"
                    },
                    {
                        "internalType": "uint128",
                        "name": "EnergyTradeContractID",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint256",
                        "name": "EnergyDeliveredByProducer",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "EnergyConsumedByConsumer",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "GridPowerForProducerShortfall",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "GridPowerForConsumerExcess",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "exists",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "atBlock",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint128",
                        "name": "",
                        "type": "uint128"
                    }
                ],
                "name": "energyTradeContractsToDeliveryResults",
                "outputs": [
                    {
                        "internalType": "uint128",
                        "name": "",
                        "type": "uint128"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_authority",
                        "type": "address"
                    }
                ],
                "name": "removeAuthority",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "typesNames": {
            "id": Types.UUID,
            "EnergyTradeContractID": Types.UUID,
            "ProducerID": Types.UUID,
            "EnergyDeliveredByProducer": Types.Float,
            "EnergyConsumedByConsumer": Types.Float,
            "GridPowerForProducerShortfall": Types.Float,
            "GridPowerForConsumerExcess": Types.Float,
            "ConsumerID": Types.UUID,
            "Amount": Types.Float,
            "PricePerKwh": Types.Float
        }
    }
};

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

export function isTargetContract(toAddress: string): boolean {
    return toAddress.toLowerCase() in CONTRACTS;
}

export function decodeContractCall(address: string, payload: string): IDecodedContractCall | undefined {
    if (!payload || payload.length < 10) {
        return undefined;
    }

    const contract = CONTRACTS[address.toLowerCase()];
    const selector = payload.slice(0, 10).toLowerCase();
    const functions = contract.abi.filter(item => item.type === "function");

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
                if (contract.typesNames[input.name] === undefined) {
                    continue;
                }
                switch (contract.typesNames[input.name]) {
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
                }
            }

            return { functionName: fn.name, inputs };
        } catch (e) {
            return undefined;
        }
    }

    return undefined;
}
