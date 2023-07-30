 

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <hr className="border-1 border-yellow-600 cursor-pointer hover:border-red-800 duration-500 mt-8" />
            <h3 className="text-4xl uppercase text-yellow-600  py-4 ">{heading}</h3>
            <hr className="border-1 border-yellow-600 cursor-pointer hover:border-red-800 duration-500 mt-3" />
            
        </div>
    );
};

export default SectionTitle;