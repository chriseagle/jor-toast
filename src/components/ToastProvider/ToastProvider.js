import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ value, children }) {
  return (<ToastContext.Provider value={value}>
    {children}
  </ToastContext.Provider>)
}

export default ToastProvider;
