import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useEffect } from 'react';
import { IFilter } from '../types/types';

// add filter by name and change styles
export const Filter = ({ ...props }: IFilter) => {
  const { filter, setFilter } = props;

  const handleChange = (e: any) => {
    setFilter(e.target.value.trim());
  }

  useEffect(() => {


  }, [filter])

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="filter">Filter news</label>
      <div className="relative">
        <ManageSearchIcon className="absolute top-1/2 translate-y-[-50%] left-2" />
        <input className="w-full h-8 border-b-1 border-indigo-500 border-t-none" type="text" id="filter" onChange={handleChange} ></input>
      </div>
    </div>
  )
}
