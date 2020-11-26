import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSideBarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSideBar = () => setIsSideBarOpen(true);
    const closeSideBar = () => setIsSideBarOpen(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    
  return (
      <AppContext.Provider value={{
          isModalOpen,
          isSidebarOpen,
          openModal,
          closeModal,
          openSideBar,
          closeSideBar,
      }}>
          {children}
      </AppContext.Provider>
  )
};

// custom hook
// must begin as use...
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext}