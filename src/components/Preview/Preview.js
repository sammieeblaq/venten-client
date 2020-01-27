import React from "react";
import axios from "axios";

const  url = "http://localhost:4000/product";
const Preview = ({ preview }) => {

    const getProductId = e => {
        e.preventDefault();
        console.log(preview.id);
    }

    return (
        <>
            <button onClick={getProductId}>Preview</button>
        </>
    )
}

export default Preview;