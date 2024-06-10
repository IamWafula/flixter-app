import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchSort from './components/searchSort/SearchSort.jsx'
import MovieSection from './components/movieSection/MovieSection.jsx'

import Footer from './components/footer/Footer.jsx'




function App() {

  const [movies, setMovies] = useState([])

  return (
    <div id="App">
      <h1>Flixter App</h1>
      <SearchSort />
      <MovieSection searchTerm="all"  />

      <Footer />
    </div>
  )
}

export default App;
