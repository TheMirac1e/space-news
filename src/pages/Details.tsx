import DetailsHeader from "../components/DetailsHeader"
import DetailsContent from "../components/DetailsContent"
import { useEffect, useState } from "react";
import { useSpaceService } from "../services/SpaceService";
import { useParams } from "react-router-dom";

interface article {
  title: string;
  imageUrl: string;
  summary: string;
  newsSite: string;
  url: string;
}

// add fetch details space news by id
export const Details = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<article | null>(null);
  const { getNewsById } = useSpaceService();

  useEffect(() => {
    onRequest(id);
  }, [id]);

  const onRequest = (id: any) => {
    getNewsById(id).then(onArticleLoaded)
  }

  const onArticleLoaded = (article: article) => {
    setArticle(article)
  }

  return (
    <>
      {article && (
        <>
          <DetailsHeader article={article} />
          <DetailsContent article={article} />
        </>
      )}
    </>
  )
}
