import { debounce, InputAdornment, TextField } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useState } from 'react';

export const Filter = () => {
  const [filter, setFilter] = useState();

  const handleChange = (e: any) => {
    setFilter(e.target.value.trim());
  }

  return (
    <TextField
      variant="standard"
      label="Filter news"
      size="small"
      color="secondary"
      className="w-full mb-6"
      onChange={debounce(handleChange, 500)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <ManageSearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}
