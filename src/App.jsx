import Cart from "./components/Cart"

const App = () => {

  const plantData = [
    {
      title: "Harvest Vase",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 78,
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/palm-tree-in-pink-pot-royalty-free-image-1727982899.jpg?crop=0.88933xw:1xh;center,top"
    },
    {
      title: "Green Plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 45,
      imageUrl: "https://www.bhg.com/thmb/LzF_YQm9oucr8El0XVmJIpGcRg0=/1335x0/filters:no_upscale():strip_icc()/plumeria-flowers-0144ca65-2000-e8a8b629cf00427893d57cc411cd3f27.jpg"
    },
    {
      title: "Succulent Plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 30,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/62/Money_Plant_%28Epipremnum_aureum%29_4.jpg"
    },
    {
      title: "Flower Pot",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 60,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Money_Plant_%28Epipremnum_aureum%29_3.jpg"
    },
    {
      title: "Cactus Plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 25,
      imageUrl: "https://www.joyusgarden.com/wp-content/uploads/2018/01/rubber.jpg"
    },
    {
      title: "Orchid Plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 90,
      imageUrl: "https://www.bhg.com/thmb/7T-D-VRiKQ84nhfHYqxlnZLdooM=/1080x0/filters:no_upscale():strip_icc()/heuchera-midnight-bayou-2af3c0c3-d7f31fd6147449d384e2f35f6ee72718.jpg"
    },
    {
      title: "Tree",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 90,
      imageUrl: "https://www.gardendesign.com/pictures/images/675x529Max/site_3/beautifall-summer-nights-pothos-pothos-plant-proven-winners_18890.jpg"
    },
    {
      title: "Jasmin",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 90,
      imageUrl: "https://img.freepik.com/free-photo/red-flower-tilt-shift-lens_417767-654.jpg"
    },
    {
      title: "Flower",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis aspernatur ex? Sit ducimus, ad amet repellendus delectus quidem qui.",
      price: 90,
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1191062920.jpg?crop=1.00xw:0.834xh;0,0.0420xh"
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