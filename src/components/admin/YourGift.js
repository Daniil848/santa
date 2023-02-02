import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, yourGiftError } from "../../store/actions/actions";

const YourGift = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const [ageInput, setAge] = useState(state.gift.age);
  const [wishesArea, setWishes] = useState(state.gift.wishes);
  const [gender, setGender] = useState(state.gift.gender);
  let userDB = {
    user : {
      name : state.user.name,
      email : state.user.email,
    },
    gift : {
      age : ageInput,
      gender : gender,
      wishes : wishesArea,
    },
    admin : props.admin,
  };

  const addGift = () => {
    if (ageInput === "" || gender === "") {
      dispatch(yourGiftError(true));
      return;
    }
    dispatch(saveUser({
      userDB,
      gift : {
        age : ageInput,
        gender : gender,
        wishes : wishesArea,
      },
      userID : state.user.id,
    }));
  };

  if (state.gift.edit) {
    return (
      <>
        <div className="group_label">Мой подарок.</div>
        <div className="group_form_container">
          <label>Для возраста:</label>
          <input
            className="group_input"
            type="number"
            value={ageInput}
            onChange={e => setAge(e.target.value)}
          ></input>
        
          {state.gift.error === true && (<div className="error_text">Укажите возраст!</div>)}
        
          <div className="group_form_radios">
            <label>Пол:</label>
            <label className="light">
              <input
                type="radio"
                name="gender"
                value="Мужской"
                id="boy"
                checked={gender === "boy"}
                onChange={e => setGender(e.target.id)}
              ></input>
            Мужской</label>

            <label className="light">
              <input
                type="radio"
                name="gender"
                value="Женский"
                id="girl"
                checked={gender === "girl"}
                onChange={e => setGender(e.target.id)}
              ></input> 
            Женский</label>
            
            <label className="light">
              <input
                type="radio"
                name="gender"
                value="Не важно"
                id="neverMind"
                checked={gender === "neverMind"}
                onChange={e => setGender(e.target.id)}
              ></input>
            Не важно</label>
          </div>
          {state.gift.error === true && (<div className="error_text">Выберите кому подарить подарок!</div>)}

          
            <label>Пожелания к подарку(не обязательно):</label>
            <textarea
              className="group_input"
              value={wishesArea}
              onChange={e => setWishes(e.target.value)}
            ></textarea>
        </div>

        <button
          className="group_button"
          onClick={addGift}
        >ОК</button>
      </>
    );
  };
};

export default YourGift;