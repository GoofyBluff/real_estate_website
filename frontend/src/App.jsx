import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import About from "./pages/About"
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
