import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import fire from './../config'
import {NavLink} from 'react-router-dom'

export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    formVal=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
    })
}

    loginuser=(e)=>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{
        })
            alert('Logged In')
        .catch((err)=>{
            alert(err.message);
        })

    }
    render() {
        return (
            <Container>
                <Row>
                <Col md={{span:6,offset:3}}>
                <form onSubmit={this.loginuser}>
                   <input type="text" placeholder="Email Id" onChange={this.formVal} name="email" 
                   value={this.state.email} />
                    <input type="password" placeholder="Password" onChange={this.formVal} name="password"
                    value={this.state.password}/>
                    <button>Sign In</button>
                </form>
                <NavLink to='/register'>Create An Account?</NavLink>
                </Col>
                </Row>
             </Container>
        )
    }
}

export default Login
