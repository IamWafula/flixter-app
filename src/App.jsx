import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchSort from './components/searchSort/SearchSort.jsx'
import MovieSection from './components/movieSection/MovieSection.jsx'

import Footer from './components/footer/Footer.jsx'




function App() {

  const [movies, setMovies] = useState([])

  const [searchTerm, setSearchTerm] = useState('')
  const [searchBy, setSearchBy] = useState('')

  const [sortBy, setSortBy] = useState('')
  const [searchOption, setSearchOption] = useState('')

  const [filterBy, setFilterBy] = useState('')
  const [filterOption, setFilterOption] = useState('')


  useEffect (() => {
    setSearchBy(searchTerm)
    setSortBy(searchOption)
    setFilterBy(filterOption)
  }, [searchTerm, searchBy, searchOption, filterBy, filterOption])


  return (
    <div id="App">
      <h1>Who-lu</h1>
      <SearchSort setSearch={setSearchTerm} setOption={setSearchOption} setFilter={setFilterOption} />
      <MovieSection searchTerm={searchBy} sortOption={sortBy} filterBy={filterBy} />
      <Footer />
    </div>
  )
}

export default App;
