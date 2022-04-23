import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import Navbar from './Navbar';
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {

  const [post, setPost ] = useState([])

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res =>res.json())
  .then(res2 =>setPost(res2))
},[])
  
  return (
    <div className="App">
      <Navbar/>
      <SkeletonTheme baseColor="#0f2020" highlightColor="#005444">
      <div className='container'>
       {post.map((value,index)=>(
          <Card key={index} value={value}/>
          ))}
      </div>
      </SkeletonTheme>
    </div>
  );
}

export default App;
