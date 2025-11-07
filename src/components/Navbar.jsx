import React from 'react';
import NavCountry from './icons/NavCountryIcon';
import NavPerson from './icons/NavPersonIcon';

const Navbar = ({ title = 'Article' }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <div className="flex gap-2">
        <button className="btn btn-ghost btn-circle" aria-label="country">
          <NavCountry />
        </button>
        <button className="btn btn-ghost btn-circle" aria-label="person">
          <NavPerson />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
