function Toolbar({onClick}){
  return(
    <div onClick={onClick} style={{backgroundColor:'red'}}>
      <button onClick={onClick}>first</button>
      <button onClick={onClick}>second</button>
    </div>
  )
}

export default Toolbar