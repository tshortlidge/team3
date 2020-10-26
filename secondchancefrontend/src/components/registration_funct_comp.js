//props will sent in a bunch of stuff
import React from "react";



function DropDownMenu(data){

    return(

        <select name = {data.dataArr} value={data.selectedBirthMonth} onChange={data.handleInputChange}>
            {
                data.dataArr.map(function(selectedMonth){
                    return <option value={selectedMonth}>{selectedMonth}</option>
                })
            }
        </select>
    )
}
export function RegFunctionalComponent(props)
{

    return(

        <div>

            <form id={"myForm"}>
                <label>
                    <u>Registration for Physicians</u>
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

                </label>

                <br />

                <label>
                    NPI:
                    <input
                        name="npi"
                        type="text"
                        placeholder={"npi"}
                    />
                </label>

                <br />

                <label>
                    Speciality:
                    <input
                        name="speciality"
                        type="text"
                        placeholder={"specialty"}
                    />
                </label>

                <br />


                <label>
                    Select Clinic:

                    <br />



                </label>



                <br />
                <label>
                    Upload Profile Picture:
                    <br />
                    <div className={"UploadImg"}>

                        <button >Upload</button>
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