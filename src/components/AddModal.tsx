import  { useState } from 'react'
 import { Button, Form, Modal } from 'react-bootstrap';
import { addToDo } from '../redux/todosSlice';
import { useAppDispatch } from '../redux/hooks';

interface AddModalProps {
  setShowModal: (show: boolean) => void;
  showModal: boolean;
  
}


function AddModal({setShowModal, showModal}: AddModalProps) {
    const [todo, setTodo] = useState<string>("");
    const [validated, setValidated] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  const dispatch = useAppDispatch();


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      dispatch(addToDo({ id:Math.random(), completed: false, title: todo, body: description }));
      setTodo("");
      setDescription("")
      setShowModal(false)
    }else{
      setValidated(true);
    }
    
    
  };
  return (
    <Modal show={showModal} onHide={()=>{
      setShowModal(false)
      setValidated(false);
      setTodo("");
      setDescription("")
      }}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Todo title</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Title"
                required
                value={todo}
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
              Field is required.
            </Form.Control.Feedback>
            </Form.Group>
      
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
                placeholder="Leave a description here"
                required
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                /> 
              <Form.Control.Feedback type="invalid">
              Field is required.
            </Form.Control.Feedback>
            </Form.Group>
              <Button className='mt-2' variant="success" type='submit'>
              Save todo
            </Button>
       </Form>
        </Modal.Body>
      </Modal>
  )
}

export default AddModal
