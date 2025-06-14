import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({}); // For storing contact form or user-related data
  const [theme, setTheme] = useState('light');  // Optional: Theme toggle

  return (
    <AppContext.Provider value={{ userData, setUserData, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easy access
export const useAppContext = () => useContext(AppContext);
