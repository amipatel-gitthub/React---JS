import React,{useState} from "react";
import './Product.css';
import axios from "axios";


const baseURL="http://localhost:3004/products";

const Product = () => {
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
                        <div className="row rd" key={index} >             
                           <div className="row"><b>id : </b>{value.id}</div>
                           <div className="row"><b>title :</b> {value.title}</div>
                           <div className="row"><b>description : </b>{value.description}</div>
                           <div className="row"><b>price : </b>{value.price}</div>
                           <div className="row"><b>discountPercentage :</b> {value.discountPercentage}</div>
                           <div className="row"><b>rating :</b> {value.rating}</div>
                           <div className="row"><b>stock : </b>{value.stock}</div>
                           <div className="row"><b>brand :</b> {value.brand}</div>
                           <div className="row"><b>category : </b>{value.category}</div>
                        </div> 
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;