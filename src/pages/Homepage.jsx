import { useState, useEffect } from "react"
import Cart from "../components/homepage/Cart"

const Homepage = () => {
    const [isLoading, setIsLoading] = useState(true)
  const [plantData, setPlantData] = useState([])



  const fetchPlants = async () => {
    try {
      setIsLoading(true)
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()

      const transformedData = data.slice(0, 9).map((user, index) => ({
        title: user.name,
        description: user.company.catchPhrase,
        price: (index + 1) * 15,
        email: user.email,
        phone: user.phone,
        company: user.company.name
      }))
      
      console.log('Plant data:', transformedData)

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
    <div className='w-full min-h-screen h-fit bg-amber-50 p-5'>

    <div className='flex justify-center mb-8'>
      <button 
        onClick={handleRefresh}
        className='bg-green-600 text-white font-bold py-3 px-8 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:scale-110'
      >
        Refresh
      </button>
    </div>

    {isLoading ? (
      <div className='flex justify-center items-center h-96'>
        <p className='text-2xl font-bold text-green-600'>Loading...</p>
      </div>
    ) : (
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 auto-rows-fr'>
        {plantData.map((plant, index) => (
          <div key={index} className='h-full'>
            <Cart plant={plant} />
          </div>
        ))}
      </div>
    )}
    
  </div>
  )
}

export default Homepage