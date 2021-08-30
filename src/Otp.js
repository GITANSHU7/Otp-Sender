import React , {Component} from 'react';
import styled from 'styled-components'



const Button = styled.button`
height:50px;
  background:#0A66C3;
  outline:none;
  border:none;
  border-radius:30px;
  color:#fff;
  font-size:1rem;
  font-weight:bolder;
  `;


class Otp  extends Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    
    const rand = Math.floor(100000 + Math.random() * 900000);
    this.setState ({rand });
  }

 

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Button  onClick={this.handleClick.bind(this)}>Click to generate otp</Button>
          <div className="card" style={{marginTop:"10px"}}>
            <div className="card-block">
               {this.state.rand}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Otp;