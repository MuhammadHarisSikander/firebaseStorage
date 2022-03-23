import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "./firebasee";



const Collection = () => {
    const [arr, setArr] = useState([])

    useEffect(() => {
        const xxx = ref(database, 'images');
        onValue(xxx, (snapshot) => {
            let _data = []
            for (var name in snapshot.val()) {
                let value = snapshot.val()[name]
                _data.push(value)
            }
            setArr(_data)
        })
    }
        , [])

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: 20 }} >
            {
                arr.map((val, key) => {
                    return (
                        <div key={key}>
                            <img style={{ border: '2px solid black' }} width="500" height="200" sizes="cover" src={val.url} />
                            <h4 style={{ textAlign: 'center' }}> <h3>Image Name</h3>{val.name}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Collection