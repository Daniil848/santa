import { 
  SWITCH_PAGE_GROUP,
  SWITCH_PAGE_DATE,
  SWITCH_PAGE_USER,
  SWITCH_PAGE_GIFT,
  SWITCH_PAGE_DONE,
} from "../../store/actions/actionTypes";

import { useDispatch, useSelector } from "react-redux";

const GroupPages = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const currentPageNameClass = state.step >= 1 ? "page_number--current" : "";
  const currentPageDateClass = state.step >= 2 ? "page_number--current" : "";
  const currentPageUserClass = state.step >= 3 ? "page_number--current" : "";
  const currentPageGiftClass = state.step >= 4 ? "page_number--current" : "";
  const currentPageDoneClass = state.step >= 5 ? "page_done" : "";
  const activePageNameClass = state.group.edit ? "page_number--active" : "";
  const activePageDateClass = state.date.edit ? "page_number--active" : "";
  const activePageUserClass = state.user.edit ? "page_number--active" : "";
  const activePageGiftClass = state.gift.edit ? "page_number--active" : "";
  const activePageDoneClass = (state.group.edit === false && state.date.edit === false && state.user.edit === false && state.gift.edit === false) ? "page_done--active" : ""
  const errorPageNameClass = state.group.error === true ? "page_number--error" : "";
  const errorPageDateClass = state.date.error === true ? "page_number--error" : "";
  const errorPageUserClass = state.user.error === true ? "page_number--error" : "";
  const errorPageGiftClass = state.gift.error === true ? "page_number--error" : "";

  return (
    <div className="page">
      <div
        className={`page_number ${currentPageNameClass} ${activePageNameClass} ${errorPageNameClass}`}
        onClick={() => dispatch({type : SWITCH_PAGE_GROUP})}
      >1</div>
      <div
        className={`page_number ${currentPageDateClass} ${activePageDateClass} ${errorPageDateClass}`}
        onClick={() => dispatch({type : SWITCH_PAGE_DATE})}
      >2</div>
      <div
        className={`page_number ${currentPageUserClass} ${activePageUserClass} ${errorPageUserClass}`}
        onClick={() => dispatch({type : SWITCH_PAGE_USER})}
      >3</div>
      <div
        className={`page_number ${currentPageGiftClass} ${activePageGiftClass} ${errorPageGiftClass}`}
        onClick={() => dispatch({type : SWITCH_PAGE_GIFT})}
      >4</div>
      {state.step >= 5 &&<div
        className={`page_number ${currentPageDoneClass} ${activePageDoneClass}`}
        onClick={() => dispatch({type : SWITCH_PAGE_DONE})}
      >5</div>}
    </div>
  )
}

export default GroupPages;