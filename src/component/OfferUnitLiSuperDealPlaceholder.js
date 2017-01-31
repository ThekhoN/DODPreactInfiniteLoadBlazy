import {h} from 'preact';

const img_placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const ratingActiveStyle = {
  width: '50px'
}

const OfferUnitLiSuperDeal_placeholder = () => (<li className=" inactive preData_loading dodSuperDeal_unit offerUnits_2_2 dodSuperDealUnit_ev" id="">
                            <div className="offerUnit_innerContWrap" id="">
                                    <div className="offerUnit_href_afterWrap">
                                        <div className="offerUnit_imgWrap_sdPlusInc_rel">
                                          <img className="offerUnit_img OfferImg b-lazy b-loaded" src={img_placeholder} alt="placeholder image"/></div>
                                        <div className="offerUnit_nonImgContWrap">
                                            <div className="wrapCenterCont">
                                                <div className="centeredContX">
                                                    <div className="preData_transitionE_1 offerUnit_title twoLine_TitleX99"></div>
                                                    <div className="preData_transitionE_2 offerUnit_priceTaglineWrap_rel">
                                                        <div className="offerUnit_priceWrap"><span className="offerUnit_priceWrapAll"><span className="offerUnit_price"></span><span className="offerUnit_displayPrice"></span></span>
                                                        </div>
                                                        <div className="offerUnit_discountWrap">
                                                            <div className="offerUnit_discount"></div>
                                                        </div>
                                                    </div>
                                                    <div className="preData_transitionE_3 offerUnit_ratingWrap" data-pogid="639198810200">
                                                    </div>
                                                    <div className="wrap_saveAmt"><span></span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                          </li>)

export const  OfferUnitLiSuperDealPlaceholderGroup2x2 = () => (<span className='OfferUnitLi_placeholder_Group_abs'><OfferUnitLiSuperDeal_placeholder/><OfferUnitLiSuperDeal_placeholder/></span>)
