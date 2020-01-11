import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import socketIOClient from 'socket.io-client';

export default class ChangeColour extends React.Component{
    constructor() {
        super();
        this.state = {
          endpoint: "localhost:8080",
          color: "white"
        };
      }
    
      send = () => {
        const socket = socketIOClient(this.state.endpoint);
        socket.emit("change color", this.state.color)
      }

      setColor = (color) => {
        this.setState({ color })
      }

      componentDidMount = () => {
        const socket = socketIOClient(this.state.endpoint);
        setInterval(this.send(), 1000)
        socket.on("change color", (col) => {
            document.body.style.backgroundColor = col
        })
    }
  
    render(){

        const socket = socketIOClient(this.state.endpoint);
            socket.on("change color", (col) => {
            document.body.style.backgroundColor = col
            })

        return(
            <div>
              <ButtonGroup variant="text" aria-label="text primary button group">
                <Button onClick={() => this.send() }>Change Colour</Button>
                <Button id="light-blue" onClick={() => this.setColor("LightBlue")}>Light Blue</Button>
                <Button id="ivory" onClick={() => this.setColor("Ivory")}>Ivory</Button>
              </ButtonGroup>
            </div>
        )
    }
}