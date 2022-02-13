import {api} from './config.json';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loginApi(data) {
  return await axios({
    method: 'POST',
    url: api + 'login',
    data: data,
  });
}

export async function registerApi(data) {
  return await axios({
    method: 'POST',
    url: api + 'user',
    data: data,
  });
}

export async function logoutApi(data) {
  return await axios({
    method: 'POST',
    url: api + 'logout',
    data: data,
  });
}
