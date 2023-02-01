import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getTicketStatus, updateRedeem } from '../ApiCaller';

const Redeem = () => {
    const {uuid} = useParams();
    const [Status, setStatus] = useState([]);
    var page;

    useEffect(() => {
        getTicketStatus(uuid).then(data => setStatus(data));
    }, [])

    const handleRedeem = (e) => {
        updateRedeem(uuid);
        setTimeout(() => {
            window.location.reload();
          }, 1000);
    }

    const TicketRedeemedPre = Status.map(obj => obj.TicketRedeemed);
    const TicketRedeemed = TicketRedeemedPre[0];

    const FirstNamePre = Status.map(obj => obj.FirstName);
    const FirstName = FirstNamePre[0];

    switch (TicketRedeemed) {
        case 0:
            page = 
                <div className='RedeemPage'>
                    <div className='RedeemSection'>
                        <h1 className='RedeemH1'>
                            Welcome, {FirstName}!
                        </h1>
                        <button onClick={handleRedeem} className="RedeemBt">Redeem</button>
                        <label>*Once you redeem your ticket, your ticket will be invalid.</label>
                    </div>
                </div>
            break;
        case 1:
            page =
                <div className='RedeemPage'>
                    <div className='RedeemSection'>
                        <h1 className='RedeemH1'>
                            Hi, {FirstName}, your ticket has been redeemed. Enjoy your VTSF trip!
                        </h1>
                        <button onClick={(e) => {window.location.href='/';}} className="RedeemBt">Go to Homepage</button>
                    </div>
                </div>
            break;
        default:
            page =
                <div className='RedeemPage'>
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