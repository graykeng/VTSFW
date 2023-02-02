import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FormInput from '../component/FormInput';

import { insertTicketInfo } from '../ApiCaller';
import { workshopArr, dietaryArr, OccupationArr } from '../Data';

const GetTicket = () => {
  const [ShowForm, setShowForm] = useState(true);
  const [ShowSuccess, setShowSuccess] = useState(false);

  const ID = uuidv4().replace(/-/g, '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      insertTicketInfo(Object.fromEntries(data.entries()), ID);
      setShowForm(false);
      setShowSuccess(true);
    } catch (error) {
      console.error(error);
      alert("There's something wrong with our server. Please check back later.");
    }
  }

  return (
    <div>
      {ShowForm &&(<div className='TicketPage'>
        <form onSubmit={handleSubmit} className="FormSection">
          <h1 className='FormTitle'>Register(Testing)</h1>
          <FormInput name="FirstName" type="input" placeholder="First Name" question="First Name" />
          <FormInput name="LastName" type="input" placeholder="Last Name" question="Last Name" />
          <FormInput name="ChnName" type="input" placeholder="Chinese Name" question="Chinese Name" />
          <FormInput name="PhoneNumber" type="input" placeholder="Phone Number" question="Phone Number" />
          <FormInput name="Email" type="input" placeholder="Email" question="Email" />
          <FormInput name="School" type="input" placeholder="School" question="School" />
          <FormInput name="Age" type="input" placeholder="Age" question="Age" />
          <FormInput name="Taiwanese" type="menu" options={["Select", "Yes", "No"]} question="Are you a Taiwanese?" />
          <FormInput name="Workshop" type="menu" options={workshopArr} question="What is the workshop you want to attend?" />
          <FormInput name="Dietary" type="menu" options={dietaryArr} question="Do you have any dietary restrictions?" />
          <FormInput name="Occupation" type="menu" options={OccupationArr} question="What is your current occupation?" />
          <FormInput name="Attended" type="menu" options={["Select", "Yes", "No"]} question="Did you attend the event in 2022?" />
          <FormInput name="Heard" type="input" placeholder="Friends, Instagram, Facebook, etc." question="How did you hear about this event?" />
          <button className='TicketSubmit'>Submit</button>
        </form>
      </div>)}
      {ShowSuccess &&(
        <div className='RedeemPage'>
          <div className='RedeemSection'>
            <h1 className='RedeemH1'>Last step...</h1>
            <p className='EtransferP'>To pay your ticket, please E-transfer $15 to example@gmail.com with your name as comment. Once we confirmed the transaction, we'll proceed your application and send you confirmation Email.</p>
            <button onClick={() => {
              navigator.clipboard.writeText("example@gmail.com");
              alert("Copied!");
            }} className="RedeemBt">Copy Email</button>
          </div>
        </div>)}
    </div>
  )
}

export default GetTicket