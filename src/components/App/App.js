import React from 'react';

import ToastProvider from '../ToastProvider';
import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

function App() {
  const [toasts, setToasts] = React.useState([]);

  return (
    <>
      <ToastProvider value={{ toasts, setToasts }}>
        <ToastPlayground />
      </ToastProvider>
      <Footer />
    </>
  );
}

export default App;
