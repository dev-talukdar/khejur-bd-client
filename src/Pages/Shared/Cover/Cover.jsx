

const Cover = ({img, title}) => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5 font-semibold">Delighting Taste Buds Since 2020: Discover the Essence of Nature with Our Premium Dried Fruits! Experience the Finest Selection of Nutritious Delicacies, Handpicked and Packed with Love, Straight from the Heart of Bangladesh.</p>
                     
                </div>
            </div>
        </div>
    );
};

export default Cover;