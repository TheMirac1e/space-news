import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { IDetailsContent } from "../types/types";

// remove material icons
const DetailsContent = ({ article }: IDetailsContent) => {
  return (
    <div className="absolute top-40 left-2/4 translate-x-[-50%] w-4/5 bg-white shadow-sm shadow-black p-4 rounded-md text-center">
      <h2 className="mb-3">
        {article.title}
      </h2>
      <p>{article.summary}</p>

      <a
        className="font-medium flex items-center mt-6 text-[#37345f] gap-1"
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Learn detailed information on the ${article.news_site} website`}
        <RocketLaunchIcon />
      </a>

      <Link
        to={`/`}
        className="flex items-center gap-1 mt-4"
      >
        <ArrowBackIcon fontSize="inherit" />
        Back to homepage
      </Link>
    </div>
  );
};

export default DetailsContent;
