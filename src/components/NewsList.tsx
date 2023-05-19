import { NewsCard } from "./NewsCard";

export const NewsList = ({ ...props }) => {
  const { spaceList, filter } = props;

  function renderNews(arr: []) {
    const items = arr.map(card => {
      const { id, image, title, subtitle, date } = card;

      return (
        <NewsCard
          key={id}
          image={image}
          title={title}
          subtitle={subtitle}
          date={date}
          id={id}
          filter={filter}
        />
      );
    });

    return (
      <div className="my-7 grid grid-cols-1 gap-4 justify-center md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
        {items}
      </div>
    );
  }

  const items = renderNews(spaceList as []);

  return (
    <>
      {items}
    </>
  );
};

