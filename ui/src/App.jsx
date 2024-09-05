
import './App.css'
import Footer from './customer/components/Footer/Footer'

import Navbar from './customer/components/Navbar/Navbar'
import HomePage from './customer/pages/homepage/HomePage'

function App() {

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <HomePage/>
    </div>
    <Footer/>
    </>
  )
}

export default App
