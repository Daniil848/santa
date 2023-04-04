import { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

const GlobalLink = (props) => {
  const [copy, setCopy] = useState(false);
  const clipboard = useClipboard();
  const onFocus = (e) => e.target.select();
  const onClick = () => {
    clipboard.copy();
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }

  return (
    <div className="g-link">
    
      <input ref={clipboard.target} value={props.value} onFocus={onFocus} className="g-link-input"></input>

      <button onClick={onClick} className="g-link-button">
        {copy ? <DoneIcon sx={{ width: '12px', height: '12px', color: '#1976d2'}}/> :<ContentCopyIcon sx={{ width: '12px', height: '12px'}}></ContentCopyIcon>}
      </button>
    </div>
  );
};

export default GlobalLink;