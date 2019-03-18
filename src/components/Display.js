import React, { Component } from 'react';
import axios from 'axios';

export class Display extends Component {

    state={
        beers:[],
    }

    componentDidMount(){
       
        axios.get(`https://api.punkapi.com/v2/beers/`)
        .then(res=>
            {this.setState({beers:res.data});
            console.log(this.state.beers);
        })
        
      }

   
render(){
  return this.state.beers.map((beer)=>(
    <>
    <div key={beer.id}>
    <h3 className="text-left" style={headerStyle}>{beer.name}</h3>
    <p className="text-left">{beer.description}</p>
    <hr/>
    </div>
    </>
));
  }

}

const headerStyle={
    color:"#3498DB"
};

export default Display;
