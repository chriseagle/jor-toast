import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';
import { useEscapeKey } from '../../hooks/useEscapeKey/useEscapeKey';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const { setToasts } = React.useContext(ToastContext);

  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');

  useEscapeKey(() => setToasts([]));

  // React.useEffect(() => {
  //   function dismissToasts(event) {
  //     if (event.key === 'Escape') {
  //       setToasts([]);
  //     }
  //   }
  //   window.addEventListener('keydown', dismissToasts)
  //   return () => window.removeEventListener('keydown', dismissToasts);
  // }, [setToasts])

  const handleSetToasts = (event) => {
    event.preventDefault();
    setToasts((prev) => [...prev, { id: Date.now(), variant, message }]);
    setVariant('notice');
    setMessage('');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form className={styles.controlsWrapper} onSubmit={handleSetToasts}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}

          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message}
              onChange={(event) => setMessage(event.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`} key={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={() => setVariant(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
