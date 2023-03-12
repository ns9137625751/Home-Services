import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Confirmpassword = () => {
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {

                case "password":
                     if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                   if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }
    return (
        <>
            <div className="container">
                <form>
                    
                    <input type="password" name="password" placeholder='Enter Password' value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
                    <br />

                    {error.password && <span className='err'>{error.password}</span>}
                    <br />
                    
                    <input type="password" name="confirmPassword" placeholder='Enter Confirm Password' value={input.confirmPassword} onChange={onInputChange}  onBlur={validateInput}></input>
                    <br />

                    {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                    <br />

                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Confirmpassword