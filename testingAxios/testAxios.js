import React from 'react';
import axios from 'axios';
//For GET/POST Request - https://www.youtube.com/watch?v=Kpr8fefjFLg&feature=emb_title

export class TestAxios extends React.Component
{
    constructor(props) {
        super(props);

        this.state ={
            homeState: ""
        }
    }

    /*
    //GET request code can go in here
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((data) => {
                //console.log(data);
                this.setState({
                homeState: data //Here we're setting the homeState variable with the value data from the get request in line 16
            }, () => {
                console.log(this.state.homeState)
            })
        }).catch((err) => {
            console.log(err);   //Catches error
        })
    }
*/
    //Up
    handleUpdateData()
    {
        const data =
            {
                "userId": 119,
                "id": 119,
                "title": "I like big butts",
                "body": "and I cannot lie"
            };

        //PUT is like POST but it can be called many time w/out side-effects
        //Therefore, use POST(URL, data) to create (initial)
        //Then use PUT(URL, data) to update
        axios.put('https://jsonplaceholder.typicode.com/posts/1', data)
            .then((data) =>
            {

                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })


    }

    handlePostData()
    {
        const data =
            {
                "userId": 911,
                "id": 911,
                "title": "I like big butts",
                "body": "and I cannot lie"
            };

        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then((data) =>
            {

                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })


    }


    handleDelData()
    {
        const data =
            {
                "userId": "2911",
                "id": "2911",
                "title": "2I like big butts",
                "body": "2and I cannot lie"
            };

        axios.delete('http://jsonplaceholder.typicode.com/posts/1', data)
            .then((data) =>{
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render()
    {
        return(
            <div>
                <h1>Info from Axios' GET Request:</h1>
                <h1>-----------------------------</h1>
                <button onClick = {this.handlePostData}>Push to start a POST REQUEST</button>
                <br />
                <button onClick = {this.handleUpdateData}>Push to start a Update the POST REQUEST with PUT</button>
                <br />
                <button onClick = {this.handleDelData}>Delete</button>
                <br />

                <h1>Now we have stored our object inside variable homeState:</h1>


            </div>
        );
    }

};