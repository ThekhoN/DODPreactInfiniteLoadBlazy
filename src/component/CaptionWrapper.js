import {h} from 'preact';

const CaptionWrapper = ({caption, eventId, stylingClass}) => {
  if(eventId.indexOf('BannerX99') > -1){
    return null;
  }
  else {
    let _className = 'captionWrapper_new';
    if(stylingClass){_className = stylingClass + ' captionWrapper_new' }
  return(<div className={_className}>
    <h3>{caption}</h3>
  </div>)
  }
};

export default CaptionWrapper;
