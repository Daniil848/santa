import { useState, useContext } from "react";
import { GroupContext } from "../contexts/reduser";

const YourGift = () => {
  const [state, dispatch] = useContext(GroupContext);
  const [ageInput, setAge] = useState(state.gift.age);
  const [wishesArea, setWishes] = useState(state.gift.wishes);
  const [gender, setGender] = useState(state.gift.gender);

  if (state.gift.edit) {
    return (
      <>
        <div className="group_label">Ваш подарок.</div>
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
            <label className="light">
              <input
                type="radio"
                name="gender"
                value="Для мальчика"
                id="boy"
                onChange={e => setGender(e.target.value)}
              ></input>
            Для мальчика</label>

            <label className="light">
              <input
                type="radio"
                name="gender"
                value="Для девочки"
                id="girl"
                onChange={e => setGender(e.target.value)}
              ></input> 
            Для девочки</label>
            
            <label className="light">
              <input
                type="radio"
                name="gender"
                value="Не важно"
                id="neverMind"
                onChange={e => setGender(e.target.value)}
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
          onClick={() => {
            dispatch({type : "YOUR-GIFT-FOR", payload : {
                gift : {
                  age : ageInput,
                  gender : gender,
                  wishes : wishesArea,
                }
              }
            })
            dispatch({type : "SET-GLOBAL-EDIT", payload : {globalEdit : true}})
          }}
        >ОК</button>
      </>
    );
  };
};

export default YourGift;