import React from 'react'

import FormInput from '../component/FormInput'

import { workshopArr, dietaryArr, OccupationArr, heardArr } from '../Data'

const GetTicket = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()))
  }

  return (
    <div className='TicketPage'>
      <form onSubmit={handleSubmit} className="FormSection">
        <h1 className='FormTitle'>Register</h1>
        <FormInput name="FirstName" type="input" placeholder="First Name" question="First Name" />
        <FormInput name="LastName" type="input" placeholder="Last Name" question="Last Name" />
        <FormInput name="PhoneNumber" type="input" placeholder="Phone Number" question="Phone Number" />
        <FormInput name="Email" type="input" placeholder="Email" question="Email" />
        <FormInput name="School" type="input" placeholder="School" question="School" />
        <FormInput name="Workshop" type="menu" options={workshopArr} question="What is the workshop you want to attend?" />
        <FormInput name="Dietary" type="menu" options={dietaryArr} question="Do you have any dietary restrictions?" />
        <FormInput name="Occupation" type="menu" options={OccupationArr} question="What is your current occupation?" />
        <FormInput name="Attend" type="yesOrNo" question="Did you attend the event in 2022?" />
        <FormInput name="Heard" type="multipleChoice" options={heardArr} question="How did you hear about this event? (Multiple answers)" />
        <button className='TicketSubmit'>Submit</button>
      </form>
    </div>
  )
}

export default GetTicket