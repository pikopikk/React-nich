export default function SearchForm(){
  return(
    <form action="">
      <input type="text" />
      <button onClick={
        (e)=>{
          e.preventDefault()
          alert('form diklik')
        }}
      >
        klik form
      </button>
    </form>
  )
}