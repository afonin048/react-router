import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import About from './pages/About'
import Auth from './pages/Auth'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import UserProfile from './pages/UserProfile'
import Users from './pages/Users'

function App() {

  return (
    <>
      

      <div>

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/about' element={<About />} />
            <Route path='/users/:id' element={<UserProfile />} />
          </Route>

          <Route path='/auth' element={<Auth />} />

          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </div>
    </>
  )
}

export default App
