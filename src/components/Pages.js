import { useContext } from "react";
import { GroupContext } from "../contexts/reduser";

const Pages = () => {
  const [state, dispatch] = useContext(GroupContext);
  const currentPageNameClass = state.step >= 1 ? "page_number--current" : "";
  const currentPageDateClass = state.step >= 2 ? "page_number--current" : "";
  const currentPageAdminClass = state.step >= 3 ? "page_number--current" : "";
  const currentPageGiftClass = state.step >= 4 ? "page_number--current" : "";
  const activePageNameClass = state.group.edit ? "page_number--active" : "";
  const activePageDateClass = state.date.edit ? "page_number--active" : "";
  const activePageAdminClass = state.admin.edit ? "page_number--active" : "";
  const activePageGiftClass = state.gift.edit ? "page_number--active" : "";
  const errorPageNameClass = state.group.error === true ? "page_number--error" : "";
  const errorPageDateClass = state.date.error === true ? "page_number--error" : "";
  const errorPageAdminClass = state.admin.error === true ? "page_number--error" : "";
  const errorPageGiftClass = state.gift.error === true ? "page_number--error" : "";

  return (
    <div className="page">
      <div
        className={`page_number ${currentPageNameClass} ${activePageNameClass} ${errorPageNameClass}`}
        onClick={() => dispatch({type : "SWITCH-PAGE-GROUP"})}
      >1</div>
      <div
        className={`page_number ${currentPageDateClass} ${activePageDateClass} ${errorPageDateClass}`}
        onClick={() => dispatch({type : "SWITCH-PAGE-DATE"})}
      >2</div>
      <div
        className={`page_number ${currentPageAdminClass} ${activePageAdminClass} ${errorPageAdminClass}`}
        onClick={() => dispatch({type : "SWITCH-PAGE-ADMIN"})}
      >3</div>
      <div
        className={`page_number ${currentPageGiftClass} ${activePageGiftClass} ${errorPageGiftClass}`}
        onClick={() => dispatch({type : "SWITCH-PAGE-GIFT"})}
      >4</div>
      {/* {state.group.edit === false && state.date.edit === false && state.admin.edit === false && state.gift.edit === false && <div
        className={`page_number ${currentPageGiftClass} ${activePageGiftClass} ${errorPageGiftClass}`}
      >5</div>} */}
    </div>
  )
}

export default Pages;