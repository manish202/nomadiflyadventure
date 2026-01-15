"use client";
import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";

const SocialIcon = ({url,cls,label}) => <a aria-label={label} className="btn" href={url} target="_blank"><i className={cls}></i></a>;
const MenuItem = ({path,name}) => {
    let pathname = usePathname();
    return <li><Link className={`${pathname == path ? 'active':''}`} href={path}>{name}</Link></li>;
}
const SocialMedia = () => {
    return(
        <div className="social-media">
            <SocialIcon label="instagram icon" url="https://www.instagram.com/nomadifly" cls="fa-brands fa-instagram" />
            <SocialIcon label="facebook icon" url="https://www.facebook.com/share/1Aw7YAaPXV/" cls="fa-brands fa-facebook" />
            <SocialIcon label="location icon" url="https://maps.app.goo.gl/fx1oyQaNd5DGA7XMA" cls="fa-solid fa-location-dot" />
            <SocialIcon label="email icon" url="mailto:contactannusia@gmail.com" cls="fa-solid fa-at" />
            <SocialIcon label="whatsapp icon" url="https://wa.me/+919289262706" cls="fa-brands fa-whatsapp" />
        </div>
    )
}
const ContactBtn = () => <Link aria-label="contact button" href="/contact" className="btn book-btn"><i className="fa-regular fa-address-card"></i> contact us</Link>;
const Navbar = () => {
    let [toggle,updtToggle] = useState(false);
    return(
        <>
            <header className="d-flex header">
                <button onClick={() => updtToggle(!toggle)} type="button" className="btn toggle-btn"><i className="fa-solid fa-bars"></i></button>
                <Link href="/" className="d-flex logo">
                    <img src="/images/logo.png" alt="logo" />
                    <i>An adventure of a lifetime in Bhutan</i>
                </Link>
                <SocialMedia />
                <ContactBtn />
            </header>
            <nav className={`nav-menu ${toggle ? 'active':''}`}>
                <button onClick={() => updtToggle(!toggle)} type="button" className="btn toggle-btn"><i className="fa-solid fa-close"></i></button>
                <ul className="d-flex">
                    <MenuItem path="/" name="home" />
                    <MenuItem path="/tours" name="tours" />
                    <MenuItem path="/about" name="about" />
                    <MenuItem path="/contact" name="contact" />
                    <MenuItem path="/faq" name="FAQ" />                    
                </ul>
            </nav>
        </>
    )
}
const FaqCard = ({title,desc}) => {
  let [toggle,updtToggle] = useState(false);
  return(
    <div className="card">
      <div className="d-flex faq-title" onClick={() => updtToggle(!toggle)}>
        <h3>{title}</h3>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className={`faq-desc ${toggle ? 'active':''}`}>{desc}</div>
    </div>
  )
}
const ContactBox = () => {
    return (
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
    )
}
export {SocialMedia,ContactBtn,Navbar,FaqCard,ContactBox}