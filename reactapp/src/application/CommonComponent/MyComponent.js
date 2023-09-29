import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
        console.log('Constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        return null;
      }

    componentDidMount(){
        this.setState({data: [1, 2, 3] });
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState)
        if(this.state.data === nextState.data){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
    }

    componentWillUnmount(){
        console.log("Component Will Unmount!!!")
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
    }

    render() {
        console.log('Render');
        return (
            <div>
                <ul>
                    {this.state.data.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default MyComponent;