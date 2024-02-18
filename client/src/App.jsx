import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import { AuthProvider } from './providers/AuthContext'
import Addpage from './components/superuser/addpage'
import SuperuserRouter from './routes/SuperuserRouter'
import Page from './components/user/Page'
import UserRouter from './routes/UserRouter'

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            
            <Route path='/' element={<>Hi <Link to='/login'>Login</Link></>} />
            <Route path='/login' element={<Login />} />



            <Route element={<UserRouter />} >
              <Route path='/page' element={<Page />} />
            </Route>


            <Route element={<SuperuserRouter />} >
              <Route path='/add' element={<Addpage />} />
            </Route>
          
          
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
