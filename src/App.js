import React, { Component } from "react";
import axios from "axios";
import Detail from "./components/Detail/Detail";
import Preview from "./components/Preview/Preview";



 const  url = "http://localhost:4000/product";


class App extends Component {

	state = {
		name: "",
		description: "",
		price: 0,
		category: "",
		image: null,
		color: "",
		products: [],
		product: {}
	}



	handleChange = e => this.setState({[e.target.id]: e.target.value });
	handleImageChange = e => {
		this.setState({image: e.target.files[0]});
		// console.log(e.target.files[0]);
	};


	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state);
		let form_data = new FormData();
		form_data.append("name", this.state.name);
		form_data.append("description", this.state.description);
		form_data.append("price", this.state.price);
		form_data.append("category", this.state.category);
		form_data.append("image", this.state.image, this.state.image.name);
		form_data.append("color", this.state.color);
		axios.post(`${url}`, form_data, {
			headers: {"content-type": "multipart/form-data"}
		}).then(res => console.log(res.data))
		.catch(err => console.log(err));
	}
	

	getProductHandler = async e => {
		const api_call = await axios.get(`${url}`);
		const response = await api_call;
        const lastProduct = response.data.docs.products.length;
		console.log(response.data.docs.products[lastProduct - 1]);
		this.setState({ products: response.data.docs.products.reverse() });
		this.setState({ product: response.data.docs.products[0]});
	}


	render() {
		return (
			<div className="container">
				<h2>Product Input Form</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">Name:
							<input 
								type="text" 
								placeholder="Name" 
								id="name" 
								value={this.state.name} 
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">Description:
							<input 
								type="text" 
								placeholder="Description" 
								id="description" 
								value={this.state.description} onChange={this.handleChange}
								required 
							/>
						</div>
						<div className="form-group">Price:
							<input 
								type="number" 
								placeholder="Price" 
								id="price"
								value={this.state.price}
								onChange={this.handleChange}
								required 
							/>
						</div>
						<div className="form-group">Category:
							<input 
								type="text" 
								placeholder="Category" 
								id="category" 
								value={this.state.category}
								onChange={this.handleChange}
								required 
							/>
						</div>
						<div className="form-group">Image:
							<input 
								type="file" 
								accept="image/png, image/jpg"
								placeholder="Image" 
								// value={this.state.image} 
								onChange={this.handleImageChange} 
								required
							/>
						</div>
						<div className="form-group">Color:
							<input 
								type="text" 
								placeholder="Color" 
								id="color" 
								name="color" 
								value={this.state.color}
								onChange={this.handleChange}
								required 
							/>
						</div>
						<button type="submit" className="btn btn-danger">Add Product</button>
					</form>

				<button className="btn btn-primary" onClick={this.getProductHandler}>Get Product</button>
				<Detail details={this.state.products} />
				<Preview preview={this.state.product} />
			</div>
		);
	}
}

export default App;