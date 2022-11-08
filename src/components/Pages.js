import { useContext } from "react";
import { GroupContext } from "../contexts/reduser";

const Steps = () => {
  const [state, dispatch] = useContext(GroupContext);

  return (
    <div className="page">
      <div
        className="page_number"
        onClick={() => dispatch({type : "SWITCH-PAGE-GROUP"})}
        >1</div>
      <div
        className="page_number"
        onClick={() => dispatch({type : "SWITCH-PAGE-DATE"})}
        >2</div>
      <div
        className="page_number"
        onClick={() => dispatch({type : "SWITCH-PAGE-ADMIN"})}
        >3</div>
      <div
        className="page_number"
        onClick={() => dispatch({type : "SWITCH-PAGE-GIFT"})}
        >4</div>
    </div>
  )
}

export default Steps;