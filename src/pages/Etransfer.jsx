import React from 'react'

const Etransfer = () => {
    return (
        <div className='RedeemPage'>
            <div className='RedeemSection'>
                <h1 className='RedeemH1'>Last step...</h1>
                <p className='EtransferP'>To pay your ticket, please E-transfer $15 to example@gmail.com with your name as comment. Once we confirmed the transaction, we'll proceed your application and send you confirmation Email.</p>
                <button onClick={() => {
                    navigator.clipboard.writeText("example@gmail.com");
                    alert("Copied!");
                }} className="RedeemBt">Copy Email</button>
            </div>
        </div>
    )
}

export default Etransfer