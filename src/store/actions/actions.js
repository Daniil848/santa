import {
  GROUP_NAME,
  GROUP_DATE,
  GROUP_ADMIN_NAME,
  YOUR_GIFT_FOR,
  SET_GROUP_ID,
  USER_NAME,
  SET_USER_ID,
  GROUP_NAME_ERROR,
  GROUP_DATE_ERROR,
  GROUP_ADMIN_NAME_ERROR,
  YOUR_GIFT_ERROR,
} from './actionTypes';
import { toast } from 'react-toastify';

//===============================ADMIN===============================

export const saveGroupName = (path) => {
  console.log(path);
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
          dispatch({
            type : GROUP_NAME,
            payload : {
              group : path.groupDB,
            },
          });
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
      }
    }
  }
};

export const createGroupName = (path) => ({
  type : GROUP_NAME,
  payload : {
    group : path.group,
  },
})

export const saveGroupDate = (path) => {
  console.log(path);
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
          dispatch({
            type : GROUP_DATE,
            payload : {
              date : path.groupDB,
            },
          });
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
  };
};
export const createGroupDate = (path) => ({
  type : GROUP_DATE,
  payload : {
    date : path.date,
  },
})

export const saveAdminName = (path) => {
  console.log(path);
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
          dispatch({
            type : GROUP_ADMIN_NAME,
            payload : {
              admin : path.groupDB,
            },
          });
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

export const createAdminName = (path) => ({
  type : GROUP_ADMIN_NAME,
  payload : {
    admin : path.admin,
  },
})

export const saveGroup = (path) => {
  console.log(path);
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
          dispatch({
            type : YOUR_GIFT_FOR,
            payload : {
              gift : path.groupDB,
            }
          });
          toast.success("Готово!!!", {
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
          dispatch({
            type : YOUR_GIFT_FOR,
            payload : {
              gift : path.gift,
            }
          });
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
      };
    };
  }
};

export const groupID = (path) => ({
  type : SET_GROUP_ID,
  payload : {
    group : path.group,
  },
});

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

export const groupAdminNameError = (path) => ({
  type : GROUP_ADMIN_NAME_ERROR,
  payload : {
    admin : path.admin,
  },
});

export const yourGiftError = (path) => ({
  type : YOUR_GIFT_ERROR,
  payload : {
    gift : path.gift,
  },
});

//===============================USER===============================

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

export const saveUser = (user) => {
  console.log(user);
  return async(dispatch) => {
    try {
      const response = await fetch("http://localhost:3002/user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
      })

      const data = await response.json()
      dispatch({type : "SET_USER_ID", payload : { id : data.id, }})
      
      if (response.status < 300) {
        dispatch({
          type : USER_NAME,
          payload : {
            user : user.user,
          },
        });
      } else if (response.status >= 300) {
        return false;
      }
    } catch (err) {
      console.error('Произошла ошибка!', err);
    }
  }
}