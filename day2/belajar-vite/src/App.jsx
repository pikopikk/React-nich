import { useState } from 'react'
import MyApp from './components/header'

function App() {
  const students = [
            {
                'nama' : 'adul',
                'id' : '1'
            },
            {
                'nama' : 'senpi',
                'id' : '2'
            }
          ]
          const [likes, setLikes] = useState(0)

          function handleClick(){
            setLikes(likes + 1)
          }

          return (
            <>
                <MyApp name="adul"/>
                <MyApp/>
                <h1>
                  ahuy   
                </h1>

                <ul>
                  {
                      students.map((student)=>(
                        <li key={student.id}>{student.nama}</li>
                      ))
                  }   
                </ul>

                <button onClick={handleClick}>
                      Like ({likes})
                </button>
            </>
          )
}

export default App
