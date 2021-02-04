import axios from "axios";
const EMPLOYEE_BASE_URL = "https://jsonplaceholder.typicode.com/users";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_BASE_URL);
  }
}
export default new EmployeeService();
