import {h} from 'preact';

const OfferContainerWrapperDoD = ({children}) => {
  return (<div className="offerCont_wrap whiteCard_bg ">
    <div className="wrap_InnerContentX  flex_width_contstraWrap_96_76_100">
      <div className="offerUnit_Wrapper">
        <div className="relFontSize_util relWrapperX99 ">
          {children}
        </div>
      </div>
    </div>
  </div>)
}

export default OfferContainerWrapperDoD;
