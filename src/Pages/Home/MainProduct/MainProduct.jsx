

const MainProduct = () => {
    return (
        <div className="flex gap-4">

            <div className="card w-96 glass mt-4">
                <figure><img src="https://khejurbd.net/images/category/ajwa%20dates.webp" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Ajwa Dates</h2>
                    <p>3-5 KG Intact Box Available </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning btn-outline btn-sm">See Details</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 glass mt-4">
                <figure><img src="https://khejurbd.net/images/category/almonds.webp" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Almonds</h2>
                    <p>0.5-1 KG Intact Pack Available </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning btn-outline btn-sm">See Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainProduct;