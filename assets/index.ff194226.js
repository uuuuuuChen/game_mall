import{s as m,r as t,g as o,j as a,L as i}from"./index.8430d397.js";const p=m.div`
    .game_name {
        display: block;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid rgb(206, 204, 204);
        font-size: 18px;
        line-height: 50px;
        text-indent: 10px;
    }
`,l=()=>{const[s,r]=t.exports.useState([]);return t.exports.useEffect(()=>{(async()=>{let{data:e}=await o();r(e)})()},[]),a(p,{children:(()=>s.map(({id:e,desc:n})=>a(i,{className:"game_name",to:{pathname:"/home"},children:n},e)))()})};export{l as default};
