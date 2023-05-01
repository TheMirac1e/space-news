const DetailsHeader = ({ article }: any) => {
  return (
    <div
      style={{
        height: "300px",
        backgroundImage: `url(${article.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default DetailsHeader;
