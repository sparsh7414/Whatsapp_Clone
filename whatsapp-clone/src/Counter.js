import React,{useState} from 'react'

function Counter() {
    const [count,setCount]=useState(0);
    const handleLikes=()=>{
        setCount(prevCount => prevCount+1);
    }
    const handleDisLikes=()=>{
        setCount(prevCount => prevCount-1);
    }
    return (
        <div>
            <div>
                <button onClick={handleLikes}>Likes</button>
                <h3>Total Count is {count}</h3>
                <button onClick={handleDisLikes}>Disikes</button>
            </div>        
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter
