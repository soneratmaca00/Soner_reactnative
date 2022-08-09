import * as React from 'react';

export const Context = React.createContext();

export const ContextProvider = ({children}) => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [categories, setCategories] = React.useState([]);

  return (
    <Context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        categories,
        setCategories,
      }}>
      {children}
    </Context.Provider>
  );
};
