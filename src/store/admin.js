import {
  GROUP_NAME,
  GROUP_DATE,
  GROUP_ADMIN_NAME,
  YOUR_GIFT_FOR,
  SWITCH_PAGE_GROUP,
  SWITCH_PAGE_DATE,
  SWITCH_PAGE_ADMIN,
  SWITCH_PAGE_GIFT,
  SWITCH_PAGE_DONE,
  SET_GROUP_ID,
  GROUP_NAME_ERROR,
  GROUP_DATE_ERROR,
  GROUP_ADMIN_NAME_ERROR,
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
  admin : {
    name : "",
    email : "",
    error : false,
    edit : false,
  },
  gift : {
    age : "",
    gender : "",
    wishes : "",
    error : false,
    edit : false,
  }, 
  step : 1,
}

export const adminReducer = (state = adminState, action) => {
  switch(action.type) {
    case GROUP_NAME : {
      console.log("GROUP-NAME", action.payload)
      const groupName = action.payload.group.name
      const stateStep = state.step;
      if (stateStep >= 2) {
        if (groupName === "") {
          return {
            ...state,
            group : {
              ...state.group,
              error : true,
            },
          }
        } else if (groupName !== "") {
          return {
            ...state,
            group : {
              ...state.group,
              name : groupName,
              error : false,
            },
            step : stateStep,
          }
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
      break;
    }
    case GROUP_DATE : {
      console.log("GROUP-DATE", action.payload);
      const dateBudget = action.payload.date.budget;
      const dateRegistration = action.payload.date.registration;
      const dateChoosing = action.payload.date.choosing;
      const dateExchange = action.payload.date.exchange;
      const stateStep = state.step;
      
      if (stateStep >= 3) {
        if (dateBudget === "" || dateRegistration === "" || dateChoosing === "" || dateExchange === "") {
          return {
            ...state,
            date : {
              ...state.date,
              error : true,
            },
          }
        } else if (dateBudget !== "" || dateRegistration !== "" || dateChoosing !== "" || dateExchange !== "") {
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
        }
        console.log("err")
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
          admin : {
            ...state.admin,
            edit : true,
          },
          step : 3,
        }
      }
      break;
    }
    case GROUP_ADMIN_NAME : {
      console.log("GROUP-ADMIN", action.payload)
      const adminName = action.payload.admin.name;
      const adminEmail = action.payload.admin.email;
      const stateStep = state.step;

      if (stateStep >= 4) {
        if (adminName === "" || adminEmail === "") {
          return {
            ...state,
            admin : {
              ...state.admin,
              error : true,
            },
          }
        } else if (adminName !== "" || adminEmail !== "") {
          return {
            ...state,
            admin : {
              ...state.admin,
              name : adminName,
              email : adminEmail,
              error : false,
            },
            step : stateStep,
          }
        }
      } else {
        return {
          ...state,
          admin : {
            ...state.admin,
            name : adminName,
            email : adminEmail,
            error : false,
            edit : false,
          },
          gift: {
            ...state.gift,
            edit : true,
          },
          step : 4,
        }
      }
      break;
    }
    case YOUR_GIFT_FOR : {
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
          saveGroup : true,
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
    case GROUP_ADMIN_NAME_ERROR : {
      return {
        ...state,
        admin : {
          ...state.admin,
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
      }
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
          admin: {
            ...state.admin,
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
          admin: {
            ...state.admin,
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
    case SWITCH_PAGE_ADMIN : {
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
          admin: {
            ...state.admin,
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
          admin: {
            ...state.admin,
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
          admin: {
            ...state.admin,
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
    default : {
      return state;
    }
  }
}