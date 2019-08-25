import React, {Component} from 'react'
import {Navlink} from 'react-router-dom'
class Navbar extends Component{
    render(){
        const navlinks=['Home','About','Contact', 'Chat','EditProfile']
        return(
             <div>
                 <ul>
                     {
                         navllinks.map(item=>item=='Home'?<li><Navlink to='/'>{item}</Navlink></li>:<li><Navlink to={`/${item.toLowerCase()}`}>{item}</Navlink></li>)
                     }
                 </ul>
             </div>
        )
    }
}