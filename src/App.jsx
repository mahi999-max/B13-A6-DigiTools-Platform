import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Tools from "./Components/Tools"

const Promise=async()=>{
  const res=await fetch('/Json.json')
  return res.json();
}
const dataPromise=Promise()
function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Tools dataPromise={dataPromise}></Tools>
     <Footer></Footer>
    </>
  )
}

export default App
