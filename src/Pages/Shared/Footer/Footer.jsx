import { Link } from "react-router-dom"; 
import SocialMedia from "../../../components/SocialMedia/SocialMedia";


const Footer = () => {
    return (
        
         
        <footer className="bg-gradient-to-r from-rose-50 via-rose-100 to-rose-50">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <Link to='/'><img src="https://khejurbd.net/images/full%20logos.png" className="mr-5 h-20 sm:h-30 scale-100 hover:scale-110 hover:ease-in duration-500 ..." alt="logo" /></Link>
                        <p className="max-w-xs mt-4 text-sm text-gray-600 font-semibold" style={{  color: "#e07626" }}>
                        Khejur BD<br />Bringing the premium khejur to  <br /> Every Corner of Bangladesh since 2020.
                        </p>
                        <div className="flex mt-8 space-x-6 text-gray-600">
                         <SocialMedia></SocialMedia>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium" style={{  color: "#e07626" }}>
                               Dates
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm" style={{  color: "#e07626" }}>
                                <Link className="hover:text-indigo-500 font-semibold" > Ajwa </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Amber </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Mariyam </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Medjool </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Safawi Kalmi </Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium" style={{  color: "#e07626" }}>
                                Peanuts
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm " style={{  color: "#e07626" }}>
                                <Link className="hover:text-indigo-500 font-semibold" > Almonds </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Cashews </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Pistachios </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Thai Peanuts </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Walnuts </Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium" style={{  color: "#e07626" }} >
                                Seeds
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm " style={{  color: "#e07626" }}>
                                <Link className="hover:text-indigo-500 font-semibold" > Chia Seeds </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Pumpkin Seeds </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Sunflower Seeds </Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium" style={{  color: "#e07626" }}>
                                Legal
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm " style={{  color: "#e07626" }}>
                                <Link className="hover:text-indigo-500 font-semibold" > Contact Us </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Store Location </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Privacy Policy </Link>
                                <Link className="hover:text-indigo-500 font-semibold" > Returns Policy </Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <p className="mt-8 text-xs text-gray-800 text-center font-semibold" style={{  color: "#e07626" }}>
                Copyright © 2020-2028 - All right reserved by Khejur BD
                </p>
            </div>
        </footer>
    );
};

export default Footer;