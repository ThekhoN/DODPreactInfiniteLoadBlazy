console.log('live...22Dec2016 v3');
//predefining url because app does not support window.location.href
var liveURLx = 'deal-of-the-day';
var test_OfferName = 'test-z666';
//local
var local_testURL = (window.admin && window.admin == 'true' ? '/admin' : '') + "csvData_mobileapi7.json";
//live
var pre_liveURLx = 'https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=';
var post_liveURLx = '&start=0&count=150';
//var predefined_url = pre_liveURLx + liveURLx + post_liveURLx;
var predefined_url = 'https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=test-preact&start=0&count=800';
var test_url = pre_liveURLx + test_OfferName + post_liveURLx;
//final url to be consumed
var use_finalURLx = '';
// * * * pass local_testURL as get_use_finalURLx(local_testURL) for LOCAL TESTS * * *//
var url = get_use_finalURLx();

function get_use_finalURLx(local_testURL) {
  //if local
  if (local_testURL) {
      console.log('running on local: ', local_testURL);
      use_finalURLx = local_testURL;
      console.log('using local_testURL. . .');
  }
  else if(!local_testURL && window.location.href.indexOf('/offers/') < 0){
    console.log('running on panel/local, using predefined url. . .');
    use_finalURLx = predefined_url;
  }
  else {
    var landingPageUrl_offerName = get_landingPageUrl_offerName();
    use_finalURLx = pre_liveURLx + landingPageUrl_offerName + post_liveURLx;
  }
  console.log('finalURL for req: ', use_finalURLx);
  return use_finalURLx;
}

function get_landingPageUrl_offerName(url) {
  var live_url, final_OfferName;
  if(url){
    live_url = url;
  }
  else {
    live_url = document.URL || document.location || window.location.href;
  }
  var checkStart = '/offers/';
  var checkStart_len = checkStart.length;
  var checkStart_index = live_url.indexOf(checkStart) + checkStart_len;
  var checkEnd = '?';
  var _OfferName = live_url.substr(checkStart_index);
  console.log('_OfferName: ',_OfferName);
  if(_OfferName.indexOf(checkEnd) > -1){
    var OfferName = _OfferName.substr(0,_OfferName.indexOf(checkEnd));
    console.log('finalResult: ', OfferName);
    final_OfferName = OfferName;
  }
  else {
    console.log('url does not contain ?, using _OfferName ', _OfferName);
    final_OfferName = _OfferName;
  }
  final_OfferName = final_OfferName.toLowerCase();

  return final_OfferName;
};

const queryUrl = () => {
  return url;
};

export default queryUrl;
