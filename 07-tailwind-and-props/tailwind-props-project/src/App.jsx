import Card from "./componenst/card"
function App() {

  return (
    <>
      <h1 className="bg-blue-500 text-orange-600 p-4 mb-3">TailwindCss </h1>

      <Card title="Mountain" imgUrl={"https://images.pexels.com/photos/31356866/pexels-photo-31356866/free-photo-of-majestic-view-of-snow-capped-mount-fuji.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} description="This Mountain "/>

      <Card title={"sea"} imgUrl={"https://images.pexels.com/photos/31475691/pexels-photo-31475691/free-photo-of-serene-beach-with-crashing-waves-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} description={"Sea view from tithal"}/>

      <Card title={"Lighhouse"} description={"This is a lighhouse"} imgUrl={"https://images.pexels.com/photos/11278455/pexels-photo-11278455.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} />
        
    </>
  )
}

export default App
