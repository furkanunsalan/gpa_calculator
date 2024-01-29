// eslint-disable-next-line no-unused-vars
import Calculator from "./components/Calculator.jsx";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx";
import Entry from "./components/Entry.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
    return <>
        <SpeedInsights/>
        <Navbar/>
        <Entry/>
        <Calculator/>
        <Footer/>
    </>
}

export default App;
