import React, { Component } from 'react'
import styled from 'styled-components'
import Otp from '../Otp';


const Main = styled.div`
box-sizing:border-box;
margin:0;
padding:0

`;


const Container = styled.div`
width:320px;
  height:480px;
  background:#fff;
  box-shadow:0 10px 15px rgba(179,179,179,.7);
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  border-radius:7px;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  padding:1rem;


`;

const Text = styled.h2`
color:#0A66C3;
font-size:1.6rem;
`;



const Button = styled.button`
height:50px;
  background:#4BB543;
  outline:none;
  border:none;
  border-radius:30px;
  color:#fff;
  font-size:1rem;
  font-weight:bolder;
  cursor: pointer;
  `;

  const Input = styled.input`
  position:relative;
  width:100%;
  height:50px;
  margin-bottom:.7rem;



  `;




 class Form extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
        body: 'Hi Your Otp is'
      },
      submitting: false,
      error: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  };

  
  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: '',
              body: ''
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }

render() {
    return (
        <Main>
            <Container>
    <Text>Message Sender</Text>
   <form onSubmit={this.onSubmit}
        className={this.state.error ? 'error sms-form' : 'sms-form'}
      >
    <div className="inputs">
    <lable for="number">
         Contact No
        </lable>
      <div className="input">
        <Input type="tel" name="to" id="to" value={this.state.message.to}
            onChange={this.onHandleChange} required placeholder= "Enter Number ex:- +91"/>
        
      </div>
      <Otp />
      <div className="input">
      <lable for="text">
          Message
        </lable>
        <Input  name="body" id="body"  value={this.state.message.body}
            onChange={this.onHandleChange} required placeholder= "Enter message"/>
        
      </div>
    </div>
    
    <Button type="submit" disabled={this.state.submitting}>Send</Button>
    </form>
  </Container>

        </Main>
    );
}
 }

export default Form;