import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import FormInput from '../component/FormInput';

import { insertTicketInfo } from '../ApiCaller';
import { workshopArr, dietaryArr, OccupationArr } from '../Data';

const GetTicket = () => {

  const ID = uuidv4().replace(/-/g, '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    try {
      insertTicketInfo(Object.fromEntries(data.entries()), ID);
      window.location.href="/Etransfer";
    } catch (error) {
      console.error(error);
      alert("There's something wrong with our server. Please check back later.");
    }
  }

  return (
    <div className='TicketPage'>
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
    </div>
  )
}

export default GetTicket