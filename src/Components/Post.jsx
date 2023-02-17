import React, {useState, useEffect} from 'react';
import { getDoc, doc } from "firebase/firestore";
import { fs } from "../base.js";
import { collection } from "firebase/firestore";
import Footer from './Footer';
import '../index.css';
const Post =  () => {

    const [lookupTitle, setLookupUTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    async function getPostInfo(id) {
        // get the post info from the database using the title
        // return that specific blog post info
        console.log("Title: " + title)
        const docRef = doc(fs, "blog", id );
        // const collectionRef = collection(fs, lookupTitle);
        console.log(docRef);
        const docSnap = await getDoc(docRef);
        // const user = auth.currentUser;
        // const docRef2 = doc(firestore, "admins", user.uid);
        // const docSnap2 = await getDoc(docRef2);

    
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setContent(docSnap.data().content);
            setDate(docSnap.data().date);
            setTitle(docSnap.data().title);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

        

    }
    
    useEffect(()=> {
        const tempTitle = window.location.pathname.slice(6,);
        setId(tempTitle);
        console.log(tempTitle);
        getPostInfo(id);
        
        // console.log("Important");
        // console.log(data[1]);
        // setFname(data.firstName);

    })
    return (
        <><br></br><div className='post'>
            {/* <h1>Post</h1> */}
            <div className='card2'>

                <h2 className='h1New'>{title}</h2>
                <p className='p2'>{date}</p>
                <p className='p2'>{content}</p>
            </div>
        </div>
        <Footer />
        </>

    )
}
export default Post;