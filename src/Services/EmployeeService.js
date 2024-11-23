// src/Services/EmployeeService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';


export const getLoginUrl = () => (`${API_URL}/login`);
export const getRegisterUrl = () => (`${API_URL}/register`);


export const getEmployees = () => axios.get(`${API_URL}/employee`);
export const getDepartment = () => axios.get(`${API_URL}/department`);
export const getPosition = () => axios.get(`${API_URL}/position`);
export const getEmployeeById = (id) => axios.get(`${API_URL}/employee/${id}`);
export const addEmployee = (data) => axios.post(`${API_URL}/employee`, data);
export const updateEmployee = (id, data) => axios.post(`${API_URL}/employee/update/${id}`, data);
export const deleteEmployee = (id) => axios.post(`${API_URL}/employee/delete/${id}`);
