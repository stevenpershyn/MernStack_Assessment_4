import React, { Component } from "react";

import Header from "./CommonComponent/HeaderComponent";

export default class Application extends Component {
        constructor(props){
            super(props)    
        }

        render(){
            let name = "Van Duc Phan"
            //JSX - code, html+javascript creating a virtual dom
            return( 
                <>
                    <Header />
                    <h1>My First React Application Page</h1>   
                    <h2> Hello React {name} </h2>
                </>
            )
        }
}