import React,{useState} from "react";
import axios from "axios";
import './SimpleForm.css';

const baseURL="http://localhost:3004/user";

const SimpleForm = () => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setUser(response.data);
        });
    }, []);

    if(!user) return null;

    return(
        <>
            <table>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="table">
                                <thead>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                </thead>

                                <tbody>
                                    {user.map((value,index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.username}</td>
                                                <td>{value.email}</td>
                                                <td>{value.phone}</td>
                                                <td>{value.website}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div>
            </table>
        </>
    )
}

export default SimpleForm;