import { useContext } from "react";
import CartContext from "@/store/cart-context";

import classes from "./notification.module.css";

const Notification = (props) => {
  const CartCtx = useContext(CartContext);

  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "added") {
    statusClasses = classes.added;
  }

  if (status === "removed") {
    statusClasses = classes.removed;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={CartCtx.hideCartNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
