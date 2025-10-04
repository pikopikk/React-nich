import HelloWorld from "./HelloWorld"

function Container ({children}){
  return(
    <>
      <div>
        <h1>
          ahuy
        </h1>
        {children}
        <footer>
          <p>
            ini footer
          </p>
        </footer>
      </div>
    </>
  )
}

export default Container