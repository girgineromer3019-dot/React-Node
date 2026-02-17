import { useState } from 'react'
import './App.css'
//Dubbeger kullanarak kodun hangi satırında olduğunu görebiliriz. Kodun o satırında durur ve o anki değişkenlerin değerlerini inceleyebiliriz. Bu sayede hataları daha kolay bulabiliriz.

function App() {

  const [examen1, setExamen1] = useState(0)
  const [examen2, setExamen2] = useState(0)
  const [average, setAverage] = useState(0)

  const calculateAverage = () => {
    debugger;
    const result = (examen1 + examen2) / 2
    setAverage(result)
  }

  return (
    <>
      <input 
        type="number" 
        value={examen1} 
        onChange={(e) => setExamen1(Number(e.target.value))}
      />

      <input 
        type="number" 
        value={examen2} 
        onChange={(e) => setExamen2(Number(e.target.value))}
      />

      <button onClick={calculateAverage}>
        Calculate Average
      </button>

      <h2>Average: {average}</h2>
    </>
  )
}

export default App
