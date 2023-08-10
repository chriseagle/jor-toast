import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {

  const { toasts, setToasts } = React.useContext(ToastContext);

  const removeToast = (id) => {
    setToasts((prev) => toasts.filter(item => item.id !== id))
  }

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts.length > 0 && toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast id={toast.id} variant={toast.variant} handleClose={removeToast}>{toast.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
