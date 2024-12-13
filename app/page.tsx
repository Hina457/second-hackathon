

import Hero from "../Components/Hero/Hero"
import Feature from "../Components/featureproduct/featureproduct"
import Ourproduct from "../Components/ourproduct/our"
import Shop from "./shop/page"
import Pages from "./pages/page"
import Explore from "../Components/Explore/Explore"
import Contact from "./Contact/page"
export default function Main(){
  return(
    <div>
    <Hero/>
    <Feature/>
    <Explore/>
    <Ourproduct/>
    <Shop/>
    <Pages/>
    <Contact/>
  
    
 
    </div>
  )
}