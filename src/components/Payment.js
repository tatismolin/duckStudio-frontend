// import React, {Component} from "react";
// import {CardElement, injectStripe, ReactStripeElements} from "react-stripe-elements";

// class Payment extends Component{

//     state = {
//         name: " ",
//         amount: " "
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         try{
//             let token = this.props.stripe.createToken({
//                 name: this.state.name
//             });
//             console.log(token)
//         }catch (error) {
//             throw error;
//         }
//     };

//     render(){
//         const {name, amount} = this.state;
//         return(
//             <form className="payment-form">
//                 <div 
//                     className="form-content"
//                     onSubmit={(event) => this.handleSubmit(event)}>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={(event) => this.setState({
//                             name: event.target.value
//                         })}>
//                     </input>

//                     <label>Amount</label>
//                     <input
//                         type="integer"
//                         value={amount}
//                         onChange={(event) => this.setState({
//                             amount: event.target.value
//                         })}>
//                     </input>
//                 </div>
//                 <label>CC Number -- Exp. Date -- CVC</label>
//                 <CardElement />

//                 <button>Submit Payment</button>
//             </form>
//         );
//     };

// };

// export default Payment;