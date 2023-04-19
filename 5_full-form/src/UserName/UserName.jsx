import React, { useState } from 'react';
import './UserName.css';

export const UserName = () => 
{
    const [user, setUser] = useState ({
        username : "",
        password : ""
    });

    const onInputChange = (event) =>
    {
        setUser ({
            ...user,
            [event.target.name] : event.target.value
        });
    }

    return (
        <>
        <pre>{JSON.stringify(user)}</pre>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='card bbc'>
                        <div className='card-body abc bg-primary'>
                            <form>
                                <input 
                                    value={user.username}                                
                                    name={'username'}
                                    onChange={event => onInputChange(event)}
                                    type="text" className="form-control" placeholder="Username"/>

                                <input 
                                    value={user.password}
                                    name={'password'}
                                    onChange={event => onInputChange(event)}
                                    type="password" className="form-control mt-2" placeholder='Password'/>
                                
                                <button 
                                    type="submit" 
                                    form="form1" 
                                    className="form-control"
                                    value="Submit">
                                        Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default UserName;
