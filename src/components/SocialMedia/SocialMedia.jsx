 
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const SocialMedia = () => {
    return (
        <div className='flex justify-center items-center'> 

           <div className="py-6 space-x-2">
                    <Link className="w-10 h-10 items-center  justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-in duration-200 " style= {{ border: "2px solid #e07626", color: "#e07626" }}><BsFacebook></BsFacebook></Link>
                    <Link className="w-10 h-10 items-center  justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-in duration-200 " style= {{ border: "2px solid #e07626", color: "#e07626" }}><BsInstagram></BsInstagram> </Link>
                    <Link className="w-10 h-10 items-center  justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-in duration-200 " style= {{ border: "2px solid #e07626", color: "#e07626" }}><BsYoutube></BsYoutube></Link>
                </div>

        </div>
    );
};

export default SocialMedia;