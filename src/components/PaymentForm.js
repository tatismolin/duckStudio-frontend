



// import React from 'react';
// import {injectStripe, CardElement} from 'react-stripe-elements';

// class PaymentForm extends React.Component {

//   state = {
//     amount: "100",
//     paymentMethod: "card"
//   };

//   async handleSubmit(event){
//     let chargeToken = await this.props.stripe.createToken({name: "Name"})
//     let charge = {
//       token: chargeToken.token.id,
//       amount: this.state.amount,
//       paymentMethod: this.state.paymentMethod
//     }
//     let response = await fetch("http://localhost:3000/charges", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         charge: charge,
//         amount: this.state.amount,
//         paymentMethod: this.state.paymentMethod
//       })
//     })
//     if(response.ok){
//       console.log("Purchase Complete!")
//     }else{
//       console.log("Purchase NOT Complete!")
//     }
//   };

//   render() {
//     return (
//       <form onSubmit={() => this.handleSubmit()}>
//         Card details
//         <label>Name</label>
//         <input type="text"></input>

//         <label>Amount</label>
//         <input type="text"></input>

//         <CardElement style={{base: {fontSize: '18px'}}} />
        
//         <button>PAY</button>
//       </form>
//     );
//   };
// }

// export default injectStripe(PaymentForm);