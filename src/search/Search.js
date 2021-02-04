import {Component} from "react"
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import SearchResponse from "./searchresponse/SearchResponse";

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
        displayResult: false
        
    }

    setSearchDataValue = (event) => {
        let data = {...this.state.searchData}
        data.searchValue = event.target.value;
        this.setState({searchData : data});
    }

    onCityChange = (e) => {
        let data = {...this.state.searchData}
        data.selectedCategory = e.value;
        this.setState({searchData : data});
    }

    submit = () =>{
        console.log(this.state.searchData)
        this.setState({displayResult : true})
    }

    clear = () =>{
        this.setState({displayResult : false , searchData : ""})
    }

    render(){
        let showResult = null;
        if(this.state.displayResult){
            showResult = <SearchResponse />
        }
        return(
            <div>
                <h1>Welcome To Affiliated Market</h1>
                <div>
                    <span>
                        <Dropdown value={this.state.searchData.selectedCategory} 
                            options={this.state.categories} 
                            onChange={this.onCityChange} 
                            optionLabel="name" 
                            placeholder="Select a Category" />
                    </span>
                    <span style={{paddingLeft : "10px"}}>
                        <InputText value={this.state.searchData.searchValue} 
                            placeholder= "Search an item"
                            onChange={this.setSearchDataValue }/>
                    </span>
                    <span style={{paddingLeft : "10px"}}>
                        <Button label="Search" className="p-button-outlined"  onClick={this.submit}/>
                    </span>
                    <span style={{paddingLeft : "10px"}}>
                        <Button label="Clear" className="p-button-outlined" onClick={this.clear}/>
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