import {api} from './config.json';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//USER MANAGEMENT
export async function registerApi(data) {
  return await axios({
    method: 'POST',
    url: api + 'user',
    data: data,
  });
}

export async function loginApi(data) {
  return await axios({
    method: 'POST',
    url: api + 'login',
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

export async function getUserInformationApi(data) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'GET',
    url: api + `user/${user_id}`,
    data: data,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function updateUserInformationApi(data) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'PATCH',
    url: api + `user/${user_id}`,
    data: data,
    headers: {
      'X-Authorization': token,
    },
  });
}

//Get a users profile photo
export async function getProfilePhotoApi() {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'GET',
    url: api + `user/${user_id}/photo`,
    headers: {
      'Content-Type': 'image/png',
      'X-Authorization': token,
    },
  });
}

//Upload a profile photo
export async function uploadProfilePhotoApi(data) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'POST',
    url: api + `user/${user_id}/photo`,
    data: data,
    headers: {
      'Content-Type': 'image/png',
      'X-Authorization': token,
    },
  });
}

//FRIEND MANAGEMENT
export async function getListOfFriendsApi() {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'GET',
    url: api + `user/${user_id}/friends`,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function addFriendApi(user_id) {
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'POST',
    url: api + `user/${user_id}/friends`,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function getOutstandingFriendsRequestApi() {
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'GET',
    url: api + `friendrequests`,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function acceptFriendRequestApi(user_id) {
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'POST',
    url: api + `friendrequests/${user_id}`,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function rejectFriendRequestApi(user_id) {
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'DELETE',
    url: api + `friendrequests/${user_id}`,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function searchFriendsApi() {
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'GET',
    url: api + `search`,
    headers: {
      'X-Authorization': token,
    },
  });
}

//POST MANAGEMENT
export async function getPostsApi(user_id) {
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'GET',
    url: api + `user/${user_id}/post`,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function addPostApi(data) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'POST',
    url: api + `user/${user_id}/post`,
    data: data,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function getSinglePostApi(post_id) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'GET',
    url: api + `user/${user_id}/post/${post_id}`,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function deletePostApi(post_id) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'DELETE',
    url: api + `user/${user_id}/post/${post_id}`,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function updatePostApi(post_id, data) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'PATCH',
    url: api + `user/${user_id}/post/${post_id}`,
    data: data,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function likePostApi(post_id, user_id) {
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'POST',
    url: api + `user/${user_id}/post/${post_id}/like`,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function removeLikePostApi(post_id, user_id) {
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'DELETE',
    url: api + `user/${user_id}/post/${post_id}/like`,
    headers: {
      'X-Authorization': token,
    },
  });
}
