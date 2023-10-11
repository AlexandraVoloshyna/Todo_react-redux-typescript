import { TrashFill, PencilFill } from 'react-bootstrap-icons';
import { Form, ListGroup, ListGroupItem, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ToDo } from '../types/typing';
import { useAppDispatch } from '../redux/hooks';
import { deleteToDo, toggleToDo } from '../redux/todosSlice';
import EditModal from './EditModal';
import { useState } from 'react';



function TodoItem({id, title, body,completed}:ToDo) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppDispatch()
  return (
    <ListGroup horizontal className="rounded-0 bg-transparent w-100 mt-1 d-flex justify-content-center align-items-center">
                <ListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                  <Form.Check
                     type="checkbox"
                    value=""
                    checked={completed} 
                    onChange={() => dispatch(toggleToDo(id))}
                  />
                </ListGroupItem>
                <ListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                  {" "}
                  <p className="lead fw-normal mb-0">
                     {title}
                  </p>
                </ListGroupItem>
                <ListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                  {" "}
                  <p className="fw-normal mb-0">
                    {body}
                  </p>
                </ListGroupItem>
                <ListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                  <div className="d-flex flex-row justify-content-end gap-4">
                  <OverlayTrigger overlay={<Tooltip>Edit todo</Tooltip>}>
                    <PencilFill className='cursor-pointer' color='blue' size={16} onClick={()=>setShowModal(true)}/>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Delete todo</Tooltip>}>
                    <TrashFill className='cursor-pointer' color='red' size={16} onClick={()=>dispatch(deleteToDo(id))}/>
                    </OverlayTrigger>
                  </div>
                </ListGroupItem>
                <EditModal id={id} showModal={showModal} setShowModal={setShowModal}/>
  </ListGroup>
  )
}

export default TodoItem