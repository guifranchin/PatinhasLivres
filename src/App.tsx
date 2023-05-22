import { Header } from "./components/Header"
import { MainContent } from "./components/MainContent"
import { AboutUs} from "./components/AboutUs"
import { OurPartners } from "./components/OurPartners"
import { PartnerContextProvider } from "./contexts/Partner"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Header />   
      <MainContent/> 
      <AboutUs/>
      <PartnerContextProvider>
        <OurPartners/>
      </PartnerContextProvider>
      <Footer/>
    </>
  )
}

export default App
