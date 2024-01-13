export default function Finalcost({items}){

    let total = 0

    const elementspresent = items.length > 0;


    if (elementspresent) {
        items.map((item) => {
          total += item.price;
        });
      }


    return(
        <div>
        <h1 className="w-full text-center bg-indigo-500 mt-14">The total cost of cart is:{total}</h1>
        </div>

    )
}