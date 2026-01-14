import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact - nomadifly adventure",
}

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="main-box text-center">
        <h1>Contact Us</h1>
      </div>
      <form className="contact-form" action="https://formspree.io/f/xaqqnyjb" method="POST">
        <div className="input-group">
          <label>Your email:</label>
          <input type="email" name="email" placeholder="Your email" />
        </div>
        <div className="input-group">
          <label>Your message:</label>
          <textarea name="message" placeholder="Your message" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="d-flex contact-box">
        <div className="contact-card">
          <h3><i className="fa-solid fa-envelope"></i> EMAIL US</h3>
          <p>info@nomadiflyadventure.com</p>
        </div>
        <div className="contact-card">
          <h3><i className="fa-solid fa-phone"></i> CALL US</h3>
          <p>+975 16108691</p>
        </div>
        <div className="contact-card">
          <h3><i className="fa-solid fa-location-dot"></i> ADDRESS</h3>
          <p>Tshalu Lam, Babesa, Thimphu</p>
        </div>
      </div>
      <img className="contact_hero" src="/images/contact_page_hero.jpg" alt="bottom image" />
      <Footer />
    </>
  )
}
export default Contact;