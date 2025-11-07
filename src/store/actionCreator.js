import { GET_EMPLOYEES, GET_EMPLOYEE } from './actionType';
import employeeService from '../services/employeeService';

export const getEmployees = () => {
  return async (dispatch) => {
    try {
      const articles = await employeeService.getEmployees();
      dispatch({
        type: GET_EMPLOYEES,
        payload: articles,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const addEmployee = (employee) => {
  return async (dispatch) => {
    try {
      await employeeService.addEmployee(employee);
      dispatch(getEmployees());
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteEmployee = (employeeId) => {
  return async (dispatch) => {
    try {
      await employeeService.deleteEmployee(employeeId);
      dispatch(getEmployees());
    } catch (error) {
      console.error(error);
    }
  };
};

export const getEmployee = (employeeId) => {
  return async (dispatch) => {
    try {
      const data = await employeeService.getEmployee(employeeId);
      // employeeService may return axios-like { data: ... } or the raw object
      const payload = data?.data ?? data;
      dispatch({
        type: GET_EMPLOYEE,
        payload,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const editEmployee = (employeeId, employee) => {
  return async (dispatch) => {
    try {
      await employeeService.editEmployee(employeeId, employee);
      dispatch(getEmployees());
    } catch (error) {
      console.error(error);
    }
  };
};
