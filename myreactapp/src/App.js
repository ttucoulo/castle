import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table"
import "react-table/react-table.css"

class App extends Component {

  constructor(props){
	super(props);

	this.state={
		posts:[]
	}

  }

  componentDidMount(){
  	const url="https://jsonplaceholder.typicode.com/posts";
  	fetch(url,{method:"GET"}).then(response =>response.json()).then(posts=>{
		this.setState({posts:posts});
        })
  }

  render() { 
	const columns=[
		{
			Header:"Hotel name",
			accessor:"hotel Name "
		},
		{
			Header :"Price",
			accessor:"hotel Price"
		},
		{
			Header:"Link for reservation",
			accessor:"Link for Reservation"
		}
	]


    return (

	

<ReactTable columns={columns}
	data={this.state.posts}>
</ReactTable>

    );
  }
}

export default App;



