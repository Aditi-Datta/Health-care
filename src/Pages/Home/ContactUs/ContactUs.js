import React from "react";
import Navigation from "../../Shared/Navigation";
import Footer from '../../Shared/Footer';
import ContactUsForm from "./FormContactUs";

const ContactUs = () => {

    return (
        <div style={{background: 'linear-gradient(to right,rgb(206,221,225), rgb(116,171,164))'}}>
            <Navigation></Navigation>

            <ContactUsForm></ContactUsForm>

            <Footer></Footer>
           

        </div>
    );
};
export default ContactUs;