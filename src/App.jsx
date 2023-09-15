import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto'>
        <Navbar/>
        <Banner />
      </div>
    </>
  )
}

export default App
