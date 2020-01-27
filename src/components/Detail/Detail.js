import React from "react";
import axios from 'axios';
import "./Detail.css";

const  url = "http://localhost:4000/product";
const Detail = ({ details }) => {

    const getDetailsOfId = e => {
        // details.map(async detail => {
        //     // const api_call = await axios.get(`${url}`);
        //     // const response = await api_call;	
        //     // console.log(response.data.docs.products[0].id);
        //     // const lastProduct = response.data.docs.products.length;
        //     const detailProduct = await axios.get(`${url}/${detail.id}`);
        //     const dets = await detailProduct;
        //     console.log(dets);
        // })
        const firstIndex = details.length;
        // console.log(details.data.docs.products[0]);
    }    

    return (
        <>
            <h1>Product List</h1>
            {details.map((detail, i) => (
                <div className="card" key={i} onClick={getDetailsOfId}>
                <div className="card-body">
                    <h5 className="card-title">{detail.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{detail.Name}</h6>
                    <p className="card-text">{detail.Price}</p>
                </div>
                </div>
            ))}
    </>
    )
   
}

export default Detail;