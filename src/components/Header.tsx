import React, { useState, useEffect, useRef } from 'react';

export const Header: React.FC = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownActive((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Header Email Link */}
      <div className="header-email">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z" />
        </svg>
        <a href="mailto:motherfarmtrading@gmail.com">motherfarmtrading@gmail.com</a>
      </div>

      {/* Main Site Header */}
      <header className="s-header">
        <div className="header-logo" ref={dropdownRef}>
          <a className="site-logo" href="#" id="logo" onClick={toggleDropdown}>
            <img src="/images/bottle.svg" alt="Homepage" />
          </a>

          {/* Dropdown Menu */}
          <ul className={`logo-dropdown ${dropdownActive ? 'active' : ''}`} id="logoDropdown">
            <li><a href="#intro" onClick={() => setDropdownActive(false)}>Home</a></li>
            <li><a href="#products" onClick={() => setDropdownActive(false)}>Products</a></li>
            <li><a href="#aboutus" onClick={() => setDropdownActive(false)}>About-Us</a></li>
            <li><a href="#whychouseus" onClick={() => setDropdownActive(false)}>Why MotherFarm</a></li>
            <li><a href="#contact-2" onClick={() => setDropdownActive(false)}>Contact-Us</a></li>
          </ul>
        </div>
      </header>
    </>
  );
};
