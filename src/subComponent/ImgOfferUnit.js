import {h} from 'preact';
import MobPlatformCheck from '../module/MobPlatformCheck';
import {isLegit_pogId_item} from '../module/ValidateData';

import SdPlusLogo from '../subComponent/SdPlusLogo';
import BlazyBannerXImg from '../bannerComponent/BlazyBannerXImg'


const ImgOfferUnit = ({item}) => {
  let offerImageUrl, userDefined_offerImageUrl, sdgold, offerName;
      offerName = item.offerName? item.offerName: '';
      if(MobPlatformCheck()){
        userDefined_offerImageUrl = item.mobileOfferImageUrl;
      }
      else {
        userDefined_offerImageUrl = item.webOfferImageUrl;
      }
      if(isLegit_pogId_item(item)){
          offerImageUrl = userDefined_offerImageUrl?userDefined_offerImageUrl:item.commonMinProductDetailsDTO.imgs[0];
          sdgold = item.commonMinProductDetailsDTO.vendorDTO.sdgold;
      }
      else {
          offerImageUrl = userDefined_offerImageUrl;
      }
      if(sdgold){
        return (
          <div className="offerUnit_imgWrap_sdPlusInc_rel">
            <SdPlusLogo/>
            <BlazyBannerXImg offerImageUrl={offerImageUrl} offerName={offerName}/>
          </div>
        );
      }
      else {
        return (
          <div className="offerUnit_imgWrap_sdPlusInc_rel">
            <BlazyBannerXImg offerImageUrl={offerImageUrl} offerName={offerName}/>
          </div>
        );
      }
}


export default ImgOfferUnit;
