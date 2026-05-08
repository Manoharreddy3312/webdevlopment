import NavBar from "./components/pages/NavBar"
import "./App.css"
import Home from "./components/pages/Home"
import CardsAndHordings from "./components/pages/CardsAndHordings"
import Footer from "./components/pages/Footer"
import BackButton from "./components/pages/BackButton"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <CardsAndHordings/>
      <BackButton/>
      <Footer/>
    </div>
  )
}

export default App