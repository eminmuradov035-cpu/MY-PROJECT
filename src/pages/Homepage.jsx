import { useState, useEffect } from "react"
import Cart from "../components/homepage/Cart"

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [plantData, setPlantData] = useState([])

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
    <div className='w-full min-h-screen h-fit bg-amber-50 px-5 py-5'>

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
  )
}

export default Homepage