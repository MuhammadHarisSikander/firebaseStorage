import './App.css';
import React, { useState } from 'react';
import { storage_bucket } from './firebase';
import { ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import { getDatabase, ref as habber, set } from "firebase/database";
import Logo from './img/Card.jpg'



function App() {

  const [file, setFile] = useState(null)

  const uploadFile = () => {
    const database = getDatabase();
    let fileRef = ref(storage_bucket, file.name);
    console.log("fileRef......", file.name);
    const uploadTask = uploadBytesResumable(fileRef, file);
    uploadTask.on('state_changed', (snapshot) => {
      console.log("snapshot.......", snapshot);
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done>>>', fileRef);
      if (progress === 100) {
        getDownloadURL(ref(storage_bucket, file.name)).then((url) => set(habber(database, "images/" + file.name.replace(/[^a-zA-Z0-9]/g, "")), {
          name: file.name,
          url
        }))

        alert("File Has been uploaded")
      }
    })
  }
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }} >
      <img alt='img' style={{ height: 300, width: 300 }} src={Logo} />
      <p style={{ fontSize: 30, textAlign: 'center' }} >Kindly Upload Your Documents</p>
      <div style={{ textAlignLast: 'center' }} >
        <input style={{ margin: 10 }} type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
      </div>
      <button onClick={() => uploadFile()} >Upload Image</button>
    </div>
  );
}

export default App;
