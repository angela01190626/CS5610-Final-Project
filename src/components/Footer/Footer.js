import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer-root d-flex flex-column">
            ShopEazy.com. 2021-2099 &copy; All right reserved.<br/>
            <div className="d-flex justify-content-center pt-1">
                <Link to = "/privacypolicy" className="footer-link">Privacy Policy</Link><br/>
                
            </div>
        </div>
    )
}
export default Footer;