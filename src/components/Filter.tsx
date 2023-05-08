import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useState } from 'react';

// add filter by name and change styles, add types
export const Filter = () => {
  const [filter, setFilter] = useState();

  const handleChange = (e: any) => {
    setFilter(e.target.value.trim());
  }

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="filter">Filter news</label>
      <ManageSearchIcon />
      <input className="w-full h-8 border-b-1 border-indigo-500 border-t-none" type="text" id="filter" onChange={handleChange} ></input>
    </div>
  )
}
