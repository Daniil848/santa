const userState = {
  user : {
    name : "",
    email : "",
    error : false,
    edit : true,
    id : null,
  },
  userStep : 1,
  saveUser : false,
};

export const userReducer = (state = userState, action) => {
  switch(action.type){
    case "USER_NAME" : {
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
          userStep : 2,
          saveUser : true,
        }
      }
    }
    case "SET_USER_ID" : {
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