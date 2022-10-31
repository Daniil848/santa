import Steps from "./Pages";

const YourGift = () => {
  return (
    <div className="group">
      < Steps/>
      <div className="group_label">Ваш подарок.</div>
      <div className="group_form">

        <div className="group_form_container">
          <label>Для возраста:</label>
          <input
            className="group_input"
          ></input>
        </div>
        
        <div className="group_form_radios">
          <div>
            <input
              type="radio"
              id="1"
              name="radio_gender"
            ></input>
            <label className="light">Для мальчика</label>
          </div>
          <div>
            <input
              type="radio"
              id="2"
              name="radio_gender"
            ></input>
            <label className="light">Для девочки</label>
          </div>
          <div>
            <input
              type="radio"
              id="3"
              name="radio_gender"
            ></input>
            <label className="light">Не важно</label>
          </div>
        </div>

        <div className="group_form_container">
          <label>Пожелания к подарку(не обязательно):</label>
          <textarea
            className="group_input"
          ></textarea>
        </div>

        <button
          className="group_button"
        >ОК</button>
        
      </div>
    </div>
  )
}

export default YourGift;