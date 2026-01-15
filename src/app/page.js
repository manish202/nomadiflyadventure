import styles from "./page.module.css";
import { Navbar,ContactBtn,ContactBox } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home - nomadifly adventure",
}

const card_data = [
  {id:1,font:"fa-solid fa-dove",title:"Bird Watching",desc:"Perfect for nature lovers! Bhutan is a birding paradise with over 700 bird species, including the endangered Black-necked Crane in Phobjikha Valley."},
  {id:2,font:"fa-solid fa-mountain-sun",title:"Mountain Biking",desc:"For thrill-seekers, ride through rugged terrain, valleys, and winding mountain roads while soaking in Bhutan’s breathtaking scenery."},
  {id:3,font:"fa-solid fa-users",title:"Cultural",desc:"Dive into Bhutan’s heritage by visiting dzongs, monasteries, and festivals, and engaging with local customs and traditional arts."},
  {id:4,font:"fa-solid fa-house-chimney",title:"Pilgrimage",desc:"A spiritual journey to Bhutan’s sacred sites, such as the Taktsang Monastery (Tiger’s Nest) and Kurjey Lhakhang, combining faith with spectacular views."},
  {id:5,font:"fa-solid fa-child-reaching",title:"Trekking",desc:"Explore stunning landscapes, high-altitude trails, and scenic views. Bhutan offers iconic treks like the Snowman Trek or the Druk Path Trek, ideal for adventurers."},
  {id:6,font:"fa-solid fa-tree",title:"Nature",desc:"Connect with Bhutan’s pristine environment, from lush valleys to protected parks like Jigme Dorji National Park, home to diverse flora and fauna."},
]

const Card = ({font,title,desc}) => {
  return (
    <div className="text-center card">
      <i className={font}></i>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="d-flex main-box odd">
        <div className="box">
          <h1>Welcome to the Kingdom of Bhutan.</h1>
          <p>At Nomadifly Adventure, we don't just guide you through the Himalayas; we invite you to experience the soul of the Land of the Thunder Dragon. As a premier travel specialist based in Thimphu, we craft bespoke tours and treks that honor the kingdom’s traditions while fueling your spirit of discovery. Join us to witness a land where happiness is a philosophy and every vista is a masterpiece. Bhutan: Believe—and let us be the heartbeat of your next breathtaking adventure.</p>
          <ContactBtn />
        </div>
        <div className="box">
          <img src="/images/home_page_hero5.jpg" alt="Welcome to the Kingdom of Bhutan." />
        </div>
      </section>
      <div className="d-flex hero_images">
        <img src="/images/home_page_hero2.jpg" alt="bottom image 1" />
        <img src="/images/home_page_hero3.jpg" alt="bottom image 2" />
        <img src="/images/home_page_hero4.jpg" alt="bottom image 3" />
      </div>
      <div className="main-box text-center">
        <h1>Tours & Treks</h1>
      </div>
      <div className="d-flex trek_cards">
        {card_data.map(obj => <Card key={obj.id} {...obj} />)}
      </div>
      <section className="d-flex main-box even">
        <div className="box">
          <h1>Bhutan: The Kingdom of the Clouds</h1>
          <p>Nestled within the rugged peaks of the Eastern Himalayas, Bhutan—traditionally known as Druk Yul or the "Land of the Thunder Dragon"—is a serene sanctuary of tradition and nature. Bordered by the giants of China and India, this landlocked kingdom transitions dramatically from lush subtropical forests in the south to the jagged, snow-capped giants of the north. Among these is Gangkhar Puensum, a peak that remains the highest unclimbed mountain on Earth, a testament to the nation’s deep respect for the sanctity of the mountains.</p>
          <p>The heartbeat of Bhutan is Vajrayana Buddhism. It is not merely a religion but the foundation of the nation&rsquo;s identity, influencing everything from the intricate architecture of its cliffside monasteries to its unique system of governance. While most nations measure success through financial metrics, Bhutan famously pioneers the philosophy of Gross National Happiness (GNH). This visionary approach ensures that spiritual well-being, cultural preservation, and environmental health are never sacrificed for the sake of economic gain.</p>
          <p>As a democratic constitutional monarchy, Bhutan maintains a delicate balance between the revered leadership of the King and the administrative duties of the Prime Minister. The capital, Thimphu, serves as the perfect microcosm of this balance. Here, the absence of traffic lights and the presence of the towering Buddha Dordenma statue reflect a city that is modernizing without losing its soul.</p>
          <ContactBtn />
        </div>
        <div className="box">
          <img src="/images/home_page_hero.jpg" alt="Bhutan: The Kingdom of the Clouds" />
        </div>
      </section>
      <ContactBox />
      <br /><br />
      <Footer />
    </>
  )
}
export default Home;