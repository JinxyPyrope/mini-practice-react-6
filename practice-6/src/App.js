import "./App.css"
import { List } from "./components"

const data = ["dog", "cat", "chicken", "cow", "sheep", "horse"]

function App() {
  return (
    <div className="App">
      <List listdata={data} />
    </div>
  )
}

export default App
