import {Component} from "react"
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import SearchResponse from "./searchresponse/SearchResponse";
import brandlogo from"../resources/ADM-logos_black.png";
import { FaSearch,FaUser  } from "react-icons/fa";
import "./Search.css";

class Search extends Component{

    state = {
         categories :[
            { name: "Electronics", code: 'ELE000' },
            { name: 'Home Appliances', code: 'HAP000' },
            { name: 'Mobiles', code: 'MOB000' }
        ],
        searchData:{
            selectedCategory : "",
            searchValue: ""
        },
        displayResult: false,
        displayError: false,
        
    }

    setSearchDataValue = (event) => {
        let data = {...this.state.searchData}
        data.searchValue = event.target.value;
        this.setState({searchData : data});
        this.setState({displayError : false})
    }

    onCityChange = (e) => {
        let data = {...this.state.searchData}
        data.selectedCategory = e.value;
        this.setState({searchData : data});
        this.setState({displayError : false})
    }

    submit = (event) =>{
       event.preventDefault();
        if(this.state.searchData.searchValue === "" ||
            this.state.searchData.selectedCategory === ""){
                this.setState({displayError : true})
        }else{
            this.setState({displayResult : true})
        }
    }

    clear = () =>{
        this.setState({displayResult : false , searchData : {}})
        let clearedSearchData = {...this.state.searchData};
        clearedSearchData.searchValue = "";
        clearedSearchData.selectedCategory= ""
        this.setState({searchData : clearedSearchData});
        this.setState({displayError : false})
    }

    render(){
        let showResult = null;
        if(this.state.displayResult && !this.state.displayError){
            showResult = <SearchResponse searchData={this.state.searchData}/>
        }else if(this.state.displayError){
            showResult = <div style = {{color: "red"}}>Please select a category and provide search item</div>;
        }
        return(
            <div>
                <nav>
                <nav style={{padding:"0px"}}className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">monkeyMart</a>
                 <span className="navbar-brand">
                 </span>
                    <ul className="navbar-nav">
                       <li className="nav-item">
                        <span className="nav-link">
                        <span><FaUser/></span> Welcome Mr. Premprakash Jena
                        </span>
                       </li>
                       <li className="nav-item">
                             <span className="nav-link" >Pricing</span>
                       </li>
                       <li className="nav-item">
                             <span className="nav-link" >Logout</span>
                       </li>
                    </ul>
             </nav>
                </nav>
                <h1>Find Your Best Deals here!!</h1>
                <div>
                    <span>
                        <Dropdown id="category" value={this.state.searchData.selectedCategory} 
                            options={this.state.categories} 
                            onChange={this.onCityChange} 
                            optionLabel="name" 
                            placeholder="Select a Category" />
                    </span>
                    <span >
                    <InputText  id="search-area" value={this.state.searchData.searchValue} 
                            placeholder= "Search for products like smart phones,tvs etc..."
                            onChange={this.setSearchDataValue }/>
                                 <Button style={{border:"1px solid black"}} icon="pi pi-search" className="p-button-warning" onClick={this.submit}></Button>
                    </span>
                    <span style={{paddingLeft : "10px"}}>
                        <Button id="clear" label="Clear" className="p-button-outlined" onClick={this.clear}/>
                    </span>
                </div>
                
                <div style={{paddingTop: "40px"}}>
                    {showResult}
                </div>
            </div>
        )
    }
}

export default Search;