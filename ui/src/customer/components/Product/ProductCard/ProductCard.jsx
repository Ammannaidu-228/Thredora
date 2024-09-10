import { useNavigate } from 'react-router-dom';
import './ProductCard.css'
import PropTypes from 'prop-types';

function ProductCard({product}) {
    let navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 border-gray-500 tansitition-all cursor-pointer">
         
            <div className="h-[20rem]">
                <img className=" h-full w-full object-cover object-left-top" src={product.imageUrl}></img>
            </div>
            <div className="textPart bg-transparent p-3">
                <div>
                    <p className="font-bold opacity-80">{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold">₹{product.discountedPrice}</p>
                    <p className="line-through opacity-50">₹{product.price}</p>
                    <p className="text-green-600 font-semibold">{product.disscount}% off</p>
                </div>
            </div>
        </div>
    )
}
ProductCard.propTypes = {
    product: PropTypes.objectOf(
      PropTypes.shape({
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imageUrl:PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountedPrice: PropTypes.number.isRequired,
        disscount: PropTypes.number.isRequired,
      }).isRequired
    ),
  };

export default ProductCard
