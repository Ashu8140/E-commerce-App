import React from "react";
import { ImCross } from "react-icons/im";
import Product from "./Product";


function CartRow({products,quantity,onQuantityChange,handleRemove}){
    function handleChange(event){
        onQuantityChange(products.id,+event.target.value);
    }

function handleCrosClick(){
    handleRemove(products.id);
}
    
return(    
<div className="flex flex-row items-center px-4 py-2 mx-10 border border-gray-300">
    <button onClick={handleCrosClick} className="items-center w-10 h-10 text-gray-500"><ImCross/></button>
    <div className="w-10 h-10">
<img className="object-cover w-full h-full" src={products.thumbnail}/>
    </div>
    <h3 className="ml-4 font-bold text-red-500 grow">{products.title}</h3>
    <span className="w-20">{products.price}</span>

    <input className="w-12 py-1 text-center border border-gray-300`" type="number"
     min={1} value={quantity} onChange={handleChange}  
    />
    <span className="w-24 ml-16">{products.price * quantity}</span>
    
</div>
);
}
export default CartRow;