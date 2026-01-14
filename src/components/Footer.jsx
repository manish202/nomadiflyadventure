import { SocialMedia } from "./Navbar";
const Footer = () => {
    return(
        <footer>
            <div className="d-flex text-center footer">
                <div className="box">
                    <h2>Opening Hours</h2>
                    <p>
                        Monday - Friday - 9:30am to 6:30pm <br />
                        Saturday - 9:30am to 1:30pm <br />
                        Sunday - Closed                        
                    </p>
                </div>
                <div className="box">
                    <h2>Location</h2>
                    <p>
                        Tshalu Lam <br />
                        Babesa, <br />
                        Thimphu
                    </p>
                </div>
                <div className="box">
                    <h2>Follow Us</h2>
                    <SocialMedia />
                </div>
            </div>
            <div className="text-center credit">
                <h4>© 2026 All Rights Reserved</h4>
            </div>
        </footer>
    )
}
export default Footer;