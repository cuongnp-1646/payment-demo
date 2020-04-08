import React, {Component} from "react";
import classNames from 'classnames'
import _ from "lodash";
import * as Validate from "../models/Validate.js";

class Payment extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedPayemnt: {},
            paymentInfo: {},
            successPayment: this.props.successPayment,
        }

		this.handleBlur = this.handleBlur.bind(this);
	}
    handleBlur(event){
        let { paymentInfo } = this.state;
        let name = event.target.name;
        let value = event.target.value;
        let validate = event.target.dataset.validate;
       
		_.set(paymentInfo, name, value)
        this.setState({
			paymentInfo: paymentInfo,
        })
        
        this.props.handleChangePaymentInfo(paymentInfo);
        this.handleSuccessPaymentInfo(validate, paymentInfo, name);

    }

    handleSuccessPaymentInfo(validate, paymentInfo, key){
		let {successPayment } = this.state;
        switch (validate) {
            case 'isName':
                successPayment[key] = !_.isEmpty(paymentInfo[key]) && Validate.isName(paymentInfo[key]);
                break;
            case 'isNumber':
                successPayment[key] = !_.isEmpty(paymentInfo[key]) && Validate.isNumber(paymentInfo[key])
                break;
          
            case 'isDate':
                successPayment[key] = !_.isEmpty(paymentInfo[key]) && Validate.isNumber(paymentInfo[key])
                break;
        
        }

		this.setState({
			successPayment: successPayment
		})
	}
    render() {
        const {selectedPayment, successPayment } = this.props;
        return (
            <div>
                <div className="col-md-12 col-sm-12 col-xs-12 radio-group was-validated">
                    <h3>Payment</h3>
                    <div className="custom-control custom-radio mb-3">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="radio-first"
                            name="payment"
                            defaultChecked={selectedPayment == 'creditCard'}
                            value='creditCard'
                        />
                        <label className="custom-control-label" htmlFor="radio-first">
                            Credit card
                        </label>
                    </div>
                    <div className="custom-control custom-radio mb-3">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="radio-second"
                            name="payment"
                            defaultChecked={selectedPayment == 'debitCard'}
                            value='debitCard'
                        />
                        <label className="custom-control-label" htmlFor="radio-second">
                            Debit card
                        </label>
                    </div>
                    <div className="custom-control custom-radio mb-3">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="radio-third"
                            name="payment"
                            defaultChecked={selectedPayment == 'paypal'}
                            value='paypal'
                            />
                        <label className="custom-control-label" htmlFor="radio-third">
                            Paypal
                        </label>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 card-container">
                    <div className={classNames("form-group col-md-6 col-sm-6 col-xs-12 card-name", (typeof successPayment.cardName == 'undefined' ? '' : (typeof successPayment.cardName != 'undefined' && successPayment.cardName) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="name">Name on card</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name"
                            name="cardName"
                            data-validate="isName"
                            onBlur={this.handleBlur}
                        />
                        <span>Full name as displayed on card</span>
                        {
                            typeof successPayment.cardName != 'undefined' && !successPayment.cardName ? 
                                <span className="help-block">Name on card is required</span>
                            :       
                                null
                        }
                        
                    </div>
                    <div className={classNames("form-group col-md-6 col-sm-6 col-xs-12",  (typeof successPayment.cardNumber == 'undefined' ? '' : (typeof successPayment.cardNumber != 'undefined' && successPayment.cardNumber) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="card-number">Credit card number</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="card-number"
                            name="cardNumber"
                            data-validate="isNumber"
                            onBlur={this.handleBlur}
                        />
                        {
                            typeof successPayment.cardNumber != 'undefined' && !successPayment.cardNumber ? 
                                <span className="help-block">Credit card number is required</span>
                            :       
                                null
                        }
                        
                    </div>
                </div>
                <div className={classNames("form-group col-md-3 col-sm-3 col-xs-12", (typeof successPayment.cardExpiration == 'undefined' ? '' : (typeof successPayment.cardExpiration != 'undefined' && successPayment.cardExpiration) ? 'has-success' : 'has-error'))}>
                    <label htmlFor="expiration">Expiration</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="expiration"
                        name="cardExpiration"
                        data-validate="isDate"
                        onBlur={this.handleBlur}
                    />
                    {
                        typeof successPayment.cardExpiration != 'undefined' && !successPayment.cardExpiration ? 
                            <span className="help-block">Expiration date required</span>
                        :
                            null
                    }
                   
                </div>
                <div className={classNames("form-group col-md-3 col-sm-3 col-xs-12", (typeof successPayment.cardCode === 'undefined' ? '' : (typeof successPayment.cardCode != 'undefined' && successPayment.cardCode) ? 'has-success' : 'has-error'))}>
                    <label htmlFor="cvv">CVV</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="cvv"
                        name="cardCode"
                        data-validate="isNumber"
                        onBlur={this.handleBlur}
                    />
                    {
                        typeof successPayment.cardCode != 'undefined' && !successPayment.cardCode ? 
                            <span className="help-block">Security code required.</span>
                        :
                            null
                    }
                    
                </div>
            </div>
        )
    }
}
export default Payment;