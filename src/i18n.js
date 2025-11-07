import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      title: 'Employee Paper',
      nav: { articles: 'Articles', add: 'Add' },
      search: { placeholder: 'Search by title or id' },
      table: { no: 'No', date: 'Date', title: 'Title', content: 'Content', action: 'Action' },
      delete: { confirm: 'Delete this article?' },
      form: {
        title: 'Title',
        content: 'Content',
        save: 'Save',
        saving: 'Saving…',
        update: 'Update',
        updating: 'Updating…',
        cancel: 'Cancel',
        validation: {
          title_min: 'Title must be at least 3 characters.',
          content_min: 'Content must be at least 10 characters.',
        },
      },
      footer: { built: 'Built with React + Vite' },
      home: { addedit: 'Add / Edit', details: 'Article Details' },
    },
  },
  id: {
    translation: {
      title: 'Employee Paper',
      nav: { articles: 'Artikel', add: 'Tambah' },
      search: { placeholder: 'Cari berdasarkan judul atau id' },
      table: { no: 'No', date: 'Tanggal', title: 'Judul', content: 'Konten', action: 'Aksi' },
      delete: { confirm: 'Hapus artikel ini?' },
      form: {
        title: 'Judul',
        content: 'Konten',
        save: 'Simpan',
        saving: 'Menyimpan…',
        update: 'Perbarui',
        updating: 'Memperbarui…',
        cancel: 'Batal',
        validation: {
          title_min: 'Judul harus minimal 3 karakter.',
          content_min: 'Konten harus minimal 10 karakter.',
        },
      },
      footer: { built: 'Dibuat dengan React + Vite' },
      home: { addedit: 'Tambah / Edit', details: 'Detail Artikel' },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;
