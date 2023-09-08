import React, { Component } from "react";

import Header from "./CommonComponent/HeaderComponent";

export default class Application extends Component {
        constructor(props){
            super(props)  
            this.state = {
                headerValue : "My First React Application Page"
            }  
        }

        changeText = ()=>{
            this.setState({
                headerValue : "New Title MERNStack"
            })
        }

        render(){
            let name = "Van Duc Phan"
            console.log("Creating virtual dom")
            //JSX - code, html+javascript creating a virtual dom
            return( 
                <>
                    <Header />
                    <h1>{this.state.headerValue}</h1>   
                    <button onClick={this.changeText}>Change Text</button>
                    <h2> Hello React {name} </h2>
                </>
            )
        }
}