import { GroupContext } from "../contexts/reduser";
import { useContext, useState } from "react";
import Steps from "./Pages";

const GroupDate = () => {
  const [state, dispatch] = useContext(GroupContext);
  const [budgetInput, setBudget] = useState(state.date.budget);
  const [registrationInput, setRegistration] = useState(state.date.registration);
  const [choosingInput, setChoosing] = useState(state.date.choosing);
  const [exchangeInput, setExchange] = useState(state.date.exchange);

  if (state.date.edit) {
    return (
      <div className="group">
        < Steps/>
        <div
        className="group_label"
        >Регистрация участников до: {}</div>
        <div className="group_form">
  
          <div className="group_form_container">
            <label>Бюджет:</label>
            <select
              className="group_input"
              value={budgetInput}
              onChange={e => setBudget(e.target.value)}
            >
              <option>Выберите бюджет</option>
              <option>1000₽</option>
              <option>2000₽</option>
              <option>3000₽</option>
              <option>4000₽</option>
              <option>5000₽</option>
              <option>6000₽</option>
            </select>
          </div>
          {state.date.error === true && (<div className="error_text">Бюджет не может быть пустым!</div>)}
          
          <div className="group_form_container">
            <label>Регистрация участников до:</label>
            <input
              type="date"
              className="group_input"
              value={registrationInput}
              onChange={e => setRegistration(e.target.value)}
            ></input>
          </div>
          {state.date.error === true && (<div className="error_text">Дата не может быть не назначена!</div>)}
          
          <div className="group_form_container">
            <label>Выбор получателей подарков до:</label>
            <input
              type="date"
              className="group_input"
              value={choosingInput}
              onChange={e => setChoosing(e.target.value)}
            ></input>
          </div>
          {state.date.error === true && (<div className="error_text">Дата не может быть не назначена!</div>)}
          
          <div className="group_form_container">
            <label>Обмен подарками:</label>
              <input
                type="date"
                className="group_input"
                value={exchangeInput}
                onChange={e => setExchange(e.target.value)}
              ></input>
          </div>
          {state.date.error === true && (<div className="error_text">Дата не может быть не назначена!</div>)}
          
          <button
          className="group_button"
          onClick={() => dispatch({type : "GROUP-DATE", payload : {
            date : {
              budget : budgetInput,
              registration : registrationInput,
              choosing : choosingInput,
              exchange : exchangeInput,
            }
          }})}
          >ОК</button>
        </div>
      </div>
    );
  };
};

export default GroupDate;