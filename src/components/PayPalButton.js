import React, { useEffect, useState } from 'react';
import { loadScript } from "@paypal/paypal-js";

export default function PayPalButton() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

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

  return (
    <div>
      {scriptLoaded ? (
        // Insert PayPal Button or any other component here that will use the loaded script
        <div>PayPal Button Loaded</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
