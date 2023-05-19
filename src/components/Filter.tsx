import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { IFilter } from '../types/types';

// add filter by name and change styles
export const Filter = ({ ...props }: IFilter) => {
  const { setFilter } = props;

  const handleChange = (e: any) => {
    setFilter(e.target.value.trim());
  }

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="filter">Filter news</label>
      <div className="relative flex">
        <ManageSearchIcon className="absolute top-1/2 translate-y-[-50%] left-2" />
        <input className="w-full h-8 border-b-1 border-indigo-500 border-t-none pl-9" type="text" id="filter" onChange={handleChange} ></input>
      </div>
    </div>
  )
}
