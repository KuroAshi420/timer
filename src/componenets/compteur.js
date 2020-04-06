import React from "react";
// no need tpo import Render
import { render } from "@testing-library/react";
import Button from "./bouttons";
import TimeFormat from 'hh-mm-ss'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 , isOn : false};
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    this.setState ({ 
        isOn : true
      }) 
   this.x = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000);
    
  }
  stop()  {
    this.setState ({isOn: false}) 
    clearInterval(this.x)
  }
  reset = () => {
    clearInterval(this.x)
    this.setState ({counter: 0, isOn: false})
  } 
  render() {
    return (
      <div className="main" >
        <h1> {TimeFormat.fromS(this.state.counter, 'hh:mm:ss')}</h1>
        <div className="descrip">
            <span>Hour</span>
            <span>Minute</span>
            <span>Second</span>
        </div>
        {/* the onClick should be in camelCase  */}
       <div className="btns">
       <Button  btn="Start" onClick={(!this.state.isOn)?
                    this.start : this.stop}/>
        <Button  btn="Reset" onClick= {this.reset}/>
       </div>
        
      </div>
    );
  }
}
export default Timer;
