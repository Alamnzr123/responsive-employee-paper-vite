import { describe, it, expect, vi, afterEach } from 'vitest';

// mock the service module and provide a default export object
vi.mock('../services/employeeService', () => {
  return {
    default: {
      getEmployees: vi.fn().mockResolvedValue([{ id: 1, title: 'A' }]),
      // return axios-like shape for single employee
      getEmployee: vi.fn().mockResolvedValue({ data: { id: 1, title: 'A' } }),
      addEmployee: vi.fn().mockResolvedValue({}),
      editEmployee: vi.fn().mockResolvedValue({}),
      deleteEmployee: vi.fn().mockResolvedValue({}),
    },
  };
});

import * as actions from './actionCreator';
import employeeService from '../services/employeeService';
import * as types from './actionType';

describe('actionCreator thunks', () => {
  afterEach(() => vi.restoreAllMocks());

  it('getEmployees dispatches GET_EMPLOYEES', async () => {
    const dispatch = vi.fn();
    await actions.getEmployees()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: types.GET_EMPLOYEES,
      payload: [{ id: 1, title: 'A' }],
    });
  });

  it('getEmployee dispatches GET_EMPLOYEE', async () => {
    const dispatch = vi.fn();
    // ensure the mocked service returns the axios-like shape for this test
    employeeService.getEmployee = vi.fn().mockResolvedValue({ data: { id: 1, title: 'A' } });
    await actions.getEmployee(1)(dispatch);
    expect(dispatch).toHaveBeenCalled();
    const callArg = dispatch.mock.calls[0][0];
    expect(callArg.type).toBe(types.GET_EMPLOYEE);
    expect(callArg.payload).toBeDefined();
  });
});
