import React from 'react';
import {Modal_It} from './modal_it';

export class Contact extends React.Component
{
    constructor(props) {
        super(props);

        this.state ={
            physician_email: 'foolycooly288622@yahoo.com'
        };
    }

    displayLoginForm = () =>
    {
        return(
          <div>
              <h1 style={{textAlign: 'center'}}>Contact Me</h1>

              <table>
                  <tr>
                      <td>
                          <div className = {"container"} >
                              <form action = { `mailto:${this.state.physician_email}`} method={ "post"}
                                    encType={ "text/plain" } className={ "form-control" }>
                                  <tr>
                                      <td>
                                          <label>Name: </label>
                                          <input type={ "text" } name={ "From "} className={ "form-control"} />
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <label>Email: </label>
                                          <input type={  "email" } name={  "Recipient's Email " }
                                                 className={  "form-control" } />
                                      </td>
                                  </tr>


                                  <tr>
                                      <td>
                                          <label>Message: </label>
                                          <br />
                                          <textarea name={  "Message " }rows={  "20"} cols={  "100"}
                                                    className={  "form-control" }></textarea>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>

                                          <input type={  "submit"} name = { "" }/>

                                      </td>
                                  </tr>
                              </form>
                          </div>
                      </td>
                  </tr>
              </table>
          </div>
        );
    }

    render() {


        return(
            <div>

                {this.displayLoginForm()}
            </div>
        );
    }
};

//<Modal_It nameOfFunction={this.displayLoginForm()} modalTitle={"Contact"} />