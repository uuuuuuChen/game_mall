import React ,{ Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import RoutesConfig from './routes'
import './App.css'

function App() {
    return (
      <div className="App" style={{height:'100%'}}>
        <div className='game'>
          <Header/>  
          <Suspense fallback={<div></div>}>
              <RoutesConfig>
              </RoutesConfig>
          </Suspense>
          <Footer/>
        </div>
      </div>
    )
}

export default App
