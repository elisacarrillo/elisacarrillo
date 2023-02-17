import { useState } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { fs } from "../base.js";


const Blog = () => {
    function goToCard(uid) {
        window.location.href = "/blog/" + uid;
    }
    const [info, setInfo] = useState([]);
    const [once, setOnce] = useState(true);
    async function getBlog() {
        
        const querySnapshot = await getDocs(collection(fs, "blog"));
        const map = [];
        querySnapshot.forEach((doc) => {
            map.push(doc.data());
            console.log(doc.id +  " => " + doc.data());
            console.log(doc.data().timestamp);
            setInfo(arr => [...arr, doc.data()]);

        });
        return map;
    }
    if (once) {
        getBlog();
        setOnce(false);
    }

    return (
        <div className='blog'>
            <br></br>
            <h1 className='h1New'>Blog</h1>
            {/* <br></br> */}
            {info.map(function(item, idx) {
                return (
                    <div className='card' onClick={()=>goToCard(item.title)}>
                        {/* <h2 >Title </h2> */}
                        <h2> {item.title}</h2>
                        <p >{item.date}</p>
                        <p >{item.content}</p>

                       
                    </div>
                )
            })}
        

        {/* <h1>Blog</h1> */}
        </div>
    )
};
export default Blog;