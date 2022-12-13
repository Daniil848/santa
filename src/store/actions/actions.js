import {
  GROUP_NAME,
  GROUP_DATE,
  GROUP_ADMIN_NAME,
  YOUR_GIFT_FOR,
  SET_GROUP_ID,
  SET_GLOBAL_EDIT,
  USER_NAME,
  SET_USER_ID,
} from './actionTypes';

export const addGroupName = (path) => ({
  type : GROUP_NAME,
  payload : {
    group : path.group,
  },
});

export const groupDate = (path) => ({
  type : GROUP_DATE,
  payload : {
    date : path.date,
  },
});

export const adminName = (path) => ({
  type : GROUP_ADMIN_NAME,
  payload : {
    admin : path.admin,
  },
});

export const adminGift = (path) => ({
  type : YOUR_GIFT_FOR,
  payload : {
    gift : path.gift,
  },
});

export const groupID = (path) => ({
  type : SET_GROUP_ID,
  payload : {
    group : path.group,
  },
},console.log(path));

export const globalEdit = (path) => ({
  type : SET_GLOBAL_EDIT,
  payload : {
    globalEdit : path.globalEdit,
  },
});

export const addUserName = (path) => ({
  type : USER_NAME,
  payload : {
    user : path.user,
  },
});

export const userID = (path) => ({
  type : SET_USER_ID,
  payload : {
    user : path.user,
  },
});
