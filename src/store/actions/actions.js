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
} from './actionTypes';
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

//===================================FETCH GROUP & USER===================================

export const saveGroupName = (path) => {
  if (path.groupID !== null) {
    return async(dispatch) => {
      try {
        const response = await fetch("http://localhost:3002/group/" + path.groupID, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.groupDB),
        })

        if (response.status < 300) {
          dispatch(createGroupName({
            group : path.groupDB.group,
          }));
          toast.success("Название группы изменено!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (response.status >= 300) {
          toast.error("Ошибка(", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return false;
        }
      } catch (err) {
        console.error('Произошла ошибка!', err);
        toast.error("Ошибка(", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };
    };
  };
};

export const saveGroupDate = (path) => {
  if (path.groupID !== null) {
    return async(dispatch) => {
      try {
        const response = await fetch("http://localhost:3002/group/" + path.groupID, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.groupDB),
        })

        if (response.status < 300) {
          dispatch(createGroupDate({
            date : path.groupDB.date,
          }));
          toast.success("Дата изменена!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (response.status >= 300) {
          toast.error("Ошибка(", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return false;
        }
      } catch (err) {
        console.error('Произошла ошибка!', err);
        toast.error("Ошибка(", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };
    };
  } else if (path.groupID === null) {
    return async(dispatch) => {
      try {
        const response = await fetch("http://localhost:3002/group", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.groupDB),
        });

        const data = await response.json();
        console.log("data",data);

        if (response.status < 300) {
          dispatch(groupID({
            group : {
              id : data.id,
            }
          }));
          dispatch(createGroupDate({
            date : path.date,
          }));
          toast.success("Группа создана!!!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (response.status >= 300) {
          toast.error("Ошибка(", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return false;
        };
      } catch (err) {
        console.error('Произошла ошибка!', err);
      }
    }
  }
};

export const saveUserName = (path) => {
  if (path.groupID !== null) {
    return async(dispatch) => {
      try {
        const response = await fetch("http://localhost:3002/user/" + path.userID, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.userDB),
        })

        if (response.status < 300) {
          dispatch(createUserName({
            user : path.userDB.user,
          }));
          toast.success("Имя изменено!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (response.status >= 300) {
          toast.error("Ошибка(", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return false;
        }
      } catch (err) {
        console.error('Произошла ошибка!', err);
        toast.error("Ошибка(", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };
    };
  };
};

export const saveUser = (path) => {
  if (path.userID !== null) {
    return async(dispatch) => {
      try {
        const response = await fetch("http://localhost:3002/user/" + path.userID, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.userDB),
        })

        if (response.status < 300) {
          dispatch(createUserGift({
            gift : path.userDB.gift,
          }));
          toast.success("Ваш подарок изменен!!!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (response.status >= 300) {
          toast.error("Ошибка(", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return false;
        }
      } catch (err) {
        console.error('Произошла ошибка!', err);
        toast.error("Ошибка(", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  } else if (path.userID === null) {
    return async(dispatch) => {
      try {
        const response = await fetch("http://localhost:3002/user", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.userDB),
        });
  
        const data = await response.json();
        
        if (response.status < 300) {
          dispatch(userID({ 
            user : {
              id : data.id,
            }
          }));
          dispatch(createUserGift({
            gift : path.gift,
          }));
          toast.success("Пользователь создан!!!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (response.status >= 300) {
          toast.error("Ошибка(", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return false;
        };
      } catch (err) {
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
})

export const editProfileGroupDate = () => ({
  type : EDIT_PROFILE_GROUP_DATE,
})

export const editProfileUserName = () => ({
  type : EDIT_PROFILE_USER_NAME,
})

export const editProfileUserGift = () => ({
  type : EDIT_PROFILE_USER_GIFT,
})