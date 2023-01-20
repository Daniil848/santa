import {
} from "../../store/actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";

const PagesUser = () => {

  return (
    <div className="page">
      <div
        className={`page_number`}
      >1</div>
      <div
        className={`page_number`}
      >2</div>
      <div
        className={`page_number`}
      >3</div>
    </div> 
  );
};

export default PagesUser;