import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import {NavLink} from 'react-router-dom'
import Dialog from './Dialog'
 class EditPage extends Component {
     constructor(props){
         super(props);
         this.state={
             addDialogClose:'',
            addDialogShow:false
         }

     }
    render() {
        const addDialogClose=()=>this.setState({addDialogShow:false});
        return (
            <Row>
                <Col>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                        <Col md={6} >
                        <Image src={"https://via.placeholder.com/40"} roundedCircle  />
                        </Col>
                        <Col md={6} style={styles.liLeft}>
                        <p style={styles.liLeft}>prachi_128</p>
                        <Col>
                    <NavLink onClick={()=>this.setState({addDialogShow:true})}>EditPhoto</NavLink>
                    <Dialog  show={this.state.addDialogShow}
                    onHide={addDialogClose}/>
                    </Col>
                        </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item style={styles.liHeight}>
                        <Col></Col>
                    </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        )
    }
}
const styles={
    liHeight:{
        height:400
    },
    liLeft:{
        margin:5 ,
        align:'right'
    }
}
export default EditPage
