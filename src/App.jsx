import { useLocation } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./App.css"

const App = () => {
  const location = useLocation();

  const hideOnRoutes = ["/login", "/register"];
  const isAccountPage = hideOnRoutes.includes(location.pathname);

  return (
    <>
      <NavBar />
      <MainRoutes />
      {!isAccountPage && <Footer />}
    </>

  )
}

export default App

