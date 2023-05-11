import React from "react";
import { useState } from "react";


const styles = {
    header: {
        textAlign: 'center',
        margin: '20px 0'
    },
    submitBtn: {
        backgroundColor: 'lightseagreen',
        color: '#fff',
        cursor: 'pointer'
    },
    success: {
        textAlign: 'center',
        color: 'lightseagreen',
        marginTop: '15px'
    }
}

function Contact() {

    const [success, setSuccess] = useState(false);
    const [formData, setFormData] =useState({
        name: '',
        email: '',
        message: '',
        access_key: 'f613aeb9-3582-4511-b794-51f52493de3b'
    });

    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
    
const handleSubmit = (event) => {
    
  const data = JSON.stringify(formData);
   
  
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: data
    }).then(res => res.json())
        .then(data => {
            setSuccess(true);

            setTimeout(() => {
                  setSuccess(false);  
                  setFormData({
                    ...formData,
                    name: '',
                    email: '',
                    message: ''

                  }


                  )

            }, 3000)
        })
    .catch(err => console.log(err))

        event.preventDefault();

      
    }
return (
<>    
    <h1 style={styles.header}>Contact Me</h1>
    
  
  
    <form onSubmit={handleSubmit}>
    <input type="hidden" name="access_key"  />
        <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            type="text" 
            placeholder="Enter your name" />
        <input 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
            type="text" 
            placeholder="Enter your email address" />
        <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange} 
            cols="30" rows="10" 
            placeholder="Enter your message" />
    <button style={styles.submitBtn}>Submit</button>
</form>
{success && <p style={styles.success}>Form submitted Successfully! </p>}
</>

)

}

export default Contact;