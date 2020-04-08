import React, {Component} from "react";

class RightContent extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-12 col-xs-12 right-container">
                <div className="your-cart-title">
                    <h3>Your cart</h3>
                    <span className="cart-number">3</span>
                </div>
                <div className="your-cart-info">
                    <div className="col-md-12 col-sm-12 col-xs-12 info-block">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <h4>Product name</h4>
                            <span>Brief description</span>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 text-right">
                            <span className="money">$12</span>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 info-block">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <h4>Second product</h4>
                            <span>Brief description</span>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 text-right">
                            <span className="money">$8</span>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 info-block">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <h4>Third item</h4>
                            <span>Brief description</span>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 text-right">
                            <span className="money">$5</span>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 info-block code">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <h4>Promo code</h4>
                            <span>Examplecode</span>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 text-right">
                            <span className="money">-$5</span>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 info-block total">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <h4>Total (USD)</h4>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 text-right">
                            <span className="money">$20</span>
                        </div>
                    </div>
                </div>
                <div className="your-cart-info promo-code">
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control" placeholder="Promo code"/>
                        <label className="input-group-btn">
                            <button type="button" className="btn btn-info btn-flat">
                                Redeem
                            </button>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
export default RightContent;