
ChannelIO('boot', {
    "pluginKey": "YOUR_PLUGIN_KEY", // fill your plugin key
    "memberId": "USER_MEMBER_ID", // fill user's member id
    "profile": { // fill user's profile
      "name": "USER_NAME", // fill user's name
      "mobileNumber": "USER_MOBILE_NUMBER", // fill user's mobile number
      "CUSTOM_VALUE_1": "VALUE_1", // custom property
      "CUSTOM_VALUE_2": "VALUE_2" // custom property
    }
  });


  class ChannelService {
    constructor() {
      this.loadScript();
    }
  
    loadScript() {
      (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.")}var ch=function(){ch.c(arguments)};ch.q=[];ch.c=function(args){ch.q.push(args)};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x)}}if(document.readyState==="complete"){l()}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l)}})();
    }
  
    boot(option, callback) {
      window.ChannelIO('boot', option, callback);
    }
  
    shutdown() {
      window.ChannelIO('shutdown');
    }
  
    showMessenger() {
      window.ChannelIO('showMessenger');
    }
    
    hideMessenger() {
      window.ChannelIO('hideMessenger');
    }
  
    openChat(chatId, message) {
      window.ChannelIO('openChat', chatId, message);
    }
  
    track(eventName, eventProperty) {
      window.ChannelIO('track', eventName, eventProperty);
    }
    
    onShowMessenger(callback) {
      window.ChannelIO('onShowMessenger', callback);
    }
    
    onHideMessenger(callback) {
      window.ChannelIO('onHideMessenger', callback);
    }
    
    onBadgeChanged(callback) {
      window.ChannelIO('onBadgeChanged', callback);
    }
  
    onChatCreated(callback) {
      window.ChannelIO('onChatCreated', callback);
    }
  
    onFollowUpChanged(callback) {
      window.ChannelIO('onFollowUpChanged', callback);
    }
  
    onUrlClicked(callback) {
      window.ChannelIO('onUrlClicked', callback);
    }
  
    clearCallbacks() {
      window.ChannelIO('clearCallbacks');
    }
    
    updateUser(userInfo, callback) {
      window.ChannelIO('updateUser', userInfo, callback);
    }
  
    addTags(tags, callback) {
      window.ChannelIO('addTags', tags, callback);
    }
  
    removeTags(tags, callback) {
      window.ChannelIO('removeTags', tags, callback);
    }
  
    setPage(page) {
      window.ChannelIO('setPage', page);
    }
  
    resetPage() {
      window.ChannelIO('resetPage');
    }
  
    showChannelButton() {
      window.ChannelIO('showChannelButton');
    }
  
    hideChannelButton() {
      window.ChannelIO('hideChannelButton');
    }
  
    setAppearance(appearance) {
      window.ChannelIO('setAppearance', appearance);
    }
  }
  
  export default new ChannelService()

ChannelService.boot({
  "pluginKey": "YOUR_PLUGIN_KEY", // fill your plugin key
});

ChannelService.boot({
    "pluginKey": "YOUR_PLUGIN_KEY", // fill your plugin key
    "memberId": "USER_MEMBER_ID", // fill user's member id
    "profile": { // fill user's profile
      "name": "USER_NAME", // fill user's name
      "mobileNumber": "USER_MOBILE_NUMBER", // fill user's mobile number
      "CUSTOM_VALUE_1": "VALUE_1", // custom property
      "CUSTOM_VALUE_2": "VALUE_2" // custom property
    }
  });