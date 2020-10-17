import React, {useState} from "react";
import '../css/multiBrowseButton.css';

export class MultiBrowseButton extends React.Component
{
    constructor(props) {
        super(props);
        const [selectedFiles, setSelectedFiles] = useState([]);

    }


    handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
        );

        // console.log("filesArray: ", filesArray);

        this.setSelectedFiles=((prevImages) => prevImages.concat(filesArray));
        Array.from(e.target.files).map(
            (file) => URL.revokeObjectURL(file) // avoid memory leak
        );
    }
};

    renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
        return <img src={photo} alt="" key={photo} />;
    });
};

    render() {
        return (
            <div className="app">
                <div className="heading">React Multiple Images Preview</div>
                <div>
                    <input type="file" id="file" multiple onChange={this.handleImageChange} />
                    <div className="label-holder">
                        <label htmlFor="file" className="label">
                            <i className="material-icons">add_a_photo</i>
                        </label>
                    </div>
                    <div className="result">{this.renderPhotos(this.selectedFiles)}</div>
                </div>
            </div>
        );
    }
}