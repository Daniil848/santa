import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { groupID } from "../store/actions/actions";

const GroupDone = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const saveGroup = state.saveGroup === true;
  const globalEdit = state.globalEdit === true
  console.log("globalEdit", globalEdit)
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
        const response = await fetch("http://localhost:3002/group", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(group),
        })

        const data = await response.json()
        dispatch({type : "SET_GROUP_ID", payload : { id : data.id, }})
        
        if (response.status < 300) {
          return true; 
        } else if (response.status >= 300) {
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
        const response = await fetch("http://localhost:3002/group/" + state.group.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(group),
        })

        if (response.status < 300) {
          console.log(group)
          return true; 
        } else if (response.status >= 300) {
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
        <label className="group_label">Регистрация участников до:<br></br> {state.date.registration}</label>
        <label className="group_label">Бюджет на подарок состовялет: {state.date.budget}₽</label>
        <label className="group_label">Ссылка на вашу группу:</label> 
        <Link
          className="user_link" 
          to={`/group/${state.group.id}`}>
        http://localhost:3000/group/{state.group.id}</Link>
        <label className="group_label">(Отправьте ее друзьям что-бы обмениваться подарками)</label>
      </>
    );
  };
};

export default GroupDone;