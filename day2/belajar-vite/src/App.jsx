import Container from "./components/Container";
import HelloWorld from "./components/HelloWorld";
import TodoList from "./components/TodoList";
import Table from "./table/Table";
import AlertBUtton from "./components/AlertButton";
import MyButton from "./components/MyButton";
import Toolbar from "./components/Toolbar";
import SearchForm from "./components/SearchForm";
import SayHelloForm from "./components/SayHelloForm";
import Counter from "./components/Counter";
import ContactForm from "./contact/ContactForm";
import Task from "./task/Task";

function App (){
  return(
    <>
      <Container>
        <HelloWorld/>
        <TodoList/>
        <Table/>
        <AlertBUtton text={'klik'} message={'diklik'}/>
        <MyButton text={'smash'} onSmash={()=> alert('ahuy')}/>
        <Toolbar 
          onClick={(e)=>{
            e.stopPropagation()
            alert('diklik')
          }}
        />
      </Container>
      <SearchForm/>
      <SayHelloForm/>
      <Counter/>
      <Counter/>
      <ContactForm/>
      <Task/>
    </>
  )
}

export default App