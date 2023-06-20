// Purpose: Main App component
import React from 'react'
import Navbar from './components/Navbar'
import Place from './components/Place'
import places from './places'

function App() {
  const placesList = places.map((place) => {
    return <Place key={place.id} place={place} />
  })

  return (
    <div className='container'>
      <Navbar />
      <section className="places">
        {placesList}
      </section>
    </div>
  )
}

export default App
