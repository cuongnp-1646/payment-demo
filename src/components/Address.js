import React, {Component} from "react";
import classNames from 'classnames'
import _ from "lodash";
import * as Validate from "../models/Validate.js";

class Address extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            address: {},
            successAddress: this.props.successAddress,
        }

		this.handleBlur = this.handleBlur.bind(this);
	}
    handleBlur(event){
        let { address } = this.state;
        let name = event.target.name;
        let value = event.target.value;
        let validate = event.target.dataset.validate;
		_.set(address, name, value)
        this.setState({
			address: address,
        })
        this.props.handleChangeAddress(this.props.type, address);
        this.handleSuccessAddress(validate, address, name);

    }

    handleSuccessAddress(validate, address, key){
		let {successAddress } = this.state;
        switch (validate) {
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
            case 'isEmail':
                successAddress[key] = !_.isEmpty(address[key]) && Validate.isEmail(address[key])
                break;
        
            default:
                successAddress[key] = true
                break;
        }

		this.setState({
			successAddress: successAddress
		})
	}
    render() {
        const { title , successAddress} = this.props;
        return (
            <div>
                <h3>{title}</h3>
                    <div className={classNames('form-group col-md-6 col-sm-6 col-xs-12', (typeof successAddress.firstname == 'undefined' ? '' : (typeof successAddress.firstname != 'undefined' && successAddress.firstname) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="first-name">First name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="first-name" 
                            name="firstname" 
                            data-validate="isName"
                            onBlur={this.handleBlur}
                        />
                        { typeof successAddress.firstname != 'undefined' && !successAddress.firstname  ?
                            <span className="help-block">
                                Valid first name is required.
                            </span>
                        :
                            null
                        }
                    </div>
                    <div className={classNames("form-group col-md-6 col-sm-6 col-xs-12", (typeof successAddress.lastname == 'undefined' ? '' : (typeof successAddress.lastname != 'undefined' && successAddress.lastname) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="last-name">Last name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="last-name" 
                            name="lastname" 
                            data-validate="isName"
                            onBlur={this.handleBlur}
                        />
                        { typeof successAddress.lastname != 'undefined' && !successAddress.lastname  ?
                            <span className="help-block">Valid last name is required.</span>
                        :
                            null
                        }
                        
                    </div>
                    <div className={classNames("form-group  col-md-12 col-sm-12 col-xs-12",(typeof successAddress.username == 'undefined' ? '' : (typeof successAddress.username != 'undefined' && successAddress.username) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="user-name">User name</label>
                        <div className="input-group">
                            <span className="input-group-addon">@</span>
                            <input
                                type="email"
                                className="form-control"
                                id="user-name"
                                name="username" 
                                data-required="isName"
                                placeholder="Username"
                                data-validate="isName"
                                onBlur={this.handleBlur}
                            />
                        </div>
                        { typeof successAddress.username != 'undefined' && !successAddress.username  ?
                            <span className="help-block">Valid username is required.</span>
                        :
                            null
                        }
                        
                    </div>
                    <div className={classNames("form-group col-md-12 col-sm-12 col-xs-12", (typeof successAddress.email == 'undefined' ? '' : (typeof successAddress.email != 'undefined' && successAddress.email) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="email">Email</label>
                        <span> (Optional)</span>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            data-validate="isEmail"
                            onBlur={this.handleBlur}
                            placeholder="you@example.com"/>
                    </div>
                    <div className={classNames("form-group  col-md-12 col-sm-12 col-xs-12",(typeof successAddress.address1 == 'undefined' ? '' : (typeof successAddress.address1 != 'undefined' && successAddress.address1) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address1"
                            data-validate="isAddress"
                            onBlur={this.handleBlur}
                            placeholder="1234 Main St"
                        />
                        { typeof successAddress.address1 != 'undefined' && !successAddress.address1  ?
                            <span className="help-block">Please enter your shipping address.</span>
                        :
                            null
                        }
                        
                    </div>
                    <div className={classNames("form-group  col-md-12 col-sm-12 col-xs-12",(typeof successAddress.address2 == 'undefined' ? '' : (typeof successAddress.address2 != 'undefined' && successAddress.address2) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="address-second">
                            Address 2<span> (Optional)</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address-second"
                            name="address2"
                            data-validate="isAddress"
                            onBlur={this.handleBlur}
                            placeholder="Apartment or suite"
                        />
                    </div>
                    <div className={classNames("form-group col-md-5 col-sm-5 col-xs-12", (typeof successAddress.address1 == 'undefined' ? '' : (typeof successAddress.country != 'undefined' && successAddress.country) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="country">Country</label>
                        <select className="custom-select mr-sm-2" id="country" name="country" onChange={this.handleBlur} data-validate="isNumber">
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        {
                            typeof successAddress.country != 'undefined' && !successAddress.country ? 
                            <span className="help-block">
                                Please select a valid country.
                            </span>
                            :
                                null
                        }
                        
                    </div>
                    <div className={classNames("form-group col-md-4 col-sm-4 col-xs-12", (typeof successAddress.state == 'undefined' ? '' : (typeof successAddress.state != 'undefined' && successAddress.state) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="state">State</label>
                        <select className="custom-select mr-sm-2" id="state" name="state" onChange={this.handleBlur} data-validate="isNumber">
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        { typeof successAddress.state != 'undefined' && !successAddress.state ?
                                <span className="help-block">Please select a valid state.</span>
                            :   
                                null
                        }
                        
                    </div>
                    <div className={classNames("form-group col-md-3 col-sm-3 col-xs-12",(typeof successAddress.zipcode == 'undefined' ? '' : (typeof successAddress.zipcode != 'undefined' && successAddress.zipcode) ? 'has-success' : 'has-error'))}>
                        <label htmlFor="zip">Zip</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="zip" 
                            name="zipcode" 
                            onBlur={this.handleBlur} 
                            data-validate="zipcode"
                        />
                        { typeof successAddress.zipcode != 'undefined' && !successAddress.zipcode ?
                            <span className="help-block">Zip code required.</span>
                        :   
                            null
                        }
                    </div>
            </div>
        )
    }
}
export default Address;