import { dress } from "../../../Data/dress/dress"
import { men_shirt } from "../../../Data/Men/men_shirt"
import { mens_kurta } from "../../../Data/Men/mens_kurta"
import { shoes } from "../../../Data/shoes"
import HomeSectionCardCarousel from "../../components/Carousel/HomeCarousel/HomeSectionCardscarousel/HomeSectionCardCarousel"
import MainCarousel from "../../components/Carousel/HomeCarousel/MainCarousel/MainCarousel"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function HomePage() {
  return (
    <div>
      <Navbar/>
      <div>
        <MainCarousel />
      </div>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCardCarousel data={dress} sectionName={"Women dress"} />
        <HomeSectionCardCarousel data={men_shirt} sectionName={"Men Shirts"} />
        <HomeSectionCardCarousel data={mens_kurta} sectionName={"Men Kurtas"} />
        <HomeSectionCardCarousel data={shoes} sectionName={"Men Shoes"} />
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
