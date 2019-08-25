import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Formlabel from 'react-bootstrap/FormLabel'

 class ChatArea extends Component {
    render() {
        return (
           <Row>
               <Col>
                    <ListGroup>
                        <ListGroup.Item>
                            <Col style={styles.listLeft}>
                                <h2>{this.props.name}</h2>
                            </Col>
                            <Col style={styles.listRight}>
                                <h2>{this.props.time}</h2>
                            </Col>
                        </ListGroup.Item>
                        <ListGroup.Item style={styles.liHeight}>
                            <Col>
                            <Formlabel style={styles.lbLeft}/>
                            <Formlabel style={styles.lbRight}/>
                            
                                </Col>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <InputGroup>
                                <FormControl style={styles.liInput} placeholder="Type a message" />
                                <InputGroup.Append>
                                <Button variant="outline-primary" style={styles.liBtn}>Send</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </ListGroup.Item>
                    </ListGroup>
               </Col>
           </Row>
        )
    }
}
 const styles = {
        listLeft:{
            width: '50%',
            display: 'inline-block',
            padding:0,
            margin: 0,
            verticalAlign:'middle'  
        },
        listRight:{
            width: '50%',
            display: 'inline-block',
            padding:0,
            margin: 0,
            fontSize:"small",
            textAlign:"Right",
            verticalAlign:'middle'
        },
        liHeight:{
            height:400
        },
        liInput:{
            border:'none'
        },
        liBtn:{
            fontWeight:600
        },
        lbLeft:{
            width:'50%',
            align:'right',
            padding:10,
            border:'1px solid grey',
            
        },
        lbRight:{
            width:'50%',
            align:'left',
            padding:10,
            border:'1px solid grey',
            margin:'20rem'
           
        }
    }

export default ChatArea
