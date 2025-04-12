import React, { useState } from "react";
import { AddCount } from "./components/AddCount";
import { RemoveCount } from "./components/RemoveCount";
import { ResetCount } from "./components/ResetCount";


export default function App () {
  
 const [count, setCount] = useState(0)


  return(
    <>
      <h1>Countes: {count}</h1>
      <AddCount count={count} setCount={setCount} /> <br /> <br />
      <RemoveCount count={count} setCount={setCount} /> <br /> <br />
      <ResetCount setCount={setCount}/>
    </>
  )
}
