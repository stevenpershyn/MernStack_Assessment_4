import React, { Component } from "react";

import Header from "./CommonComponent/HeaderComponent";

export default class Application extends Component {
        constructor(props){
            super(props)  

            //state : is data object to apply changes in react component and call render method to create virtual dom
            this.state = {
                headerValue : "My First React Application Page"
            }  
            this.number = 20
        }

        changeText = (evt)=>{

            console.log(evt)

            //this.state.headerValue = "New Title MERNStack "+this.number //will not work as render will not be invoked

            //api to udpate the virtual dom by calling react renderer
            //batch process to update multiple states in concurrent using callback
            //1. first and recommended way
            this.setState({
                headerValue : "New Title MERNStack "+this.number
            })

            //2. force update : not recommended as it skips life cycle methods like - shouldcomponentupdate
            // this.state.headerValue = "New Title MERNStack "+this.number
            // this.forceUpdate() //forcefully invoke render, should be avoided

            this.number++

            console.log("on click "+ this.state.headerValue)

            evt.preventDefault()//to stop the default behaviour of event bubbling
        }

        render(){
            let name = "Van Duc Phan"
            console.log("Creating virtual dom "+ this.state.headerValue)
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