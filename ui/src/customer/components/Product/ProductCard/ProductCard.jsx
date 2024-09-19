import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
    let navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate(`/product/${product._id}`)} 
            className="productCard w-[15rem] m-3 border-gray-500 transition-all cursor-pointer"
        >
            <div className="h-[20rem]">
                <img 
                    className="h-full w-full object-cover object-left-top" 
                    src={product.imageUrl} 
                    alt={product.title} 
                />
            </div>
            <div className="textPart bg-transparent p-3">
                <div>
                    <p className="font-bold opacity-80">{product.brand || 'Unknown Brand'}</p>
                    <p>{product.title || 'Unnamed Product'}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold">₹{product.discountPrice || product.price}</p>
                    {product.discountPercent ? (
                        <>
                            <p className="line-through opacity-50">₹{product.price}</p>
                            <p className="text-green-600 font-semibold">{product.discountPercent}% off</p>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string,
        brand: PropTypes.string,
        title: PropTypes.string,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountPrice: PropTypes.number,
        discountPercent: PropTypes.number,
    }).isRequired,
};

export default ProductCard;
