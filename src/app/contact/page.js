import styles from "./page.module.css";
import { Navbar,ContactBox } from "@/components/Navbar";
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
      <ContactBox />
      <img className="contact_hero" src="/images/contact_page_hero.jpg" alt="bottom image" />
      <Footer />
    </>
  )
}
export default Contact;