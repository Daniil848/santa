import {
  GROUP_NAME,
  GROUP_DATE,
  USER_NAME,
  USER_GIFT,
  SWITCH_PAGE_GROUP,
  SWITCH_PAGE_DATE,
  SWITCH_PAGE_USER,
  SWITCH_PAGE_GIFT,
  SWITCH_PAGE_DONE,
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
  GROUP_INFO_SWITCH,
  USER_STEP_SWITCH,
  IS_RECIPIENT,
} from './actions/actionTypes';

const santaState = {
  group : {
    name : "",
    error : false,
    edit : true,
    editProfile : false,
    id : null,
  },
  date : {
    budget : "",
    registration : "",
    choosing : "",
    exchange : "",
    error : false,
    edit : false,
    editProfile : false,
  },
  user : {
    name : "",
    email : "",
    error : false,
    edit : false,
    id : null,
    editProfile : false,
  },
  gift : {
    age : "",
    gender : "",
    wishes : "",
    error : false,
    edit : false,
    editProfile : false,
  }, 
  admin : true,
  step : 1,
  userStep : 0,
  groupInfo : false,
  isRecipient : false,
  recipientID : null,
  isEdit : false,
}

export const santa = (state = santaState, action) => {
  switch(action.type) {
    case GROUP_NAME : {
      const groupName = action.payload.group.name
      const stateStep = state.step;
      if (stateStep >= 2) {
        return {
          ...state,
          group : {
            ...state.group,
            name : groupName,
            error : false,
            editProfile : false,
          },
          step : stateStep,
          isEdit : true,
        }
      } else {
        return {
          ...state,
          group : {
            ...state.group,
            name : groupName,
            error : false,
            edit : false,
            editProfile : false,
          },
          date : {
            ...state.date,
            edit : true,
          },
          step : 2,
          isEdit : true,
        };
      }
    }
    case GROUP_DATE : {
      const dateBudget = action.payload.date.budget;
      const dateRegistration = action.payload.date.registration;
      const dateChoosing = action.payload.date.choosing;
      const dateExchange = action.payload.date.exchange;
      const stateUserStep = state.userStep;
      
      if (stateUserStep >= 3) {
        return {
          ...state,
          date : {
            ...state.date,
            budget : dateBudget,
            registration : dateRegistration,
            choosing : dateChoosing,
            exchange : dateExchange,
            error : false,
            editProfile : false,
          },
          userStep : state.userStep,
        }
      } else {
        return {
          ...state,
          date : {
            ...state.date,
            budget : dateBudget,
            registration : dateRegistration,
            choosing : dateChoosing,
            exchange : dateExchange,
            error : false,
            edit : false,
            editProfile : false,
          },
          user : {
            ...state.user,
            edit : true,
          },
          userStep : 1,
          isEdit : true,
        }
      }
    }
    case USER_NAME : {
      const userName = action.payload.user.name;
      const userEmail = action.payload.user.email;
      const stateUserStep = state.userStep;

      if (stateUserStep >= 2) {
        return {
          ...state,
          user : {
            ...state.user,
            name : userName,
            email : userEmail,
            error : false,
            editProfile : false,
          },
          userStep : state.userStep,
        }
      } else {
        return {
          ...state,
          user : {
            ...state.user,
            name : userName,
            email : userEmail,
            error : false,
            edit : false,
            editProfile : false,
          },
          gift: {
            ...state.gift,
            edit : true,
          },
          userStep : 2,
          isEdit : true,
        }
      }
    }
    case USER_GIFT : {
      const giftAge = action.payload.gift.age;
      const giftWishes = action.payload.gift.wishes;
      const giftGender = action.payload.gift.gender;
      const stateUserStep = state.userStep;

      if (stateUserStep >= 3) {
        if (giftAge === "" ||  giftGender === "") {
          return {
            ...state,
            gift : {
              ...state.gift,
              error : true,
            },
          }
        } else if (giftAge !== ""  || giftGender !== "") {
          return {
            ...state,
            gift : {
              ...state.gift,
              age : giftAge,
              gender : giftGender,
              wishes : giftWishes,
              error : false,
              editProfile : false,
            },
            userStep : state.userStep,
          }
        }
      } else {
        return {
          ...state,
          gift : {
            ...state.gift,
            age : giftAge,
            gender : giftGender,
            wishes : giftWishes,
            error : false,
            edit : false,
            editProfile : false,
          },
          userStep : 3,
          isEdit : true,
        }
      }
      break;
    }
    //===================================ERRORS===================================
    case GROUP_NAME_ERROR : {
      return {
        ...state,
        group : {
          ...state.group,
          error : true,
        }
      };
    }
    case GROUP_DATE_ERROR : {
      return {
        ...state,
        date : {
          ...state.date,
          error : true,
        }
      };
    } 
    case USER_NAME_ERROR : {
      return {
        ...state,
        user : {
          ...state.user,
          error : true,
        }
      };
    }
    case USER_GIFT_ERROR : {
      return {
        ...state,
        gift : {
          ...state.gift,
          error : true,
        }
      };
    }
    //===================================SWICH PAGES===================================
    case SWITCH_PAGE_GROUP : {

      if (state.step >= 1) {
        return {
          ...state,
          group : {
            ...state.group,
            edit : true,
          },
          date : {
            ...state.date,
            edit : false,
          },
          user: {
            ...state.user,
            edit : false,
          },
          gift : {
            ...state.gift,
            edit : false,
          },
        }
      } else {
        return {
          ...state,
        }
      }
    }
    case SWITCH_PAGE_DATE : {
      if (state.step >= 2) {
        return {
          ...state,
          group : {
            ...state.group,
            edit : false,
          },
          date : {
            ...state.date,
            edit : true,
          },
          user: {
            ...state.user,
            edit : false,
          },
          gift : {
            ...state.gift,
            edit : false,
          },
        }
      } else {
        return {
          ...state,
        }
      }
    }
    case SWITCH_PAGE_USER : {

      if (state.userStep >= 1) {
        return {
          ...state,
          group : {
            ...state.group,
            edit : false,
          },
          date : {
            ...state.date,
            edit : false,
          },
          user: {
            ...state.user,
            edit : true,
          },
          gift : {
            ...state.gift,
            edit : false,
          },
        }
      } else {
        return {
          ...state,
        }
      }
      
    }
    case SWITCH_PAGE_GIFT : {
      if (state.userStep >= 2) {
        return {
          ...state,
          group : {
            ...state.group,
            edit : false,
          },
          date : {
            ...state.date,
            edit : false,
          },
          user: {
            ...state.user,
            edit : false,
          },
          gift : {
            ...state.gift,
            edit : true,
          },
        }
      } else {
        return {
          ...state,
        }
      } 
    }
    case SWITCH_PAGE_DONE : {

      if (state.userStep >= 3) {
        return {
          ...state,
          group : {
            ...state.group,
            edit : false,
          },
          date : {
            ...state.date,
            edit : false,
          },
          user: {
            ...state.user,
            edit : false,
          },
          gift : {
            ...state.gift,
            edit : false,
          },
        }
      } else {
        return {
          ...state,
        }
      }
    }
    //===================================SET ID===================================
    case SET_GROUP_ID : {
      console.log("SET_GROUP_ID", action.payload)
      const groupID = action.payload.group.id;
      return {
        ...state,
        group : {
          ...state.group,
          id : groupID,
        },
      }
    }
    case SET_USER_ID : {
      console.log("SET_USER_ID", action.payload)
      const userID = action.payload.user.id;
      return {
        ...state,
        user : {
          ...state.user,
          id : userID,
        },
      }
    }
    //===================================EDIT PROFILE===================================
    case EDIT_PROFILE_GROUP_NAME : {
      return {
        ...state,
        group : {
          ...state.group,
          editProfile : true,
        },
        isEdit : false,
      }
    }
    case EDIT_PROFILE_GROUP_DATE : {
      return {
        ...state,
        date : {
          ...state.date,
          editProfile : true,
        },
        isEdit : false,
      }
    }
    case EDIT_PROFILE_USER_NAME : {
      return {
        ...state,
        user : {
          ...state.user,
          editProfile : true,
        },
        isEdit : false,
      }
    }
    case EDIT_PROFILE_USER_GIFT : {
      return {
        ...state,
        gift : {
          ...state.gift,
          editProfile : true,
        },
        isEdit : false,
      }
    }
    //===================================GROUP INFO===================================
    case GROUP_INFO_SWITCH : {
      const groupinfo = state.groupInfo;
      if (groupinfo === false) {
        return {
          ...state,
          groupInfo : true,
        }
      } else if (groupinfo === true) {
        return {
          ...state,
          groupInfo : false,
        }
      }
      break;
    }
    //===================================USER STEP SWITCH===================================
    case USER_STEP_SWITCH : {
      return {
        ...state,
        user : {
          ...state.user,
          edit : true,
        },
        userStep : 1,
      }
    }
    //===================================SHUFFLE RECIPIENT===================================
    case IS_RECIPIENT : {
      const recipientID = action.payload.recipientID
      return {
        ...state,
        isRecipient : true,
        recipientID : recipientID,
      }
    }
    //===================================DEFAULT===================================
    default : {
      return state;
    }
  }
};