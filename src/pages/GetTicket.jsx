import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Clipboard from 'clipboard';
import { Helmet } from 'react-helmet'
import ReCAPTCHA from 'react-google-recaptcha';

import './style/GetTicket.css'
import FormInput from '../component/FormInput';
import { insertTicketInfo } from '../ApiCaller';
import { workshopOption, occupationOption, heardOption, trueOrFalse } from '../Data';

const GetTicket = () => {
  const [ShowForm, setShowForm] = useState(true);
  const [ShowSuccess, setShowSuccess] = useState(false);
  const [showCopy, setShowCopy] = useState(true);
  const [showBack, setShowBack] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    setRecaptchaVerified(value);
  };

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
    WorkshopFirst: "Select workshop",
    WorkshopSecond: "Select workshop",
    Dietary: "",
    Occupation: "",
    Attended: "Select",
    Heard: "Select"
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [shakeButton, setShakeButton] = useState(false);

  const ID = uuidv4().replace(/-/g, '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recaptchaVerified){
      setFormErrors(validate(formValues));
      if (Object.keys(formErrors).length > 0) {
        setShakeButton(true);
  
        setTimeout(() => {
          setShakeButton(false);
        }, 1000); // Adjust the duration as needed
      }
      setIsSubmit(true);
    } else {
      alert("Please complete reCAPTCHA verification.");
    }
  }

  const handleRedeem = (e) => {
    setShowCopy(false);
    setShowBack(true);
    alert("Copied!");
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
        alert("There's something wrong with our server. Please contact our instagram (vtsf2023).");
      }
    }
  }, [formErrors])

  useEffect(() => {
    // notify user when they try to exit
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  

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
    } else if (!values.ChnName) {
      errors.ChnName = "請輸入中文名字。"
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
    if (values.School.length > 250) {
      errors.School = "School is too long.";
    } else if (!values.School) {
      errors.School = "School is required. If it's not applicable, enter N/A."
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
    if (values.WorkshopFirst === "Select workshop"){
      errors.Workshop = "Select the workshop you want to attend.";
    }
    if (values.WorkshopSecond === "Select workshop"){
      errors.Workshop = "Select the workshop you want to attend.";
    }
    if (values.WorkshopFirst === values.WorkshopSecond && values.WorkshopFirst !== "Select workshop"){
      errors.Workshop = "Preference must be different."
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
      <Helmet>
        <title>VTSF | Ticket</title>
      </Helmet>
      {ShowForm &&(<div className='TicketPage'>
        <form onSubmit={handleSubmit} className="FormSection">
          <h1 className='FormTitle'>Register(Testing)</h1>
          <FormInput name="FirstName" type="input" value={formValues.FirstName} onChange={handleChange} errorMessage={formErrors.FirstName} placeholder="First Name" question="First Name*" />
          <FormInput name="LastName" type="input" value={formValues.LastName} onChange={handleChange} errorMessage={formErrors.LastName} placeholder="Last Name" question="Last Name*" />
          <FormInput name="ChnName" type="input" value={formValues.ChnName} onChange={handleChange} errorMessage={formErrors.ChnName} placeholder="中文名字" question="中文名字*" />
          <FormInput name="PhoneNumber" type="input" value={formValues.PhoneNumber} onChange={handleChange} errorMessage={formErrors.PhoneNumber} placeholder="Phone Number" question="Phone Number*" />
          <FormInput name="Email" type="input" value={formValues.Email} onChange={handleChange} errorMessage={formErrors.Email} placeholder="Email" question="Email*" />
          <FormInput name="School" type="input" value={formValues.School} onChange={handleChange} errorMessage={formErrors.School} placeholder="School" question="School*" />
          <FormInput name="Age" type="input" value={formValues.Age} onChange={handleChange} errorMessage={formErrors.Age} placeholder="Age" question="Age*" />
          <FormInput name="Dietary" type="input" value={formValues.Dietary} onChange={handleChange} errorMessage={formErrors.Dietary} question="Do you have any dietary restrictions?" />
          <FormInput name="Taiwanese" type="menu" options={trueOrFalse} onChange={handleChange} errorMessage={formErrors.Taiwanese} question="Are you Taiwanese?*" />
          <FormInput name="WorkshopFirst" type="menu" options={workshopOption} onChange={handleChange} errorMessage={formErrors.Workshop} question="Which workshop is your First preference?*" />
          <FormInput name="WorkshopSecond" type="menu" options={workshopOption} onChange={handleChange} errorMessage={formErrors.Workshop} question="Which workshop is your Second preference?*" />
          <FormInput name="Occupation" type="menu" options={occupationOption} onChange={handleChange} errorMessage={formErrors.Occupation} question="What is your current occupation?*" />
          <FormInput name="Attended" type="menu" options={trueOrFalse} onChange={handleChange} errorMessage={formErrors.Attended} question="Did you attend the event in 2022?*" />
          <FormInput name="Heard" type="menu" options={heardOption} onChange={handleChange} errorMessage={formErrors.Heard} question="How did you hear about this event?*" />
          <ReCAPTCHA sitekey="6LfZv4AnAAAAALW5RV6bKShL62YOP1ktOyad1yb5" onChange={handleRecaptchaChange} />
          <button className={`TicketSubmitBt ${shakeButton ? "shake" : ""}`}>Submit</button>
        </form>
      </div>)}
      {ShowSuccess &&(
        <div className='ReminderPage'>
          <div className='ReminderSection'>
            <h1 className='ReminderH1'>Last step...</h1>
            <p className='EtransferP'>To pay your ticket, please E-transfer $20 to vtsf2022@gmail.com with your name in the comment. Once we confirmed your transaction, you will receive a confirmation email with an QR code in the next five business days.</p>
            <p className='EtransferP Red'>E-Transfer Security Question's Answer: VTSF</p>
            {showCopy && (<button className="ReminderBt copy" data-clipboard-text="vtsf2022@gmail.com" onClick={handleRedeem}>Copy Email</button>)}
            {showBack && (<button className='ReminderBt' onClick={(e) => {window.location.href='/';}}>Back to home page</button>)}
          </div>
        </div>)}
    </div>
  )
}

export default GetTicket