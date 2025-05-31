import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = ({ size = 35, color = "#007bff" }) => {
  return (
    <div className={styles.loaderContainer}>
      <ClipLoader color={color} size={size} />
    </div>
  );
};

export default Loader;
