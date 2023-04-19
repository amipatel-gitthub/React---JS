import React,{useState} from "react";
import './User_Data.css';
import axios from "axios";


const baseURL="http://localhost:3004/user";

const User_Data = () => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setUser(response.data);
        });
    }, []);

    if(!user) return null;

    return(
        <>
        <div className="abc">
            <div class="card">
                <div class="card-body">
                    {user.map((value,index) => {
                        return(               
                            <ul class="list-group list-group-flush" key={index}>
                                <li class="list-group-item"><b>Id </b>: {value.id}</li>
                                <li class="list-group-item"><b>First_Name </b>: {value.firstName}</li>
                                 <li class="list-group-item"><b>Last_Name </b>: {value.lastName}</li>
                                <li class="list-group-item"><b>Maiden_Name </b>: {value.maidenName}</li>
                                <li class="list-group-item"><b>Gender </b>: {value.gender}</li>
                                <li class="list-group-item"><b>Email </b>: {value.email}</li>
                                <li class="list-group-item"><b>Phone </b>: {value.phone}</li>
                                <li class="list-group-item"><b>Username </b>: {value.username}</li>
                                <li class="list-group-item"><b>Password </b>: {value.password}</li>
                                <li class="list-group-item"><b>BirthDate </b>: {value.birthDate}</li>
                                <li class="list-group-item"><b>BloodGroup </b>: {value.bloodGroup}</li>
                                <li class="list-group-item"><b>Height </b>: {value.height}</li>
                                <li class="list-group-item"><b>Weight </b>: {value.weight}</li>
                                <li class="list-group-item"><b>EyeColor </b>: {value.eyeColor}</li>
                                <li class="list-group-item"><b>Domain </b>: {value.domain}</li>
                                <li class="list-group-item"><b>Ip </b>: {value.ip}</li>
                                <li class="list-group-item"><b>MacAddress </b>: {value.macAddress}</li>
                                <li class="list-group-item"><b>University </b>: {value.university}</li>
                                <li class="list-group-item"><b>ein </b>: {value.ein}</li>
                                <li class="list-group-item"><b>ssn </b>: {value.ssn}</li> 
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default User_Data;