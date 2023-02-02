import {
  GROUP_NAME,
  GROUP_DATE,
  GROUP_USER_NAME,
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
  GROUP_USER_NAME_ERROR,
  YOUR_GIFT_ERROR,
} from './actions/actionTypes';

const adminState = {
  group : {
    name : "",
    error : false,
    edit : true,
    id : null,
  },
  date : {
    budget : "",
    registration : "",
    choosing : "",
    exchange : "",
    error : false,
    edit : false,
  },
  user : {
    name : "",
    email : "",
    error : false,
    edit : false,
    id : null,
  },
  gift : {
    age : "",
    gender : "",
    wishes : "",
    error : false,
    edit : false,
  }, 
  admin : true,
  step : 1,
  userStep : 1,
}

export const adminReducer = (state = adminState, action) => {
  switch(action.type) {
    case GROUP_NAME : {
      console.log("GROUP-NAME", action.payload)
      const groupName = action.payload.group.name
      const stateStep = state.step;
      if (stateStep >= 2) {
        return {
          ...state,
          group : {
            ...state.group,
            name : groupName,
            error : false,
          },
          step : stateStep,
        }
      } else {
        return {
          ...state,
          group : {
            ...state.group,
            name : groupName,
            error : false,
            edit : false,
          },
          date : {
            ...state.date,
            edit : true,
          },
          step : 2,
        };
      }
    }
    case GROUP_DATE : {
      console.log("GROUP-DATE", action.payload);
      const dateBudget = action.payload.date.budget;
      const dateRegistration = action.payload.date.registration;
      const dateChoosing = action.payload.date.choosing;
      const dateExchange = action.payload.date.exchange;
      const stateStep = state.step;
      
      if (stateStep >= 3) {
        return {
          ...state,
          date : {
            ...state.date,
            budget : dateBudget,
            registration : dateRegistration,
            choosing : dateChoosing,
            exchange : dateExchange,
            error : false,
          },
          step : stateStep,
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
          },
          user : {
            ...state.user,
            edit : true,
          },
          step : 3,
          userStep : 1,
        }
      }
    }
    case GROUP_USER_NAME : {
      console.log("GROUP-USER", action.payload)
      const userName = action.payload.user.name;
      const userEmail = action.payload.user.email;
      const stateStep = state.step;

      if (stateStep >= 4) {
        return {
          ...state,
          user : {
            ...state.user,
            name : userName,
            email : userEmail,
            error : false,
          },
          step : stateStep,
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
          },
          gift: {
            ...state.gift,
            edit : true,
          },
          step : 4,
          userStep : 2,
        }
      }
    }
    case USER_GIFT : {
      console.log("YOUR-GIFT-FOR", action.payload);
      const giftAge = action.payload.gift.age;
      const giftWishes = action.payload.gift.wishes;
      const giftGender = action.payload.gift.gender;
      const stateStep = state.step;

      if (stateStep >= 5) {
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
            },
            step : stateStep,
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
          },
          step : 5,
          userStep : 3,
        }
      }
      break;
    }
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
    case GROUP_USER_NAME_ERROR : {
      return {
        ...state,
        user : {
          ...state.user,
          error : true,
        }
      };
    }
    case YOUR_GIFT_ERROR : {
      return {
        ...state,
        gift : {
          ...state.gift,
          error : true,
        }
      };
    }
    case SWITCH_PAGE_GROUP : {
      const stateStep = state.step;

      if (stateStep >= 1) {
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
      const stateStep = state.step;
      if (stateStep >= 2) {
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
      const stateStep = state.step;

      if (stateStep >= 3) {
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
      const stateStep = state.step;
      if (stateStep >= 4) {
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
      const stateStep = state.step;
      if (stateStep >= 4) {
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
      console.log("SET_GROUP_ID", action.payload)
      const userID = action.payload.user.id;
      return {
        ...state,
        user : {
          ...state.user,
          id : userID,
        },
      }
    }
    default : {
      return state;
    }
  }
}