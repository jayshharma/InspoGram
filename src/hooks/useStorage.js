import { useEffect, useState } from "react";
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

//custom hook that handles file uploads and provides useful information about them

const useStorage = (file) => { //function takes in the file user selects as a parameter
    const [progress, setProgress] = useState(0); //progress of upload 
    const [error, setError] = useState(null); //any errors in upload
    const [url, setUrl] = useState(null); //img url obtained from storage after the image has fully uploaded

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name); 

        const collectionRef = projectFirestore.collection('images') //references the collection we are saving the document (images) to

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; //calculates percentage of the upload
            setProgress(percentage);
        
        }, (err) => {
            setError(err);
        },  async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt });
            setUrl(url);
        })
    }, [file]) //for every new file value, the useEffect function runs

    return { progress, error, url }
}

export default useStorage