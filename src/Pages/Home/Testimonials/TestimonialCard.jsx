import './TestimonialCard.css'

const TestimonialCard = ({ user }) => {
    const { name, details, rating } = user
    return (
        <div>

            <div className="card scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                <div className="content ">
                    <p className="heading">{name}</p>
                    <p className="para">{details}</p>
                    <p className="para">Rating: {rating}</p>

                </div>
            </div>

        </div>
    );
};

export default TestimonialCard;