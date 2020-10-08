import React from 'react';
import {Button, Modal} from 'react-bootstrap';

import '../css/login.css';
export class Login extends React.Component
{
    constructor(props) {
        super(props);

        this.state =
            {
                email: '',
                password: '',
                show: false



            };



    }



    handleInputChange = (event) =>
    {
        this.setState(
            {

                [event.target.name]: event.target.value
            })

    }

    handleSubmit = (event) =>
    {
        const data = this.state;

        /*
        axios.post('http://172.116.201.31:8080/adduser',data)
            .then(resp => console.log(resp));
        */

        /*
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        };
        fetch('http://172.116.201.31:8080/adduser', requestOptions)
            .then(response => console.log(response))
            .then(data => this.setState({ postId: data.id }));
        */
        alert(`Test Variables
               --------------
                  Email: ${this.state.email} 
               Password: ${this.state.password}
                    
                    xxxxxxxxxxxxxxxxxxxxxxxx
      
                  Email: ${data.email} 
               Password: ${data.password}
                `

        );


        event.preventDefault();
    }




    showLogin = () =>
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <br />
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required/>
                </label>



                <br />
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required/>
                </label>

                <br />



                <button type="submit" value={this.state.value}>Login</button>
            </form>
        );
    }



    handleModal()
    {
        this.setState({show:!this.state.show})
    }

    render() {
        return(
            <div>
                <div className="center">
                    <Button onClick={()=>{this.handleModal()}}>Login</Button>
                </div>
                <Modal show ={this.state.show}>
                    <Modal.Header>Login</Modal.Header>
                    <Modal.Body>
                        {this.showLogin()}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{this.handleModal()}}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>






            </div>


        );
    }

}