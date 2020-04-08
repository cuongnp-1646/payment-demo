import React, {Component} from "react";
import _ from "lodash";
import Address from "./Address.js";
import Payment from "./Payment.js";
import * as Validate from "../models/Validate.js";
class LeftContent extends Component {
	constructor() {
	    super(...arguments);
	    
	    this.state = {
	    	billingAddress: {},
			invoiceAddress: {},
			successAddress:{},
			validateAddress: {
				firstname: 'isName',
				lastname: 'isName',
				username: 'isName',
				email: '',
				address1: 'isAddress',
				address2: '',
				country: 'isNumber',
				state: 'isNumber',
				zipcode: 'isPostCode',
			},
			invoiceSameBillingAddress: true,
			saveInformation: false,
			selectedPayment: 'creditCard',
			paymentInfo:{},
			validatePayment: {
				cardName: 'isName',
				cardNumber: 'isNumber',
				cardExpiration: 'isDate',
				cardCode: 'isNumber',
			},
			successPayment:{},
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeAddress = this.handleChangeAddress.bind(this);
		this.handleChangePaymentInfo = this.handleChangePaymentInfo.bind(this);
		this.handleCheckout = this.handleCheckout.bind(this);
		
	}
	handleChange(event){
		this.setState({
			[`${event.target.name}`]: !this.state[`${event.target.name}`],
		})
	}
	handleChangeAddress(type, address){
		this.setState({
			[`${type}`]: address
		});
	}
	handleChangePaymentInfo(paymentInfo){
		this.setState({
			paymentInfo: paymentInfo
		});
	}

	handleCheckout(){
		this.handleSuccessAddress(this.state.billingAddress);	
		this.handleSuccessPayment();	
	}

	handleSuccessAddress(address){
		let { validateAddress, successAddress } = this.state;

		_.forEach(validateAddress, function(value, key) {
			switch (value) {
				case 'isName':
					successAddress[key] = !_.isEmpty(address[key]) && Validate.isName(address[key]);
					break;

				case 'isAddress':
					successAddress[key] = !_.isEmpty(address[key]) && Validate.isAddress(address[key])
					break;

				case 'isNumber':
					successAddress[key] = !_.isEmpty(address[key]) && Validate.isNumber(address[key])
					break;

				case 'isPostCode':
					successAddress[key] = !_.isEmpty(address[key]) && Validate.isPostCode(address[key])
					break;
			
				default:
					successAddress[key] = true
					break;
			}
		});

		this.setState({
			successAddress: successAddress
		})
	}
	handleSuccessPayment(){
		let { validatePayment, successPayment, paymentInfo } = this.state;

		_.forEach(validatePayment, function(value, key) {
			switch (value) {
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
		});

		this.setState({
			successPayment: successPayment
		})
	}
	render() {
		const { invoiceSameBillingAddress, selectedPayment, saveInformation, requiredAddress, billingAddress, invoiceAddress, successAddress , successPayment} = this.state;
		return (
				<div className="col-md-8 col-sm-12 col-xs-12 left-container">
					<Address 
						title="Billing address" 
						type="billingAddress" 
						address={billingAddress}  
						successAddress={successAddress}  
						handleChangeAddress={this.handleChangeAddress}
					/>
					{
						invoiceSameBillingAddress ? 
							null
						:
						<Address 
							title="Invoice address" 
							type="invoiceAddress" 
							address={billingAddress}  
							successAddress={successAddress}  
							handleChangeAddress={this.handleChangeAddress}
						/>
					}
					<div className="col-md-12 col-sm-12 col-xs-12 ">
						<div className="checkbox-group was-validated">
							<div className="custom-control custom-checkbox mb-3">
								<input type="checkbox" className="custom-control-input" id="checkbox-1" onClick={this.handleChange} name="invoiceSameBillingAddress" defaultChecked={invoiceSameBillingAddress} />
								<label className="custom-control-label" htmlFor="checkbox-1">
									Shipping address is the same as my billing address
								</label>
							</div>
							<div className="custom-control custom-checkbox mb-3">
								<input type="checkbox" className="custom-control-input" id="checkbox-2" onClick={this.handleChange} name="saveInformation" defaultChecked={saveInformation}/>
								<label className="custom-control-label" htmlFor="checkbox-2">
									Save this information for next time
								</label>
							</div>
						</div>
						<Payment
							selectedPayment= {selectedPayment}
							successPayment= {successPayment}
							handleChangePaymentInfo = {this.handleChangePaymentInfo}
						/>
					</div>
					<div className="form-group col-md-12 col-sm-12 col-xs-12 button-wrapper">
						<button className="btn btn-primary" onClick={this.handleCheckout}>
							Continue to checkout
						</button>
					</div>
				
				</div>
				
			
		);
	}
}

export default LeftContent;
