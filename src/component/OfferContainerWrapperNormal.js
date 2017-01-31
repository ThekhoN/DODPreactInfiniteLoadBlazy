import {h} from 'preact';

const OfferContainerWrapperNormal = ({children}) => {
  return (<div className="offerCont_wrap whiteCard_bg setBottomOffset">
      <div className="offerUnit_Wrapper">
        <div className="width_ContstraX relFontX resp_LiX dummyHeight_bg innerSection">
          {children}
        </div>
      </div>
  </div>)
}

export default OfferContainerWrapperNormal;
