import "./productCards.css";

const ProductCards = ({ name, image, price }) => {
    return (
        <div className='product_card'>
            <div className="product-image">
                <img src={image} alt={name} loading="lazy" />
            </div>

            <div className="product-title">
                <h3>{name}</h3>
                <i className="ri-shopping-bag-line"></i>
            </div>

            <p>₹{price}</p>
        </div>
    );
};

export default ProductCards;

