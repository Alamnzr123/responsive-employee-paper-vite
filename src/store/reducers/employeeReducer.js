import { IS_EDIT, GET_EMPLOYEES, GET_EMPLOYEE } from '../actionType';

const initialState = {
  employees: [],
  employee: {},
  isEdit: false,
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
      };

    case IS_EDIT:
      return {
        ...state,
        isEdit: action.payload,
      };

    default:
      return state;
  }
};
