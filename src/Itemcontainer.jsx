import tigetImage from "./assets/tiger.jpg"


export default function Itemcontainer({productData,itemadder}){


    return(
        <div className="mx-8 mt-4">
        <img src={tigetImage} alt="" className="rounded-md"/>
            <p>{productData.name}</p>
            <p>Price:{productData.price}</p>
            <button className="bg-indigo-500 rounded-lg text-white w-24" onClick={()=>itemadder(productData)}>+ ADD</button>
        </div>
        
    )
}