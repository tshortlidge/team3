import React from 'React';

export class CaseReview extends React.Component
{
    constructor(props) {
        super(props);
        this.data ={};
        this.data.caseTitle = 'Hello';
        this.data.category = 'Allergy and Immuniology';
        this.data.desription = 'Rashes when exposed to Germanian dogs. Rashes when exposed to Germanian dogs. ' +
            'Rashes when exposed to Germanian dogs. Rashes when exposed to Germanian dogs. Rashes when exposed to Germanian dogs. ' +
            'Rashes when exposed to Germanian dogs. Rashes when exposed to Germanian dogs. Rashes when exposed to Germanian dogs. ' +
            'Rashes when exposed to Germanian dogs. Rashes when exposed to Germanian dogs. Rashes when exposed to Germanian dogs. '
    }

    render()
    {
        return(
            <div>
                <h2>Title: {this.data.caseTitle}</h2>
                <br />
                <h3>Category: {this.data.category}</h3>
                <h3>Description</h3>
                <p>{this.data.desription}</p>
            </div>

        );
    }
}