import React from 'react';
import { Link } from 'react-router-dom';
import NavCountry from './icons/NavCountryIcon';
import NavPerson from './icons/NavPersonIcon';
import useTheme from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import FlagGB from './icons/FlagGB';
import FlagID from './icons/FlagID';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = useTheme();
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = React.useState(false);

  return (
    <header
      role="banner"
      className="bg-surface dark:bg-surfaceDark border-b dark:border-gray-800 shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-textDark">
            {t('title')}
          </Link>
          <nav
            role="navigation"
            aria-label="Primary"
            className="hidden md:flex gap-3 text-sm text-muted dark:text-gray-400"
          >
            <Link to="/employees" className="hover:text-gray-900 dark:hover:text-textDark">
              {t('nav.articles')}
            </Link>
            <Link to="/employees/add" className="hover:text-gray-900 dark:hover:text-textDark">
              {t('nav.add')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              aria-label="toggle-theme"
              className="btn btn-ghost btn-sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>

          <div className="relative">
            <button
              aria-label={t('aria.select_language')}
              aria-haspopup="menu"
              aria-expanded={langOpen}
              className="btn btn-ghost btn-sm"
              onClick={() => setLangOpen((s) => !s)}
            >
              {i18n.language && i18n.language.startsWith('id') ? <FlagID /> : <FlagGB />}
            </button>
            {langOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-40 bg-white dark:bg-surfaceDark border rounded shadow-sm"
              >
                <button
                  role="menuitem"
                  aria-label="English"
                  className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                  onClick={() => {
                    i18n.changeLanguage('en');
                    setLangOpen(false);
                  }}
                >
                  <FlagGB /> English
                </button>
                <button
                  role="menuitem"
                  aria-label="Bahasa"
                  className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                  onClick={() => {
                    i18n.changeLanguage('id');
                    setLangOpen(false);
                  }}
                >
                  <FlagID /> Bahasa
                </button>
              </div>
            )}
          </div>

          <div className="hidden md:flex gap-2">
            <button className="btn btn-ghost btn-circle" aria-label="country">
              <NavCountry />
            </button>
            <button className="btn btn-ghost btn-circle" aria-label="person">
              <NavPerson />
            </button>
          </div>

          {/* mobile menu button */}
          <button
            className="md:hidden btn btn-ghost"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t('aria.open_navigation')}
          >
            ☰
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile"
          className="md:hidden bg-white dark:bg-surfaceDark border-t dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            <Link
              to="/employees"
              className="py-2 text-gray-800 dark:text-textDark"
              onClick={() => setOpen(false)}
            >
              {t('nav.articles')}
            </Link>
            <Link
              to="/employees/add"
              className="py-2 text-gray-800 dark:text-textDark"
              onClick={() => setOpen(false)}
            >
              {t('nav.add')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
