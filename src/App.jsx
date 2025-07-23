import { useLocation } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

const App = () => {
  const location = useLocation();

  const hideOnRoutes = ["/login", "/register"];
  const isAccountPage = hideOnRoutes.includes(location.pathname);

  return (
    <>
      <div className="main_container">
        <NavBar />
        <MainRoutes />
        {!isAccountPage && <Footer />}
      </div>
    </>

  )
}

export default App

