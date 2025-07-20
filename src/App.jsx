import MainRoutes from "./routes/MainRoutes"
import "./App.css"
import NavBar from "./components/NavBar"
import Footer from "./components/NavBar"

const App = () => {
  return (
    <div className="main_container">
      <NavBar />
      <MainRoutes />
    </div>
  )
}

export default App

