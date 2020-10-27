//props will sent in a bunch of stuff
import React from "react";



function DropDownMenu(data){

    return(

        <select name = {data.name} value={data.selectedBirthElement} onChange={data.handleInputChange}>
            {
                data.dataArr.map(function(selectedBirthElement){
                    return <option value={selectedBirthElement}>{selectedBirthElement}</option>
                })
            }
        </select>
    )
}

function DrAttritube(data)
{
    if(data.modeID === '0') {
        return (
            <div>
                <label>
                    NPI:
                    <input
                        name="npi"
                        type="text"
                        placeholder={"npi"}
                    />
                </label>

                <br/>

                <label>
                    Speciality:
                    <input
                        name="speciality"
                        type="text"
                        placeholder={"specialty"}
                    />
                </label>

                <br/>


                <label>
                    Select Clinic:

                    <br/>
                    <DropDownMenu name={"selectedClinic"} dataArr = {data.dataArr} />

                        </label>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function GetTitle(data)
{
    if(data.modeID === '0')
    {
        return(<u>Physician Registration</u>);
    }
    else
    {
        return(<u>Patient Registration</u>);
    }
}

export function RegFunctionalComponent(props)
{
    let modeID = '0';

    return(

        <div>

            <form id={"myForm"}>
                <label>
                    <GetTitle modeID = {modeID}/>
                    <br />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        name="email"
                        type="text"
                        value={props.data.email}

                    />
                </label>

                <br />

                <label>
                    Password:
                    <input
                        name="password"
                        type="text"
                        value={props.data.password}
                    />
                </label>

                <br />

                <label>
                    Repeat Password:
                    <input
                        name="repassword"
                        type="text"
                        value={props.data.repassword}
                    />
                </label>

                <br />
                <label>
                    First Name:
                    <input
                        name="firstName"
                        type="text"
                        value={props.data.firstName}
                    />
                </label>

                <br />

                <label>
                    Last Name:
                    <input
                        name="lastName"
                        type="text"
                        value={props.data.lastName}
                    />
                </label>

                <br />
                <label>
                    Birthday:
                    <DropDownMenu name={"selectedBirthMonth"} dataArr = {props.data.date.month} />
                    <DropDownMenu name={"selectedBirthDay"} dataArr = {props.data.date.day} />
                    <DropDownMenu name={"selectedBirthYear"} dataArr = {props.data.date.year} />

                </label>

                <br />

                <DrAttritube modeID={modeID} dataArr = {props.data.hospitalNameArr}/>



                <br />
                <label>
                    Upload Profile Picture:
                    <br />
                    <div className={"UploadImg"}>

                        <button>Upload</button>
                    </div>
                </label>

                <br />
                <label>
                    Bio:
                    <br />
                    <textarea name="bio" rows="20" cols="100" placeholder={"bio"}></textarea>
                </label>
                <br />
                <br />
                <button type="button" onClick={props.handleSubmit}>Register</button>
            </form>
        </div>

    )
}