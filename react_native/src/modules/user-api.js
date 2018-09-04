import axios from "axios";
import {HOST} from "./api-service";

const router = `${HOST}api/user/`;

export const login = (email, password) => axios.post(`${router}login`, {
    email: email, password: password
  }
);

export const register = (name, email, password) => axios.post(`${router}register`, {
    name: name,
    email: email,
    password: password
  }
);