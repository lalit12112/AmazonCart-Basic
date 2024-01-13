import React from 'react';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import { useState } from 'react';
import Finalcost from './Finalcost.jsx';
import Clearcart from './Clearcart.jsx';


function App(){


  const [cartitems,setcartitems] = useState([]);

  function cartadder(itemdata){
    
    console.log("function called")
    const newitem = {
      name : itemdata.name,
      price : itemdata.price
    }
    setcartitems((prev)=>{
      const duparray = [...prev]
      duparray.push(newitem) 
      return duparray
    })
  }

  function clearcart(){
    setcartitems([])
  }
  
  

  return(
    <>
   <ProductList handleadditem={cartadder}/>

   <Cart items={cartitems} />

   <Finalcost items={cartitems}/>

   <Clearcart cartclearer={clearcart}/>



    </>
  )
}

export default App;