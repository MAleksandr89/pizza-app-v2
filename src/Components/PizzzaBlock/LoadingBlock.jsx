import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="127" r="113" />
      <rect x="6" y="249" rx="6" ry="6" width="269" height="34" />
      <rect x="6" y="294" rx="6" ry="6" width="268" height="80" />
      <rect x="6" y="386" rx="6" ry="6" width="81" height="54" />
      <rect x="105" y="385" rx="30" ry="30" width="171" height="62" />
    </ContentLoader>
  );
};

export default LoadingBlock;
