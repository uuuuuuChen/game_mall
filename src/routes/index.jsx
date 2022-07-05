// 独立配置文件
import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
//  推迟加载，运行，按需加载
// 当切换到这个路由后 加载
// const Home = lazy(() => import('../pages/Home'))
import Home from '@/pages/Home'
import LOLHome from '@/pages/LOLHome'
const Find = lazy(() => import('@/pages/Find'))
const Mine = lazy(() => import('@/pages/Mine'))
const Judou = lazy(() => import('@/pages/Judou'))
const GameList = lazy(() => import('@/pages/GameList'))

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
            <Route path="/mine" element={<Mine />}></Route>
            {/* <Route path="/gamelist" element={<GameList />}></Route> */}
        </Routes>
    )
}

export default  RoutesConfig