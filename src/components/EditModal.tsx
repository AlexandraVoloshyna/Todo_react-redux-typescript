import  { useState } from 'react'
 import { Button, Form, Modal } from 'react-bootstrap';
import { editToDo } from '../redux/todosSlice';
import { useAppDispatch } from '../redux/hooks';

interface EditModalProps {
  setShowModal: (show: boolean) => void;
  showModal: boolean;
  id:number
}


function AddModal({setShowModal, showModal, id}: EditModalProps) {
    const [todo, setTodo] = useState<string>("");
    const [description, setDescription] = useState<string>("");

  const dispatch = useAppDispatch();


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     
      dispatch(editToDo({ id, title: todo, body: description }));
      setTodo("");
      setDescription("")
      setShowModal(false)
    
    
    
  };
  return (
    <Modal show={showModal} onHide={()=>{
      setShowModal(false)
      setTodo("");
      setDescription("")
      }}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
       <Form noValidate  onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Todo title</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Title"
                
                value={todo}
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              />
              
            </Form.Group>
      
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
                placeholder="Leave a description here"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                /> 
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
