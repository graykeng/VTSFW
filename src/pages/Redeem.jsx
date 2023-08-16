import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { getTicketStatus, updateRedeem } from '../ApiCaller';
import './style/Redeem.css';

const Redeem = () => {
    const {uuid} = useParams();
    const [Status, setStatus] = useState([]);
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    var page;

    useEffect(() => {
        getTicketStatus(uuid).then(data => setStatus(data));
    }, [])

    const handleOnChange = (e) => {
        setPassword(e.target.value);
        setShowError(false);
      }

    const handleRedeem = (e) => {
        e.preventDefault();
        if (password.trim() !== '7') {
            setShowError(true);
        } else {
            updateRedeem(uuid);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }

    const TicketRedeemedPre = Status.map(obj => obj.TicketRedeemed);
    const TicketRedeemed = TicketRedeemedPre[0];

    const FirstNamePre = Status.map(obj => obj.FirstName);
    const FirstName = FirstNamePre[0];

    const SerialNumPre = Status.map(obj => obj.id);
    const SerialNum = SerialNumPre[0];

    const LastNamePre = Status.map(obj => obj.LastName);
    const LastName = LastNamePre[0];

    switch (TicketRedeemed) {
        case 0:
            page = 
                <div className='RedeemPage'>
                    <Helmet>
                        <title>Redeem | {FirstName}</title>
                    </Helmet>
                    <div className='RedeemSection'>
                        <h1 className='RedeemH1'>
                            Welcome, {FirstName} {LastName}!
                        </h1>
                        <form onSubmit={handleRedeem}>
                            <input
                                type='text'
                                placeholder='Redeem Password'
                                className='RedeemPasswordInput'
                                onChange={handleOnChange}
                            />
                            {showError && <p className='WarningMessage'>Only STAFF can redeem!</p>}
                            <button type='submit' className="RedeemBt">Redeem</button>
                        </form>
                        <label className='WarningMessage'>*This button can only click by a STAFF!</label>
                        <br/>
                        <label className='WarningMessage'>*Once you redeem your ticket, your ticket will be invalid.</label>
                        <br/>
                        <label className='WarningMessage'>Ticket Serial Number: {SerialNum}</label>
                    </div>
                </div>
            break;
        case 1:
            page =
                <div className='RedeemPage'>
                    <Helmet>
                        <title>Redeem | Redeemed</title>
                    </Helmet>
                    <div className='RedeemSection'>
                        <h1 className='RedeemH1'>
                            Hi, {FirstName} {LastName}, your ticket has been redeemed. Enjoy your VTSF trip!
                        </h1>
                        <br/>
                        <label className='WarningMessage'>Ticket Serial Number: {SerialNum}</label>
                        <button onClick={(e) => {window.location.href='/';}} className="RedeemBt">Go to Homepage</button>
                    </div>
                </div>
            break;
        default:
            page =
                <div className='RedeemPage'>
                    <Helmet>
                        <title>Redeem | Failed</title>
                    </Helmet>
                    <div className='RedeemSection'>
                        <h1 className='RedeemH1'>
                            Hi, this ticketID does not exist, please get your ticket.
                        </h1>
                        <button onClick={(e) => {window.location.href='/GetTicket';}} className="RedeemBt">Get Ticket</button>
                    </div>
                </div>
            break;
    }

    return (
        <div>
            {page}
        </div>
    )
}

export default Redeem