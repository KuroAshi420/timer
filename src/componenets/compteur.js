import React from 'react'
import { render } from '@testing-library/react';
import Button from './bouttons';


class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter : 0}
        this.start = this.start.bind(this);
       }

       start() {
        setInterval (
         () => {this.setState({
    counter: this.state.counter+1
 })},
 1000 
 )}
       render(){
           return <div>
                 <h1>{this.state.counter}</h1> 
             <Button btn = "Start" onClick={this.start}  />
           </div>
       }
    }
export default Timer;

