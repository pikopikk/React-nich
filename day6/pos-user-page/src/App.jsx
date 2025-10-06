import './css/styles.css'
import {Routes, Route} from 'react-router-dom'
import UserHome from './pages/user/UserHome'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<UserHome/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
