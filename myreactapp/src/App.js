import React, { Component } from 'react';
import './App.css';
import ReactTable from "react-table"
import "react-table/react-table.css"
import myData from './MixJson.json';

class App extends Component {

  constructor(props){
	super(props);

	this.state={
		posts:[]
	}

  }

  render() { 
	const columns=[
		{
			Header:"Hotel name",
			accessor:"hotelName"
		},
		{
			Header :"Price",
			accessor:"hotelPrice"
		},
		{
			Header:"Link for reservation",
			accessor:"LinkforReservation"
		}
	]


    return (

	

<ReactTable columns={columns}
	data={myData}>
</ReactTable>

    );
  }
}

export default App;



