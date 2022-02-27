import { Component } from "react";
import SingleProduct from "./SingleProduct.js";

class ProductSection extends Component {
    render() {
        return(
            <>
                <div className="product-container">
                    {this.props.products.map((single_product, idx) => {
                        return (
                            <SingleProduct product={single_product} key={idx} />
                        );
                    })}
                </div>
            </>
        );
    }
}

export default ProductSection;