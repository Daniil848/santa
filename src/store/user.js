import {
  USER_NAME,
  USER_GIFT,
  USER_NAME_ERROR,
  USER_GIFT_ERROR,
  SET_USER_ID,
  SWITCH_PAGE_USER_NAME,
  SWITCH_PAGE_USER_GIFT,
  SWITCH_PAGE_USER_DONE,
} from './actions/actionTypes';

const userState = {
  user : {
    name : "",
    email : "",
    error : false,
    edit : true,
    id : null,
  },
  gift : {
    age : "",
    gender : "",
    wishes : "",
    error : false,
    edit : false,
  },
  step : 1,
};

export const userReducer = (state = userState, action) => {
  switch(action.type){
    case USER_NAME : {
      console.log("USER-NAME", action.payload)
      
      const userName = action.payload.user.name;
      const userEmail = action.payload.user.email;
      const stateStep = state.step;
      console.log(state.step)

      if (stateStep >= 2) {
        return {
          ...state,
          user : {
            ...state.user,
            name : userName,
            email : userEmail,
          },
          step : stateStep
        }
      } else {
        return {
          ...state,
          user : {
            ...state.user,
            name : userName,
            email : userEmail,
            edit : false,
          },
          gift : {
            ...state.gift,
            edit : true,
          },
          step : 2,
        }
      }
    }
    case USER_GIFT : {
      console.log("USER-GIFT", action.payload);
      const giftAge = action.payload.gift.age;
      const giftWishes = action.payload.gift.wishes;
      const giftGender = action.payload.gift.gender;
      const stateStep = state.step;

      if (stateStep >= 3) {
        return {
          ...state,
          gift : {
            ...state.gift,
            age : giftAge,
            gender : giftGender,
            wishes : giftWishes,
          },
          step : stateStep,
        } 
      } else {
        return {
          ...state,
          gift : {
            ...state.gift,
            age : giftAge,
            gender : giftGender,
            wishes : giftWishes,
            edit : false,
          },
          step : 3,
        }
      }
    }
    case USER_NAME_ERROR : {
      return {
        ...state,
        user : {
          ...state.user,
          error : true,
        }
      }
    }
    case USER_GIFT_ERROR : {
      return {
        ...state,
        gift : {
          ...state.gift,
          error : true,
        }
      }
    }
    case SWITCH_PAGE_USER_NAME : {
      console.log("click")
      return {
        ...state,
        user : {
          ...state.user,
          edit : true,
        },
        gift : {
          ...state.gift,
          edit : false,
        },
      }
    }
    case SWITCH_PAGE_USER_GIFT : {
      return {
        ...state,
        user : {
          ...state.user,
          edit : false,
        },
        gift : {
          ...state.gift,
          edit : true,
        },
      }
    }
    case SWITCH_PAGE_USER_DONE : {
      return {
        ...state,
        user : {
          ...state.user,
          edit : false,
        },
        gift : {
          ...state.gift,
          edit : false,
        },
      }
    }
    case SET_USER_ID : {
      const idUser = action.payload.id;
      return {
        ...state,
        user : {
          ...state.user,
          id : idUser,
        }
      }
    }
    default : {
      return state;
    }
  }
}