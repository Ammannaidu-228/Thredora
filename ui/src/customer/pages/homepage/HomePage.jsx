import { dress } from "../../../Data/dress/dress"
import { mens_kurta } from "../../../Data/Men/men_kurta"
import { men_shirt } from "../../../Data/Men/men_shirt"
import { shoes } from "../../../Data/shoes"
import HomeSectionCardCarousel from "../../components/Carousel/HomeCarousel/HomeSectionCardscarousel/HomeSectionCardCarousel"
import MainCarousel from "../../components/Carousel/HomeCarousel/MainCarousel/MainCarousel"

function HomePage() {
  return (
    <div>
      <div>
        <MainCarousel />
      </div>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCardCarousel data={dress} sectionName={"Women dress"} />
        <HomeSectionCardCarousel data={men_shirt} sectionName={"Men Shirts"} />
        <HomeSectionCardCarousel data={mens_kurta} sectionName={"Men Kurtas"} />
        <HomeSectionCardCarousel data={shoes} sectionName={"Men Shoes"} />
      </div>

    </div>
  )
}

export default HomePage
