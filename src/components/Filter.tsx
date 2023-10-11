import { setFilter } from "../redux/filterSlice"
import { useAppSelector, useAppDispatch } from '../redux/hooks.js';


function Filter() {
    const {filter} = useAppSelector((state => state.filter))
 const dispatch = useAppDispatch()
 const handleFilter = (event:React.ChangeEvent<HTMLSelectElement>) => {
  dispatch(setFilter(event.target.value as "all" | "completed" | "active"))
}
  return (
            <div className="d-flex justify-content-end mt-2">
                <select value={filter}  onChange={handleFilter}>
                <option value='all'>all</option>
                <option value='completed'>completed</option>
                <option value='active'>active</option>
                </select>
            </div>
        )

}

export default Filter