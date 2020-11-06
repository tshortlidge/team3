import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {LoginRegisterDisplay} from "./loginRegisterDisplay";

export class Modal_It extends React.Component
{
    constructor(props) {
        super(props);
        this.state =
            {
                show: true
            }
    }
    handleModal()
    {
        this.setState({show:!this.state.show})
    }



    getTitle

    render() {
        return(
            <div>
                <div >
                    <Modal show ={this.state.show}  class="modal-body" className="modal-dialog" role="document">
                        <Modal.Header>{this.props.modalTitle}</Modal.Header>
                        <Modal.Body>

                            {this.props.nameOfFunction}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={()=>{this.handleModal()}}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        );
    }
}