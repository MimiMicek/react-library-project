import React from 'react';
import Button from '@material-ui/core/Button';
import socketIOClient from 'socket.io-client'

export default class ChangeColour extends React.Component{
    constructor() {
        super();
        this.state = {
          endpoint: "localhost:8080",
          color: 'white'
        };
      }
    
      send = () => {
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('change color', this.state.color)
      }

      setColor = (color) => {
        this.setState({ color })
      }

      componentDidMount = () => {
        const socket = socketIOClient(this.state.endpoint);
        setInterval(this.send(), 1000)
        socket.on('change color', (col) => {
            document.body.style.backgroundColor = col
        })
    }
  
    render(){

        const socket = socketIOClient(this.state.endpoint);
            socket.on('change color', (col) => {
            document.body.style.backgroundColor = col
            })

        return(
            <div style={{ textAlign: "center" }}>
              <button onClick={() => this.send() }>Change Color</button>
              <button id="blue" onClick={() => this.setColor('lightskyblue')}>Blue</button>
              <button id="pink" onClick={() => this.setColor('bisque')}>Pink</button>
            </div>
        )
    }
}