import React from "react";

const Hello = () =>{
    // return (
    //     <div className='dummyclass'>
    //     <h1>Hello visuals</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'hello', className:'dummyClass'},null, React.createElement('h1',null,'Hello visualsss' ) )
}
export default Hello