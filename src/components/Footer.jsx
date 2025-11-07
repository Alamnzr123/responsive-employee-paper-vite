import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      role="contentinfo"
      className="bg-surfaceAlt dark:bg-surfaceAltDark border-t dark:border-gray-800 mt-8"
    >
      <div className="container mx-auto px-4 py-6 text-sm text-muted dark:text-gray-400 flex items-center justify-between">
        <div className="text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} {t('title')}
        </div>
        <div className="hidden sm:block text-gray-700 dark:text-gray-300">{t('footer.built')}</div>
      </div>
    </footer>
  );
};

export default Footer;
