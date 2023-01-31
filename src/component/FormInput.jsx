import React from 'react'

const FormInput = ( props ) => {

    var inputType;

    switch (props.type) {
        case "input":
            inputType = 
            <div>
                <div>
                    <br/>
                    <label>{props.question}</label>
                </div>
                <input name={props.name} className='FormInput' placeholder={props.placeholder}/>
            </div>
            break;
        case "menu":
            inputType =
            <div>
                <div>
                    <br/>
                    <label>{props.question}</label>
                </div>
                <select className='FormInput' name={props.name}>
                    {props.options.map((val, index) => (
                        <option value={val} key={index}>{val}</option>
                    ))}
                </select>
            </div>
            break;
        case "yesOrNo":
            inputType =
            <div>
                <div>
                    <br/>
                    <label>{props.question}</label>
                </div>
                
            </div>
            break;
        case "multipleChoice":
            inputType =
            <div>
                <div>
                    <br/>
                    <label>{props.question}</label>
                </div>
                {/* {props.options.map((val, index) => (
                    <input type="checkbox" id={val} name={props.name} value={val}>ddd</input>
                ))} */}
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