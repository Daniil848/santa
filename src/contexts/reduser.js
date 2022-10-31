import { useReducer, createContext } from "react";

const initialState = {
  group : {
    name : "",
    error : false,
  },
  date : {
    budget : "",
    registration : "",
    choosing : "",
    exchange : "",
    error : false,
  },
  admin : {
    name : "",
    email : "",
    error : false,
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
            error : false,
            name : Name, 
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
            error : false,
            budget : Budget,
            registration : Registration,
            choosing : Choosing,
            exchange : Exchange,
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
            error : false,
            name : Name,
            email : Email,
          },
          step : 4,
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