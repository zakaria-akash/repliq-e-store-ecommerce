// Importing the useDispatch hook from the react-redux library.
import { useDispatch } from "react-redux";
// Importing the hideCartNotification action creator from the cartSlice.js file.
import { hideCartNotification } from "@/store/redux/cartSlice";

// Importing the css module for the component.
import classes from "./notification.module.css";

// The Notification component.
const Notification = (props) => {
  // Getting the dispatch function from the useDispatch hook.
  const dispatch = useDispatch();

  // Destructuring the title, message, and status from the props.
  const { title, message, status } = props;

  // A variable to hold the status classes.
  let statusClasses = "";

  // If the status is "added", set the status classes to the added class.
  if (status === "added") {
    statusClasses = classes.added;
  }

  // If the status is "removed", set the status classes to the removed class.
  if (status === "removed") {
    statusClasses = classes.removed;
  }

  // Creating the active classes string.
  const activeClasses = `${classes.notification} ${statusClasses}`;

  // Returning the JSX for the component.
  return (
    // When the notification is clicked, dispatch the hideCartNotification action.
    <div className={activeClasses} onClick={() => dispatch(hideCartNotification())}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

// Exporting the Notification component as the default export.
export default Notification;