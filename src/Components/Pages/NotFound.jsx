import style from "./_notFound.module.scss";

const NotFound = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>😕</span>
        <p>
          <br></br>
        </p>
        Not Found
      </h1>
      <p className={style.description}>Unfortunately this page is not available in this online store</p>
    </div>
  );
};

export default NotFound;
