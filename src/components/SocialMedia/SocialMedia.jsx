 
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';


const SocialMedia = () => {
    return (
        <div className='flex justify-center items-center'> 

           <div className="py-6 space-x-2">
                    <span className="w-10 h-10 items-center text-yellow-600 justify-center inline-flex rounded-full font-bold text-lg " style= {{backgroundColor: "#161616", border: "2px solid #e07626"}}><BsFacebook></BsFacebook></span>
                    <span className="w-10 h-10 items-center text-yellow-600 justify-center inline-flex rounded-full font-bold text-lg " style= {{backgroundColor: "#161616", border: "2px solid #e07626"}}><BsInstagram></BsInstagram> </span>
                    <span className="w-10 h-10 items-center text-yellow-600 justify-center inline-flex rounded-full font-bold text-lg " style= {{backgroundColor: "#161616", border: "2px solid #e07626"}}><BsYoutube></BsYoutube></span>
                </div>

        </div>
    );
};

export default SocialMedia;