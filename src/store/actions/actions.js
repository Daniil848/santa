import {
  GROUP_NAME,
  GROUP_DATE,
  USER_NAME,
  USER_GIFT,
  SET_GROUP_ID,
  SET_USER_ID,
  GROUP_NAME_ERROR,
  GROUP_DATE_ERROR,
  USER_NAME_ERROR,
  USER_GIFT_ERROR,
  EDIT_PROFILE_GROUP_NAME,
  EDIT_PROFILE_GROUP_DATE,
  EDIT_PROFILE_USER_NAME,
  EDIT_PROFILE_USER_GIFT,
  SWITCH_PAGE_GROUP,
  SWITCH_PAGE_DATE,
  SWITCH_PAGE_USER,
  SWITCH_PAGE_GIFT,
  SWITCH_PAGE_DONE,
  GROUP_INFO_SWITCH,
  USER_STEP_SWITCH,
  IS_RECIPIENT,
} from './actionTypes';
import {
  collection,
  doc,
  addDoc,
  updateDoc,
} from 'firebase/firestore';
import mixUsers from '../../helpers/mixUsers';
import db from '../../firebase';
import { toast } from 'react-toastify';

//===================================CREATE GROUP & USER===================================

export const createGroupName = (path) => ({
  type : GROUP_NAME,
  payload : {
    group : path.group,
  },
});

export const createGroupDate = (path) => ({
  type : GROUP_DATE,
  payload : {
    date : path.date,
  },
});

export const createUserName = (path) => ({
  type : USER_NAME,
  payload : {
    user : path.user,
  },
});

export const createUserGift = (path) => ({
  type : USER_GIFT,
  payload : {
    gift : path.gift,
  },
});

//===================================GROUP & USER===================================

export const saveGroupName = (path) => {
  if (path.groupID !== null) {
    return async(dispatch) => {
      try {
        const docRef = doc(db, 'group', path.groupID);
        await updateDoc(docRef, path.groupDB);

        dispatch(createGroupName({
          group : path.groupDB.name,
        }));
        toast.success("Название группы изменено!");

      } catch (err) {
        toast.error("Ошибка(");
        console.error('Произошла ошибка!', err);
      };
    };
  };
};

export const saveGroupDate = (path) => {
  if (path.groupID !== null) {
    return async(dispatch) => {
      try {
        const docRef = doc(db, 'group', path.groupID);
        await updateDoc(docRef, path.groupDB);

        dispatch(createGroupDate({
          date : path.groupDB.date,
        }));
        toast.success("Дата изменена!");

      } catch (err) {
        toast.error("Ошибка(");
        console.error('Произошла ошибка!', err);
      };
    };
  } else if (path.groupID === null) {
    return async(dispatch) => {
      try {
        const docRef = await addDoc(collection(db, 'group'), path.groupDB); 

        dispatch(groupID({
          group : {
            id : docRef.id,
          }
        }));
        dispatch(createGroupDate({
          date : path.date,
        }));
        toast.success("Группа создана!!!");
      } catch (err) {
        toast.error("Ошибка(");
        console.error('Произошла ошибка!', err);
      }
    }
  }
};

export const saveUserName = (path) => {
  if (path.groupID !== null) {
    return async(dispatch) => {
      try {
        const docRef = doc(db, 'user', path.userID);
        await updateDoc(docRef, path.userDB);

        dispatch(createUserName({
          user : path.userDB.data,
        }));
        
        toast.success("Имя изменено!");
      } catch (err) {
        toast.error("Ошибка(");
        console.error('Произошла ошибка!', err);
      };
    };
  };
};

export const saveUser = (path) => {
  if (path.userID !== null) {
    return async(dispatch) => {
      try {
        const docRef = doc(db, 'user', path.userID);
        await updateDoc(docRef, path.userDB);

        dispatch(createUserGift({
          gift : path.userDB.gift,
        }));
        toast.success("Ваш подарок изменен!!!");
      } catch (err) {
        toast.error("Ошибка(");
        console.error('Произошла ошибка!', err);
      }
    }
  } else if (path.userID === null) {
    return async(dispatch) => {
      try {
        const docRef = await addDoc(collection(db, 'user'), path.userDB); 
        
        dispatch(userID({ 
          user : {
            id : docRef.id,
          }
        }));
        dispatch(createUserGift({
          gift : path.gift,
        }));
        toast.success("Пользователь создан!!!");
        
      } catch (err) {
        toast.error("Ошибка(");
        console.error('Произошла ошибка!', err);
      };
    };
  }
};

//===================================SET ID===================================

export const groupID = (path) => ({
  type : SET_GROUP_ID,
  payload : {
    group : path.group,
  },
});

export const userID = (path) => ({
  type : SET_USER_ID,
  payload : {
    user : path.user,
  },
});

//===================================ERRORS===================================

export const groupNameError = (path) => ({
  type : GROUP_NAME_ERROR,
  payload : {
    group : path.group,
  },
});

export const groupDateError = (path) => ({
  type : GROUP_DATE_ERROR,
  payload : {
    date : path.date,
  },
});

export const groupUserNameError = (path) => ({
  type : USER_NAME_ERROR,
  payload : {
    user : path.user,
  },
});

export const userGiftError = (path) => ({
  type : USER_GIFT_ERROR,
  payload : {
    gift : path.gift,
  },
});

//===================================EDIT PROFILE===================================

export const editProfileGroupName = () => ({
  type : EDIT_PROFILE_GROUP_NAME,
});

export const editProfileGroupDate = () => ({
  type : EDIT_PROFILE_GROUP_DATE,
});

export const editProfileUserName = () => ({
  type : EDIT_PROFILE_USER_NAME,
});

export const editProfileUserGift = () => ({
  type : EDIT_PROFILE_USER_GIFT,
});

//===================================SWITCH PAGES===================================

export const switchPageGroupName = () => ({
  type : SWITCH_PAGE_GROUP,
});

export const switchPageDate = () => ({
  type : SWITCH_PAGE_DATE,
});

export const switchPageUserName = () => ({
  type : SWITCH_PAGE_USER,
});

export const switchPageUserGift = () => ({
  type : SWITCH_PAGE_GIFT,
});

export const switchPageDone = () => ({
  type : SWITCH_PAGE_DONE,
});

//===================================GROUP INFO===================================

export const groupInfoSwitch = () => ({
  type : GROUP_INFO_SWITCH,
});

//===================================USER STEP SWITCH===================================

export const userStepSwitch = () => ({
  type : USER_STEP_SWITCH,
});
//===================================SHUFFLE RECIPIENT===================================

export const isRecipient = (path) => ({
  type : IS_RECIPIENT,
  payload : {
    recipientID : path.recipientID,
  }
})

//===================================RECIPIENTS===================================

export const selectRecipient = (path) => {
  let group = {
    ...path.group,
  };

  const isUpdateRecipients = Object.values(group.recipients).length === 0;
  if (isUpdateRecipients) {
    const mixUsersArr = mixUsers(path.users);
    path.users.forEach((user, index) => {
      group.recipients[user.id] = mixUsersArr[index].id;
    });
  };

  let user = {
    ...path.user,
    recipientID : group.recipients[path.userID],
  };
  console.log("user.recipientID", user.recipientID);

  return async (dispatch) => {
    try {
      if (isUpdateRecipients) {
        const docGroup = doc(db, 'group', path.groupID);
        await updateDoc(docGroup, group);
      };

      const docUser = doc(db, 'user', path.userID);
      await updateDoc(docUser, user);

      dispatch(isRecipient({recipientID : user.recipientID}));

      toast.success("Получатель выбран!!!");
    } catch (error) {
      toast.error("Ошибка(");
    };
  };
};

