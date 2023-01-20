import {
  SWITCH_PAGE_USER_NAME,
  SWITCH_PAGE_USER_GIFT,
  SWITCH_PAGE_USER_DONE,
} from "../../store/actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";

const PagesUser = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userReducer);
  const currentPageUserNameClass = state.step >= 1 ? "page_number--current" : "";
  const currentPageGiftClass = state.step >= 2 ? "page_number--current" : ""
  const currentPageDoneClass = state.step >= 3 ? "page_done" : ""; 
  const activePageUserNameClass = state.user.edit ? "page_number--active" : "";
  const activePageGiftClass = state.gift.edit ? "page_number--active" : "";
  const activePageDoneClass = (state.user.edit === false && state.gift.edit === false) ? "page_done--active" : ""
  const errorPageUserNameClass = state.user.error === true ? "page_number--error" : "";
  const errorPageGiftClass = state.gift.error === true ? "page_number--error" : "";

  return (
    <div className="page">
      <div
        className={`page_number ${currentPageUserNameClass} ${activePageUserNameClass} ${errorPageUserNameClass}`}
        onClick={() =>  dispatch({type: SWITCH_PAGE_USER_NAME})}
      >1</div>
      <div
        className={`page_number ${currentPageGiftClass} ${activePageGiftClass} ${errorPageGiftClass}`}
        onClick={() =>  dispatch({type: SWITCH_PAGE_USER_GIFT})}
      >2</div>
      {state.step >= 3 && <div
        className={`page_number ${currentPageDoneClass} ${activePageDoneClass}`}
        onClick={() => dispatch({type : SWITCH_PAGE_USER_DONE})}
      >3</div>}
    </div> 
  );
};

export default PagesUser;