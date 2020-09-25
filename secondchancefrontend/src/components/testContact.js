import React from 'react';

export class Contact extends React.Component
{

    render() {
        return(
            <div>

                <h1>Contact Me</h1>

                            <table cellSpacin={ "20" } bgcolor={ "#339966" } width={ "600" } height={ "auto" }>
                                <tr>
                                    <td>

                                        <div className = {"container"}>
                                            <form action = { "mailto:foolycooly288622@yahoo.com"} method={ "post"}
                                                  encType={ "text/plain" } className={ "form-control" }>
                                                <tr>
                                                    <td>
                                                        <label><strong>Name: </strong></label>
                                                        <input type={ "text" }name={ "From: "} value={ ""}
                                                               className={ "form-control"} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label><strong>Email: </strong></label>
                                                        <input type={  "email" } name={  "Recipient's Email: " } value={  ""}
                                                               className={  "form-control" } />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor={  "subject"}>Subject</label>
                                                        <textarea id={  "subject"} name={  "subject"}
                                                                  placeholder={  "Write something.."}
                                                                  style={  "height:200px"}></textarea>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <label><strong>Message: </strong></label>
                                                        <textarea name={  "Message: " }rows={  "20"} cols={  "100"}
                                                                  className={  "form-control"}></textarea>
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
};