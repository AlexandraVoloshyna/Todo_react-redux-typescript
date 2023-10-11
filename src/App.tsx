import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import { useState } from 'react';
 import { Button, } from 'react-bootstrap';
import AddModal from './components/AddModal';
import TodoList from './components/TodoList';
import Filter from './components/Filter';



function App() {
   const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <Container>
    <Row className='justify-content-center'>
      <Col lg="8" xl="6">
        <Container className="m-2">
          <h1 className="text-center">ToDo App</h1>
          <Button variant="primary" onClick={()=>setShowModal(true)} className='w-100'>Add todo</Button>
          <Filter />
          <TodoList /> 
          <AddModal showModal={showModal} setShowModal={setShowModal}/>
        </Container>
      </Col>
    </Row>
  </Container>
  )
}

export default App
