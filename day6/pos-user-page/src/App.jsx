import './css/styles.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/user/Home'
import BuyTutorPage from './pages/user/BuyTutorPage'
import MenuDetailPage from './pages/user/MenuDetailPage'
import ServiceInfoPage from './pages/user/ServiceInfoPage'
import SearchMenuPage from './pages/user/SearchMenuPage'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/CariMenu' element={<SearchMenuPage/>} />
          <Route path='/InformasiLayanan' element={<ServiceInfoPage/>} />
          <Route path='/CaraPesan' element={<BuyTutorPage/>} />
          <Route path='/InformasiMenu/:id' element={<MenuDetailPage/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
