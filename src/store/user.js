const userState = {
  user : {
    name : "",
    email : "",
    error : false,
    edit : true,
    id : null,
  },
  step : 1,
  saveUser : false,
};

export const userReducer = (state = userState, action) => {
  switch(action.type){
    case "USER-NAME" : {
      console.log("USER-NAME", action.payload)
      const Name = action.payload.user.name;
      const Email = action.payload.user.email;

      if (Name === "" || Email === "") {
        return {
          ...state,
          user : {
            ...state.user,
            error : true,
          }
        }
      } else {
        return {
          ...state,
          user : {
            ...state.user,
            name : Name,
            email : Email,
            error : false,
            edit : false,
          },
          step : 2,
          saveUser : true,
        }
      }
    }
    case "SET-USER-ID" : {
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