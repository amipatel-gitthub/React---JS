import React, { useState } from "react";
import "./User_Product.css";
import axios from "axios";

const baseURL ="http://localhost:3004/user";


const User_Product = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) =>{
      setUser(response.data);
    });
  },[]);
  if(!user) return null;
  return (
    <>
      <table className="table tbl table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">User-Name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">website</th>
          </tr>
        </thead>
          
        <tbody>
            {user.map((value, index) => {
              return(
                <tr key={index}>{value.id}
                  <td>{value.name}</td>
                  <td>{value.username}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>{value.website}</td> 
                </tr> 
              )
              })}
        </tbody>
       
      </table>
    </>
  );
};
export default User_Product;
