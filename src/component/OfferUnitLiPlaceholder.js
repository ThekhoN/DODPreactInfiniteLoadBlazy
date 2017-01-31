import {h} from 'preact';

const img_placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const ratingActiveStyle = {
  width: '50px'
}

const OfferUnitLi_placeholder = () => (<li className="inactive paddingWrapX99 preData_loading">
                        <div className="offerUnit_imgWrap_sdPlusInc_rel">
                          <img className="offerUnit_img OfferImg b-lazy b-loaded" src={img_placeholder} alt="placeholder image"/>
                        </div>
                        <div className="offerUnit_discountWrap">
                          <div className="offerUnit_discount"></div>
                        </div>
                        <div className="preData_transitionE_1 offerUnit_title">&nbsp;</div>
                        <div className="preData_transitionE_2 offerUnit_ratingWrap ">
                          &nbsp;
                          <div className=" offerUnit_rating_rel">
                            <div className="ratingBG_disabled"></div>
                            <div className="ratingBG_active" style={ratingActiveStyle}></div>
                          </div><span className="numberRevsX"></span>
                        </div>
                        <div className="preData_transitionE_3 offerUnit_priceTaglineWrap_rel">
                          <div className="offerUnit_priceWrap">
                          </div>
                        </div>
                      </li>)

export const OfferUnitLiPlaceholderGroup2x1 = () => (<span className='OfferUnitLi_placeholder_Group_abs'>
    <OfferUnitLi_placeholder/><OfferUnitLi_placeholder/>
  </span>)

export const OfferUnitLiPlaceholderGroup2x2 = () => (<span className="OfferUnitLi_placeholder_Group_abs">
    <OfferUnitLi_placeholder/><OfferUnitLi_placeholder/><OfferUnitLi_placeholder/><OfferUnitLi_placeholder/>
  </span>)
