import {h} from 'preact';

const CaptionWrapper_placeholder = ({stylingClass}) => {
    let _className = 'captionWrapper_new';
    if(stylingClass){_className = stylingClass + ' captionWrapper_new' }
    return(<div className={_className}>
    <h3>{`&nbsp;`}</h3>
  </div>)
};

export default CaptionWrapper_placeholder;
