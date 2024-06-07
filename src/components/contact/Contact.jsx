import React,{useState} from "react";
import "./Contact.css";
import { toast } from "react-toastify";

const Bot_token = "7103158799:AAFA8uad4zRHrA7_OffopReurqjuv2_Ryac";
const Chat_id = "-4273591369";

const instalstate = {
    name: "",
    email: "",
    message: "",
}

const Contact = () => {
    const [formdata, setFormdata] = useState(instalstate);
 
    let text = '';

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, email, message } = formdata;
        if ( name === "" && email === "" && message === "") {
            toast.error("Please fill all the fields:)")
        } else {
            setFormdata(instalstate);
            toast.success("message sended")
            
            text = `'Ish beruvchi' %0A
              Name: ${name} \n Email: ${email} \n Message: ${message}`

        }


        let url = `https://api.telegram.org/bot${Bot_token}/sendMessage?chat_id=${Chat_id}&text=${text} `;
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.send();
    }



  return (
    <>
      <section id="contact">
        <div className="container">
        <h2 className="text_Contact">Contact Me</h2>
        <div className="underline"></div>
        <p className="text_p">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
          <div className="wrapper_form">
          <form onSubmit={onChangeHandler}>
                <div className="inputBox">
                    <label>Name</label>
                    <input value={formdata.name} onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} type="text" required="required" placeholder="Enter Your Name"/>
                </div>
                <div className="inputBox">
                    <label > Email</label>
                    <input value={formdata.email} onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} type="email" required="required"  placeholder="Enter Your Email"/>
                </div>
                <div className="inputBox">
                    <label> Message </label>
                    <textarea value={formdata.message} onChange={(e) => setFormdata({ ...formdata, message: e.target.value })} required="required" placeholder="Enter Your Message"></textarea>
                </div>
                <div className="inputBox">
                 <button onClick={onChangeHandler} type="submit">Send</button>
                </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
