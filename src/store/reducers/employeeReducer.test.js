import { describe, it, expect } from 'vitest';
import { employeeReducer } from './employeeReducer';
import { GET_EMPLOYEES, GET_EMPLOYEE, IS_EDIT } from '../actionType';

describe('employeeReducer', () => {
  it('returns initial state', () => {
    const s = employeeReducer(undefined, { type: '@@INIT' });
    expect(s).toEqual({ employees: [], employee: {}, isEdit: false });
  });

  it('handles GET_EMPLOYEES', () => {
    const payload = [{ id: 1, title: 'A' }];
    const s = employeeReducer(undefined, { type: GET_EMPLOYEES, payload });
    expect(s.employees).toBe(payload);
  });

  it('handles GET_EMPLOYEE', () => {
    const payload = { id: 1, title: 'A' };
    const s = employeeReducer(undefined, { type: GET_EMPLOYEE, payload });
    expect(s.employee).toBe(payload);
  });

  it('handles IS_EDIT', () => {
    const s = employeeReducer(undefined, { type: IS_EDIT, payload: true });
    expect(s.isEdit).toBe(true);
  });
});
