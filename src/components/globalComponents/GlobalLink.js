import ClipboardJS from "clipboard";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const GlobalLink = (props) => {
  new ClipboardJS('.btn');

  return (
    <div className="g-link">
      
      <input id="foo" value={props.value} className="g-link-input"></input>

      <button class="btn" data-clipboard-target="#foo" className="g-link-button">
        <ContentCopyIcon sx={{ width: '12px', height: '12px'}}></ContentCopyIcon>
      </button>
      <script src="dist/clipboard.min.js"></script>
    </div>
  );
};

export default GlobalLink;