import styles from "./page.module.css";
import tours_data from "./tours_data.js";
import { Navbar, ContactBtn } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tours - nomadifly adventure",
}

const Itinerary = ({title,desc}) => {
  return (
    <div className="itinerary">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

const MainBox = ({data}) => {
  const {title,days,image,dir_class,inclusion,exclusion,itinerary} = data;
  return(
      <section className={`d-flex main-box ${dir_class}`}>
        <div className="box">
          <h1>{title}</h1>
          <h2>{days}</h2>
          <br />
          <h2>Inclusion</h2>
          <ul>{inclusion.map((val,ind) => <li key={ind}>{val}</li>)}</ul>
          <br />
          <h2>Exclusion</h2>
          <ul>{exclusion.map((val,ind) => <li key={ind}>{val}</li>)}</ul>
          <br />
          <h2>Itinerary</h2>
          {itinerary.map((val,ind) => <Itinerary key={ind} {...val} />)}
          <ContactBtn />
        </div>
        <div className="box">
          <img src={`/images/${image}`} alt={title} />
        </div>
      </section>
  )
}

const Tours = () => {
  return (
    <>
      <Navbar />
      {tours_data.map(data => <MainBox key={data.id} data={data} />)}
      <div className="text-center extra_info">
        <h1>Do you want us to customize your tour ? Contact us.</h1>
        <ContactBtn />
      </div>
      <Footer />
    </>
  )
}
export default Tours;