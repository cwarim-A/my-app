import React, { Component } from "react";
// import {robots} from "./robots";
import CardList from "./cardlist";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";
import { render } from "@testing-library/react";


class App extends Component{
    constructor() {
        super()
        this.state={
            robots:[],
            searchfield:""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>
            {return response.json()})
        .then(users=>{this.setState({robots:users})});

    }

    onSearchChange=(event) => {
        
        this.setState({searchfield:event.target.value})
    }
    render() { 
        const filteredRobots = this.state.robots.filter(robots=>{return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log(filteredRobots);
     return(
        <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
         <CardList robots={filteredRobots}/>
        </Scroll>
        </div>
     );
    }
      

}


   
export default App;