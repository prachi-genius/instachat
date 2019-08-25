import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import Status from './../Home/Status'
import ChatArea from './ChatArea'
class LeftBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             statusPictures:['https://via.placeholder.com/30'],
             Friend:'Name',
             time:'time'
        }
    }
    updateVal =(e)=>{
        console.log(e.target.innerText)
        this.setState(
            {
                [e.target.getAttribute("name")]:e.target.innerText,
            }
        )
        console.log(e.target.getAttribute("name"))
    }

    render() {
        // const Friends=[1,2,3,4,5,6,7,8,9,10,11,12]
        const ActiveTime=['21min','45min','1d','50min', '1 month','3min','4d','55min']
        return (
                <Container>
                <Row>
                    <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item active>Active Friends</ListGroup.Item>
                            
                            {ActiveTime.map((time,key)=>
                            <ListGroup.Item key={key}>
                                {
                                    this.state.statusPictures.map((picture)=><Status source={picture} />)
                                }
                                <Image src={this.props.source} roundedCircle/>
                               <p style={styles.listLeft} name="Friend" onClick={this.updateVal}>Friend {key+1}</p>
                               <p style={styles.listRight} name="time" onClick={this.updateVal}>{time} ago</p>
                            </ListGroup.Item>)}
                            
                        </ListGroup>
                    </Col><Col md={8}>
                        <ChatArea name={this.state.Friend} time={this.state.time} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const styles={
    listLeft:{
        width: '40%',
        display: 'inline-block',
        padding:0,
        margin: 0,
        cursor:'pointer'
    },
    listRight:{
        width: '40%',
        display: 'inline-block',
        padding:0,
        margin: 0,
        fontSize:"x-small",
        textAlign:"Right"
    },
    align:{
        display:'inline-block'
    }
}
export default LeftBar
