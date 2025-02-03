
import Header from "./components/Header.jsx"
import Banner from "./components/Banner.jsx"
import WelcomeMessage from './components/WelcomeMessage.jsx'
import './App.css'


function App() {

  return (
    <>
      <Header />
      <Banner />

      <WelcomeMessage isLoggedIn={false} />
    </>
  )
}

export default App
