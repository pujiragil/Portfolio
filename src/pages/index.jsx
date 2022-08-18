import Contact from "../components/Contact"
import Featured from "../components/Featured"
import Gallery from "../components/Gallery"
import Product from "../components/Products"
import Profile from "../components/Profile"

const HomePage = () => {
  return (
    <div>
      <Profile/>
      <Featured/>
      <Gallery/>
      <Product/>
      <Contact/>
    </div>
  )
}

export default HomePage