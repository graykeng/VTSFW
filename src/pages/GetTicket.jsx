import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Clipboard from 'clipboard';

import FormInput from '../component/FormInput';

import { insertTicketInfo } from '../ApiCaller';
import { workshopOption, dietaryOption, occupationOption, heardOption, trueOrFalse } from '../Data';

const GetTicket = () => {
  const [ShowForm, setShowForm] = useState(true);
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    new Clipboard('.copy');
  }, [])

  const initialValues = { 
    FirstName: "",
    LastName: "",
    ChnName:"",
    PhoneNumber: "",
    Email: "",
    School: "",
    Age: "",
    Taiwanese: "Select",
    Workshop: "Select workshop",
    Dietary: "Select dietary option",
    Occupation: "Select occupation",
    Attended: "Select",
    Heard: "Select"
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const ID = uuidv4().replace(/-/g, '');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value});
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit){
      try {
        insertTicketInfo(formValues, ID);
        setShowForm(false);
        setShowSuccess(true);
        window.scrollTo(0,0);
      } catch (error) {
        console.error(error);
        alert("There's something wrong with our server. Please check back later.");
      }
    }
  }, [formErrors])
  

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const chnRegex = new RegExp ("[\u4E00-\u9FA5]+");
    const engRegex = new RegExp ("[A-Za-z]+");
    const numRegex = new RegExp ("[0-9]+");
    if (!values.FirstName) {
      errors.FirstName = "First name is required.";
    } else if (!engRegex.test(values.FirstName)) {
      errors.FirstName = "First name can only contain English.";
    } else if (values.FirstName.length > 250) {
      errors.FirstName = "First name is too long.";
    }
    if (!values.LastName) {
      errors.LastName = "Last name is required.";
    } else if (!engRegex.test(values.LastName)) {
      errors.LastName = "Last name can only contain English.";
    } else if (values.LastName.length > 250) {
      errors.LastName = "Last name is too long.";
    }
    if (!chnRegex.test(values.ChnName) && values.ChnName) {
      errors.ChnName = "Chinese name can only contain Chinese characters. If you don't have a Chinese name, leave this field blank.";
    } else if (values.ChnName.length > 250) {
      errors.ChnName = "Chinese name is too long.";
    }
    if (!values.PhoneNumber) {
      errors.PhoneNumber = "Phone number is required.";
    } else if (!numRegex.test(values.PhoneNumber)) {
      errors.PhoneNumber = "Phone number can only contain numbers.";
    } else if (values.PhoneNumber.length >= 20) {
      errors.PhoneNumber = "Phone number is too long.";
    } 
    if (!values.Email) {
      errors.Email = "Email is required.";
    } else if (!emailRegex.test(values.Email)){ 
      errors.Email = "This is not a valid email format.";
    } else if (values.Email.length > 250) {
      errors.Email = "Email is too long.";
    }
    if (!values.School) {
      errors.School = "School is required.";
    } else if (values.School.length > 250) {
      errors.School = "School is too long.";
    }
    if (!values.Age) {
      errors.Age = "Age is required.";
    } else if (values.Age > 100) {
      errors.Age = "Grandpa, I don't think you'll need to attend this event.";
    } else if (!numRegex.test(values.Age)) {
      errors.Age = "Age can only contain numbers."
    }
    if (values.Taiwanese === "Select"){
      errors.Taiwanese = "Select yes or no.";
    }
    if (values.Workshop === "Select workshop"){
      errors.Workshop = "Select the workshop you want to attend.";
    }
    if (values.Dietary === "Select dietary option"){
      errors.Dietary = "Select your dietary option.";
    }
    if (values.Occupation === "Select occupation"){
      errors.Occupation = "Select your occupation.";
    }
    if (values.Attended === "Select"){
      errors.Attended = "Select yes or no.";
    }
    if (values.Heard === "Select"){
      errors.Heard = "Select how you heard about this event.";
    }
    return errors;
  }

  return (
    <div>
      {ShowForm &&(<div className='TicketPage'>
        <form onSubmit={handleSubmit} className="FormSection">
          <h1 className='FormTitle'>Register(Testing)</h1>
          <FormInput name="FirstName" type="input" value={formValues.FirstName} onChange={handleChange} errorMessage={formErrors.FirstName} placeholder="First Name" question="First Name*" />
          <FormInput name="LastName" type="input" value={formValues.LastName} onChange={handleChange} errorMessage={formErrors.LastName} placeholder="Last Name" question="Last Name*" />
          <FormInput name="ChnName" type="input" value={formValues.ChnName} onChange={handleChange} errorMessage={formErrors.ChnName} placeholder="Chinese Name" question="Chinese Name" />
          <FormInput name="PhoneNumber" type="input" value={formValues.PhoneNumber} onChange={handleChange} errorMessage={formErrors.PhoneNumber} placeholder="Phone Number" question="Phone Number*" />
          <FormInput name="Email" type="input" value={formValues.Email} onChange={handleChange} errorMessage={formErrors.Email} placeholder="Email" question="Email*" />
          <FormInput name="School" type="input" value={formValues.School} onChange={handleChange} errorMessage={formErrors.School} placeholder="School" question="School*" />
          <FormInput name="Age" type="input" value={formValues.Age} onChange={handleChange} errorMessage={formErrors.Age} placeholder="Age" question="Age*" />
          <FormInput name="Taiwanese" type="menu" options={trueOrFalse} onChange={handleChange} errorMessage={formErrors.Taiwanese} question="Are you a Taiwanese?*" />
          <FormInput name="Workshop" type="menu" options={workshopOption} onChange={handleChange} errorMessage={formErrors.Workshop} question="What is the workshop you want to attend?*" />
          <FormInput name="Dietary" type="menu" options={dietaryOption} onChange={handleChange} errorMessage={formErrors.Dietary} question="Do you have any dietary restrictions?*" />
          <FormInput name="Occupation" type="menu" options={occupationOption} onChange={handleChange} errorMessage={formErrors.Occupation} question="What is your current occupation?*" />
          <FormInput name="Attended" type="menu" options={trueOrFalse} onChange={handleChange} errorMessage={formErrors.Attended} question="Did you attend the event in 2022?*" />
          <FormInput name="Heard" type="menu" options={heardOption} onChange={handleChange} errorMessage={formErrors.Heard} question="How did you hear about this event?*" />
          <button className='TicketSubmit'>Submit</button>
        </form>
      </div>)}
      {ShowSuccess &&(
        <div className='RedeemPage'>
          <div className='RedeemSection'>
            <h1 className='RedeemH1'>Last step...</h1>
            <p className='EtransferP'>To pay your ticket, please E-transfer $15 to example@gmail.com with your name as comment. Once we confirmed the transaction, we'll proceed your application and send you confirmation Email.</p>
            <button className="RedeemBt copy" data-clipboard-text="example@gmail.com">Copy Email</button>
          </div>
        </div>)}
    </div>
  )
}

export default GetTicket