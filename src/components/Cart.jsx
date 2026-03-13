import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const Cart = ({ plant }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(prevState => prevState +1)
    }

    const decrement = () => {
        setCount(prevState => prevState !== 1 ? prevState -1 : 1)
    }
  return (
    <div className='flex max-w-125 h-fit rounded-xl bg-white overflow-hidden shadow-lg shadow-green-500'>
      <img className='w-50' src={plant.imageUrl} alt="" />
    <div className='px-5 py-10'>

      <h2 className='font-semibold text-2xl'>{plant.title}</h2>
      <p className='text-sm text-zinc-400'>BY STUDIO AND FRIENDS</p>

      <p className='my-5 text-zinc-500'>{plant.description}</p>

      <div className='flex gap-5 items-center'>
        
        <div className="flex gap-3 font-semibold text-2xl border">
            <button className="size-8 bg-red-600 text-white flex justify-center items-center hover:cursor-pointer" onClick={decrement}><Minus/></button>
            <p>{count}</p>
            <button className="size-8 bg-green-600 text-white flex justify-center items-center hover:cursor-pointer" onClick={increment}><Plus/></button>
        </div>

        <button className='bg-green-800 text-white px-4 py-2 rounded-4xl font-bold cursor-pointer shadow-2xl shadow-green-500'>BUY NOW ({plant.price * count}$)</button>
      </div>
    </div>
    </div>
  )
}

export default Cart