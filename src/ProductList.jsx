import  products from './data.js'
import Itemcontainer from "./Itemcontainer.jsx"

export default function ProductList({handleadditem}){


    return(
        <div className="flex flex-row">
            <Itemcontainer productData={products[0]} itemadder={handleadditem}/>
            <Itemcontainer productData={products[1]} itemadder={handleadditem}/>
            <Itemcontainer productData={products[2]} itemadder={handleadditem}/>
            <Itemcontainer productData={products[3]} itemadder={handleadditem}/>
            <Itemcontainer productData={products[4]} itemadder={handleadditem}/>
        </div>

    )
}