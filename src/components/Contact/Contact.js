import React from "react"
import { ContactSection, ContactTitel, Spann, Form, Input, FormInput, InputText, InputEmail, InputExc, TextArea, InputSubmit} from "./ContactS.js"
import Footer from "./../Footer/Footer"
const Contact = () =>{
    return(
        <React.Fragment>
        <ContactSection>
            <div class="container">
                <ContactTitel><Spann>Drop </Spann>Me A line</ContactTitel>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputExc type="text" class="sub" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </ContactSection>
        <Footer />

        </React.Fragment>
    )
}
export default Contact