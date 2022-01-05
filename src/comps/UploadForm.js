import React from 'react'
import { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null); //state for image file
    const [error, setError] = useState(null); //state for error 
    const types = ['image/png', 'image/jpeg']; //type of files allowed

    const changeHandler = (e) => {
        let selected = e.target.files[0] //variable created to select the first file a user uploads
        if (selected && types.includes(selected.type)) {
            setFile(selected); //if a file is selected and it matches one of the file types, it is stored in the local state
            setError('') 
        } else {
            setFile(null);
            setError('Please select an image flie (png or jpeg)') //if the file does not match chosen types, an error message will pop up
        }
    }

    return (
        <form>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
            </label>
            <div className="output">
                {error && <div className='error'>{error}</div>} 
                {file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
            </div>
        </form>
    )
}

export default UploadForm
