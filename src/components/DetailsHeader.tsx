import { IDetailsHeader } from "../types/types";

const DetailsHeader = ({ article }: IDetailsHeader) => {
  return (
    <>
      <img className="h-96 w-[1280px] m-auto object-cover block object-center" src={article.image_url} alt="header news image"></img>
    </>
  );
};

export default DetailsHeader;
