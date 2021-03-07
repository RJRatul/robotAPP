import Card from "./Card";
import {useState,useEffect} from 'react'
import './Box.css'
const Box = ({array}) => { 

 
  return (
    <div className="box">
        {array.length===0 && <h3>Loading</h3>}
     {array.map((data,index)=><Card img={`https://robohash.org/${index}?200x200`} name={data.name} email={data.email} key={index}/>)}
    </div>
  );
};

export default Box;
