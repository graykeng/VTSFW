import React from 'react';

import './style/FormInput.css';

const FormInput = ( props ) => {

    var inputType;

    switch (props.type) {
        case "input":
            inputType = 
            <div className='SingleInputArea'>
                <div>
                    <br/>
                    <label className='FormQuestionLabel'>{props.question}</label>
                </div>
                <input name={props.name} value={props.value} onChange={props.onChange} className='FormInput' placeholder={props.placeholder}/>
                <div className='ErrorMessage'>
                    <label>{props.errorMessage}</label>
                </div>
            </div>
            break;
        case "menu":
            inputType =
            <div className='SingleInputArea'>
                <div>
                    <br/>
                    <label className='FormQuestionLabel'>{props.question}</label>
                </div>
                <select className='FormInput' name={props.name} onChange={props.onChange}>
                    {props.options.map((val, index) => (
                        <option value={val} key={index}>{val}</option>
                    ))}
                </select>
                <div className='ErrorMessage'>
                    <label>{props.errorMessage}</label>
                </div>
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