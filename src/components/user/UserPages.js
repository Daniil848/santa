import { useDispatch, useSelector } from "react-redux";
import {
  switchPageUserName,
  switchPageUserGift,
  switchPageDone 
} from "../../store/actions/actions";

const UserPages = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const step = state.userStep;
  const currentPageUserClass = step >= 1 ? "page_number--current" : "";
  const currentPageGiftClass = step >= 2 ? "page_number--current" : "";
  const currentPageDoneClass = step >= 3 ? "page_done" : "";
  const activePageUserClass = state.user.edit ? "page_number--active" : "";
  const activePageGiftClass = state.gift.edit ? "page_number--active" : "";
  const activePageDoneClass = (state.user.edit === false && state.gift.edit === false) ? "page_done--active" : ""
  const errorPageUserClass = state.user.error === true ? "page_number--error" : "";
  const errorPageGiftClass = state.gift.error === true ? "page_number--error" : "";

  return (
    <div className="page">
      <div
        className={`page_number ${currentPageUserClass} ${activePageUserClass} ${errorPageUserClass}`}
        onClick={() => dispatch(switchPageUserName())}
      >1</div>
      <div
        className={`page_number ${currentPageGiftClass} ${activePageGiftClass} ${errorPageGiftClass}`}
        onClick={() => dispatch(switchPageUserGift())}
      >2</div>
      {step >= 3 && <div
        className={`page_number ${currentPageDoneClass} ${activePageDoneClass}`}
        onClick={() => dispatch(switchPageDone())}
      >3</div>}
    </div>
  );
};

export default UserPages;