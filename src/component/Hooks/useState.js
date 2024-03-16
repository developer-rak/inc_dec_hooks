import React, { useEffect, useState } from "react";
import "./style.css"

const UseState = () => {
   const initialData = 0;
   const [ myNum, setMyNum ] = useState(initialData);

   useEffect(() => {
      document.title = `Chats(${myNum})`
   })

   return (
      <>
         <div className="center_div">
            <p>{ myNum }</p>
            <div className="button2" onClick={() => setMyNum(myNum + 1)}>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               INC
            </div>
            <div className="button2" onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               DEC
            </div>
         </div>
      </>
   );
};
 
export default UseState;