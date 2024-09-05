
import PropTypes from 'prop-types'

function HomeSectionCard({product}) {
    return (
      <div className="cursor-pointer  bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-5">
        <div className="relative w-full h-[20rem]">
          <img
            className="object-cover object-top w-full h-full"
            src={product.imageUrl}
            alt="Product"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
          <p className="mt-2 text-sm text-gray-500">{product.title}</p>
        </div>
      </div>
    );
  }
  HomeSectionCard.propTypes = {
    product: PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };
  export default HomeSectionCard;
  

