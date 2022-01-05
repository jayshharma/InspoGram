import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc') //ordered by date
        .onSnapshot((snap) => { //everytime a new document has been added to the collection, we are notified through the Snapshot function
            let documents = []; //retrieves doc onces intially, and everytime a new doc is added
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents)
        });

        return () => unsub(); //unsubscribes from collection when we no longer use it 
    }, [collection])

    return{ docs };
}

export default useFirestore