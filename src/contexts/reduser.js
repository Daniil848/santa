import { useReducer, createContext } from "react";

const initialState = {
  group : {
    name : "",
    error : false,
    edit : true,
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
};

const reducer = (state, action) => {
  switch(action.type) {
    case "GROUP-NAME" : {
      console.log("GROUP-NAME", action.payload)
      const Name = action.payload.group.name
      if (Name === "") {
        return {
          ...state,
          group : {
            ...state.group,
            error : true,
          }  
        };
      } else {
        return {
          ...state,
          group : {
            ...state.group,
            name : Name, 
            error : false,
            edit : false,
          },
          date : {
            ...state.date,
            edit : true,
          },
          step : 2,
        };
      };
    }
    case "GROUP-DATE" : {
      console.log("GROUP-DATE", action.payload)
      const Budget = action.payload.date.budget;
      const Registration = action.payload.date.registration;
      const Choosing = action.payload.date.choosing;
      const Exchange = action.payload.date.exchange;
      
      if (Budget === "" || Registration === "" || Choosing === "" || Exchange === "") {
        return {
          ...state,
          date : {
            ...state.date,
            error : true,
          }
        }
      } else {
        return {
          ...state,
          date : {
            ...state.date,
            budget : Budget,
            registration : Registration,
            choosing : Choosing,
            exchange : Exchange,
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
    }
    case "GROUP-ADMIN" : {
      console.log("GROUP-ADMIN", action.payload)
      const Name = action.payload.admin.name;
      const Email = action.payload.admin.email;

      if (Name === "" || Email === "") {
        return {
          ...state,
          admin : {
            ...state.admin,
            error : true,
          }
        }
      } else {
        return {
          ...state,
          admin : {
            ...state.admin,
            name : Name,
            email : Email,
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
    }
    case "YOUR-GIFT-FOR" : {
      console.log("YOUR-GIFT-FOR", action.payload);
      const Age = action.payload.gift.age;
      const Wishes = action.payload.gift.wishes;
      const Gender = action.payload.gift.gender;

      if(Age === "" || Gender === "") {
        return {
          ...state,
          gift : {
            ...state.gift,
            error : true,
          }
        }
      } else {
        return {
          ...state,
          gift : {
            ...state.gift,
            age : Age,
            gender : Gender,
            wishes : Wishes,
            edit : false,
          },
          step : 5,
        }
      }
    }
    
    default : {
      return state;
    }
  }
};

export const GroupContext = createContext();

export const GroupProvider = ({children}) => {
  const value = useReducer(reducer, initialState);
  return <GroupContext.Provider value={value}>{children}</GroupContext.Provider>
};