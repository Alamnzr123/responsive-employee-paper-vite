import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addEmployee, editEmployee, getEmployee } from '../store/actionCreator';
import { useTranslation } from 'react-i18next';
import { IS_EDIT } from '../store/actionType';

const AddEditEmployee = () => {
  const dispatch = useDispatch();
  const { isEdit, employee } = useSelector((state) => state.employeeReducer);

  const navigate = useNavigate();
  const { id } = useParams();

  const [current, setCurrent] = useState({ title: '', content: '', author: 1 });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const { t } = useTranslation();

  const validate = () => {
    const err = {};
    if (!current.title || current.title.trim().length < 3)
      err.title = t('form.validation.title_min');
    if (!current.content || current.content.trim().length < 10)
      err.content = t('form.validation.content_min');
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleAdd = async () => {
    if (!validate()) return;
    setSaving(true);
    await dispatch(addEmployee(current));
    setSaving(false);
    navigate('/employees');
  };

  const handleUpdate = async () => {
    if (!validate()) return;
    setSaving(true);
    await dispatch(editEmployee(id, current));
    setSaving(false);
    navigate('/employees');
  };

  const handleCancel = () => {
    setCurrent({ title: '', content: '' });
    dispatch({ type: IS_EDIT, payload: false });
    dispatch({ type: 'GET_EMPLOYEE', payload: {} });
  };

  useEffect(() => {
    if (id) dispatch(getEmployee(id));
  }, [id]);

  useEffect(() => {
    if (employee?.id) {
      setCurrent({
        title: employee.title,
        content: employee.content,
        author: employee.author,
      });
    }
  }, [employee]);

  return (
    <div className="overflow-x-auto px-4 sm:px-10 flex flex-col gap-5 text-gray-900 dark:text-gray-100">
      <a className="sr-only focus:not-sr-only" href="#main-content">
        {t('aria.skip_to_content')}
      </a>
      <form className="flex flex-col gap-5" role="form" aria-labelledby="form-title">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="title">
                <span id="form-title" className="label-text">
                  {t('form.title')}
                </span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder={t('form.title')}
                className="input input-bordered w-full max-w-xs bg-white dark:bg-surfaceDark text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                onChange={(e) => setCurrent({ ...current, title: e.target.value })}
                value={current.title}
                aria-invalid={!!errors.title}
              />
              {errors.title && <div className="text-sm text-red-600 mt-1">{errors.title}</div>}
            </div>
            <div className="form-control">
              <label className="label" htmlFor="content">
                <span className="label-text">{t('form.content')}</span>
              </label>
              <textarea
                id="content"
                name="content"
                className="textarea textarea-bordered h-24 bg-white dark:bg-surfaceDark text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                placeholder={t('form.content')}
                onChange={(e) => setCurrent({ ...current, content: e.target.value })}
                value={current.content}
                aria-invalid={!!errors.content}
              ></textarea>
              {errors.content && <div className="text-sm text-red-600 mt-1">{errors.content}</div>}
            </div>
          </div>
        </div>
        <div className="modal-action flex flex-col sm:flex-row sm:items-center gap-3">
          {isEdit ? (
            <button
              className={`btn btn-success w-full sm:w-auto ${saving ? 'anim-pulse-scale' : ''}`}
              type="button"
              onClick={() => handleUpdate()}
              disabled={saving}
            >
              {saving ? t('form.updating') : t('form.update')}
            </button>
          ) : (
            <button
              className={`btn btn-active btn-success w-full sm:w-auto ${saving ? 'anim-pulse-scale' : ''}`}
              type="button"
              onClick={() => handleAdd()}
              disabled={saving}
            >
              {saving ? t('form.saving') : t('form.save')}
            </button>
          )}
          <Link to="/employees" className="w-full sm:w-auto">
            <button
              className="btn btn-active w-full sm:w-auto bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              onClick={() => handleCancel()}
            >
              {t('form.cancel')}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddEditEmployee;
