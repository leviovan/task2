import style from "./search.module.scss";

const Search = ({
  onClick,
  setRequest,
  request,
}: {
  onClick: (request: string) => void;
  setRequest: (e: unknown) => void;
  request: string;
}) => {
  console.log(request);

  return (
    <div className={style.search}>
      <input
        className={style.input}
        placeholder="search by title"
        type="text"
        value={request}
        onChange={setRequest}
      />
      <button
        onClick={() => onClick(request)}
        className={style.btn}
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
