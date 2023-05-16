import { useEffect, useState } from "react";
import { useSpaceService } from '../services/SpaceService';
import { ITotalCount } from "../types/types";

export const TotalCount = ({ ...props }: ITotalCount) => {
  const { filter, limit } = props;
  const { getNewsCount } = useSpaceService();
  const [count, setCount] = useState('');

  useEffect(() => {
    getNewsCount(limit, filter as string)
      .then(onRequest)
  }, [filter]);

  const onRequest = (count: string) => {
    setCount(count);
  }

  return (
    <div
      className="flex items-center justify-between text-slate-600 text-base border-0 border-b border-solid border-gray-300 mb-4"
    >
      Results: {count}
    </div>
  )
}
