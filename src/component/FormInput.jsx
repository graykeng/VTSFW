import React from 'react'

const FormInput = ( props ) => {

    var inputType;

    switch (props.type) {
        case "input":
            inputType = 
            <div>
                <div>
                    <br/>
                    <label className='InputLabel'>{props.question}</label>
                </div>
                <input name={props.name} className='FormInput' placeholder={props.placeholder}/>
                <span>{props.errorMessage}</span>
            </div>
            break;
        case "menu":
            inputType =
            <div>
                <div>
                    <br/>
                    <label className='InputLabel'>{props.question}</label>
                </div>
                <select className='FormInput' name={props.name}>
                    {props.options.map((val, index) => (
                        <option value={val} key={index}>{val}</option>
                    ))}
                </select>
                <span>{props.errorMessage}</span>
            </div>
            break;
        default:
            break;
    }


    return (
        <div>
            {inputType}
        </div>
    )
}

export default FormInput