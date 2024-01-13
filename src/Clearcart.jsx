export default function Clearcart({cartclearer}){


    return(

        <div className='w-full text-center mt-4'>
        <button className="text-center bg-indigo-500 rounded-lg text-white w-24" onClick={cartclearer}>
            Clear Cart
        </button>
        </div>
    )
}