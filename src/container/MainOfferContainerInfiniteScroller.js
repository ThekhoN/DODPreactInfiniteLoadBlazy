//Promises polyfill
require('es6-promise').polyfill();

import {h, Component} from 'preact';
import BtcContainer from '../component/BtcContainer';
import queryUrl from '../module/queryUrl';

//required components
import OfferUnitLi from '../component/OfferUnitLi';
import SectionX from '../component/SectionX';
import InnerCardSectionXWrap from '../component/InnerCardSectionXWrap';
import CaptionWrapper from '../component/CaptionWrapper';
import OfferContainerWrapperNormal from '../component/OfferContainerWrapperNormal';
import OfferContainerWrapperDoD  from '../component/OfferContainerWrapperDoD';
import OfferUnitListBannerX from '../bannerComponent/OfferUnitListBannerX'
import SocialShareComponent from '../component/SocialShareComponent'

//placeholder components
import {OfferUnitLiPlaceholderGroup2x2} from '../component/OfferUnitLiPlaceholder';
import {OfferUnitLiSuperDealPlaceholderGroup2x2} from '../component/OfferUnitLiSuperDealPlaceholder';

//plugins & utils
import Waypoint from 'preact-waypoint';
import CSSTransitionGroup from 'preact-css-transition-group'
import Blazy from 'blazy';
import axios from 'axios';
import XHR_req from '../module/XHR_req'
import initSocialShareModule from '../module/initSocialShareModule'

//global
const preUrl = queryUrl();
//console.log('preUrl: ', preUrl);
//const url = 'https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=deal-of-the-day&start=0&count=150';
const eventIds=['bankOfferBannerX99', 'superDod', 'DealofDayOffers', 'BlockbusterDeals'];


// +++++ getNextReqUrl +++++ //
const firstStart = 0;
const count = 30;
let nextStart = count + 1;
let firstReqUrl = `${preUrl}&start=${firstStart}&count=${count}`;
//nextUrl = `https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=deal-of-the-day&start=${countStart+10}&count=${incrementCount+10}`;
const getNextReqUrl = () => {
  const nextUrl = `${preUrl}&start=${nextStart}&count=${count}`;
  nextStart = nextStart + count + 1;
  return nextUrl;
}
// +++++ /getNextReqUrl +++++ //


class MainOfferContainerInfiniteScroller extends Component {
  constructor(props){
    super(props)

    const captions = this.props.captions;
    const _captions = captions ? captions: {};
    const _eventIds = eventIds? eventIds: [];
    this.state = {
      showPlaceholder: true,
      isLoading: false,
      isUCBrowser: false,
      eventIds:_eventIds,
      captions: _captions,
      data: [],
      currentData: [],
      countLimit:150
    }
    this._loadMoreInfiniteContent = this._loadMoreInfiniteContent.bind(this);
    this._renderWayPoint = this._renderWayPoint.bind(this)
    this._renderContent = this._renderContent.bind(this)
  }
  _loadMoreInfiniteContent(){
    //console.log('has entered the waypoint. . .')
    if(nextStart > this.state.countLimit){
      //console.info('countLimit exceeded, return...');
      return;
    }
    //else fetch more
    this.setState({
      isLoading: true
    })
    let nextUrl = getNextReqUrl();
    //console.log('nextUrl: ', nextUrl);
    //  +++++  rawXHR +++++ //
      /*
        XHR_req(nextUrl, function (response) {
            const _data = response.genericOfferItems;
            let _nextData = this.state.data;
            _nextData = [...this.state.data, ..._data]
            this.setState({
              data: _nextData,
              isLoading: false
            })
        }.bind(this))
      */
    //  +++++  rawXHR +++++ //


    // +++++ axios +++++ //
      axios.get(nextUrl)
        .then(function(response){
          const responseData = response.data;
          const _data = responseData.genericOfferItems;
          let _nextData = this.state.data;
          _nextData = [...this.state.data, ..._data]
          this.setState({
            data: _nextData,
            isLoading: false
          })
      }.bind(this)).catch((err) => {
        console.log('fetch error', err);
      });

    // +++++ axios +++++ //
  }
  _renderWayPoint(){
    if(!this.state.isLoading){
      return (<Waypoint
        bottomOffset='-500px'
        onEnter={this._loadMoreInfiniteContent}/>)
    }
  }
  _renderContent(){
    //console.log('running _renderContent. . .WTF');
    const OfferList = this.state.data.filter(offer=>(
      offer.eventId === 'DealofDayOffers'))
      .map((thisOffer, i) => (<OfferUnitLi item={thisOffer} i={i}/>))

      //return (OfferList)

    return (<CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {OfferList}
            </CSSTransitionGroup>)



  }
  componentDidMount(){

    // +++++ UC Browser +++++ //
    //const isUCBrowser = true;
    const isUCBrowser = navigator.userAgent.indexOf('UCBrowser') > 0;
    if(isUCBrowser){
      this.setState({
        isUCBrowser: true
      })
      firstReqUrl = 'https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=deal-of-the-day&start=0&count=150';
      //  +++++ rawXHR +++++ //
      XHR_req(firstReqUrl, function (response) {
          //console.log('full req using xhr, UCBrowser true. . .url: ', firstReqUrl);
          const _data = response.genericOfferItems;
          this.setState({
              data: _data,
              showPlaceholder: false
            }
          );
      }.bind(this))
      // +++++ rawXHR +++++ //
    }
    // +++++ / UC Browser +++++ //

      else {
        // +++++ axios +++++ //
        axios.get(firstReqUrl)
          .then(function(response){
          const responseData = response.data;
          const _data = responseData.genericOfferItems;
          this.setState(
            {
              data: _data,
              showPlaceholder: false
            }
          );
          }.bind(this)).catch((err) => {
            console.log('fetch error', err);
          });
          // +++++ /axios +++++ //
      }


      //console.log('firstReqUrl: ', firstReqUrl);






    //initSocialShareModule
    setTimeout(function () {
      initSocialShareModule();
    }, 1000)
  }
  render(){

    setTimeout(function(){
      const blazy = new Blazy({
        loadInvisible: true
      });
    }, 100);

    const {eventIds, captions} = this.props;
    const {data} = this.state;
    return (<BtcContainer>
            <div className="OfferContainer">
            {eventIds.map(eventId=>{
              if(eventId.indexOf('BannerX99') > -1){
                return (
                  <SectionX id={eventId}>
                    <InnerCardSectionXWrap>
                      <ul className="offers_WrapperX99 footerBannerX99_Wrapper">
                        {data.filter(offer=>(
                          offer.eventId === eventId ))
                          .map((thisOffer, i) => (<OfferUnitListBannerX item={thisOffer} i={i}/>))
                        }
                      </ul>
                    </InnerCardSectionXWrap>
                  </SectionX>
                )
              }
              if(eventId.indexOf('superDod') > -1){
                return (
                  <SectionX id={eventId}>
                    <InnerCardSectionXWrap>
                    <CaptionWrapper caption={captions[eventId]} eventId={eventId} stylingClass="gradient_orangeToRed"/>
                    <OfferContainerWrapperDoD>
                      <ul className="offers_WrapperX99 relFontSize_util ">
                        {this.state.showPlaceholder && <OfferUnitLiSuperDealPlaceholderGroup2x2/>}
                        {data.filter(offer=>(
                          offer.eventId === eventId))
                          .map((thisOffer, i) => (<OfferUnitLi item={thisOffer} i={i}/>))
                        }
                      </ul>
                    </OfferContainerWrapperDoD>
                    </InnerCardSectionXWrap>
                  </SectionX>
                )
              }
              else {
                return (
                  <SectionX id="DealofDayOffers" eventId="DealofDayOffers">
                    <CaptionWrapper caption={captions[eventId]} eventId={eventId} stylingClass="gradient_greenToBlue"/>
                    <InnerCardSectionXWrap>
                      <OfferContainerWrapperNormal>
                        <div className='infiniteContent_Container' style={{"overflow": "scroll-y"}} >
                          <ul className="offers_WrapperX99 relFontSize_util " >
                            {this.state.showPlaceholder && <OfferUnitLiPlaceholderGroup2x2/>}
                            {this._renderContent()}
                          </ul>
                          <div className='infiniteContent_waypoint'>
                            {!this.state.isUCBrowser && this._renderWayPoint()}
                          </div>
                          Loading more items. . .
                        </div>
                      </OfferContainerWrapperNormal>
                    </InnerCardSectionXWrap>
                    <SocialShareComponent/>
                  </SectionX>

                )
              }
            }

              )}
        </div>
        </BtcContainer>)
  }

}


export default MainOfferContainerInfiniteScroller;
