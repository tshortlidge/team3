//props will sent in a bunch of stuff
import React from "react";

export function DropDownMenu(data)
{

    /*

                <select name = "selectedBirthMonth" value={this.state.value} onChange={this.handleInputChange}>
                    {props.date.month.map(function(selectedBM){
                        return <option value={selectedBM}>{selectedBM}</option>
                    })}

                </select>

                <select name = "selectedBirthDay" value={this.state.value} onChange={this.handleInputChange}>
                    {props.date.day.map(function(selectedBirthD){
                        return <option value={selectedBirthD}>{selectedBirthD}</option>
                    })}
                </select>

                <select name = "selectedBirthYear" value={this.state.value} onChange={this.handleInputChange}>
                    {props.date.year.map(function(selectedBirthY){
                        return <option value={selectedBirthY}>{selectedBirthY}</option>
                    })}
                </select>

                <select name = "selectedHospitalName" value={props.value} onChange={props.handleInputChange}>
                    {props.hospitalNameArr.map(function(hospitalName){
                        return <option value={hospitalName}>{hospitalName}</option>
                    })}


                </select>
     */
    console.log("tagname == " + data.tagName)
    return(

        <select name = {data.tagName} value={data.selectedBirthMonth} onChange={data.handleInputChange}>
            {
                data.dataArr.map(function(selectedMonth){
                    return <option value={selectedMonth}>{selectedMonth}</option>
                })
            }
        </select>
    )
}
export function DrRegFunctionalComponent(props)
{
    console.log(123);


    return(

    <div>

        <form onSubmit= {e => props.handleSubmit(e)}>
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
                    value={props.email}
                    onChange={props.handleInputChange}
                />
            </label>

            <br />

            <label>
                Password:
                <input
                    name="password"
                    type="text"
                    value={props.password}
                    onChange={props.handleInputChange}
                />
            </label>

            <br />

            <label>
                Repeat Password:
                <input
                    name="repassword"
                    type="text"
                    value={props.repassword}
                    onChange={props.handleInputChange}
                />
            </label>

            <br />
            <label>
                First Name:
                <input
                    name="firstName"
                    type="text"
                    value={props.firstName}
                    onChange={props.handleInputChange}
                />
            </label>

            <br />

            <label>
                Last Name:
                <input
                    name="lastName"
                    type="text"
                    value={props.lastName}
                    onChange={props.handleInputChange}
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
                    value={props.npi}
                    onChange={props.handleInputChange}
                />
            </label>

            <br />

            <label>
                Speciality:
                <input
                    name="speciality"
                    type="text"
                    value={props.speciality}
                    onChange={props.handleInputChange}
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
                <textarea name="bio" rows="20" cols="100" value={props.bio} onChange={props.handleInputChange}></textarea>
            </label>
            <br />
            <br />
            <button type="submit" value={props.value}>Register</button>
        </form>
    </div>

    )
}

