import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployees, deleteEmployee, getEmployee } from '../store/actionCreator';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomPagination from '../components/CustomPagination';
import Trash from './icons/TrashIcon';
import Edit from './icons/EditIcon';

const EmployeeTable = () => {
  const { employees } = useSelector((state) => state.employeeReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchFilter, setSearchFilter] = React.useState('');
  const pageSize = 5;

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchFilter]);

  const handleFilter = (e) => setSearchFilter(e.target.value);

  const filteredData = (employees || []).filter(
    (item) =>
      item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.id.toString().includes(searchFilter),
  );

  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleDelete = (id) => {
    const ok = window.confirm(t('delete.confirm'));
    if (!ok) return;
    dispatch(deleteEmployee(id));
  };

  const toEdit = (id) => {
    dispatch({ type: 'IS_EDIT', payload: true });
    dispatch(getEmployee(id));
  };

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className="overflow-x-auto px-4 sm:px-10 flex flex-col gap-4 text-gray-900 dark:text-gray-100">
      <a className="sr-only focus:not-sr-only" href="#main-content">
        {t('aria.skip_to_content')}
      </a>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <label htmlFor="search" className="sr-only">
          {t('search.label')}
        </label>
        <input
          id="search"
          className="font-bold text-2xl sm:text-5xl border-x-2 border-y-2 bg-white dark:bg-surfaceDark border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 w-full sm:w-1/2"
          type="search"
          placeholder={t('search.placeholder')}
          value={searchFilter}
          onChange={handleFilter}
          aria-label={t('search.aria_label')}
        />
      </div>
      <div>
        <table
          role="table"
          aria-label={t('table.aria_label')}
          className="table-zebra w-full bg-white dark:bg-surfaceDark"
        >
          <thead className="text-xs h-24 font-semibold tracking-wide text-green-400 uppercase border-b text-center bg-surfaceAlt dark:bg-surfaceAltDark">
            <tr>
              <th scope="col">{t('table.no')}</th>
              <th scope="col">{t('table.date')}</th>
              <th scope="col">{t('table.title')}</th>
              <th scope="col" className="hidden sm:table-cell">
                {t('table.content')}
              </th>
              <th scope="col">{t('table.action')}</th>
            </tr>
          </thead>

          {paginatedData.map((employee, index) => (
            <tbody
              key={index}
              className="bg-white dark:bg-surface divide-y text-center anim-fade-up"
            >
              <tr>
                <td>{index + 1}</td>
                <td>
                  {new Date().toLocaleDateString(
                    'en-US',
                    {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    },
                    employee.created_at,
                  )}
                </td>
                <td className="max-w-xs truncate">{employee.title}</td>
                <td className="hidden sm:table-cell">{employee.content}</td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    <Link to={`/employees/edit/${employee.id}`}>
                      <button
                        className="btn btn-ghost bg-yellow-600 btn-xs"
                        onClick={() => toEdit(employee.id)}
                        aria-label={t('aria.edit')}
                      >
                        <Edit className="w-5 h-5" aria-hidden="true" />
                      </button>
                    </Link>
                    <button
                      className="btn btn-ghost bg-red-600 btn-xs"
                      onClick={() => handleDelete(employee.id)}
                      aria-label={t('aria.delete')}
                    >
                      <Trash className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}

          {employees?.length > 0 && (
            <>
              <CustomPagination
                itemsCount={employees.length}
                itemsPerPage={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                alwaysShown={true}
              />
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
