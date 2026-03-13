import Cart from "./components/Cart"

const App = () => {

  const plantData = [
    {
      title: "Harvest Vase",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 78,
      imageUrl: "https://images.unsplash.com/photo-1687106358396-20daadef9e36?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hbGwlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Green Plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 45,
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Succulent Plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 30,
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VjY3VsZW50JTIwcGxhbnR8ZW58MHx8MHx8MA%3D%3D"
    },
    {
      title: "Flower Pot",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 60,
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwcG90fGVufDB8fDB8fA%3D%3D"
    },
    {
      title: "Cactus Plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 25,
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FjdHVzfGVufDB8fDB8fA%3D%3D"
    },
    {
      title: "Orchid Plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 90,
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JjaGlkfGVufDB8fDB8fA%3D%3D"
    }
  ]

  return (
    <div className='w-full min-h-screen h-fit bg-amber-50 grid sm:grid-cols-2 md:grid-cols-3 gap-5 p-5'>
{
  plantData.map(plant => <Cart plant={plant} />)
}
</div>
  )
}

export default App