import React, { Component } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import data from "../../resources/searchData.json";
import './SearchResponse.css';
import pic from "../../resources/login.png";
class SearchResponse extends Component{

    state ={
        products: data
    }

    itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={`${data.image}`}  onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-detail">
                    <div className="product-name">{data.ecommerceName}</div>
                    <div className="product-description">MRP : ${data.maxPrice}</div>
                </div>
                <div className="product-action">
                    <span className="product-price">${data.price}</span>
                    <Button  label="Buy Now" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className= {`product-badge-status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    render(){
        
    
        return (
            <div className="datascroller-demo">
                <div className="card">
                    <DataScroller value={this.state.products} itemTemplate={this.itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
                </div>
            </div>
        );
    }
     
}

export default SearchResponse;