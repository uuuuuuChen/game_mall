import React ,{ Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import RoutesConfig from './routes'
import './App.css'
import { Space, SpinLoading } from 'antd-mobile'


function App() {
    return (
      <div className="App" style={{height:'100%'}}>
        <div className='game'>
          <Header/>  
          <Suspense fallback={
          <SpinLoading color='primary'>loading...</SpinLoading>}
          >
              <RoutesConfig>
              </RoutesConfig>
          </Suspense>
          <Footer/>
        </div>
      </div>
    )
}

export default App
