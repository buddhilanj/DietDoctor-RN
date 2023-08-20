import axios from "axios";
import { errorProcessor, responseProcessor } from "./APIUtils";

const baseURL = 'https://ddapi.prod.dietdoctor.com';
const apiVersion ='v1';

const API = axios.create({
  baseURL:`${baseURL}/${apiVersion}/`,
  timeout: 4000,
  headers: {'Content-Type': 'application/json'},
});

API.interceptors.response.use(responseProcessor,errorProcessor)


export default {API};