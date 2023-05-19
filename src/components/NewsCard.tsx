import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { INewsCard } from '../types/types';
import { Link } from 'react-router-dom';
import Highlighter from "react-highlight-words";

// TODO remove material icons if needed, fix card shadow
export const NewsCard = ({ ...props }: INewsCard) => {
  const { image, date, title, subtitle, id, filter } = props;
  const formatDate = new Date(date).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <article className="rounded flex flex-col shadow-black shadow-sm">
      <img className="h-40 object-cover object-center rounded-t-[4px]" src={image} alt="news title image"></img>
      <div className="p-4 flex flex-col h-full">
        <p className="text-[12px] text-gray-600 flex items-center gap-1 mt-0 mb-[10px]">
          <CalendarMonthIcon fontSize="inherit" />
          {formatDate}
        </p>
        <h3 className="text-[20px] mb-[10px]">
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[filter]}
            autoEscape={true}
            textToHighlight={title} />
        </h3>
        <p className="text-[14px] mb-[15px]">
          {subtitle}
        </p>
        <Link to={`${id}`} className="text-black text-[13px] uppercase hover:underline flex items-center gap-1 mt-auto">
          details
          <NavigateNextIcon className="text-[16px]" />
        </Link>
      </div>
    </article>
  );
}
