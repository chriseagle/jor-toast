import React from 'react';

const useEscapeKey = (userFunc) => {
  React.useEffect(() => {
    function userFuncWrapper(event) {
      if (event.key === 'Escape') {
        userFunc();
      }
    }
    window.addEventListener('keydown', userFuncWrapper)
    return () => window.removeEventListener('keydown', userFuncWrapper);
  }, [userFunc])
}

export { useEscapeKey };