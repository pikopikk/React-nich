import './css/styles.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/user/Home'
import BuyTutor from './pages/user/BuyTutor'
import MenuDetailPage from './pages/user/MenuDetailPage'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/CaraPesan' element={<BuyTutor/>} />
          <Route path='/InformasiMenu' element={<MenuDetailPage/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
