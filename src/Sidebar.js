import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSideBar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : null} `}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='sidebar logo' />
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className='social-icons'>
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
