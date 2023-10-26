import {useState} from 'react'
import GitHub from './GitHub/GitHub'
import './GitHub/GitHub.css'

function App() {
  const[data,setData]=useState(GitHub);
  return (
    <div className='App'>
      
      <section>
        <main>
          <p>Today Birthday {data.length}🤩  </p>
          {data.map((x)=>{
          return(
            <div className='cards' key={x.image}>
              <img src={x.image} alt="" height={'50px'} width={'50px'} ></img>
              <ruby><p>{x.age}</p><rt>{x.name}</rt></ruby>

            </div>
              )
          })}
          <button onClick={()=>setData([])}>clear</button>

        </main>
      </section>
    </div>
  )
}

export default App

