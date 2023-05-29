// import React, { useEffect, useState } from 'react';
// import { loadScript } from "@paypal/paypal-js";

// export default function PayPalButton() {
//   const [scriptLoaded, setScriptLoaded] = useState(false);

//   useEffect(() => {
//     loadScript({ "client-id": "AYJxE65Z80GpiL2bJUlYoUAHy1QT-d9CFUsuxYUgobwWu-tIRjmpOdsRO79xFiMC5u8dXZozNQ11ro5m" })
//       .then(() => {
//         console.log("PayPal JS SDK script loaded successfully");
//         setScriptLoaded(true);
//       })
//       .catch((err) => {
//         console.error("Failed to load the PayPal JS SDK script", err);
//       });
//   }, []);

//   return (
//     <div>
//       {scriptLoaded ? (
//         // Insert PayPal Button or any other component here that will use the loaded script
//         <div>PayPal Button Loaded</div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import { loadScript } from "@paypal/paypal-js";

// export default function PayPalButton() {
//   const paypalRef = useRef(); // create a ref to attach the PayPal button
//   const [scriptLoaded, setScriptLoaded] = useState(false);
//   const [amount, setAmount] = useState(''); // State to hold the user input amount
//   const [renderButton, setRenderButton] = useState(false); // State to hold whether to render the paypal button or not

//   useEffect(() => {
//     loadScript({ "client-id": "AYJxE65Z80GpiL2bJUlYoUAHy1QT-d9CFUsuxYUgobwWu-tIRjmpOdsRO79xFiMC5u8dXZozNQ11ro5m" })
//       .then(() => {
//         console.log("PayPal JS SDK script loaded successfully");
//         setScriptLoaded(true);
//       })
//       .catch((err) => {
//         console.error("Failed to load the PayPal JS SDK script", err);
//       });
//   }, []);

//   useEffect(() => {
//     if (scriptLoaded && renderButton) {
//       // when PayPal JS SDK script is loaded, create the button
//       window.paypal.Buttons({
//         createOrder: (data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: amount, // Use the state variable here
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: (data, actions) => {
//           return actions.order.capture().then((details) => {
//             alert("Transaction completed by " + details.payer.name.given_name);
//             setRenderButton(false); // Reset renderButton state after completing the transaction
//             setAmount(''); // Reset amount state after completing the transaction
//           });
//         },
//         onError: (err) => {
//           console.error(err);
//           setRenderButton(false); // Reset renderButton state on error
//         },
//       }).render(paypalRef.current);
//     }
//   }, [scriptLoaded, renderButton, amount]); // this useEffect hook runs when scriptLoaded state or renderButton state changes

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setRenderButton(true); // Set renderButton to true when the amount is submitted
//   };

//   return (
//     <div>
//       {!renderButton && (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="number"
//             min="1"
//             step="any"
//             value={amount}
//             onChange={e => setAmount(e.target.value)}
//             placeholder="Enter amount"
//             required
//           />
//           <button type="submit">Submit</button>
//         </form>
//       )}
//       <div ref={paypalRef} />
//       {scriptLoaded ? null : <div>Loading...</div>}
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from 'react';
import { loadScript } from "@paypal/paypal-js";
import './Paypal.css'; // import your CSS file here

export default function PayPalButton() {
  const paypalRef = useRef(); // create a ref to attach the PayPal button
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [amount, setAmount] = useState(''); // State to hold the user input amount
  const [renderButton, setRenderButton] = useState(false); // State to hold whether to render the paypal button or not

  useEffect(() => {
    loadScript({ "client-id": "AYJxE65Z80GpiL2bJUlYoUAHy1QT-d9CFUsuxYUgobwWu-tIRjmpOdsRO79xFiMC5u8dXZozNQ11ro5m" })
      .then(() => {
        console.log("PayPal JS SDK script loaded successfully");
        setScriptLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load the PayPal JS SDK script", err);
      });
  }, []);

  useEffect(() => {
    if (scriptLoaded && renderButton) {
      // when PayPal JS SDK script is loaded, create the button
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount, // Use the state variable here
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            setRenderButton(false); // Reset renderButton state after completing the transaction
            setAmount(''); // Reset amount state after completing the transaction
          });
        },
        onError: (err) => {
          console.error(err);
          setRenderButton(false); // Reset renderButton state on error
        },
      }).render(paypalRef.current);
    }
  }, [scriptLoaded, renderButton, amount]); // this useEffect hook runs when scriptLoaded state or renderButton state changes

  const handleSubmit = (event) => {
    event.preventDefault();
    setRenderButton(true); // Set renderButton to true when the amount is submitted
  };

 
  return (
    <div>
      {!renderButton && (
        <form onSubmit={handleSubmit} className="paypal-form">
          <input
            type="number"
            min="1"
            step="any"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
            className="paypal-input"
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <div ref={paypalRef} className="paypal-button-div"/>
      {scriptLoaded ? null : <div className="loading-text">Loading...</div>}
    </div>
  );
}