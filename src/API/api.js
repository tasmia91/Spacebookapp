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
export async function getProfilePhotoApi(data) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'GET',
    url: api + `user/${user_id}/photo`,
    data: data,
    headers: {
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
      'X-Authorization': token,
    },
  });
}

//FRIEND MANAGEMENT
export async function getFriendsApi(data) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'GET',
    url: api + `user/${user_id}/friends`,
    data: data,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function addFriendApi(data) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'POST',
    url: api + `user/${user_id}/friends`,
    data: data,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function getOutstandingFriendsRequestApi(data) {
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'GET',
    url: api + `friendsrequests`,
    data: data,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function acceptFriendRequestApi(data) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'POST',
    url: api + `friendsrequests/user/${user_id}`,
    data: data,
    headers: {
      'X-Authorization': token,
    },
  });
}

export async function rejectFriendRequestApi(data) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'DELETE',
    url: api + `friendsrequests/user/${user_id}`,
    data: data,
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
export async function getPostsApi() {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
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

export async function likePostApi(post_id) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'POST',
    url: api + `user/${user_id}/post/${post_id}/like`,
    headers: {
      'X-Authorization': token,
    },
  });
}

//Remove like from post
export async function RemoveLikePostApi(post_id) {
  let user_id = await AsyncStorage.getItem('id');
  user_id = parseInt(user_id);
  let token = await AsyncStorage.getItem('token');
  return await axios({
    method: 'DELETE',
    url: api + `user/${user_id}/post/${post_id}/like`,
    headers: {
      'X-Authorization': token,
    },
  });
}
