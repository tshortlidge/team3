import React from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolBar, Modal} from 'react-bootstrap';



export class DrOverlay extends React.Component
{
    constructor(props) {
        super(props);
        let App = React.create

        let Example = () => {
            const [smShow, setSmShow] = this.useState(false);
            const [lgShow, setLgShow] = this.useState(false);

            return (
                <>
                    <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
                    <Button onClick={() => setLgShow(true)}>Large modal</Button>
                    <Modal
                        size="sm"
                        show={smShow}
                        onHide={() => setSmShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm">
                                Small Modal
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>...</Modal.Body>
                    </Modal>
                    <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Large Modal
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>...</Modal.Body>
                    </Modal>
                </>
            );
        }


    }



    render() {

        return(
            <div>
                {this.Example()}

            </div>
        );
    }
}