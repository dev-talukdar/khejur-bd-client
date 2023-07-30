import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TestimonialCard from "./TestimonialCard";

 

const Testimonials = () => {
    const [userReview, setUserReview] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setUserReview(data) )
    }, [])

    return (
        <section>
            <SectionTitle
            subHeading={'Our client says about'}
            heading={'Our Products'}
            ></SectionTitle>

<div className="grid md:grid-cols-2 gap-4">
                {
                    userReview.map(user => <TestimonialCard
                    key={user._id}
                    user={user}
                    ></TestimonialCard>)
                }
            </div>
            
        </section>
    );
};

export default Testimonials;