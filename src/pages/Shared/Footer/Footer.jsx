import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter, faGooglePlusG, faYoutube} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='footer-main'>
            <div className="main">
                <div className="flex flex-rows gap-8 justify-center pt-5">
                    <Link className="text-white"><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link className="text-white"><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link className="text-white"><FontAwesomeIcon icon={faTwitter} /></Link>
                    <Link className="text-white"><FontAwesomeIcon icon={faGooglePlusG} /></Link>
                    <Link className="text-white"><FontAwesomeIcon icon={faYoutube} /></Link>
                </div>
                <div className="flex flex-rows justify-center gap-10 pt-5">
                    <Link to='/aboutUs' className="text-white">About us</Link>
                    <Link className="text-white">Contact us</Link>
                    <Link className="text-white">News</Link>
                    <Link className="text-white">Our Team</Link>
                    <Link className="text-white">Affiliate</Link>
                </div>
                <div className="flex flex-rows justify-center pt-5 pb-5">
                    <p className="text-white">&copy; 2024 Hobby Tobby. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;