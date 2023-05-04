import { IDetailsHeader } from "../types/types";

const DetailsHeader = ({ article }: IDetailsHeader) => {
  return (
    <>
      <img className="h-80 w-full object-cover block object-bottom" src={article.image_url} alt="header news image"></img>
    </>
  );
};

export default DetailsHeader;
