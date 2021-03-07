const Card = ({img,name,email}) => {
    return (<div><div  style={{backgroundColor:"Cyan", textAlign:"center"}}>
    <img src={img} alt="Avatar" />
    <div >
      <h4><b>{name}</b></h4> 
      <p>{email}</p> 
    </div>
  </div>
 </div>)
}

export default Card