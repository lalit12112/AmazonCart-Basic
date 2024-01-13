export default function Cart({items}){
   
    const elementspresent = items.length > 0;

    let cart = "no items added to cart"

    if (elementspresent) {
        cart = (
          <ul>
            {items.map((item) => (
              <li key={item.price}>
                {item.name} price: {item.price}
              </li>
            ))}
          </ul>
        );
      }

    return(
        <div className="w-full h-48 mt-16 ">
        
        <div className="w-full text-center ">
         <h1 className="font-serif text-lg bg-indigo-500">Cart</h1>
          {cart}
        </div>
            

        </div>
    )
}