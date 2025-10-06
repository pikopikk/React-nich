export default function SayHelloForm(){
  function handleClick(e){
    e.preventDefault()
    const name = document.getElementById('input-name').value
    document.getElementById('text-helo').innerText = `hello ${name}`
  }

  return(
    <div>
      <form action="">
        <input id="input-name" type="text" />
        <button onClick={handleClick}>
          say hhello
        </button>
      </form>
      <h1 id="text-helo">
        helo word
      </h1>
    </div>
  )
}