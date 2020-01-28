import React from "react";
import axios from 'axios';
import "./Detail.css";

const  url = "http://localhost:4000/product";
const Detail = ({ details }) => (
     <>
        <h1>Product List</h1>
        {details.map((detail, i) => (
            <div className="card" key={i}>
            <div className="card-body">
                {/* <h5 className="card-title">{detail.id}</h5> */}
                <h6 className="card-subtitle mb-2 text-muted">{detail.Name}</h6>
                <p className="card-text">{detail.Price}</p>
            </div>
            </div>
        ))}
    </>
   
)

export default Detail;