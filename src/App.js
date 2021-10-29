import { useState, useEffect} from "react"
import './App.css';

function App() {
  // const[count, setCount] = useState(4)
  // function decCount() {
  //   setCount(prevCount => prevCount - 1)
  // }
  // function incCount() {
    
  //   setCount(prevCount => prevCount + 1)
  // }
  // function reset() {
  //   setCount(count => count = 0)
  // }
  // return (
  //   <div className="App">
  //     <button onClick={decCount}>-</button>
  //     <span>{count}</span>
  //     <button onClick={incCount}>+</button>
  //     <button onClick={reset}>Reset</button>
  //   </div>
  // );
  const [header, setHeader] = useState("")
  let [items, setItems] = useState([])
  let [itemsAmnt, displayItems] = useState(0)
 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${header}`)
  .then(response => response.json())
  .then(json => {
    setItems(json)
  })
  }, [header])

  function showItemsAmnt() {
    displayItems(itemsAmnt = items.length)
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => {setHeader("Todos")}}>Todos</button>
        <button onClick={() => {setHeader("Comments")}}>Comments</button>
        <button onClick={() => {setHeader("Posts")}}>Posts</button>
      </div>
      <h2>{header}</h2>
      <h3>{showItemsAmnt()}</h3>
      {items.map(item => {
        return <p>{JSON.stringify(item)}</p>
      })}
    </div>
  );
}

export default App;
