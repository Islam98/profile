import { useState, useEffect, React } from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


const Contact = () => {

    const [formErrors, setFormErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [state, setState] = useState({ email: "" });

function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })};


const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(state));
    setIsSubmitting(true);
};
const validate = (value) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(value.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
};


const submit = async () => {
    // Here you should add your post data code
    console.log("SUBMITTED DATA", state);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);
    
    return (
        <div id="Contact" class="vh-100 bg-secondary bg-opacity-50">
            <div class="container"> <div class=" text-center mt-5 ">
        <h1 style={{color:'#20B2AA'}}>Contact Me</h1>
    </div>
    <div class="row ">
        <div class="col-lg-7 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
                <div class="card-body bg-light">
                    <div class="container">
                        <form id="contact-form" role="form">
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_name">Name *</label> <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your name *" required="required" data-error="Firstname is required"/> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_email">Email *</label> <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required"/> </div>
                                    </div>
                                    {/*<div class="col-md-6">
                                        <div class="form-group"> <label for="form_lastname">Lastname *</label> <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/> </div>
    </div>*/}
                                </div>
                                <div class="row">
                                    {/*<div class="col-md-6">
                                        <div class="form-group"> <label for="form_email">Email *</label> <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_need">Please specify your need *</label> <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                                <option value="" selected disabled>--Select Your Issue--</option>
                                                <option>Request Invoice for order</option>
                                                <option>Request order status</option>
                                                <option>Haven't received cashback yet</option>
                                                <option>Other</option>
                                            </select> </div>
                                      </div>*/}
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <div class="form-group"> <label for="form_message">Message *</label> <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here" rows="4" required="required" data-error="Please, leave a message"></textarea></div>
                                    </div>
                                    <div class="col-md-12 mt-3"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block" value="Send Message"/> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}
//<form onSubmit={handleSubmit}>

export default Contact
