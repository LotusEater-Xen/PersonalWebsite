import { useState } from "react";





export default function Header({page,page2,page3,page4}){
  
  page=location.pathname
   const [value, setValue] = useState(location.pathname);

   function lmao(e){
   
   window.location.assign(e.target.value);
   
}

    return(<div><h1 className="lg:m-20 mt-20 m-2 pb-0 text-white text-4xl font-lmao text-left">
    <select value={value} onChange={lmao}>
      <option value={page} >{page}</option>
        <option value={page2} >home</option>
        <option value={page3}>art</option>
        <option value={page4}>music</option>
        </select>
          </h1>
    </div>);
}