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
            <SocialIcon label="instagram icon" url="https://www.instagram.com/annu.sia/" cls="fa-brands fa-instagram" />
            <SocialIcon label="threads icon" url="https://www.threads.com/@annu.sia" cls="fa-brands fa-threads" />
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
                <Link href="/" className="logo"><img src="/images/logo.png" alt="logo" /></Link>
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
export {SocialMedia,ContactBtn,Navbar}