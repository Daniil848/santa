import { useContext, useEffect, useState } from "react";
import { GroupContext } from "../contexts/reduser";


const GroupDone = () => {
  const [state, dispatch] = useContext(GroupContext);
  const saveGroup = state.saveGroup === true;
  const globalEdit = (state.globalEdit === true)
  console.log("globalEdit",globalEdit)
  let group = {
    group : {
      name : state.group.name,
    },
    date : {
      budget : state.date.budget,
      registration : state.date.registration,
      choosing : state.date.choosing,
      exchange : state.date.exchange,
    },
    admin : {
      name : state.admin.name,
      email : state.admin.email,
    },
    gift : {
      age : state.gift.age,
      gender : state.gift.gender,
      wishes : state.gift.wishes,
    }
  };
  
  useEffect(() => {
    const createGroup = async(group) => {
      try {
        const res = await fetch("http://localhost:3002/data", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(group),
        })

        const response = await res.json()
        dispatch({type : "SET-GROUP-ID", payload : { id : response.id, }})
        
        if (res.status < 300) {
          return true; 
        } else if (res.status >= 300) {
          return false;
        }
      } catch (err) {
        console.error('Произошла ошибка!', err);
      }
    }
       
    if (saveGroup) {
      createGroup(group);
    }
  },[saveGroup]);

  useEffect(() => {
    const updateGroup = async(group) => {
      try {
        const res = await fetch("http://localhost:3002/data/" + state.group.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(group),
        })

        const response = await res.json()
        

        if (res.status < 300) {
          console.log(group)
          return true; 
        } else if (res.status >= 300) {
          return false;
        }
      } catch (err) {
        console.error('Произошла ошибка!', err);
      }
    }
    if (globalEdit) {
      updateGroup(group);
    }
  },[globalEdit])

  if (state.group.edit === false && state.date.edit === false && state.admin.edit === false && state.gift.edit === false) {
    return (
      <>
        <label className="group_label">Ваша группа "{state.group.name}" готова!!!</label> 
      </>
    );
  };
};

export default GroupDone;