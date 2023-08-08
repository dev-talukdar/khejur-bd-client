import './AllProduct.css'

const AllProduct = () => {
    return (
        <div className="radio-inputs">
            <label className="radio">
                <input type="radio" name="radio" checked=""/>
                    <span className="name">HTML</span>
            </label>
            <label className="radio">
                <input type="radio" name="radio"/>
                    <span className="name">React</span>
            </label>

            <label className="radio">
                <input type="radio" name="radio"/>
                    <span className="name">Vue</span>
            </label>
        </div>
    );
};

export default AllProduct;