// 独立配置文件
import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
//  推迟加载，运行，按需加载
// 当切换到这个路由后 加载
// const Home = lazy(() => import('../pages/Home'))
import Home from '@/pages/Home'
import LOLHome from '@/pages/LOLHome'
import ShoppingCart from '../pages/ShoppingCart'
const Find = lazy(() => import('@/pages/Find'))
const Mine = lazy(() => import('@/pages/Mine'))
const Judou = lazy(() => import('@/pages/Judou'))

// Routes 不能和reat-router-dom  一样
const RoutesConfig = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/lol' element={<LOLHome />}></Route>
            <Route path='/cf' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path="/judou" element={<Judou />}></Route>
            <Route path="/find" element={<Find />}></Route>
            <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
            {/* <Route path="/gamelist" element={<GameList />}></Route> */}


            <Route path="/game1" element={<Mine />}></Route>
            <Route path="/game2" element={<Mine />}></Route>
            <Route path="/game3" element={<Mine />}></Route>
            <Route path="/game4" element={<Mine />}></Route>
            <Route path="/game5" element={<Mine />}></Route>
            <Route path="/game6" element={<Mine />}></Route>
            <Route path="/game7" element={<Mine />}></Route>
            <Route path="/game8" element={<Mine />}></Route>
            <Route path="/game9" element={<Mine />}></Route>
            <Route path="/game10" element={<Mine />}></Route>
            <Route path="/game11" element={<Mine />}></Route>
            <Route path="/game12" element={<Mine />}></Route>
            <Route path="/game13" element={<Mine />}></Route>
            <Route path="/game14" element={<Mine />}></Route>
            <Route path="/game15" element={<Mine />}></Route>
            <Route path="/game16" element={<Mine />}></Route>
            <Route path="/game17" element={<Mine />}></Route>
            <Route path="/game18" element={<Mine />}></Route>
            

        </Routes>
    )
}

export default  RoutesConfig