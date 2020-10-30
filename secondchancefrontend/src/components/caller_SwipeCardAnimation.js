import React from 'react';
import {Button, Carousel, Modal} from "react-bootstrap";
import Header from '../views/header';
import Body from '../views/body';
import '../css/animatedBackground.scss';

export class Caller_SwipeCardAnimation extends React.Component
{
    constructor(props) {
        super(props);
        this.state =
            {
                show: false
            }
    }
    handleModal()
    {
        this.setState({show:!this.state.show})
    }

    render() {
        return(
          <div>


              <Button onClick={()=>{this.handleModal()}}>
                  Select Physician
              </Button>


              <Modal show = {this.state.show}
                     size = {'xl'}
              >
                  <Modal.Header>
                      Case Pictures
                      <Button onClick={()=>{this.handleModal()}}>
                          Close
                      </Button>
                  </Modal.Header>
                  <Modal.Body>

                      <Header />
                      <Body />
                  </Modal.Body>
                  <Modal.Footer>

                  </Modal.Footer>
              </Modal>


          </div>
        );
    }
}