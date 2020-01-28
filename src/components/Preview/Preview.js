import React, { useState } from "react";
import axios from "axios";

const  url = "http://localhost:4000/product";
const Preview = ({ id }) => {

    const [productDetail, setProductDetail] = useState([]);

    const getProductId = async e => {
        e.preventDefault();
        // console.log(id);
        const productResult = await axios.get(`${url}/${id}`);
        const response = await productResult;
        // console.log(response.data.product.name);
        setProductDetail(response.data.product);
        
    }

    return (
        <>
            <button onClick={getProductId}>Preview</button>
            {/* <div>
            {productDetails.map((detail, i) => (
                <div className="card" key={i}>
                <div className="card-body">
                    <h5 className="card-title">{detail.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{detail.name}</h6>
                    <p className="card-text">{detail.price}</p>
                    <p className="card-text">{detail.color}</p>
                </div>
                </div>
            ))}
            </div> */}
            {/* {productDetail.map((detail, i) => (
                <div key={i}>
                    <p>{detail.name}</p>
                </div>
            ))} */}
            { console.log(productDetail.keys) }
        </>
    )
}

export default Preview;