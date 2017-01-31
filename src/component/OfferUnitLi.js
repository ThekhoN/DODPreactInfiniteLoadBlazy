import {h} from 'preact';
import TitleOfferUnit from '../SubComponent/TitleOfferUnit';
import ImgOfferUnit from '../SubComponent/ImgOfferUnit';
import OfferLink from '../SubComponent/OfferLink';
import OfferLinkAfterWrap from '../SubComponent/OfferLinkAfterWrap';
import OfferNonImgWrap from '../SubComponent/OfferNonImgWrap';
import OfferPriceTaglineDiscountWrap from '../SubComponent/OfferPriceTaglineDiscountWrap';
import OfferRatingWrap from '../SubComponent/OfferRatingWrap';
import CenterContentWrapper from '../SubComponent/CenterContentWrapper';
import querySdPlusPriceSlab from '../module/querySdPlusPriceSlab';

import {isISObject} from '../module/ValidateData';

const OfferUnitLi = ({item, i}) => {

  if(querySdPlusPriceSlab(item)){
      return null;
    }


  if(isISObject(item.commonMinProductDetailsDTO) || item.pogId){
    if(item.commonMinProductDetailsDTO.priceInfo == null){
        //console.log('discountinued pogId: ', item.pogId);
        return null;
    }
  }

  const eventId = item.eventId;
  let _classNames = '';
  if(eventId.indexOf('superDod') > -1){
    _classNames = 'OfferUnitX99 dodSuperDeal_unit offerUnits_2_2 dodSuperDealUnit_ev';
    return (
      <li className={_classNames} key={i}>
          <div className="offerUnit_innerContWrap">
            <OfferLink item={item}>
              <OfferLinkAfterWrap>
                <ImgOfferUnit item={item}/>
                <OfferNonImgWrap>
                  <CenterContentWrapper>
                    <TitleOfferUnit item={item}/>
                    <OfferPriceTaglineDiscountWrap item={item}/>
                    <OfferRatingWrap item={item}/>
                  </CenterContentWrapper>
                </OfferNonImgWrap>
              </OfferLinkAfterWrap>
            </OfferLink>
          </div>
      </li>
    )
  }
  else {
    _classNames = 'OfferUnitX99 OffersContentBoxLi';
  }
  return (<li className={_classNames} key={i}>
        <div className="offerUnit_innerContWrap">
          <OfferLink item={item}>
            <OfferLinkAfterWrap>
              <ImgOfferUnit item={item}/>
              <OfferNonImgWrap>
                <TitleOfferUnit item={item}/>
                <OfferPriceTaglineDiscountWrap item={item}/>
                <OfferRatingWrap item={item}/>
              </OfferNonImgWrap>
            </OfferLinkAfterWrap>
          </OfferLink>
        </div>
    </li>
  );
}

export default OfferUnitLi;
