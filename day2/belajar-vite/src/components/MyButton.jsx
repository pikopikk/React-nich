function MyButton({text, onSmash}){
  return (
    <button onClick={onSmash}>
      {text}
    </button>
  )
}

export default MyButton