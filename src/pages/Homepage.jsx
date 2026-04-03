import { useState, useEffect } from "react"
import Cart from "../components/homepage/Cart"

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [plantData, setPlantData] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const fetchPlants = async () => {
    try {
      setIsLoading(true)
      
      const response = await fetch('https://dummyjson.com/products')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      console.log('API Response:', data)

      const transformedData = data.products.slice().map((product) => ({
        title: product.title,
        description: product.description,
        price: product.price,
        id: product.id,
        imageUrl: product.images && product.images.length > 0 ? product.images[0] : product.thumbnail,
        rating: product.rating
      }))
      
      console.log('Transformed data:', transformedData)

      setTimeout(() => {
        setPlantData(transformedData)
        setIsLoading(false)
      }, 2000)
      
    } catch (error) {
      console.error('Error fetching plants:', error)
      setIsLoading(false)
    }
  }

  const handleRefresh = () => {
    fetchPlants()
  }

  useEffect(() => {
    fetchPlants()
  }, [])

  return (
    <div className={darkMode ? "bg-black text-white min-h-screen" : "bg-amber-50 min-h-screen"}>

      {/* ✅ NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-green-700 text-white">
        <h1 className="font-bold text-xl">MyShop</h1>
        
        <ul className="flex gap-6 font-semibold">
          <li className="cursor-pointer hover:underline">Products</li>
          <li className="cursor-pointer hover:underline">Users</li>
          <li className="cursor-pointer hover:underline">Comments</li>
        </ul>

        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="bg-white text-black px-3 py-1 rounded-lg font-semibold"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </nav>

      <div className='w-full h-fit px-5 py-5'>

        <div className='flex justify-center mb-8'>
          <button 
            onClick={handleRefresh}
            className='bg-green-600 text-white font-bold py-3 px-8 rounded-lg'
          >
            Refresh
          </button>
        </div>

        {isLoading ? (
          <div className='flex justify-center items-center h-75'>
            <p className='text-2xl font-bold text-green-600'>Loading...</p>
          </div>
        ) : (
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 auto-rows-fr'>
            {plantData.map((plant) => (
              <div key={plant.id} className='h-full'>
                <Cart plant={plant} />
              </div>
            ))}
          </div>
        )}
        
      </div>
    </div>
  )
}

export default Homepage