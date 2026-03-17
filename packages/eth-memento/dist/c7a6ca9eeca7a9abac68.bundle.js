(window["webpackJsonp_aleth_io_ethMemento"]=window["webpackJsonp_aleth_io_ethMemento"]||[]).push([[8],{"64IJ":function(e,t,n){"use strict";n.r(t);var l=n("cDcd");var a=n("lvN2");var r=n("INKD");var o=n("C4qQ");var c=n("rPH3");var s=n("bYKd");var i=n("gxhx");var p=n("CcTz");var m=n("6rk5");var u=n("LCJi");class d extends l["Component"]{render(){let{children:e,linkTo:t}=this.props;return l["createElement"](u["a"],{colors:e=>({background:e.colors.blockColorCode,text:e.colors.blockBoxText}),linkTo:t},e)}}const h=({children:e,linkTo:t})=>l["createElement"](u["a"],{colors:e=>({background:e.colors.parentHashBoxBg,text:e.colors.parentHashBoxText}),linkTo:t},e);var b=n("i22y");var g=n("bH0W");class E extends l["Component"]{render(){return this.props.format.replace(/%d/,(new g["a"]).format(this.props.children,this.props.locale))}}const x=({bytes:e,locale:t,translations:n})=>l["createElement"](b["a"],null,l["createElement"](E,{format:"%d "+n.bytes,locale:t},e));var k=n("IqB2");var v=n("lJck");class f extends l["Component"]{render(){return l["createElement"](b["a"],{colors:e=>({background:e.colors.unclesBoxBg,text:e.colors.unclesBoxText,border:e.colors.unclesBoxBorder}),variant:this.props.variant},l["createElement"](v["a"],{locale:this.props.locale,value:this.props.children}))}}var w=n("7k9Y");var y=n("bb6g");var B=n("ckoB");var C=n("sGQ9");var I=n("VBo9");const T=Object(B["b"])("div").withConfig({displayName:"StackBarItemFill",componentId:"sc-zapvke"})`
    background-color: ${({color:e})=>e};
    width: 100%;
    height: 100%;
`;const H=Object(B["b"])("div").withConfig({displayName:"StackBarItem",componentId:"sc-ew0vxj"})`
    width: ${({percent:e})=>e}%;
    height: ${e=>e.height}px;
    transition: height .2s ease-out;

    ${e=>e.selected?B["a"]`
    > ${T} {
        border-radius: 2px;
    }
    `:B["a"]`
    &:first-child > ${T} {
        border-radius: 2px 0 0 2px;
    }

    &:last-child > ${T} {
        border-radius: 0 2px 2px 0;
    }`}
`;let $=class e extends l["Component"]{render(){let{className:e,items:t,defaultBarHeight:n,maxBarHeight:a,minBarHeight:r}=this.props;let o=t.reduce((e,t)=>e+t.count,0);return l["createElement"]("div",{className:e,ref:e=>this.wrapperEl=e},t.map((e,t)=>{let c=e.count/o*100;let s=this.selectedItem?e===this.selectedItem?a:r:n;return l["createElement"](H,{selected:e===this.selectedItem,percent:c,height:s,onMouseEnter:()=>this.selectItem(e),onMouseLeave:()=>this.unselectItem(e),key:t},l["createElement"](p["a"],{placement:"right",content:e.tooltip,referenceElement:()=>this.wrapperEl},l["createElement"](T,{color:e.color})))}))}selectItem(e){this.selectedItem=e}unselectItem(e){this.selectedItem===e&&(this.selectedItem=void 0)}};y["b"]([I["observable"].ref],$.prototype,"selectedItem",void 0);$=y["b"]([C["observer"]],$);const N=Object(B["b"])($).withConfig({displayName:"StackBar",componentId:"sc-14ti91l"})`
    height: ${e=>e.maxBarHeight}px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
`;N.defaultProps={defaultBarHeight:28,minBarHeight:28,maxBarHeight:28};var j=n("v8OL");var V=n("F3RY");class S extends l["Component"]{render(){return l["createElement"]("div",{className:this.props.className})}}const W=8;const M=Object(B["b"])(S).withConfig({displayName:"StackBarBubble",componentId:"sc-vsm7nx"})`
    width: ${8}px;
    height: ${8}px;
    border-radius: ${4}px;
    margin-top: -${4}px;
    background-color: ${e=>e.color};
    vertical-align: middle;
    display: inline-block;
`;const O=B["b"].div.withConfig({displayName:"StackBarTooltipTextRoot",componentId:"sc-548ojh"})`
    > span {
        padding-left: 8px;
    }

    > span:first-child {
        padding-left: 0;
    }
`;class _ extends l["Component"]{render(){return l["createElement"](O,null,l["createElement"]("span",null,l["createElement"](M,{color:this.props.bubbleColor})),this.props.children)}}const z=V["b"].span.withConfig({displayName:"TooltipCountRoot",componentId:"sc-10bjlwo"})`
    color: ${e=>e.theme.colors.tooltipTxCountText};
`;const D=({count:e,translation:t})=>l["createElement"](z,null,t.get("blockView.content.blockSummary.txs.label").replace(/%d/,""+e));class J extends l["Component"]{render(){return l["createElement"](_,{bubbleColor:this.props.color},l["createElement"]("span",null,this.props.label),l["createElement"]("span",null,this.props.percent,"%"),l["createElement"](D,{count:this.props.count,translation:this.props.translation}))}}function R(e){let t=e.map(e=>({originalItem:e,percent:Math.floor(e.percent)}));let n;let l=100-t.reduce((e,t)=>e+t.percent,0);let a;[...t].sort((e,t)=>t.originalItem.percent-t.percent-(e.originalItem.percent-e.percent)).some(e=>{if(l--<=0)return!0;e.percent+=1;return!1});return t}class K extends l["PureComponent"]{render(){return l["createElement"](N,{defaultBarHeight:8,maxBarHeight:12,minBarHeight:4,items:this.buildData()})}buildData(){const e=(new Map).set(j["a"].Value,this.props.theme.colors.txTypeValue).set(j["a"].Create,this.props.theme.colors.txTypeCreate).set(j["a"].Call,this.props.theme.colors.txTypeCall);let t=new Map;this.props.transactions.forEach(e=>{t.set(e.type,(t.get(e.type)||0)+1)});let n=[...t.values()].reduce((e,t)=>e+t,0);let a;let r;return R([...t.keys()].sort().map(e=>{let l=t.get(e);return{type:e,count:l,percent:l/n*100}})).map(t=>{let n=t.originalItem.type;let a=e.get(n);if(!a)throw new Error(`TransactionType "${j["a"][n]}" has no color defined`);let r=this.props.translation.get("general.tx.type."+j["a"][n]);let o=t.originalItem.count;let c=t.percent;return{count:o,color:a,label:r,tooltip:l["createElement"](J,{count:o,color:a,label:r,percent:c,translation:this.props.translation})}})}}const L=Object(V["c"])(K);var P=n("j/K6");n.d(t,"BlockBasic",function(){return Y});class Y extends l["PureComponent"]{render(){let{translation:e,blockDetails:t,slots:n,locale:u}=this.props;return l["createElement"](s["a"],{useWrapper:!0},l["createElement"](a["a"],{minWidth:900},l["createElement"](r["a"],null,l["createElement"](o["a"],null,e.get("blockView.content.blockNumber.label")),l["createElement"](m["a"],{noLink:!0},t.id)),l["createElement"](r["a"],null,n[w["a"].Confirmations]),l["createElement"](r["a"],null,l["createElement"](o["a"],null,e.get("blockView.content.uncles.label")),l["createElement"](f,{locale:u},t.uncles.length))),l["createElement"](a["a"],{minWidth:760},l["createElement"](r["a"],null,l["createElement"](o["a"],null,e.get("general.hash")),t.inconsistentWarning?l["createElement"](p["a"],{content:l["createElement"]("div",{style:{width:450,textAlign:"center"}},e.get("blockView.content.inconsistentWarning.text"))},l["createElement"](i["a"],null)):null,l["createElement"](d,null,t.hash)),t.parentHash?l["createElement"](r["a"],null,l["createElement"](o["a"],null,e.get("blockView.content.parentHash.label")),l["createElement"](h,{linkTo:t.parentId?`page://aleth.io/block?blockNumber=${t.parentId}`:void 0},t.parentHash)):null),t.uncles.length?l["createElement"](a["a"],null,l["createElement"](r["a"],{fullRow:!0},l["createElement"](o["a"],null,e.get("blockView.content.uncles.label")),t.uncles.map(e=>l["createElement"](k["a"],{key:e,linkTo:`page://aleth.io/uncle?uncleHash=${e}`},e)))):null,l["createElement"](a["a"],{minWidth:710},l["createElement"](r["a"],null,l["createElement"](o["a"],null,e.get("general.nonce")),l["createElement"](c["a"],null,t.nonce)),l["createElement"](r["a"],null,l["createElement"](o["a"],null,e.get("blockView.content.blockSize.label")),l["createElement"](x,{bytes:t.byteSize,locale:u,translations:{bytes:e.get("general.bytes")}}))),t.transactions.length&&Object(P["a"])(t.transactions[0])?l["createElement"](a["a"],null,l["createElement"](r["a"],{fullRow:!0,autoHeight:!0},l["createElement"](o["a"],null,e.get("blockView.content.blockSummary.label")),l["createElement"]("div",{style:{maxWidth:500,flex:"1 1 auto"}},l["createElement"](L,{transactions:t.transactions,translation:e})))):null)}}},"j/K6":function(e,t,n){"use strict";n.d(t,"a",function(){return l});function l(e){return void 0!==e.type}}}]);
//# sourceMappingURL=c7a6ca9eeca7a9abac68.bundle.js.map