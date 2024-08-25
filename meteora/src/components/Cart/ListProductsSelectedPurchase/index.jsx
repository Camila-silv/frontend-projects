import PropTypes from "prop-types";

export default function ListProductsSelectedPurchase({ children }) {
  return (
    <div className="mx-8 max-h-425 overflow-y-scroll hide-scrollbar">
      {children}
    </div>
  );
}

ListProductsSelectedPurchase.propTypes = {
    children: PropTypes.array
}
