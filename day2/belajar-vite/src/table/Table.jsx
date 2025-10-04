import Row from "./Row";

function Table(){
  return(
    <table border={'1'}>
      <tbody>
        <Row id={'1'} text={'satu'}/>
        <Row id={'2'} text={'dua'}/>
        <Row id={'3'} text={'tiga'}/>
      </tbody>
    </table>
  )
}

export default Table