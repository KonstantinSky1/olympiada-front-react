import React, { useState, useEffect } from 'react';

import api from '../utils/Api';

export const JsonPlaceholderContext = React.createContext();

export const JsonPlaceholderContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.getTestContent()
      .then(res => {
        if(res) {
          setPosts(res);
        }
      })
      .catch(err => console.log(err));
  }, []);
  

  return (
    <JsonPlaceholderContext.Provider value={{ posts }}>
      {children}
    </JsonPlaceholderContext.Provider>
    );
}