
import Header from "./components/Header.jsx"
import Banner from "./components/Banner.jsx"
import User from "./components/User.jsx"
import Footer from "./components/Footer.jsx"

import MovieList from "./components/MovieList.jsx"


function App() {

  return (
    <>
      <Header title="Hello world!" />
      <Banner />

      <User userName="Alice" age={30} />
      <User userName="Bob" age={40} />
      <User userName="Charlie" age={50} />

      <MovieList />

      <Footer message="hello world">
        <p>Ironhack processTrusters, 2025</p>
      </Footer>


    </>
  )
}

export default App
