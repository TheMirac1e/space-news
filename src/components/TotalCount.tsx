import { Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useSpaceService } from '../services/SpaceService';

export const TotalCount = () => {
  const { getNewsCount } = useSpaceService();
  const [count, setCount] = useState('');

  useEffect(() => {
    getNewsCount('')
      .then(onRequest)
  }, []);

  const onRequest = (count: string) => {
    setCount(count);
  }

  return (
    <Typography
      component="div"
      className="flex items-center justify-between text-slate-600 text-base border-0 border-b border-solid border-gray-300 mb-4"
    >
      Results: {count}
    </Typography>
  )
}
