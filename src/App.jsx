import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import experiences from './data/experiences'

import './App.scss'

function App() {
  const main = experiences.map(experience => <Card key={experience.id} {...experience} />)

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <main className='experiences'>
        {main}
      </main>
    </div>
  )
}

export default App
