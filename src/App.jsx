import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'

function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goals, setGoals] = useState('strength_power')

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({poison, muscles, goals})
    setWorkout(newWorkout)

    window.location.href = '#designworkout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm:text-base'>
      <Hero />
      <Generator 
        poison={poison} 
        setPoison={setPoison} 
        muscles={muscles} 
        setMuscles={setMuscles} 
        goals={goals} 
        setGoals={setGoals}
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
