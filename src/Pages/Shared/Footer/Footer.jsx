import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img className="w-2/4" src="https://khejurbd.net/images/full%20logos.png" alt="" />
                    <p>Khejur BD<br />Bringing the premium khejur to Every <br /> Corner of Bangladesh since 2020.</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link className="text-xl scale-100 hover:scale-110 hover:ease-in duration-500 hover:text-orange-400 ..."><BsFacebook></BsFacebook></Link>
                        <Link className="text-xl scale-100 hover:scale-110 hover:ease-in duration-500 hover:text-orange-400 ..."><BsInstagram></BsInstagram></Link>
                        <Link className="text-xl scale-100 hover:scale-110 hover:ease-in duration-500 hover:text-orange-400 ..."><BsYoutube></BsYoutube></Link>
                    </div>
                </div>
            </footer>
            <div className="text-center bg-neutral text-white pb-6">
                <p>Copyright © 2020-2028 - All right reserved by Khejur BD</p>
            </div>
        </div>
    );
};

export default Footer;