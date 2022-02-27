import { Component } from "react";
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/action.js';

class SingleProduct extends Component {
    render() {
        return (
            <>
                <div className="single-product">
                    <img src={this.props.product?.image} />
                    <p>{this.props.product?.title}</p>
                    <p>₹ {this.props.product?.price}</p>
                    {this.props.isPresent?
                        (<button onClick={this.props.deleteProduct}>Remove from Cart</button>)
                        :
                        (<button onClick={this.props.addProduct}>Add to Cart</button>)
                    }
                </div>
            </>
        );
    }
}

//This will map the state to the props <-> To get the value
const mapStateToProps = (state, originalProps) => {
    const currentProductId = originalProps.product.id;
    const cartList = state.products;
    let isPresent = false;
    if(cartList.includes(currentProductId)) {
        isPresent = true;
    }

    return {
        isPresent
    };
};


//This will map the dispatch to the props <-> To set the value
const mapDispatchToProps = (dispatch, originalProps) => {
    const addProduct = () => {
        dispatch(addToCart(originalProps.product));
    };

    const deleteProduct = () => {
        dispatch(removeFromCart(originalProps.product));
    };

    return {
        addProduct,
        deleteProduct
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);