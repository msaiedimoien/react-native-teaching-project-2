import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return(
      <BlogProvider>
          {children}
      </BlogProvider>
  );
};