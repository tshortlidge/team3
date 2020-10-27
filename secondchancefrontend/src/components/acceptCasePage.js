import React from 'react';
import {Modal_It} from './modal_it';
import {Button} from 'react-bootstrap'
function AcceptRejectCaseUI()
{
    return(
        <div>
            <Button>Accept</Button>
            <Button>Reject</Button>
        </div>
    )
}

export class AcceptCasePage extends React.Component
{
    render() {
        return (
            <div>
                <Modal_It modalTitle = {""} nameOfFunction = {""} />
                <AcceptRejectCaseUI />
            </div>
        );
    }
}