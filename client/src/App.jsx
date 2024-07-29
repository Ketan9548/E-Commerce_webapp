import { useState } from 'react'
import Header from './components/Header/Header'
import Newheader from './components/Newheader/Newheader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Newheader />
    </>
  )
}
export default App;
