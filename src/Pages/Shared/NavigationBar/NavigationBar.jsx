import { Link } from "react-router-dom";


const NavigationBar = () => {
    const navOptions = <>
        <li className="font-semibold scale-100  hover:text-yellow-600 ..."><Link>Dates</Link></li>         
        <li><Link className="font-semibold scale-100  hover:text-yellow-600 ...">Peanuts</Link></li>
        <li><Link className="font-semibold scale-100  hover:text-yellow-600 ...">Seeds</Link></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-xl bg-gradient-to-r from-rose-50 via-rose-100 to-rose-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                        </ul>
                    </div>
                    <Link><img className="w-1/6  scale-100 hover:scale-110 hover:ease-in duration-500 ..." src="https://khejurbd.net/images/name%20logo.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btnw btn-sm">Login</a>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;