import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <p className={styles.label}>Find contacts by name</p>
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
