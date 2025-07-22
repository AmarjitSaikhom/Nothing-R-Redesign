import MainRoutes from "./routes/MainRoutes"
import "./App.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <NavBar />
      <div className="main_container">
        <MainRoutes />
      </div>
      <Footer />
    </>

  )
}

export default App

