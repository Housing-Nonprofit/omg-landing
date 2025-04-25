import { BrowserRouter } from "react-router-dom"
import '../index.css'
function App() {

  return (
    <>
    <BrowserRouter>
      <h1>Hello world</h1>
      <p>Welcome to my React app!</p>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
    </BrowserRouter>
    </>
  )
}

export default App
