 import { Link } from 'react-router-dom';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import './Registration.css'

const Registration = ({registration}) => {

    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        registration(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })

    } 

    return (
        <>
            <section className="min-h-screen flex items-stretch text-white ">
                <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: "url('https://www.khejurbd.net/images/category/ajwa%20dates.webp')" }} >
                    <div className="absolute bg-gradient-to-r from-rose-50 via-rose-100 to-rose-50 opacity-90 inset-0 z-0"></div>
                    <div className="w-full px-24 z-10">
                        <h1 className="text-5xl font-bold text-left tracking-wide" style={{ color: "#e07626" }}>Protected Access</h1>
                        <p className="text-3xl my-4" style={{ color: "#e07626" }}>Restricted entry for authorized users to protect their security.</p>
                    </div>
                    <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                        <SocialMedia></SocialMedia>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-gradient-to-r from-rose-100 via-rose-100 to-rose-50"  >
                    <div className="absolute lg:hidden z-10 inset-0 bg-gradient-to-r from-rose-100 via-rose-100 to-rose-50 bg-no-repeat bg-cover items-center" >
                        <div className="absolute bg-gradient-to-r from-rose-100 via-rose-100 to-rose-50   inset-0 z-0"></div>
                    </div>
                    <div className="w-full py-6 z-20 ">
                        <div className="my-6 ">
                            <Link to='/'><img className="w-2/6 mx-auto scale-100 hover:scale-110 hover:ease-in duration-500 ..." src="https://khejurbd.net/images/name%20logo.png" alt="" /></Link>
                        </div>
                        <SocialMedia ></SocialMedia>
                        <p style={{ color: "#e07626" }}>
                            or use email your account
                        </p>
                        <form onSubmit={handleRegistration} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                            <div className="pb-2 pt-4">
                                <input type="text" name="name" id="name" placeholder="Your full name" className="block w-full p-4 text-lg rounded-sm bg-gradient-to-r from-rose-100 via-rose-100 to-rose-50" style={{ border: "1px solid #e07626", color: "#e07626" }} />
                            </div>

                            <div className="pb-2 pt-4">
                                <input type="email" name="email" id="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-gradient-to-r from-rose-100 via-rose-100 to-rose-50" style={{ border: "1px solid #e07626", color: "#e07626" }} />
                            </div>

                            <div className="pb-2 pt-4">
                                <input type="password" name="password" id="password" placeholder="Password" className="block w-full p-4 text-lg rounded-sm bg-gradient-to-r from-rose-100 via-rose-100 to-rose-50" style={{ border: "1px solid #e07626", color: "#e07626" }} />
                            </div>
                            
                            <div className="text-right text-gray-400 hover:underline hover:text-gray-100" style={{ color: "#e07626" }}>
                                <a href="#">Forgot your password?</a>
                            </div>

                             

                            <div className="px-4 pb-2 pt-4">
                                <button className='btn  btn-warning btn-wide' type="submit">Register</button>
                            </div>

                            <p className='' style={{ color: "#e07626" }}>Already have an account ? <span className='text-blue-700 hover:underline'><Link to='/login'>Login Here</Link></span></p>

                            <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                                <SocialMedia></SocialMedia>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Registration;