import Container from "./components/Container";
import HelloWorld from "./components/HelloWorld";
import TodoList from "./components/TodoList";
import Table from "./table/Table";

function App (){
  return(
    <>
      <Container>
        <HelloWorld/>
        <TodoList/>
        <Table/>
      </Container>
    </>
  )
}

export default App