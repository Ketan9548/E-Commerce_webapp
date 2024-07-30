import { useState } from 'react'
import Header from './components/Header/Header'
import Newheader from './components/Newheader/Newheader';
import './App.css'
import Main from './components/Home/Main';

function App() {
  const [count, setCount] = useState('')

  return (
    <>
      <Header />
      <Newheader />
      <Main />
    </>
  )
}
export default App;
