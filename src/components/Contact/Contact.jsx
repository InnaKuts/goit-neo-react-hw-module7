import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <div className={styles.field}>
          <FaUser className={styles.icon} />
          <p>{name}</p>
        </div>
        <div className={styles.field}>
          <FaPhone className={styles.icon} />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" className={styles.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
