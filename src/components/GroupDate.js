import { GroupContext } from "../contexts/reduser";
import { useContext, useState } from "react";
import Steps from "./Pages";

const GroupDate = () => {
  const [budgetInput, setBudget] = useState("");
  const [registrationInput, setRegistration] = useState("");
  const [choosingInput, setChoosing] = useState("");
  const [exchangeInput, setExchange] = useState("");
  const [state, dispatch] = useContext(GroupContext);

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
            <input
              className="group_input"
              value={budgetInput}
              onChange={e => setBudget(e.target.value)}
            ></input>
          </div>
          {state.date.error === true && (<div className="error_text">Бюджет не может быть пустым!</div>)}
          
          <div className="group_form_container">
            <label>Регистрация участников до:</label>
            <input
              className="group_input"
              value={registrationInput}
              onChange={e => setRegistration(e.target.value)}
            ></input>
          </div>
          {state.date.error === true && (<div className="error_text">Дата не может быть не назначена!</div>)}
          
          <div className="group_form_container">
            <label>Выбор получателей подарков до:</label>
            <input
              className="group_input"
              value={choosingInput}
              onChange={e => setChoosing(e.target.value)}
            ></input>
          </div>
          {state.date.error === true && (<div className="error_text">Дата не может быть не назначена!</div>)}
          
          <div className="group_form_container">
            <label>Обмен подарками:</label>
              <input
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