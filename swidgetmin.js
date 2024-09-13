/*! For license information please see swidget.min.js.LICENSE.txt */
!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var i in n) ("object" == typeof exports ? exports : e)[i] = n[i];
  }
})(self, () =>
  (() => {
    "use strict";
    var e = {
        734: (e, t, n) => {
          n.d(t, { A: () => o });
          var i = n(601),
            a = n.n(i),
            s = n(314),
            r = n.n(s)()(a());
          r.push([
            e.id,
            '.shorts-widget-lead-capture-form-modal {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  place-items: center;\n  gap: 30px;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(50px);\n  -webkit-backdrop-filter: blur(50px);\n  z-index: 9999999999;\n}\n\n.shorts-widget-lead-capture-form-icon {\n  width: 80px;\n  height: 80px;\n  font-size: 42px;\n  background: var(--shortsThemeColor);\n  color: var(--shortsInvertColor);\n  border-radius: 50%;\n  display: flex;\n  place-content: center;\n  place-items: center;\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),\n    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.shorts-widget-lead-capture-form-modal-content {\n  background-color: #fefefe;\n  padding: 30px;\n  border: 1px solid #888;\n  width: 90%;\n  max-width: 380px;\n  position: relative;\n  border-radius: 15px;\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),\n    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.shorts-widget-lead-capture-form-close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #888;\n  cursor: pointer;\n  line-height: 10px;\n  font-size: 20px;\n}\n\n.shorts-widget-lead-capture-form-wrapper {\n  max-height: 380px;\n  overflow-y: auto;\n}\n\n.shorts-widget-lead-capture-form-modal-content\n  input[type="number"]::-webkit-inner-spin-button,\n.shorts-widget-lead-capture-form-modal-content\n  input[type="number"]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n\n#input-field-number {\n  position: relative;\n}\n\n.shorts-widget-lead-capture-form-group {\n  padding-bottom: 16px;\n}\n\n.shorts-widget-lead-capture-form-group input::placeholder {\n  color: #aaa;\n}\n\n.shorts-widget-lead-capture-form-field-label {\n  color: #3d3939 !important;\n  font-size: 15px !important;\n  display: block;\n  padding-bottom: 8px;\n  width: 100%;\n}\n\n.shorts-widget-lead-capture-form-field-label span {\n  color: #242424 !important;\n  font-size: 15px !important;\n}\n\n.shorts-widget-lead-capture-form-field-label\n  .shorts-widget-lead-capture-form-input-required {\n  color: red !important;\n}\n\n.sa-title-highlight {\n  font-size: 24px !important;\n  font-weight: 500;\n  text-align: center;\n}\n\n.shorts-widget-lead-capture-form-checkbox-wrapper {\n  margin-bottom: 4px;\n}\n\n.shorts-widget-lead-capture-form-checkbox-field-label {\n  color: #242424 !important;\n  font-size: 14px !important;\n}\n\n.shorts-widget-lead-capture-form-field {\n  padding: 6px 12px;\n  border-radius: 5px;\n  width: 100%;\n  outline: none;\n  border: 1px solid #ddd;\n  position: relative;\n  font-size: 15px;\n}\n\ntextarea.shorts-widget-lead-capture-form-field {\n  resize: none;\n}\n\n.shorts-widget-lead-capture-form-mobile-number-input-wrapper {\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  padding: 6px 12px;\n}\n\n.shorts-widget-lead-capture-form-mobile-number-input-wrapper\n  .shorts-widget-lead-capture-form-selected-country-wrapper {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  padding-right: 4px;\n  border-right: 1px solid #ccc;\n}\n\n.shorts-widget-lead-capture-form-mobile-number-input-wrapper\n  .shorts-widget-lead-capture-form-selected-country-wrapper\n  .shorts-widget-lead-capture-form-selected-country {\n  font-size: 13px;\n}\n\n.shorts-widget-lead-capture-form-mobile-number-input-wrapper\n  .shorts-widget-lead-capture-form-selected-country-wrapper\n  .shorts-widget-lead-capture-form-select-country-arrow {\n  position: relative;\n  display: block;\n  width: 14px;\n  height: 14px;\n  transition: transform 0.3s linear;\n}\n\n.shorts-widget-lead-capture-form-mobile-number-input-wrapper\n  .shorts-widget-lead-capture-form-selected-country-wrapper\n  .shorts-widget-lead-capture-form-select-country-arrow::after {\n  content: "";\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-bottom: 1px solid;\n  border-right: 1px solid;\n  transform: rotate(45deg);\n  left: 4px;\n  top: 2px;\n}\n\n.shorts-widget-lead-capture-form-mobile-number-input-wrapper\n  .shorts-widget-lead-capture-form-mobile-number-input {\n  margin-left: 6px;\n  width: 100%;\n  height: auto;\n  outline: none;\n  position: relative;\n  border: none;\n  padding: 0 !important;\n}\n\n.shorts-widget-lead-capture-form-country-list {\n  width: calc(100% + 1px) !important;\n  border-radius: 0.25rem !important;\n  max-height: 130px !important;\n  outline: none;\n  z-index: 1;\n  list-style: none;\n  margin: 10px 0 10px -1px;\n  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.35);\n  background-color: #fff;\n  overflow-y: scroll;\n  border-radius: 0 0 3px 3px;\n  font-size: 13px;\n}\n\n.shorts-widget-lead-capture-form-country-list\n  .shorts-widget-lead-capture-form-country {\n  padding: 7px 9px;\n  cursor: pointer;\n}\n\n.shorts-widget-lead-capture-form-country-list\n  .shorts-widget-lead-capture-form-country:hover {\n  background-color: #f1f1f1;\n}\n\n.shorts-widget-lead-capture-form-d-hidden {\n  display: none !important;\n}\n\n.shorts-widget-lead-capture-form-submit-button {\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 500;\n  margin-top: 12px;\n  background: var(--shortsThemeColor);\n  color: var(--shortsInvertColor);\n  cursor: pointer;\n}\n\n.shorts-widget-lead-capture-form-required-field-error {\n  position: absolute;\n  bottom: -40px;\n  left: 50%;\n  width: 95%;\n  transform: translateX(-50%);\n  font-size: 12px;\n  font-weight: 600;\n  text-wrap: nowrap;\n  display: none;\n  place-content: center;\n  background-color: red;\n  color: #fff;\n  padding: 7px;\n  border-radius: 7px;\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),\n    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.shorts-widget-lead-capture-form-footer {\n  font-size: 12px;\n  color: white;\n  position: fixed;\n  bottom: 10px;\n  text-decoration: none;\n}\n\n.shorts-widget-lead-capture-form-footer:hover {\n  text-decoration: underline;\n}\n\n.shorts-widget-lead-capture-form-footer span {\n  font-weight: 500;\n}\n\n.shorts-widget-lead-capture-form-error-message {\n  color: #f00;\n  padding-top: 4px;\n  display: block;\n  font-size: 14px;\n  display: none;\n}\n',
            "",
          ]);
          const o = r;
        },
        134: (e, t, n) => {
          n.d(t, { A: () => o });
          var i = n(601),
            a = n.n(i),
            s = n(314),
            r = n.n(s)()(a());
          r.push([
            e.id,
            "/* MESSAGE INPUT & SEND BUTTON */\n.live-streaming-chat-input-container {\n  display: flex;\n  padding: 16px;\n  background: var(--sa-color-dark);\n  border-bottom-right-radius: inherit !important;\n  border-bottom-left-radius: inherit !important;\n}\n\n.dark .live-streaming-chat-input-container {\n  background: #888888;\n}\n\n#live-streaming-chat-message-input {\n  flex: 1;\n  background: var(--sa-color-light);\n  color: var(--sa-color-dark);\n  padding: 10px 10px 10px 15px;\n  border-radius: 20px;\n  font-size: 16px;\n  border: none;\n  border-radius: 6px;\n  /* background: transparent; */\n  outline: none;\n  width: 200px;\n}\n\n.dark #live-streaming-chat-message-input {\n  background: var(--sa-color-dark);\n  color: var(--sa-color-light);\n}\n\n#live-streaming-chat-message-input::placeholder {\n  color: #ddd;\n}\n\n.sa-live-call-widget-expanded-maximize #live-streaming-chat-message-input {\n  font-size: 18px;\n}\n\n#live-streaming-chat-send-btn {\n  padding: 5px 10px;\n  margin-left: 10px;\n  background: #000;\n  border: none !important;\n  border-radius: 6px;\n  cursor: pointer;\n  width: 43px;\n  font-size: 18px;\n}\n\n#live-streaming-chat-send-btn:hover,\n#live-streaming-chat-send-btn:focus,\n#live-streaming-chat-send-btn:active {\n  background: #000;\n  border: none !important;\n}\n\n.dark #live-streaming-chat-send-btn {\n  background: #e2e2e2;\n}\n\n#live-streaming-chat-send-btn svg {\n  margin-left: 4px;\n  vertical-align: middle;\n  fill: var(--sa-color-light);\n}\n\n.dark #live-streaming-chat-send-btn svg {\n  fill: var(--sa-color-dark);\n}\n\n/* MESSAGE */\n.live-streaming-chat-log {\n  padding: 10px 0;\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.live-streaming-chat-log .message-container {\n  display: flex;\n  place-items: start;\n  gap: 8px;\n  padding: 16px;\n  padding-bottom: 0;\n}\n\n.live-streaming-chat-log .avatar-wrapper,\n.live-streaming-pinned-chat .avatar-wrapper {\n  width: 36px;\n  height: 32px;\n  background: var(--sa-color-dark);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.dark .live-streaming-chat-log .avatar-wrapper {\n  background: var(--sa-color-light);\n}\n\n.live-streaming-chat-log .avatar-wrapper .avatar {\n  stroke: var(--sa-color-light);\n}\n\n.dark .live-streaming-chat-log .avatar-wrapper .avatar {\n  stroke: var(--sa-color-dark);\n}\n\n.live-streaming-chat-log .avatar-wrapper .agent-avatar {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.live-streaming-chat-log .message-wrapper,\n.live-streaming-pinned-chat .message-wrapper {\n  width: 100% !important;\n}\n\n.live-streaming-chat-log .sender-info-wrapper,\n.live-streaming-pinned-chat .sender-info-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n\n.live-streaming-chat-log .sender-info-wrapper .sender-name,\n.live-streaming-pinned-chat .sender-info-wrapper .sender-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--sa-color-dark);\n  margin: 0;\n  padding: 0;\n}\n\n.dark .live-streaming-chat-log .sender-info-wrapper .sender-name {\n  color: var(--sa-color-light);\n}\n\n.dark .live-streaming-pinned-chat .sender-info-wrapper .sender-name {\n  color: var(--sa-color-light);\n}\n\n.live-streaming-chat-log .message-meta-info,\n.live-streaming-pinned-chat .message-meta-info {\n  padding: 0 5px;\n  margin: 0 5px;\n  font-size: 10.5px;\n  color: #858585;\n}\n\n.live-streaming-chat-log .message,\n.live-streaming-pinned-chat .message {\n  font-size: 13px;\n  color: var(--sa-color-dark);\n  margin: 0;\n  padding: 0;\n  max-width: 80%;\n  word-break: break-word;\n}\n\n.dark .live-streaming-chat-log .message {\n  color: var(--sa-color-light);\n}\n\n.dark .live-streaming-pinned-chat .message {\n  color: var(--sa-color-light);\n}\n\n.live-streaming-chat-log::-webkit-scrollbar {\n  width: 3px;\n  height: 3px;\n}\n\n.live-streaming-chat-log:hover::-webkit-scrollbar {\n  height: 3px;\n}\n\n/* Track */\n.live-streaming-chat-log::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-bottom-right-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  margin: 16px 0;\n}\n\n/* Handle */\n.live-streaming-chat-log::-webkit-scrollbar-thumb {\n  background: #999;\n  border-bottom-right-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n/* Handle on hover */\n.live-streaming-chat-log::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/* Pinned Chat */\n.live-streaming-pinned-chat {\n  background: #b7b7b7;\n}\n\n.dark .live-streaming-pinned-chat {\n  background: #0a0a0a;\n}\n\n.live-streaming-pinned-chat .message-container {\n  display: flex;\n  place-items: start;\n  gap: 8px;\n  padding: 16px;\n}\n\n.live-streaming-pinned-chat .avatar-wrapper {\n  width: 36px;\n  height: 32px;\n  background: var(--sa-color-dark);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.dark .live-streaming-pinned-chat .avatar-wrapper {\n  background: var(--sa-color-light);\n}\n\n.live-streaming-pinned-chat .avatar-wrapper .avatar {\n  stroke: var(--sa-color-light);\n}\n\n.dark .live-streaming-pinned-chat .avatar-wrapper .avatar {\n  stroke: var(--sa-color-dark);\n}\n\n.live-streaming-pin-icon {\n  fill: var(--sa-color-dark);\n}\n\n.dark .live-streaming-pin-icon {\n  fill: var(--sa-color-light);\n}\n\n.chat-container-mobile {\n  position: fixed;\n  left: 0;\n  bottom: 40px;\n  width: 80%;\n  transition: all 300ms ease-in-out;\n  overflow: hidden;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.live-streaming-chat-input-container-mobile {\n  display: none !important;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n}\n\n.live-streaming-chat-log-mobile {\n  display: none;\n  width: 100%;\n  max-height: 150px;\n  padding: 10px;\n  padding-top: 0;\n  overflow: auto;\n  transition: all 300ms ease-in-out;\n}\n\n.live-streaming-chat-log-mobile p {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n}\n\n.live-streaming-chat-message-input-mobile {\n  flex: 1;\n  background: #39393999;\n  color: #fff;\n  padding: 10px 15px;\n  font-size: 16px;\n  border: none;\n  border-radius: 6px;\n  outline: none;\n}\n\n.live-streaming-chat-message-input-mobile::placeholder {\n  color: #ddd;\n}\n\n.live-streaming-chat-send-btn-mobile {\n  padding: 5px 10px;\n  background: #e2e2e2;\n  border: none !important;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 18px;\n  min-width: 42px !important;\n}\n\n.live-streaming-chat-send-btn-mobile svg {\n  margin-left: 4px;\n  vertical-align: middle;\n  fill: #393939;\n}\n\n@media (max-width: 1023px) {\n  .chat-container-mobile {\n    display: flex;\n  }\n\n  .live-streaming-chat-input-container {\n    padding: 8px !important;\n    border-radius: 0 !important;\n  }\n\n  .live-streaming-chat-input-container-mobile {\n    display: flex !important;\n  }\n\n  .live-streaming-chat-log-mobile {\n    display: block !important;\n  }\n\n  .chat-container-mobile.sa_shorts-chat-hidden {\n    height: 0;\n    opacity: 0;\n  }\n\n  /* .live-streaming-chat-input-container.sa_shorts-chat-hidden {\n    height: 0;\n    opacity: 0;\n  }\n\n  .live-streaming-chat-log-mobile.sa_shorts-chat-hidden {\n    height: 0;\n    opacity: 0;\n  } */\n}\n\n.live-streaming-chat-log-mobile .message-container {\n  display: flex;\n  place-items: start;\n  gap: 8px;\n  margin-bottom: 10px;\n  padding: 4px 6px;\n  background: #00000040;\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-radius: 6px;\n}\n\n.live-streaming-chat-log-mobile .avatar-wrapper {\n  width: 36px;\n  height: 32px;\n  background: #fff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.live-streaming-chat-log-mobile .avatar-wrapper .avatar {\n  stroke: #393939;\n}\n\n.live-streaming-chat-log-mobile .message-wrapper,\n.live-streaming-pinned-chat .message-wrapper {\n  width: 100% !important;\n}\n\n.live-streaming-chat-log-mobile .sender-info-wrapper,\n.live-streaming-pinned-chat .sender-info-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n\n.live-streaming-chat-log-mobile .sender-info-wrapper .sender-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: #fff;\n  margin: 0;\n  padding: 0;\n}\n\n.live-streaming-chat-log-mobile .message-meta-info,\n.live-streaming-pinned-chat .message-meta-info {\n  font-size: 13px;\n  color: #fff;\n}\n\n.live-streaming-pinned-chat .message-meta-info {\n  padding: 0 5px;\n  margin: 0 5px;\n}\n\n.live-streaming-chat-log-mobile .message {\n  font-size: 14px;\n  color: #fff;\n  margin: 0;\n  padding: 0;\n  max-width: 80%;\n  word-break: break-word;\n}\n",
            "",
          ]);
          const o = r;
        },
        609: (e, t, n) => {
          n.d(t, { A: () => o });
          var i = n(601),
            a = n.n(i),
            s = n(314),
            r = n.n(s)()(a());
          r.push([
            e.id,
            '*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n.live-streaming-videos-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 20px;\n}\n\n.live-streaming-video-thumbnail-wrapper {\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n}\n\n.live-streaming-video-thumbnail-wrapper .live-streaming-video-thumbnail {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: inherit;\n}\n\n.live-streaming-modal {\n  width: 100%;\n  max-width: 100vw;\n  height: 100%;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 2147483647;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  padding: 28px 48px;\n}\n\n.live-streaming-modal * {\n  font-family: "Roboto", sans-serif;\n  box-sizing: border-box;\n}\n\n.live-streaming-modal-body {\n  max-width: 1152px !important;\n  height: 100%;\n  margin: 0 auto !important;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n  justify-items: center;\n  /* gap: 4px; */\n}\n\n.live-streaming-modal-body > * {\n  width: 100%;\n  max-width: 100%;\n}\n\n.live-streaming-modal-close-btn {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  z-index: 99999;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n  width: fit-content;\n}\n\n.live-streaming-modal-products-container,\n.live-streaming-modal-chat-container {\n  background: var(--sa-color-light);\n}\n\n.dark .live-streaming-modal-products-container,\n.dark .live-streaming-modal-chat-container {\n  background: var(--sa-color-dark);\n}\n\n.live-streaming-modal-products-container {\n  transition: all 400ms ease-in-out;\n  transform: translateX(-2000px);\n}\n\n.show-products.live-streaming-modal-products-container {\n  transform: translateX(0);\n}\n\n.live-streaming-modal-chat-container {\n  display: flex;\n  flex-direction: column;\n  transition: all 400ms ease-in-out;\n  transform: translateX(2000px);\n  position: relative;\n}\n\n.live-streaming-modal-chat-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: 99999999;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.live-streaming-modal-chat-overlay p {\n  color: #000;\n}\n\n.dark .live-streaming-modal-chat-overlay p {\n  color: #c7c7c7;\n}\n\n.live-streaming-modal-open-form-btn {\n  padding: 4px 8px;\n  background: #00000090;\n  color: #fff;\n  display: inline;\n  margin: 0 auto;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.dark .live-streaming-modal-open-form-btn {\n  background: #c7c7c7;\n  color: #000;\n}\n\n.show-chat.live-streaming-modal-chat-container {\n  transform: translateX(0);\n}\n\n/* modal video */\n\n.live-streaming-modal-video-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.video-loading-spinner-wrapper {\n  position: absolute;\n  inset: 0;\n  background: rgb(0 0 0 / 0.6);\n  backdrop-filter: blur(1px);\n  -webkit-backdrop-filter: blur(1px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.video-loading-spinner {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: 5px solid rgb(255 255 255 / 0.2);\n  border-top-color: #fff;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.live-streaming-modal-video-header {\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  color: #ddd;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top-right-radius: inherit !important;\n  border-top-left-radius: inherit !important;\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  width: 100%;\n}\n\n.live-streaming-modal-video-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.live-streaming-video-views-count {\n  color: #fff !important;\n  font-weight: 500 !important;\n}\n\n.carousel-video-views-count {\n  color: #fff !important;\n  font-weight: 500 !important;\n}\n\n.live-streaming-type {\n  color: #fff !important;\n  font-weight: 500;\n  padding: 4px 10px !important;\n  background: #00000070 !important;\n  border-radius: 6px;\n  text-transform: capitalize;\n}\n\n.live-streaming-modal-video-cta-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.live-streaming-modal-video-cta {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  /* background: var(--sa-color-light); */\n  background: #ccccca;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.dark .live-streaming-modal-video-cta {\n  background: var(--sa-color-dark);\n}\n\n.live-streaming-modal-video-cta svg {\n  fill: #504f4f;\n}\n\n.dark .live-streaming-modal-video-cta svg {\n  fill: #f6f6f6;\n}\n\n.live-streaming-modal-video-mute-icon,\n.live-streaming-modal-video-unmute-icon {\n  fill: none !important;\n  stroke: #504f4f;\n}\n\n.dark .live-streaming-modal-video-mute-icon,\n.dark .live-streaming-modal-video-unmute-icon {\n  stroke: #f6f6f6;\n}\n\n.live-streaming-modal-video-mute-icon {\n  display: none;\n}\n\n.live-streaming-modal-video-unmute-icon {\n  display: block;\n}\n\n.muted .live-streaming-modal-video-mute-icon {\n  display: block;\n}\n\n.muted .live-streaming-modal-video-unmute-icon {\n  display: none;\n}\n\n.live-streaming-modal-video-count-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: 4px;\n  background: #00000070 !important;\n  color: #fff !important;\n  font-weight: 500;\n  padding: 4px 10px !important;\n  border-radius: 6px;\n}\n\n.carousel-video-count-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: 4px;\n  background: #00000070 !important;\n  color: #fff !important;\n  font-weight: 500;\n  padding: 4px 10px !important;\n  border-radius: 6px;\n}\n\n.live-streaming-modal-video-header p {\n  margin: 0;\n  padding: 0;\n}\n\n.live-streaming-modal-video-container video {\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n}\n\n.live-streaming-modal-video-controls-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  color: white;\n  z-index: 100;\n  opacity: 0;\n  transition: opacity 150ms ease-in-out;\n}\n\n.live-streaming-modal-video-controls-container::before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);\n  width: 100%;\n  aspect-ratio: 6 / 1;\n  z-index: -1;\n  pointer-events: none;\n  border-radius: inherit !important;\n}\n\n.live-streaming-modal-video-container:hover\n  .live-streaming-modal-video-controls-container,\n.live-streaming-modal-video-container:focus-within\n  .live-streaming-modal-video-controls-container,\n.live-streaming-modal-video-container.paused\n  .live-streaming-modal-video-controls-container {\n  opacity: 1;\n}\n\n.live-streaming-modal-video-controls-container .controls {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.25rem;\n  align-items: center;\n}\n\n.live-streaming-modal-video-controls-container .controls button {\n  background: none;\n  border: none;\n  color: inherit;\n  padding: 0;\n  height: 30px;\n  width: 30px;\n  font-size: 1.1rem;\n  cursor: pointer;\n  opacity: 0.85;\n  transition: opacity 150ms ease-in-out;\n}\n\n.live-streaming-modal-video-controls-container .controls button:hover {\n  opacity: 1;\n}\n\n.live-streaming-modal-video-container.paused .pause-icon {\n  display: none;\n}\n\n.live-streaming-modal-video-container:not(.paused) .play-icon {\n  display: none;\n}\n\n.live-streaming-modal-video-container.theater .tall {\n  display: none;\n}\n\n.live-streaming-modal-video-container:not(.theater) .wide {\n  display: none;\n}\n\n.live-streaming-modal-video-container.full-screen .open {\n  display: none;\n}\n\n.live-streaming-modal-video-container:not(.full-screen) .close {\n  display: none;\n}\n\n.volume-high-icon,\n.volume-low-icon,\n.volume-muted-icon {\n  display: none;\n}\n\n.live-streaming-modal-video-container[data-volume-level="high"]\n  .volume-high-icon {\n  display: block;\n}\n\n.live-streaming-modal-video-container[data-volume-level="low"]\n  .volume-low-icon {\n  display: block;\n}\n\n.live-streaming-modal-video-container[data-volume-level="muted"]\n  .volume-muted-icon {\n  display: block;\n}\n\n.volume-container {\n  display: flex;\n  align-items: center;\n}\n\n.volume-slider {\n  width: 0;\n  transform-origin: left;\n  transform: scaleX(0);\n  transition: width 150ms ease-in-out, transform 150ms ease-in-out;\n  display: none;\n}\n\n.volume-container:hover .volume-slider,\n.volume-slider:focus-within {\n  width: 100px;\n  transform: scaleX(1);\n}\n\n.duration-container {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  flex-grow: 1;\n}\n\n.live-streaming-modal-video-container.captions .captions-btn {\n  border-bottom: 3px solid red;\n}\n\n.live-streaming-modal-video-controls-container .controls button.wide-btn {\n  width: 50px;\n}\n\n.timeline-container {\n  height: 7px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: calc(100% - 16px);\n  margin: 0 auto;\n}\n\n.timeline {\n  background-color: rgba(100, 100, 100, 0.5);\n  height: 3px;\n  width: 100%;\n  position: relative;\n}\n\n.timeline::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: calc(100% - var(--preview-position) * 100%);\n  background-color: rgb(150, 150, 150);\n  display: none;\n}\n\n.timeline::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: calc(100% - var(--progress-position) * 100%);\n  background-color: red;\n}\n\n.timeline .thumb-indicator {\n  --scale: 0;\n  position: absolute;\n  transform: translateX(-50%) scale(var(--scale));\n  height: 200%;\n  top: -50%;\n  left: calc(var(--progress-position) * 100%);\n  background-color: red;\n  border-radius: 50%;\n  transition: transform 150ms ease-in-out;\n  aspect-ratio: 1 / 1;\n}\n\n.live-streaming-modal-video-container.scrubbing .timeline::before,\n.timeline-container:hover .timeline::before {\n  display: block;\n}\n\n.live-streaming-modal-video-container.scrubbing .thumb-indicator,\n.timeline-container:hover .thumb-indicator {\n  --scale: 1;\n}\n\n.live-streaming-modal-video-container.scrubbing .timeline,\n.timeline-container:hover .timeline {\n  height: 100%;\n}\n\n.speed-btn,\n.full-screen-btn {\n  display: none;\n}\n\n.live-streaming-modal-products-container-title-wrapper {\n  display: flex;\n  gap: 28px;\n}\n\n.live-streaming-modal-products-container-title,\n.live-streaming-modal-chat-container-title {\n  color: var(--sa-color-dark);\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.live-streaming-modal-products-container-title {\n  cursor: pointer;\n  opacity: 0.6;\n  transition: all 300ms ease-in-out;\n}\n\n.live-streaming-modal-products-container-title.sa_shorts-active,\n.live-streaming-modal-products-container-title:hover {\n  opacity: 1;\n}\n\n.live-streaming-modal-products-container-title-wrapper,\n.live-streaming-modal-chat-container-title {\n  padding: 32px 16px 12px 16px;\n  border-bottom: 1px solid #707070;\n}\n\n.dark .live-streaming-modal-products-container-title,\n.dark .live-streaming-modal-chat-container-title {\n  color: var(--sa-color-light);\n}\n\n.live-streaming-modal-products-container-body,\n.live-streaming-modal-product-offers-body {\n  overflow: auto;\n  height: calc(100% - 80px);\n  padding-right: 4px;\n  display: flex;\n  flex-direction: column;\n}\n\n.live-streaming-modal-product-offers-body {\n  display: none;\n}\n\n.live-streaming-modal-product-wrapper {\n  display: flex;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #707070;\n}\n\n.live-streaming-modal-product-image-wrapper {\n  width: 90px;\n  height: 90px;\n  flex: 0 0 90px;\n  padding: 10px;\n  border: 1px solid #c7c7c7;\n  border-radius: 8px;\n}\n\n.live-streaming-modal-product-image {\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n}\n\n.live-streaming-modal-product-title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-transform: uppercase;\n  width: 100%;\n  font-family: "Roboto", sans-serif;\n  margin-bottom: 8px;\n}\n\n.live-streaming-modal-product-description {\n  margin: 0;\n  font-family: "Roboto", sans-serif;\n  font-size: 14px;\n  display: none;\n}\n\n.live-streaming-modal-product-title {\n  color: var(--sa-color-dark);\n}\n\n.dark .live-streaming-modal-product-title {\n  color: var(--sa-color-light);\n}\n\n.live-streaming-modal-product-description {\n  color: var(--sa-color-dark);\n}\n\n.dark .live-streaming-modal-product-description {\n  color: var(--sa-color-light);\n}\n\n/* .live-streaming-modal-product-cta-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n} */\n\n.live-streaming-modal-product-price-wrapper {\n  display: flex;\n  place-items: end;\n}\n\n.live-streaming-modal-product-price,\n.live-streaming-modal-product-offer-price {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.live-streaming-modal-product-price,\n.live-streaming-modal-product-offer-price {\n  color: var(--sa-color-dark);\n}\n\n.dark .live-streaming-modal-product-price,\n.dark .live-streaming-modal-product-offer-price {\n  color: var(--sa-color-light);\n}\n\n.live-streaming-modal-product-price.discount {\n  font-size: 12px;\n  text-decoration: line-through;\n  margin-left: 2px;\n  opacity: 0.8;\n}\n\n.live-streaming-modal-product-offer-wrapper {\n  background: var(--sa-color-dark);\n  padding: 6px 8px;\n  margin: 0 8px;\n  margin-bottom: 8px;\n  border-radius: 4px;\n}\n\n.live-streaming-modal-product-offer-wrapper:first-child {\n  margin-top: 8px;\n}\n\n.live-streaming-modal-product-offer-wrapper p {\n  font-size: 15px;\n  line-height: 1.5rem;\n  color: var(--sa-color-light);\n  margin: 0;\n}\n\n.dark .live-streaming-modal-product-offer-wrapper {\n  background: var(--sa-color-light);\n}\n\n.dark .live-streaming-modal-product-offer-wrapper p {\n  color: var(--sa-color-dark);\n}\n\n.sa-view-all-products-card-content-price span:nth-child(3) {\n  font-size: 12px;\n  text-decoration: line-through;\n  margin-left: 2px;\n}\n\n.live-streaming-modal-product-cta {\n  background: var(--sa-color-dark);\n  color: var(--sa-color-light);\n  padding: 4px 8px;\n  border-radius: 4px;\n  display: block;\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 13px;\n}\n\n.live-streaming-modal-cta-for-shopify-product {\n  background: var(--sa-color-dark);\n  color: var(--sa-color-light);\n  padding: 4px 8px;\n  border-radius: 4px;\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  border: none;\n}\n\n.dark .live-streaming-modal-product-cta {\n  background: var(--sa-color-light);\n  color: var(--sa-color-dark);\n}\n\n.dark .live-streaming-modal-cta-for-shopify-product {\n  background: var(--sa-color-light);\n  color: var(--sa-color-dark);\n}\n\n.mini-player-btn {\n  display: none;\n}\n\n.live-streaming-like-btn {\n  position: relative;\n}\n\n/* Like/Heart animation */\n.sa_shorts-hearts {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.sa_shorts-hearts .sa_shorts-heart {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.sa_shorts-hearts .sa_shorts-heart:before,\n.sa_shorts-hearts .sa_shorts-heart:after {\n  position: absolute;\n  content: "";\n  left: 16px;\n  top: 0;\n  width: 16px;\n  height: 24px;\n  background: red;\n  border-radius: 16px 16px 0 0;\n  transform: rotate(-45deg);\n  transform-origin: 0 100%;\n}\n\n.sa_shorts-hearts .sa_shorts-heart:after {\n  left: 0;\n  transform: rotate(45deg);\n  transform-origin: 100% 100%;\n}\n\n.sa_shorts-hearts.flying > .sa_shorts-heart:nth-child(even) {\n  animation: 2.8s flyingEven linear;\n}\n\n.sa_shorts-hearts.flying > .sa_shorts-heart:nth-child(odd) {\n  animation: 2.8s flyingOdd linear;\n}\n\n/* To hold one heart at initial position */\n.sa_shorts-hearts.flying > .sa_shorts-heart:last-child {\n  animation: 0s flyingOdd linear;\n}\n\n.sa_shorts-hearts.flying > .sa_shorts-heart:nth-child(1) {\n  animation-delay: 0.2s;\n}\n.sa_shorts-hearts.flying > .sa_shorts-heart:nth-child(2) {\n  animation-delay: 0.3s;\n}\n.sa_shorts-hearts.flying > .sa_shorts-heart:nth-child(3) {\n  animation-delay: 0.5s;\n}\n.sa_shorts-hearts.flying > .sa_shorts-heart:nth-child(4) {\n  animation-delay: 0.7s;\n}\n.sa_shorts-hearts.flying > .sa_shorts-heart:nth-child(5) {\n  animation-delay: 0.9s;\n}\n.sa_shorts-hearts.flying > .sa_shorts-heart:nth-child(6) {\n  animation-delay: 1.1s;\n}\n.sa_shorts-hearts.flying > .sa_shorts-heart:nth-child(7) {\n  animation-delay: 1.3s;\n}\n\n@keyframes flyingEven {\n  0% {\n    transform: translate(5px, 10px) scale(1);\n    opacity: 1;\n    filter: blur(0px);\n  }\n  100% {\n    transform: translate(0px, -480px) scale(1.5);\n    opacity: 0;\n    filter: blur(5px);\n  }\n}\n\n@keyframes flyingOdd {\n  0% {\n    transform: translate(0, 0) scale(1);\n    opacity: 1;\n    filter: blur(0px);\n  }\n  100% {\n    transform: translate(-60px, -480px) scale(1.5);\n    opacity: 0;\n    filter: blur(5px);\n  }\n}\n\n.live-streaming-video-cta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n@media (max-width: 1023px) {\n  .live-streaming-modal-body {\n    display: block !important;\n  }\n\n  .live-streaming-modal-products-container {\n    display: none !important;\n  }\n\n  .live-streaming-modal-chat-container {\n    display: none !important;\n  }\n\n  .live-streaming-modal {\n    padding: 0 !important;\n  }\n\n  .live-streaming-modal-video-controls-container {\n    opacity: 1;\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    gap: 8px;\n  }\n\n  .live-streaming-modal-video-controls-container::before {\n    height: 45px;\n  }\n\n  .live-streaming-video-cta {\n    flex-direction: column;\n    position: absolute;\n    right: 10px;\n    bottom: 250px;\n  }\n\n  .live-streaming-video-cta::before {\n    content: "";\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: -1;\n    width: 100%;\n    height: 110%;\n    padding: 36px 24px;\n    background: linear-gradient(to right, rgba(0, 0, 0, 0.75), transparent);\n    pointer-events: none;\n    border-radius: 8px;\n  }\n\n  .live-streaming-modal-video-container .timeline-container {\n    margin-right: 12px;\n  }\n\n  .live-streaming-modal-video-cta-wrapper {\n    margin-right: 40px;\n  }\n  .live-streaming-modal-close-btn {\n    width: 20px !important;\n    height: 20px !important;\n  }\n}\n\n.ls-modal-show-offers-panel-btn svg {\n  fill: #fff;\n}\n\n.live-streaming-modal-products-container-mobile {\n  position: absolute;\n  bottom: 100px;\n  width: 100%;\n  display: flex;\n  gap: 10px;\n  overflow: auto;\n  padding: 10px;\n  transition: all 500ms ease-in-out;\n  transform: translateX(-2000px);\n}\n\n.show-products.live-streaming-modal-products-container-mobile {\n  transform: translateX(0);\n}\n\n.live-streaming-modal-products-container-mobile\n  .live-streaming-modal-product-wrapper {\n  min-width: 240px;\n  max-width: 240px;\n  border: none;\n  background: #39393940;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 6px;\n}\n\n.live-streaming-modal-products-container-mobile\n  .live-streaming-modal-product-title,\n.live-streaming-modal-products-container-mobile\n  .live-streaming-modal-product-price,\n.live-streaming-modal-products-container-mobile\n  .live-streaming-modal-product-offer-price {\n  color: var(--sa-color-light) !important;\n}\n\n.live-streaming-modal-products-container-mobile\n  .live-streaming-modal-product-cta {\n  background: var(--sa-color-light) !important;\n  color: var(--sa-color-dark) !important;\n}\n\n/* scroll customization */\n.live-streaming-modal-products-container-mobile::-webkit-scrollbar {\n  width: 3px;\n  height: 3px;\n}\n\n.live-streaming-modal-products-container-mobile:hover::-webkit-scrollbar {\n  height: 3px;\n}\n\n/* Track */\n.live-streaming-modal-products-container-mobile::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-bottom-right-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  margin: 16px 160px;\n}\n\n/* Handle */\n.live-streaming-modal-products-container-mobile::-webkit-scrollbar-thumb {\n  background: #999;\n  border-bottom-right-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n/* Handle on hover */\n.live-streaming-modal-products-container-mobile::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.live-streaming-modal-products-container-mobile\n  .live-streaming-modal-no-product-found {\n  display: none !important;\n}\n\n.live-streaming-modal-product-offers-container-mobile {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 9999999;\n  max-width: 100% !important;\n  height: 0;\n  overflow: hidden;\n  opacity: 0;\n  background: var(--sa-color-light);\n  border-radius: 16px;\n  transition: all 500ms ease-in-out;\n}\n\n@media (min-width: 1024px) {\n  .live-streaming-modal-product-offers-container-mobile {\n    display: none !important;\n  }\n}\n\n.dark .live-streaming-modal-product-offers-container-mobile {\n  background: var(--sa-color-dark);\n}\n\n.open.live-streaming-modal-product-offers-container-mobile {\n  height: 370px;\n  opacity: 1;\n}\n\n.live-streaming-modal-product-offers-wrapper-mobile {\n  height: 100%;\n  overflow: auto;\n}\n\n.close-live-streaming-modal-product-offers-mobile {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.live-streaming-modal-product-offers-mobile-title {\n  font-size: 18px;\n  color: var(--sa-color-dark);\n  text-align: center;\n  margin: 20px;\n}\n\n.dark .live-streaming-modal-product-offers-mobile-title {\n  color: var(--sa-color-light);\n}\n\n.close-live-streaming-modal-product-offers-mobile svg {\n  fill: var(--sa-color-dark);\n}\n\n.dark .close-live-streaming-modal-product-offers-mobile svg {\n  fill: var(--sa-color-light);\n}\n\n.live-streaming-load-more-chat-btn-wrapper {\n  display: flex;\n  justify-content: center;\n  order: -1 !important;\n}\n\n.live-streaming-load-more-chat-btn {\n  background: #6c757d;\n  color: white;\n  border-radius: 4px;\n  padding: 6px 12px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n',
            "",
          ]);
          const o = r;
        },
        224: (e, t, n) => {
          n.d(t, { A: () => o });
          var i = n(601),
            a = n.n(i),
            s = n(314),
            r = n.n(s)()(a());
          r.push([
            e.id,
            ".sa_shorts_share-shorts-popup-container {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 2147483647;\n}\n\n.sa_shorts_share-shorts-popup-inner-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 70%;\n  padding: 28px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  z-index: 2147483647;\n  background-image: linear-gradient(\n    120deg,\n    #fdfbfb 0%,\n    #ebedee 100%\n  ) !important;\n}\n\n.sa_shorts_parentSwiper .sa_shorts_share-shorts-popup-inner-container {\n  padding: 20px;\n}\n\n.sa_shorts_share-shorts-popup-container-heading {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.sa_shorts_share-shorts-popup-btn-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.sa_shorts_share-shorts-popup-btn-container svg,\n.sa_shorts_share-shorts-popup-btn-container img {\n  cursor: pointer;\n}\n\n.sa_shorts-close-share-widget-popup-btn {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  cursor: pointer;\n}\n.sa_shorts_btn_wrapper {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sa_shorts_open-lead-capture-form-popup-btn {\n  display: none;\n}\n\n.sa_shorts_share-shorts-popup-on-twitter,\n.sa_shorts_share-shorts-popup-on-linkedin,\n.sa_shorts_share-shorts-popup-on-gmail {\n  display: none !important;\n}\n\n.sa_shorts-copy-shorts-page-url-btn-text {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  color: white;\n  position: absolute;\n  top: 10px;\n  right: 14px;\n  transform: translateX(1500px);\n  transition: all 500ms ease-in-out;\n}\n\n.sa_shorts-copy-shorts-page-url-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #000;\n  border-radius: 4px;\n}\n\n.sa_shorts-copy-shorts-page-url-btn svg {\n  fill: #fff;\n}\n",
            "",
          ]);
          const o = r;
        },
        915: (e, t, n) => {
          n.d(t, { A: () => o });
          var i = n(601),
            a = n.n(i),
            s = n(314),
            r = n.n(s)()(a());
          r.push([
            e.id,
            "@import url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap);",
          ]),
            r.push([
              e.id,
              '.saleassist-video-shorts-root-container *,\n.saleassist-video-shorts-modal-wrapper * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Roboto", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",\n    "Lucida Sans Unicode", Geneva, Verdana, sans-serif !important;\n}\n\n:root {\n  --saVideoTilePosition: auto 15px 15px auto;\n  --sa-color-light: #fbfbfb;\n  --sa-color-dark: #393939;\n}\n\na {\n  text-decoration: none;\n}\n\nvideo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n#video {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n#video .video-place-holder-image {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.sa_shorts_parentSwiper .sa_shorts_video-wrapper {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,\n    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;\n  cursor: pointer;\n}\n\n#sa_shorts_modal-wrapper {\n  width: 100vw;\n  height: 100vh;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 999999999;\n  display: none;\n  place-content: center;\n  place-items: center;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n\n.sa_shorts_relative {\n  position: relative;\n}\n\n.sa_shorts_parent-video-play-btn {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 50;\n  cursor: pointer;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n  display: flex;\n}\n\n.sa_shorts_controls-btn {\n  cursor: pointer;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n  display: flex;\n}\n\n.sa_shorts_hidden {\n  display: none;\n}\n\n/* .sa_shorts_block {\n  display: block;\n} */\n\n.sa_shorts_invisible {\n  visibility: hidden;\n}\n\n.sa_shorts_cta {\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  bottom: 150px;\n  z-index: 50;\n  display: flex;\n  align-items: flex-end;\n  justify-content: end;\n}\n\n.sa_shorts_like-share {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n}\n\n.sa_shorts_like-share img {\n  width: 28px;\n  cursor: pointer;\n}\n\n.sa_shorts_parentSwiper .sa_shorts_products-wrapper {\n  bottom: 15px;\n}\n\n.sa_shorts_parentSwiper .sa_shorts_video-shorts-product {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border-radius: 8px;\n  padding: 6px;\n  width: 170px;\n  margin: 5px auto;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,\n    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;\n}\n\n.sa_shorts_products-wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 48px;\n}\n\n.sa_shorts_carouselSwiper\n  .sa_shorts_childSwiper\n  .swiper-slide:has(.sa_shorts_video-shorts-product) {\n  /* width: max-content !important; */\n}\n\n.sa_shorts_carouselSwiper .sa_shorts_childSwiper .swiper-slide:first-child {\n  margin-left: 7.5px;\n}\n\n.sa_shorts_carouselSwiper .sa_shorts_childSwiper .swiper-slide:last-child {\n  margin-right: 7.5px;\n}\n\n.sa_shorts_carouselSwiper .sa_shorts_video-shorts-product {\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 8px;\n  padding-left: 8px;\n  margin: 10px 7.5px;\n  width: 272px !important;\n  max-width: 272px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,\n    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;\n}\n\n.sa_shorts_parentSwiper .sa_shorts_product-image {\n  width: 45px;\n  height: 45px;\n  object-fit: contain;\n  border-radius: 8px;\n}\n\n.sa_shorts_product-image {\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: contain !important;\n  border-radius: 8px !important;\n}\n\n.sa_shorts_product-image-wrapper {\n  width: 55px !important;\n  height: 55px !important;\n  border-radius: 8px !important;\n  margin-right: 4px !important;\n  background: #3a3a3a !important;\n}\n\n.sa_shorts_carouselSwiper .sa_shorts_product-image-wrapper {\n  width: 72px !important;\n  height: 72px !important;\n}\n\n.sa_shorts_parentSwiper .sa_shorts_product-details {\n  font-size: 9.5px;\n  gap: 2px;\n  margin: 0;\n  padding: 0;\n}\n.sa_shorts_parentSwiper .sa_shorts_product-details .name,\n.sa_shorts_carouselSwiper .sa_shorts_product-details .name {\n  /* margin-bottom: 4px; */\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  color: #000 !important;\n}\n\n.sa_shorts_product-details {\n  font-size: 12px;\n  font-weight: 700;\n  color: black;\n  padding: 6px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: flex-start;\n  margin: 0 8px;\n  flex: 1;\n}\n\n.sa_shorts_product-details p {\n  margin: 0;\n  line-height: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.sa_shorts_carouselSwiper .sa_shorts_product-details p {\n  font-size: 13px;\n}\n\n@media (max-width: 448px) {\n  .sa_shorts_product-details {\n    font-size: 10px;\n  }\n}\n\n.sa_shorts_video-shorts-price {\n  text-decoration: line-through;\n  padding-left: 4px;\n}\n\n.sa_shorts_video-shorts-discount-price {\n  color: #000 !important;\n}\n\n.sa_shorts_parentSwiper .sa_shorts_add-cart-btn {\n  font-size: 9px;\n  padding: 2px 10px;\n}\n\n.sa_shorts_add-cart-btn {\n  margin-top: 4px;\n  padding: 6px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: #fff;\n  line-height: normal;\n}\n\n.sa_shorts_product-available {\n  background: #753f6a;\n  cursor: pointer;\n}\n\n/* .sa_shorts_product-not-available {\n  background: #aaa;\n  cursor: not-allowed;\n} */\n\n.sa_shorts_offer-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  background: #f0daeb;\n  padding: 8px 12px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.sa_shorts_discount-percentage {\n  font-size: 13px;\n  font-weight: 700;\n  color: #000 !important;\n}\n\n.sa_shorts_off-text {\n  font-size: 14px;\n  font-weight: 700;\n  color: green;\n}\n\n.sa_shorts_video-caption {\n  display: flex;\n  column-gap: 16px;\n  align-items: center;\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  /* place-items: center; */\n  /* gap: 5px; */\n  width: calc(100% - 30px);\n}\n\n.sa_shorts_parentVideo-caption {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  width: calc(100% - 90px);\n}\n\n.sa_shorts_parentVideo-caption p {\n  font-size: 16px;\n  font-weight: 900;\n  color: #fff;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 8));\n}\n\n.sa_shorts_video-caption p {\n  font-size: 16px;\n  color: white;\n  font-weight: 800;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin: 0;\n  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 8));\n}\n\n.sa_shorts_video-controls {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n}\n\n.sa_shorts_video-controls img {\n  width: 24px !important;\n  height: 24px !important;\n  cursor: pointer;\n}\n\n.sa_shorts_cta-btn {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: 4px;\n  padding: 6px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: #753f6a;\n  line-height: normal;\n  background: #fff;\n  font-weight: 700;\n  font-size: 12px;\n  display: flex;\n  gap: 10px;\n  width: max-content;\n  place-items: center;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,\n    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;\n}\n\n.sa_shorts_whatsapp-me-btn-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.live-streaming-modal-video-cta-wrapper .sa_shorts_whatsapp-me-btn-wrapper {\n  position: relative;\n}\n\n.sa_shorts_whatsapp-me-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #00a82d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.live-streaming-modal-video-cta-wrapper .sa_shorts_whatsapp-me-btn {\n  width: 36px;\n  height: 36px;\n}\n\n.sa_shorts_whatsapp-me-btn .sa_shorts_whatsapp-me-btn-icon {\n  width: 24px !important;\n  height: 24px !important;\n  margin-left: 2px;\n}\n\n.sa_shorts_whatsapp-me-btn-wrapper .sa_shorts_whatsapp-me-btn-text {\n  font-size: 11px;\n  color: white;\n  font-weight: 700;\n}\n\n.live-streaming-modal-video-cta-wrapper .sa_shorts_whatsapp-me-btn-text {\n  position: absolute;\n  top: 110%;\n  width: max-content !important;\n}\n\n.sa_shorts_cta-btn svg {\n  display: none !important;\n}\n\n.sa_shorts_carouselSwiper .sa_shorts_cta-btn {\n  font-size: 16px;\n  padding: 6px 12px;\n}\n\n.sa_shorts_carousel-action-btn {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n}\n\n.sa_shorts_carouselSwiper\n  .sa_shorts_childSwiper\n  .swiper-slide\n  .sa_shorts_video-shorts-product {\n  width: 100%;\n  height: 105px !important;\n}\n\n.swiper.sa_shorts_parentSwiper {\n  padding: 20px;\n}\n\n.swiper-slide.sa_shorts_video-wrapper {\n  border-radius: 18px;\n  overflow: hidden;\n}\n\n.swiper {\n  width: 100% !important;\n}\n\n.saleassist-video-shorts-floating-tile .swiper {\n  /* height: auto !important; */\n  height: 100%;\n  width: 100%;\n}\n\n.sa_shorts_swiper-button-white {\n  color: white !important;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n  text-rendering: auto;\n}\n\n.sa_shorts_carousel-video-overlay {\n  width: 100%;\n  height: 100%;\n  background: hwb(0deg 0% 100% / 50%);\n  position: absolute;\n  z-index: 100;\n  display: block;\n}\n\n.sa_shorts_modal-swiper .swiper-slide-active .sa_shorts_carousel-video-overlay {\n  display: none;\n}\n\n.sa_shorts_parentSwiper .swiper-button-prev::after,\n.sa_shorts_parentSwiper .swiper-button-next::after {\n  content: "";\n}\n\n.sa_shorts_parentSwiper .swiper-button-prev svg,\n.sa_shorts_parentSwiper .swiper-button-next svg {\n  font-size: 40px;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n  color: white !important;\n}\n\n@media (max-width: 500px) {\n  .sa_shorts_carouselSwiper .sa_shorts_video-shorts-product {\n    width: 280px !important;\n    max-width: 280px;\n  }\n}\n\n@media (max-width: 599px) {\n  .swiper {\n    height: 100%;\n  }\n  .sa_shorts_carouselSwiper .sa_shorts_video-wrapper {\n    border-radius: 0px;\n  }\n  .sa_shorts_video-caption {\n    width: calc(100% - 118px);\n  }\n  .sa_shorts_video-controls {\n    top: 60px;\n    right: 12px;\n  }\n  .sa_shorts_carousel-action-btn {\n    flex-direction: row-reverse;\n  }\n}\n\n.sa_shorts_carouselSwiper\n  .swiper-slide.sa_shorts_video-wrapper.sa_shorts_landscape {\n  display: flex;\n  place-items: center;\n  place-content: center;\n  background: #000;\n}\n\n/* @media (min-width: 600px) {\n  .sa_shorts_carouselSwiper .swiper-slide.sa_shorts_video-wrapper {\n    width: 100vw;\n    max-width: 56.25vh;\n    height: 177.78vw;\n    max-height: 100vh;\n  }\n\n  .sa_shorts_carouselSwiper\n    .swiper-slide.sa_shorts_video-wrapper.sa_shorts_landscape {\n    width: 100%;\n    max-width: 80%;\n    height: auto;\n    max-height: 90vh;\n  }\n} */\n\n/* bounce effect */\n.bounce {\n  -webkit-animation: bounce 2s infinite;\n  animation: bounce 2s infinite;\n}\n\n/* Scroll down indicator (bouncing) */\n@-webkit-keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0);\n  }\n  40% {\n    -webkit-transform: translateY(-30px);\n  }\n  60% {\n    -webkit-transform: translateY(-15px);\n  }\n}\n@-moz-keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -moz-transform: translateY(0);\n  }\n  40% {\n    -moz-transform: translateY(-30px);\n  }\n  60% {\n    -moz-transform: translateY(-15px);\n  }\n}\n@keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n  }\n  40% {\n    -webkit-transform: translateY(-30px);\n    -moz-transform: translateY(-30px);\n    -ms-transform: translateY(-30px);\n    -o-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n  60% {\n    -webkit-transform: translateY(-15px);\n    -moz-transform: translateY(-15px);\n    -ms-transform: translateY(-15px);\n    -o-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n\n.saleassist-video-shorts-floating-tile {\n  width: calc(180px + 10px);\n  height: calc(320px + 10px);\n  position: fixed;\n  z-index: 9999;\n  inset: var(--saVideoTilePosition);\n}\n\n.saleassist-video-shorts-floating-tile.sa-floating-tile-landscape {\n  width: calc(320px + 10px);\n  height: calc(180px + 10px);\n}\n\n.saleassist-video-shorts-floating-tile .sa_shorts_parentSwiper {\n  padding: 5px;\n  height: 100%;\n  width: 100%;\n}\n\n.sa_shorts_parentSwiper .swiper-wrapper .swiper-slide-active {\n  box-shadow: none !important;\n}\n\n/* .saleassist-video-shorts-floating-tile .sa_shorts_video-wrapper {\n  width: 180px;\n  height: 320px;\n  margin-right: 0px !important;\n} */\n\n.saleassist-video-shorts-floating-tile.sa-floating-tile-landscape\n  .sa_shorts_video-wrapper {\n  width: 320px;\n  height: 180px;\n}\n\n.saleassist-video-shorts-floating-tile .sa_shorts_products-wrapper {\n  display: none !important;\n}\n\n.saleassist-video-shorts-floating-tile\n  #sa_shorts_modal-wrapper\n  .sa_shorts_carouselSwiper\n  .sa_shorts_products-wrapper {\n  display: block !important;\n}\n\n.saleassist-video-shorts-floating-tile #pip-mode-btn {\n  display: none !important;\n}\n\n#saleassist-video-shorts-floating-tile-close-btn {\n  position: absolute;\n  z-index: 2;\n  top: 12px;\n  right: 12px;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n  color: white;\n  font-size: 12px;\n  cursor: pointer;\n  background: rgba(0, 0, 0, 0.3);\n  place-items: center;\n  place-content: center;\n  display: flex;\n  padding: 5px;\n  border-radius: 50%;\n}\n\n@media (max-width: 599px) {\n  /* .saleassist-video-shorts-floating-tile .sa_shorts_video-wrapper {\n    width: 100%;\n  } */\n\n  .saleassist-video-shorts-floating-tile {\n    width: calc(90px + 10px);\n    height: calc(150px + 10px);\n  }\n\n  .saleassist-video-shorts-floating-tile.sa-floating-tile-landscape {\n    width: calc(240px + 10px);\n    height: calc(135px + 10px);\n  }\n\n  /* .saleassist-video-shorts-floating-tile .sa_shorts_video-wrapper {\n    width: 135px;\n    height: 240px;\n    margin-right: 0px !important;\n  } */\n\n  .saleassist-video-shorts-floating-tile.sa-floating-tile-landscape\n    .sa_shorts_video-wrapper {\n    width: 240px;\n    height: 135px;\n  }\n\n  .sa_shorts_carouselSwiper\n    .swiper-slide.sa_shorts_video-wrapper.sa_shorts_landscape\n    #video {\n    /* height: auto; */\n    height: 100%;\n  }\n\n  .sa_shorts_carouselSwiper\n    .swiper-slide.sa_shorts_video-wrapper.sa_shorts_landscape\n    #video\n    video {\n    position: absolute;\n    inset: 0;\n    object-fit: cover;\n  }\n}\n\n.cta-link {\n  text-decoration: none !important;\n}\n\n.saleassist-video-shorts-modal-wrapper .non-products-cta-link {\n  position: relative !important;\n  bottom: 16px !important;\n}\n\n#sa_shorts_modal-wrapper .sa_shorts_childSwiper .swiper-slide {\n  width: 100% !important;\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n\n  .sa_shorts_video-shorts-product {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n}\n\n.sa_shorts_swipe-up-arrow-animation {\n  position: absolute;\n  bottom: 156px;\n  left: 50%;\n  transform: translateX(-50%);\n  transform: rotate(180deg);\n  z-index: 99999;\n  cursor: pointer;\n  display: none;\n}\n\n.saleassist-video-shorts-floating-tile .sa_shorts_swipe-up-arrow-animation {\n  display: none !important;\n}\n\n.sa_shorts_parent-video-play-btn img {\n  width: 50px;\n}\n\n@media (max-width: 599px) {\n  .sa_shorts_swipe-up-arrow-animation {\n    display: block;\n  }\n\n  .sa_shorts_parent-video-play-btn img {\n    width: 36px;\n  }\n}\n\n.sa_shorts_swipe-up-arrow-animation span {\n  display: block;\n  width: 24px;\n  height: 24px;\n  border-bottom: 5px solid white;\n  border-right: 5px solid white;\n  transform: rotate(45deg);\n  margin: -10px;\n  animation: arrow-animation 2s infinite;\n}\n\n.sa_shorts_swipe-up-arrow-animation span:nth-child(2) {\n  animation-delay: -0.2s;\n}\n\n.sa_shorts_swipe-up-arrow-animation span:nth-child(3) {\n  animation-delay: -0.4s;\n}\n\n@keyframes arrow-animation {\n  0% {\n    opacity: 0;\n    transform: rotate(45deg) translate(-20px, -20px);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: rotate(45deg) translate(20px, 20px);\n  }\n}\n\n.sa_shorts_open-share-shorts-popup-btn,\n.sa_shorts_open-lead-capture-form-popup-btn {\n  cursor: pointer;\n}\n\n.sa_shorts_share-shorts-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 999;\n}\n\n.sa_shorts_mute-unmute-parent-video {\n  position: absolute;\n  top: 44px;\n  right: 10px;\n  z-index: 999;\n  /* display: none; */\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.sa_shorts_mute-unmute-parent-video svg {\n  width: 24px;\n  height: 24px;\n}\n\n.sa_shorts_parent-video-unmute-icon {\n  display: none;\n}\n\n.muted .sa_shorts_parent-video-mute-icon {\n  display: none;\n}\n\n#saleassist-video-shorts-floating-tile .sa_shorts_share-shorts-btn svg,\n#saleassist-video-shorts-floating-tile .sa_shorts_mute-unmute-parent-video svg {\n  width: 20px;\n  height: 20px;\n}\n\n#saleassist-video-shorts-floating-tile .sa_shorts_share-shorts-btn {\n  top: 32px;\n  right: 6px;\n}\n\n#saleassist-video-shorts-floating-tile .sa_shorts_mute-unmute-parent-video {\n  top: 60px;\n  right: 6px;\n}\n\n#saleassist-video-shorts-floating-tile-close-btn {\n  top: 10px;\n  right: 10px;\n  font-size: 9px;\n}\n\n.muted .sa_shorts_parent-video-unmute-icon {\n  display: block;\n}\n\n.sa_shorts_mute-unmute-parent-video .sa_shorts_unmute-animation {\n  margin-top: 8px;\n  padding: 4px 6px;\n  border-radius: 5px;\n  background: #222;\n  font-size: 12px;\n  color: #fff;\n  opacity: 0;\n  animation: fadeInOut 10000ms ease-in-out;\n  display: block;\n}\n\n@keyframes fadeInOut {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.sa_shorts_inquiry-btn-wrapper {\n  /* display: flex; */\n  display: none;\n  flex-direction: column;\n  gap: 4px;\n  position: absolute;\n  bottom: 20%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 50;\n  animation-name: bottomFadeOut;\n  animation-duration: 3s;\n}\n\n.sa_shorts_inquiry-btn,\n.sa_shorts_close-inquiry-btn {\n  display: flex;\n  align-items: center;\n  background: #111827;\n  color: white;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n  cursor: pointer;\n}\n\n.sa_shorts_inquiry-btn {\n  gap: 2px;\n  padding: 4px 12px;\n  border-radius: 8px;\n  font-size: 14px;\n}\n\n.sa_shorts_close-inquiry-btn {\n  border-radius: 4px;\n  margin-left: auto;\n}\n\n@keyframes bottomFadeOut {\n  0% {\n    position: absolute;\n    bottom: -5rem;\n    opacity: 0;\n  }\n\n  60% {\n    position: absolute;\n    bottom: -5rem;\n    opacity: 0;\n  }\n\n  100% {\n    position: absolute;\n    bottom: 20%;\n    opacity: 1;\n  }\n}\n\n@media (min-width: 600px) {\n  .sa_shorts_carouselSwiper .swiper-slide.sa_shorts_video-wrapper {\n    width: 100vw;\n    max-width: 56.25vh;\n    height: 177.78vw;\n    max-height: 100vh;\n  }\n\n  .sa_shorts_carouselSwiper\n    .swiper-slide.sa_shorts_video-wrapper.sa_shorts_landscape {\n    width: 100%;\n    max-width: 80%;\n    height: auto;\n    max-height: 90vh;\n  }\n\n  .saleassist-video-shorts-floating-tile.sa-floating-tile-landscape\n    .sa_shorts_carouselSwiper\n    .swiper-slide.sa_shorts_video-wrapper {\n    width: 100%;\n    max-width: 80%;\n    height: auto;\n    max-height: 90vh;\n  }\n}\n\n/* scroll customization */\n::-webkit-scrollbar {\n  width: 3px;\n  height: 4px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #e1e1e1;\n  border-radius: 5px;\n  margin: 15px 18px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #a1a1a1;\n  border-radius: 5px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #333;\n}\n',
              "",
            ]);
          const o = r;
        },
        42: (e, t, n) => {
          n.d(t, { A: () => o });
          var i = n(601),
            a = n.n(i),
            s = n(314),
            r = n.n(s)()(a());
          r.push([
            e.id,
            '#video-controls-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 50;\n}\n\n#video-controls-container::before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);\n  width: 100%;\n  aspect-ratio: 6 / 1;\n  z-index: -1;\n  pointer-events: none;\n  max-height: 56px;\n}\n\n#video-controls-container .video-controls-wrapper {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  padding-right: 20px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n}\n\n.timeline-container {\n  height: 7px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: relative;\n}\n\n.timeline {\n  background-color: rgba(100, 100, 100, 0.5);\n  height: 6px;\n  width: 100%;\n  position: relative;\n}\n\n/* grey section */\n.timeline::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: calc(100% - var(--preview-position) * 100%);\n  background-color: rgb(150, 150, 150);\n  display: none;\n}\n\n/* red section */\n.timeline::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: calc(100% - var(--progress-position) * 100%);\n  background-color: red;\n}\n\n.timeline .thumb-indicator {\n  --scale: 0;\n  position: absolute;\n  transform: translateX(-50%) scale(var(--scale));\n  height: 200%;\n  top: -50%;\n  left: calc(var(--progress-position) * 100%);\n  background-color: red;\n  border-radius: 50%;\n  transition: transform 150ms ease-in-out;\n  aspect-ratio: 1 / 1;\n}\n\n.video-container.scrubbing .timeline::before,\n.timeline-container:hover .timeline::before {\n  display: block;\n}\n\n.video-container.scrubbing .thumb-indicator,\n.timeline-container:hover .thumb-indicator {\n  --scale: 1;\n}\n\n.video-container.scrubbing .timeline,\n.timeline-container:hover .timeline {\n  height: 100%;\n}\n\n.duration-container {\n  color: white;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.tagged-products-indicator {\n  position: absolute;\n  transform: translateX(-50%) scale(var(--scale));\n  height: 100%;\n  width: 2px;\n  background-color: white;\n  transition: transform 150ms ease-in-out;\n  aspect-ratio: 1 / 1;\n  z-index: 1;\n  transform: translateX(5px);\n}\n',
            "",
          ]);
          const o = r;
        },
        972: (e, t, n) => {
          n.d(t, { A: () => o });
          var i = n(601),
            a = n.n(i),
            s = n(314),
            r = n.n(s)()(a());
          r.push([
            e.id,
            ".adds-tag-ripple-loader {\n  position: relative;\n  display: block;\n  width: max-content;\n  cursor: pointer;\n}\n\n.adds-tag-ripple-loader > span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n  border-radius: 50%;\n  background: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n}\n\n.adds-tag-ripple-loader > div {\n  width: 36px;\n  height: 36px;\n  border: 2px solid #fff;\n  border-radius: 100%;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n  animation: ball-scale-ripple 1s cubic-bezier(0.21, 0.53, 0.56, 0.8) 0s\n    infinite;\n}\n\n@keyframes ball-scale-ripple {\n  0% {\n    transform: scale(0.1);\n    opacity: 1;\n  }\n  70% {\n    transform: scale(1);\n    opacity: 0.7;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.adds-tag-product-card {\n  display: flex;\n  flex-direction: column;\n  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.6));\n  max-width: 100px;\n  min-width: 84px;\n}\n\n.adds-tag-product-close {\n  position: absolute;\n  top: -21px;\n  right: -3px;\n  width: 22px;\n  height: 22px;\n  font-size: 14px;\n  color: white;\n  display: flex;\n  place-content: center;\n  place-items: center;\n  cursor: pointer;\n}\n\n.adds-tag-product-image {\n  width: 100%;\n  height: 70px;\n  background: #fff;\n  border: 1px solid #fff;\n  border-radius: 2px;\n}\n\n.adds-tag-product-image > img {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.adds-tag-product-link {\n  font-size: 13px;\n  font-weight: 600;\n  padding: 5px 10px;\n  display: flex;\n  place-content: center;\n  place-items: center;\n  align-items: start;\n  gap: 4px;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n\n/* pop-up product view */\n.sa-pop-up-product-container-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  display: none;\n  place-items: center;\n  place-content: center;\n}\n\n.sa-pop-up-product-container-helper-text {\n  position: absolute;\n  top: 38px;\n  left: 15px;\n  font-size: 14px;\n  color: #fff;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n}\n\n.sa-pop-up-modal-close-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border: none;\n  display: flex;\n  font-size: 20px;\n  padding: 4px;\n  background: white;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,\n    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.sa-pop-up-modal-wrapper {\n  display: flex;\n  width: 85%;\n  height: 85%;\n  place-content: center;\n  place-items: center;\n  z-index: 1;\n  position: relative;\n}\n\n.sa-pop-up-modal-container {\n  min-width: 100%;\n  height: 100%;\n  display: none;\n  background: white;\n  padding: 15px;\n  gap: 15px;\n  overflow-x: auto;\n  z-index: 1;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,\n    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;\n}\n\n.sa_shorts_rounded-border .sa-pop-up-modal-container,\n.sa_shorts_rounded-border .sa-modal-tag-product-card {\n  border-radius: 18px;\n}\n\n.sa-pop-up-modal-container > .sa-modal-tag-product-card:only-child {\n  margin: 0 auto;\n}\n\n.sa-pop-up-modal-scroll-btn {\n  position: absolute;\n  z-index: 1;\n  font-size: 18px;\n  display: flex;\n  border: none;\n  background: rgb(0 0 0 / 35%);\n  color: #fff;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 44px;\n  border-radius: 50px 0 0 50px;\n  cursor: pointer;\n}\n\n.sa-pop-up-modal-scroll-btn svg {\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  transform: translateY(-50%);\n}\n\n.sa-modal-tag-product-card {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-width: 100%;\n  padding: 5px;\n  gap: 15px;\n  /* overflow-y: auto; */\n  overflow: hidden;\n}\n\n.sa-modal-tag-product-image {\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  place-items: center;\n  background: #f7f7f7;\n  border-radius: inherit;\n  gap: 15px;\n  /* will be added programmatically, if there is multiple images */\n  /* min-height: 65%; */\n  /* max-height: 65%; */\n\n  min-width: 290px;\n  min-height: 280px;\n  max-width: 100%;\n  max-height: 280px;\n}\n\n.sa-modal-tag-product-image-wrapper {\n  /* will be added programmatically, if there is multiple images */\n  /* height: calc(100% - 120px); */\n\n  width: 90%;\n  max-width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  max-height: 100%;\n}\n\n.sa-modal-tag-product-image-wrapper img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.sa-modal-tag-product-images-container {\n  display: flex;\n  width: calc(100% - 20px);\n  gap: 10px;\n  overflow-x: auto;\n}\n\n.sa-modal-tag-product-images-container div {\n  min-width: 80px;\n  max-width: 80px;\n  height: 80px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 4px;\n  background: #fff;\n  cursor: pointer;\n}\n\n.sa-modal-tag-product-images-container img {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n\n.sa-modal-tag-product-details {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 10px;\n}\n\n.sa-modal-tag-product-name {\n  font-size: 22px;\n  text-transform: capitalize;\n  color: #1f1f1fe6;\n}\n\n.sa-modal-tag-product-description {\n  font-size: 15px;\n  text-align: justify;\n  color: #52525bad;\n  /* margin-bottom: 10px; */\n}\n\n.sa-modal-tag-product-price {\n  display: flex;\n  place-items: center;\n  gap: 2px;\n  font-size: 22px;\n  font-weight: 600;\n  color: #000;\n  margin-bottom: 8px;\n}\n\n.sa-modal-tag-product-price span:nth-child(3) {\n  font-size: 16px;\n  text-decoration: line-through;\n  margin-left: 2px;\n  color: #1f1f1f;\n}\n\n.sa-modal-tag-product-link {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n}\n\n.tag-product-indicator-animation-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 64px;\n  height: 64px;\n  cursor: pointer;\n  z-index: 100;\n}\n\n.tag-product-indicator-animation-outer {\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(0.1);\n  animation: 700ms ease 200ms infinite normal none running indicator-animation;\n  transition: box-shadow 200ms ease 0s;\n  box-shadow: rgb(255, 255, 255) 0px 0px 5em inset;\n}\n\n@keyframes indicator-animation {\n  0% {\n    transform: scale(0.1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(1.2);\n    opacity: 0;\n  }\n}\n\n.tag-product-indicator-animation-inner {\n  -webkit-box-align: center;\n  align-items: center;\n  background: rgb(255, 255, 255);\n  color: #000;\n  border-radius: 50%;\n  display: flex;\n  width: 75%;\n  height: 75%;\n  -webkit-box-pack: center;\n  justify-content: center;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transition: all 200ms ease-in-out 0s;\n  font-size: 44px;\n}\n\n.tag-product-indicator-animation-inner span {\n  font-weight: 500;\n  transition: all 300ms ease-in-out;\n  text-align: center;\n}\n\n.tag-product-indicator-animation-container:hover\n  .tag-product-indicator-animation-inner {\n  background: #000;\n  color: #fff;\n}\n\n.tag-product-indicator-animation-container:hover\n  .tag-product-indicator-animation-inner\n  span {\n  color: #fff;\n  transform: scale(0.7);\n}\n\n.tag-product-indicator-animation-container:hover\n  .tag-product-indicator-animation-outer {\n  box-shadow: rgb(0, 0, 0) 0px 0px 5em inset;\n}\n\n@media (min-width: 600px) {\n  .sa_shorts_landscape .sa-pop-up-modal-wrapper {\n    max-width: 1024px;\n    max-height: 600px;\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-card {\n    flex-direction: row;\n    gap: 10px;\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-image {\n    min-height: unset;\n    max-height: unset;\n    flex: 0.55;\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-image-wrapper {\n    height: calc(100% - 95px);\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-images-container div {\n    min-width: 60px;\n    max-width: 60px;\n    height: 60px;\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-details {\n    flex: 0.45;\n    overflow-y: auto;\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-description {\n    font-size: 13px;\n    margin-bottom: 0;\n  }\n}\n\n@media (min-width: 968px) {\n  .sa_shorts_landscape .sa-modal-tag-product-card {\n    gap: 15px;\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-image {\n    flex: 0.65;\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-image-wrapper {\n    height: calc(100% - 120px);\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-images-container div {\n    min-width: 80px;\n    max-width: 80px;\n    height: 80px;\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-details {\n    flex: 0.35;\n  }\n\n  .sa_shorts_landscape .sa-modal-tag-product-description {\n    font-size: 15px;\n    /* margin-bottom: 10px; */\n  }\n}\n\n@media (min-width: 1024px) {\n  .sa-pop-up-modal-container > .sa-modal-tag-product-card:only-child {\n    margin: 0;\n    width: 100%;\n  }\n}\n\n@media (max-width: 1024px) {\n  .sa-pop-up-modal-close-button {\n    top: 8px;\n    right: 8px;\n    font-size: 18px;\n    padding: 2px;\n  }\n\n  .sa-modal-tag-product-details {\n    gap: 8px;\n  }\n\n  .sa-modal-tag-product-name {\n    font-size: 18px;\n  }\n\n  .sa-modal-tag-product-price {\n    font-size: 20px;\n  }\n\n  .sa-modal-tag-product-price span:nth-child(3) {\n    font-size: 13px;\n  }\n\n  .sa-modal-tag-product-description {\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 768px) {\n  .sa-pop-up-modal-scroll-btn {\n    font-size: 16px;\n  }\n}\n\n@media (max-width: 450px) {\n  .sa-pop-up-modal-container {\n    padding: 10px;\n    gap: 10px;\n  }\n\n  .sa-modal-tag-product-link {\n    font-size: 12px;\n    padding: 8px;\n  }\n\n  .sa-pop-up-modal-scroll-btn {\n    font-size: 14px;\n    padding: 10px 2px;\n  }\n}\n",
            "",
          ]);
          const o = r;
        },
        550: (e, t, n) => {
          n.d(t, { A: () => o });
          var i = n(601),
            a = n.n(i),
            s = n(314),
            r = n.n(s)()(a());
          r.push([
            e.id,
            ".sa-view-all-products-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  position: absolute;\n  bottom: 45px;\n  /* left: 18px; */\n  right: 18px;\n  padding: 8px;\n  background: var(--shortsThemeColor);\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  z-index: 99;\n}\n\n.sa-view-all-products-button-icon {\n  background: transparent !important;\n  border: 0.5px solid var(--shortsInvertColor);\n  padding: 6px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sa-view-all-products-button-icon svg {\n  fill: var(--shortsInvertColor);\n}\n\n.sa-view-all-products-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--shortsInvertColor);\n}\n\n.sa-view-all-products-container {\n  width: 300px;\n  height: 100%;\n  background: transparent;\n  position: absolute;\n  top: 0;\n  /* left: 0; */\n  right: 0;\n  backdrop-filter: blur(25px);\n  -webkit-backdrop-filter: blur(25px);\n  display: none;\n  flex-direction: column;\n  z-index: 100;\n}\n\n.sa-view-all-products-header {\n  display: flex;\n  place-content: space-between;\n  place-items: center;\n  padding: 10px;\n  font-size: 18px;\n  color: white;\n  border-bottom: 1px solid #fff;\n  filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.6));\n}\n.sa-view-all-products-header-text {\n  padding: 4px 8px;\n  font-weight: 600;\n}\n\n.sa-view-all-products-header svg {\n  cursor: pointer;\n}\n\n.sa-view-all-products-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n  overflow-y: auto;\n}\n\n.sa-view-all-products-card {\n  display: flex;\n  gap: 8px;\n  border-radius: 8px;\n  background: white;\n  padding: 5px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,\n    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;\n}\n\n.sa-view-all-products-card-image {\n  width: 85px;\n  height: 85px;\n  border-radius: inherit;\n  background: white;\n  border: 1px solid #bbbbbb;\n  position: relative;\n}\n\n.sa-view-all-products-card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: inherit;\n}\n\n.sa-view-product-in-video-btn {\n  position: absolute;\n    background: rgba(0, 0, 0, 0.5);\n    height: 100%;\n    width: 100%;\n    top: 0px;\n    left: 0px;\n    border-radius: inherit;\n    display: grid;\n    place-items: center;\n    font-size: 12px;\n    opacity: 0;\n    color: white;\n    cursor: pointer;\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n}\n.sa-view-product-in-video-btn:hover {\n  opacity: 1;\n}\n\n.sa-view-all-products-card-detail {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  place-content: space-between;\n  margin: 3px 3px 3px 0;\n}\n\n.sa-view-all-products-card-detail-title {\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 4px;\n  text-transform: capitalize;\n  color: #1f1f1fe6;\n}\n\n.sa-view-all-products-card-detail-description {\n  font-size: 12px;\n  color: #52525bad;\n  margin-bottom: 4px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.sa-view-all-products-card-detail-content {\n  display: flex;\n  place-content: space-between;\n  place-items: center;\n}\n\n.sa-view-all-products-card-content-price {\n  display: flex;\n  font-size: 13px;\n  font-weight: 500;\n  place-items: end;\n  color: #1f1f1fe6;\n}\n\n.sa-view-all-products-card-content-price span:nth-child(3) {\n  font-size: 12px;\n  text-decoration: line-through;\n  margin-left: 2px;\n}\n\n.sa-view-all-products-card-content-shop-btn {\n  border: none;\n  background: #000;\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 5px 15px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n@media (max-width: 1024px) {\n  .sa-view-all-products-button {\n    font-size: 14px;\n  }\n}\n\n@media (min-width: 600px) {\n  .sa-view-all-products-button {\n    bottom: 60px;\n    /* left: 20px; */\n    right: 6px;\n  }\n}\n\n@media (max-width: 450px) {\n  .sa-view-all-products-button {\n    font-size: 12px;\n  }\n}\n",
            "",
          ]);
          const o = r;
        },
        219: (e, t, n) => {
          n.d(t, { A: () => u });
          var i = n(601),
            a = n.n(i),
            s = n(314),
            r = n.n(s),
            o = n(417),
            l = n.n(o),
            d = new URL(n(85), n.b),
            c = r()(a()),
            p = l()(d);
          c.push([
            e.id,
            `/**\n * Swiper 9.4.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: June 13, 2023\n */\n\n@font-face{font-family:swiper-icons;src:url(${p});font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper,swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide,swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,swiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,:host(.swiper-horizontal.swiper-rtl) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;-ms-touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}.swiper .swiper-notification,swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}`,
            "",
          ]);
          const u = c;
        },
        314: (e) => {
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var n = "",
                    i = void 0 !== t[5];
                  return (
                    t[4] && (n += "@supports (".concat(t[4], ") {")),
                    t[2] && (n += "@media ".concat(t[2], " {")),
                    i &&
                      (n += "@layer".concat(
                        t[5].length > 0 ? " ".concat(t[5]) : "",
                        " {"
                      )),
                    (n += e(t)),
                    i && (n += "}"),
                    t[2] && (n += "}"),
                    t[4] && (n += "}"),
                    n
                  );
                }).join("");
              }),
              (t.i = function (e, n, i, a, s) {
                "string" == typeof e && (e = [[null, e, void 0]]);
                var r = {};
                if (i)
                  for (var o = 0; o < this.length; o++) {
                    var l = this[o][0];
                    null != l && (r[l] = !0);
                  }
                for (var d = 0; d < e.length; d++) {
                  var c = [].concat(e[d]);
                  (i && r[c[0]]) ||
                    (void 0 !== s &&
                      (void 0 === c[5] ||
                        (c[1] = "@layer"
                          .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                          .concat(c[1], "}")),
                      (c[5] = s)),
                    n &&
                      (c[2]
                        ? ((c[1] = "@media "
                            .concat(c[2], " {")
                            .concat(c[1], "}")),
                          (c[2] = n))
                        : (c[2] = n)),
                    a &&
                      (c[4]
                        ? ((c[1] = "@supports ("
                            .concat(c[4], ") {")
                            .concat(c[1], "}")),
                          (c[4] = a))
                        : (c[4] = "".concat(a))),
                    t.push(c));
                }
              }),
              t
            );
          };
        },
        417: (e) => {
          e.exports = function (e, t) {
            return (
              t || (t = {}),
              e
                ? ((e = String(e.__esModule ? e.default : e)),
                  /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                  t.hash && (e += t.hash),
                  /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                    ? '"'.concat(
                        e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                        '"'
                      )
                    : e)
                : e
            );
          };
        },
        601: (e) => {
          e.exports = function (e) {
            return e[1];
          };
        },
        72: (e) => {
          var t = [];
          function n(e) {
            for (var n = -1, i = 0; i < t.length; i++)
              if (t[i].identifier === e) {
                n = i;
                break;
              }
            return n;
          }
          function i(e, i) {
            for (var s = {}, r = [], o = 0; o < e.length; o++) {
              var l = e[o],
                d = i.base ? l[0] + i.base : l[0],
                c = s[d] || 0,
                p = "".concat(d, " ").concat(c);
              s[d] = c + 1;
              var u = n(p),
                h = {
                  css: l[1],
                  media: l[2],
                  sourceMap: l[3],
                  supports: l[4],
                  layer: l[5],
                };
              if (-1 !== u) t[u].references++, t[u].updater(h);
              else {
                var m = a(h, i);
                (i.byIndex = o),
                  t.splice(o, 0, { identifier: p, updater: m, references: 1 });
              }
              r.push(p);
            }
            return r;
          }
          function a(e, t) {
            var n = t.domAPI(t);
            n.update(e);
            return function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            };
          }
          e.exports = function (e, a) {
            var s = i((e = e || []), (a = a || {}));
            return function (e) {
              e = e || [];
              for (var r = 0; r < s.length; r++) {
                var o = n(s[r]);
                t[o].references--;
              }
              for (var l = i(e, a), d = 0; d < s.length; d++) {
                var c = n(s[d]);
                0 === t[c].references && (t[c].updater(), t.splice(c, 1));
              }
              s = l;
            };
          };
        },
        659: (e) => {
          var t = {};
          e.exports = function (e, n) {
            var i = (function (e) {
              if (void 0 === t[e]) {
                var n = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                t[e] = n;
              }
              return t[e];
            })(e);
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(n);
          };
        },
        540: (e) => {
          e.exports = function (e) {
            var t = document.createElement("style");
            return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
          };
        },
        56: (e, t, n) => {
          e.exports = function (e) {
            var t = n.nc;
            t && e.setAttribute("nonce", t);
          };
        },
        825: (e) => {
          e.exports = function (e) {
            if ("undefined" == typeof document)
              return { update: function () {}, remove: function () {} };
            var t = e.insertStyleElement(e);
            return {
              update: function (n) {
                !(function (e, t, n) {
                  var i = "";
                  n.supports && (i += "@supports (".concat(n.supports, ") {")),
                    n.media && (i += "@media ".concat(n.media, " {"));
                  var a = void 0 !== n.layer;
                  a &&
                    (i += "@layer".concat(
                      n.layer.length > 0 ? " ".concat(n.layer) : "",
                      " {"
                    )),
                    (i += n.css),
                    a && (i += "}"),
                    n.media && (i += "}"),
                    n.supports && (i += "}");
                  var s = n.sourceMap;
                  s &&
                    "undefined" != typeof btoa &&
                    (i +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                        " */"
                      )),
                    t.styleTagTransform(i, e, t.options);
                })(t, e, n);
              },
              remove: function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              },
            };
          };
        },
        113: (e) => {
          e.exports = function (e, t) {
            if (t.styleSheet) t.styleSheet.cssText = e;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(e));
            }
          };
        },
        85: (e) => {
          e.exports =
            "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA";
        },
      },
      t = {};
    function n(i) {
      var a = t[i];
      if (void 0 !== a) return a.exports;
      var s = (t[i] = { id: i, exports: {} });
      return e[i](s, s.exports, n), s.exports;
    }
    (n.m = e),
      (n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, { a: t }), t;
      }),
      (n.d = (e, t) => {
        for (var i in t)
          n.o(t, i) &&
            !n.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.b = document.baseURI || self.location.href),
      (n.nc = void 0);
    var i = {};
    return (
      (() => {
        n.r(i);
        var e = {};
        n.r(e),
          n.d(e, {
            Decoder: () => kn,
            Encoder: () => In,
            PacketType: () => Sn,
            protocol: () => Cn,
          });
        const t = {
          url: "https://platform.saleassist.ai",
          SOCKET_URL: "https://sockets-stg.saleassist.ai",
          event: "https://ingest-stg.saleassist.ai",
          gumlet_property_id: "yvBdGFrH",
        };
        function a(e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "constructor" in e &&
            e.constructor === Object
          );
        }
        function s(e = {}, t = {}) {
          Object.keys(t).forEach((n) => {
            void 0 === e[n]
              ? (e[n] = t[n])
              : a(t[n]) &&
                a(e[n]) &&
                Object.keys(t[n]).length > 0 &&
                s(e[n], t[n]);
          });
        }
        const r = {
          body: {},
          addEventListener() {},
          removeEventListener() {},
          activeElement: { blur() {}, nodeName: "" },
          querySelector: () => null,
          querySelectorAll: () => [],
          getElementById: () => null,
          createEvent: () => ({ initEvent() {} }),
          createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => [],
          }),
          createElementNS: () => ({}),
          importNode: () => null,
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
          },
        };
        function o() {
          const e = "undefined" != typeof document ? document : {};
          return s(e, r), e;
        }
        const l = {
          document: r,
          navigator: { userAgent: "" },
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
          },
          history: { replaceState() {}, pushState() {}, go() {}, back() {} },
          CustomEvent: function () {
            return this;
          },
          addEventListener() {},
          removeEventListener() {},
          getComputedStyle: () => ({ getPropertyValue: () => "" }),
          Image() {},
          Date() {},
          screen: {},
          setTimeout() {},
          clearTimeout() {},
          matchMedia: () => ({}),
          requestAnimationFrame: (e) =>
            "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
          cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
          },
        };
        function d() {
          const e = "undefined" != typeof window ? window : {};
          return s(e, l), e;
        }
        function c(e, t = 0) {
          return setTimeout(e, t);
        }
        function p() {
          return Date.now();
        }
        function u(e, t = "x") {
          const n = d();
          let i, a, s;
          const r = (function (e) {
            const t = d();
            let n;
            return (
              t.getComputedStyle && (n = t.getComputedStyle(e, null)),
              !n && e.currentStyle && (n = e.currentStyle),
              n || (n = e.style),
              n
            );
          })(e);
          return (
            n.WebKitCSSMatrix
              ? ((a = r.transform || r.webkitTransform),
                a.split(",").length > 6 &&
                  (a = a
                    .split(", ")
                    .map((e) => e.replace(",", "."))
                    .join(", ")),
                (s = new n.WebKitCSSMatrix("none" === a ? "" : a)))
              : ((s =
                  r.MozTransform ||
                  r.OTransform ||
                  r.MsTransform ||
                  r.msTransform ||
                  r.transform ||
                  r
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,")),
                (i = s.toString().split(","))),
            "x" === t &&
              (a = n.WebKitCSSMatrix
                ? s.m41
                : 16 === i.length
                ? parseFloat(i[12])
                : parseFloat(i[4])),
            "y" === t &&
              (a = n.WebKitCSSMatrix
                ? s.m42
                : 16 === i.length
                ? parseFloat(i[13])
                : parseFloat(i[5])),
            a || 0
          );
        }
        function h(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            e.constructor &&
            "Object" === Object.prototype.toString.call(e).slice(8, -1)
          );
        }
        function m(...e) {
          const t = Object(e[0]),
            n = ["__proto__", "constructor", "prototype"];
          for (let a = 1; a < e.length; a += 1) {
            const s = e[a];
            if (
              null != s &&
              ((i = s),
              !("undefined" != typeof window && void 0 !== window.HTMLElement
                ? i instanceof HTMLElement
                : i && (1 === i.nodeType || 11 === i.nodeType)))
            ) {
              const e = Object.keys(Object(s)).filter((e) => n.indexOf(e) < 0);
              for (let n = 0, i = e.length; n < i; n += 1) {
                const i = e[n],
                  a = Object.getOwnPropertyDescriptor(s, i);
                void 0 !== a &&
                  a.enumerable &&
                  (h(t[i]) && h(s[i])
                    ? s[i].__swiper__
                      ? (t[i] = s[i])
                      : m(t[i], s[i])
                    : !h(t[i]) && h(s[i])
                    ? ((t[i] = {}),
                      s[i].__swiper__ ? (t[i] = s[i]) : m(t[i], s[i]))
                    : (t[i] = s[i]));
              }
            }
          }
          var i;
          return t;
        }
        function g(e, t, n) {
          e.style.setProperty(t, n);
        }
        function f({ swiper: e, targetPosition: t, side: n }) {
          const i = d(),
            a = -e.translate;
          let s,
            r = null;
          const o = e.params.speed;
          (e.wrapperEl.style.scrollSnapType = "none"),
            i.cancelAnimationFrame(e.cssModeFrameID);
          const l = t > a ? "next" : "prev",
            c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
            p = () => {
              (s = new Date().getTime()), null === r && (r = s);
              const l = Math.max(Math.min((s - r) / o, 1), 0),
                d = 0.5 - Math.cos(l * Math.PI) / 2;
              let u = a + d * (t - a);
              if (
                (c(u, t) && (u = t), e.wrapperEl.scrollTo({ [n]: u }), c(u, t))
              )
                return (
                  (e.wrapperEl.style.overflow = "hidden"),
                  (e.wrapperEl.style.scrollSnapType = ""),
                  setTimeout(() => {
                    (e.wrapperEl.style.overflow = ""),
                      e.wrapperEl.scrollTo({ [n]: u });
                  }),
                  void i.cancelAnimationFrame(e.cssModeFrameID)
                );
              e.cssModeFrameID = i.requestAnimationFrame(p);
            };
          p();
        }
        function v(e) {
          return (
            e.querySelector(".swiper-slide-transform") ||
            (e.shadowEl &&
              e.shadowEl.querySelector(".swiper-slide-transform")) ||
            e
          );
        }
        function w(e, t = "") {
          return [...e.children].filter((e) => e.matches(t));
        }
        function b(e, t = []) {
          const n = document.createElement(e);
          return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
        }
        function y(e) {
          const t = d(),
            n = o(),
            i = e.getBoundingClientRect(),
            a = n.body,
            s = e.clientTop || a.clientTop || 0,
            r = e.clientLeft || a.clientLeft || 0,
            l = e === t ? t.scrollY : e.scrollTop,
            c = e === t ? t.scrollX : e.scrollLeft;
          return { top: i.top + l - s, left: i.left + c - r };
        }
        function x(e, t) {
          return d().getComputedStyle(e, null).getPropertyValue(t);
        }
        function _(e) {
          let t,
            n = e;
          if (n) {
            for (t = 0; null !== (n = n.previousSibling); )
              1 === n.nodeType && (t += 1);
            return t;
          }
        }
        function A(e, t) {
          const n = [];
          let i = e.parentElement;
          for (; i; )
            t ? i.matches(t) && n.push(i) : n.push(i), (i = i.parentElement);
          return n;
        }
        function M(e, t) {
          t &&
            e.addEventListener("transitionend", function n(i) {
              i.target === e &&
                (t.call(e, i), e.removeEventListener("transitionend", n));
            });
        }
        function E(e, t, n) {
          const i = d();
          return n
            ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
                parseFloat(
                  i
                    .getComputedStyle(e, null)
                    .getPropertyValue(
                      "width" === t ? "margin-right" : "margin-top"
                    )
                ) +
                parseFloat(
                  i
                    .getComputedStyle(e, null)
                    .getPropertyValue(
                      "width" === t ? "margin-left" : "margin-bottom"
                    )
                )
            : e.offsetWidth;
        }
        let C, S, I;
        function T() {
          return (
            C ||
              (C = (function () {
                const e = d(),
                  t = o();
                return {
                  smoothScroll:
                    t.documentElement &&
                    t.documentElement.style &&
                    "scrollBehavior" in t.documentElement.style,
                  touch: !!(
                    "ontouchstart" in e ||
                    (e.DocumentTouch && t instanceof e.DocumentTouch)
                  ),
                };
              })()),
            C
          );
        }
        function k(e = {}) {
          return (
            S ||
              (S = (function ({ userAgent: e } = {}) {
                const t = T(),
                  n = d(),
                  i = n.navigator.platform,
                  a = e || n.navigator.userAgent,
                  s = { ios: !1, android: !1 },
                  r = n.screen.width,
                  o = n.screen.height,
                  l = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                let c = a.match(/(iPad).*OS\s([\d_]+)/);
                const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                  u = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                  h = "Win32" === i;
                let m = "MacIntel" === i;
                return (
                  !c &&
                    m &&
                    t.touch &&
                    [
                      "1024x1366",
                      "1366x1024",
                      "834x1194",
                      "1194x834",
                      "834x1112",
                      "1112x834",
                      "768x1024",
                      "1024x768",
                      "820x1180",
                      "1180x820",
                      "810x1080",
                      "1080x810",
                    ].indexOf(`${r}x${o}`) >= 0 &&
                    ((c = a.match(/(Version)\/([\d.]+)/)),
                    c || (c = [0, 1, "13_0_0"]),
                    (m = !1)),
                  l && !h && ((s.os = "android"), (s.android = !0)),
                  (c || u || p) && ((s.os = "ios"), (s.ios = !0)),
                  s
                );
              })(e)),
            S
          );
        }
        function L() {
          return (
            I ||
              (I = (function () {
                const e = d();
                let t = !1;
                function n() {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                }
                if (n()) {
                  const n = String(e.navigator.userAgent);
                  if (n.includes("Version/")) {
                    const [e, i] = n
                      .split("Version/")[1]
                      .split(" ")[0]
                      .split(".")
                      .map((e) => Number(e));
                    t = e < 16 || (16 === e && i < 2);
                  }
                }
                return {
                  isSafari: t || n(),
                  needPerspectiveFix: t,
                  isWebView:
                    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                };
              })()),
            I
          );
        }
        const z = {
          on(e, t, n) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const a = n ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][a](t);
              }),
              i
            );
          },
          once(e, t, n) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            function a(...n) {
              i.off(e, a),
                a.__emitterProxy && delete a.__emitterProxy,
                t.apply(i, n);
            }
            return (a.__emitterProxy = t), i.on(e, a, n);
          },
          onAny(e, t) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const i = t ? "unshift" : "push";
            return (
              n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e),
              n
            );
          },
          offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
          },
          off(e, t) {
            const n = this;
            return !n.eventsListeners || n.destroyed
              ? n
              : n.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (n.eventsListeners[e] = [])
                    : n.eventsListeners[e] &&
                      n.eventsListeners[e].forEach((i, a) => {
                        (i === t ||
                          (i.__emitterProxy && i.__emitterProxy === t)) &&
                          n.eventsListeners[e].splice(a, 1);
                      });
                }),
                n)
              : n;
          },
          emit(...e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsListeners) return t;
            let n, i, a;
            "string" == typeof e[0] || Array.isArray(e[0])
              ? ((n = e[0]), (i = e.slice(1, e.length)), (a = t))
              : ((n = e[0].events), (i = e[0].data), (a = e[0].context || t)),
              i.unshift(a);
            return (
              (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
                t.eventsAnyListeners &&
                  t.eventsAnyListeners.length &&
                  t.eventsAnyListeners.forEach((t) => {
                    t.apply(a, [e, ...i]);
                  }),
                  t.eventsListeners &&
                    t.eventsListeners[e] &&
                    t.eventsListeners[e].forEach((e) => {
                      e.apply(a, i);
                    });
              }),
              t
            );
          },
        };
        const D = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const n = t.closest(
              e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
            );
            if (n) {
              const t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
              t && t.remove();
            }
          },
          P = (e, t) => {
            if (!e.slides[t]) return;
            const n = e.slides[t].querySelector('[loading="lazy"]');
            n && n.removeAttribute("loading");
          },
          N = (e) => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const n = e.slides.length;
            if (!n || !t || t < 0) return;
            t = Math.min(t, n);
            const i =
                "auto" === e.params.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : Math.ceil(e.params.slidesPerView),
              a = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
              const n = a,
                s = [n - t];
              return (
                s.push(...Array.from({ length: t }).map((e, t) => n + i + t)),
                void e.slides.forEach((t, n) => {
                  s.includes(t.column) && P(e, n);
                })
              );
            }
            const s = a + i - 1;
            if (e.params.rewind || e.params.loop)
              for (let i = a - t; i <= s + t; i += 1) {
                const t = ((i % n) + n) % n;
                (t < a || t > s) && P(e, t);
              }
            else
              for (
                let i = Math.max(a - t, 0);
                i <= Math.min(s + t, n - 1);
                i += 1
              )
                i !== a && (i > s || i < a) && P(e, i);
          };
        const $ = {
          updateSize: function () {
            const e = this;
            let t, n;
            const i = e.el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : i.clientWidth),
              (n =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : i.clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === n && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(x(i, "padding-left") || 0, 10) -
                  parseInt(x(i, "padding-right") || 0, 10)),
                (n =
                  n -
                  parseInt(x(i, "padding-top") || 0, 10) -
                  parseInt(x(i, "padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(n) && (n = 0),
                Object.assign(e, {
                  width: t,
                  height: n,
                  size: e.isHorizontal() ? t : n,
                }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[t];
            }
            function n(e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0);
            }
            const i = e.params,
              {
                wrapperEl: a,
                slidesEl: s,
                size: r,
                rtlTranslate: o,
                wrongRTL: l,
              } = e,
              d = e.virtual && i.virtual.enabled,
              c = d ? e.virtual.slides.length : e.slides.length,
              p = w(s, `.${e.params.slideClass}, swiper-slide`),
              u = d ? e.virtual.slides.length : p.length;
            let h = [];
            const m = [],
              f = [];
            let v = i.slidesOffsetBefore;
            "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
            let b = i.slidesOffsetAfter;
            "function" == typeof b && (b = i.slidesOffsetAfter.call(e));
            const y = e.snapGrid.length,
              _ = e.slidesGrid.length;
            let A = i.spaceBetween,
              M = -v,
              C = 0,
              S = 0;
            if (void 0 === r) return;
            "string" == typeof A && A.indexOf("%") >= 0
              ? (A = (parseFloat(A.replace("%", "")) / 100) * r)
              : "string" == typeof A && (A = parseFloat(A)),
              (e.virtualSize = -A),
              p.forEach((e) => {
                o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                  (e.style.marginBottom = ""),
                  (e.style.marginTop = "");
              }),
              i.centeredSlides &&
                i.cssMode &&
                (g(a, "--swiper-centered-offset-before", ""),
                g(a, "--swiper-centered-offset-after", ""));
            const I = i.grid && i.grid.rows > 1 && e.grid;
            let T;
            I && e.grid.initSlides(u);
            const k =
              "auto" === i.slidesPerView &&
              i.breakpoints &&
              Object.keys(i.breakpoints).filter(
                (e) => void 0 !== i.breakpoints[e].slidesPerView
              ).length > 0;
            for (let a = 0; a < u; a += 1) {
              let s;
              if (
                ((T = 0),
                p[a] && (s = p[a]),
                I && e.grid.updateSlide(a, s, u, t),
                !p[a] || "none" !== x(s, "display"))
              ) {
                if ("auto" === i.slidesPerView) {
                  k && (p[a].style[t("width")] = "");
                  const r = getComputedStyle(s),
                    o = s.style.transform,
                    l = s.style.webkitTransform;
                  if (
                    (o && (s.style.transform = "none"),
                    l && (s.style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    T = e.isHorizontal()
                      ? E(s, "width", !0)
                      : E(s, "height", !0);
                  else {
                    const e = n(r, "width"),
                      t = n(r, "padding-left"),
                      i = n(r, "padding-right"),
                      a = n(r, "margin-left"),
                      o = n(r, "margin-right"),
                      l = r.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) T = e + a + o;
                    else {
                      const { clientWidth: n, offsetWidth: r } = s;
                      T = e + t + i + a + o + (r - n);
                    }
                  }
                  o && (s.style.transform = o),
                    l && (s.style.webkitTransform = l),
                    i.roundLengths && (T = Math.floor(T));
                } else
                  (T = (r - (i.slidesPerView - 1) * A) / i.slidesPerView),
                    i.roundLengths && (T = Math.floor(T)),
                    p[a] && (p[a].style[t("width")] = `${T}px`);
                p[a] && (p[a].swiperSlideSize = T),
                  f.push(T),
                  i.centeredSlides
                    ? ((M = M + T / 2 + C / 2 + A),
                      0 === C && 0 !== a && (M = M - r / 2 - A),
                      0 === a && (M = M - r / 2 - A),
                      Math.abs(M) < 0.001 && (M = 0),
                      i.roundLengths && (M = Math.floor(M)),
                      S % i.slidesPerGroup == 0 && h.push(M),
                      m.push(M))
                    : (i.roundLengths && (M = Math.floor(M)),
                      (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                        e.params.slidesPerGroup ==
                        0 && h.push(M),
                      m.push(M),
                      (M = M + T + A)),
                  (e.virtualSize += T + A),
                  (C = T),
                  (S += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, r) + b),
              o &&
                l &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                (a.style.width = `${e.virtualSize + A}px`),
              i.setWrapperSize &&
                (a.style[t("width")] = `${e.virtualSize + A}px`),
              I && e.grid.updateWrapperSize(T, h, t),
              !i.centeredSlides)
            ) {
              const t = [];
              for (let n = 0; n < h.length; n += 1) {
                let a = h[n];
                i.roundLengths && (a = Math.floor(a)),
                  h[n] <= e.virtualSize - r && t.push(a);
              }
              (h = t),
                Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) >
                  1 && h.push(e.virtualSize - r);
            }
            if (d && i.loop) {
              const t = f[0] + A;
              if (i.slidesPerGroup > 1) {
                const n = Math.ceil(
                    (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                      i.slidesPerGroup
                  ),
                  a = t * i.slidesPerGroup;
                for (let e = 0; e < n; e += 1) h.push(h[h.length - 1] + a);
              }
              for (
                let n = 0;
                n < e.virtual.slidesBefore + e.virtual.slidesAfter;
                n += 1
              )
                1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
                  m.push(m[m.length - 1] + t),
                  (e.virtualSize += t);
            }
            if ((0 === h.length && (h = [0]), 0 !== A)) {
              const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              p.filter(
                (e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1
              ).forEach((e) => {
                e.style[n] = `${A}px`;
              });
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let e = 0;
              f.forEach((t) => {
                e += t + (A || 0);
              }),
                (e -= A);
              const t = e - r;
              h = h.map((e) => (e <= 0 ? -v : e > t ? t + b : e));
            }
            if (i.centerInsufficientSlides) {
              let e = 0;
              if (
                (f.forEach((t) => {
                  e += t + (A || 0);
                }),
                (e -= A),
                e < r)
              ) {
                const t = (r - e) / 2;
                h.forEach((e, n) => {
                  h[n] = e - t;
                }),
                  m.forEach((e, n) => {
                    m[n] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: p,
                snapGrid: h,
                slidesGrid: m,
                slidesSizesGrid: f,
              }),
              i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
            ) {
              g(a, "--swiper-centered-offset-before", -h[0] + "px"),
                g(
                  a,
                  "--swiper-centered-offset-after",
                  e.size / 2 - f[f.length - 1] / 2 + "px"
                );
              const t = -e.snapGrid[0],
                n = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + n));
            }
            if (
              (u !== c && e.emit("slidesLengthChange"),
              h.length !== y &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              m.length !== _ && e.emit("slidesGridLengthChange"),
              i.watchSlidesProgress && e.updateSlidesOffset(),
              !(
                d ||
                i.cssMode ||
                ("slide" !== i.effect && "fade" !== i.effect)
              ))
            ) {
              const t = `${i.containerModifierClass}backface-hidden`,
                n = e.el.classList.contains(t);
              u <= i.maxBackfaceHiddenSlides
                ? n || e.el.classList.add(t)
                : n && e.el.classList.remove(t);
            }
          },
          updateAutoHeight: function (e) {
            const t = this,
              n = [],
              i = t.virtual && t.params.virtual.enabled;
            let a,
              s = 0;
            "number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed);
            const r = (e) =>
              i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                (t.visibleSlides || []).forEach((e) => {
                  n.push(e);
                });
              else
                for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                  const e = t.activeIndex + a;
                  if (e > t.slides.length && !i) break;
                  n.push(r(e));
                }
            else n.push(r(t.activeIndex));
            for (a = 0; a < n.length; a += 1)
              if (void 0 !== n[a]) {
                const e = n[a].offsetHeight;
                s = e > s ? e : s;
              }
            (s || 0 === s) && (t.wrapperEl.style.height = `${s}px`);
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides,
              n = e.isElement
                ? e.isHorizontal()
                  ? e.wrapperEl.offsetLeft
                  : e.wrapperEl.offsetTop
                : 0;
            for (let i = 0; i < t.length; i += 1)
              t[i].swiperSlideOffset =
                (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
                n -
                e.cssOverflowAdjustment();
          },
          updateSlidesProgress: function (e = (this && this.translate) || 0) {
            const t = this,
              n = t.params,
              { slides: i, rtlTranslate: a, snapGrid: s } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let r = -e;
            a && (r = e),
              i.forEach((e) => {
                e.classList.remove(n.slideVisibleClass);
              }),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            let o = n.spaceBetween;
            "string" == typeof o && o.indexOf("%") >= 0
              ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
              : "string" == typeof o && (o = parseFloat(o));
            for (let e = 0; e < i.length; e += 1) {
              const l = i[e];
              let d = l.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (d -= i[0].swiperSlideOffset);
              const c =
                  (r + (n.centeredSlides ? t.minTranslate() : 0) - d) /
                  (l.swiperSlideSize + o),
                p =
                  (r - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - d) /
                  (l.swiperSlideSize + o),
                u = -(r - d),
                h = u + t.slidesSizesGrid[e];
              ((u >= 0 && u < t.size - 1) ||
                (h > 1 && h <= t.size) ||
                (u <= 0 && h >= t.size)) &&
                (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(e),
                i[e].classList.add(n.slideVisibleClass)),
                (l.progress = a ? -c : c),
                (l.originalProgress = a ? -p : p);
            }
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const n = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * n) || 0;
            }
            const n = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let { progress: a, isBeginning: s, isEnd: r, progressLoop: o } = t;
            const l = s,
              d = r;
            if (0 === i) (a = 0), (s = !0), (r = !0);
            else {
              a = (e - t.minTranslate()) / i;
              const n = Math.abs(e - t.minTranslate()) < 1,
                o = Math.abs(e - t.maxTranslate()) < 1;
              (s = n || a <= 0), (r = o || a >= 1), n && (a = 0), o && (a = 1);
            }
            if (n.loop) {
              const n = t.getSlideIndexByData(0),
                i = t.getSlideIndexByData(t.slides.length - 1),
                a = t.slidesGrid[n],
                s = t.slidesGrid[i],
                r = t.slidesGrid[t.slidesGrid.length - 1],
                l = Math.abs(e);
              (o = l >= a ? (l - a) / r : (l + r - s) / r), o > 1 && (o -= 1);
            }
            Object.assign(t, {
              progress: a,
              progressLoop: o,
              isBeginning: s,
              isEnd: r,
            }),
              (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
                t.updateSlidesProgress(e),
              s && !l && t.emit("reachBeginning toEdge"),
              r && !d && t.emit("reachEnd toEdge"),
              ((l && !s) || (d && !r)) && t.emit("fromEdge"),
              t.emit("progress", a);
          },
          updateSlidesClasses: function () {
            const e = this,
              { slides: t, params: n, slidesEl: i, activeIndex: a } = e,
              s = e.virtual && n.virtual.enabled,
              r = (e) => w(i, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
            let o;
            if (
              (t.forEach((e) => {
                e.classList.remove(
                  n.slideActiveClass,
                  n.slideNextClass,
                  n.slidePrevClass
                );
              }),
              s)
            )
              if (n.loop) {
                let t = a - e.virtual.slidesBefore;
                t < 0 && (t = e.virtual.slides.length + t),
                  t >= e.virtual.slides.length &&
                    (t -= e.virtual.slides.length),
                  (o = r(`[data-swiper-slide-index="${t}"]`));
              } else o = r(`[data-swiper-slide-index="${a}"]`);
            else o = t[a];
            if (o) {
              o.classList.add(n.slideActiveClass);
              let e = (function (e, t) {
                const n = [];
                for (; e.nextElementSibling; ) {
                  const i = e.nextElementSibling;
                  t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
                }
                return n;
              })(o, `.${n.slideClass}, swiper-slide`)[0];
              n.loop && !e && (e = t[0]),
                e && e.classList.add(n.slideNextClass);
              let i = (function (e, t) {
                const n = [];
                for (; e.previousElementSibling; ) {
                  const i = e.previousElementSibling;
                  t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
                }
                return n;
              })(o, `.${n.slideClass}, swiper-slide`)[0];
              n.loop && 0 === !i && (i = t[t.length - 1]),
                i && i.classList.add(n.slidePrevClass);
            }
            e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              {
                snapGrid: i,
                params: a,
                activeIndex: s,
                realIndex: r,
                snapIndex: o,
              } = t;
            let l,
              d = e;
            const c = (e) => {
              let n = e - t.virtual.slidesBefore;
              return (
                n < 0 && (n = t.virtual.slides.length + n),
                n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
                n
              );
            };
            if (
              (void 0 === d &&
                (d = (function (e) {
                  const { slidesGrid: t, params: n } = e,
                    i = e.rtlTranslate ? e.translate : -e.translate;
                  let a;
                  for (let e = 0; e < t.length; e += 1)
                    void 0 !== t[e + 1]
                      ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                        ? (a = e)
                        : i >= t[e] && i < t[e + 1] && (a = e + 1)
                      : i >= t[e] && (a = e);
                  return (
                    n.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0),
                    a
                  );
                })(t)),
              i.indexOf(n) >= 0)
            )
              l = i.indexOf(n);
            else {
              const e = Math.min(a.slidesPerGroupSkip, d);
              l = e + Math.floor((d - e) / a.slidesPerGroup);
            }
            if ((l >= i.length && (l = i.length - 1), d === s))
              return (
                l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
                void (
                  t.params.loop &&
                  t.virtual &&
                  t.params.virtual.enabled &&
                  (t.realIndex = c(d))
                )
              );
            let p;
            (p =
              t.virtual && a.virtual.enabled && a.loop
                ? c(d)
                : t.slides[d]
                ? parseInt(
                    t.slides[d].getAttribute("data-swiper-slide-index") || d,
                    10
                  )
                : d),
              Object.assign(t, {
                previousSnapIndex: o,
                snapIndex: l,
                previousRealIndex: r,
                realIndex: p,
                previousIndex: s,
                activeIndex: d,
              }),
              t.initialized && N(t),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              r !== p && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              n = t.params,
              i = e.closest(`.${n.slideClass}, swiper-slide`);
            let a,
              s = !1;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  (s = !0), (a = e);
                  break;
                }
            if (!i || !s)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    i.getAttribute("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = a),
              n.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        };
        const O = {
          getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
            const {
              params: t,
              rtlTranslate: n,
              translate: i,
              wrapperEl: a,
            } = this;
            if (t.virtualTranslate) return n ? -i : i;
            if (t.cssMode) return i;
            let s = u(a, e);
            return (s += this.cssOverflowAdjustment()), n && (s = -s), s || 0;
          },
          setTranslate: function (e, t) {
            const n = this,
              { rtlTranslate: i, params: a, wrapperEl: s, progress: r } = n;
            let o,
              l = 0,
              d = 0;
            n.isHorizontal() ? (l = i ? -e : e) : (d = e),
              a.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? l : d),
              a.cssMode
                ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    n.isHorizontal() ? -l : -d)
                : a.virtualTranslate ||
                  (n.isHorizontal()
                    ? (l -= n.cssOverflowAdjustment())
                    : (d -= n.cssOverflowAdjustment()),
                  (s.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
            const c = n.maxTranslate() - n.minTranslate();
            (o = 0 === c ? 0 : (e - n.minTranslate()) / c),
              o !== r && n.updateProgress(e),
              n.emit("setTranslate", n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            e = 0,
            t = this.params.speed,
            n = !0,
            i = !0,
            a
          ) {
            const s = this,
              { params: r, wrapperEl: o } = s;
            if (s.animating && r.preventInteractionOnTransition) return !1;
            const l = s.minTranslate(),
              d = s.maxTranslate();
            let c;
            if (
              ((c = i && e > l ? l : i && e < d ? d : e),
              s.updateProgress(c),
              r.cssMode)
            ) {
              const e = s.isHorizontal();
              if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
              else {
                if (!s.support.smoothScroll)
                  return (
                    f({
                      swiper: s,
                      targetPosition: -c,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (s.setTransition(0),
                  s.setTranslate(c),
                  n &&
                    (s.emit("beforeTransitionStart", t, a),
                    s.emit("transitionEnd")))
                : (s.setTransition(t),
                  s.setTranslate(c),
                  n &&
                    (s.emit("beforeTransitionStart", t, a),
                    s.emit("transitionStart")),
                  s.animating ||
                    ((s.animating = !0),
                    s.onTranslateToWrapperTransitionEnd ||
                      (s.onTranslateToWrapperTransitionEnd = function (e) {
                        s &&
                          !s.destroyed &&
                          e.target === this &&
                          (s.wrapperEl.removeEventListener(
                            "transitionend",
                            s.onTranslateToWrapperTransitionEnd
                          ),
                          (s.onTranslateToWrapperTransitionEnd = null),
                          delete s.onTranslateToWrapperTransitionEnd,
                          n && s.emit("transitionEnd"));
                      }),
                    s.wrapperEl.addEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        };
        function j({ swiper: e, runCallbacks: t, direction: n, step: i }) {
          const { activeIndex: a, previousIndex: s } = e;
          let r = n;
          if (
            (r || (r = a > s ? "next" : a < s ? "prev" : "reset"),
            e.emit(`transition${i}`),
            t && a !== s)
          ) {
            if ("reset" === r) return void e.emit(`slideResetTransition${i}`);
            e.emit(`slideChangeTransition${i}`),
              "next" === r
                ? e.emit(`slideNextTransition${i}`)
                : e.emit(`slidePrevTransition${i}`);
          }
        }
        const B = {
          slideTo: function (e = 0, t = this.params.speed, n = !0, i, a) {
            "string" == typeof e && (e = parseInt(e, 10));
            const s = this;
            let r = e;
            r < 0 && (r = 0);
            const {
              params: o,
              snapGrid: l,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: p,
              rtlTranslate: u,
              wrapperEl: h,
              enabled: m,
            } = s;
            if (
              (s.animating && o.preventInteractionOnTransition) ||
              (!m && !i && !a)
            )
              return !1;
            const g = Math.min(s.params.slidesPerGroupSkip, r);
            let v = g + Math.floor((r - g) / s.params.slidesPerGroup);
            v >= l.length && (v = l.length - 1);
            const w = -l[v];
            if (o.normalizeSlideIndex)
              for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * w),
                  n = Math.floor(100 * d[e]),
                  i = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1]
                  ? t >= n && t < i - (i - n) / 2
                    ? (r = e)
                    : t >= n && t < i && (r = e + 1)
                  : t >= n && (r = e);
              }
            if (s.initialized && r !== p) {
              if (
                !s.allowSlideNext &&
                (u
                  ? w > s.translate && w > s.minTranslate()
                  : w < s.translate && w < s.minTranslate())
              )
                return !1;
              if (
                !s.allowSlidePrev &&
                w > s.translate &&
                w > s.maxTranslate() &&
                (p || 0) !== r
              )
                return !1;
            }
            let b;
            if (
              (r !== (c || 0) && n && s.emit("beforeSlideChangeStart"),
              s.updateProgress(w),
              (b = r > p ? "next" : r < p ? "prev" : "reset"),
              (u && -w === s.translate) || (!u && w === s.translate))
            )
              return (
                s.updateActiveIndex(r),
                o.autoHeight && s.updateAutoHeight(),
                s.updateSlidesClasses(),
                "slide" !== o.effect && s.setTranslate(w),
                "reset" !== b &&
                  (s.transitionStart(n, b), s.transitionEnd(n, b)),
                !1
              );
            if (o.cssMode) {
              const e = s.isHorizontal(),
                n = u ? w : -w;
              if (0 === t) {
                const t = s.virtual && s.params.virtual.enabled;
                t &&
                  ((s.wrapperEl.style.scrollSnapType = "none"),
                  (s._immediateVirtual = !0)),
                  t && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
                    ? ((s._cssModeVirtualInitialSet = !0),
                      requestAnimationFrame(() => {
                        h[e ? "scrollLeft" : "scrollTop"] = n;
                      }))
                    : (h[e ? "scrollLeft" : "scrollTop"] = n),
                  t &&
                    requestAnimationFrame(() => {
                      (s.wrapperEl.style.scrollSnapType = ""),
                        (s._immediateVirtual = !1);
                    });
              } else {
                if (!s.support.smoothScroll)
                  return (
                    f({
                      swiper: s,
                      targetPosition: n,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                h.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
              }
              return !0;
            }
            return (
              s.setTransition(t),
              s.setTranslate(w),
              s.updateActiveIndex(r),
              s.updateSlidesClasses(),
              s.emit("beforeTransitionStart", t, i),
              s.transitionStart(n, b),
              0 === t
                ? s.transitionEnd(n, b)
                : s.animating ||
                  ((s.animating = !0),
                  s.onSlideToWrapperTransitionEnd ||
                    (s.onSlideToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.wrapperEl.removeEventListener(
                          "transitionend",
                          s.onSlideToWrapperTransitionEnd
                        ),
                        (s.onSlideToWrapperTransitionEnd = null),
                        delete s.onSlideToWrapperTransitionEnd,
                        s.transitionEnd(n, b));
                    }),
                  s.wrapperEl.addEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
            if ("string" == typeof e) {
              e = parseInt(e, 10);
            }
            const a = this;
            let s = e;
            return (
              a.params.loop &&
                (a.virtual && a.params.virtual.enabled
                  ? (s += a.virtual.slidesBefore)
                  : (s = a.getSlideIndexByData(s))),
              a.slideTo(s, t, n, i)
            );
          },
          slideNext: function (e = this.params.speed, t = !0, n) {
            const i = this,
              { enabled: a, params: s, animating: r } = i;
            if (!a) return i;
            let o = s.slidesPerGroup;
            "auto" === s.slidesPerView &&
              1 === s.slidesPerGroup &&
              s.slidesPerGroupAuto &&
              (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
              d = i.virtual && s.virtual.enabled;
            if (s.loop) {
              if (r && !d && s.loopPreventsSliding) return !1;
              i.loopFix({ direction: "next" }),
                (i._clientLeft = i.wrapperEl.clientLeft);
            }
            return s.rewind && i.isEnd
              ? i.slideTo(0, e, t, n)
              : i.slideTo(i.activeIndex + l, e, t, n);
          },
          slidePrev: function (e = this.params.speed, t = !0, n) {
            const i = this,
              {
                params: a,
                snapGrid: s,
                slidesGrid: r,
                rtlTranslate: o,
                enabled: l,
                animating: d,
              } = i;
            if (!l) return i;
            const c = i.virtual && a.virtual.enabled;
            if (a.loop) {
              if (d && !c && a.loopPreventsSliding) return !1;
              i.loopFix({ direction: "prev" }),
                (i._clientLeft = i.wrapperEl.clientLeft);
            }
            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const u = p(o ? i.translate : -i.translate),
              h = s.map((e) => p(e));
            let m = s[h.indexOf(u) - 1];
            if (void 0 === m && a.cssMode) {
              let e;
              s.forEach((t, n) => {
                u >= t && (e = n);
              }),
                void 0 !== e && (m = s[e > 0 ? e - 1 : e]);
            }
            let g = 0;
            if (
              (void 0 !== m &&
                ((g = r.indexOf(m)),
                g < 0 && (g = i.activeIndex - 1),
                "auto" === a.slidesPerView &&
                  1 === a.slidesPerGroup &&
                  a.slidesPerGroupAuto &&
                  ((g = g - i.slidesPerViewDynamic("previous", !0) + 1),
                  (g = Math.max(g, 0)))),
              a.rewind && i.isBeginning)
            ) {
              const a =
                i.params.virtual && i.params.virtual.enabled && i.virtual
                  ? i.virtual.slides.length - 1
                  : i.slides.length - 1;
              return i.slideTo(a, e, t, n);
            }
            return i.slideTo(g, e, t, n);
          },
          slideReset: function (e = this.params.speed, t = !0, n) {
            return this.slideTo(this.activeIndex, e, t, n);
          },
          slideToClosest: function (e = this.params.speed, t = !0, n, i = 0.5) {
            const a = this;
            let s = a.activeIndex;
            const r = Math.min(a.params.slidesPerGroupSkip, s),
              o = r + Math.floor((s - r) / a.params.slidesPerGroup),
              l = a.rtlTranslate ? a.translate : -a.translate;
            if (l >= a.snapGrid[o]) {
              const e = a.snapGrid[o];
              l - e > (a.snapGrid[o + 1] - e) * i &&
                (s += a.params.slidesPerGroup);
            } else {
              const e = a.snapGrid[o - 1];
              l - e <= (a.snapGrid[o] - e) * i &&
                (s -= a.params.slidesPerGroup);
            }
            return (
              (s = Math.max(s, 0)),
              (s = Math.min(s, a.slidesGrid.length - 1)),
              a.slideTo(s, e, t, n)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, slidesEl: n } = e,
              i =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let a,
              s = e.clickedIndex;
            const r = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              (a = parseInt(
                e.clickedSlide.getAttribute("data-swiper-slide-index"),
                10
              )),
                t.centeredSlides
                  ? s < e.loopedSlides - i / 2 ||
                    s > e.slides.length - e.loopedSlides + i / 2
                    ? (e.loopFix(),
                      (s = e.getSlideIndex(
                        w(n, `${r}[data-swiper-slide-index="${a}"]`)[0]
                      )),
                      c(() => {
                        e.slideTo(s);
                      }))
                    : e.slideTo(s)
                  : s > e.slides.length - i
                  ? (e.loopFix(),
                    (s = e.getSlideIndex(
                      w(n, `${r}[data-swiper-slide-index="${a}"]`)[0]
                    )),
                    c(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s);
            } else e.slideTo(s);
          },
        };
        const q = {
          loopCreate: function (e) {
            const t = this,
              { params: n, slidesEl: i } = t;
            if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
            w(i, `.${n.slideClass}, swiper-slide`).forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t);
            }),
              t.loopFix({
                slideRealIndex: e,
                direction: n.centeredSlides ? void 0 : "next",
              });
          },
          loopFix: function ({
            slideRealIndex: e,
            slideTo: t = !0,
            direction: n,
            setTranslate: i,
            activeSlideIndex: a,
            byController: s,
            byMousewheel: r,
          } = {}) {
            const o = this;
            if (!o.params.loop) return;
            o.emit("beforeLoopFix");
            const {
              slides: l,
              allowSlidePrev: d,
              allowSlideNext: c,
              slidesEl: p,
              params: u,
            } = o;
            if (
              ((o.allowSlidePrev = !0),
              (o.allowSlideNext = !0),
              o.virtual && u.virtual.enabled)
            )
              return (
                t &&
                  (u.centeredSlides || 0 !== o.snapIndex
                    ? u.centeredSlides && o.snapIndex < u.slidesPerView
                      ? o.slideTo(
                          o.virtual.slides.length + o.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : o.snapIndex === o.snapGrid.length - 1 &&
                        o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                    : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
                (o.allowSlidePrev = d),
                (o.allowSlideNext = c),
                void o.emit("loopFix")
              );
            const h =
              "auto" === u.slidesPerView
                ? o.slidesPerViewDynamic()
                : Math.ceil(parseFloat(u.slidesPerView, 10));
            let m = u.loopedSlides || h;
            m % u.slidesPerGroup != 0 &&
              (m += u.slidesPerGroup - (m % u.slidesPerGroup)),
              (o.loopedSlides = m);
            const g = [],
              f = [];
            let v = o.activeIndex;
            void 0 === a
              ? (a = o.getSlideIndex(
                  o.slides.filter((e) =>
                    e.classList.contains(u.slideActiveClass)
                  )[0]
                ))
              : (v = a);
            const w = "next" === n || !n,
              b = "prev" === n || !n;
            let y = 0,
              x = 0;
            if (a < m) {
              y = Math.max(m - a, u.slidesPerGroup);
              for (let e = 0; e < m - a; e += 1) {
                const t = e - Math.floor(e / l.length) * l.length;
                g.push(l.length - t - 1);
              }
            } else if (a > o.slides.length - 2 * m) {
              x = Math.max(a - (o.slides.length - 2 * m), u.slidesPerGroup);
              for (let e = 0; e < x; e += 1) {
                const t = e - Math.floor(e / l.length) * l.length;
                f.push(t);
              }
            }
            if (
              (b &&
                g.forEach((e) => {
                  (o.slides[e].swiperLoopMoveDOM = !0),
                    p.prepend(o.slides[e]),
                    (o.slides[e].swiperLoopMoveDOM = !1);
                }),
              w &&
                f.forEach((e) => {
                  (o.slides[e].swiperLoopMoveDOM = !0),
                    p.append(o.slides[e]),
                    (o.slides[e].swiperLoopMoveDOM = !1);
                }),
              o.recalcSlides(),
              "auto" === u.slidesPerView && o.updateSlides(),
              u.watchSlidesProgress && o.updateSlidesOffset(),
              t)
            )
              if (g.length > 0 && b)
                if (void 0 === e) {
                  const e = o.slidesGrid[v],
                    t = o.slidesGrid[v + y] - e;
                  r
                    ? o.setTranslate(o.translate - t)
                    : (o.slideTo(v + y, 0, !1, !0),
                      i &&
                        (o.touches[o.isHorizontal() ? "startX" : "startY"] +=
                          t));
                } else i && o.slideToLoop(e, 0, !1, !0);
              else if (f.length > 0 && w)
                if (void 0 === e) {
                  const e = o.slidesGrid[v],
                    t = o.slidesGrid[v - x] - e;
                  r
                    ? o.setTranslate(o.translate - t)
                    : (o.slideTo(v - x, 0, !1, !0),
                      i &&
                        (o.touches[o.isHorizontal() ? "startX" : "startY"] +=
                          t));
                } else o.slideToLoop(e, 0, !1, !0);
            if (
              ((o.allowSlidePrev = d),
              (o.allowSlideNext = c),
              o.controller && o.controller.control && !s)
            ) {
              const t = {
                slideRealIndex: e,
                slideTo: !1,
                direction: n,
                setTranslate: i,
                activeSlideIndex: a,
                byController: !0,
              };
              Array.isArray(o.controller.control)
                ? o.controller.control.forEach((e) => {
                    !e.destroyed && e.params.loop && e.loopFix(t);
                  })
                : o.controller.control instanceof o.constructor &&
                  o.controller.control.params.loop &&
                  o.controller.control.loopFix(t);
            }
            o.emit("loopFix");
          },
          loopDestroy: function () {
            const e = this,
              { params: t, slidesEl: n } = e;
            if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
            e.recalcSlides();
            const i = [];
            e.slides.forEach((e) => {
              const t =
                void 0 === e.swiperSlideIndex
                  ? 1 * e.getAttribute("data-swiper-slide-index")
                  : e.swiperSlideIndex;
              i[t] = e;
            }),
              e.slides.forEach((e) => {
                e.removeAttribute("data-swiper-slide-index");
              }),
              i.forEach((e) => {
                n.append(e);
              }),
              e.recalcSlides(),
              e.slideTo(e.realIndex, 0);
          },
        };
        function H(e) {
          const t = this,
            n = o(),
            i = d(),
            a = t.touchEventsData;
          a.evCache.push(e);
          const { params: s, touches: r, enabled: l } = t;
          if (!l) return;
          if (!s.simulateTouch && "mouse" === e.pointerType) return;
          if (t.animating && s.preventInteractionOnTransition) return;
          !t.animating && s.cssMode && s.loop && t.loopFix();
          let c = e;
          c.originalEvent && (c = c.originalEvent);
          let u = c.target;
          if ("wrapper" === s.touchEventsTarget && !t.wrapperEl.contains(u))
            return;
          if ("which" in c && 3 === c.which) return;
          if ("button" in c && c.button > 0) return;
          if (a.isTouched && a.isMoved) return;
          const h = !!s.noSwipingClass && "" !== s.noSwipingClass,
            m = e.composedPath ? e.composedPath() : e.path;
          h && c.target && c.target.shadowRoot && m && (u = m[0]);
          const g = s.noSwipingSelector
              ? s.noSwipingSelector
              : `.${s.noSwipingClass}`,
            f = !(!c.target || !c.target.shadowRoot);
          if (
            s.noSwiping &&
            (f
              ? (function (e, t = this) {
                  return (function t(n) {
                    if (!n || n === o() || n === d()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const i = n.closest(e);
                    return i || n.getRootNode
                      ? i || t(n.getRootNode().host)
                      : null;
                  })(t);
                })(g, u)
              : u.closest(g))
          )
            return void (t.allowClick = !0);
          if (s.swipeHandler && !u.closest(s.swipeHandler)) return;
          (r.currentX = c.pageX), (r.currentY = c.pageY);
          const v = r.currentX,
            w = r.currentY,
            b = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
            y = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
          if (b && (v <= y || v >= i.innerWidth - y)) {
            if ("prevent" !== b) return;
            e.preventDefault();
          }
          Object.assign(a, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
            (r.startX = v),
            (r.startY = w),
            (a.touchStartTime = p()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            s.threshold > 0 && (a.allowThresholdMove = !1);
          let x = !0;
          u.matches(a.focusableElements) &&
            ((x = !1), "SELECT" === u.nodeName && (a.isTouched = !1)),
            n.activeElement &&
              n.activeElement.matches(a.focusableElements) &&
              n.activeElement !== u &&
              n.activeElement.blur();
          const _ = x && t.allowTouchMove && s.touchStartPreventDefault;
          (!s.touchStartForcePreventDefault && !_) ||
            u.isContentEditable ||
            c.preventDefault(),
            s.freeMode &&
              s.freeMode.enabled &&
              t.freeMode &&
              t.animating &&
              !s.cssMode &&
              t.freeMode.onTouchStart(),
            t.emit("touchStart", c);
        }
        function R(e) {
          const t = o(),
            n = this,
            i = n.touchEventsData,
            { params: a, touches: s, rtlTranslate: r, enabled: l } = n;
          if (!l) return;
          if (!a.simulateTouch && "mouse" === e.pointerType) return;
          let d = e;
          if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
            return void (
              i.startMoving &&
              i.isScrolling &&
              n.emit("touchMoveOpposite", d)
            );
          const c = i.evCache.findIndex((e) => e.pointerId === d.pointerId);
          c >= 0 && (i.evCache[c] = d);
          const u = i.evCache.length > 1 ? i.evCache[0] : d,
            h = u.pageX,
            m = u.pageY;
          if (d.preventedByNestedSwiper)
            return (s.startX = h), void (s.startY = m);
          if (!n.allowTouchMove)
            return (
              d.target.matches(i.focusableElements) || (n.allowClick = !1),
              void (
                i.isTouched &&
                (Object.assign(s, {
                  startX: h,
                  startY: m,
                  prevX: n.touches.currentX,
                  prevY: n.touches.currentY,
                  currentX: h,
                  currentY: m,
                }),
                (i.touchStartTime = p()))
              )
            );
          if (a.touchReleaseOnEdges && !a.loop)
            if (n.isVertical()) {
              if (
                (m < s.startY && n.translate <= n.maxTranslate()) ||
                (m > s.startY && n.translate >= n.minTranslate())
              )
                return (i.isTouched = !1), void (i.isMoved = !1);
            } else if (
              (h < s.startX && n.translate <= n.maxTranslate()) ||
              (h > s.startX && n.translate >= n.minTranslate())
            )
              return;
          if (
            t.activeElement &&
            d.target === t.activeElement &&
            d.target.matches(i.focusableElements)
          )
            return (i.isMoved = !0), void (n.allowClick = !1);
          if (
            (i.allowTouchCallbacks && n.emit("touchMove", d),
            d.targetTouches && d.targetTouches.length > 1)
          )
            return;
          (s.currentX = h), (s.currentY = m);
          const g = s.currentX - s.startX,
            f = s.currentY - s.startY;
          if (
            n.params.threshold &&
            Math.sqrt(g ** 2 + f ** 2) < n.params.threshold
          )
            return;
          if (void 0 === i.isScrolling) {
            let e;
            (n.isHorizontal() && s.currentY === s.startY) ||
            (n.isVertical() && s.currentX === s.startX)
              ? (i.isScrolling = !1)
              : g * g + f * f >= 25 &&
                ((e = (180 * Math.atan2(Math.abs(f), Math.abs(g))) / Math.PI),
                (i.isScrolling = n.isHorizontal()
                  ? e > a.touchAngle
                  : 90 - e > a.touchAngle));
          }
          if (
            (i.isScrolling && n.emit("touchMoveOpposite", d),
            void 0 === i.startMoving &&
              ((s.currentX === s.startX && s.currentY === s.startY) ||
                (i.startMoving = !0)),
            i.isScrolling ||
              (n.zoom &&
                n.params.zoom &&
                n.params.zoom.enabled &&
                i.evCache.length > 1))
          )
            return void (i.isTouched = !1);
          if (!i.startMoving) return;
          (n.allowClick = !1),
            !a.cssMode && d.cancelable && d.preventDefault(),
            a.touchMoveStopPropagation && !a.nested && d.stopPropagation();
          let v = n.isHorizontal() ? g : f,
            w = n.isHorizontal()
              ? s.currentX - s.previousX
              : s.currentY - s.previousY;
          a.oneWayMovement &&
            ((v = Math.abs(v) * (r ? 1 : -1)),
            (w = Math.abs(w) * (r ? 1 : -1))),
            (s.diff = v),
            (v *= a.touchRatio),
            r && ((v = -v), (w = -w));
          const b = n.touchesDirection;
          (n.swipeDirection = v > 0 ? "prev" : "next"),
            (n.touchesDirection = w > 0 ? "prev" : "next");
          const y = n.params.loop && !a.cssMode;
          if (!i.isMoved) {
            if (
              (y && n.loopFix({ direction: n.swipeDirection }),
              (i.startTranslate = n.getTranslate()),
              n.setTransition(0),
              n.animating)
            ) {
              const e = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
              });
              n.wrapperEl.dispatchEvent(e);
            }
            (i.allowMomentumBounce = !1),
              !a.grabCursor ||
                (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
                n.setGrabCursor(!0),
              n.emit("sliderFirstMove", d);
          }
          let x;
          i.isMoved &&
            b !== n.touchesDirection &&
            y &&
            Math.abs(v) >= 1 &&
            (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }),
            (x = !0)),
            n.emit("sliderMove", d),
            (i.isMoved = !0),
            (i.currentTranslate = v + i.startTranslate);
          let _ = !0,
            A = a.resistanceRatio;
          if (
            (a.touchReleaseOnEdges && (A = 0),
            v > 0
              ? (y &&
                  !x &&
                  i.currentTranslate >
                    (a.centeredSlides
                      ? n.minTranslate() - n.size / 2
                      : n.minTranslate()) &&
                  n.loopFix({
                    direction: "prev",
                    setTranslate: !0,
                    activeSlideIndex: 0,
                  }),
                i.currentTranslate > n.minTranslate() &&
                  ((_ = !1),
                  a.resistance &&
                    (i.currentTranslate =
                      n.minTranslate() -
                      1 +
                      (-n.minTranslate() + i.startTranslate + v) ** A)))
              : v < 0 &&
                (y &&
                  !x &&
                  i.currentTranslate <
                    (a.centeredSlides
                      ? n.maxTranslate() + n.size / 2
                      : n.maxTranslate()) &&
                  n.loopFix({
                    direction: "next",
                    setTranslate: !0,
                    activeSlideIndex:
                      n.slides.length -
                      ("auto" === a.slidesPerView
                        ? n.slidesPerViewDynamic()
                        : Math.ceil(parseFloat(a.slidesPerView, 10))),
                  }),
                i.currentTranslate < n.maxTranslate() &&
                  ((_ = !1),
                  a.resistance &&
                    (i.currentTranslate =
                      n.maxTranslate() +
                      1 -
                      (n.maxTranslate() - i.startTranslate - v) ** A))),
            _ && (d.preventedByNestedSwiper = !0),
            !n.allowSlideNext &&
              "next" === n.swipeDirection &&
              i.currentTranslate < i.startTranslate &&
              (i.currentTranslate = i.startTranslate),
            !n.allowSlidePrev &&
              "prev" === n.swipeDirection &&
              i.currentTranslate > i.startTranslate &&
              (i.currentTranslate = i.startTranslate),
            n.allowSlidePrev ||
              n.allowSlideNext ||
              (i.currentTranslate = i.startTranslate),
            a.threshold > 0)
          ) {
            if (!(Math.abs(v) > a.threshold || i.allowThresholdMove))
              return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
              return (
                (i.allowThresholdMove = !0),
                (s.startX = s.currentX),
                (s.startY = s.currentY),
                (i.currentTranslate = i.startTranslate),
                void (s.diff = n.isHorizontal()
                  ? s.currentX - s.startX
                  : s.currentY - s.startY)
              );
          }
          a.followFinger &&
            !a.cssMode &&
            (((a.freeMode && a.freeMode.enabled && n.freeMode) ||
              a.watchSlidesProgress) &&
              (n.updateActiveIndex(), n.updateSlidesClasses()),
            a.freeMode &&
              a.freeMode.enabled &&
              n.freeMode &&
              n.freeMode.onTouchMove(),
            n.updateProgress(i.currentTranslate),
            n.setTranslate(i.currentTranslate));
        }
        function G(e) {
          const t = this,
            n = t.touchEventsData,
            i = n.evCache.findIndex((t) => t.pointerId === e.pointerId);
          if (
            (i >= 0 && n.evCache.splice(i, 1),
            ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
          ) {
            if (
              !(
                "pointercancel" === e.type &&
                (t.browser.isSafari || t.browser.isWebView)
              )
            )
              return;
          }
          const {
            params: a,
            touches: s,
            rtlTranslate: r,
            slidesGrid: o,
            enabled: l,
          } = t;
          if (!l) return;
          if (!a.simulateTouch && "mouse" === e.pointerType) return;
          let d = e;
          if (
            (d.originalEvent && (d = d.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", d),
            (n.allowTouchCallbacks = !1),
            !n.isTouched)
          )
            return (
              n.isMoved && a.grabCursor && t.setGrabCursor(!1),
              (n.isMoved = !1),
              void (n.startMoving = !1)
            );
          a.grabCursor &&
            n.isMoved &&
            n.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          const u = p(),
            h = u - n.touchStartTime;
          if (t.allowClick) {
            const e = d.path || (d.composedPath && d.composedPath());
            t.updateClickedSlide((e && e[0]) || d.target),
              t.emit("tap click", d),
              h < 300 &&
                u - n.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", d);
          }
          if (
            ((n.lastClickTime = p()),
            c(() => {
              t.destroyed || (t.allowClick = !0);
            }),
            !n.isTouched ||
              !n.isMoved ||
              !t.swipeDirection ||
              0 === s.diff ||
              n.currentTranslate === n.startTranslate)
          )
            return (
              (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
            );
          let m;
          if (
            ((n.isTouched = !1),
            (n.isMoved = !1),
            (n.startMoving = !1),
            (m = a.followFinger
              ? r
                ? t.translate
                : -t.translate
              : -n.currentTranslate),
            a.cssMode)
          )
            return;
          if (a.freeMode && a.freeMode.enabled)
            return void t.freeMode.onTouchEnd({ currentPos: m });
          let g = 0,
            f = t.slidesSizesGrid[0];
          for (
            let e = 0;
            e < o.length;
            e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
          ) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== o[e + t]
              ? m >= o[e] && m < o[e + t] && ((g = e), (f = o[e + t] - o[e]))
              : m >= o[e] && ((g = e), (f = o[o.length - 1] - o[o.length - 2]));
          }
          let v = null,
            w = null;
          a.rewind &&
            (t.isBeginning
              ? (w =
                  a.virtual && a.virtual.enabled && t.virtual
                    ? t.virtual.slides.length - 1
                    : t.slides.length - 1)
              : t.isEnd && (v = 0));
          const b = (m - o[g]) / f,
            y = g < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          if (h > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (b >= a.longSwipesRatio
                ? t.slideTo(a.rewind && t.isEnd ? v : g + y)
                : t.slideTo(g)),
              "prev" === t.swipeDirection &&
                (b > 1 - a.longSwipesRatio
                  ? t.slideTo(g + y)
                  : null !== w && b < 0 && Math.abs(b) > a.longSwipesRatio
                  ? t.slideTo(w)
                  : t.slideTo(g));
          } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation &&
            (d.target === t.navigation.nextEl ||
              d.target === t.navigation.prevEl)
              ? d.target === t.navigation.nextEl
                ? t.slideTo(g + y)
                : t.slideTo(g)
              : ("next" === t.swipeDirection &&
                  t.slideTo(null !== v ? v : g + y),
                "prev" === t.swipeDirection && t.slideTo(null !== w ? w : g));
          }
        }
        function Y() {
          const e = this,
            { params: t, el: n } = e;
          if (n && 0 === n.offsetWidth) return;
          t.breakpoints && e.setBreakpoint();
          const { allowSlideNext: i, allowSlidePrev: a, snapGrid: s } = e,
            r = e.virtual && e.params.virtual.enabled;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses();
          const o = r && t.loop;
          !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
          !e.isEnd ||
          e.isBeginning ||
          e.params.centeredSlides ||
          o
            ? e.params.loop && !r
              ? e.slideToLoop(e.realIndex, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0)
            : e.slideTo(e.slides.length - 1, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              (clearTimeout(e.autoplay.resizeTimeout),
              (e.autoplay.resizeTimeout = setTimeout(() => {
                e.autoplay &&
                  e.autoplay.running &&
                  e.autoplay.paused &&
                  e.autoplay.resume();
              }, 500))),
            (e.allowSlidePrev = a),
            (e.allowSlideNext = i),
            e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
        }
        function V(e) {
          const t = this;
          t.enabled &&
            (t.allowClick ||
              (t.params.preventClicks && e.preventDefault(),
              t.params.preventClicksPropagation &&
                t.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation())));
        }
        function U() {
          const e = this,
            { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
          if (!i) return;
          let a;
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          const s = e.maxTranslate() - e.minTranslate();
          (a = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
            a !== e.progress &&
              e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
        function F(e) {
          const t = this;
          D(t, e.target),
            t.params.cssMode ||
              ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
              t.update();
        }
        let Z = !1;
        function W() {}
        const X = (e, t) => {
          const n = o(),
            { params: i, el: a, wrapperEl: s, device: r } = e,
            l = !!i.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          a[d]("pointerdown", e.onTouchStart, { passive: !1 }),
            n[d]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
            n[d]("pointerup", e.onTouchEnd, { passive: !0 }),
            n[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
            n[d]("pointerout", e.onTouchEnd, { passive: !0 }),
            n[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
            (i.preventClicks || i.preventClicksPropagation) &&
              a[d]("click", e.onClick, !0),
            i.cssMode && s[d]("scroll", e.onScroll),
            i.updateOnWindowResize
              ? e[c](
                  r.ios || r.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  Y,
                  !0
                )
              : e[c]("observerUpdate", Y, !0),
            a[d]("load", e.onLoad, { capture: !0 });
        };
        const Q = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        const J = {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: n, params: i, el: a } = e,
              s = i.breakpoints;
            if (!s || (s && 0 === Object.keys(s).length)) return;
            const r = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
            if (!r || e.currentBreakpoint === r) return;
            const o = (r in s ? s[r] : void 0) || e.originalParams,
              l = Q(e, i),
              d = Q(e, o),
              c = i.enabled;
            l && !d
              ? (a.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !l &&
                d &&
                (a.classList.add(`${i.containerModifierClass}grid`),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === i.grid.fill)) &&
                  a.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === o[t]) return;
                const n = i[t] && i[t].enabled,
                  a = o[t] && o[t].enabled;
                n && !a && e[t].disable(), !n && a && e[t].enable();
              });
            const p = o.direction && o.direction !== i.direction,
              u = i.loop && (o.slidesPerView !== i.slidesPerView || p);
            p && n && e.changeDirection(), m(e.params, o);
            const h = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              c && !h ? e.disable() : !c && h && e.enable(),
              (e.currentBreakpoint = r),
              e.emit("_beforeBreakpoint", o),
              u && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t = "window", n) {
            if (!e || ("container" === t && !n)) return;
            let i = !1;
            const a = d(),
              s = "window" === t ? a.innerHeight : n.clientHeight,
              r = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: s * t, point: e };
                }
                return { value: e, point: e };
              });
            r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < r.length; e += 1) {
              const { point: s, value: o } = r[e];
              "window" === t
                ? a.matchMedia(`(min-width: ${o}px)`).matches && (i = s)
                : o <= n.clientWidth && (i = s);
            }
            return i || "max";
          },
        };
        const K = {
          init: !0,
          direction: "horizontal",
          oneWayMovement: !1,
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements:
            "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 5,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          loop: !1,
          loopedSlides: null,
          loopPreventsSliding: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideActiveClass: "swiper-slide-active",
          slideVisibleClass: "swiper-slide-visible",
          slideNextClass: "swiper-slide-next",
          slidePrevClass: "swiper-slide-prev",
          wrapperClass: "swiper-wrapper",
          lazyPreloaderClass: "swiper-lazy-preloader",
          lazyPreloadPrevNext: 0,
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
        function ee(e, t) {
          return function (n = {}) {
            const i = Object.keys(n)[0],
              a = n[i];
            "object" == typeof a && null !== a
              ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                  !0 === e[i] &&
                  (e[i] = { auto: !0 }),
                i in e && "enabled" in a
                  ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                    "object" != typeof e[i] ||
                      "enabled" in e[i] ||
                      (e[i].enabled = !0),
                    e[i] || (e[i] = { enabled: !1 }),
                    m(t, n))
                  : m(t, n))
              : m(t, n);
          };
        }
        const te = {
            eventsEmitter: z,
            update: $,
            translate: O,
            transition: {
              setTransition: function (e, t) {
                const n = this;
                n.params.cssMode ||
                  (n.wrapperEl.style.transitionDuration = `${e}ms`),
                  n.emit("setTransition", e, t);
              },
              transitionStart: function (e = !0, t) {
                const n = this,
                  { params: i } = n;
                i.cssMode ||
                  (i.autoHeight && n.updateAutoHeight(),
                  j({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "Start",
                  }));
              },
              transitionEnd: function (e = !0, t) {
                const n = this,
                  { params: i } = n;
                (n.animating = !1),
                  i.cssMode ||
                    (n.setTransition(0),
                    j({
                      swiper: n,
                      runCallbacks: e,
                      direction: t,
                      step: "End",
                    }));
              },
            },
            slide: B,
            loop: q,
            grabCursor: {
              setGrabCursor: function (e) {
                const t = this;
                if (
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
                  return;
                const n =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0),
                  (n.style.cursor = "move"),
                  (n.style.cursor = e ? "grabbing" : "grab"),
                  t.isElement &&
                    requestAnimationFrame(() => {
                      t.__preventObserver__ = !1;
                    });
              },
              unsetGrabCursor: function () {
                const e = this;
                (e.params.watchOverflow && e.isLocked) ||
                  e.params.cssMode ||
                  (e.isElement && (e.__preventObserver__ = !0),
                  (e[
                    "container" === e.params.touchEventsTarget
                      ? "el"
                      : "wrapperEl"
                  ].style.cursor = ""),
                  e.isElement &&
                    requestAnimationFrame(() => {
                      e.__preventObserver__ = !1;
                    }));
              },
            },
            events: {
              attachEvents: function () {
                const e = this,
                  t = o(),
                  { params: n } = e;
                (e.onTouchStart = H.bind(e)),
                  (e.onTouchMove = R.bind(e)),
                  (e.onTouchEnd = G.bind(e)),
                  n.cssMode && (e.onScroll = U.bind(e)),
                  (e.onClick = V.bind(e)),
                  (e.onLoad = F.bind(e)),
                  Z || (t.addEventListener("touchstart", W), (Z = !0)),
                  X(e, "on");
              },
              detachEvents: function () {
                X(this, "off");
              },
            },
            breakpoints: J,
            checkOverflow: {
              checkOverflow: function () {
                const e = this,
                  { isLocked: t, params: n } = e,
                  { slidesOffsetBefore: i } = n;
                if (i) {
                  const t = e.slides.length - 1,
                    n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                  e.isLocked = e.size > n;
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                  !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                  t && t !== e.isLocked && (e.isEnd = !1),
                  t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
              },
            },
            classes: {
              addClasses: function () {
                const e = this,
                  { classNames: t, params: n, rtl: i, el: a, device: s } = e,
                  r = (function (e, t) {
                    const n = [];
                    return (
                      e.forEach((e) => {
                        "object" == typeof e
                          ? Object.keys(e).forEach((i) => {
                              e[i] && n.push(t + i);
                            })
                          : "string" == typeof e && n.push(t + e);
                      }),
                      n
                    );
                  })(
                    [
                      "initialized",
                      n.direction,
                      { "free-mode": e.params.freeMode && n.freeMode.enabled },
                      { autoheight: n.autoHeight },
                      { rtl: i },
                      { grid: n.grid && n.grid.rows > 1 },
                      {
                        "grid-column":
                          n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                      },
                      { android: s.android },
                      { ios: s.ios },
                      { "css-mode": n.cssMode },
                      { centered: n.cssMode && n.centeredSlides },
                      { "watch-progress": n.watchSlidesProgress },
                    ],
                    n.containerModifierClass
                  );
                t.push(...r), a.classList.add(...t), e.emitContainerClasses();
              },
              removeClasses: function () {
                const { el: e, classNames: t } = this;
                e.classList.remove(...t), this.emitContainerClasses();
              },
            },
          },
          ne = {};
        class ie {
          constructor(...e) {
            let t, n;
            1 === e.length &&
            e[0].constructor &&
            "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
              ? (n = e[0])
              : ([t, n] = e),
              n || (n = {}),
              (n = m({}, n)),
              t && !n.el && (n.el = t);
            const i = o();
            if (
              n.el &&
              "string" == typeof n.el &&
              i.querySelectorAll(n.el).length > 1
            ) {
              const e = [];
              return (
                i.querySelectorAll(n.el).forEach((t) => {
                  const i = m({}, n, { el: t });
                  e.push(new ie(i));
                }),
                e
              );
            }
            const a = this;
            (a.__swiper__ = !0),
              (a.support = T()),
              (a.device = k({ userAgent: n.userAgent })),
              (a.browser = L()),
              (a.eventsListeners = {}),
              (a.eventsAnyListeners = []),
              (a.modules = [...a.__modules__]),
              n.modules &&
                Array.isArray(n.modules) &&
                a.modules.push(...n.modules);
            const s = {};
            a.modules.forEach((e) => {
              e({
                params: n,
                swiper: a,
                extendParams: ee(n, s),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a),
              });
            });
            const r = m({}, K, s);
            return (
              (a.params = m({}, r, ne, n)),
              (a.originalParams = m({}, a.params)),
              (a.passedParams = m({}, n)),
              a.params &&
                a.params.on &&
                Object.keys(a.params.on).forEach((e) => {
                  a.on(e, a.params.on[e]);
                }),
              a.params && a.params.onAny && a.onAny(a.params.onAny),
              Object.assign(a, {
                enabled: a.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === a.params.direction,
                isVertical: () => "vertical" === a.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                  return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: a.params.focusableElements,
                  lastClickTime: 0,
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  startMoving: void 0,
                  evCache: [],
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              a.emit("_swiper"),
              a.params.init && a.init(),
              a
            );
          }
          getSlideIndex(e) {
            const { slidesEl: t, params: n } = this,
              i = _(w(t, `.${n.slideClass}, swiper-slide`)[0]);
            return _(e) - i;
          }
          getSlideIndexByData(e) {
            return this.getSlideIndex(
              this.slides.filter(
                (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
              )[0]
            );
          }
          recalcSlides() {
            const { slidesEl: e, params: t } = this;
            this.slides = w(e, `.${t.slideClass}, swiper-slide`);
          }
          enable() {
            const e = this;
            e.enabled ||
              ((e.enabled = !0),
              e.params.grabCursor && e.setGrabCursor(),
              e.emit("enable"));
          }
          disable() {
            const e = this;
            e.enabled &&
              ((e.enabled = !1),
              e.params.grabCursor && e.unsetGrabCursor(),
              e.emit("disable"));
          }
          setProgress(e, t) {
            const n = this;
            e = Math.min(Math.max(e, 0), 1);
            const i = n.minTranslate(),
              a = (n.maxTranslate() - i) * e + i;
            n.translateTo(a, void 0 === t ? 0 : t),
              n.updateActiveIndex(),
              n.updateSlidesClasses();
          }
          emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className
              .split(" ")
              .filter(
                (t) =>
                  0 === t.indexOf("swiper") ||
                  0 === t.indexOf(e.params.containerModifierClass)
              );
            e.emit("_containerClasses", t.join(" "));
          }
          getSlideClasses(e) {
            const t = this;
            return t.destroyed
              ? ""
              : e.className
                  .split(" ")
                  .filter(
                    (e) =>
                      0 === e.indexOf("swiper-slide") ||
                      0 === e.indexOf(t.params.slideClass)
                  )
                  .join(" ");
          }
          emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.forEach((n) => {
              const i = e.getSlideClasses(n);
              t.push({ slideEl: n, classNames: i }),
                e.emit("_slideClass", n, i);
            }),
              e.emit("_slideClasses", t);
          }
          slidesPerViewDynamic(e = "current", t = !1) {
            const {
              params: n,
              slides: i,
              slidesGrid: a,
              slidesSizesGrid: s,
              size: r,
              activeIndex: o,
            } = this;
            let l = 1;
            if (n.centeredSlides) {
              let e,
                t = i[o] ? i[o].swiperSlideSize : 0;
              for (let n = o + 1; n < i.length; n += 1)
                i[n] &&
                  !e &&
                  ((t += i[n].swiperSlideSize), (l += 1), t > r && (e = !0));
              for (let n = o - 1; n >= 0; n -= 1)
                i[n] &&
                  !e &&
                  ((t += i[n].swiperSlideSize), (l += 1), t > r && (e = !0));
            } else if ("current" === e)
              for (let e = o + 1; e < i.length; e += 1) {
                (t ? a[e] + s[e] - a[o] < r : a[e] - a[o] < r) && (l += 1);
              }
            else
              for (let e = o - 1; e >= 0; e -= 1) {
                a[o] - a[e] < r && (l += 1);
              }
            return l;
          }
          update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t, params: n } = e;
            function i() {
              const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let a;
            if (
              (n.breakpoints && e.setBreakpoint(),
              [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
                t.complete && D(e, t);
              }),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              n.freeMode && n.freeMode.enabled && !n.cssMode)
            )
              i(), n.autoHeight && e.updateAutoHeight();
            else {
              if (
                ("auto" === n.slidesPerView || n.slidesPerView > 1) &&
                e.isEnd &&
                !n.centeredSlides
              ) {
                const t =
                  e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
                a = e.slideTo(t.length - 1, 0, !1, !0);
              } else a = e.slideTo(e.activeIndex, 0, !1, !0);
              a || i();
            }
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          changeDirection(e, t = !0) {
            const n = this,
              i = n.params.direction;
            return (
              e || (e = "horizontal" === i ? "vertical" : "horizontal"),
              e === i ||
                ("horizontal" !== e && "vertical" !== e) ||
                (n.el.classList.remove(
                  `${n.params.containerModifierClass}${i}`
                ),
                n.el.classList.add(`${n.params.containerModifierClass}${e}`),
                n.emitContainerClasses(),
                (n.params.direction = e),
                n.slides.forEach((t) => {
                  "vertical" === e
                    ? (t.style.width = "")
                    : (t.style.height = "");
                }),
                n.emit("changeDirection"),
                t && n.update()),
              n
            );
          }
          changeLanguageDirection(e) {
            const t = this;
            (t.rtl && "rtl" === e) ||
              (!t.rtl && "ltr" === e) ||
              ((t.rtl = "rtl" === e),
              (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
              t.rtl
                ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                  (t.el.dir = "rtl"))
                : (t.el.classList.remove(
                    `${t.params.containerModifierClass}rtl`
                  ),
                  (t.el.dir = "ltr")),
              t.update());
          }
          mount(e) {
            const t = this;
            if (t.mounted) return !0;
            let n = e || t.params.el;
            if (("string" == typeof n && (n = document.querySelector(n)), !n))
              return !1;
            (n.swiper = t), n.shadowEl && (t.isElement = !0);
            const i = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let a = (() => {
              if (n && n.shadowRoot && n.shadowRoot.querySelector) {
                return n.shadowRoot.querySelector(i());
              }
              return w(n, i())[0];
            })();
            return (
              !a &&
                t.params.createElements &&
                ((a = b("div", t.params.wrapperClass)),
                n.append(a),
                w(n, `.${t.params.slideClass}`).forEach((e) => {
                  a.append(e);
                })),
              Object.assign(t, {
                el: n,
                wrapperEl: a,
                slidesEl: t.isElement ? n : a,
                mounted: !0,
                rtl:
                  "rtl" === n.dir.toLowerCase() || "rtl" === x(n, "direction"),
                rtlTranslate:
                  "horizontal" === t.params.direction &&
                  ("rtl" === n.dir.toLowerCase() ||
                    "rtl" === x(n, "direction")),
                wrongRTL: "-webkit-box" === x(a, "display"),
              }),
              !0
            );
          }
          init(e) {
            const t = this;
            if (t.initialized) return t;
            return (
              !1 === t.mount(e) ||
                (t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.loop && t.virtual && t.params.virtual.enabled
                  ? t.slideTo(
                      t.params.initialSlide + t.virtual.slidesBefore,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0
                    )
                  : t.slideTo(
                      t.params.initialSlide,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0
                    ),
                t.params.loop && t.loopCreate(),
                t.attachEvents(),
                [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
                  e.complete
                    ? D(t, e)
                    : e.addEventListener("load", (e) => {
                        D(t, e.target);
                      });
                }),
                N(t),
                (t.initialized = !0),
                N(t),
                t.emit("init"),
                t.emit("afterInit")),
              t
            );
          }
          destroy(e = !0, t = !0) {
            const n = this,
              { params: i, el: a, wrapperEl: s, slides: r } = n;
            return (
              void 0 === n.params ||
                n.destroyed ||
                (n.emit("beforeDestroy"),
                (n.initialized = !1),
                n.detachEvents(),
                i.loop && n.loopDestroy(),
                t &&
                  (n.removeClasses(),
                  a.removeAttribute("style"),
                  s.removeAttribute("style"),
                  r &&
                    r.length &&
                    r.forEach((e) => {
                      e.classList.remove(
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass
                      ),
                        e.removeAttribute("style"),
                        e.removeAttribute("data-swiper-slide-index");
                    })),
                n.emit("destroy"),
                Object.keys(n.eventsListeners).forEach((e) => {
                  n.off(e);
                }),
                !1 !== e &&
                  ((n.el.swiper = null),
                  (function (e) {
                    const t = e;
                    Object.keys(t).forEach((e) => {
                      try {
                        t[e] = null;
                      } catch (e) {}
                      try {
                        delete t[e];
                      } catch (e) {}
                    });
                  })(n)),
                (n.destroyed = !0)),
              null
            );
          }
          static extendDefaults(e) {
            m(ne, e);
          }
          static get extendedDefaults() {
            return ne;
          }
          static get defaults() {
            return K;
          }
          static installModule(e) {
            ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
            const t = ie.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
          }
          static use(e) {
            return Array.isArray(e)
              ? (e.forEach((e) => ie.installModule(e)), ie)
              : (ie.installModule(e), ie);
          }
        }
        Object.keys(te).forEach((e) => {
          Object.keys(te[e]).forEach((t) => {
            ie.prototype[t] = te[e][t];
          });
        }),
          ie.use([
            function ({ swiper: e, on: t, emit: n }) {
              const i = d();
              let a = null,
                s = null;
              const r = () => {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    (n("beforeResize"), n("resize"));
                },
                o = () => {
                  e && !e.destroyed && e.initialized && n("orientationchange");
                };
              t("init", () => {
                e.params.resizeObserver && void 0 !== i.ResizeObserver
                  ? e &&
                    !e.destroyed &&
                    e.initialized &&
                    ((a = new ResizeObserver((t) => {
                      s = i.requestAnimationFrame(() => {
                        const { width: n, height: i } = e;
                        let a = n,
                          s = i;
                        t.forEach(
                          ({
                            contentBoxSize: t,
                            contentRect: n,
                            target: i,
                          }) => {
                            (i && i !== e.el) ||
                              ((a = n ? n.width : (t[0] || t).inlineSize),
                              (s = n ? n.height : (t[0] || t).blockSize));
                          }
                        ),
                          (a === n && s === i) || r();
                      });
                    })),
                    a.observe(e.el))
                  : (i.addEventListener("resize", r),
                    i.addEventListener("orientationchange", o));
              }),
                t("destroy", () => {
                  s && i.cancelAnimationFrame(s),
                    a && a.unobserve && e.el && (a.unobserve(e.el), (a = null)),
                    i.removeEventListener("resize", r),
                    i.removeEventListener("orientationchange", o);
                });
            },
            function ({ swiper: e, extendParams: t, on: n, emit: i }) {
              const a = [],
                s = d(),
                r = (t, n = {}) => {
                  const r = new (s.MutationObserver ||
                    s.WebkitMutationObserver)((t) => {
                    if (e.__preventObserver__) return;
                    if (1 === t.length) return void i("observerUpdate", t[0]);
                    const n = function () {
                      i("observerUpdate", t[0]);
                    };
                    s.requestAnimationFrame
                      ? s.requestAnimationFrame(n)
                      : s.setTimeout(n, 0);
                  });
                  r.observe(t, {
                    attributes: void 0 === n.attributes || n.attributes,
                    childList: void 0 === n.childList || n.childList,
                    characterData:
                      void 0 === n.characterData || n.characterData,
                  }),
                    a.push(r);
                };
              t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                n("init", () => {
                  if (e.params.observer) {
                    if (e.params.observeParents) {
                      const t = A(e.el);
                      for (let e = 0; e < t.length; e += 1) r(t[e]);
                    }
                    r(e.el, { childList: e.params.observeSlideChildren }),
                      r(e.wrapperEl, { attributes: !1 });
                  }
                }),
                n("destroy", () => {
                  a.forEach((e) => {
                    e.disconnect();
                  }),
                    a.splice(0, a.length);
                });
            },
          ]);
        const ae = ie;
        function se(e, t, n, i) {
          return (
            e.params.createElements &&
              Object.keys(i).forEach((a) => {
                if (!n[a] && !0 === n.auto) {
                  let s = w(e.el, `.${i[a]}`)[0];
                  s ||
                    ((s = b("div", i[a])),
                    (s.className = i[a]),
                    e.el.append(s)),
                    (n[a] = s),
                    (t[a] = s);
                }
              }),
            n
          );
        }
        function re(e = "") {
          return `.${e
            .trim()
            .replace(/([\.:!+\/])/g, "\\$1")
            .replace(/ /g, ".")}`;
        }
        function oe(e) {
          const t = this,
            { params: n, slidesEl: i } = t;
          n.loop && t.loopDestroy();
          const a = (e) => {
            if ("string" == typeof e) {
              const t = document.createElement("div");
              (t.innerHTML = e), i.append(t.children[0]), (t.innerHTML = "");
            } else i.append(e);
          };
          if ("object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
          else a(e);
          t.recalcSlides(),
            n.loop && t.loopCreate(),
            (n.observer && !t.isElement) || t.update();
        }
        function le(e) {
          const t = this,
            { params: n, activeIndex: i, slidesEl: a } = t;
          n.loop && t.loopDestroy();
          let s = i + 1;
          const r = (e) => {
            if ("string" == typeof e) {
              const t = document.createElement("div");
              (t.innerHTML = e), a.prepend(t.children[0]), (t.innerHTML = "");
            } else a.prepend(e);
          };
          if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && r(e[t]);
            s = i + e.length;
          } else r(e);
          t.recalcSlides(),
            n.loop && t.loopCreate(),
            (n.observer && !t.isElement) || t.update(),
            t.slideTo(s, 0, !1);
        }
        function de(e, t) {
          const n = this,
            { params: i, activeIndex: a, slidesEl: s } = n;
          let r = a;
          i.loop && ((r -= n.loopedSlides), n.loopDestroy(), n.recalcSlides());
          const o = n.slides.length;
          if (e <= 0) return void n.prependSlide(t);
          if (e >= o) return void n.appendSlide(t);
          let l = r > e ? r + 1 : r;
          const d = [];
          for (let t = o - 1; t >= e; t -= 1) {
            const e = n.slides[t];
            e.remove(), d.unshift(e);
          }
          if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
            l = r > e ? r + t.length : r;
          } else s.append(t);
          for (let e = 0; e < d.length; e += 1) s.append(d[e]);
          n.recalcSlides(),
            i.loop && n.loopCreate(),
            (i.observer && !n.isElement) || n.update(),
            i.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1);
        }
        function ce(e) {
          const t = this,
            { params: n, activeIndex: i } = t;
          let a = i;
          n.loop && ((a -= t.loopedSlides), t.loopDestroy());
          let s,
            r = a;
          if ("object" == typeof e && "length" in e) {
            for (let n = 0; n < e.length; n += 1)
              (s = e[n]),
                t.slides[s] && t.slides[s].remove(),
                s < r && (r -= 1);
            r = Math.max(r, 0);
          } else
            (s = e),
              t.slides[s] && t.slides[s].remove(),
              s < r && (r -= 1),
              (r = Math.max(r, 0));
          t.recalcSlides(),
            n.loop && t.loopCreate(),
            (n.observer && !t.isElement) || t.update(),
            n.loop ? t.slideTo(r + t.loopedSlides, 0, !1) : t.slideTo(r, 0, !1);
        }
        function pe() {
          const e = this,
            t = [];
          for (let n = 0; n < e.slides.length; n += 1) t.push(n);
          e.removeSlide(t);
        }
        function ue(e) {
          const {
            effect: t,
            swiper: n,
            on: i,
            setTranslate: a,
            setTransition: s,
            overwriteParams: r,
            perspective: o,
            recreateShadows: l,
            getEffectParams: d,
          } = e;
          let c;
          i("beforeInit", () => {
            if (n.params.effect !== t) return;
            n.classNames.push(`${n.params.containerModifierClass}${t}`),
              o &&
                o() &&
                n.classNames.push(`${n.params.containerModifierClass}3d`);
            const e = r ? r() : {};
            Object.assign(n.params, e), Object.assign(n.originalParams, e);
          }),
            i("setTranslate", () => {
              n.params.effect === t && a();
            }),
            i("setTransition", (e, i) => {
              n.params.effect === t && s(i);
            }),
            i("transitionEnd", () => {
              if (n.params.effect === t && l) {
                if (!d || !d().slideShadows) return;
                n.slides.forEach((e) => {
                  e.querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  ).forEach((e) => e.remove());
                }),
                  l();
              }
            }),
            i("virtualUpdate", () => {
              n.params.effect === t &&
                (n.slides.length || (c = !0),
                requestAnimationFrame(() => {
                  c && n.slides && n.slides.length && (a(), (c = !1));
                }));
            });
        }
        function he(e, t) {
          const n = v(t);
          return (
            n !== t &&
              ((n.style.backfaceVisibility = "hidden"),
              (n.style["-webkit-backface-visibility"] = "hidden")),
            n
          );
        }
        function me({
          swiper: e,
          duration: t,
          transformElements: n,
          allSlides: i,
        }) {
          const { activeIndex: a } = e;
          if (e.params.virtualTranslate && 0 !== t) {
            let t,
              s = !1;
            (t = i
              ? n
              : n.filter((t) => {
                  const n = t.classList.contains("swiper-slide-transform")
                    ? ((t) => {
                        if (!t.parentElement)
                          return e.slides.filter(
                            (e) => e.shadowEl && e.shadowEl === t.parentNode
                          )[0];
                        return t.parentElement;
                      })(t)
                    : t;
                  return e.getSlideIndex(n) === a;
                })),
              t.forEach((t) => {
                M(t, () => {
                  if (s) return;
                  if (!e || e.destroyed) return;
                  (s = !0), (e.animating = !1);
                  const t = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                  });
                  e.wrapperEl.dispatchEvent(t);
                });
              });
          }
        }
        function ge(e, t, n) {
          const i = "swiper-slide-shadow" + (n ? `-${n}` : ""),
            a = v(t);
          let s = a.querySelector(`.${i}`);
          return (
            s ||
              ((s = b("div", "swiper-slide-shadow" + (n ? `-${n}` : ""))),
              a.append(s)),
            s
          );
        }
        const fe = [
          function ({ swiper: e, extendParams: t, on: n, emit: i }) {
            let a;
            t({
              virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0,
              },
            });
            const s = o();
            e.virtual = {
              cache: {},
              from: void 0,
              to: void 0,
              slides: [],
              offset: 0,
              slidesGrid: [],
            };
            const r = s.createElement("div");
            function l(t, n) {
              const i = e.params.virtual;
              if (i.cache && e.virtual.cache[n]) return e.virtual.cache[n];
              let a;
              return (
                i.renderSlide
                  ? ((a = i.renderSlide.call(e, t, n)),
                    "string" == typeof a &&
                      ((r.innerHTML = a), (a = r.children[0])))
                  : (a = e.isElement
                      ? b("swiper-slide")
                      : b("div", e.params.slideClass)),
                a.setAttribute("data-swiper-slide-index", n),
                i.renderSlide || (a.innerHTML = t),
                i.cache && (e.virtual.cache[n] = a),
                a
              );
            }
            function d(t) {
              const {
                  slidesPerView: n,
                  slidesPerGroup: a,
                  centeredSlides: s,
                  loop: r,
                } = e.params,
                { addSlidesBefore: o, addSlidesAfter: d } = e.params.virtual,
                {
                  from: c,
                  to: p,
                  slides: u,
                  slidesGrid: h,
                  offset: m,
                } = e.virtual;
              e.params.cssMode || e.updateActiveIndex();
              const g = e.activeIndex || 0;
              let f, v, b;
              (f = e.rtlTranslate
                ? "right"
                : e.isHorizontal()
                ? "left"
                : "top"),
                s
                  ? ((v = Math.floor(n / 2) + a + d),
                    (b = Math.floor(n / 2) + a + o))
                  : ((v = n + (a - 1) + d), (b = (r ? n : a) + o));
              let y = g - b,
                x = g + v;
              r || ((y = Math.max(y, 0)), (x = Math.min(x, u.length - 1)));
              let _ = (e.slidesGrid[y] || 0) - (e.slidesGrid[0] || 0);
              function A() {
                e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  i("virtualUpdate");
              }
              if (
                (r && g >= b
                  ? ((y -= b), s || (_ += e.slidesGrid[0]))
                  : r && g < b && ((y = -b), s && (_ += e.slidesGrid[0])),
                Object.assign(e.virtual, {
                  from: y,
                  to: x,
                  offset: _,
                  slidesGrid: e.slidesGrid,
                  slidesBefore: b,
                  slidesAfter: v,
                }),
                c === y && p === x && !t)
              )
                return (
                  e.slidesGrid !== h &&
                    _ !== m &&
                    e.slides.forEach((t) => {
                      t.style[f] =
                        _ - Math.abs(e.cssOverflowAdjustment()) + "px";
                    }),
                  e.updateProgress(),
                  void i("virtualUpdate")
                );
              if (e.params.virtual.renderExternal)
                return (
                  e.params.virtual.renderExternal.call(e, {
                    offset: _,
                    from: y,
                    to: x,
                    slides: (function () {
                      const e = [];
                      for (let t = y; t <= x; t += 1) e.push(u[t]);
                      return e;
                    })(),
                  }),
                  void (e.params.virtual.renderExternalUpdate
                    ? A()
                    : i("virtualUpdate"))
                );
              const M = [],
                E = [],
                C = (e) => {
                  let t = e;
                  return (
                    e < 0
                      ? (t = u.length + e)
                      : t >= u.length && (t -= u.length),
                    t
                  );
                };
              if (t)
                e.slidesEl
                  .querySelectorAll(`.${e.params.slideClass}, swiper-slide`)
                  .forEach((e) => {
                    e.remove();
                  });
              else
                for (let t = c; t <= p; t += 1)
                  if (t < y || t > x) {
                    const n = C(t);
                    e.slidesEl
                      .querySelectorAll(
                        `.${e.params.slideClass}[data-swiper-slide-index="${n}"], swiper-slide[data-swiper-slide-index="${n}"]`
                      )
                      .forEach((e) => {
                        e.remove();
                      });
                  }
              const S = r ? -u.length : 0,
                I = r ? 2 * u.length : u.length;
              for (let e = S; e < I; e += 1)
                if (e >= y && e <= x) {
                  const n = C(e);
                  void 0 === p || t
                    ? E.push(n)
                    : (e > p && E.push(n), e < c && M.push(n));
                }
              if (
                (E.forEach((t) => {
                  e.slidesEl.append(l(u[t], t));
                }),
                r)
              )
                for (let t = M.length - 1; t >= 0; t -= 1) {
                  const n = M[t];
                  e.slidesEl.prepend(l(u[n], n));
                }
              else
                M.sort((e, t) => t - e),
                  M.forEach((t) => {
                    e.slidesEl.prepend(l(u[t], t));
                  });
              w(e.slidesEl, ".swiper-slide, swiper-slide").forEach((t) => {
                t.style[f] = _ - Math.abs(e.cssOverflowAdjustment()) + "px";
              }),
                A();
            }
            n("beforeInit", () => {
              if (!e.params.virtual.enabled) return;
              let t;
              if (void 0 === e.passedParams.virtual.slides) {
                const n = [...e.slidesEl.children].filter((t) =>
                  t.matches(`.${e.params.slideClass}, swiper-slide`)
                );
                n &&
                  n.length &&
                  ((e.virtual.slides = [...n]),
                  (t = !0),
                  n.forEach((t, n) => {
                    t.setAttribute("data-swiper-slide-index", n),
                      (e.virtual.cache[n] = t),
                      t.remove();
                  }));
              }
              t || (e.virtual.slides = e.params.virtual.slides),
                e.classNames.push(`${e.params.containerModifierClass}virtual`),
                (e.params.watchSlidesProgress = !0),
                (e.originalParams.watchSlidesProgress = !0),
                e.params.initialSlide || d();
            }),
              n("setTranslate", () => {
                e.params.virtual.enabled &&
                  (e.params.cssMode && !e._immediateVirtual
                    ? (clearTimeout(a),
                      (a = setTimeout(() => {
                        d();
                      }, 100)))
                    : d());
              }),
              n("init update resize", () => {
                e.params.virtual.enabled &&
                  e.params.cssMode &&
                  g(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
              }),
              Object.assign(e.virtual, {
                appendSlide: function (t) {
                  if ("object" == typeof t && "length" in t)
                    for (let n = 0; n < t.length; n += 1)
                      t[n] && e.virtual.slides.push(t[n]);
                  else e.virtual.slides.push(t);
                  d(!0);
                },
                prependSlide: function (t) {
                  const n = e.activeIndex;
                  let i = n + 1,
                    a = 1;
                  if (Array.isArray(t)) {
                    for (let n = 0; n < t.length; n += 1)
                      t[n] && e.virtual.slides.unshift(t[n]);
                    (i = n + t.length), (a = t.length);
                  } else e.virtual.slides.unshift(t);
                  if (e.params.virtual.cache) {
                    const t = e.virtual.cache,
                      n = {};
                    Object.keys(t).forEach((e) => {
                      const i = t[e],
                        s = i.getAttribute("data-swiper-slide-index");
                      s &&
                        i.setAttribute(
                          "data-swiper-slide-index",
                          parseInt(s, 10) + a
                        ),
                        (n[parseInt(e, 10) + a] = i);
                    }),
                      (e.virtual.cache = n);
                  }
                  d(!0), e.slideTo(i, 0);
                },
                removeSlide: function (t) {
                  if (null == t) return;
                  let n = e.activeIndex;
                  if (Array.isArray(t))
                    for (let i = t.length - 1; i >= 0; i -= 1)
                      e.virtual.slides.splice(t[i], 1),
                        e.params.virtual.cache && delete e.virtual.cache[t[i]],
                        t[i] < n && (n -= 1),
                        (n = Math.max(n, 0));
                  else
                    e.virtual.slides.splice(t, 1),
                      e.params.virtual.cache && delete e.virtual.cache[t],
                      t < n && (n -= 1),
                      (n = Math.max(n, 0));
                  d(!0), e.slideTo(n, 0);
                },
                removeAllSlides: function () {
                  (e.virtual.slides = []),
                    e.params.virtual.cache && (e.virtual.cache = {}),
                    d(!0),
                    e.slideTo(0, 0);
                },
                update: d,
              });
          },
          function ({ swiper: e, extendParams: t, on: n, emit: i }) {
            const a = o(),
              s = d();
            function r(t) {
              if (!e.enabled) return;
              const { rtlTranslate: n } = e;
              let r = t;
              r.originalEvent && (r = r.originalEvent);
              const o = r.keyCode || r.charCode,
                l = e.params.keyboard.pageUpDown,
                d = l && 33 === o,
                c = l && 34 === o,
                p = 37 === o,
                u = 39 === o,
                h = 38 === o,
                m = 40 === o;
              if (
                !e.allowSlideNext &&
                ((e.isHorizontal() && u) || (e.isVertical() && m) || c)
              )
                return !1;
              if (
                !e.allowSlidePrev &&
                ((e.isHorizontal() && p) || (e.isVertical() && h) || d)
              )
                return !1;
              if (
                !(
                  r.shiftKey ||
                  r.altKey ||
                  r.ctrlKey ||
                  r.metaKey ||
                  (a.activeElement &&
                    a.activeElement.nodeName &&
                    ("input" === a.activeElement.nodeName.toLowerCase() ||
                      "textarea" === a.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (
                  e.params.keyboard.onlyInViewport &&
                  (d || c || p || u || h || m)
                ) {
                  let t = !1;
                  if (
                    A(e.el, `.${e.params.slideClass}, swiper-slide`).length >
                      0 &&
                    0 === A(e.el, `.${e.params.slideActiveClass}`).length
                  )
                    return;
                  const i = e.el,
                    a = i.clientWidth,
                    r = i.clientHeight,
                    o = s.innerWidth,
                    l = s.innerHeight,
                    d = y(i);
                  n && (d.left -= i.scrollLeft);
                  const c = [
                    [d.left, d.top],
                    [d.left + a, d.top],
                    [d.left, d.top + r],
                    [d.left + a, d.top + r],
                  ];
                  for (let e = 0; e < c.length; e += 1) {
                    const n = c[e];
                    if (n[0] >= 0 && n[0] <= o && n[1] >= 0 && n[1] <= l) {
                      if (0 === n[0] && 0 === n[1]) continue;
                      t = !0;
                    }
                  }
                  if (!t) return;
                }
                e.isHorizontal()
                  ? ((d || c || p || u) &&
                      (r.preventDefault
                        ? r.preventDefault()
                        : (r.returnValue = !1)),
                    (((c || u) && !n) || ((d || p) && n)) && e.slideNext(),
                    (((d || p) && !n) || ((c || u) && n)) && e.slidePrev())
                  : ((d || c || h || m) &&
                      (r.preventDefault
                        ? r.preventDefault()
                        : (r.returnValue = !1)),
                    (c || m) && e.slideNext(),
                    (d || h) && e.slidePrev()),
                  i("keyPress", o);
              }
            }
            function l() {
              e.keyboard.enabled ||
                (a.addEventListener("keydown", r), (e.keyboard.enabled = !0));
            }
            function c() {
              e.keyboard.enabled &&
                (a.removeEventListener("keydown", r),
                (e.keyboard.enabled = !1));
            }
            (e.keyboard = { enabled: !1 }),
              t({
                keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
              }),
              n("init", () => {
                e.params.keyboard.enabled && l();
              }),
              n("destroy", () => {
                e.keyboard.enabled && c();
              }),
              Object.assign(e.keyboard, { enable: l, disable: c });
          },
          function ({ swiper: e, extendParams: t, on: n, emit: i }) {
            const a = d();
            let s;
            t({
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel",
              },
            }),
              (e.mousewheel = { enabled: !1 });
            let r,
              o = p();
            const l = [];
            function u() {
              e.enabled && (e.mouseEntered = !0);
            }
            function h() {
              e.enabled && (e.mouseEntered = !1);
            }
            function m(t) {
              return (
                !(
                  e.params.mousewheel.thresholdDelta &&
                  t.delta < e.params.mousewheel.thresholdDelta
                ) &&
                !(
                  e.params.mousewheel.thresholdTime &&
                  p() - o < e.params.mousewheel.thresholdTime
                ) &&
                ((t.delta >= 6 && p() - o < 60) ||
                  (t.direction < 0
                    ? (e.isEnd && !e.params.loop) ||
                      e.animating ||
                      (e.slideNext(), i("scroll", t.raw))
                    : (e.isBeginning && !e.params.loop) ||
                      e.animating ||
                      (e.slidePrev(), i("scroll", t.raw)),
                  (o = new a.Date().getTime()),
                  !1))
              );
            }
            function g(t) {
              let n = t,
                a = !0;
              if (!e.enabled) return;
              if (t.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))
                return;
              const o = e.params.mousewheel;
              e.params.cssMode && n.preventDefault();
              let d = e.el;
              "container" !== e.params.mousewheel.eventsTarget &&
                (d = document.querySelector(e.params.mousewheel.eventsTarget));
              const u = d && d.contains(n.target);
              if (!e.mouseEntered && !u && !o.releaseOnEdges) return !0;
              n.originalEvent && (n = n.originalEvent);
              let h = 0;
              const g = e.rtlTranslate ? -1 : 1,
                f = (function (e) {
                  let t = 0,
                    n = 0,
                    i = 0,
                    a = 0;
                  return (
                    "detail" in e && (n = e.detail),
                    "wheelDelta" in e && (n = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e &&
                      e.axis === e.HORIZONTAL_AXIS &&
                      ((t = n), (n = 0)),
                    (i = 10 * t),
                    (a = 10 * n),
                    "deltaY" in e && (a = e.deltaY),
                    "deltaX" in e && (i = e.deltaX),
                    e.shiftKey && !i && ((i = a), (a = 0)),
                    (i || a) &&
                      e.deltaMode &&
                      (1 === e.deltaMode
                        ? ((i *= 40), (a *= 40))
                        : ((i *= 800), (a *= 800))),
                    i && !t && (t = i < 1 ? -1 : 1),
                    a && !n && (n = a < 1 ? -1 : 1),
                    { spinX: t, spinY: n, pixelX: i, pixelY: a }
                  );
                })(n);
              if (o.forceToAxis)
                if (e.isHorizontal()) {
                  if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                  h = -f.pixelX * g;
                } else {
                  if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                  h = -f.pixelY;
                }
              else
                h =
                  Math.abs(f.pixelX) > Math.abs(f.pixelY)
                    ? -f.pixelX * g
                    : -f.pixelY;
              if (0 === h) return !0;
              o.invert && (h = -h);
              let v = e.getTranslate() + h * o.sensitivity;
              if (
                (v >= e.minTranslate() && (v = e.minTranslate()),
                v <= e.maxTranslate() && (v = e.maxTranslate()),
                (a =
                  !!e.params.loop ||
                  !(v === e.minTranslate() || v === e.maxTranslate())),
                a && e.params.nested && n.stopPropagation(),
                e.params.freeMode && e.params.freeMode.enabled)
              ) {
                const t = {
                    time: p(),
                    delta: Math.abs(h),
                    direction: Math.sign(h),
                  },
                  a =
                    r &&
                    t.time < r.time + 500 &&
                    t.delta <= r.delta &&
                    t.direction === r.direction;
                if (!a) {
                  r = void 0;
                  let d = e.getTranslate() + h * o.sensitivity;
                  const p = e.isBeginning,
                    u = e.isEnd;
                  if (
                    (d >= e.minTranslate() && (d = e.minTranslate()),
                    d <= e.maxTranslate() && (d = e.maxTranslate()),
                    e.setTransition(0),
                    e.setTranslate(d),
                    e.updateProgress(),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                    ((!p && e.isBeginning) || (!u && e.isEnd)) &&
                      e.updateSlidesClasses(),
                    e.params.loop &&
                      e.loopFix({
                        direction: t.direction < 0 ? "next" : "prev",
                        byMousewheel: !0,
                      }),
                    e.params.freeMode.sticky)
                  ) {
                    clearTimeout(s), (s = void 0), l.length >= 15 && l.shift();
                    const n = l.length ? l[l.length - 1] : void 0,
                      i = l[0];
                    if (
                      (l.push(t),
                      n && (t.delta > n.delta || t.direction !== n.direction))
                    )
                      l.splice(0);
                    else if (
                      l.length >= 15 &&
                      t.time - i.time < 500 &&
                      i.delta - t.delta >= 1 &&
                      t.delta <= 6
                    ) {
                      const n = h > 0 ? 0.8 : 0.2;
                      (r = t),
                        l.splice(0),
                        (s = c(() => {
                          e.slideToClosest(e.params.speed, !0, void 0, n);
                        }, 0));
                    }
                    s ||
                      (s = c(() => {
                        (r = t),
                          l.splice(0),
                          e.slideToClosest(e.params.speed, !0, void 0, 0.5);
                      }, 500));
                  }
                  if (
                    (a || i("scroll", n),
                    e.params.autoplay &&
                      e.params.autoplayDisableOnInteraction &&
                      e.autoplay.stop(),
                    d === e.minTranslate() || d === e.maxTranslate())
                  )
                    return !0;
                }
              } else {
                const n = {
                  time: p(),
                  delta: Math.abs(h),
                  direction: Math.sign(h),
                  raw: t,
                };
                l.length >= 2 && l.shift();
                const i = l.length ? l[l.length - 1] : void 0;
                if (
                  (l.push(n),
                  i
                    ? (n.direction !== i.direction ||
                        n.delta > i.delta ||
                        n.time > i.time + 150) &&
                      m(n)
                    : m(n),
                  (function (t) {
                    const n = e.params.mousewheel;
                    if (t.direction < 0) {
                      if (e.isEnd && !e.params.loop && n.releaseOnEdges)
                        return !0;
                    } else if (
                      e.isBeginning &&
                      !e.params.loop &&
                      n.releaseOnEdges
                    )
                      return !0;
                    return !1;
                  })(n))
                )
                  return !0;
              }
              return (
                n.preventDefault ? n.preventDefault() : (n.returnValue = !1), !1
              );
            }
            function f(t) {
              let n = e.el;
              "container" !== e.params.mousewheel.eventsTarget &&
                (n = document.querySelector(e.params.mousewheel.eventsTarget)),
                n[t]("mouseenter", u),
                n[t]("mouseleave", h),
                n[t]("wheel", g);
            }
            function v() {
              return e.params.cssMode
                ? (e.wrapperEl.removeEventListener("wheel", g), !0)
                : !e.mousewheel.enabled &&
                    (f("addEventListener"), (e.mousewheel.enabled = !0), !0);
            }
            function w() {
              return e.params.cssMode
                ? (e.wrapperEl.addEventListener(event, g), !0)
                : !!e.mousewheel.enabled &&
                    (f("removeEventListener"), (e.mousewheel.enabled = !1), !0);
            }
            n("init", () => {
              !e.params.mousewheel.enabled && e.params.cssMode && w(),
                e.params.mousewheel.enabled && v();
            }),
              n("destroy", () => {
                e.params.cssMode && v(), e.mousewheel.enabled && w();
              }),
              Object.assign(e.mousewheel, { enable: v, disable: w });
          },
          function ({ swiper: e, extendParams: t, on: n, emit: i }) {
            t({
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled",
              },
            }),
              (e.navigation = { nextEl: null, prevEl: null });
            const a = (e) => (
              Array.isArray(e) || (e = [e].filter((e) => !!e)), e
            );
            function s(t) {
              let n;
              return t &&
                "string" == typeof t &&
                e.isElement &&
                ((n = e.el.shadowRoot.querySelector(t)), n)
                ? n
                : (t &&
                    ("string" == typeof t &&
                      (n = [...document.querySelectorAll(t)]),
                    e.params.uniqueNavElements &&
                      "string" == typeof t &&
                      n.length > 1 &&
                      1 === e.el.querySelectorAll(t).length &&
                      (n = e.el.querySelector(t))),
                  t && !n ? t : n);
            }
            function r(t, n) {
              const i = e.params.navigation;
              (t = a(t)).forEach((t) => {
                t &&
                  (t.classList[n ? "add" : "remove"](
                    ...i.disabledClass.split(" ")
                  ),
                  "BUTTON" === t.tagName && (t.disabled = n),
                  e.params.watchOverflow &&
                    e.enabled &&
                    t.classList[e.isLocked ? "add" : "remove"](i.lockClass));
              });
            }
            function o() {
              const { nextEl: t, prevEl: n } = e.navigation;
              if (e.params.loop) return r(n, !1), void r(t, !1);
              r(n, e.isBeginning && !e.params.rewind),
                r(t, e.isEnd && !e.params.rewind);
            }
            function l(t) {
              t.preventDefault(),
                (!e.isBeginning || e.params.loop || e.params.rewind) &&
                  (e.slidePrev(), i("navigationPrev"));
            }
            function d(t) {
              t.preventDefault(),
                (!e.isEnd || e.params.loop || e.params.rewind) &&
                  (e.slideNext(), i("navigationNext"));
            }
            function c() {
              const t = e.params.navigation;
              if (
                ((e.params.navigation = se(
                  e,
                  e.originalParams.navigation,
                  e.params.navigation,
                  { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
                )),
                !t.nextEl && !t.prevEl)
              )
                return;
              let n = s(t.nextEl),
                i = s(t.prevEl);
              Object.assign(e.navigation, { nextEl: n, prevEl: i }),
                (n = a(n)),
                (i = a(i));
              const r = (n, i) => {
                n && n.addEventListener("click", "next" === i ? d : l),
                  !e.enabled && n && n.classList.add(...t.lockClass.split(" "));
              };
              n.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
            }
            function p() {
              let { nextEl: t, prevEl: n } = e.navigation;
              (t = a(t)), (n = a(n));
              const i = (t, n) => {
                t.removeEventListener("click", "next" === n ? d : l),
                  t.classList.remove(
                    ...e.params.navigation.disabledClass.split(" ")
                  );
              };
              t.forEach((e) => i(e, "next")), n.forEach((e) => i(e, "prev"));
            }
            n("init", () => {
              !1 === e.params.navigation.enabled ? u() : (c(), o());
            }),
              n("toEdge fromEdge lock unlock", () => {
                o();
              }),
              n("destroy", () => {
                p();
              }),
              n("enable disable", () => {
                let { nextEl: t, prevEl: n } = e.navigation;
                (t = a(t)),
                  (n = a(n)),
                  [...t, ...n]
                    .filter((e) => !!e)
                    .forEach((t) =>
                      t.classList[e.enabled ? "remove" : "add"](
                        e.params.navigation.lockClass
                      )
                    );
              }),
              n("click", (t, n) => {
                let { nextEl: s, prevEl: r } = e.navigation;
                (s = a(s)), (r = a(r));
                const o = n.target;
                if (
                  e.params.navigation.hideOnClick &&
                  !r.includes(o) &&
                  !s.includes(o)
                ) {
                  if (
                    e.pagination &&
                    e.params.pagination &&
                    e.params.pagination.clickable &&
                    (e.pagination.el === o || e.pagination.el.contains(o))
                  )
                    return;
                  let t;
                  s.length
                    ? (t = s[0].classList.contains(
                        e.params.navigation.hiddenClass
                      ))
                    : r.length &&
                      (t = r[0].classList.contains(
                        e.params.navigation.hiddenClass
                      )),
                    i(!0 === t ? "navigationShow" : "navigationHide"),
                    [...s, ...r]
                      .filter((e) => !!e)
                      .forEach((t) =>
                        t.classList.toggle(e.params.navigation.hiddenClass)
                      );
                }
              });
            const u = () => {
              e.el.classList.add(
                ...e.params.navigation.navigationDisabledClass.split(" ")
              ),
                p();
            };
            Object.assign(e.navigation, {
              enable: () => {
                e.el.classList.remove(
                  ...e.params.navigation.navigationDisabledClass.split(" ")
                ),
                  c(),
                  o();
              },
              disable: u,
              update: o,
              init: c,
              destroy: p,
            });
          },
          function ({ swiper: e, extendParams: t, on: n, emit: i }) {
            const a = "swiper-pagination";
            let s;
            t({
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: (e) => e,
                formatFractionTotal: (e) => e,
                bulletClass: `${a}-bullet`,
                bulletActiveClass: `${a}-bullet-active`,
                modifierClass: `${a}-`,
                currentClass: `${a}-current`,
                totalClass: `${a}-total`,
                hiddenClass: `${a}-hidden`,
                progressbarFillClass: `${a}-progressbar-fill`,
                progressbarOppositeClass: `${a}-progressbar-opposite`,
                clickableClass: `${a}-clickable`,
                lockClass: `${a}-lock`,
                horizontalClass: `${a}-horizontal`,
                verticalClass: `${a}-vertical`,
                paginationDisabledClass: `${a}-disabled`,
              },
            }),
              (e.pagination = { el: null, bullets: [] });
            let r = 0;
            const o = (e) => (
              Array.isArray(e) || (e = [e].filter((e) => !!e)), e
            );
            function l() {
              return (
                !e.params.pagination.el ||
                !e.pagination.el ||
                (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
              );
            }
            function d(t, n) {
              const { bulletActiveClass: i } = e.params.pagination;
              t &&
                (t =
                  t[("prev" === n ? "previous" : "next") + "ElementSibling"]) &&
                (t.classList.add(`${i}-${n}`),
                (t =
                  t[("prev" === n ? "previous" : "next") + "ElementSibling"]) &&
                  t.classList.add(`${i}-${n}-${n}`));
            }
            function c(t) {
              const n = t.target.closest(re(e.params.pagination.bulletClass));
              if (!n) return;
              t.preventDefault();
              const i = _(n) * e.params.slidesPerGroup;
              if (e.params.loop) {
                if (e.realIndex === i) return;
                const t = e.getSlideIndexByData(i),
                  n = e.getSlideIndexByData(e.realIndex);
                t > e.slides.length - e.loopedSlides &&
                  e.loopFix({
                    direction: t > n ? "next" : "prev",
                    activeSlideIndex: t,
                    slideTo: !1,
                  }),
                  e.slideToLoop(i);
              } else e.slideTo(i);
            }
            function p() {
              const t = e.rtl,
                n = e.params.pagination;
              if (l()) return;
              let a,
                c,
                p = e.pagination.el;
              p = o(p);
              const u =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                h = e.params.loop
                  ? Math.ceil(u / e.params.slidesPerGroup)
                  : e.snapGrid.length;
              if (
                (e.params.loop
                  ? ((c = e.previousRealIndex || 0),
                    (a =
                      e.params.slidesPerGroup > 1
                        ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                        : e.realIndex))
                  : void 0 !== e.snapIndex
                  ? ((a = e.snapIndex), (c = e.previousSnapIndex))
                  : ((c = e.previousIndex || 0), (a = e.activeIndex || 0)),
                "bullets" === n.type &&
                  e.pagination.bullets &&
                  e.pagination.bullets.length > 0)
              ) {
                const i = e.pagination.bullets;
                let o, l, u;
                if (
                  (n.dynamicBullets &&
                    ((s = E(i[0], e.isHorizontal() ? "width" : "height", !0)),
                    p.forEach((t) => {
                      t.style[e.isHorizontal() ? "width" : "height"] =
                        s * (n.dynamicMainBullets + 4) + "px";
                    }),
                    n.dynamicMainBullets > 1 &&
                      void 0 !== c &&
                      ((r += a - (c || 0)),
                      r > n.dynamicMainBullets - 1
                        ? (r = n.dynamicMainBullets - 1)
                        : r < 0 && (r = 0)),
                    (o = Math.max(a - r, 0)),
                    (l = o + (Math.min(i.length, n.dynamicMainBullets) - 1)),
                    (u = (l + o) / 2)),
                  i.forEach((e) => {
                    const t = [
                      ...[
                        "",
                        "-next",
                        "-next-next",
                        "-prev",
                        "-prev-prev",
                        "-main",
                      ].map((e) => `${n.bulletActiveClass}${e}`),
                    ]
                      .map((e) =>
                        "string" == typeof e && e.includes(" ")
                          ? e.split(" ")
                          : e
                      )
                      .flat();
                    e.classList.remove(...t);
                  }),
                  p.length > 1)
                )
                  i.forEach((t) => {
                    const i = _(t);
                    i === a
                      ? t.classList.add(...n.bulletActiveClass.split(" "))
                      : e.isElement && t.setAttribute("part", "bullet"),
                      n.dynamicBullets &&
                        (i >= o &&
                          i <= l &&
                          t.classList.add(
                            ...`${n.bulletActiveClass}-main`.split(" ")
                          ),
                        i === o && d(t, "prev"),
                        i === l && d(t, "next"));
                  });
                else {
                  const t = i[a];
                  if (
                    (t && t.classList.add(...n.bulletActiveClass.split(" ")),
                    e.isElement &&
                      i.forEach((e, t) => {
                        e.setAttribute(
                          "part",
                          t === a ? "bullet-active" : "bullet"
                        );
                      }),
                    n.dynamicBullets)
                  ) {
                    const e = i[o],
                      t = i[l];
                    for (let e = o; e <= l; e += 1)
                      i[e] &&
                        i[e].classList.add(
                          ...`${n.bulletActiveClass}-main`.split(" ")
                        );
                    d(e, "prev"), d(t, "next");
                  }
                }
                if (n.dynamicBullets) {
                  const a = Math.min(i.length, n.dynamicMainBullets + 4),
                    r = (s * a - s) / 2 - u * s,
                    o = t ? "right" : "left";
                  i.forEach((t) => {
                    t.style[e.isHorizontal() ? o : "top"] = `${r}px`;
                  });
                }
              }
              p.forEach((t, s) => {
                if (
                  ("fraction" === n.type &&
                    (t.querySelectorAll(re(n.currentClass)).forEach((e) => {
                      e.textContent = n.formatFractionCurrent(a + 1);
                    }),
                    t.querySelectorAll(re(n.totalClass)).forEach((e) => {
                      e.textContent = n.formatFractionTotal(h);
                    })),
                  "progressbar" === n.type)
                ) {
                  let i;
                  i = n.progressbarOpposite
                    ? e.isHorizontal()
                      ? "vertical"
                      : "horizontal"
                    : e.isHorizontal()
                    ? "horizontal"
                    : "vertical";
                  const s = (a + 1) / h;
                  let r = 1,
                    o = 1;
                  "horizontal" === i ? (r = s) : (o = s),
                    t
                      .querySelectorAll(re(n.progressbarFillClass))
                      .forEach((t) => {
                        (t.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${o})`),
                          (t.style.transitionDuration = `${e.params.speed}ms`);
                      });
                }
                "custom" === n.type && n.renderCustom
                  ? ((t.innerHTML = n.renderCustom(e, a + 1, h)),
                    0 === s && i("paginationRender", t))
                  : (0 === s && i("paginationRender", t),
                    i("paginationUpdate", t)),
                  e.params.watchOverflow &&
                    e.enabled &&
                    t.classList[e.isLocked ? "add" : "remove"](n.lockClass);
              });
            }
            function u() {
              const t = e.params.pagination;
              if (l()) return;
              const n =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length;
              let a = e.pagination.el;
              a = o(a);
              let s = "";
              if ("bullets" === t.type) {
                let i = e.params.loop
                  ? Math.ceil(n / e.params.slidesPerGroup)
                  : e.snapGrid.length;
                e.params.freeMode &&
                  e.params.freeMode.enabled &&
                  i > n &&
                  (i = n);
                for (let n = 0; n < i; n += 1)
                  t.renderBullet
                    ? (s += t.renderBullet.call(e, n, t.bulletClass))
                    : (s += `<${t.bulletElement} ${
                        e.isElement ? 'part="bullet"' : ""
                      } class="${t.bulletClass}"></${t.bulletElement}>`);
              }
              "fraction" === t.type &&
                (s = t.renderFraction
                  ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                  : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
                "progressbar" === t.type &&
                  (s = t.renderProgressbar
                    ? t.renderProgressbar.call(e, t.progressbarFillClass)
                    : `<span class="${t.progressbarFillClass}"></span>`),
                (e.pagination.bullets = []),
                a.forEach((n) => {
                  "custom" !== t.type && (n.innerHTML = s || ""),
                    "bullets" === t.type &&
                      e.pagination.bullets.push(
                        ...n.querySelectorAll(re(t.bulletClass))
                      );
                }),
                "custom" !== t.type && i("paginationRender", a[0]);
            }
            function h() {
              e.params.pagination = se(
                e,
                e.originalParams.pagination,
                e.params.pagination,
                { el: "swiper-pagination" }
              );
              const t = e.params.pagination;
              if (!t.el) return;
              let n;
              "string" == typeof t.el &&
                e.isElement &&
                (n = e.el.shadowRoot.querySelector(t.el)),
                n ||
                  "string" != typeof t.el ||
                  (n = [...document.querySelectorAll(t.el)]),
                n || (n = t.el),
                n &&
                  0 !== n.length &&
                  (e.params.uniqueNavElements &&
                    "string" == typeof t.el &&
                    Array.isArray(n) &&
                    n.length > 1 &&
                    ((n = [...e.el.querySelectorAll(t.el)]),
                    n.length > 1 &&
                      (n = n.filter((t) => A(t, ".swiper")[0] === e.el)[0])),
                  Array.isArray(n) && 1 === n.length && (n = n[0]),
                  Object.assign(e.pagination, { el: n }),
                  (n = o(n)),
                  n.forEach((n) => {
                    "bullets" === t.type &&
                      t.clickable &&
                      n.classList.add(t.clickableClass),
                      n.classList.add(t.modifierClass + t.type),
                      n.classList.add(
                        e.isHorizontal() ? t.horizontalClass : t.verticalClass
                      ),
                      "bullets" === t.type &&
                        t.dynamicBullets &&
                        (n.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                        (r = 0),
                        t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                      "progressbar" === t.type &&
                        t.progressbarOpposite &&
                        n.classList.add(t.progressbarOppositeClass),
                      t.clickable && n.addEventListener("click", c),
                      e.enabled || n.classList.add(t.lockClass);
                  }));
            }
            function m() {
              const t = e.params.pagination;
              if (l()) return;
              let n = e.pagination.el;
              n &&
                ((n = o(n)),
                n.forEach((n) => {
                  n.classList.remove(t.hiddenClass),
                    n.classList.remove(t.modifierClass + t.type),
                    n.classList.remove(
                      e.isHorizontal() ? t.horizontalClass : t.verticalClass
                    ),
                    t.clickable && n.removeEventListener("click", c);
                })),
                e.pagination.bullets &&
                  e.pagination.bullets.forEach((e) =>
                    e.classList.remove(...t.bulletActiveClass.split(" "))
                  );
            }
            n("changeDirection", () => {
              if (!e.pagination || !e.pagination.el) return;
              const t = e.params.pagination;
              let { el: n } = e.pagination;
              (n = o(n)),
                n.forEach((n) => {
                  n.classList.remove(t.horizontalClass, t.verticalClass),
                    n.classList.add(
                      e.isHorizontal() ? t.horizontalClass : t.verticalClass
                    );
                });
            }),
              n("init", () => {
                !1 === e.params.pagination.enabled ? g() : (h(), u(), p());
              }),
              n("activeIndexChange", () => {
                void 0 === e.snapIndex && p();
              }),
              n("snapIndexChange", () => {
                p();
              }),
              n("snapGridLengthChange", () => {
                u(), p();
              }),
              n("destroy", () => {
                m();
              }),
              n("enable disable", () => {
                let { el: t } = e.pagination;
                t &&
                  ((t = o(t)),
                  t.forEach((t) =>
                    t.classList[e.enabled ? "remove" : "add"](
                      e.params.pagination.lockClass
                    )
                  ));
              }),
              n("lock unlock", () => {
                p();
              }),
              n("click", (t, n) => {
                const a = n.target;
                let { el: s } = e.pagination;
                if (
                  (Array.isArray(s) || (s = [s].filter((e) => !!e)),
                  e.params.pagination.el &&
                    e.params.pagination.hideOnClick &&
                    s &&
                    s.length > 0 &&
                    !a.classList.contains(e.params.pagination.bulletClass))
                ) {
                  if (
                    e.navigation &&
                    ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                      (e.navigation.prevEl && a === e.navigation.prevEl))
                  )
                    return;
                  const t = s[0].classList.contains(
                    e.params.pagination.hiddenClass
                  );
                  i(!0 === t ? "paginationShow" : "paginationHide"),
                    s.forEach((t) =>
                      t.classList.toggle(e.params.pagination.hiddenClass)
                    );
                }
              });
            const g = () => {
              e.el.classList.add(e.params.pagination.paginationDisabledClass);
              let { el: t } = e.pagination;
              t &&
                ((t = o(t)),
                t.forEach((t) =>
                  t.classList.add(e.params.pagination.paginationDisabledClass)
                )),
                m();
            };
            Object.assign(e.pagination, {
              enable: () => {
                e.el.classList.remove(
                  e.params.pagination.paginationDisabledClass
                );
                let { el: t } = e.pagination;
                t &&
                  ((t = o(t)),
                  t.forEach((t) =>
                    t.classList.remove(
                      e.params.pagination.paginationDisabledClass
                    )
                  )),
                  h(),
                  u(),
                  p();
              },
              disable: g,
              render: u,
              update: p,
              init: h,
              destroy: m,
            });
          },
          function ({ swiper: e, extendParams: t, on: n, emit: i }) {
            const a = o();
            let s,
              r,
              l,
              d,
              p = !1,
              u = null,
              h = null;
            function m() {
              if (!e.params.scrollbar.el || !e.scrollbar.el) return;
              const { scrollbar: t, rtlTranslate: n } = e,
                { dragEl: i, el: a } = t,
                s = e.params.scrollbar,
                o = e.params.loop ? e.progressLoop : e.progress;
              let d = r,
                c = (l - r) * o;
              n
                ? ((c = -c),
                  c > 0 ? ((d = r - c), (c = 0)) : -c + r > l && (d = l + c))
                : c < 0
                ? ((d = r + c), (c = 0))
                : c + r > l && (d = l - c),
                e.isHorizontal()
                  ? ((i.style.transform = `translate3d(${c}px, 0, 0)`),
                    (i.style.width = `${d}px`))
                  : ((i.style.transform = `translate3d(0px, ${c}px, 0)`),
                    (i.style.height = `${d}px`)),
                s.hide &&
                  (clearTimeout(u),
                  (a.style.opacity = 1),
                  (u = setTimeout(() => {
                    (a.style.opacity = 0),
                      (a.style.transitionDuration = "400ms");
                  }, 1e3)));
            }
            function g() {
              if (!e.params.scrollbar.el || !e.scrollbar.el) return;
              const { scrollbar: t } = e,
                { dragEl: n, el: i } = t;
              (n.style.width = ""),
                (n.style.height = ""),
                (l = e.isHorizontal() ? i.offsetWidth : i.offsetHeight),
                (d =
                  e.size /
                  (e.virtualSize +
                    e.params.slidesOffsetBefore -
                    (e.params.centeredSlides ? e.snapGrid[0] : 0))),
                (r =
                  "auto" === e.params.scrollbar.dragSize
                    ? l * d
                    : parseInt(e.params.scrollbar.dragSize, 10)),
                e.isHorizontal()
                  ? (n.style.width = `${r}px`)
                  : (n.style.height = `${r}px`),
                (i.style.display = d >= 1 ? "none" : ""),
                e.params.scrollbar.hide && (i.style.opacity = 0),
                e.params.watchOverflow &&
                  e.enabled &&
                  t.el.classList[e.isLocked ? "add" : "remove"](
                    e.params.scrollbar.lockClass
                  );
            }
            function f(t) {
              return e.isHorizontal() ? t.clientX : t.clientY;
            }
            function v(t) {
              const { scrollbar: n, rtlTranslate: i } = e,
                { el: a } = n;
              let o;
              (o =
                (f(t) -
                  y(a)[e.isHorizontal() ? "left" : "top"] -
                  (null !== s ? s : r / 2)) /
                (l - r)),
                (o = Math.max(Math.min(o, 1), 0)),
                i && (o = 1 - o);
              const d =
                e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * o;
              e.updateProgress(d),
                e.setTranslate(d),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            function w(t) {
              const n = e.params.scrollbar,
                { scrollbar: a, wrapperEl: r } = e,
                { el: o, dragEl: l } = a;
              (p = !0),
                (s =
                  t.target === l
                    ? f(t) -
                      t.target.getBoundingClientRect()[
                        e.isHorizontal() ? "left" : "top"
                      ]
                    : null),
                t.preventDefault(),
                t.stopPropagation(),
                (r.style.transitionDuration = "100ms"),
                (l.style.transitionDuration = "100ms"),
                v(t),
                clearTimeout(h),
                (o.style.transitionDuration = "0ms"),
                n.hide && (o.style.opacity = 1),
                e.params.cssMode &&
                  (e.wrapperEl.style["scroll-snap-type"] = "none"),
                i("scrollbarDragStart", t);
            }
            function x(t) {
              const { scrollbar: n, wrapperEl: a } = e,
                { el: s, dragEl: r } = n;
              p &&
                (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                v(t),
                (a.style.transitionDuration = "0ms"),
                (s.style.transitionDuration = "0ms"),
                (r.style.transitionDuration = "0ms"),
                i("scrollbarDragMove", t));
            }
            function _(t) {
              const n = e.params.scrollbar,
                { scrollbar: a, wrapperEl: s } = e,
                { el: r } = a;
              p &&
                ((p = !1),
                e.params.cssMode &&
                  ((e.wrapperEl.style["scroll-snap-type"] = ""),
                  (s.style.transitionDuration = "")),
                n.hide &&
                  (clearTimeout(h),
                  (h = c(() => {
                    (r.style.opacity = 0),
                      (r.style.transitionDuration = "400ms");
                  }, 1e3))),
                i("scrollbarDragEnd", t),
                n.snapOnRelease && e.slideToClosest());
            }
            function A(t) {
              const { scrollbar: n, params: i } = e,
                s = n.el;
              if (!s) return;
              const r = s,
                o = !!i.passiveListeners && { passive: !1, capture: !1 },
                l = !!i.passiveListeners && { passive: !0, capture: !1 };
              if (!r) return;
              const d = "on" === t ? "addEventListener" : "removeEventListener";
              r[d]("pointerdown", w, o),
                a[d]("pointermove", x, o),
                a[d]("pointerup", _, l);
            }
            function M() {
              const { scrollbar: t, el: n } = e;
              e.params.scrollbar = se(
                e,
                e.originalParams.scrollbar,
                e.params.scrollbar,
                { el: "swiper-scrollbar" }
              );
              const i = e.params.scrollbar;
              if (!i.el) return;
              let s, r;
              "string" == typeof i.el &&
                e.isElement &&
                (s = e.el.shadowRoot.querySelector(i.el)),
                s || "string" != typeof i.el
                  ? s || (s = i.el)
                  : (s = a.querySelectorAll(i.el)),
                e.params.uniqueNavElements &&
                  "string" == typeof i.el &&
                  s.length > 1 &&
                  1 === n.querySelectorAll(i.el).length &&
                  (s = n.querySelector(i.el)),
                s.length > 0 && (s = s[0]),
                s.classList.add(
                  e.isHorizontal() ? i.horizontalClass : i.verticalClass
                ),
                s &&
                  ((r = s.querySelector(`.${e.params.scrollbar.dragClass}`)),
                  r ||
                    ((r = b("div", e.params.scrollbar.dragClass)),
                    s.append(r))),
                Object.assign(t, { el: s, dragEl: r }),
                i.draggable &&
                  e.params.scrollbar.el &&
                  e.scrollbar.el &&
                  A("on"),
                s &&
                  s.classList[e.enabled ? "remove" : "add"](
                    e.params.scrollbar.lockClass
                  );
            }
            function E() {
              const t = e.params.scrollbar,
                n = e.scrollbar.el;
              n &&
                n.classList.remove(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                e.params.scrollbar.el && e.scrollbar.el && A("off");
            }
            t({
              scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical",
              },
            }),
              (e.scrollbar = { el: null, dragEl: null }),
              n("init", () => {
                !1 === e.params.scrollbar.enabled ? C() : (M(), g(), m());
              }),
              n("update resize observerUpdate lock unlock", () => {
                g();
              }),
              n("setTranslate", () => {
                m();
              }),
              n("setTransition", (t, n) => {
                !(function (t) {
                  e.params.scrollbar.el &&
                    e.scrollbar.el &&
                    (e.scrollbar.dragEl.style.transitionDuration = `${t}ms`);
                })(n);
              }),
              n("enable disable", () => {
                const { el: t } = e.scrollbar;
                t &&
                  t.classList[e.enabled ? "remove" : "add"](
                    e.params.scrollbar.lockClass
                  );
              }),
              n("destroy", () => {
                E();
              });
            const C = () => {
              e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),
                e.scrollbar.el &&
                  e.scrollbar.el.classList.add(
                    e.params.scrollbar.scrollbarDisabledClass
                  ),
                E();
            };
            Object.assign(e.scrollbar, {
              enable: () => {
                e.el.classList.remove(
                  e.params.scrollbar.scrollbarDisabledClass
                ),
                  e.scrollbar.el &&
                    e.scrollbar.el.classList.remove(
                      e.params.scrollbar.scrollbarDisabledClass
                    ),
                  M(),
                  g(),
                  m();
              },
              disable: C,
              updateSize: g,
              setTranslate: m,
              init: M,
              destroy: E,
            });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            t({ parallax: { enabled: !1 } });
            const i = (t, n) => {
                const { rtl: i } = e,
                  a = i ? -1 : 1,
                  s = t.getAttribute("data-swiper-parallax") || "0";
                let r = t.getAttribute("data-swiper-parallax-x"),
                  o = t.getAttribute("data-swiper-parallax-y");
                const l = t.getAttribute("data-swiper-parallax-scale"),
                  d = t.getAttribute("data-swiper-parallax-opacity"),
                  c = t.getAttribute("data-swiper-parallax-rotate");
                if (
                  (r || o
                    ? ((r = r || "0"), (o = o || "0"))
                    : e.isHorizontal()
                    ? ((r = s), (o = "0"))
                    : ((o = s), (r = "0")),
                  (r =
                    r.indexOf("%") >= 0
                      ? parseInt(r, 10) * n * a + "%"
                      : r * n * a + "px"),
                  (o =
                    o.indexOf("%") >= 0
                      ? parseInt(o, 10) * n + "%"
                      : o * n + "px"),
                  null != d)
                ) {
                  const e = d - (d - 1) * (1 - Math.abs(n));
                  t.style.opacity = e;
                }
                let p = `translate3d(${r}, ${o}, 0px)`;
                if (null != l) {
                  p += ` scale(${l - (l - 1) * (1 - Math.abs(n))})`;
                }
                if (c && null != c) {
                  p += ` rotate(${c * n * -1}deg)`;
                }
                t.style.transform = p;
              },
              a = () => {
                const { el: t, slides: n, progress: a, snapGrid: s } = e;
                w(
                  t,
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                ).forEach((e) => {
                  i(e, a);
                }),
                  n.forEach((t, n) => {
                    let r = t.progress;
                    e.params.slidesPerGroup > 1 &&
                      "auto" !== e.params.slidesPerView &&
                      (r += Math.ceil(n / 2) - a * (s.length - 1)),
                      (r = Math.min(Math.max(r, -1), 1)),
                      t
                        .querySelectorAll(
                          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]"
                        )
                        .forEach((e) => {
                          i(e, r);
                        });
                  });
              };
            n("beforeInit", () => {
              e.params.parallax.enabled &&
                ((e.params.watchSlidesProgress = !0),
                (e.originalParams.watchSlidesProgress = !0));
            }),
              n("init", () => {
                e.params.parallax.enabled && a();
              }),
              n("setTranslate", () => {
                e.params.parallax.enabled && a();
              }),
              n("setTransition", (t, n) => {
                e.params.parallax.enabled &&
                  ((t = e.params.speed) => {
                    const { el: n } = e;
                    n.querySelectorAll(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    ).forEach((e) => {
                      let n =
                        parseInt(
                          e.getAttribute("data-swiper-parallax-duration"),
                          10
                        ) || t;
                      0 === t && (n = 0),
                        (e.style.transitionDuration = `${n}ms`);
                    });
                  })(n);
              });
          },
          function ({ swiper: e, extendParams: t, on: n, emit: i }) {
            const a = d();
            t({
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed",
              },
            }),
              (e.zoom = { enabled: !1 });
            let s,
              r,
              o = 1,
              l = !1;
            const c = [],
              p = {
                originX: 0,
                originY: 0,
                slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                imageEl: void 0,
                imageWrapEl: void 0,
                maxRatio: 3,
              },
              h = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              m = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              };
            let g = 1;
            function f() {
              if (c.length < 2) return 1;
              const e = c[0].pageX,
                t = c[0].pageY,
                n = c[1].pageX,
                i = c[1].pageY;
              return Math.sqrt((n - e) ** 2 + (i - t) ** 2);
            }
            function v(t) {
              const n = e.isElement
                ? "swiper-slide"
                : `.${e.params.slideClass}`;
              return (
                !!t.target.matches(n) ||
                e.slides.filter((e) => e.contains(t.target)).length > 0
              );
            }
            function b(t) {
              if (("mouse" === t.pointerType && c.splice(0, c.length), !v(t)))
                return;
              const n = e.params.zoom;
              if (((s = !1), (r = !1), c.push(t), !(c.length < 2))) {
                if (((s = !0), (p.scaleStart = f()), !p.slideEl)) {
                  (p.slideEl = t.target.closest(
                    `.${e.params.slideClass}, swiper-slide`
                  )),
                    p.slideEl || (p.slideEl = e.slides[e.activeIndex]);
                  let i = p.slideEl.querySelector(`.${n.containerClass}`);
                  if (
                    (i &&
                      (i = i.querySelectorAll(
                        "picture, img, svg, canvas, .swiper-zoom-target"
                      )[0]),
                    (p.imageEl = i),
                    (p.imageWrapEl = i
                      ? A(p.imageEl, `.${n.containerClass}`)[0]
                      : void 0),
                    !p.imageWrapEl)
                  )
                    return void (p.imageEl = void 0);
                  p.maxRatio =
                    p.imageWrapEl.getAttribute("data-swiper-zoom") ||
                    n.maxRatio;
                }
                if (p.imageEl) {
                  const [e, t] = (function () {
                    if (c.length < 2) return { x: null, y: null };
                    const e = p.imageEl.getBoundingClientRect();
                    return [
                      (c[0].pageX + (c[1].pageX - c[0].pageX) / 2 - e.x) / o,
                      (c[0].pageY + (c[1].pageY - c[0].pageY) / 2 - e.y) / o,
                    ];
                  })();
                  (p.originX = e),
                    (p.originY = t),
                    (p.imageEl.style.transitionDuration = "0ms");
                }
                l = !0;
              }
            }
            function x(t) {
              if (!v(t)) return;
              const n = e.params.zoom,
                i = e.zoom,
                a = c.findIndex((e) => e.pointerId === t.pointerId);
              a >= 0 && (c[a] = t),
                c.length < 2 ||
                  ((r = !0),
                  (p.scaleMove = f()),
                  p.imageEl &&
                    ((i.scale = (p.scaleMove / p.scaleStart) * o),
                    i.scale > p.maxRatio &&
                      (i.scale =
                        p.maxRatio - 1 + (i.scale - p.maxRatio + 1) ** 0.5),
                    i.scale < n.minRatio &&
                      (i.scale =
                        n.minRatio + 1 - (n.minRatio - i.scale + 1) ** 0.5),
                    (p.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`)));
            }
            function _(t) {
              if (!v(t)) return;
              if ("mouse" === t.pointerType && "pointerout" === t.type) return;
              const n = e.params.zoom,
                i = e.zoom,
                a = c.findIndex((e) => e.pointerId === t.pointerId);
              a >= 0 && c.splice(a, 1),
                s &&
                  r &&
                  ((s = !1),
                  (r = !1),
                  p.imageEl &&
                    ((i.scale = Math.max(
                      Math.min(i.scale, p.maxRatio),
                      n.minRatio
                    )),
                    (p.imageEl.style.transitionDuration = `${e.params.speed}ms`),
                    (p.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`),
                    (o = i.scale),
                    (l = !1),
                    i.scale > 1 && p.slideEl
                      ? p.slideEl.classList.add(`${n.zoomedSlideClass}`)
                      : i.scale <= 1 &&
                        p.slideEl &&
                        p.slideEl.classList.remove(`${n.zoomedSlideClass}`),
                    1 === i.scale &&
                      ((p.originX = 0),
                      (p.originY = 0),
                      (p.slideEl = void 0))));
            }
            function M(t) {
              if (
                !v(t) ||
                !(function (t) {
                  const n = `.${e.params.zoom.containerClass}`;
                  return (
                    !!t.target.matches(n) ||
                    [...e.el.querySelectorAll(n)].filter((e) =>
                      e.contains(t.target)
                    ).length > 0
                  );
                })(t)
              )
                return;
              const n = e.zoom;
              if (!p.imageEl) return;
              if (!h.isTouched || !p.slideEl) return;
              h.isMoved ||
                ((h.width = p.imageEl.offsetWidth),
                (h.height = p.imageEl.offsetHeight),
                (h.startX = u(p.imageWrapEl, "x") || 0),
                (h.startY = u(p.imageWrapEl, "y") || 0),
                (p.slideWidth = p.slideEl.offsetWidth),
                (p.slideHeight = p.slideEl.offsetHeight),
                (p.imageWrapEl.style.transitionDuration = "0ms"));
              const i = h.width * n.scale,
                a = h.height * n.scale;
              if (i < p.slideWidth && a < p.slideHeight) return;
              (h.minX = Math.min(p.slideWidth / 2 - i / 2, 0)),
                (h.maxX = -h.minX),
                (h.minY = Math.min(p.slideHeight / 2 - a / 2, 0)),
                (h.maxY = -h.minY),
                (h.touchesCurrent.x = c.length > 0 ? c[0].pageX : t.pageX),
                (h.touchesCurrent.y = c.length > 0 ? c[0].pageY : t.pageY);
              if (
                (Math.max(
                  Math.abs(h.touchesCurrent.x - h.touchesStart.x),
                  Math.abs(h.touchesCurrent.y - h.touchesStart.y)
                ) > 5 && (e.allowClick = !1),
                !h.isMoved && !l)
              ) {
                if (
                  e.isHorizontal() &&
                  ((Math.floor(h.minX) === Math.floor(h.startX) &&
                    h.touchesCurrent.x < h.touchesStart.x) ||
                    (Math.floor(h.maxX) === Math.floor(h.startX) &&
                      h.touchesCurrent.x > h.touchesStart.x))
                )
                  return void (h.isTouched = !1);
                if (
                  !e.isHorizontal() &&
                  ((Math.floor(h.minY) === Math.floor(h.startY) &&
                    h.touchesCurrent.y < h.touchesStart.y) ||
                    (Math.floor(h.maxY) === Math.floor(h.startY) &&
                      h.touchesCurrent.y > h.touchesStart.y))
                )
                  return void (h.isTouched = !1);
              }
              t.cancelable && t.preventDefault(),
                t.stopPropagation(),
                (h.isMoved = !0);
              const s = (n.scale - o) / (p.maxRatio - e.params.zoom.minRatio),
                { originX: r, originY: d } = p;
              (h.currentX =
                h.touchesCurrent.x -
                h.touchesStart.x +
                h.startX +
                s * (h.width - 2 * r)),
                (h.currentY =
                  h.touchesCurrent.y -
                  h.touchesStart.y +
                  h.startY +
                  s * (h.height - 2 * d)),
                h.currentX < h.minX &&
                  (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** 0.8),
                h.currentX > h.maxX &&
                  (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** 0.8),
                h.currentY < h.minY &&
                  (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** 0.8),
                h.currentY > h.maxY &&
                  (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** 0.8),
                m.prevPositionX || (m.prevPositionX = h.touchesCurrent.x),
                m.prevPositionY || (m.prevPositionY = h.touchesCurrent.y),
                m.prevTime || (m.prevTime = Date.now()),
                (m.x =
                  (h.touchesCurrent.x - m.prevPositionX) /
                  (Date.now() - m.prevTime) /
                  2),
                (m.y =
                  (h.touchesCurrent.y - m.prevPositionY) /
                  (Date.now() - m.prevTime) /
                  2),
                Math.abs(h.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0),
                Math.abs(h.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0),
                (m.prevPositionX = h.touchesCurrent.x),
                (m.prevPositionY = h.touchesCurrent.y),
                (m.prevTime = Date.now()),
                (p.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`);
            }
            function E() {
              const t = e.zoom;
              p.slideEl &&
                e.activeIndex !== e.slides.indexOf(p.slideEl) &&
                (p.imageEl &&
                  (p.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
                p.imageWrapEl &&
                  (p.imageWrapEl.style.transform = "translate3d(0,0,0)"),
                p.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
                (t.scale = 1),
                (o = 1),
                (p.slideEl = void 0),
                (p.imageEl = void 0),
                (p.imageWrapEl = void 0),
                (p.originX = 0),
                (p.originY = 0));
            }
            function C(t) {
              const n = e.zoom,
                i = e.params.zoom;
              if (!p.slideEl) {
                t &&
                  t.target &&
                  (p.slideEl = t.target.closest(
                    `.${e.params.slideClass}, swiper-slide`
                  )),
                  p.slideEl ||
                    (e.params.virtual && e.params.virtual.enabled && e.virtual
                      ? (p.slideEl = w(
                          e.slidesEl,
                          `.${e.params.slideActiveClass}`
                        )[0])
                      : (p.slideEl = e.slides[e.activeIndex]));
                let n = p.slideEl.querySelector(`.${i.containerClass}`);
                n &&
                  (n = n.querySelectorAll(
                    "picture, img, svg, canvas, .swiper-zoom-target"
                  )[0]),
                  (p.imageEl = n),
                  (p.imageWrapEl = n
                    ? A(p.imageEl, `.${i.containerClass}`)[0]
                    : void 0);
              }
              if (!p.imageEl || !p.imageWrapEl) return;
              let s, r, l, d, c, u, m, g, f, v, b, x, _, M, E, C, S, I;
              e.params.cssMode &&
                ((e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.touchAction = "none")),
                p.slideEl.classList.add(`${i.zoomedSlideClass}`),
                void 0 === h.touchesStart.x && t
                  ? ((s = t.pageX), (r = t.pageY))
                  : ((s = h.touchesStart.x), (r = h.touchesStart.y));
              const T = "number" == typeof t ? t : null;
              1 === o && T && ((s = void 0), (r = void 0)),
                (n.scale =
                  T ||
                  p.imageWrapEl.getAttribute("data-swiper-zoom") ||
                  i.maxRatio),
                (o =
                  T ||
                  p.imageWrapEl.getAttribute("data-swiper-zoom") ||
                  i.maxRatio),
                !t || (1 === o && T)
                  ? ((m = 0), (g = 0))
                  : ((S = p.slideEl.offsetWidth),
                    (I = p.slideEl.offsetHeight),
                    (l = y(p.slideEl).left + a.scrollX),
                    (d = y(p.slideEl).top + a.scrollY),
                    (c = l + S / 2 - s),
                    (u = d + I / 2 - r),
                    (f = p.imageEl.offsetWidth),
                    (v = p.imageEl.offsetHeight),
                    (b = f * n.scale),
                    (x = v * n.scale),
                    (_ = Math.min(S / 2 - b / 2, 0)),
                    (M = Math.min(I / 2 - x / 2, 0)),
                    (E = -_),
                    (C = -M),
                    (m = c * n.scale),
                    (g = u * n.scale),
                    m < _ && (m = _),
                    m > E && (m = E),
                    g < M && (g = M),
                    g > C && (g = C)),
                T && 1 === n.scale && ((p.originX = 0), (p.originY = 0)),
                (p.imageWrapEl.style.transitionDuration = "300ms"),
                (p.imageWrapEl.style.transform = `translate3d(${m}px, ${g}px,0)`),
                (p.imageEl.style.transitionDuration = "300ms"),
                (p.imageEl.style.transform = `translate3d(0,0,0) scale(${n.scale})`);
            }
            function S() {
              const t = e.zoom,
                n = e.params.zoom;
              if (!p.slideEl) {
                e.params.virtual && e.params.virtual.enabled && e.virtual
                  ? (p.slideEl = w(
                      e.slidesEl,
                      `.${e.params.slideActiveClass}`
                    )[0])
                  : (p.slideEl = e.slides[e.activeIndex]);
                let t = p.slideEl.querySelector(`.${n.containerClass}`);
                t &&
                  (t = t.querySelectorAll(
                    "picture, img, svg, canvas, .swiper-zoom-target"
                  )[0]),
                  (p.imageEl = t),
                  (p.imageWrapEl = t
                    ? A(p.imageEl, `.${n.containerClass}`)[0]
                    : void 0);
              }
              p.imageEl &&
                p.imageWrapEl &&
                (e.params.cssMode &&
                  ((e.wrapperEl.style.overflow = ""),
                  (e.wrapperEl.style.touchAction = "")),
                (t.scale = 1),
                (o = 1),
                (p.imageWrapEl.style.transitionDuration = "300ms"),
                (p.imageWrapEl.style.transform = "translate3d(0,0,0)"),
                (p.imageEl.style.transitionDuration = "300ms"),
                (p.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
                p.slideEl.classList.remove(`${n.zoomedSlideClass}`),
                (p.slideEl = void 0),
                (p.originX = 0),
                (p.originY = 0));
            }
            function I(t) {
              const n = e.zoom;
              n.scale && 1 !== n.scale ? S() : C(t);
            }
            function T() {
              return {
                passiveListener: !!e.params.passiveListeners && {
                  passive: !0,
                  capture: !1,
                },
                activeListenerWithCapture: !e.params.passiveListeners || {
                  passive: !1,
                  capture: !0,
                },
              };
            }
            function k() {
              const t = e.zoom;
              if (t.enabled) return;
              t.enabled = !0;
              const { passiveListener: n, activeListenerWithCapture: i } = T();
              e.wrapperEl.addEventListener("pointerdown", b, n),
                e.wrapperEl.addEventListener("pointermove", x, i),
                ["pointerup", "pointercancel", "pointerout"].forEach((t) => {
                  e.wrapperEl.addEventListener(t, _, n);
                }),
                e.wrapperEl.addEventListener("pointermove", M, i);
            }
            function L() {
              const t = e.zoom;
              if (!t.enabled) return;
              t.enabled = !1;
              const { passiveListener: n, activeListenerWithCapture: i } = T();
              e.wrapperEl.removeEventListener("pointerdown", b, n),
                e.wrapperEl.removeEventListener("pointermove", x, i),
                ["pointerup", "pointercancel", "pointerout"].forEach((t) => {
                  e.wrapperEl.removeEventListener(t, _, n);
                }),
                e.wrapperEl.removeEventListener("pointermove", M, i);
            }
            Object.defineProperty(e.zoom, "scale", {
              get: () => g,
              set(e) {
                if (g !== e) {
                  const t = p.imageEl,
                    n = p.slideEl;
                  i("zoomChange", e, t, n);
                }
                g = e;
              },
            }),
              n("init", () => {
                e.params.zoom.enabled && k();
              }),
              n("destroy", () => {
                L();
              }),
              n("touchStart", (t, n) => {
                e.zoom.enabled &&
                  (function (t) {
                    const n = e.device;
                    if (!p.imageEl) return;
                    if (h.isTouched) return;
                    n.android && t.cancelable && t.preventDefault(),
                      (h.isTouched = !0);
                    const i = c.length > 0 ? c[0] : t;
                    (h.touchesStart.x = i.pageX), (h.touchesStart.y = i.pageY);
                  })(n);
              }),
              n("touchEnd", (t, n) => {
                e.zoom.enabled &&
                  (function () {
                    const t = e.zoom;
                    if (!p.imageEl) return;
                    if (!h.isTouched || !h.isMoved)
                      return (h.isTouched = !1), void (h.isMoved = !1);
                    (h.isTouched = !1), (h.isMoved = !1);
                    let n = 300,
                      i = 300;
                    const a = m.x * n,
                      s = h.currentX + a,
                      r = m.y * i,
                      o = h.currentY + r;
                    0 !== m.x && (n = Math.abs((s - h.currentX) / m.x)),
                      0 !== m.y && (i = Math.abs((o - h.currentY) / m.y));
                    const l = Math.max(n, i);
                    (h.currentX = s), (h.currentY = o);
                    const d = h.width * t.scale,
                      c = h.height * t.scale;
                    (h.minX = Math.min(p.slideWidth / 2 - d / 2, 0)),
                      (h.maxX = -h.minX),
                      (h.minY = Math.min(p.slideHeight / 2 - c / 2, 0)),
                      (h.maxY = -h.minY),
                      (h.currentX = Math.max(
                        Math.min(h.currentX, h.maxX),
                        h.minX
                      )),
                      (h.currentY = Math.max(
                        Math.min(h.currentY, h.maxY),
                        h.minY
                      )),
                      (p.imageWrapEl.style.transitionDuration = `${l}ms`),
                      (p.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`);
                  })();
              }),
              n("doubleTap", (t, n) => {
                !e.animating &&
                  e.params.zoom.enabled &&
                  e.zoom.enabled &&
                  e.params.zoom.toggle &&
                  I(n);
              }),
              n("transitionEnd", () => {
                e.zoom.enabled && e.params.zoom.enabled && E();
              }),
              n("slideChange", () => {
                e.zoom.enabled &&
                  e.params.zoom.enabled &&
                  e.params.cssMode &&
                  E();
              }),
              Object.assign(e.zoom, {
                enable: k,
                disable: L,
                in: C,
                out: S,
                toggle: I,
              });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            function i(e, t) {
              const n = (function () {
                let e, t, n;
                return (i, a) => {
                  for (t = -1, e = i.length; e - t > 1; )
                    (n = (e + t) >> 1), i[n] <= a ? (t = n) : (e = n);
                  return e;
                };
              })();
              let i, a;
              return (
                (this.x = e),
                (this.y = t),
                (this.lastIndex = e.length - 1),
                (this.interpolate = function (e) {
                  return e
                    ? ((a = n(this.x, e)),
                      (i = a - 1),
                      ((e - this.x[i]) * (this.y[a] - this.y[i])) /
                        (this.x[a] - this.x[i]) +
                        this.y[i])
                    : 0;
                }),
                this
              );
            }
            function a() {
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            }
            t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
              (e.controller = { control: void 0 }),
              n("beforeInit", () => {
                if (
                  "undefined" != typeof window &&
                  ("string" == typeof e.params.controller.control ||
                    e.params.controller.control instanceof HTMLElement)
                ) {
                  const t = document.querySelector(e.params.controller.control);
                  if (t && t.swiper) e.controller.control = t.swiper;
                  else if (t) {
                    const n = (i) => {
                      (e.controller.control = i.detail[0]),
                        e.update(),
                        t.removeEventListener("init", n);
                    };
                    t.addEventListener("init", n);
                  }
                } else e.controller.control = e.params.controller.control;
              }),
              n("update", () => {
                a();
              }),
              n("resize", () => {
                a();
              }),
              n("observerUpdate", () => {
                a();
              }),
              n("setTranslate", (t, n, i) => {
                e.controller.control &&
                  !e.controller.control.destroyed &&
                  e.controller.setTranslate(n, i);
              }),
              n("setTransition", (t, n, i) => {
                e.controller.control &&
                  !e.controller.control.destroyed &&
                  e.controller.setTransition(n, i);
              }),
              Object.assign(e.controller, {
                setTranslate: function (t, n) {
                  const a = e.controller.control;
                  let s, r;
                  const o = e.constructor;
                  function l(t) {
                    if (t.destroyed) return;
                    const n = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by &&
                      (!(function (t) {
                        e.controller.spline = e.params.loop
                          ? new i(e.slidesGrid, t.slidesGrid)
                          : new i(e.snapGrid, t.snapGrid);
                      })(t),
                      (r = -e.controller.spline.interpolate(-n))),
                      (r && "container" !== e.params.controller.by) ||
                        ((s =
                          (t.maxTranslate() - t.minTranslate()) /
                          (e.maxTranslate() - e.minTranslate())),
                        (!Number.isNaN(s) && Number.isFinite(s)) || (s = 1),
                        (r = (n - e.minTranslate()) * s + t.minTranslate())),
                      e.params.controller.inverse && (r = t.maxTranslate() - r),
                      t.updateProgress(r),
                      t.setTranslate(r, e),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  }
                  if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1)
                      a[e] !== n && a[e] instanceof o && l(a[e]);
                  else a instanceof o && n !== a && l(a);
                },
                setTransition: function (t, n) {
                  const i = e.constructor,
                    a = e.controller.control;
                  let s;
                  function r(n) {
                    n.destroyed ||
                      (n.setTransition(t, e),
                      0 !== t &&
                        (n.transitionStart(),
                        n.params.autoHeight &&
                          c(() => {
                            n.updateAutoHeight();
                          }),
                        M(n.wrapperEl, () => {
                          a && n.transitionEnd();
                        })));
                  }
                  if (Array.isArray(a))
                    for (s = 0; s < a.length; s += 1)
                      a[s] !== n && a[s] instanceof i && r(a[s]);
                  else a instanceof i && n !== a && r(a);
                },
              });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            t({
              a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null,
              },
            }),
              (e.a11y = { clicked: !1 });
            let i = null;
            function a(e) {
              const t = i;
              0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
            }
            const s = (e) => (
              Array.isArray(e) || (e = [e].filter((e) => !!e)), e
            );
            function r(e) {
              (e = s(e)).forEach((e) => {
                e.setAttribute("tabIndex", "0");
              });
            }
            function o(e) {
              (e = s(e)).forEach((e) => {
                e.setAttribute("tabIndex", "-1");
              });
            }
            function l(e, t) {
              (e = s(e)).forEach((e) => {
                e.setAttribute("role", t);
              });
            }
            function d(e, t) {
              (e = s(e)).forEach((e) => {
                e.setAttribute("aria-roledescription", t);
              });
            }
            function c(e, t) {
              (e = s(e)).forEach((e) => {
                e.setAttribute("aria-label", t);
              });
            }
            function p(e) {
              (e = s(e)).forEach((e) => {
                e.setAttribute("aria-disabled", !0);
              });
            }
            function u(e) {
              (e = s(e)).forEach((e) => {
                e.setAttribute("aria-disabled", !1);
              });
            }
            function h(t) {
              if (13 !== t.keyCode && 32 !== t.keyCode) return;
              const n = e.params.a11y,
                i = t.target;
              (e.pagination &&
                e.pagination.el &&
                (i === e.pagination.el || e.pagination.el.contains(t.target)) &&
                !t.target.matches(re(e.params.pagination.bulletClass))) ||
                (e.navigation &&
                  e.navigation.nextEl &&
                  i === e.navigation.nextEl &&
                  ((e.isEnd && !e.params.loop) || e.slideNext(),
                  e.isEnd ? a(n.lastSlideMessage) : a(n.nextSlideMessage)),
                e.navigation &&
                  e.navigation.prevEl &&
                  i === e.navigation.prevEl &&
                  ((e.isBeginning && !e.params.loop) || e.slidePrev(),
                  e.isBeginning
                    ? a(n.firstSlideMessage)
                    : a(n.prevSlideMessage)),
                e.pagination &&
                  i.matches(re(e.params.pagination.bulletClass)) &&
                  i.click());
            }
            function m() {
              return (
                e.pagination &&
                e.pagination.bullets &&
                e.pagination.bullets.length
              );
            }
            function g() {
              return m() && e.params.pagination.clickable;
            }
            const f = (e, t, n) => {
                r(e),
                  "BUTTON" !== e.tagName &&
                    (l(e, "button"), e.addEventListener("keydown", h)),
                  c(e, n),
                  (function (e, t) {
                    (e = s(e)).forEach((e) => {
                      e.setAttribute("aria-controls", t);
                    });
                  })(e, t);
              },
              v = () => {
                e.a11y.clicked = !0;
              },
              w = () => {
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    e.destroyed || (e.a11y.clicked = !1);
                  });
                });
              },
              y = (t) => {
                if (e.a11y.clicked) return;
                const n = t.target.closest(
                  `.${e.params.slideClass}, swiper-slide`
                );
                if (!n || !e.slides.includes(n)) return;
                const i = e.slides.indexOf(n) === e.activeIndex,
                  a =
                    e.params.watchSlidesProgress &&
                    e.visibleSlides &&
                    e.visibleSlides.includes(n);
                i ||
                  a ||
                  (t.sourceCapabilities &&
                    t.sourceCapabilities.firesTouchEvents) ||
                  (e.isHorizontal()
                    ? (e.el.scrollLeft = 0)
                    : (e.el.scrollTop = 0),
                  e.slideTo(e.slides.indexOf(n), 0));
              },
              x = () => {
                const t = e.params.a11y;
                t.itemRoleDescriptionMessage &&
                  d(e.slides, t.itemRoleDescriptionMessage),
                  t.slideRole && l(e.slides, t.slideRole);
                const n = e.slides.length;
                t.slideLabelMessage &&
                  e.slides.forEach((i, a) => {
                    const s = e.params.loop
                      ? parseInt(i.getAttribute("data-swiper-slide-index"), 10)
                      : a;
                    c(
                      i,
                      t.slideLabelMessage
                        .replace(/\{\{index\}\}/, s + 1)
                        .replace(/\{\{slidesLength\}\}/, n)
                    );
                  });
              },
              A = () => {
                const t = e.params.a11y;
                e.isElement ? e.el.shadowEl.append(i) : e.el.append(i);
                const n = e.el;
                t.containerRoleDescriptionMessage &&
                  d(n, t.containerRoleDescriptionMessage),
                  t.containerMessage && c(n, t.containerMessage);
                const a = e.wrapperEl,
                  r =
                    t.id ||
                    a.getAttribute("id") ||
                    `swiper-wrapper-${(function (e = 16) {
                      return "x"
                        .repeat(e)
                        .replace(/x/g, () =>
                          Math.round(16 * Math.random()).toString(16)
                        );
                    })(16)}`,
                  o =
                    e.params.autoplay && e.params.autoplay.enabled
                      ? "off"
                      : "polite";
                var l;
                (l = r),
                  s(a).forEach((e) => {
                    e.setAttribute("id", l);
                  }),
                  (function (e, t) {
                    (e = s(e)).forEach((e) => {
                      e.setAttribute("aria-live", t);
                    });
                  })(a, o),
                  x();
                let { nextEl: p, prevEl: u } = e.navigation ? e.navigation : {};
                if (
                  ((p = s(p)),
                  (u = s(u)),
                  p && p.forEach((e) => f(e, r, t.nextSlideMessage)),
                  u && u.forEach((e) => f(e, r, t.prevSlideMessage)),
                  g())
                ) {
                  (Array.isArray(e.pagination.el)
                    ? e.pagination.el
                    : [e.pagination.el]
                  ).forEach((e) => {
                    e.addEventListener("keydown", h);
                  });
                }
                e.el.addEventListener("focus", y, !0),
                  e.el.addEventListener("pointerdown", v, !0),
                  e.el.addEventListener("pointerup", w, !0);
              };
            n("beforeInit", () => {
              (i = b("span", e.params.a11y.notificationClass)),
                i.setAttribute("aria-live", "assertive"),
                i.setAttribute("aria-atomic", "true");
            }),
              n("afterInit", () => {
                e.params.a11y.enabled && A();
              }),
              n(
                "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
                () => {
                  e.params.a11y.enabled && x();
                }
              ),
              n("fromEdge toEdge afterInit lock unlock", () => {
                e.params.a11y.enabled &&
                  (function () {
                    if (e.params.loop || e.params.rewind || !e.navigation)
                      return;
                    const { nextEl: t, prevEl: n } = e.navigation;
                    n && (e.isBeginning ? (p(n), o(n)) : (u(n), r(n))),
                      t && (e.isEnd ? (p(t), o(t)) : (u(t), r(t)));
                  })();
              }),
              n("paginationUpdate", () => {
                e.params.a11y.enabled &&
                  (function () {
                    const t = e.params.a11y;
                    m() &&
                      e.pagination.bullets.forEach((n) => {
                        e.params.pagination.clickable &&
                          (r(n),
                          e.params.pagination.renderBullet ||
                            (l(n, "button"),
                            c(
                              n,
                              t.paginationBulletMessage.replace(
                                /\{\{index\}\}/,
                                _(n) + 1
                              )
                            ))),
                          n.matches(re(e.params.pagination.bulletActiveClass))
                            ? n.setAttribute("aria-current", "true")
                            : n.removeAttribute("aria-current");
                      });
                  })();
              }),
              n("destroy", () => {
                e.params.a11y.enabled &&
                  (function () {
                    i && i.remove();
                    let { nextEl: t, prevEl: n } = e.navigation
                      ? e.navigation
                      : {};
                    (t = s(t)),
                      (n = s(n)),
                      t &&
                        t.forEach((e) => e.removeEventListener("keydown", h)),
                      n &&
                        n.forEach((e) => e.removeEventListener("keydown", h)),
                      g() &&
                        (Array.isArray(e.pagination.el)
                          ? e.pagination.el
                          : [e.pagination.el]
                        ).forEach((e) => {
                          e.removeEventListener("keydown", h);
                        });
                    e.el.removeEventListener("focus", y, !0),
                      e.el.removeEventListener("pointerdown", v, !0),
                      e.el.removeEventListener("pointerup", w, !0);
                  })();
              });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            t({
              history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1,
              },
            });
            let i = !1,
              a = {};
            const s = (e) =>
                e
                  .toString()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]+/g, "")
                  .replace(/--+/g, "-")
                  .replace(/^-+/, "")
                  .replace(/-+$/, ""),
              r = (e) => {
                const t = d();
                let n;
                n = e ? new URL(e) : t.location;
                const i = n.pathname
                    .slice(1)
                    .split("/")
                    .filter((e) => "" !== e),
                  a = i.length;
                return { key: i[a - 2], value: i[a - 1] };
              },
              o = (t, n) => {
                const a = d();
                if (!i || !e.params.history.enabled) return;
                let r;
                r = e.params.url ? new URL(e.params.url) : a.location;
                const o = e.slides[n];
                let l = s(o.getAttribute("data-history"));
                if (e.params.history.root.length > 0) {
                  let n = e.params.history.root;
                  "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)),
                    (l = `${n}/${t ? `${t}/` : ""}${l}`);
                } else
                  r.pathname.includes(t) || (l = `${t ? `${t}/` : ""}${l}`);
                e.params.history.keepQuery && (l += r.search);
                const c = a.history.state;
                (c && c.value === l) ||
                  (e.params.history.replaceState
                    ? a.history.replaceState({ value: l }, null, l)
                    : a.history.pushState({ value: l }, null, l));
              },
              l = (t, n, i) => {
                if (n)
                  for (let a = 0, r = e.slides.length; a < r; a += 1) {
                    const r = e.slides[a];
                    if (s(r.getAttribute("data-history")) === n) {
                      const n = e.getSlideIndex(r);
                      e.slideTo(n, t, i);
                    }
                  }
                else e.slideTo(0, t, i);
              },
              c = () => {
                (a = r(e.params.url)), l(e.params.speed, a.value, !1);
              };
            n("init", () => {
              e.params.history.enabled &&
                (() => {
                  const t = d();
                  if (e.params.history) {
                    if (!t.history || !t.history.pushState)
                      return (
                        (e.params.history.enabled = !1),
                        void (e.params.hashNavigation.enabled = !0)
                      );
                    (i = !0),
                      (a = r(e.params.url)),
                      a.key || a.value
                        ? (l(0, a.value, e.params.runCallbacksOnInit),
                          e.params.history.replaceState ||
                            t.addEventListener("popstate", c))
                        : e.params.history.replaceState ||
                          t.addEventListener("popstate", c);
                  }
                })();
            }),
              n("destroy", () => {
                e.params.history.enabled &&
                  (() => {
                    const t = d();
                    e.params.history.replaceState ||
                      t.removeEventListener("popstate", c);
                  })();
              }),
              n("transitionEnd _freeModeNoMomentumRelease", () => {
                i && o(e.params.history.key, e.activeIndex);
              }),
              n("slideChange", () => {
                i && e.params.cssMode && o(e.params.history.key, e.activeIndex);
              });
          },
          function ({ swiper: e, extendParams: t, emit: n, on: i }) {
            let a = !1;
            const s = o(),
              r = d();
            t({
              hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
                getSlideIndex(t, n) {
                  if (e.virtual && e.params.virtual.enabled) {
                    const t = e.slides.filter(
                      (e) => e.getAttribute("data-hash") === n
                    )[0];
                    if (!t) return 0;
                    return parseInt(
                      t.getAttribute("data-swiper-slide-index"),
                      10
                    );
                  }
                  return e.getSlideIndex(
                    w(
                      e.slidesEl,
                      `.${e.params.slideClass}[data-hash="${n}"], swiper-slide[data-hash="${n}"]`
                    )[0]
                  );
                },
              },
            });
            const l = () => {
                n("hashChange");
                const t = s.location.hash.replace("#", ""),
                  i =
                    e.virtual && e.params.virtual.enabled
                      ? e.slidesEl.querySelector(
                          `[data-swiper-slide-index="${e.activeIndex}"]`
                        )
                      : e.slides[e.activeIndex];
                if (t !== (i ? i.getAttribute("data-hash") : "")) {
                  const n = e.params.hashNavigation.getSlideIndex(e, t);
                  if (void 0 === n || Number.isNaN(n)) return;
                  e.slideTo(n);
                }
              },
              c = () => {
                if (!a || !e.params.hashNavigation.enabled) return;
                const t =
                    e.virtual && e.params.virtual.enabled
                      ? e.slidesEl.querySelector(
                          `[data-swiper-slide-index="${e.activeIndex}"]`
                        )
                      : e.slides[e.activeIndex],
                  i = t
                    ? t.getAttribute("data-hash") ||
                      t.getAttribute("data-history")
                    : "";
                e.params.hashNavigation.replaceState &&
                r.history &&
                r.history.replaceState
                  ? (r.history.replaceState(null, null, `#${i}` || ""),
                    n("hashSet"))
                  : ((s.location.hash = i || ""), n("hashSet"));
              };
            i("init", () => {
              e.params.hashNavigation.enabled &&
                (() => {
                  if (
                    !e.params.hashNavigation.enabled ||
                    (e.params.history && e.params.history.enabled)
                  )
                    return;
                  a = !0;
                  const t = s.location.hash.replace("#", "");
                  if (t) {
                    const n = 0,
                      i = e.params.hashNavigation.getSlideIndex(e, t);
                    e.slideTo(i || 0, n, e.params.runCallbacksOnInit, !0);
                  }
                  e.params.hashNavigation.watchState &&
                    r.addEventListener("hashchange", l);
                })();
            }),
              i("destroy", () => {
                e.params.hashNavigation.enabled &&
                  e.params.hashNavigation.watchState &&
                  r.removeEventListener("hashchange", l);
              }),
              i("transitionEnd _freeModeNoMomentumRelease", () => {
                a && c();
              }),
              i("slideChange", () => {
                a && e.params.cssMode && c();
              });
          },
          function ({ swiper: e, extendParams: t, on: n, emit: i, params: a }) {
            let s, r;
            (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
              t({
                autoplay: {
                  enabled: !1,
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !0,
                  stopOnLastSlide: !1,
                  reverseDirection: !1,
                  pauseOnMouseEnter: !1,
                },
              });
            let l,
              d,
              c,
              p,
              u,
              h,
              m,
              g = a && a.autoplay ? a.autoplay.delay : 3e3,
              f = a && a.autoplay ? a.autoplay.delay : 3e3,
              v = new Date().getTime;
            function w(t) {
              e &&
                !e.destroyed &&
                e.wrapperEl &&
                t.target === e.wrapperEl &&
                (e.wrapperEl.removeEventListener("transitionend", w), M());
            }
            const b = () => {
                if (e.destroyed || !e.autoplay.running) return;
                e.autoplay.paused ? (d = !0) : d && ((f = l), (d = !1));
                const t = e.autoplay.paused ? l : v + f - new Date().getTime();
                (e.autoplay.timeLeft = t),
                  i("autoplayTimeLeft", t, t / g),
                  (r = requestAnimationFrame(() => {
                    b();
                  }));
              },
              y = (t) => {
                if (e.destroyed || !e.autoplay.running) return;
                cancelAnimationFrame(r), b();
                let n = void 0 === t ? e.params.autoplay.delay : t;
                (g = e.params.autoplay.delay), (f = e.params.autoplay.delay);
                const a = (() => {
                  let t;
                  if (
                    ((t =
                      e.virtual && e.params.virtual.enabled
                        ? e.slides.filter((e) =>
                            e.classList.contains("swiper-slide-active")
                          )[0]
                        : e.slides[e.activeIndex]),
                    !t)
                  )
                    return;
                  return parseInt(t.getAttribute("data-swiper-autoplay"), 10);
                })();
                !Number.isNaN(a) &&
                  a > 0 &&
                  void 0 === t &&
                  ((n = a), (g = a), (f = a)),
                  (l = n);
                const o = e.params.speed,
                  d = () => {
                    e &&
                      !e.destroyed &&
                      (e.params.autoplay.reverseDirection
                        ? !e.isBeginning || e.params.loop || e.params.rewind
                          ? (e.slidePrev(o, !0, !0), i("autoplay"))
                          : e.params.autoplay.stopOnLastSlide ||
                            (e.slideTo(e.slides.length - 1, o, !0, !0),
                            i("autoplay"))
                        : !e.isEnd || e.params.loop || e.params.rewind
                        ? (e.slideNext(o, !0, !0), i("autoplay"))
                        : e.params.autoplay.stopOnLastSlide ||
                          (e.slideTo(0, o, !0, !0), i("autoplay")),
                      e.params.cssMode &&
                        ((v = new Date().getTime()),
                        requestAnimationFrame(() => {
                          y();
                        })));
                  };
                return (
                  n > 0
                    ? (clearTimeout(s),
                      (s = setTimeout(() => {
                        d();
                      }, n)))
                    : requestAnimationFrame(() => {
                        d();
                      }),
                  n
                );
              },
              x = () => {
                (e.autoplay.running = !0), y(), i("autoplayStart");
              },
              _ = () => {
                (e.autoplay.running = !1),
                  clearTimeout(s),
                  cancelAnimationFrame(r),
                  i("autoplayStop");
              },
              A = (t, n) => {
                if (e.destroyed || !e.autoplay.running) return;
                clearTimeout(s), t || (m = !0);
                const a = () => {
                  i("autoplayPause"),
                    e.params.autoplay.waitForTransition
                      ? e.wrapperEl.addEventListener("transitionend", w)
                      : M();
                };
                if (((e.autoplay.paused = !0), n))
                  return h && (l = e.params.autoplay.delay), (h = !1), void a();
                const r = l || e.params.autoplay.delay;
                (l = r - (new Date().getTime() - v)),
                  (e.isEnd && l < 0 && !e.params.loop) ||
                    (l < 0 && (l = 0), a());
              },
              M = () => {
                (e.isEnd && l < 0 && !e.params.loop) ||
                  e.destroyed ||
                  !e.autoplay.running ||
                  ((v = new Date().getTime()),
                  m ? ((m = !1), y(l)) : y(),
                  (e.autoplay.paused = !1),
                  i("autoplayResume"));
              },
              E = () => {
                if (e.destroyed || !e.autoplay.running) return;
                const t = o();
                "hidden" === t.visibilityState && ((m = !0), A(!0)),
                  "visible" === t.visibilityState && M();
              },
              C = (e) => {
                "mouse" === e.pointerType && ((m = !0), A(!0));
              },
              S = (t) => {
                "mouse" === t.pointerType && e.autoplay.paused && M();
              };
            n("init", () => {
              e.params.autoplay.enabled &&
                (e.params.autoplay.pauseOnMouseEnter &&
                  (e.el.addEventListener("pointerenter", C),
                  e.el.addEventListener("pointerleave", S)),
                o().addEventListener("visibilitychange", E),
                (v = new Date().getTime()),
                x());
            }),
              n("destroy", () => {
                e.el.removeEventListener("pointerenter", C),
                  e.el.removeEventListener("pointerleave", S),
                  o().removeEventListener("visibilitychange", E),
                  e.autoplay.running && _();
              }),
              n("beforeTransitionStart", (t, n, i) => {
                !e.destroyed &&
                  e.autoplay.running &&
                  (i || !e.params.autoplay.disableOnInteraction
                    ? A(!0, !0)
                    : _());
              }),
              n("sliderFirstMove", () => {
                !e.destroyed &&
                  e.autoplay.running &&
                  (e.params.autoplay.disableOnInteraction
                    ? _()
                    : ((c = !0),
                      (p = !1),
                      (m = !1),
                      (u = setTimeout(() => {
                        (m = !0), (p = !0), A(!0);
                      }, 200))));
              }),
              n("touchEnd", () => {
                if (!e.destroyed && e.autoplay.running && c) {
                  if (
                    (clearTimeout(u),
                    clearTimeout(s),
                    e.params.autoplay.disableOnInteraction)
                  )
                    return (p = !1), void (c = !1);
                  p && e.params.cssMode && M(), (p = !1), (c = !1);
                }
              }),
              n("slideChange", () => {
                !e.destroyed && e.autoplay.running && (h = !0);
              }),
              Object.assign(e.autoplay, {
                start: x,
                stop: _,
                pause: A,
                resume: M,
              });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            t({
              thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs",
              },
            });
            let i = !1,
              a = !1;
            function s() {
              const t = e.thumbs.swiper;
              if (!t || t.destroyed) return;
              const n = t.clickedIndex,
                i = t.clickedSlide;
              if (
                i &&
                i.classList.contains(e.params.thumbs.slideThumbActiveClass)
              )
                return;
              if (null == n) return;
              let a;
              (a = t.params.loop
                ? parseInt(
                    t.clickedSlide.getAttribute("data-swiper-slide-index"),
                    10
                  )
                : n),
                e.params.loop ? e.slideToLoop(a) : e.slideTo(a);
            }
            function r() {
              const { thumbs: t } = e.params;
              if (i) return !1;
              i = !0;
              const n = e.constructor;
              if (t.swiper instanceof n)
                (e.thumbs.swiper = t.swiper),
                  Object.assign(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  Object.assign(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  e.thumbs.swiper.update();
              else if (h(t.swiper)) {
                const i = Object.assign({}, t.swiper);
                Object.assign(i, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                  (e.thumbs.swiper = new n(i)),
                  (a = !0);
              }
              return (
                e.thumbs.swiper.el.classList.add(
                  e.params.thumbs.thumbsContainerClass
                ),
                e.thumbs.swiper.on("tap", s),
                !0
              );
            }
            function l(t) {
              const n = e.thumbs.swiper;
              if (!n || n.destroyed) return;
              const i =
                "auto" === n.params.slidesPerView
                  ? n.slidesPerViewDynamic()
                  : n.params.slidesPerView;
              let a = 1;
              const s = e.params.thumbs.slideThumbActiveClass;
              if (
                (e.params.slidesPerView > 1 &&
                  !e.params.centeredSlides &&
                  (a = e.params.slidesPerView),
                e.params.thumbs.multipleActiveThumbs || (a = 1),
                (a = Math.floor(a)),
                n.slides.forEach((e) => e.classList.remove(s)),
                n.params.loop || (n.params.virtual && n.params.virtual.enabled))
              )
                for (let t = 0; t < a; t += 1)
                  w(
                    n.slidesEl,
                    `[data-swiper-slide-index="${e.realIndex + t}"]`
                  ).forEach((e) => {
                    e.classList.add(s);
                  });
              else
                for (let t = 0; t < a; t += 1)
                  n.slides[e.realIndex + t] &&
                    n.slides[e.realIndex + t].classList.add(s);
              const r = e.params.thumbs.autoScrollOffset,
                o = r && !n.params.loop;
              if (e.realIndex !== n.realIndex || o) {
                const a = n.activeIndex;
                let s, l;
                if (n.params.loop) {
                  const t = n.slides.filter(
                    (t) =>
                      t.getAttribute("data-swiper-slide-index") ===
                      `${e.realIndex}`
                  )[0];
                  (s = n.slides.indexOf(t)),
                    (l = e.activeIndex > e.previousIndex ? "next" : "prev");
                } else
                  (s = e.realIndex),
                    (l = s > e.previousIndex ? "next" : "prev");
                o && (s += "next" === l ? r : -1 * r),
                  n.visibleSlidesIndexes &&
                    n.visibleSlidesIndexes.indexOf(s) < 0 &&
                    (n.params.centeredSlides
                      ? (s =
                          s > a
                            ? s - Math.floor(i / 2) + 1
                            : s + Math.floor(i / 2) - 1)
                      : s > a && n.params.slidesPerGroup,
                    n.slideTo(s, t ? 0 : void 0));
              }
            }
            (e.thumbs = { swiper: null }),
              n("beforeInit", () => {
                const { thumbs: t } = e.params;
                if (t && t.swiper)
                  if (
                    "string" == typeof t.swiper ||
                    t.swiper instanceof HTMLElement
                  ) {
                    const n = o(),
                      i = () => {
                        const i =
                          "string" == typeof t.swiper
                            ? n.querySelector(t.swiper)
                            : t.swiper;
                        if (i && i.swiper) (t.swiper = i.swiper), r(), l(!0);
                        else if (i) {
                          const n = (a) => {
                            (t.swiper = a.detail[0]),
                              i.removeEventListener("init", n),
                              r(),
                              l(!0),
                              t.swiper.update(),
                              e.update();
                          };
                          i.addEventListener("init", n);
                        }
                        return i;
                      },
                      a = () => {
                        if (e.destroyed) return;
                        i() || requestAnimationFrame(a);
                      };
                    requestAnimationFrame(a);
                  } else r(), l(!0);
              }),
              n("slideChange update resize observerUpdate", () => {
                l();
              }),
              n("setTransition", (t, n) => {
                const i = e.thumbs.swiper;
                i && !i.destroyed && i.setTransition(n);
              }),
              n("beforeDestroy", () => {
                const t = e.thumbs.swiper;
                t && !t.destroyed && a && t.destroy();
              }),
              Object.assign(e.thumbs, { init: r, update: l });
          },
          function ({ swiper: e, extendParams: t, emit: n, once: i }) {
            t({
              freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: 0.02,
              },
            }),
              Object.assign(e, {
                freeMode: {
                  onTouchStart: function () {
                    if (e.params.cssMode) return;
                    const t = e.getTranslate();
                    e.setTranslate(t),
                      e.setTransition(0),
                      (e.touchEventsData.velocities.length = 0),
                      e.freeMode.onTouchEnd({
                        currentPos: e.rtl ? e.translate : -e.translate,
                      });
                  },
                  onTouchMove: function () {
                    if (e.params.cssMode) return;
                    const { touchEventsData: t, touches: n } = e;
                    0 === t.velocities.length &&
                      t.velocities.push({
                        position: n[e.isHorizontal() ? "startX" : "startY"],
                        time: t.touchStartTime,
                      }),
                      t.velocities.push({
                        position: n[e.isHorizontal() ? "currentX" : "currentY"],
                        time: p(),
                      });
                  },
                  onTouchEnd: function ({ currentPos: t }) {
                    if (e.params.cssMode) return;
                    const {
                        params: a,
                        wrapperEl: s,
                        rtlTranslate: r,
                        snapGrid: o,
                        touchEventsData: l,
                      } = e,
                      d = p() - l.touchStartTime;
                    if (t < -e.minTranslate()) e.slideTo(e.activeIndex);
                    else if (t > -e.maxTranslate())
                      e.slides.length < o.length
                        ? e.slideTo(o.length - 1)
                        : e.slideTo(e.slides.length - 1);
                    else {
                      if (a.freeMode.momentum) {
                        if (l.velocities.length > 1) {
                          const t = l.velocities.pop(),
                            n = l.velocities.pop(),
                            i = t.position - n.position,
                            s = t.time - n.time;
                          (e.velocity = i / s),
                            (e.velocity /= 2),
                            Math.abs(e.velocity) < a.freeMode.minimumVelocity &&
                              (e.velocity = 0),
                            (s > 150 || p() - t.time > 300) && (e.velocity = 0);
                        } else e.velocity = 0;
                        (e.velocity *= a.freeMode.momentumVelocityRatio),
                          (l.velocities.length = 0);
                        let t = 1e3 * a.freeMode.momentumRatio;
                        const d = e.velocity * t;
                        let c = e.translate + d;
                        r && (c = -c);
                        let u,
                          h = !1;
                        const m =
                          20 *
                          Math.abs(e.velocity) *
                          a.freeMode.momentumBounceRatio;
                        let g;
                        if (c < e.maxTranslate())
                          a.freeMode.momentumBounce
                            ? (c + e.maxTranslate() < -m &&
                                (c = e.maxTranslate() - m),
                              (u = e.maxTranslate()),
                              (h = !0),
                              (l.allowMomentumBounce = !0))
                            : (c = e.maxTranslate()),
                            a.loop && a.centeredSlides && (g = !0);
                        else if (c > e.minTranslate())
                          a.freeMode.momentumBounce
                            ? (c - e.minTranslate() > m &&
                                (c = e.minTranslate() + m),
                              (u = e.minTranslate()),
                              (h = !0),
                              (l.allowMomentumBounce = !0))
                            : (c = e.minTranslate()),
                            a.loop && a.centeredSlides && (g = !0);
                        else if (a.freeMode.sticky) {
                          let t;
                          for (let e = 0; e < o.length; e += 1)
                            if (o[e] > -c) {
                              t = e;
                              break;
                            }
                          (c =
                            Math.abs(o[t] - c) < Math.abs(o[t - 1] - c) ||
                            "next" === e.swipeDirection
                              ? o[t]
                              : o[t - 1]),
                            (c = -c);
                        }
                        if (
                          (g &&
                            i("transitionEnd", () => {
                              e.loopFix();
                            }),
                          0 !== e.velocity)
                        ) {
                          if (
                            ((t = r
                              ? Math.abs((-c - e.translate) / e.velocity)
                              : Math.abs((c - e.translate) / e.velocity)),
                            a.freeMode.sticky)
                          ) {
                            const n = Math.abs((r ? -c : c) - e.translate),
                              i = e.slidesSizesGrid[e.activeIndex];
                            t =
                              n < i
                                ? a.speed
                                : n < 2 * i
                                ? 1.5 * a.speed
                                : 2.5 * a.speed;
                          }
                        } else if (a.freeMode.sticky)
                          return void e.slideToClosest();
                        a.freeMode.momentumBounce && h
                          ? (e.updateProgress(u),
                            e.setTransition(t),
                            e.setTranslate(c),
                            e.transitionStart(!0, e.swipeDirection),
                            (e.animating = !0),
                            M(s, () => {
                              e &&
                                !e.destroyed &&
                                l.allowMomentumBounce &&
                                (n("momentumBounce"),
                                e.setTransition(a.speed),
                                setTimeout(() => {
                                  e.setTranslate(u),
                                    M(s, () => {
                                      e && !e.destroyed && e.transitionEnd();
                                    });
                                }, 0));
                            }))
                          : e.velocity
                          ? (n("_freeModeNoMomentumRelease"),
                            e.updateProgress(c),
                            e.setTransition(t),
                            e.setTranslate(c),
                            e.transitionStart(!0, e.swipeDirection),
                            e.animating ||
                              ((e.animating = !0),
                              M(s, () => {
                                e && !e.destroyed && e.transitionEnd();
                              })))
                          : e.updateProgress(c),
                          e.updateActiveIndex(),
                          e.updateSlidesClasses();
                      } else {
                        if (a.freeMode.sticky) return void e.slideToClosest();
                        a.freeMode && n("_freeModeNoMomentumRelease");
                      }
                      (!a.freeMode.momentum || d >= a.longSwipesMs) &&
                        (e.updateProgress(),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses());
                    }
                  },
                },
              });
          },
          function ({ swiper: e, extendParams: t }) {
            let n, i, a;
            t({ grid: { rows: 1, fill: "column" } });
            const s = () => {
              let t = e.params.spaceBetween;
              return (
                "string" == typeof t && t.indexOf("%") >= 0
                  ? (t = (parseFloat(t.replace("%", "")) / 100) * e.size)
                  : "string" == typeof t && (t = parseFloat(t)),
                t
              );
            };
            e.grid = {
              initSlides: (t) => {
                const { slidesPerView: s } = e.params,
                  { rows: r, fill: o } = e.params.grid;
                (a = Math.floor(t / r)),
                  (n = Math.floor(t / r) === t / r ? t : Math.ceil(t / r) * r),
                  "auto" !== s && "row" === o && (n = Math.max(n, s * r)),
                  (i = n / r);
              },
              updateSlide: (t, r, o, l) => {
                const { slidesPerGroup: d } = e.params,
                  c = s(),
                  { rows: p, fill: u } = e.params.grid;
                let h, m, g;
                if ("row" === u && d > 1) {
                  const e = Math.floor(t / (d * p)),
                    i = t - p * d * e,
                    a =
                      0 === e ? d : Math.min(Math.ceil((o - e * p * d) / p), d);
                  (g = Math.floor(i / a)),
                    (m = i - g * a + e * d),
                    (h = m + (g * n) / p),
                    (r.style.order = h);
                } else
                  "column" === u
                    ? ((m = Math.floor(t / p)),
                      (g = t - m * p),
                      (m > a || (m === a && g === p - 1)) &&
                        ((g += 1), g >= p && ((g = 0), (m += 1))))
                    : ((g = Math.floor(t / i)), (m = t - g * i));
                (r.row = g),
                  (r.column = m),
                  (r.style[l("margin-top")] = 0 !== g ? c && `${c}px` : "");
              },
              updateWrapperSize: (t, i, a) => {
                const { centeredSlides: r, roundLengths: o } = e.params,
                  l = s(),
                  { rows: d } = e.params.grid;
                if (
                  ((e.virtualSize = (t + l) * n),
                  (e.virtualSize = Math.ceil(e.virtualSize / d) - l),
                  (e.wrapperEl.style[a("width")] = `${e.virtualSize + l}px`),
                  r)
                ) {
                  const t = [];
                  for (let n = 0; n < i.length; n += 1) {
                    let a = i[n];
                    o && (a = Math.floor(a)),
                      i[n] < e.virtualSize + i[0] && t.push(a);
                  }
                  i.splice(0, i.length), i.push(...t);
                }
              },
            };
          },
          function ({ swiper: e }) {
            Object.assign(e, {
              appendSlide: oe.bind(e),
              prependSlide: le.bind(e),
              addSlide: de.bind(e),
              removeSlide: ce.bind(e),
              removeAllSlides: pe.bind(e),
            });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            t({ fadeEffect: { crossFade: !1 } }),
              ue({
                effect: "fade",
                swiper: e,
                on: n,
                setTranslate: () => {
                  const { slides: t } = e;
                  e.params.fadeEffect;
                  for (let n = 0; n < t.length; n += 1) {
                    const t = e.slides[n];
                    let i = -t.swiperSlideOffset;
                    e.params.virtualTranslate || (i -= e.translate);
                    let a = 0;
                    e.isHorizontal() || ((a = i), (i = 0));
                    const s = e.params.fadeEffect.crossFade
                        ? Math.max(1 - Math.abs(t.progress), 0)
                        : 1 + Math.min(Math.max(t.progress, -1), 0),
                      r = he(0, t);
                    (r.style.opacity = s),
                      (r.style.transform = `translate3d(${i}px, ${a}px, 0px)`);
                  }
                },
                setTransition: (t) => {
                  const n = e.slides.map((e) => v(e));
                  n.forEach((e) => {
                    e.style.transitionDuration = `${t}ms`;
                  }),
                    me({
                      swiper: e,
                      duration: t,
                      transformElements: n,
                      allSlides: !0,
                    });
                },
                overwriteParams: () => ({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !e.params.cssMode,
                }),
              });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            t({
              cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            });
            const i = (e, t, n) => {
              let i = n
                  ? e.querySelector(".swiper-slide-shadow-left")
                  : e.querySelector(".swiper-slide-shadow-top"),
                a = n
                  ? e.querySelector(".swiper-slide-shadow-right")
                  : e.querySelector(".swiper-slide-shadow-bottom");
              i ||
                ((i = b("div", "swiper-slide-shadow-" + (n ? "left" : "top"))),
                e.append(i)),
                a ||
                  ((a = b(
                    "div",
                    "swiper-slide-shadow-" + (n ? "right" : "bottom")
                  )),
                  e.append(a)),
                i && (i.style.opacity = Math.max(-t, 0)),
                a && (a.style.opacity = Math.max(t, 0));
            };
            ue({
              effect: "cube",
              swiper: e,
              on: n,
              setTranslate: () => {
                const {
                    el: t,
                    wrapperEl: n,
                    slides: a,
                    width: s,
                    height: r,
                    rtlTranslate: o,
                    size: l,
                    browser: d,
                  } = e,
                  c = e.params.cubeEffect,
                  p = e.isHorizontal(),
                  u = e.virtual && e.params.virtual.enabled;
                let h,
                  m = 0;
                c.shadow &&
                  (p
                    ? ((h = e.slidesEl.querySelector(".swiper-cube-shadow")),
                      h ||
                        ((h = b("div", "swiper-cube-shadow")),
                        e.slidesEl.append(h)),
                      (h.style.height = `${s}px`))
                    : ((h = t.querySelector(".swiper-cube-shadow")),
                      h ||
                        ((h = b("div", "swiper-cube-shadow")), t.append(h))));
                for (let e = 0; e < a.length; e += 1) {
                  const t = a[e];
                  let n = e;
                  u &&
                    (n = parseInt(
                      t.getAttribute("data-swiper-slide-index"),
                      10
                    ));
                  let s = 90 * n,
                    r = Math.floor(s / 360);
                  o && ((s = -s), (r = Math.floor(-s / 360)));
                  const d = Math.max(Math.min(t.progress, 1), -1);
                  let h = 0,
                    g = 0,
                    f = 0;
                  n % 4 == 0
                    ? ((h = 4 * -r * l), (f = 0))
                    : (n - 1) % 4 == 0
                    ? ((h = 0), (f = 4 * -r * l))
                    : (n - 2) % 4 == 0
                    ? ((h = l + 4 * r * l), (f = l))
                    : (n - 3) % 4 == 0 && ((h = -l), (f = 3 * l + 4 * l * r)),
                    o && (h = -h),
                    p || ((g = h), (h = 0));
                  const v = `rotateX(${p ? 0 : -s}deg) rotateY(${
                    p ? s : 0
                  }deg) translate3d(${h}px, ${g}px, ${f}px)`;
                  d <= 1 &&
                    d > -1 &&
                    ((m = 90 * n + 90 * d), o && (m = 90 * -n - 90 * d)),
                    (t.style.transform = v),
                    c.slideShadows && i(t, d, p);
                }
                if (
                  ((n.style.transformOrigin = `50% 50% -${l / 2}px`),
                  (n.style["-webkit-transform-origin"] = `50% 50% -${l / 2}px`),
                  c.shadow)
                )
                  if (p)
                    h.style.transform = `translate3d(0px, ${
                      s / 2 + c.shadowOffset
                    }px, ${-s / 2}px) rotateX(90deg) rotateZ(0deg) scale(${
                      c.shadowScale
                    })`;
                  else {
                    const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                      t =
                        1.5 -
                        (Math.sin((2 * e * Math.PI) / 360) / 2 +
                          Math.cos((2 * e * Math.PI) / 360) / 2),
                      n = c.shadowScale,
                      i = c.shadowScale / t,
                      a = c.shadowOffset;
                    h.style.transform = `scale3d(${n}, 1, ${i}) translate3d(0px, ${
                      r / 2 + a
                    }px, ${-r / 2 / i}px) rotateX(-90deg)`;
                  }
                const g =
                  (d.isSafari || d.isWebView) && d.needPerspectiveFix
                    ? -l / 2
                    : 0;
                (n.style.transform = `translate3d(0px,0,${g}px) rotateX(${
                  e.isHorizontal() ? 0 : m
                }deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`),
                  n.style.setProperty("--swiper-cube-translate-z", `${g}px`);
              },
              setTransition: (t) => {
                const { el: n, slides: i } = e;
                if (
                  (i.forEach((e) => {
                    (e.style.transitionDuration = `${t}ms`),
                      e
                        .querySelectorAll(
                          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                        )
                        .forEach((e) => {
                          e.style.transitionDuration = `${t}ms`;
                        });
                  }),
                  e.params.cubeEffect.shadow && !e.isHorizontal())
                ) {
                  const e = n.querySelector(".swiper-cube-shadow");
                  e && (e.style.transitionDuration = `${t}ms`);
                }
              },
              recreateShadows: () => {
                const t = e.isHorizontal();
                e.slides.forEach((e) => {
                  const n = Math.max(Math.min(e.progress, 1), -1);
                  i(e, n, t);
                });
              },
              getEffectParams: () => e.params.cubeEffect,
              perspective: () => !0,
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              }),
            });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
            const i = (t, n, i) => {
              let a = e.isHorizontal()
                  ? t.querySelector(".swiper-slide-shadow-left")
                  : t.querySelector(".swiper-slide-shadow-top"),
                s = e.isHorizontal()
                  ? t.querySelector(".swiper-slide-shadow-right")
                  : t.querySelector(".swiper-slide-shadow-bottom");
              a || (a = ge(0, t, e.isHorizontal() ? "left" : "top")),
                s || (s = ge(0, t, e.isHorizontal() ? "right" : "bottom")),
                a && (a.style.opacity = Math.max(-n, 0)),
                s && (s.style.opacity = Math.max(n, 0));
            };
            ue({
              effect: "flip",
              swiper: e,
              on: n,
              setTranslate: () => {
                const { slides: t, rtlTranslate: n } = e,
                  a = e.params.flipEffect;
                for (let s = 0; s < t.length; s += 1) {
                  const r = t[s];
                  let o = r.progress;
                  e.params.flipEffect.limitRotation &&
                    (o = Math.max(Math.min(r.progress, 1), -1));
                  const l = r.swiperSlideOffset;
                  let d = -180 * o,
                    c = 0,
                    p = e.params.cssMode ? -l - e.translate : -l,
                    u = 0;
                  e.isHorizontal()
                    ? n && (d = -d)
                    : ((u = p), (p = 0), (c = -d), (d = 0)),
                    (r.style.zIndex = -Math.abs(Math.round(o)) + t.length),
                    a.slideShadows && i(r, o);
                  const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                  he(0, r).style.transform = h;
                }
              },
              setTransition: (t) => {
                const n = e.slides.map((e) => v(e));
                n.forEach((e) => {
                  (e.style.transitionDuration = `${t}ms`),
                    e
                      .querySelectorAll(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                      )
                      .forEach((e) => {
                        e.style.transitionDuration = `${t}ms`;
                      });
                }),
                  me({ swiper: e, duration: t, transformElements: n });
              },
              recreateShadows: () => {
                e.params.flipEffect;
                e.slides.forEach((t) => {
                  let n = t.progress;
                  e.params.flipEffect.limitRotation &&
                    (n = Math.max(Math.min(t.progress, 1), -1)),
                    i(t, n);
                });
              },
              getEffectParams: () => e.params.flipEffect,
              perspective: () => !0,
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode,
              }),
            });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            t({
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
              },
            }),
              ue({
                effect: "coverflow",
                swiper: e,
                on: n,
                setTranslate: () => {
                  const {
                      width: t,
                      height: n,
                      slides: i,
                      slidesSizesGrid: a,
                    } = e,
                    s = e.params.coverflowEffect,
                    r = e.isHorizontal(),
                    o = e.translate,
                    l = r ? t / 2 - o : n / 2 - o,
                    d = r ? s.rotate : -s.rotate,
                    c = s.depth;
                  for (let e = 0, t = i.length; e < t; e += 1) {
                    const t = i[e],
                      n = a[e],
                      o = (l - t.swiperSlideOffset - n / 2) / n,
                      p =
                        "function" == typeof s.modifier
                          ? s.modifier(o)
                          : o * s.modifier;
                    let u = r ? d * p : 0,
                      h = r ? 0 : d * p,
                      m = -c * Math.abs(p),
                      g = s.stretch;
                    "string" == typeof g &&
                      -1 !== g.indexOf("%") &&
                      (g = (parseFloat(s.stretch) / 100) * n);
                    let f = r ? 0 : g * p,
                      v = r ? g * p : 0,
                      w = 1 - (1 - s.scale) * Math.abs(p);
                    Math.abs(v) < 0.001 && (v = 0),
                      Math.abs(f) < 0.001 && (f = 0),
                      Math.abs(m) < 0.001 && (m = 0),
                      Math.abs(u) < 0.001 && (u = 0),
                      Math.abs(h) < 0.001 && (h = 0),
                      Math.abs(w) < 0.001 && (w = 0);
                    const b = `translate3d(${v}px,${f}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (
                      ((he(0, t).style.transform = b),
                      (t.style.zIndex = 1 - Math.abs(Math.round(p))),
                      s.slideShadows)
                    ) {
                      let e = r
                          ? t.querySelector(".swiper-slide-shadow-left")
                          : t.querySelector(".swiper-slide-shadow-top"),
                        n = r
                          ? t.querySelector(".swiper-slide-shadow-right")
                          : t.querySelector(".swiper-slide-shadow-bottom");
                      e || (e = ge(0, t, r ? "left" : "top")),
                        n || (n = ge(0, t, r ? "right" : "bottom")),
                        e && (e.style.opacity = p > 0 ? p : 0),
                        n && (n.style.opacity = -p > 0 ? -p : 0);
                    }
                  }
                },
                setTransition: (t) => {
                  e.slides
                    .map((e) => v(e))
                    .forEach((e) => {
                      (e.style.transitionDuration = `${t}ms`),
                        e
                          .querySelectorAll(
                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                          )
                          .forEach((e) => {
                            e.style.transitionDuration = `${t}ms`;
                          });
                    });
                },
                perspective: () => !0,
                overwriteParams: () => ({ watchSlidesProgress: !0 }),
              });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            t({
              creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1,
                },
                next: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1,
                },
              },
            });
            const i = (e) => ("string" == typeof e ? e : `${e}px`);
            ue({
              effect: "creative",
              swiper: e,
              on: n,
              setTranslate: () => {
                const { slides: t, wrapperEl: n, slidesSizesGrid: a } = e,
                  s = e.params.creativeEffect,
                  { progressMultiplier: r } = s,
                  o = e.params.centeredSlides;
                if (o) {
                  const t = a[0] / 2 - e.params.slidesOffsetBefore || 0;
                  n.style.transform = `translateX(calc(50% - ${t}px))`;
                }
                for (let n = 0; n < t.length; n += 1) {
                  const a = t[n],
                    l = a.progress,
                    d = Math.min(
                      Math.max(a.progress, -s.limitProgress),
                      s.limitProgress
                    );
                  let c = d;
                  o ||
                    (c = Math.min(
                      Math.max(a.originalProgress, -s.limitProgress),
                      s.limitProgress
                    ));
                  const p = a.swiperSlideOffset,
                    u = [e.params.cssMode ? -p - e.translate : -p, 0, 0],
                    h = [0, 0, 0];
                  let m = !1;
                  e.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
                  let g = {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    scale: 1,
                    opacity: 1,
                  };
                  d < 0
                    ? ((g = s.next), (m = !0))
                    : d > 0 && ((g = s.prev), (m = !0)),
                    u.forEach((e, t) => {
                      u[t] = `calc(${e}px + (${i(g.translate[t])} * ${Math.abs(
                        d * r
                      )}))`;
                    }),
                    h.forEach((e, t) => {
                      h[t] = g.rotate[t] * Math.abs(d * r);
                    }),
                    (a.style.zIndex = -Math.abs(Math.round(l)) + t.length);
                  const f = u.join(", "),
                    v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                    w =
                      c < 0
                        ? `scale(${1 + (1 - g.scale) * c * r})`
                        : `scale(${1 - (1 - g.scale) * c * r})`,
                    b =
                      c < 0
                        ? 1 + (1 - g.opacity) * c * r
                        : 1 - (1 - g.opacity) * c * r,
                    y = `translate3d(${f}) ${v} ${w}`;
                  if ((m && g.shadow) || !m) {
                    let e = a.querySelector(".swiper-slide-shadow");
                    if ((!e && g.shadow && (e = ge(0, a)), e)) {
                      const t = s.shadowPerProgress
                        ? d * (1 / s.limitProgress)
                        : d;
                      e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                    }
                  }
                  const x = he(0, a);
                  (x.style.transform = y),
                    (x.style.opacity = b),
                    g.origin && (x.style.transformOrigin = g.origin);
                }
              },
              setTransition: (t) => {
                const n = e.slides.map((e) => v(e));
                n.forEach((e) => {
                  (e.style.transitionDuration = `${t}ms`),
                    e.querySelectorAll(".swiper-slide-shadow").forEach((e) => {
                      e.style.transitionDuration = `${t}ms`;
                    });
                }),
                  me({
                    swiper: e,
                    duration: t,
                    transformElements: n,
                    allSlides: !0,
                  });
              },
              perspective: () => e.params.creativeEffect.perspective,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode,
              }),
            });
          },
          function ({ swiper: e, extendParams: t, on: n }) {
            t({
              cardsEffect: {
                slideShadows: !0,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8,
              },
            }),
              ue({
                effect: "cards",
                swiper: e,
                on: n,
                setTranslate: () => {
                  const { slides: t, activeIndex: n, rtlTranslate: i } = e,
                    a = e.params.cardsEffect,
                    { startTranslate: s, isTouched: r } = e.touchEventsData,
                    o = i ? -e.translate : e.translate;
                  for (let l = 0; l < t.length; l += 1) {
                    const d = t[l],
                      c = d.progress,
                      p = Math.min(Math.max(c, -4), 4);
                    let u = d.swiperSlideOffset;
                    e.params.centeredSlides &&
                      !e.params.cssMode &&
                      (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
                      e.params.centeredSlides &&
                        e.params.cssMode &&
                        (u -= t[0].swiperSlideOffset);
                    let h = e.params.cssMode ? -u - e.translate : -u,
                      m = 0;
                    const g = -100 * Math.abs(p);
                    let f = 1,
                      v = -a.perSlideRotate * p,
                      w = a.perSlideOffset - 0.75 * Math.abs(p);
                    const b =
                        e.virtual && e.params.virtual.enabled
                          ? e.virtual.from + l
                          : l,
                      y =
                        (b === n || b === n - 1) &&
                        p > 0 &&
                        p < 1 &&
                        (r || e.params.cssMode) &&
                        o < s,
                      x =
                        (b === n || b === n + 1) &&
                        p < 0 &&
                        p > -1 &&
                        (r || e.params.cssMode) &&
                        o > s;
                    if (y || x) {
                      const e =
                        (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
                      (v += -28 * p * e),
                        (f += -0.5 * e),
                        (w += 96 * e),
                        (m = -25 * e * Math.abs(p) + "%");
                    }
                    if (
                      ((h =
                        p < 0
                          ? `calc(${h}px ${i ? "-" : "+"} (${
                              w * Math.abs(p)
                            }%))`
                          : p > 0
                          ? `calc(${h}px ${i ? "-" : "+"} (-${
                              w * Math.abs(p)
                            }%))`
                          : `${h}px`),
                      !e.isHorizontal())
                    ) {
                      const e = m;
                      (m = h), (h = e);
                    }
                    const _ =
                        p < 0 ? "" + (1 + (1 - f) * p) : "" + (1 - (1 - f) * p),
                      A = `\n        translate3d(${h}, ${m}, ${g}px)\n        rotateZ(${
                        a.rotate ? (i ? -v : v) : 0
                      }deg)\n        scale(${_})\n      `;
                    if (a.slideShadows) {
                      let e = d.querySelector(".swiper-slide-shadow");
                      e || (e = ge(0, d)),
                        e &&
                          (e.style.opacity = Math.min(
                            Math.max((Math.abs(p) - 0.5) / 0.5, 0),
                            1
                          ));
                    }
                    d.style.zIndex = -Math.abs(Math.round(c)) + t.length;
                    he(0, d).style.transform = A;
                  }
                },
                setTransition: (t) => {
                  const n = e.slides.map((e) => v(e));
                  n.forEach((e) => {
                    (e.style.transitionDuration = `${t}ms`),
                      e
                        .querySelectorAll(".swiper-slide-shadow")
                        .forEach((e) => {
                          e.style.transitionDuration = `${t}ms`;
                        });
                  }),
                    me({ swiper: e, duration: t, transformElements: n });
                },
                perspective: () => !0,
                overwriteParams: () => ({
                  watchSlidesProgress: !0,
                  virtualTranslate: !e.params.cssMode,
                }),
              });
          },
        ];
        ae.use(fe);
        var ve = n(72),
          we = n.n(ve),
          be = n(825),
          ye = n.n(be),
          xe = n(659),
          _e = n.n(xe),
          Ae = n(56),
          Me = n.n(Ae),
          Ee = n(540),
          Ce = n.n(Ee),
          Se = n(113),
          Ie = n.n(Se),
          Te = n(219),
          ke = {};
        (ke.styleTagTransform = Ie()),
          (ke.setAttributes = Me()),
          (ke.insert = _e().bind(null, "head")),
          (ke.domAPI = ye()),
          (ke.insertStyleElement = Ce());
        we()(Te.A, ke);
        Te.A && Te.A.locals && Te.A.locals;
        var Le = n(915),
          ze = {};
        (ze.styleTagTransform = Ie()),
          (ze.setAttributes = Me()),
          (ze.insert = _e().bind(null, "head")),
          (ze.domAPI = ye()),
          (ze.insertStyleElement = Ce());
        we()(Le.A, ze);
        Le.A && Le.A.locals && Le.A.locals;
        var De = n(972),
          Pe = {};
        (Pe.styleTagTransform = Ie()),
          (Pe.setAttributes = Me()),
          (Pe.insert = _e().bind(null, "head")),
          (Pe.domAPI = ye()),
          (Pe.insertStyleElement = Ce());
        we()(De.A, Pe);
        De.A && De.A.locals && De.A.locals;
        var Ne = n(550),
          $e = {};
        ($e.styleTagTransform = Ie()),
          ($e.setAttributes = Me()),
          ($e.insert = _e().bind(null, "head")),
          ($e.domAPI = ye()),
          ($e.insertStyleElement = Ce());
        we()(Ne.A, $e);
        Ne.A && Ne.A.locals && Ne.A.locals;
        var Oe = n(224),
          je = {};
        (je.styleTagTransform = Ie()),
          (je.setAttributes = Me()),
          (je.insert = _e().bind(null, "head")),
          (je.domAPI = ye()),
          (je.insertStyleElement = Ce());
        we()(Oe.A, je);
        Oe.A && Oe.A.locals && Oe.A.locals;
        var Be = n(42),
          qe = {};
        (qe.styleTagTransform = Ie()),
          (qe.setAttributes = Me()),
          (qe.insert = _e().bind(null, "head")),
          (qe.domAPI = ye()),
          (qe.insertStyleElement = Ce());
        we()(Be.A, qe);
        Be.A && Be.A.locals && Be.A.locals;
        var He = n(609),
          Re = {};
        (Re.styleTagTransform = Ie()),
          (Re.setAttributes = Me()),
          (Re.insert = _e().bind(null, "head")),
          (Re.domAPI = ye()),
          (Re.insertStyleElement = Ce());
        we()(He.A, Re);
        He.A && He.A.locals && He.A.locals;
        var Ge = n(134),
          Ye = {};
        (Ye.styleTagTransform = Ie()),
          (Ye.setAttributes = Me()),
          (Ye.insert = _e().bind(null, "head")),
          (Ye.domAPI = ye()),
          (Ye.insertStyleElement = Ce());
        we()(Ge.A, Ye);
        Ge.A && Ge.A.locals && Ge.A.locals;
        const Ve =
            "data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWhpZGRlbj0idHJ1ZSIgaGVpZ2h0PSIxZW0iIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTUuNTM2IDguNDY0YTUgNSAwIDAxMCA3LjA3Mm0yLjgyOC05LjlhOSA5IDAgMDEwIDEyLjcyOE01LjU4NiAxNUg0YTEgMSAwIDAxLTEtMXYtNGExIDEgMCAwMTEtMWgxLjU4Nmw0LjcwNy00LjcwN0MxMC45MjMgMy42NjMgMTIgNC4xMDkgMTIgNXYxNGMwIC44OTEtMS4wNzcgMS4zMzctMS43MDcuNzA3TDUuNTg2IDE1eiI+PC9wYXRoPjwvc3ZnPg==",
          Ue =
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0id2hpdGUiIGNsYXNzPSJiaSBiaS1oZWFydCIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtOCAyLjc0OC0uNzE3LS43MzdDNS42LjI4MSAyLjUxNC44NzggMS40IDMuMDUzYy0uNTIzIDEuMDIzLS42NDEgMi41LjMxNCA0LjM4NS45MiAxLjgxNSAyLjgzNCAzLjk4OSA2LjI4NiA2LjM1NyAzLjQ1Mi0yLjM2OCA1LjM2NS00LjU0MiA2LjI4Ni02LjM1Ny45NTUtMS44ODYuODM4LTMuMzYyLjMxNC00LjM4NUMxMy40ODYuODc4IDEwLjQuMjggOC43MTcgMi4wMUw4IDIuNzQ4ek04IDE1Qy03LjMzMyA0Ljg2OCAzLjI3OS0zLjA0IDcuODI0IDEuMTQzYy4wNi4wNTUuMTE5LjExMi4xNzYuMTcxYTMuMTIgMy4xMiAwIDAgMSAuMTc2LS4xN0MxMi43Mi0zLjA0MiAyMy4zMzMgNC44NjcgOCAxNXoiLz4KPC9zdmc+",
          Fe =
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0icmVkIiBjbGFzcz0iYmkgYmktaGVhcnQtZmlsbCIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDEuMzE0QzEyLjQzOC0zLjI0OCAyMy41MzQgNC43MzUgOCAxNS03LjUzNCA0LjczNiAzLjU2Mi0zLjI0OCA4IDEuMzE0eiIvPgo8L3N2Zz4=",
          Ze =
            "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSIzNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTQwNS4yLDIzMi45TDEyNi44LDY3LjJjLTMuNC0yLTYuOS0zLjItMTAuOS0zLjJjLTEwLjksMC0xOS44LDktMTkuOCwyMEg5NnYzNDRoMC4xYzAsMTEsOC45LDIwLDE5LjgsMjAgIGM0LjEsMCw3LjUtMS40LDExLjItMy40bDI3OC4xLTE2NS41YzYuNi01LjUsMTAuOC0xMy44LDEwLjgtMjMuMUM0MTYsMjQ2LjcsNDExLjgsMjM4LjUsNDA1LjIsMjMyLjl6Ii8+PC9zdmc+";
        function We(e, t, n) {
          if (
            (0 === e.indexOf("#") && (e = e.slice(1)),
            3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
            6 !== e.length)
          )
            throw new Error("Invalid HEX color.");
          var i =
            0.299 * parseInt(e.slice(0, 2), 16) +
              0.587 * parseInt(e.slice(2, 4), 16) +
              0.114 * parseInt(e.slice(4, 6), 16) >
            186
              ? "#373737"
              : "#eee";
          return t
            ? (0 === i.indexOf("#") && (i = i.slice(1)),
              "rgba(" +
                parseInt(i.slice(0, 2), 16) +
                ", " +
                parseInt(i.slice(2, 4), 16) +
                ", " +
                parseInt(i.slice(4, 6), 16) +
                (null !== n ? ", " + n : ", 1") +
                ")")
            : i;
        }
        function Xe(e, t, n, i, a) {
          var s = "";
          return (
            "parent" === n &&
              t.length > 0 &&
              t.map((t, n) => {
                t instanceof Object &&
                  (s += `<div class="swiper-slide">\n              <div\n                class="sa_shorts_video-shorts-product"\n              >\n                  <div class="sa_shorts_product-image-wrapper">\n                      <img\n                          loading="${
                    a < 2 ? "eager" : "lazy"
                  }"\n                          src="${
                    t.product_display_image || t.product_images[0]
                  }"\n                          alt="product"\n                          class="sa_shorts_product-image"\n                      />\n                  </div>\n                  <div class="sa_shorts_product-details">\n                    <p\n                      class="name"\n                    >\n                      ${
                    t.product_name
                  }\n                    </p>\n                      <div style="display: flex; gap: 2px">\n                          <p\n                            class="sa_shorts_video-shorts-discount-price"\n                          >\n                            ${
                    "INR" === t.product_currency
                      ? "&#8377;"
                      : "USD" === t.product_currency
                      ? "&dollar;"
                      : "EUR" === t.product_currency
                      ? "&euro;"
                      : ""
                  }\n                            ${
                    t.offer_price <= 0 ? t.product_price : t.offer_price
                  }\n                          </p>\n                          <p\n                            style="\n                              display:${
                    t.offer_price <= 0 ? "none" : "block"
                  };\n                              color:${We(
                    We(e.theme_color)
                  )}"\n                            class="sa_shorts_video-shorts-price"\n                          >\n                            ${
                    "INR" === t.product_currency
                      ? "&#8377;"
                      : "USD" === t.product_currency
                      ? "&dollar;"
                      : "EUR" === t.product_currency
                      ? "&euro;"
                      : ""
                  }\n                            ${
                    t.product_price
                  }\n                          </p>\n                      </div>\n                        <a class="cta-link" href="${
                    t.product_url || "#"
                  }" target="_blank"\n                        data-media-id="${
                    i.id || ""
                  }"\n                        data-product-id="${
                    t.id || ""
                  }"\n                        >\n                        <div\n                          style="\n                            background:${
                    e.theme_color
                  };\n                            color:${We(
                    e.theme_color
                  )}"\n                          class="sa_shorts_add-cart-btn sa_shorts_product-available"\n                        >\n                         ${
                    i?.cta_text || "Buy Now"
                  }\n                        </div>\n                      </a>\n                  </div>\n              </div>\n          </div>`);
              }),
            "carousel" === n &&
              t.length > 0 &&
              t.map((t, n) => {
                t instanceof Object &&
                  (s += `<div class="swiper-slide">\n              <div\n                class="sa_shorts_video-shorts-product"\n              >\n                <div class="sa_shorts_product-image-wrapper">\n                    <img\n                        loading="lazy"\n                        src="${
                    t.product_display_image || t.product_images[0]
                  }"\n                        alt="product"\n                        class="sa_shorts_product-image"\n                    />\n                </div>\n                <div class="sa_shorts_product-details">\n                    <p\n                      class="name"\n                    >\n                      ${
                    t.product_name
                  }\n                    </p>\n                    <div style="display: flex; gap: 2px">\n                        <p\n                          class="sa_shorts_video-shorts-discount-price"\n                        >\n                          ${
                    "INR" === t.product_currency
                      ? "&#8377;"
                      : "USD" === t.product_currency
                      ? "&dollar;"
                      : "EUR" === t.product_currency
                      ? "&euro;"
                      : ""
                  }\n                          ${
                    t.offer_price <= 0 ? t.product_price : t.offer_price
                  }\n                        </p>\n                        <p\n                          style="\n                            display:${
                    t.offer_price <= 0 ? "none" : "block"
                  };\n                            color:${We(
                    We(e.theme_color)
                  )}"\n                          class="sa_shorts_video-shorts-price"\n                        >\n                          ${
                    "INR" === t.product_currency
                      ? "&#8377;"
                      : "USD" === t.product_currency
                      ? "&dollar;"
                      : "EUR" === t.product_currency
                      ? "&euro;"
                      : ""
                  }\n                          ${
                    t.product_price
                  }\n                        </p>\n                    </div>\n                    <a class="cta-link" href="${
                    t.product_url || "#"
                  }" target="_blank"\n                    data-media-id="${
                    i.id || ""
                  }"\n                    data-product-id="${
                    t.id || ""
                  }"\n                    >\n                      <div\n                        style="\n                          background:${
                    e.theme_color
                  };\n                          color:${We(
                    e.theme_color
                  )}"\n                        class="sa_shorts_add-cart-btn sa_shorts_product-available"\n                      >\n                        ${
                    i?.cta_text || "Buy Now"
                  }\n                      </div>\n                    </a>\n                </div>\n                <div\n                  style="display:${
                    t.offer_price <= 0 ? "none" : "flex"
                  }"\n                  class="sa_shorts_offer-box"\n                >\n                  <p class="sa_shorts_discount-percentage">\n                      ${Math.round(
                    Math.abs(
                      ((t.offer_price - t.product_price) / +t.product_price) *
                        100
                    )
                  )}%\n                  </p>\n                  <p class="sa_shorts_off-text">OFF</p>\n                </div>\n            </div>\n          </div>`);
              }),
            t.length <= 0 &&
              (s += `<div class="swiper-slide">\n              <a\n                class="cta-link non-products-cta-link"\n                style="\n                  display: ${
                "" !== i.cta_link ? "block" : "none"
              };\n                  height: ${
                "parent" === n ? 40 : 80
              }px";\n                href="${
                i.cta_link || "#"
              }"\n                target="_blank"\n                data-media-id="${
                i.id
              }"\n              >\n                <div\n                  style="\n                    margin: ${
                "parent" === n ? "0 0 5px" : "0 0"
              };\n                    bottom: 0;\n                    background: ${
                e.theme_color
              };\n                    color: ${We(
                e.theme_color
              )}";\n                  class="sa_shorts_cta-btn"\n                >\n                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>\n                  ${
                i.cta_text
              }\n                </div>\n              </a>\n            </div>`),
            s
          );
        }
        function Qe(e, t) {
          const n = document.createElement("div");
          (n.style[t] = e),
            (n.style.display = "none"),
            document.body.appendChild(n);
          const i = window.getComputedStyle(n)[t];
          return document.body.removeChild(n), i;
        }
        const Je = (e, t = !1) =>
          t
            ? `\n      <div class="sa_shorts_whatsapp-me-btn-wrapper">\n        <input\n          type="hidden"\n          value="${
                e.whatsapp_message || ""
              }"\n          style="display: none"\n        />\n        <div class="sa_shorts_whatsapp-me-btn">\n          <img\n            src="data:image/svg+xml;base64,PHN2ZwogIHN0cm9rZT0iY3VycmVudENvbG9yIgogIGZpbGw9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjAiCiAgdmlld0JveD0iMCAwIDQ0OCA1MTIiCiAgY29sb3I9IiNmZmYiCiAgaGVpZ2h0PSIyNCIKICB3aWR0aD0iMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHN0eWxlPSJjb2xvcjojZmZmOyIKPgogIDxwYXRoCiAgICBkPSJNMzgwLjkgOTcuMUMzMzkgNTUuMSAyODMuMiAzMiAyMjMuOSAzMmMtMTIyLjQgMC0yMjIgOTkuNi0yMjIgMjIyIDAgMzkuMSAxMC4yIDc3LjMgMjkuNiAxMTFMMCA0ODBsMTE3LjctMzAuOWMzMi40IDE3LjcgNjguOSAyNyAxMDYuMSAyN2guMWMxMjIuMyAwIDIyNC4xLTk5LjYgMjI0LjEtMjIyIDAtNTkuMy0yNS4yLTExNS02Ny4xLTE1N3ptLTE1NyAzNDEuNmMtMzMuMiAwLTY1LjctOC45LTk0LTI1LjdsLTYuNy00LTY5LjggMTguM0w3MiAzNTkuMmwtNC40LTdjLTE4LjUtMjkuNC0yOC4yLTYzLjMtMjguMi05OC4yIDAtMTAxLjcgODIuOC0xODQuNSAxODQuNi0xODQuNSA0OS4zIDAgOTUuNiAxOS4yIDEzMC40IDU0LjEgMzQuOCAzNC45IDU2LjIgODEuMiA1Ni4xIDEzMC41IDAgMTAxLjgtODQuOSAxODQuNi0xODYuNiAxODQuNnptMTAxLjItMTM4LjJjLTUuNS0yLjgtMzIuOC0xNi4yLTM3LjktMTgtNS4xLTEuOS04LjgtMi44LTEyLjUgMi44LTMuNyA1LjYtMTQuMyAxOC0xNy42IDIxLjgtMy4yIDMuNy02LjUgNC4yLTEyIDEuNC0zMi42LTE2LjMtNTQtMjkuMS03NS41LTY2LTUuNy05LjggNS43LTkuMSAxNi4zLTMwLjMgMS44LTMuNy45LTYuOS0uNS05LjctMS40LTIuOC0xMi41LTMwLjEtMTcuMS00MS4yLTQuNS0xMC44LTkuMS05LjMtMTIuNS05LjUtMy4yLS4yLTYuOS0uMi0xMC42LS4yLTMuNyAwLTkuNyAxLjQtMTQuOCA2LjktNS4xIDUuNi0xOS40IDE5LTE5LjQgNDYuMyAwIDI3LjMgMTkuOSA1My43IDIyLjYgNTcuNCAyLjggMy43IDM5LjEgNTkuNyA5NC44IDgzLjggMzUuMiAxNS4yIDQ5IDE2LjUgNjYuNiAxMy45IDEwLjctMS42IDMyLjgtMTMuNCAzNy40LTI2LjQgNC42LTEzIDQuNi0yNC4xIDMuMi0yNi40LTEuMy0yLjUtNS0zLjktMTAuNS02LjZ6IgogID4KICA8L3BhdGg+Cjwvc3ZnPg=="\n            alt="WhatsApp us"\n            class="sa_shorts_whatsapp-me-btn-icon"\n          />\n        </div>\n        <p class="sa_shorts_whatsapp-me-btn-text">WhatsApp us</p>\n      </div>\n    `
            : "";
        function Ke(e, n, i) {
          var a = "",
            s = "";
          const r = window.devicePixelRatio,
            o = t.url.includes("platform-stg")
              ? "https://saleassist-stg.gumlet.io"
              : "https://prod-saleassist.gumlet.io",
            l =
              parseFloat(Qe(this.width, "width")) >
              parseFloat(Qe(this.height, "height")),
            d = "saleassist-video-shorts-floating-tile" === n.id,
            c = (e) => {
              const t = {
                width: d ? "90px" : "160px",
                height: d ? "150px" : "270px",
              };
              return "story" === this.type
                ? "100px"
                : window.matchMedia("(max-width: 767px)").matches
                ? t[e]
                : this[e];
            },
            p = (e) => i === e && "coverflow" === this.type;
          e.media.map((t, n) => {
            (a += ` <div\n        class="swiper-slide sa_shorts_video-wrapper sa_shorts_relative"\n        style="width:${c(
              "width"
            )};\n              height:${c(
              "height"
            )};\n              border-radius:${
              d
                ? "8px"
                : ((e) =>
                    "story" === e.type
                      ? "50%"
                      : "none" !== e.borderRadius
                      ? "18px"
                      : "0px")(this)
            };\n              box-shadow: ${
              "coverflow" === this.type
                ? "rgba(0, 0, 0, 0.6) 0px 0px 30px"
                : "none"
            };\n              "\n      >\n        <div\n          id="video"\n          thumbnail="${
              t.thumbnail_url
            }"\n          src-data="${t.media}"\n          media-id="${
              t.id
            }"\n        >\n        ${((e, t, n, i, a, s, r, o, l) => {
              const d =
                t ||
                n +
                  `/thumbnail.jpeg?video_url=${s}&width=${parseFloat(
                    Qe(r, "width")
                  )}&dpr=${o}`;
              return (i || a) && l
                ? `<video\n      preload="metadata"\n      playsinline\n      autoplay\n      loop\n      muted\n      poster="${l}"\n    >\n      <source src="${l}" type="video/mp4" />\n    </video>`
                : `<img\n    loading="${
                    e < 8 ? "eager" : "lazy"
                  }"\n    class="video-place-holder-image"\n    src="${d}"\n    alt="video thumbnail"\n    />`;
            })(
              n,
              t.thumbnail_url,
              o,
              e.animated_thumbnail,
              p(n),
              t.media,
              this.width,
              r,
              t.short_video_url
            )}\n        </div>\n        <div class="sa_shorts_parentVideo-caption">\n          <p>${
              t.caption
            }</p>\n        </div>\n\n        <div class="sa_shorts_share-shorts-btn">\n          <svg\n            width="24"\n            height="24"\n            data-name="Layer 1"\n            id="Layer_1"\n            viewBox="0 0 24 24"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z"\n              fill="#fff"\n            />\n          </svg>\n        </div>\n\n        <div class="sa_shorts_mute-unmute-parent-video">\n          <svg\n            class="sa_shorts_parent-video-mute-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            stroke="#fff"\n            fill="none"\n            stroke-width="2"\n            viewBox="0 0 24 24"\n            aria-hidden="true"\n            height="1em"\n            width="1em"\n          >\n            <path\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"\n              clip-rule="evenodd"\n            />\n            <path\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"\n            />\n          </svg>\n          <svg\n            class="sa_shorts_parent-video-unmute-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            stroke="#fff"\n            fill="none"\n            stroke-width="2"\n            viewBox="0 0 24 24"\n            aria-hidden="true"\n            height="1em"\n            width="1em"\n          >\n            <path\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"\n            />\n          </svg>\n          ${
              "true" === this.disableVideoModal
                ? '<p class="sa_shorts_unmute-animation">Click to unmute</p>'
                : ""
            }\n        </div>\n\n        <div\n          id="video-tile-play-btn"\n          style="display:${
              "story" === this.type || this.autoplay ? "none" : "block"
            }"\n          class="sa_shorts_parent-video-play-btn"\n        >\n          <img loading="lazy" src="${Ze}" alt="" />\n        </div>\n\n        <div\n          style="display:${
              "story" === this.type && "none"
            }"\n          class="sa_shorts_products-wrapper"\n        >\n          <div class="swiper sa_shorts_childSwiper">\n            <div class="swiper-wrapper">\n              ${Xe(
              e,
              t.products,
              "parent",
              t,
              n
            )}\n            </div>\n          </div>\n        </div>\n      </div>`),
              (s += ` <div\n        class="swiper-slide sa_shorts_video-wrapper sa_shorts_relative ${
                l ? "sa_shorts_landscape" : ""
              } ${
                "none" !== this.borderRadius ? "sa_shorts_rounded-border" : ""
              }"\n        style="border-radius:${
                "none" !== this.borderRadius ? "18px" : "0px"
              }"\n      >\n        <div class="sa_shorts_carousel-video-overlay"></div>\n\n        <div\n          id="video"\n          class="video-container"\n          thumbnail="${
                t.thumbnail_url
              }"\n          src-data="${
                t.media
              }"\n        >\n          <img\n            loading="lazy"\n            class="video-place-holder-image"\n            src="${
                t.thumbnail_url
                  ? t.thumbnail_url
                  : o +
                    `/thumbnail.jpeg?video_url=${t.media}&width=${parseFloat(
                      Qe(this.width, "width")
                    )}&dpr=${r}`
              }"\n            alt=""\n          />\n        </div>\n        <div class="sa_shorts_video-caption">\n          <p>${
                t.caption
              }</p>\n          <div class="carousel-video-count-wrapper">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="11.57"\n              height="13.868"\n              viewBox="0 0 11.57 13.868"\n            >\n              <g>\n                <path\n                  data-name="Path 35456"\n                  d="M90.372 6.68a3.232 3.232 0 0 0 2.361-.98 3.232 3.232 0 0 0 .979-2.362 3.232 3.232 0 0 0-.979-2.36 3.339 3.339 0 0 0-4.723 0 3.232 3.232 0 0 0-.979 2.362 3.232 3.232 0 0 0 .979 2.36 3.233 3.233 0 0 0 2.362.98zm-1.787-5.127a2.527 2.527 0 0 1 3.574 0A2.415 2.415 0 0 1 92.9 3.34a2.415 2.415 0 0 1-.741 1.787 2.526 2.526 0 0 1-3.574 0 2.414 2.414 0 0 1-.741-1.787 2.415 2.415 0 0 1 .741-1.787zm0 0"\n                  transform="translate(-84.674)"\n                  style="fill:#fff"\n                />\n                <path\n                  data-name="Path 35457"\n                  d="M11.542 251.282a8.251 8.251 0 0 0-.112-.876 6.9 6.9 0 0 0-.216-.881 4.352 4.352 0 0 0-.362-.822 3.1 3.1 0 0 0-.546-.712 2.408 2.408 0 0 0-.785-.493 2.711 2.711 0 0 0-1-.181 1.017 1.017 0 0 0-.543.23c-.163.106-.353.229-.566.365a3.241 3.241 0 0 1-.732.322 2.841 2.841 0 0 1-1.79 0 3.231 3.231 0 0 1-.731-.322c-.21-.134-.4-.257-.566-.365a1.016 1.016 0 0 0-.543-.23 2.708 2.708 0 0 0-1 .181 2.406 2.406 0 0 0-.785.493 3.1 3.1 0 0 0-.546.712 4.36 4.36 0 0 0-.362.822 6.922 6.922 0 0 0-.215.881 8.194 8.194 0 0 0-.112.877c-.018.265-.028.54-.028.819a2.3 2.3 0 0 0 .684 1.742 2.462 2.462 0 0 0 1.762.643h6.676a2.462 2.462 0 0 0 1.762-.643 2.3 2.3 0 0 0 .684-1.742c0-.281-.009-.556-.028-.82zm-1.216 1.973a1.658 1.658 0 0 1-1.2.419h-6.68a1.658 1.658 0 0 1-1.2-.419 1.5 1.5 0 0 1-.433-1.155c0-.26.009-.516.026-.763a7.391 7.391 0 0 1 .1-.789 6.1 6.1 0 0 1 .189-.777 3.549 3.549 0 0 1 .295-.668 2.3 2.3 0 0 1 .4-.526 1.6 1.6 0 0 1 .522-.325 1.871 1.871 0 0 1 .64-.123c.028.015.079.044.161.1.167.109.36.233.573.369a4.027 4.027 0 0 0 .919.41 3.654 3.654 0 0 0 2.29 0 4.031 4.031 0 0 0 .919-.411c.218-.139.405-.26.572-.369.082-.053.133-.082.161-.1a1.872 1.872 0 0 1 .64.123 1.6 1.6 0 0 1 .522.325 2.29 2.29 0 0 1 .4.526 3.538 3.538 0 0 1 .295.668 6.089 6.089 0 0 1 .19.777 7.452 7.452 0 0 1 .1.789c.017.245.026.5.026.762a1.5 1.5 0 0 1-.427 1.156zm0 0"\n                  transform="translate(0 -240.617)"\n                  style="fill:#fff"\n                />\n              </g>\n            </svg>\n            <p class="carousel-video-views-count">\n              ${Intl.NumberFormat(
                "en",
                { notation: "compact" }
              ).format(
                t?.views || 0
              )}\n            </p>\n          </div>\n        </div>\n        <div class="sa_shorts_video-controls">\n          <div\n            style="display: flex; flex-direction: column; gap: 10px; align-items: center"\n          >\n            <div class="sa_shorts_btn_wrapper">\n              <img class="volume-btn" src="${Ve}" alt="unmute video" />\n            </div>\n\n            <div class="sa_shorts_btn_wrapper">\n              <svg\n                class="sa_shorts_open-share-shorts-popup-btn"\n                width="24"\n                height="24"\n                data-name="Layer 1"\n                id="Layer_1"\n                viewBox="0 0 24 24"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z"\n                  fill="#fff"\n                />\n              </svg>\n            </div>\n            ${Je(
                t,
                e.is_whatsapp_me
              )}\n            <div\n              class="sa_shorts_btn_wrapper sa_shorts_open-lead-capture-form-popup-btn"\n            >\n              <svg\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <title />\n                <path\n                  d="M12,17a1,1,0,0,1-1-1v-.21a4.7,4.7,0,0,1,2.75-4.19A4,4,0,0,0,12,4h0A4,4,0,0,0,8,8,1,1,0,0,1,6,8a6,6,0,0,1,6-6h0a6.08,6.08,0,0,1,6,6,6,6,0,0,1-3.37,5.39A2.73,2.73,0,0,0,13,15.79V16A1,1,0,0,1,12,17Z"\n                  fill="#fff"\n                />\n                <circle cx="12" cy="20" fill="#fff" r="1" />\n              </svg>\n            </div>\n          </div>\n        </div>\n        <div id="video-controls-container">\n          <div class="video-controls-wrapper">\n            <div id="play-btn" class="sa_shorts_controls-btn">\n              <img\n                loading="lazy"\n                style="width:24px"\n                src="${Ze}"\n                alt="play video"\n              />\n            </div>\n            <div id="pause-btn" class="sa_shorts_controls-btn sa_shorts_hidden">\n              <img\n                loading="lazy"\n                style="width:24px"\n                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiBoZWlnaHQ9IjMyIiBpZD0iaWNvbiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZS8+PHBhdGggZD0iTTEyLDZIMTBBMiwyLDAsMCwwLDgsOFYyNGEyLDIsMCwwLDAsMiwyaDJhMiwyLDAsMCwwLDItMlY4YTIsMiwwLDAsMC0yLTJaIi8+PHBhdGggZD0iTTIyLDZIMjBhMiwyLDAsMCwwLTIsMlYyNGEyLDIsMCwwLDAsMiwyaDJhMiwyLDAsMCwwLDItMlY4YTIsMiwwLDAsMC0yLTJaIi8+PHJlY3QgY2xhc3M9ImNscy0xIiBkYXRhLW5hbWU9IiZsdDtUcmFuc3BhcmVudCBSZWN0YW5nbGUmZ3Q7IiBoZWlnaHQ9IjMyIiBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIHdpZHRoPSIzMiIvPjwvc3ZnPg=="\n                alt="pause video"\n              />\n            </div>\n            <div class="timeline-container">\n              <div class="timeline">\n                <div class="thumb-indicator"></div>\n              </div>\n            </div>\n            <p class="duration-container">\n              <span class="video-current-time">0:00</span>\n              /\n              <span class="video-duration">00:00</span>\n            </p>\n          </div>\n        </div>\n        <div class="sa_shorts_cta" style="display:none">\n          <div class="sa_shorts_like-share">\n            <img\n              loading="lazy"\n              src="${Ue}"\n              alt="like"\n              class="like-btn"\n            />\n            <img\n              loading="lazy"\n              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0id2hpdGUiIGNsYXNzPSJiaSBiaS1zZW5kIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxwYXRoIGQ9Ik0xNS44NTQuMTQ2YS41LjUgMCAwIDEgLjExLjU0bC01LjgxOSAxNC41NDdhLjc1Ljc1IDAgMCAxLTEuMzI5LjEyNGwtMy4xNzgtNC45OTVMLjY0MyA3LjE4NGEuNzUuNzUgMCAwIDEgLjEyNC0xLjMzTDE1LjMxNC4wMzdhLjUuNSAwIDAgMSAuNTQuMTFaTTYuNjM2IDEwLjA3bDIuNzYxIDQuMzM4TDE0LjEzIDIuNTc2IDYuNjM2IDEwLjA3Wm02Ljc4Ny04LjIwMUwxLjU5MSA2LjYwMmw0LjMzOSAyLjc2IDcuNDk0LTcuNDkzWiIvPgo8L3N2Zz4="\n              alt="share"\n              class="share-btn"\n            />\n          </div>\n        </div>\n\n        <div class="sa_shorts_products-wrapper">\n          <div class="swiper sa_shorts_childSwiper">\n            <div class="swiper-wrapper">\n              ${Xe(
                e,
                t.products,
                "carousel",
                t
              )}\n            </div>\n          </div>\n        </div>\n      </div>`);
          }),
            (n.innerHTML += ` <div\n    class="swiper sa_shorts_parentSwiper"\n  >\n    <div class="swiper-wrapper">${a}</div>\n    <div class="swiper-button-prev">\n      <svg\n        stroke="currentColor"\n        fill="currentColor"\n        stroke-width="0"\n        viewBox="0 0 512 512"\n        height="1em"\n        width="1em"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"\n        ></path>\n      </svg>\n    </div>\n    <div class="swiper-button-next">\n      <svg\n        stroke="currentColor"\n        fill="currentColor"\n        stroke-width="0"\n        viewBox="0 0 512 512"\n        height="1em"\n        width="1em"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"\n        ></path>\n      </svg>\n    </div>\n  </div>`);
          ("saleassist-video-shorts-floating-tile" === n?.id
            ? n
            : document.body
          ).insertAdjacentHTML(
            "beforeend",
            `<div\n      id="sa_shorts_modal-wrapper"\n      class="sa_${n?.id}-modal saleassist-video-shorts-modal-wrapper"\n    >\n      <div class="sa_shorts_carousel-action-btn">\n        <svg\n          id="modal-close-btn"\n          stroke="currentColor"\n          fill="currentColor"\n          stroke-width="0"\n          viewBox="0 0 24 24"\n          height="1em"\n          width="1em"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            fill="none"\n            stroke="currentColor"\n            stroke-width="3"\n            d="M3,3 L21,21 M3,21 L21,3"\n          ></path>\n        </svg>\n        <svg\n          id="pip-mode-btn"\n          stroke="currentColor"\n          fill="currentColor"\n          stroke-width="0"\n          viewBox="0 0 24 24"\n          height="1em"\n          width="1em"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <g>\n            <path fill="none" d="M0 0h24v24H0z"></path>\n            <path\n              fill-rule="nonzero"\n              d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043-2.25-2.25 1.414-1.414z"\n            ></path>\n          </g>\n        </svg>\n      </div>\n      <div class="sa_shorts_swipe-up-arrow-animation">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n      <div class="swiper sa_shorts_carouselSwiper">\n        <div class="swiper-wrapper sa_shorts_modal-swiper">\n          ${s}\n        </div>\n        <div class="swiper-button-prev sa_shorts_swiper-button-white"></div>\n        <div class="swiper-button-next sa_shorts_swiper-button-white"></div>\n      </div>\n    </div> `
          );
        }
        const et = [
            { name: "Afghanistan", code: "AF", dial_code: "+93" },
            { name: "Albania", code: "AL", dial_code: "+355" },
            { name: "Algeria", code: "DZ", dial_code: "+213" },
            { name: "Andorra", code: "AD", dial_code: "+376" },
            { name: "Angola", code: "AO", dial_code: "+244" },
            { name: "Antigua and Barbuda", code: "AG", dial_code: "+1268" },
            { name: "Argentina", code: "AR", dial_code: "+54" },
            { name: "Armenia", code: "AM", dial_code: "+374" },
            { name: "Aruba", code: "AW", dial_code: "+297" },
            { name: "Australia", code: "AU", dial_code: "+61" },
            { name: "Austria", code: "AT", dial_code: "+43" },
            { name: "Azerbaijan", code: "AZ", dial_code: "+994" },
            { name: "Bahamas", code: "BS", dial_code: "+1242" },
            { name: "Bahrain", code: "BH", dial_code: "+973" },
            { name: "Bangladesh", code: "BD", dial_code: "+880" },
            { name: "Barbados", code: "BB", dial_code: "+1246" },
            { name: "Belarus", code: "BY", dial_code: "+375" },
            { name: "Belgium", code: "BE", dial_code: "+32" },
            { name: "Belize", code: "BZ", dial_code: "+501" },
            { name: "Benin", code: "BJ", dial_code: "+229" },
            { name: "Bhutan", code: "BT", dial_code: "+975" },
            { name: "Bolivia", code: "BO", dial_code: "+591" },
            { name: "Bosnia and Herzegovina", code: "BA", dial_code: "+387" },
            { name: "Botswana", code: "BW", dial_code: "+267" },
            { name: "Brazil", code: "BR", dial_code: "+55" },
            {
              name: "British Indian Ocean Territory",
              code: "IO",
              dial_code: "+246",
            },
            { name: "Brunei", code: "BN", dial_code: "+673" },
            { name: "Bulgaria", code: "BG", dial_code: "+359" },
            { name: "Burkina Faso", code: "BF", dial_code: "+226" },
            { name: "Burundi", code: "BI", dial_code: "+257" },
            { name: "Cambodia", code: "KH", dial_code: "+855" },
            { name: "Cameroon", code: "CM", dial_code: "+237" },
            { name: "Canada", code: "CA", dial_code: "+1" },
            { name: "Cape Verde", code: "CV", dial_code: "+238" },
            { name: "Cayman Islands", code: "KY", dial_code: "+345" },
            { name: "Central African Republic", code: "CF", dial_code: "+236" },
            { name: "Chad", code: "TD", dial_code: "+235" },
            { name: "Chile", code: "CL", dial_code: "+56" },
            { name: "China", code: "CN", dial_code: "+86" },
            { name: "Colombia", code: "CO", dial_code: "+57" },
            { name: "Comoros", code: "KM", dial_code: "+269" },
            { name: "Congo", code: "CG", dial_code: "+242" },
            {
              name: "Congo, The Democratic Republic of the Congo",
              code: "CD",
              dial_code: "+243",
            },
            { name: "Cote d'Ivoire", code: "CI", dial_code: "+225" },
            { name: "Croatia", code: "HR", dial_code: "+385" },
            { name: "Cuba", code: "CU", dial_code: "+53" },
            { name: "Cyprus", code: "CY", dial_code: "+357" },
            { name: "Czech Republic", code: "CZ", dial_code: "+420" },
            { name: "Denmark", code: "DK", dial_code: "+45" },
            { name: "Djibouti", code: "DJ", dial_code: "+253" },
            { name: "Dominica", code: "DM", dial_code: "+1767" },
            { name: "Dominican Republic", code: "DO", dial_code: "+1849" },
            { name: "Ecuador", code: "EC", dial_code: "+593" },
            { name: "Egypt", code: "EG", dial_code: "+20" },
            { name: "El Salvador", code: "SV", dial_code: "+503" },
            { name: "Equatorial Guinea", code: "GQ", dial_code: "+240" },
            { name: "Eritrea", code: "ER", dial_code: "+291" },
            { name: "Estonia", code: "EE", dial_code: "+372" },
            { name: "Ethiopia", code: "ET", dial_code: "+251" },
            {
              name: "Falkland Islands (Malvinas)",
              code: "FK",
              dial_code: "+500",
            },
            { name: "Faroe Islands", code: "FO", dial_code: "+298" },
            { name: "Fiji", code: "FJ", dial_code: "+679" },
            { name: "Finland", code: "FI", dial_code: "+358" },
            { name: "France", code: "FR", dial_code: "+33" },
            { name: "French Guiana", code: "GF", dial_code: "+594" },
            { name: "French Polynesia", code: "PF", dial_code: "+689" },
            {
              name: "French Southern Territories",
              code: "TF",
              dial_code: "+262",
            },
            { name: "Gabon", code: "GA", dial_code: "+241" },
            { name: "Gambia", code: "GM", dial_code: "+220" },
            { name: "Georgia", code: "GE", dial_code: "+995" },
            { name: "Germany", code: "DE", dial_code: "+49" },
            { name: "Ghana", code: "GH", dial_code: "+233" },
            { name: "Gibraltar", code: "GI", dial_code: "+350" },
            { name: "Greece", code: "GR", dial_code: "+30" },
            { name: "Greenland", code: "GL", dial_code: "+299" },
            { name: "Grenada", code: "GD", dial_code: "+1473" },
            { name: "Guadeloupe", code: "GP", dial_code: "+590" },
            { name: "Guam", code: "GU", dial_code: "+1671" },
            { name: "Guatemala", code: "GT", dial_code: "+502" },
            { name: "Guinea", code: "GN", dial_code: "+224" },
            { name: "Guinea-Bissau", code: "GW", dial_code: "+245" },
            { name: "Guyana", code: "GY", dial_code: "+592" },
            { name: "Haiti", code: "HT", dial_code: "+509" },
            {
              name: "Heard Island and Mcdonald Islands",
              code: "HM",
              dial_code: "+672",
            },
            { name: "Hong Kong", code: "HK", dial_code: "+852" },
            { name: "Hungary", code: "HU", dial_code: "+36" },
            { name: "Iceland", code: "IS", dial_code: "+354" },
            { name: "India", code: "IN", dial_code: "+91" },
            { name: "Indonesia", code: "ID", dial_code: "+62" },
            {
              name: "Iran, Islamic Republic of Persian Gulf",
              code: "IR",
              dial_code: "+98",
            },
            { name: "Iraq", code: "IQ", dial_code: "+964" },
            { name: "Ireland", code: "IE", dial_code: "+353" },
            { name: "Isle of Man", code: "IM", dial_code: "+44" },
            { name: "Israel", code: "IL", dial_code: "+972" },
            { name: "Italy", code: "IT", dial_code: "+39" },
            { name: "Jamaica", code: "JM", dial_code: "+1876" },
            { name: "Japan", code: "JP", dial_code: "+81" },
            { name: "Jordan", code: "JO", dial_code: "+962" },
            { name: "Kazakhstan", code: "KZ", dial_code: "+7" },
            { name: "Kenya", code: "KE", dial_code: "+254" },
            { name: "Kiribati", code: "KI", dial_code: "+686" },
            {
              name: "Korea, Democratic People's Republic of Korea",
              code: "KP",
              dial_code: "+850",
            },
            {
              name: "Korea, Republic of South Korea",
              code: "KR",
              dial_code: "+82",
            },
            { name: "Kosovo", code: "XK", dial_code: "+383" },
            { name: "Kuwait", code: "KW", dial_code: "+965" },
            { name: "Kyrgyzstan", code: "KG", dial_code: "+996" },
            { name: "Laos", code: "LA", dial_code: "+856" },
            { name: "Latvia", code: "LV", dial_code: "+371" },
            { name: "Lebanon", code: "LB", dial_code: "+961" },
            { name: "Lesotho", code: "LS", dial_code: "+266" },
            { name: "Liberia", code: "LR", dial_code: "+231" },
            { name: "Libyan Arab Jamahiriya", code: "LY", dial_code: "+218" },
            { name: "Liechtenstein", code: "LI", dial_code: "+423" },
            { name: "Lithuania", code: "LT", dial_code: "+370" },
            { name: "Luxembourg", code: "LU", dial_code: "+352" },
            { name: "Macao", code: "MO", dial_code: "+853" },
            { name: "Macedonia", code: "MK", dial_code: "+389" },
            { name: "Madagascar", code: "MG", dial_code: "+261" },
            { name: "Malawi", code: "MW", dial_code: "+265" },
            { name: "Malaysia", code: "MY", dial_code: "+60" },
            { name: "Maldives", code: "MV", dial_code: "+960" },
            { name: "Mali", code: "ML", dial_code: "+223" },
            { name: "Malta", code: "MT", dial_code: "+356" },
            { name: "Marshall Islands", code: "MH", dial_code: "+692" },
            { name: "Martinique", code: "MQ", dial_code: "+596" },
            { name: "Mauritania", code: "MR", dial_code: "+222" },
            { name: "Mauritius", code: "MU", dial_code: "+230" },
            { name: "Mexico", code: "MX", dial_code: "+52" },
            { name: "Moldova", code: "MD", dial_code: "+373" },
            { name: "Monaco", code: "MC", dial_code: "+377" },
            { name: "Mongolia", code: "MN", dial_code: "+976" },
            { name: "Montenegro", code: "ME", dial_code: "+382" },
            { name: "Montserrat", code: "MS", dial_code: "+1664" },
            { name: "Morocco", code: "MA", dial_code: "+212" },
            { name: "Mozambique", code: "MZ", dial_code: "+258" },
            { name: "Myanmar", code: "MM", dial_code: "+95" },
            { name: "Namibia", code: "NA", dial_code: "+264" },
            { name: "Nauru", code: "NR", dial_code: "+674" },
            { name: "Nepal", code: "NP", dial_code: "+977" },
            { name: "Netherlands", code: "NL", dial_code: "+31" },
            { name: "New Zealand", code: "NZ", dial_code: "+64" },
            { name: "Nicaragua", code: "NI", dial_code: "+505" },
            { name: "Niger", code: "NE", dial_code: "+227" },
            { name: "Nigeria", code: "NG", dial_code: "+234" },
            { name: "Niue", code: "NU", dial_code: "+683" },
            { name: "Norfolk Island", code: "NF", dial_code: "+672" },
            { name: "Norway", code: "NO", dial_code: "+47" },
            { name: "Oman", code: "OM", dial_code: "+968" },
            { name: "Pakistan", code: "PK", dial_code: "+92" },
            { name: "Palau", code: "PW", dial_code: "+680" },
            {
              name: "Palestinian Territory, Occupied",
              code: "PS",
              dial_code: "+970",
            },
            { name: "Panama", code: "PA", dial_code: "+507" },
            { name: "Papua New Guinea", code: "PG", dial_code: "+675" },
            { name: "Paraguay", code: "PY", dial_code: "+595" },
            { name: "Peru", code: "PE", dial_code: "+51" },
            { name: "Philippines", code: "PH", dial_code: "+63" },
            { name: "Pitcairn", code: "PN", dial_code: "+64" },
            { name: "Poland", code: "PL", dial_code: "+48" },
            { name: "Portugal", code: "PT", dial_code: "+351" },
            { name: "Puerto Rico", code: "PR", dial_code: "+1939" },
            { name: "Qatar", code: "QA", dial_code: "+974" },
            { name: "Romania", code: "RO", dial_code: "+40" },
            { name: "Russia", code: "RU", dial_code: "+7" },
            { name: "Rwanda", code: "RW", dial_code: "+250" },
            { name: "Reunion", code: "RE", dial_code: "+262" },
            { name: "Saint Barthelemy", code: "BL", dial_code: "+590" },
            {
              name: "Saint Helena, Ascension and Tristan Da Cunha",
              code: "SH",
              dial_code: "+290",
            },
            { name: "San Marino", code: "SM", dial_code: "+378" },
            { name: "Sao Tome and Principe", code: "ST", dial_code: "+239" },
            { name: "Saudi Arabia", code: "SA", dial_code: "+966" },
            { name: "Senegal", code: "SN", dial_code: "+221" },
            { name: "Seychelles", code: "SC", dial_code: "+248" },
            { name: "Sierra Leone", code: "SL", dial_code: "+232" },
            { name: "Singapore", code: "SG", dial_code: "+65" },
            { name: "Slovakia", code: "SK", dial_code: "+421" },
            { name: "Slovenia", code: "SI", dial_code: "+386" },
            { name: "Solomon Islands", code: "SB", dial_code: "+677" },
            { name: "Somalia", code: "SO", dial_code: "+252" },
            { name: "South Africa", code: "ZA", dial_code: "+27" },
            { name: "South Sudan", code: "SS", dial_code: "+211" },
            {
              name: "South Georgia and the South Sandwich Islands",
              code: "GS",
              dial_code: "+500",
            },
            { name: "Sudan", code: "SD", dial_code: "+249" },
            { name: "Suriname", code: "SR", dial_code: "+597" },
            { name: "Svalbard and Jan Mayen", code: "SJ", dial_code: "+47" },
            { name: "Swaziland", code: "SZ", dial_code: "+268" },
            { name: "Sweden", code: "SE", dial_code: "+46" },
            { name: "Syrian Arab Republic", code: "SY", dial_code: "+963" },
            { name: "Taiwan", code: "TW", dial_code: "+886" },
            { name: "Tajikistan", code: "TJ", dial_code: "+992" },
            {
              name: "Tanzania, United Republic of Tanzania",
              code: "TZ",
              dial_code: "+255",
            },
            { name: "Thailand", code: "TH", dial_code: "+66" },
            { name: "Timor-Leste", code: "TL", dial_code: "+670" },
            { name: "Togo", code: "TG", dial_code: "+228" },
            { name: "Tokelau", code: "TK", dial_code: "+690" },
            { name: "Tonga", code: "TO", dial_code: "+676" },
            { name: "Trinidad and Tobago", code: "TT", dial_code: "+1868" },
            { name: "Tunisia", code: "TN", dial_code: "+216" },
            { name: "Turkey", code: "TR", dial_code: "+90" },
            { name: "Turkmenistan", code: "TM", dial_code: "+993" },
            {
              name: "Turks and Caicos Islands",
              code: "TC",
              dial_code: "+1649",
            },
            { name: "Tuvalu", code: "TV", dial_code: "+688" },
            { name: "Uganda", code: "UG", dial_code: "+256" },
            { name: "Ukraine", code: "UA", dial_code: "+380" },
            { name: "United Arab Emirates", code: "AE", dial_code: "+971" },
            { name: "United Kingdom", code: "GB", dial_code: "+44" },
            { name: "United States", code: "US", dial_code: "+1" },
            { name: "Uruguay", code: "UY", dial_code: "+598" },
            { name: "Uzbekistan", code: "UZ", dial_code: "+998" },
            { name: "Vanuatu", code: "VU", dial_code: "+678" },
            {
              name: "Venezuela, Bolivarian Republic of Venezuela",
              code: "VE",
              dial_code: "+58",
            },
            { name: "Vietnam", code: "VN", dial_code: "+84" },
            { name: "Virgin Islands, British", code: "VG", dial_code: "+1284" },
            { name: "Virgin Islands, U.S.", code: "VI", dial_code: "+1340" },
            { name: "Wallis and Futuna", code: "WF", dial_code: "+681" },
            { name: "Zimbabwe", code: "ZW", dial_code: "+263" },
          ],
          tt = (e) => {
            let t = "",
              n = "";
            et.forEach((e) => {
              n += `<li\n      data-country-code=${e.code}\n      data-country-dial-code=${e.dial_code}\n      class="shorts-widget-lead-capture-form-country"\n    >\n      ${e.name} ${e.dial_code}\n    </li>`;
            });
            return (
              e.forEach((e) => {
                if (e.name) {
                  if (
                    ("text" === e.type &&
                      (t += `<div\n          class="shorts-widget-lead-capture-form-group"\n          id=${
                        "mobile_number" === e.name ? "input-field-number" : ""
                      }\n        >\n        ${
                        e.label && e.label.length > 0
                          ? `<label\n            for="${
                              e.name
                            }"\n            class="shorts-widget-lead-capture-form-field-label"\n          >\n            ${
                              e.label
                            }<span class="shorts-widget-lead-capture-form-input-required"\n              >${
                              e.required ? " *" : ""
                            }</span\n            >\n          </label>`
                          : ""
                      }\n          ${((e) => {
                        if ("mobile_number" === e.name)
                          return `<div\n          class="shorts-widget-lead-capture-form-mobile-number-input-wrapper"\n        >\n          <div class="shorts-widget-lead-capture-form-selected-country-wrapper">\n            <p class="shorts-widget-lead-capture-form-selected-country">+91</p>\n            <div class="shorts-widget-lead-capture-form-select-country-arrow"></div>\n          </div>\n          <input\n            type="number"\n            id="${
                            e.name
                          }"\n            name="${
                            e.name
                          }"\n            value="${
                            e.value || ""
                          }"\n            placeholder="${
                            e.placeholder ? e.placeholder : ""
                          }"\n            ${
                            e.maxlength ? `maxlength="${e.maxlength}"` : ""
                          }\n            ${
                            e.required ? " required " : " "
                          }\n            class="shorts-widget-lead-capture-form-field shorts-widget-lead-capture-form-mobile-number-input"\n          />\n        </div>\n        <ul\n          class="shorts-widget-lead-capture-form-country-list shorts-widget-lead-capture-form-d-hidden"\n        >\n          ${n}\n        </ul> `;
                        return `<input\n        type="${
                          e.subtype ? e.subtype : e.type
                        }"\n        id="${e.name}"\n        name="${
                          e.name
                        }"\n        value="${
                          e.value || ""
                        }"\n        maxlength="${
                          e.maxlength || ""
                        }"\n        placeholder="${
                          e.placeholder ? e.placeholder : ""
                        }"\n        ${
                          e.required ? " required " : " "
                        }\n        class="shorts-widget-lead-capture-form-field"\n        }\n      />`;
                      })(e)}\n          ${
                        e.required
                          ? `<span\n                  class="shorts-widget-lead-capture-form-error-message"\n                  data-name="${e.name}"\n                  >Please enter your ${e.label}</span\n                >`
                          : ""
                      }\n        </div>`),
                    "number" === e.type &&
                      (t += `<div\n          class="shorts-widget-lead-capture-form-group"\n        >\n        ${
                        e.label && e.label.length > 0
                          ? `<label\n            for="${
                              e.name
                            }"\n            class="shorts-widget-lead-capture-form-field-label"\n          >\n            ${
                              e.label
                            }<span class="shorts-widget-lead-capture-form-input-required"\n              >${
                              e.required ? " *" : ""
                            }</span\n            >\n          </label>`
                          : ""
                      }\n          <input\n            type="${
                        e.type
                      }"\n            id="${e.name}"\n            name="${
                        e.name
                      }"\n            value="${e.value}"\n            min="${
                        e.min || ""
                      }"\n            max="${e.max || ""}"\n            step="${
                        e.step || ""
                      }"\n            placeholder="${
                        e.placeholder ? e.placeholder : ""
                      }"\n            ${
                        e.required ? " required " : " "
                      }\n            class="shorts-widget-lead-capture-form-field"\n          />\n          ${
                        e.required
                          ? `<span\n                  class="shorts-widget-lead-capture-form-error-message"\n                  data-name="${e.name}"\n                  >Please enter your ${e.label}</span\n                >`
                          : ""
                      }\n        </div>`),
                    "textarea" === e.type &&
                      (t += `<div class="shorts-widget-lead-capture-form-group">\n        ${
                        e.label && e.label.length > 0
                          ? `<label\n            for="${
                              e.name
                            }"\n            class="shorts-widget-lead-capture-form-field-label"\n          >\n            ${
                              e.label
                            }<span class="shorts-widget-lead-capture-form-input-required"\n              >${
                              e.required ? " *" : ""
                            }</span\n            >\n          </label>`
                          : ""
                      }\n          <textarea\n            id="${
                        e.name
                      }"\n            name="${
                        e.name
                      }"\n            placeholder="${
                        e.placeholder ? e.placeholder : ""
                      }"\n            rows="${
                        e.rows || ""
                      }"\n            maxlength="${
                        e.maxlength || ""
                      }"\n            ${
                        e.required ? " required " : " "
                      }\n            class="shorts-widget-lead-capture-form-field"\n          >\n${
                        e.value || ""
                      }</textarea\n          >\n          ${
                        e.required
                          ? `<span\n                  class="shorts-widget-lead-capture-form-error-message"\n                  data-name="${e.name}"\n                  >Please enter your ${e.label}</span\n                >`
                          : ""
                      }\n        </div>`),
                    "select" === e.type)
                  ) {
                    let n = "";
                    e.values?.map((e) => {
                      n += `<option value="${e.value}">\n            ${e.label}\n          </option>`;
                    }),
                      (t += `<div class="shorts-widget-lead-capture-form-group">\n        ${
                        e.label && e.label.length > 0
                          ? `<label\n            for="${
                              e.name
                            }"\n            class="shorts-widget-lead-capture-form-field-label"\n          >\n            ${
                              e.label
                            }<span class="shorts-widget-lead-capture-form-input-required"\n              >${
                              e.required ? " *" : ""
                            }</span\n            >\n          </label>`
                          : ""
                      }\n          <select\n            name="${
                        e.name
                      }"\n            id="${e.name}"\n            ${
                        e.required ? " required " : " "
                      }\n            ${
                        e.multiple ? " multiple " : " "
                      }\n            class="shorts-widget-lead-capture-form-field"\n          >\n            ${n}\n          </select>\n        </div>`);
                  }
                  if ("radio-group" === e.type) {
                    let n = "";
                    e.values?.map((t) => {
                      n += `<div>\n            <input\n              type="radio"\n              id="${
                        t.value
                      }"\n              name="${
                        e.name
                      }"\n              value="${t.value}"\n              ${
                        t.selected ? "checked" : ""
                      }\n              class="shorts-widget-lead-capture-form-field-radio"\n            />\n            <label for="${
                        t.value
                      }">${t.label}</label>\n          </div>`;
                    }),
                      (t += `<div class="shorts-widget-lead-capture-form-group">\n        ${
                        e.label && e.label.length > 0
                          ? `<p class="shorts-widget-lead-capture-form-field-label">\n            ${
                              e.label
                            }<span class="shorts-widget-lead-capture-form-input-required"\n              >${
                              e.required ? " *" : ""
                            }</span\n            >\n          </p>`
                          : ""
                      }\n          <div\n            class="shorts-widget-lead-capture-form-radio-fields-wrapper"\n          >\n            ${n}\n          </div>\n        </div>`);
                  }
                  if ("checkbox-group" === e.type) {
                    let n = "";
                    e.values?.map((t) => {
                      n += `<div\n            class="shorts-widget-lead-capture-form-checkbox-wrapper"\n          >\n            <input\n              type="checkbox"\n              id="checkbox-${
                        t.value
                      }"\n              name="${
                        e.name
                      }"\n              value="${t.value}"\n              ${
                        t.selected ? "checked" : ""
                      }\n              class="shorts-widget-lead-capture-form-field-checkbox"\n            />\n            <label\n              class="shorts-widget-lead-capture-form-checkbox-field-label"\n              for="checkbox-${
                        t.value
                      }"\n              >${
                        t.label
                      }</label\n            >\n          </div>`;
                    }),
                      (t += `<div class="shorts-widget-lead-capture-form-group">\n        ${
                        e.label && e.label.length > 0
                          ? `<p\n            class="shorts-widget-lead-capture-form-field-label"\n          >\n            ${
                              e.label
                            }<span class="shorts-widget-lead-capture-form-input-required"\n              >${
                              e.required ? " *" : ""
                            }</span\n            >\n          </p>`
                          : ""
                      }\n         ${n}\n        </div>`);
                  }
                }
                "hidden" === e.type &&
                  (t += `<div\n        class="shorts-widget-lead-capture-form-group"\n        style="display: none"\n      >\n        <input\n          type="${
                    e.type
                  }"\n          id="${e.name}"\n          name="${
                    e.name
                  }"\n          value="${
                    e.value || ""
                  }"\n          class="shorts-widget-lead-capture-form-field"\n        />\n      </div>`),
                  "paragraph" === e.type &&
                    (t +=
                      "sa-custom-submit-button" !== e.className
                        ? `<div class="shorts-widget-lead-capture-form-group">\n      <p class="shorts-widget-lead-capture-form-field-label ${
                            e.className ? e.className : ""
                          }">\n          ${e.label}\n        </p>\n      </div>`
                        : "");
              }),
              t
            );
          },
          nt = (e, t, n = 1) => {
            try {
              const i = {
                value: t,
                expiry: new Date().getTime() + 1e3 * n * 60 * 60,
              };
              return window.localStorage.setItem(e, JSON.stringify(i)), t;
            } catch (e) {
              return null;
            }
          },
          it = (e) => {
            try {
              const t = window.localStorage.getItem(e);
              if (!t) return null;
              const n = JSON.parse(t);
              return new Date().getTime() > n.expiry
                ? (window.localStorage.removeItem(e), null)
                : n.value;
            } catch (e) {
              return null;
            }
          };
        var at = n(734),
          st = {};
        (st.styleTagTransform = Ie()),
          (st.setAttributes = Me()),
          (st.insert = _e().bind(null, "head")),
          (st.domAPI = ye()),
          (st.insertStyleElement = Ce());
        we()(at.A, st);
        at.A && at.A.locals && at.A.locals;
        const rt = {
          get: async function (e, t) {
            return new Promise((n, i) => {
              const a = e + t,
                s = {
                  method: "GET",
                  headers: { referrer: window.location.href },
                };
              fetch(a, s)
                .then(ot)
                .then((e) => n(e))
                .catch((e) => i(e));
            });
          },
          post: function (e, t, n) {
            return new Promise((i, a) => {
              const s = e + t,
                r = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    referrer: window.location.href,
                  },
                  body: JSON.stringify(n),
                };
              fetch(s, r)
                .then(ot)
                .then((e) => i(e))
                .catch((e) => a(e));
            });
          },
        };
        function ot(e) {
          return e.text().then((t) => {
            const n = t && JSON.parse(t);
            if (!e.ok) {
              const t = (n && n.message) || e.statusText;
              return Promise.reject(t);
            }
            return n;
          });
        }
        function lt(e, n, i, a, s, r, o = () => {}) {
          const l = JSON.parse(i),
            d = l.filter((e) => e.required),
            c = document.getElementById("shorts-widget-lead-capture-form"),
            p = {};
          if (it(`video_tiles_${e}`)?.form_data)
            "" !== a && window.open(a, "_blank");
          else {
            if (c)
              return void (
                "none" === c.style.display && (c.style.display = "flex")
              );
            var u = l.filter((e) => "sa-custom-submit-button" === e.className);
            u = u.length > 0 ? u[0].label : "Submit";
            const n = document.createElement("div");
            (n.id = "shorts-widget-lead-capture-form"),
              (n.className = "shorts-widget-lead-capture-form-modal");
            const i = document.createElement("div");
            (i.className = "shorts-widget-lead-capture-form-icon"),
              (i.innerHTML =
                '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>');
            const h = document.createElement("div");
            h.className = "shorts-widget-lead-capture-form-modal-content";
            const m = document.createElement("div");
            (m.className = "shorts-widget-lead-capture-form-close"),
              (m.innerHTML =
                '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>');
            const g = document.createElement("button");
            (g.className = "shorts-widget-lead-capture-form-submit-button"),
              (g.textContent = u);
            const f = document.createElement("a");
            (f.className = "shorts-widget-lead-capture-form-footer"),
              (f.href = "https://www.saleassist.ai/"),
              (f.target = "blank"),
              (f.innerHTML = "Powered by <span>SaleAssist.ai</span>"),
              h.appendChild(m),
              (h.innerHTML += `\n      <div class="shorts-widget-lead-capture-form-wrapper">\n        ${tt(
                l
              )}\n      </div>`),
              h.appendChild(g),
              n.appendChild(i),
              n.appendChild(h),
              n.appendChild(f);
            h.querySelectorAll("input[type='number']").forEach((e) => {
              e.addEventListener("input", (e) => {
                const t = e.target.id,
                  n = e.target.value;
                "mobile_number" === t &&
                  n.trim().length >= 10 &&
                  (e.target.value = n.slice(0, 10)),
                  "pincode" === t &&
                    n.trim().length >= 6 &&
                    (e.target.value = n.slice(0, 6));
              });
            }),
              document.body.appendChild(n),
              (function (e) {
                const t = document.querySelector(
                  ".shorts-widget-lead-capture-form-selected-country-wrapper"
                );
                if (t) {
                  const n = document.querySelector(
                      ".shorts-widget-lead-capture-form-select-country-arrow"
                    ),
                    i = document.querySelector(
                      ".shorts-widget-lead-capture-form-country-list"
                    );
                  t.addEventListener("click", () => {
                    i.classList.toggle(
                      "shorts-widget-lead-capture-form-d-hidden"
                    ),
                      n.classList.toggle(
                        "shorts-widget-lead-capture-form-rotate-180"
                      );
                  });
                  const a = document.querySelectorAll(
                      ".shorts-widget-lead-capture-form-country"
                    ),
                    s = document.querySelector(
                      ".shorts-widget-lead-capture-form-selected-country"
                    );
                  a.forEach((t) => {
                    t.addEventListener("click", () => {
                      (e = t.getAttribute("data-country-dial-code")),
                        (s.innerHTML = e),
                        i.classList.add(
                          "shorts-widget-lead-capture-form-d-hidden"
                        ),
                        n.classList.remove(
                          "shorts-widget-lead-capture-form-rotate-180"
                        );
                    });
                  });
                }
              })("+91"),
              m &&
                document
                  .querySelector(".shorts-widget-lead-capture-form-close")
                  .addEventListener("click", () => {
                    r && r(), n.remove();
                  }),
              g.addEventListener("click", () => {
                const i = document.querySelector(
                    ".shorts-widget-lead-capture-form-wrapper"
                  ),
                  r = i.querySelectorAll(
                    ".shorts-widget-lead-capture-form-field"
                  ),
                  c = i.querySelectorAll(
                    ".shorts-widget-lead-capture-form-field-radio"
                  ),
                  m = i.querySelectorAll(
                    ".shorts-widget-lead-capture-form-field-checkbox"
                  );
                r.forEach((e) => {
                  if ("select" === e.tagName.toLocaleLowerCase()) {
                    const t = Array.from(
                      e.querySelectorAll("option:checked"),
                      (e) => e.value
                    );
                    p[e.name] = t;
                  } else p[e.name] = e.value;
                });
                const f = (e) => {
                  const t = [];
                  e.forEach((e) => {
                    e.checked && t.push(e.value);
                  }),
                    (p[e[0].getAttribute("name")] = t);
                };
                c.length && f(c), m.length && f(m);
                const v = {},
                  w = (e, t, n, i) => {
                    v[e] = i;
                    const a = document.querySelector(
                      `.shorts-widget-lead-capture-form-error-message[data-name=${e}]`
                    );
                    a && ((a.textContent = t), (a.style.display = n));
                  };
                h.querySelectorAll(
                  "input[type='text'], input[type='number'], input[type='email'], textarea"
                ).forEach((e) => {
                  const t = e.name,
                    n = e.value.trim(),
                    i = n.length,
                    a = e.required;
                  "name" === t &&
                    a &&
                    (0 === i
                      ? w(t, "Please enter your Name", "block", !0)
                      : 1 === n.split(" ").length
                      ? w(t, "Please enter your Full Name", "block", !0)
                      : n.split(" ").length > 1 && w(t, "", "none", !1)),
                    "mobile_number" === t &&
                      a &&
                      (0 === i
                        ? w(t, "Please enter your Mobile Number", "block", !0)
                        : i < 10
                        ? w(
                            t,
                            "Please enter a valid Mobile Number",
                            "block",
                            !0
                          )
                        : w(t, "", "none", !1)),
                    "pincode" === t &&
                      a &&
                      (0 === i
                        ? w(t, "Please enter your PIN code", "block", !0)
                        : i < 6
                        ? w(t, "Please enter a valid PIN code", "block", !0)
                        : w(t, "", "none", !1)),
                    "email" === t &&
                      a &&
                      (0 === i
                        ? w(t, "Please enter your Email ID", "block", !0)
                        : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n)
                        ? w(t, "", "none", !1)
                        : w(t, "Please enter a valid Email ID", "block", !0));
                });
                for (const e of d) {
                  const t = e.name;
                  if (
                    t in p &&
                    (!1 === p[t] ||
                      null === p[t] ||
                      void 0 === p[t] ||
                      ("string" == typeof p[t] && "" === p[t].trim()))
                  ) {
                    v[t] = !0;
                    document.querySelector(
                      `.shorts-widget-lead-capture-form-error-message[data-name=${t}]`
                    ).style.display = "block";
                  }
                }
                for (const e in v) if (v[e]) return;
                const b = p.mobile_number,
                  { maxlength: y } =
                    l.find((e) => "mobile_number" === e.name) || {};
                if (b && (b.length < 10 || b.length > y)) {
                  b.length;
                } else
                  (g.innerHTML = "Loading..."),
                    (g.disabled = !0),
                    (g.style.cursor = "not-allowed"),
                    b && (p.mobile_number = `+91${p.mobile_number}`),
                    p.whatsappnotify &&
                      0 === p.whatsappnotify.length &&
                      (p.whatsappnotify = ["false"]),
                    (n.style.display = "none"),
                    (async function (e, n, i, a, s, r, o, l) {
                      try {
                        const d = await rt.post(
                          t.url,
                          `/source/${e}/shorts/capture`,
                          {
                            session_id: it(`video_tiles_${e}`).session_data,
                            user_data: { ...dt(n) },
                            unique_field_name: a,
                          }
                        );
                        d &&
                          ("" !== i && window.open(i, "_blank"),
                          nt(`video_tiles_${e}`, {
                            ...it(`video_tiles_${e}`),
                            form_data: d,
                            user_data: { ...dt(n) },
                          }),
                          (s.style.display = "none"),
                          (r.innerHTML = o),
                          (r.disabled = !1),
                          (r.style.cursor = "pointer"),
                          l());
                      } catch (e) {
                        console.error("Something went wrong", e);
                      }
                    })(e, p, a, s, n, g, u, o);
              });
          }
        }
        const dt = (e) => {
            for (const t in e)
              (e[t] && ("string" != typeof e[t] || e[t].trim())) ||
                "boolean" == typeof e[t] ||
                delete e[t];
            return e;
          },
          ct = (e, t) => {
            let n = new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }),
              i = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }),
              a = Intl.NumberFormat("en-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 0,
              });
            return "INR" === t
              ? n.format(e)
              : "USD" === t
              ? i.format(e)
              : "EUR" === t
              ? a.format(e)
              : void 0;
          };
        function pt(e, t, n, i, a, s, r, o, l, d, c, p, u, h, m, g) {
          const f = (e) => {
              const t = {
                source_id: r,
                event_type: "CTA",
                target_id: e,
                client_id: o,
                user_data: {},
              };
              fetch("https://shorts-analytics-4cxdmdxo6a-el.a.run.app/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(t),
              })
                .then((e) => e.json())
                .then((e) => {})
                .catch((e) => {
                  console.error(e);
                });
            },
            v = document.querySelector(
              `#sa-pop-up-product-container-overlay-${r}`
            );
          if ("modal_view" === m.tag_view && s.length > 0 && !v) {
            const e = document.createElement("div");
            (e.id = `sa-pop-up-product-container-overlay-${r}`),
              (e.className = "sa-pop-up-product-container-overlay");
            const n = document.createElement("span");
            (n.className = "sa-pop-up-product-container-helper-text"),
              (n.innerHTML = "Click on video to explore");
            const i = document.createElement("button");
            (i.className = "sa-pop-up-modal-close-button"),
              (i.style.display = "none"),
              (i.innerHTML =
                '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path></svg>');
            const a = document.createElement("div");
            (a.id = `sa-pop-up-modal-wrapper-${r}`),
              (a.className = "sa-pop-up-modal-wrapper");
            const s = document.createElement("div");
            (s.id = `sa-pop-up-modal-container-${r}`),
              (s.className = "sa-pop-up-modal-container"),
              (s.style.display = "none"),
              s.addEventListener("wheel", (e) => {
                e.stopPropagation();
              });
            const o = document.createElement("button");
            (o.className = "sa-pop-up-modal-scroll-btn"),
              (o.style.display = "none"),
              (o.innerHTML =
                '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>'),
              a.appendChild(s),
              a.appendChild(o),
              e.appendChild(a),
              e.appendChild(n),
              e.appendChild(i),
              o.addEventListener("click", () => {
                const e = s.querySelectorAll(".sa-modal-tag-product-card"),
                  t = s.scrollLeft,
                  n = parseInt(window.getComputedStyle(s).padding),
                  i = e[0].getBoundingClientRect().width + n;
                t >= s.scrollWidth - Math.round(s.getBoundingClientRect().width)
                  ? s.scrollTo({ left: 0, behavior: "smooth" })
                  : s.scrollBy({ left: i, behavior: "smooth" });
              }),
              e.addEventListener("click", (t) => {
                if ((t.stopPropagation(), "none" === s.style.display)) {
                  const a = g.querySelector(".sa_shorts_carousel-action-btn"),
                    r = document.querySelector(
                      ".tag-product-indicator-animation-container"
                    );
                  function l() {
                    s.scrollWidth > s.clientWidth
                      ? (o.style.display = "block")
                      : (o.style.display = "none");
                  }
                  u(),
                    (n.style.display = "none"),
                    (e.style.backdropFilter = "blur(25px)"),
                    (e.style.zIndex = "100"),
                    (s.style.display = "flex"),
                    (o.style.display = "flex"),
                    (i.style.display = "flex"),
                    (a.style.display = "none"),
                    (r.style.display = "none"),
                    l(),
                    window.addEventListener("resize", l);
                } else {
                  const d = t.target.closest(".sa-pop-up-modal-container"),
                    c = t.target.closest(".sa-pop-up-modal-scroll-btn"),
                    p = g.querySelector(".sa_shorts_carousel-action-btn"),
                    m = document.querySelector(
                      ".tag-product-indicator-animation-container"
                    );
                  d ||
                    c ||
                    ((s.style.display = "none"),
                    (o.style.display = "none"),
                    (e.style.backdropFilter = "blur(0px)"),
                    (e.style.zIndex = "unset"),
                    (i.style.display = "none"),
                    (n.style.display = "block"),
                    (p.style.display = "flex"),
                    (m.style.display = "block"),
                    h());
                }
              }),
              t.appendChild(e);
          }
          s.map((s, o) => {
            const l = (s.horizontal_pos / 100) * n,
              h = (s.vertical_pos / 100) * i,
              g = document.getElementById(`add-tag-product-card-${r}-${o}`),
              v = document.querySelector(
                `#sa-pop-up-product-container-overlay-${r}`
              ),
              w = document.querySelector(`#sa-pop-up-modal-container-${r}`),
              b = document.querySelector(
                ".tag-product-indicator-animation-container"
              );
            if (a >= s.start_time && a <= s.end_time) {
              if ("modal_view" === m.tag_view) {
                if (!b) {
                  const e = document.createElement("div");
                  (e.className = "tag-product-indicator-animation-container"),
                    (e.style.top = `${h}px`),
                    (e.style.right = `${l}px`),
                    e.addEventListener("click", () => {
                      document
                        .querySelector(".sa-pop-up-product-container-overlay")
                        .click();
                    });
                  const n = document.createElement("div");
                  n.className = "tag-product-indicator-animation-outer";
                  const i = document.createElement("div");
                  (i.className = "tag-product-indicator-animation-inner"),
                    (i.innerHTML = `<span>${
                      s.product.cta_text ? s.product.cta_text : "+"
                    }</span>`),
                    (i.style.fontSize = s.product.cta_text ? "13px" : ""),
                    e.appendChild(n),
                    e.appendChild(i),
                    t.appendChild(e);
                }
                if (!g) {
                  const e = document.createElement("div");
                  (e.id = `add-tag-product-card-${r}-${o}`),
                    (e.className = "sa-modal-tag-product-card");
                  const t = document.createElement("div");
                  t.className = "sa-modal-tag-product-image";
                  const n = document.createElement("div");
                  n.className = "sa-modal-tag-product-image-wrapper";
                  const i = document.createElement("img");
                  if (
                    ((i.src = s.product.image),
                    n.appendChild(i),
                    t.appendChild(n),
                    s.product.product_images?.length > 1)
                  ) {
                    (t.style.minHeight = "65%"),
                      (t.style.maxHeight = "65%"),
                      (n.style.height = "calc(100% - 120px)");
                    const e = document.createElement("div");
                    (e.className = "sa-modal-tag-product-images-container"),
                      t.appendChild(e),
                      s.product.product_images.map((t) => {
                        const n = document.createElement("div"),
                          a = document.createElement("img");
                        (a.src = `${t}`),
                          n.appendChild(a),
                          n.addEventListener("click", () => {
                            i.src = t;
                          }),
                          e.appendChild(n);
                      });
                  }
                  const a = document.createElement("div");
                  a.className = "sa-modal-tag-product-details";
                  const l = document.createElement("p");
                  (l.className = "sa-modal-tag-product-name"),
                    (l.innerHTML = s.product.name);
                  const d = document.createElement("p");
                  (d.className = "sa-modal-tag-product-description"),
                    (d.innerHTML = `<span class="description">${
                      s.product.description?.slice(0, 100).trim() || ""
                    }</span>`);
                  const c = document.createElement("span");
                  (c.innerHTML = "...Read more"),
                    c.setAttribute("data-toggle-description", "false"),
                    (c.style.color = s.background_color),
                    (c.style.cursor = "pointer"),
                    c.addEventListener("click", (e) => {
                      let t = e.target.getAttribute("data-toggle-description");
                      (t = "false" === t ? "true" : "false"),
                        e.target.setAttribute("data-toggle-description", t),
                        (e.target.innerHTML =
                          "false" === t ? "...Read more" : "...Read less");
                      e.target
                        .closest(".sa-modal-tag-product-description")
                        .querySelector(".description").innerHTML =
                        "false" === t
                          ? s.product.description?.slice(0, 100).trim()
                          : s.product.description;
                    }),
                    d.appendChild(c);
                  const p = document.createElement("p");
                  p.className = "sa-modal-tag-product-price";
                  const u = s.product.product_price,
                    h = s.product.offer_price,
                    m = s.product.product_currency;
                  p.innerHTML =
                    "</span>" +
                    (s.product.offer_price > 0
                      ? `<span\n                    >${ct(
                          h,
                          m
                        )}</span\n                  ><span\n                    >${ct(
                          u,
                          m
                        )}</span\n                  >`
                      : `<span\n                  >${ct(
                          u,
                          m
                        )}</span\n                >`);
                  const g = document.createElement("a");
                  (g.style.background = s.background_color),
                    (g.style.color = s.font_color),
                    (g.className = "sa-modal-tag-product-link"),
                    (g.href = s.product.url),
                    (g.target = "_blank"),
                    (g.innerHTML = s.product.cta_text?.trim() || "Shop Now"),
                    g.addEventListener("click", (e) => {
                      f(s.product.id);
                    }),
                    a.appendChild(l),
                    a.appendChild(d),
                    s.product.product_price > 0 && a.appendChild(p),
                    a.appendChild(g),
                    e.appendChild(t),
                    e.appendChild(a),
                    w.appendChild(e),
                    (v.style.display = "flex");
                }
                return;
              }
              if (!g) {
                const n = document.createElement("div");
                (n.id = `add-tag-product-card-${r}-${o}`),
                  (n.style.position = "absolute"),
                  (n.style.right = `${l}px`),
                  (n.style.top = `${h}px`),
                  (n.style.display = "flex"),
                  (n.style.flexDirection = "column"),
                  (n.style.gap = "16px"),
                  (n.style.alignItems = "center"),
                  (n.style.zIndex = 1),
                  n.addEventListener("click", (e) => {
                    e.stopPropagation();
                  });
                const i = document.createElement("span");
                (i.className = "adds-tag-ripple-loader"),
                  i.addEventListener("click", (e) =>
                    ((e, t) => {
                      const n = document.querySelector(
                        `#${t} .adds-tag-product-card`
                      );
                      e.stopPropagation(), (n.style.visibility = "visible");
                    })(e, `add-tag-product-card-${r}-${o}`)
                  );
                const a = document.createElement("div");
                a.className = "adds-tag-product-card";
                const m = document.createElement("div");
                (m.className = "adds-tag-product-close"),
                  (m.innerHTML =
                    '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>'),
                  m.addEventListener("click", (e) =>
                    ((e, t) => {
                      const n = document.querySelector(
                        `#${t} .adds-tag-product-card`
                      );
                      e.stopPropagation(), (n.style.visibility = "hidden");
                    })(e, `add-tag-product-card-${r}-${o}`)
                  );
                const g = document.createElement("div");
                g.className = "adds-tag-product-image";
                const v = document.createElement("img");
                (v.src = s.product.image), g.appendChild(v);
                const w = document.createElement("a");
                (w.style.background = s.background_color),
                  (w.style.color = s.font_color),
                  (w.className = "adds-tag-product-link"),
                  (w.href = s.product.url),
                  (w.target = "_blank"),
                  (w.innerHTML = `\n          <span>\n            <svg\n              fill="${s.font_color}"\n              stroke-width="0"\n              viewBox="0 0 16 16"\n              height="1em"\n              width="1em"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"\n              ></path>\n            </svg>\n          </span>\n          <span>Shop Now</span>\n        `),
                  w.addEventListener("click", (t) => {
                    t.preventDefault(),
                      d
                        ? lt(e, 0, c, s.product.url, p)
                        : window.open(s.product.url, "_blank"),
                      u(),
                      f(s.product.id);
                  });
                const b = document.createElement("span");
                (b.className = "adds-tag-ripple-loader-icon"),
                  (b.textContent = "+"),
                  i.appendChild(b),
                  i.appendChild(document.createElement("div")),
                  n.appendChild(i),
                  a.appendChild(m),
                  a.appendChild(g),
                  a.appendChild(w),
                  n.appendChild(a),
                  t.appendChild(n);
              }
            } else
              "modal_view" === m.tag_view
                ? (g && (w.removeChild(g), t && b && t.removeChild(b)),
                  0 === w.childElementCount && (v.style.display = "none"))
                : g && t.removeChild(g);
          });
        }
        const ut = () => {
          const e = document.querySelector(
            ".sa_shorts_share-shorts-popup-container"
          );
          if (!e) return;
          const t = "Hi,",
            n = window.location.href;
          e.querySelector(
            ".sa_shorts_share-shorts-popup-on-whatsapp"
          ).addEventListener("click", (e) => {
            e.stopPropagation(),
              window.open(
                `https://api.whatsapp.com/send?text=${encodeURIComponent(
                  t
                )} ${encodeURIComponent(n)}`,
                "_blank",
                "noopener"
              );
          });
          e.querySelector(
            ".sa_shorts_share-shorts-popup-on-twitter"
          ).addEventListener("click", function (e) {
            e.stopPropagation();
            const i = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              t
            )}&url=${encodeURIComponent(n)}`;
            window.open(i, "_blank");
          });
          e.querySelector(
            ".sa_shorts_share-shorts-popup-on-linkedin"
          ).addEventListener("click", function (e) {
            e.stopPropagation();
            const t = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              n
            )}`;
            window.open(t, "_blank");
          });
          e.querySelector(
            ".sa_shorts_share-shorts-popup-on-gmail"
          ).addEventListener("click", function (e) {
            e.stopPropagation();
            const i = "Here is the link you might find interesting: " + n,
              a = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=${encodeURIComponent(
                t
              )}&body=${encodeURIComponent(i)}`;
            window.open(a, "_blank");
          });
          e.querySelector(
            ".sa_shorts-copy-shorts-page-url-btn"
          ).addEventListener("click", async (t) => {
            t.stopPropagation();
            try {
              await navigator.clipboard.writeText(n);
              const t = e.querySelector(
                ".sa_shorts-copy-shorts-page-url-btn-text"
              );
              (t.style.transform = "translateX(0)"),
                setTimeout(() => {
                  t.style.transform = "translateX(1500px)";
                }, 2500);
            } catch (e) {
              console.error("Failed to copy: ", e);
            }
          });
          e.querySelector(
            ".sa_shorts-close-share-widget-popup-btn"
          ).addEventListener("click", (t) => {
            t.stopPropagation(), e.remove();
          });
        };
        function ht(e, t, n, i, a, s, r, o, l, d, c, p, u, h) {
          if (i.length > 0) {
            const e = document.createElement("div");
            (e.id = `sa-view-all-products-container-${a}`),
              (e.className = "sa-view-all-products-container");
            const r = document.createElement("div");
            (r.className = "sa-view-all-products-button"),
              (r.innerHTML =
                '\n    <span class="sa-view-all-products-button-icon"><svg width="20" height="20" fill="#ffffff" id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M5.4,24H18.6a4,4,0,0,0,3.968-4.5l-1.25-10A4.005,4.005,0,0,0,17.352,6H17V5A5,5,0,0,0,7,5V6H6.648A4.005,4.005,0,0,0,2.68,9.5l-1.25,10A4,4,0,0,0,5.4,24ZM9,5a3,3,0,0,1,6,0V6H9ZM3.414,19.752l1.25-10A2,2,0,0,1,6.648,8H7v2a1,1,0,0,0,2,0V8h6v2a1,1,0,0,0,2,0V8h.352a2,2,0,0,1,1.984,1.752l1.25,10A2,2,0,0,1,18.6,22H5.4a2,2,0,0,1-1.984-2.248Z"/></svg></span>\n    <span class="sa-view-all-products-text">View</br>products</span>'),
              r.addEventListener("click", () => {
                const t = u.querySelector(".sa_shorts_carousel-action-btn"),
                  i = u.querySelector(".swiper-button-prev"),
                  a = u.querySelector(".swiper-button-next"),
                  s = n.querySelector(".sa_shorts_video-controls"),
                  r = n.querySelector(".video-container video");
                r?.pause(),
                  (e.style.display = "flex"),
                  (t.style.display = "none"),
                  (i.style.display = "none"),
                  (a.style.display = "none"),
                  (s.style.display = "none");
              });
            const o = document.createElement("div");
            (o.className = "sa-view-all-products-header"),
              (o.innerHTML =
                '<span class="sa-view-all-products-header-text">All Products</span>');
            const l = document.createElement("span");
            (l.style.display = "flex"),
              (l.innerHTML =
                '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path></svg>'),
              l.addEventListener("click", () => {
                const t = u.querySelector(".sa_shorts_carousel-action-btn"),
                  i = u.querySelector(".swiper-button-prev"),
                  a = u.querySelector(".swiper-button-next"),
                  s = n.querySelector(".sa_shorts_video-controls");
                (e.style.display = "none"),
                  (t.style.display = "flex"),
                  (i.style.display = "block"),
                  (a.style.display = "block"),
                  (s.style.display = "block"),
                  h && h();
              });
            const d = document.createElement("div");
            (d.className = "sa-view-all-products-body"),
              d.addEventListener("wheel", (e) => {
                e.stopPropagation();
              }),
              i.map((t, i) => {
                const r = document.createElement("div");
                r.className = "sa-view-all-products-card";
                const o = document.createElement("div");
                (o.className = "sa-view-all-products-card-image"),
                  (o.innerHTML = `<img src="${t.product.image}" alt=""/>`);
                const l = document.createElement("div");
                (l.className = "sa-view-product-in-video-btn"),
                  (l.innerHTML =
                    '<span style="text-align:center">View in video</span>'),
                  l.addEventListener("click", () => {
                    const i = u.querySelector(".sa_shorts_carousel-action-btn"),
                      a = u.querySelector(".swiper-button-prev"),
                      s = u.querySelector(".swiper-button-next"),
                      r = n.querySelector(".sa_shorts_video-controls");
                    (e.style.display = "none"),
                      (i.style.display = "flex"),
                      (a.style.display = "block"),
                      (s.style.display = "block"),
                      (r.style.display = "block");
                    const o = n.querySelector(".video-container video");
                    (o.currentTime = t.start_time), o.play();
                  });
                const c = document.createElement("div");
                c.className = "sa-view-all-products-card-detail";
                const p = document.createElement("p");
                (p.className = "sa-view-all-products-card-detail-title"),
                  (p.innerHTML = `${t.product.name}`);
                const h = document.createElement("p");
                (h.className = "sa-view-all-products-card-detail-description"),
                  (h.innerHTML = `${t?.product?.description?.slice(0, 80)}...`);
                const m = document.createElement("div");
                m.className = "sa-view-all-products-card-detail-content";
                const g = document.createElement("span");
                if (
                  ((g.className = "sa-view-all-products-card-content-price"),
                  t.product.product_price > 0)
                ) {
                  const e = t.product.product_price,
                    n = t.product.offer_price,
                    i = t.product.product_currency;
                  g.innerHTML =
                    "" +
                    (n > 0
                      ? `<span>${ct(n, i)}</span\n                ><span>${ct(
                          e,
                          i
                        )}</span>`
                      : `<span>${ct(e, i)}</span>`);
                } else g.innerHTML = " ";
                const f = document.createElement("a");
                (f.style.background = t.background_color),
                  (f.style.color = t.font_color),
                  (f.className = "sa-view-all-products-card-content-shop-btn"),
                  (f.href = t.product.url),
                  (f.target = "_blank"),
                  (f.innerHTML = t.product.cta_text),
                  f.addEventListener("click", (e) => {
                    ((e) => {
                      const t = {
                        source_id: a,
                        event_type: "CTA",
                        target_id: e,
                        client_id: s,
                        user_data: {},
                      };
                      fetch(
                        "https://shorts-analytics-4cxdmdxo6a-el.a.run.app/",
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(t),
                        }
                      )
                        .then((e) => e.json())
                        .then((e) => {})
                        .catch((e) => {
                          console.error(e);
                        });
                    })(t.product.id);
                  }),
                  m.appendChild(g),
                  m.appendChild(f),
                  c.appendChild(p),
                  c.appendChild(h),
                  c.appendChild(m),
                  r.appendChild(o),
                  o.appendChild(l),
                  r.appendChild(c),
                  d.appendChild(r);
              }),
              o.appendChild(l),
              e.appendChild(o),
              e.appendChild(d),
              n.appendChild(e),
              t.appendChild(r);
          }
        }
        const mt = () =>
            '\n    <div class="sa_shorts_share-shorts-popup-container">\n    <p class="sa_shorts-copy-shorts-page-url-btn-text">Copied</p>\n      <div class="sa_shorts_share-shorts-popup-inner-container">\n        <p class="sa_shorts_share-shorts-popup-container-heading">Share via</p>\n        <div class="sa_shorts_share-shorts-popup-btn-container">\n        <img src="data:image/svg+xml;base64,ICAgICAgICAgIDxzdmcKICAgICAgICAgICAgd2lkdGg9IjMyIgogICAgICAgICAgICBoZWlnaHQ9IjMyIgogICAgICAgICAgICB2ZXJzaW9uPSIxLjEiCiAgICAgICAgICAgIHZpZXdCb3g9IjAgMCAxODcgMTg3IgogICAgICAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogICAgICAgICAgPgogICAgICAgICAgICA8ZGVmcz4KICAgICAgICAgICAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICAgICAgICAgICAgICAgPCFbQ0RBVEFbCiAgICAgICAgICAgICAgICAgLmZpbDEge2ZpbGw6I0ZFRkVGRX0KICAgICAgICAgICAgICAgICAuZmlsMCB7ZmlsbDojMDA5ODQ2fQogICAgICAgICAgICAgICAgXV0+CiAgICAgICAgICAgICAgPC9zdHlsZT4KICAgICAgICAgICAgPC9kZWZzPgogICAgICAgICAgICA8ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+CiAgICAgICAgICAgICAgPGcgaWQ9Il81MjEyNDU4ODgiPgogICAgICAgICAgICAgICAgPHJlY3QgY2xhc3M9ImZpbDAiIGhlaWdodD0iMTg3IiByeD0iMTgiIHJ5PSIxOCIgd2lkdGg9IjE4NyIgLz4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICAgIGNsYXNzPSJmaWwxIgogICAgICAgICAgICAgICAgICAgIGQ9Ik05NSAxNDZjLTExLDAgLTIyLC0zIC0zMSwtOWwtMjEgNyA3IC0yMGMtNiwtOSAtMTAsLTIwIC0xMCwtMzIgMCwtMiAwLC00IDAsLTUgMywtMjggMjYsLTUwIDU1LC01MCAyOSwwIDUyLDIyIDU1LDUxIDAsMSAwLDIgMCw0IDAsMzAgLTI1LDU0IC01NSw1NHptNjUgLTU2Yy0xLC0zNSAtMzAsLTYzIC02NSwtNjMgLTM1LDAgLTY0LDI3IC02Niw2MiAwLDEgMCwyIDAsMyAwLDEyIDQsMjQgMTAsMzNsLTEyIDM1IDM2IC0xMWM5LDUgMjAsOCAzMiw4IDM2LDAgNjUsLTI5IDY1LC02NSAwLC0xIDAsLTEgMCwtMnoiCiAgICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgICAgY2xhc3M9ImZpbDEiCiAgICAgICAgICAgICAgICAgICAgZD0iTTEyNSAxMDVjLTIsLTEgLTEwLC01IC0xMSwtNSAtMiwtMSAtMywtMSAtNCwxIC0xLDEgLTQsNSAtNSw2IC0xLDEgLTIsMSAtMywwIC0yLC0xIC03LC0yIC0xMywtOCAtNSwtNCAtOCwtOSAtOSwtMTEgLTEsLTEgMCwtMiAwLC0zIDEsLTEgMiwtMiAzLC0zIDAsMCAwLDAgMCwtMSAxLDAgMSwtMSAxLC0xIDEsLTIgMSwtMiAwLC0zIDAsLTEgLTMsLTkgLTUsLTEyIC0xLC0zIC0yLC0zIC0zLC0zIC0xLDAgLTIsMCAtMywwIC0xLDAgLTMsMSAtNSwyIC0xLDIgLTUsNiAtNSwxMyAwLDIgMCw0IDEsNiAxLDUgNSwxMCA1LDExIDEsMSAxMSwxOCAyOCwyNCAxNiw2IDE2LDQgMTksNCAzLDAgMTAsLTQgMTEsLTggMSwtMyAxLC03IDEsLTcgLTEsLTEgLTIsLTEgLTMsLTJ6IgogICAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgPC9zdmc+" class="sa_shorts_share-shorts-popup-on-whatsapp" />\n        <img src="data:image/svg+xml;base64,ICAgICAgICAgIDxzdmcKICAgICAgICAgICAgd2lkdGg9IjMzIgogICAgICAgICAgICBoZWlnaHQ9IjMzIgogICAgICAgICAgICB2ZXJzaW9uPSIxLjEiCiAgICAgICAgICAgIHZpZXdCb3g9IjAgMCAyNCAyNCIKICAgICAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgICAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgICAgICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgICAgID4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgPHBvbHlnb24KICAgICAgICAgICAgICAgIHBvaW50cz0iMTIuMTUzOTkyLDEwLjcyOTU1MyA4LjA4ODY4NCw1LjA0MTE5OSA1LjkyMDQxLDUuMDQxMTk5IDEwLjk1NjI5OSwxMi4wODcwOTcgMTEuNTkwMjEsMTIuOTczNDUgICAgMTUuOTAwNjM1LDE5LjAwOTU4MyAxOC4wNjg5MDksMTkuMDA5NTgzIDEyLjc4NTIxNywxMS42MTU5MDYiCiAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgZD0iTTIxLjE1OTc5LDFIMi44NDAyMUMxLjgyMzg1MywxLDEsMS44MjM4NTMsMSwyLjg0MDIxdjE4LjMxOTU4QzEsMjIuMTc2MTQ3LDEuODIzODUzLDIzLDIuODQwMjEsMjNoMTguMzE5NTggICBDMjIuMTc2MTQ3LDIzLDIzLDIyLjE3NjE0NywyMywyMS4xNTk3OVYyLjg0MDIxQzIzLDEuODIzODUzLDIyLjE3NjE0NywxLDIxLjE1OTc5LDF6IE0xNS4yMzUzNTIsMjBsLTQuMzYyNTQ5LTYuMjEzMDEzICAgTDUuNDExNDM4LDIwSDRsNi4yNDY4ODctNy4xMDQ2NzVMNCw0aDQuNzY0NjQ4bDQuMTMwMTI3LDUuODgxOTU4TDE4LjA2OTU4LDRoMS40MTEzNzdsLTUuOTU2OTcsNi43NzU2MzVMMjAsMjBIMTUuMjM1MzUyeiIKICAgICAgICAgICAgICAvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICA8L3N2Zz4=" class="sa_shorts_share-shorts-popup-on-twitter" />\n          <svg\n            width="32"\n            height="32"\n            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"\n            version="1.1"\n            viewBox="0 0 512 512"\n            class="sa_shorts_share-shorts-popup-on-linkedin"\n          >\n            <g id="g5891">\n              <path\n                d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z"\n                id="background"\n                style="fill:#2867b2;"\n              />\n              <g id="shapes">\n                <rect\n                  height="257.962"\n                  id="rect11"\n                  style="fill:#fff;"\n                  width="85.76"\n                  x="61.053"\n                  y="178.667"\n                />\n                <path\n                  d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z"\n                  id="path13-0"\n                  style="fill:#fff;fill-rule:nonzero;"\n                />\n                <path\n                  d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z"\n                  id="path15"\n                  style="fill:#fff;fill-rule:nonzero;"\n                />\n              </g>\n            </g>\n          </svg>\n          <svg\n            enable-background="new 0 0 512 512"\n            width="32"\n            height="32"\n            id="Layer_1"\n            version="1.1"\n            viewBox="0 0 512 512"\n            class="sa_shorts_share-shorts-popup-on-gmail"\n          >\n            <g>\n              <path\n                d="M510.689,478.854c0,17.562-14.275,31.837-31.837,31.837H33.146c-17.561,0-31.836-14.275-31.836-31.837   V33.146c0-17.56,14.275-31.836,31.836-31.836h445.706c17.562,0,31.837,14.276,31.837,31.836V478.854z"\n                fill="#E63734"\n              />\n            </g>\n            <g>\n              <path\n                d="M110.664,130.22h290.869c15.32,0,27.82,12.5,27.82,27.817v195.93c0,15.324-12.5,27.813-27.82,27.813   H110.664c-15.522,0-28.018-12.488-28.018-27.813v-195.93C82.646,142.72,95.142,130.22,110.664,130.22L110.664,130.22z"\n                fill="#ECEADF"\n              />\n              <path\n                d="M256.002,289.861l136.461-96.348v188.266h9.07c15.32,0,27.82-12.488,27.82-27.813V167.511v-9.474   c0-12.902-8.875-23.785-20.974-27.014L256.002,238.664L103.81,131.023c-12.099,3.022-21.162,14.11-21.162,27.014v9.271v186.659   c0,15.324,12.494,27.813,28.018,27.813h8.867V193.515L256.002,289.861z"\n                fill="#E63734"\n              />\n              <polygon\n                fill="#AEAEA5"\n                points="392.463,193.515 256.002,289.861 392.256,381.779 392.463,381.779  "\n              />\n              <path\n                d="M119.531,381.779l136.471-91.918C201.371,321.916,170.127,342.271,119.531,381.779L119.531,381.779z"\n                fill="#AEAEA5"\n              />\n              <path\n                d="M392.463,193.515V381.78h9.07c15.32,0,27.82-12.488,27.82-27.813V167.511L392.463,193.515z"\n                fill="#A62323"\n              />\n            </g>\n          </svg>\n          <div class="sa_shorts-copy-shorts-page-url-btn">\n          <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g data-name="1" id="_1"><path d="M308.51,450H80.59a15,15,0,0,1-15-15V143.93a15,15,0,0,1,15-15H308.51a15,15,0,0,1,15,15V435A15,15,0,0,1,308.51,450ZM95.59,420H293.51V158.93H95.59Z"/><path d="M389.44,369.07H308.51a15,15,0,0,1,0-30h65.93V78H176.52v65.92a15,15,0,0,1-30,0V63a15,15,0,0,1,15-15H389.44a15,15,0,0,1,15,15V354.07A15,15,0,0,1,389.44,369.07Z"/></g></svg>\n          </div>\n        </div>\n      <img src="data:image/svg+xml;base64,ICAgICAgICA8c3ZnCiAgICAgICAgICBoZWlnaHQ9IjI0IgogICAgICAgICAgdmlld0JveD0iMCAwIDQ4IDQ4IgogICAgICAgICAgd2lkdGg9IjI0IgogICAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgID4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0yNCA0Yy0xMS4wNSAwLTIwIDguOTUtMjAgMjBzOC45NSAyMCAyMCAyMCAyMC04Ljk1IDIwLTIwLTguOTUtMjAtMjAtMjB6bTEwIDI3LjE3bC0yLjgzIDIuODMtNy4xNy03LjE3LTcuMTcgNy4xNy0yLjgzLTIuODMgNy4xNy03LjE3LTcuMTctNy4xNyAyLjgzLTIuODMgNy4xNyA3LjE3IDcuMTctNy4xNyAyLjgzIDIuODMtNy4xNyA3LjE3IDcuMTcgNy4xN3oiCiAgICAgICAgICAvPgogICAgICAgICAgPHBhdGggZD0iTTAgMGg0OHY0OGgtNDh6IiBmaWxsPSJub25lIiAvPgogICAgICAgIDwvc3ZnPg==" class="sa_shorts-close-share-widget-popup-btn" />\n      </div>\n    </div>\n  ',
          gt = Object.create(null);
        (gt.open = "0"),
          (gt.close = "1"),
          (gt.ping = "2"),
          (gt.pong = "3"),
          (gt.message = "4"),
          (gt.upgrade = "5"),
          (gt.noop = "6");
        const ft = Object.create(null);
        Object.keys(gt).forEach((e) => {
          ft[gt[e]] = e;
        });
        const vt = { type: "error", data: "parser error" },
          wt =
            "function" == typeof Blob ||
            ("undefined" != typeof Blob &&
              "[object BlobConstructor]" ===
                Object.prototype.toString.call(Blob)),
          bt = "function" == typeof ArrayBuffer,
          yt = (e) =>
            "function" == typeof ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer instanceof ArrayBuffer,
          xt = ({ type: e, data: t }, n, i) =>
            wt && t instanceof Blob
              ? n
                ? i(t)
                : _t(t, i)
              : bt && (t instanceof ArrayBuffer || yt(t))
              ? n
                ? i(t)
                : _t(new Blob([t]), i)
              : i(gt[e] + (t || "")),
          _t = (e, t) => {
            const n = new FileReader();
            return (
              (n.onload = function () {
                const e = n.result.split(",")[1];
                t("b" + (e || ""));
              }),
              n.readAsDataURL(e)
            );
          };
        function At(e) {
          return e instanceof Uint8Array
            ? e
            : e instanceof ArrayBuffer
            ? new Uint8Array(e)
            : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }
        let Mt;
        const Et =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          Ct = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
        for (let e = 0; e < 64; e++) Ct[Et.charCodeAt(e)] = e;
        const St = "function" == typeof ArrayBuffer,
          It = (e, t) => {
            if ("string" != typeof e)
              return { type: "message", data: kt(e, t) };
            const n = e.charAt(0);
            if ("b" === n)
              return { type: "message", data: Tt(e.substring(1), t) };
            return ft[n]
              ? e.length > 1
                ? { type: ft[n], data: e.substring(1) }
                : { type: ft[n] }
              : vt;
          },
          Tt = (e, t) => {
            if (St) {
              const n = ((e) => {
                let t,
                  n,
                  i,
                  a,
                  s,
                  r = 0.75 * e.length,
                  o = e.length,
                  l = 0;
                "=" === e[e.length - 1] &&
                  (r--, "=" === e[e.length - 2] && r--);
                const d = new ArrayBuffer(r),
                  c = new Uint8Array(d);
                for (t = 0; t < o; t += 4)
                  (n = Ct[e.charCodeAt(t)]),
                    (i = Ct[e.charCodeAt(t + 1)]),
                    (a = Ct[e.charCodeAt(t + 2)]),
                    (s = Ct[e.charCodeAt(t + 3)]),
                    (c[l++] = (n << 2) | (i >> 4)),
                    (c[l++] = ((15 & i) << 4) | (a >> 2)),
                    (c[l++] = ((3 & a) << 6) | (63 & s));
                return d;
              })(e);
              return kt(n, t);
            }
            return { base64: !0, data: e };
          },
          kt = (e, t) =>
            "blob" === t
              ? e instanceof Blob
                ? e
                : new Blob([e])
              : e instanceof ArrayBuffer
              ? e
              : e.buffer,
          Lt = String.fromCharCode(30);
        function zt() {
          return new TransformStream({
            transform(e, t) {
              !(function (e, t) {
                wt && e.data instanceof Blob
                  ? e.data.arrayBuffer().then(At).then(t)
                  : bt && (e.data instanceof ArrayBuffer || yt(e.data))
                  ? t(At(e.data))
                  : xt(e, !1, (e) => {
                      Mt || (Mt = new TextEncoder()), t(Mt.encode(e));
                    });
              })(e, (n) => {
                const i = n.length;
                let a;
                if (i < 126)
                  (a = new Uint8Array(1)),
                    new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                  a = new Uint8Array(3);
                  const e = new DataView(a.buffer);
                  e.setUint8(0, 126), e.setUint16(1, i);
                } else {
                  a = new Uint8Array(9);
                  const e = new DataView(a.buffer);
                  e.setUint8(0, 127), e.setBigUint64(1, BigInt(i));
                }
                e.data && "string" != typeof e.data && (a[0] |= 128),
                  t.enqueue(a),
                  t.enqueue(n);
              });
            },
          });
        }
        let Dt;
        function Pt(e) {
          return e.reduce((e, t) => e + t.length, 0);
        }
        function Nt(e, t) {
          if (e[0].length === t) return e.shift();
          const n = new Uint8Array(t);
          let i = 0;
          for (let a = 0; a < t; a++)
            (n[a] = e[0][i++]), i === e[0].length && (e.shift(), (i = 0));
          return e.length && i < e[0].length && (e[0] = e[0].slice(i)), n;
        }
        function $t(e) {
          if (e)
            return (function (e) {
              for (var t in $t.prototype) e[t] = $t.prototype[t];
              return e;
            })(e);
        }
        ($t.prototype.on = $t.prototype.addEventListener =
          function (e, t) {
            return (
              (this._callbacks = this._callbacks || {}),
              (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(
                t
              ),
              this
            );
          }),
          ($t.prototype.once = function (e, t) {
            function n() {
              this.off(e, n), t.apply(this, arguments);
            }
            return (n.fn = t), this.on(e, n), this;
          }),
          ($t.prototype.off =
            $t.prototype.removeListener =
            $t.prototype.removeAllListeners =
            $t.prototype.removeEventListener =
              function (e, t) {
                if (
                  ((this._callbacks = this._callbacks || {}),
                  0 == arguments.length)
                )
                  return (this._callbacks = {}), this;
                var n,
                  i = this._callbacks["$" + e];
                if (!i) return this;
                if (1 == arguments.length)
                  return delete this._callbacks["$" + e], this;
                for (var a = 0; a < i.length; a++)
                  if ((n = i[a]) === t || n.fn === t) {
                    i.splice(a, 1);
                    break;
                  }
                return 0 === i.length && delete this._callbacks["$" + e], this;
              }),
          ($t.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            for (
              var t = new Array(arguments.length - 1),
                n = this._callbacks["$" + e],
                i = 1;
              i < arguments.length;
              i++
            )
              t[i - 1] = arguments[i];
            if (n) {
              i = 0;
              for (var a = (n = n.slice(0)).length; i < a; ++i)
                n[i].apply(this, t);
            }
            return this;
          }),
          ($t.prototype.emitReserved = $t.prototype.emit),
          ($t.prototype.listeners = function (e) {
            return (
              (this._callbacks = this._callbacks || {}),
              this._callbacks["$" + e] || []
            );
          }),
          ($t.prototype.hasListeners = function (e) {
            return !!this.listeners(e).length;
          });
        const Ot =
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : Function("return this")();
        function jt(e, ...t) {
          return t.reduce(
            (t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t),
            {}
          );
        }
        const Bt = Ot.setTimeout,
          qt = Ot.clearTimeout;
        function Ht(e, t) {
          t.useNativeTimers
            ? ((e.setTimeoutFn = Bt.bind(Ot)), (e.clearTimeoutFn = qt.bind(Ot)))
            : ((e.setTimeoutFn = Ot.setTimeout.bind(Ot)),
              (e.clearTimeoutFn = Ot.clearTimeout.bind(Ot)));
        }
        class Rt extends Error {
          constructor(e, t, n) {
            super(e),
              (this.description = t),
              (this.context = n),
              (this.type = "TransportError");
          }
        }
        class Gt extends $t {
          constructor(e) {
            super(),
              (this.writable = !1),
              Ht(this, e),
              (this.opts = e),
              (this.query = e.query),
              (this.socket = e.socket);
          }
          onError(e, t, n) {
            return super.emitReserved("error", new Rt(e, t, n)), this;
          }
          open() {
            return (this.readyState = "opening"), this.doOpen(), this;
          }
          close() {
            return (
              ("opening" !== this.readyState && "open" !== this.readyState) ||
                (this.doClose(), this.onClose()),
              this
            );
          }
          send(e) {
            "open" === this.readyState && this.write(e);
          }
          onOpen() {
            (this.readyState = "open"),
              (this.writable = !0),
              super.emitReserved("open");
          }
          onData(e) {
            const t = It(e, this.socket.binaryType);
            this.onPacket(t);
          }
          onPacket(e) {
            super.emitReserved("packet", e);
          }
          onClose(e) {
            (this.readyState = "closed"), super.emitReserved("close", e);
          }
          pause(e) {}
          createUri(e, t = {}) {
            return (
              e +
              "://" +
              this._hostname() +
              this._port() +
              this.opts.path +
              this._query(t)
            );
          }
          _hostname() {
            const e = this.opts.hostname;
            return -1 === e.indexOf(":") ? e : "[" + e + "]";
          }
          _port() {
            return this.opts.port &&
              ((this.opts.secure && Number(443 !== this.opts.port)) ||
                (!this.opts.secure && 80 !== Number(this.opts.port)))
              ? ":" + this.opts.port
              : "";
          }
          _query(e) {
            const t = (function (e) {
              let t = "";
              for (let n in e)
                e.hasOwnProperty(n) &&
                  (t.length && (t += "&"),
                  (t +=
                    encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
              return t;
            })(e);
            return t.length ? "?" + t : "";
          }
        }
        const Yt =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
              ""
            ),
          Vt = 64,
          Ut = {};
        let Ft,
          Zt = 0,
          Wt = 0;
        function Xt(e) {
          let t = "";
          do {
            (t = Yt[e % Vt] + t), (e = Math.floor(e / Vt));
          } while (e > 0);
          return t;
        }
        function Qt() {
          const e = Xt(+new Date());
          return e !== Ft ? ((Zt = 0), (Ft = e)) : e + "." + Xt(Zt++);
        }
        for (; Wt < Vt; Wt++) Ut[Yt[Wt]] = Wt;
        let Jt = !1;
        try {
          Jt =
            "undefined" != typeof XMLHttpRequest &&
            "withCredentials" in new XMLHttpRequest();
        } catch (e) {}
        const Kt = Jt;
        function en(e) {
          const t = e.xdomain;
          try {
            if ("undefined" != typeof XMLHttpRequest && (!t || Kt))
              return new XMLHttpRequest();
          } catch (e) {}
          if (!t)
            try {
              return new Ot[["Active"].concat("Object").join("X")](
                "Microsoft.XMLHTTP"
              );
            } catch (e) {}
        }
        function tn() {}
        const nn = null != new en({ xdomain: !1 }).responseType;
        class an extends $t {
          constructor(e, t) {
            super(),
              Ht(this, t),
              (this.opts = t),
              (this.method = t.method || "GET"),
              (this.uri = e),
              (this.data = void 0 !== t.data ? t.data : null),
              this.create();
          }
          create() {
            var e;
            const t = jt(
              this.opts,
              "agent",
              "pfx",
              "key",
              "passphrase",
              "cert",
              "ca",
              "ciphers",
              "rejectUnauthorized",
              "autoUnref"
            );
            t.xdomain = !!this.opts.xd;
            const n = (this.xhr = new en(t));
            try {
              n.open(this.method, this.uri, !0);
              try {
                if (this.opts.extraHeaders) {
                  n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                  for (let e in this.opts.extraHeaders)
                    this.opts.extraHeaders.hasOwnProperty(e) &&
                      n.setRequestHeader(e, this.opts.extraHeaders[e]);
                }
              } catch (e) {}
              if ("POST" === this.method)
                try {
                  n.setRequestHeader(
                    "Content-type",
                    "text/plain;charset=UTF-8"
                  );
                } catch (e) {}
              try {
                n.setRequestHeader("Accept", "*/*");
              } catch (e) {}
              null === (e = this.opts.cookieJar) ||
                void 0 === e ||
                e.addCookies(n),
                "withCredentials" in n &&
                  (n.withCredentials = this.opts.withCredentials),
                this.opts.requestTimeout &&
                  (n.timeout = this.opts.requestTimeout),
                (n.onreadystatechange = () => {
                  var e;
                  3 === n.readyState &&
                    (null === (e = this.opts.cookieJar) ||
                      void 0 === e ||
                      e.parseCookies(n)),
                    4 === n.readyState &&
                      (200 === n.status || 1223 === n.status
                        ? this.onLoad()
                        : this.setTimeoutFn(() => {
                            this.onError(
                              "number" == typeof n.status ? n.status : 0
                            );
                          }, 0));
                }),
                n.send(this.data);
            } catch (e) {
              return void this.setTimeoutFn(() => {
                this.onError(e);
              }, 0);
            }
            "undefined" != typeof document &&
              ((this.index = an.requestsCount++),
              (an.requests[this.index] = this));
          }
          onError(e) {
            this.emitReserved("error", e, this.xhr), this.cleanup(!0);
          }
          cleanup(e) {
            if (void 0 !== this.xhr && null !== this.xhr) {
              if (((this.xhr.onreadystatechange = tn), e))
                try {
                  this.xhr.abort();
                } catch (e) {}
              "undefined" != typeof document && delete an.requests[this.index],
                (this.xhr = null);
            }
          }
          onLoad() {
            const e = this.xhr.responseText;
            null !== e &&
              (this.emitReserved("data", e),
              this.emitReserved("success"),
              this.cleanup());
          }
          abort() {
            this.cleanup();
          }
        }
        if (
          ((an.requestsCount = 0),
          (an.requests = {}),
          "undefined" != typeof document)
        )
          if ("function" == typeof attachEvent) attachEvent("onunload", sn);
          else if ("function" == typeof addEventListener) {
            addEventListener(
              "onpagehide" in Ot ? "pagehide" : "unload",
              sn,
              !1
            );
          }
        function sn() {
          for (let e in an.requests)
            an.requests.hasOwnProperty(e) && an.requests[e].abort();
        }
        const rn =
            "function" == typeof Promise && "function" == typeof Promise.resolve
              ? (e) => Promise.resolve().then(e)
              : (e, t) => t(e, 0),
          on = Ot.WebSocket || Ot.MozWebSocket,
          ln =
            "undefined" != typeof navigator &&
            "string" == typeof navigator.product &&
            "reactnative" === navigator.product.toLowerCase();
        const dn = {
            websocket: class extends Gt {
              constructor(e) {
                super(e), (this.supportsBinary = !e.forceBase64);
              }
              get name() {
                return "websocket";
              }
              doOpen() {
                if (!this.check()) return;
                const e = this.uri(),
                  t = this.opts.protocols,
                  n = ln
                    ? {}
                    : jt(
                        this.opts,
                        "agent",
                        "perMessageDeflate",
                        "pfx",
                        "key",
                        "passphrase",
                        "cert",
                        "ca",
                        "ciphers",
                        "rejectUnauthorized",
                        "localAddress",
                        "protocolVersion",
                        "origin",
                        "maxPayload",
                        "family",
                        "checkServerIdentity"
                      );
                this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                try {
                  this.ws = ln ? new on(e, t, n) : t ? new on(e, t) : new on(e);
                } catch (e) {
                  return this.emitReserved("error", e);
                }
                (this.ws.binaryType = this.socket.binaryType),
                  this.addEventListeners();
              }
              addEventListeners() {
                (this.ws.onopen = () => {
                  this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
                }),
                  (this.ws.onclose = (e) =>
                    this.onClose({
                      description: "websocket connection closed",
                      context: e,
                    })),
                  (this.ws.onmessage = (e) => this.onData(e.data)),
                  (this.ws.onerror = (e) => this.onError("websocket error", e));
              }
              write(e) {
                this.writable = !1;
                for (let t = 0; t < e.length; t++) {
                  const n = e[t],
                    i = t === e.length - 1;
                  xt(n, this.supportsBinary, (e) => {
                    try {
                      this.ws.send(e);
                    } catch (e) {}
                    i &&
                      rn(() => {
                        (this.writable = !0), this.emitReserved("drain");
                      }, this.setTimeoutFn);
                  });
                }
              }
              doClose() {
                void 0 !== this.ws && (this.ws.close(), (this.ws = null));
              }
              uri() {
                const e = this.opts.secure ? "wss" : "ws",
                  t = this.query || {};
                return (
                  this.opts.timestampRequests &&
                    (t[this.opts.timestampParam] = Qt()),
                  this.supportsBinary || (t.b64 = 1),
                  this.createUri(e, t)
                );
              }
              check() {
                return !!on;
              }
            },
            webtransport: class extends Gt {
              get name() {
                return "webtransport";
              }
              doOpen() {
                "function" == typeof WebTransport &&
                  ((this.transport = new WebTransport(
                    this.createUri("https"),
                    this.opts.transportOptions[this.name]
                  )),
                  this.transport.closed
                    .then(() => {
                      this.onClose();
                    })
                    .catch((e) => {
                      this.onError("webtransport error", e);
                    }),
                  this.transport.ready.then(() => {
                    this.transport.createBidirectionalStream().then((e) => {
                      const t = (function (e, t) {
                          Dt || (Dt = new TextDecoder());
                          const n = [];
                          let i = 0,
                            a = -1,
                            s = !1;
                          return new TransformStream({
                            transform(r, o) {
                              for (n.push(r); ; ) {
                                if (0 === i) {
                                  if (Pt(n) < 1) break;
                                  const e = Nt(n, 1);
                                  (s = !(128 & ~e[0])),
                                    (a = 127 & e[0]),
                                    (i = a < 126 ? 3 : 126 === a ? 1 : 2);
                                } else if (1 === i) {
                                  if (Pt(n) < 2) break;
                                  const e = Nt(n, 2);
                                  (a = new DataView(
                                    e.buffer,
                                    e.byteOffset,
                                    e.length
                                  ).getUint16(0)),
                                    (i = 3);
                                } else if (2 === i) {
                                  if (Pt(n) < 8) break;
                                  const e = Nt(n, 8),
                                    t = new DataView(
                                      e.buffer,
                                      e.byteOffset,
                                      e.length
                                    ),
                                    s = t.getUint32(0);
                                  if (s > Math.pow(2, 21) - 1) {
                                    o.enqueue(vt);
                                    break;
                                  }
                                  (a = s * Math.pow(2, 32) + t.getUint32(4)),
                                    (i = 3);
                                } else {
                                  if (Pt(n) < a) break;
                                  const e = Nt(n, a);
                                  o.enqueue(It(s ? e : Dt.decode(e), t)),
                                    (i = 0);
                                }
                                if (0 === a || a > e) {
                                  o.enqueue(vt);
                                  break;
                                }
                              }
                            },
                          });
                        })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                        n = e.readable.pipeThrough(t).getReader(),
                        i = zt();
                      i.readable.pipeTo(e.writable),
                        (this.writer = i.writable.getWriter());
                      const a = () => {
                        n.read()
                          .then(({ done: e, value: t }) => {
                            e || (this.onPacket(t), a());
                          })
                          .catch((e) => {});
                      };
                      a();
                      const s = { type: "open" };
                      this.query.sid &&
                        (s.data = `{"sid":"${this.query.sid}"}`),
                        this.writer.write(s).then(() => this.onOpen());
                    });
                  }));
              }
              write(e) {
                this.writable = !1;
                for (let t = 0; t < e.length; t++) {
                  const n = e[t],
                    i = t === e.length - 1;
                  this.writer.write(n).then(() => {
                    i &&
                      rn(() => {
                        (this.writable = !0), this.emitReserved("drain");
                      }, this.setTimeoutFn);
                  });
                }
              }
              doClose() {
                var e;
                null === (e = this.transport) || void 0 === e || e.close();
              }
            },
            polling: class extends Gt {
              constructor(e) {
                if (
                  (super(e),
                  (this.polling = !1),
                  "undefined" != typeof location)
                ) {
                  const t = "https:" === location.protocol;
                  let n = location.port;
                  n || (n = t ? "443" : "80"),
                    (this.xd =
                      ("undefined" != typeof location &&
                        e.hostname !== location.hostname) ||
                      n !== e.port);
                }
                const t = e && e.forceBase64;
                (this.supportsBinary = nn && !t),
                  this.opts.withCredentials && (this.cookieJar = void 0);
              }
              get name() {
                return "polling";
              }
              doOpen() {
                this.poll();
              }
              pause(e) {
                this.readyState = "pausing";
                const t = () => {
                  (this.readyState = "paused"), e();
                };
                if (this.polling || !this.writable) {
                  let e = 0;
                  this.polling &&
                    (e++,
                    this.once("pollComplete", function () {
                      --e || t();
                    })),
                    this.writable ||
                      (e++,
                      this.once("drain", function () {
                        --e || t();
                      }));
                } else t();
              }
              poll() {
                (this.polling = !0), this.doPoll(), this.emitReserved("poll");
              }
              onData(e) {
                ((e, t) => {
                  const n = e.split(Lt),
                    i = [];
                  for (let e = 0; e < n.length; e++) {
                    const a = It(n[e], t);
                    if ((i.push(a), "error" === a.type)) break;
                  }
                  return i;
                })(e, this.socket.binaryType).forEach((e) => {
                  if (
                    ("opening" === this.readyState &&
                      "open" === e.type &&
                      this.onOpen(),
                    "close" === e.type)
                  )
                    return (
                      this.onClose({
                        description: "transport closed by the server",
                      }),
                      !1
                    );
                  this.onPacket(e);
                }),
                  "closed" !== this.readyState &&
                    ((this.polling = !1),
                    this.emitReserved("pollComplete"),
                    "open" === this.readyState && this.poll());
              }
              doClose() {
                const e = () => {
                  this.write([{ type: "close" }]);
                };
                "open" === this.readyState ? e() : this.once("open", e);
              }
              write(e) {
                (this.writable = !1),
                  ((e, t) => {
                    const n = e.length,
                      i = new Array(n);
                    let a = 0;
                    e.forEach((e, s) => {
                      xt(e, !1, (e) => {
                        (i[s] = e), ++a === n && t(i.join(Lt));
                      });
                    });
                  })(e, (e) => {
                    this.doWrite(e, () => {
                      (this.writable = !0), this.emitReserved("drain");
                    });
                  });
              }
              uri() {
                const e = this.opts.secure ? "https" : "http",
                  t = this.query || {};
                return (
                  !1 !== this.opts.timestampRequests &&
                    (t[this.opts.timestampParam] = Qt()),
                  this.supportsBinary || t.sid || (t.b64 = 1),
                  this.createUri(e, t)
                );
              }
              request(e = {}) {
                return (
                  Object.assign(
                    e,
                    { xd: this.xd, cookieJar: this.cookieJar },
                    this.opts
                  ),
                  new an(this.uri(), e)
                );
              }
              doWrite(e, t) {
                const n = this.request({ method: "POST", data: e });
                n.on("success", t),
                  n.on("error", (e, t) => {
                    this.onError("xhr post error", e, t);
                  });
              }
              doPoll() {
                const e = this.request();
                e.on("data", this.onData.bind(this)),
                  e.on("error", (e, t) => {
                    this.onError("xhr poll error", e, t);
                  }),
                  (this.pollXhr = e);
              }
            },
          },
          cn =
            /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
          pn = [
            "source",
            "protocol",
            "authority",
            "userInfo",
            "user",
            "password",
            "host",
            "port",
            "relative",
            "path",
            "directory",
            "file",
            "query",
            "anchor",
          ];
        function un(e) {
          if (e.length > 2e3) throw "URI too long";
          const t = e,
            n = e.indexOf("["),
            i = e.indexOf("]");
          -1 != n &&
            -1 != i &&
            (e =
              e.substring(0, n) +
              e.substring(n, i).replace(/:/g, ";") +
              e.substring(i, e.length));
          let a = cn.exec(e || ""),
            s = {},
            r = 14;
          for (; r--; ) s[pn[r]] = a[r] || "";
          return (
            -1 != n &&
              -1 != i &&
              ((s.source = t),
              (s.host = s.host
                .substring(1, s.host.length - 1)
                .replace(/;/g, ":")),
              (s.authority = s.authority
                .replace("[", "")
                .replace("]", "")
                .replace(/;/g, ":")),
              (s.ipv6uri = !0)),
            (s.pathNames = (function (e, t) {
              const n = /\/{2,9}/g,
                i = t.replace(n, "/").split("/");
              ("/" != t.slice(0, 1) && 0 !== t.length) || i.splice(0, 1);
              "/" == t.slice(-1) && i.splice(i.length - 1, 1);
              return i;
            })(0, s.path)),
            (s.queryKey = (function (e, t) {
              const n = {};
              return (
                t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, i) {
                  t && (n[t] = i);
                }),
                n
              );
            })(0, s.query)),
            s
          );
        }
        class hn extends $t {
          constructor(e, t = {}) {
            super(),
              (this.binaryType = "arraybuffer"),
              (this.writeBuffer = []),
              e && "object" == typeof e && ((t = e), (e = null)),
              e
                ? ((e = un(e)),
                  (t.hostname = e.host),
                  (t.secure = "https" === e.protocol || "wss" === e.protocol),
                  (t.port = e.port),
                  e.query && (t.query = e.query))
                : t.host && (t.hostname = un(t.host).host),
              Ht(this, t),
              (this.secure =
                null != t.secure
                  ? t.secure
                  : "undefined" != typeof location &&
                    "https:" === location.protocol),
              t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
              (this.hostname =
                t.hostname ||
                ("undefined" != typeof location
                  ? location.hostname
                  : "localhost")),
              (this.port =
                t.port ||
                ("undefined" != typeof location && location.port
                  ? location.port
                  : this.secure
                  ? "443"
                  : "80")),
              (this.transports = t.transports || [
                "polling",
                "websocket",
                "webtransport",
              ]),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0),
              (this.opts = Object.assign(
                {
                  path: "/engine.io",
                  agent: !1,
                  withCredentials: !1,
                  upgrade: !0,
                  timestampParam: "t",
                  rememberUpgrade: !1,
                  addTrailingSlash: !0,
                  rejectUnauthorized: !0,
                  perMessageDeflate: { threshold: 1024 },
                  transportOptions: {},
                  closeOnBeforeunload: !1,
                },
                t
              )),
              (this.opts.path =
                this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "")),
              "string" == typeof this.opts.query &&
                (this.opts.query = (function (e) {
                  let t = {},
                    n = e.split("&");
                  for (let e = 0, i = n.length; e < i; e++) {
                    let i = n[e].split("=");
                    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
                  }
                  return t;
                })(this.opts.query)),
              (this.id = null),
              (this.upgrades = null),
              (this.pingInterval = null),
              (this.pingTimeout = null),
              (this.pingTimeoutTimer = null),
              "function" == typeof addEventListener &&
                (this.opts.closeOnBeforeunload &&
                  ((this.beforeunloadEventListener = () => {
                    this.transport &&
                      (this.transport.removeAllListeners(),
                      this.transport.close());
                  }),
                  addEventListener(
                    "beforeunload",
                    this.beforeunloadEventListener,
                    !1
                  )),
                "localhost" !== this.hostname &&
                  ((this.offlineEventListener = () => {
                    this.onClose("transport close", {
                      description: "network connection lost",
                    });
                  }),
                  addEventListener("offline", this.offlineEventListener, !1))),
              this.open();
          }
          createTransport(e) {
            const t = Object.assign({}, this.opts.query);
            (t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id);
            const n = Object.assign(
              {},
              this.opts,
              {
                query: t,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port,
              },
              this.opts.transportOptions[e]
            );
            return new dn[e](n);
          }
          open() {
            let e;
            if (
              this.opts.rememberUpgrade &&
              hn.priorWebsocketSuccess &&
              -1 !== this.transports.indexOf("websocket")
            )
              e = "websocket";
            else {
              if (0 === this.transports.length)
                return void this.setTimeoutFn(() => {
                  this.emitReserved("error", "No transports available");
                }, 0);
              e = this.transports[0];
            }
            this.readyState = "opening";
            try {
              e = this.createTransport(e);
            } catch (e) {
              return this.transports.shift(), void this.open();
            }
            e.open(), this.setTransport(e);
          }
          setTransport(e) {
            this.transport && this.transport.removeAllListeners(),
              (this.transport = e),
              e
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", (e) => this.onClose("transport close", e));
          }
          probe(e) {
            let t = this.createTransport(e),
              n = !1;
            hn.priorWebsocketSuccess = !1;
            const i = () => {
              n ||
                (t.send([{ type: "ping", data: "probe" }]),
                t.once("packet", (e) => {
                  if (!n)
                    if ("pong" === e.type && "probe" === e.data) {
                      if (
                        ((this.upgrading = !0),
                        this.emitReserved("upgrading", t),
                        !t)
                      )
                        return;
                      (hn.priorWebsocketSuccess = "websocket" === t.name),
                        this.transport.pause(() => {
                          n ||
                            ("closed" !== this.readyState &&
                              (d(),
                              this.setTransport(t),
                              t.send([{ type: "upgrade" }]),
                              this.emitReserved("upgrade", t),
                              (t = null),
                              (this.upgrading = !1),
                              this.flush()));
                        });
                    } else {
                      const e = new Error("probe error");
                      (e.transport = t.name),
                        this.emitReserved("upgradeError", e);
                    }
                }));
            };
            function a() {
              n || ((n = !0), d(), t.close(), (t = null));
            }
            const s = (e) => {
              const n = new Error("probe error: " + e);
              (n.transport = t.name), a(), this.emitReserved("upgradeError", n);
            };
            function r() {
              s("transport closed");
            }
            function o() {
              s("socket closed");
            }
            function l(e) {
              t && e.name !== t.name && a();
            }
            const d = () => {
              t.removeListener("open", i),
                t.removeListener("error", s),
                t.removeListener("close", r),
                this.off("close", o),
                this.off("upgrading", l);
            };
            t.once("open", i),
              t.once("error", s),
              t.once("close", r),
              this.once("close", o),
              this.once("upgrading", l),
              -1 !== this.upgrades.indexOf("webtransport") &&
              "webtransport" !== e
                ? this.setTimeoutFn(() => {
                    n || t.open();
                  }, 200)
                : t.open();
          }
          onOpen() {
            if (
              ((this.readyState = "open"),
              (hn.priorWebsocketSuccess = "websocket" === this.transport.name),
              this.emitReserved("open"),
              this.flush(),
              "open" === this.readyState && this.opts.upgrade)
            ) {
              let e = 0;
              const t = this.upgrades.length;
              for (; e < t; e++) this.probe(this.upgrades[e]);
            }
          }
          onPacket(e) {
            if (
              "opening" === this.readyState ||
              "open" === this.readyState ||
              "closing" === this.readyState
            )
              switch (
                (this.emitReserved("packet", e),
                this.emitReserved("heartbeat"),
                this.resetPingTimeout(),
                e.type)
              ) {
                case "open":
                  this.onHandshake(JSON.parse(e.data));
                  break;
                case "ping":
                  this.sendPacket("pong"),
                    this.emitReserved("ping"),
                    this.emitReserved("pong");
                  break;
                case "error":
                  const t = new Error("server error");
                  (t.code = e.data), this.onError(t);
                  break;
                case "message":
                  this.emitReserved("data", e.data),
                    this.emitReserved("message", e.data);
              }
          }
          onHandshake(e) {
            this.emitReserved("handshake", e),
              (this.id = e.sid),
              (this.transport.query.sid = e.sid),
              (this.upgrades = this.filterUpgrades(e.upgrades)),
              (this.pingInterval = e.pingInterval),
              (this.pingTimeout = e.pingTimeout),
              (this.maxPayload = e.maxPayload),
              this.onOpen(),
              "closed" !== this.readyState && this.resetPingTimeout();
          }
          resetPingTimeout() {
            this.clearTimeoutFn(this.pingTimeoutTimer),
              (this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
              }, this.pingInterval + this.pingTimeout)),
              this.opts.autoUnref && this.pingTimeoutTimer.unref();
          }
          onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen),
              (this.prevBufferLen = 0),
              0 === this.writeBuffer.length
                ? this.emitReserved("drain")
                : this.flush();
          }
          flush() {
            if (
              "closed" !== this.readyState &&
              this.transport.writable &&
              !this.upgrading &&
              this.writeBuffer.length
            ) {
              const e = this.getWritablePackets();
              this.transport.send(e),
                (this.prevBufferLen = e.length),
                this.emitReserved("flush");
            }
          }
          getWritablePackets() {
            if (
              !(
                this.maxPayload &&
                "polling" === this.transport.name &&
                this.writeBuffer.length > 1
              )
            )
              return this.writeBuffer;
            let e = 1;
            for (let n = 0; n < this.writeBuffer.length; n++) {
              const i = this.writeBuffer[n].data;
              if (
                (i &&
                  (e +=
                    "string" == typeof (t = i)
                      ? (function (e) {
                          let t = 0,
                            n = 0;
                          for (let i = 0, a = e.length; i < a; i++)
                            (t = e.charCodeAt(i)),
                              t < 128
                                ? (n += 1)
                                : t < 2048
                                ? (n += 2)
                                : t < 55296 || t >= 57344
                                ? (n += 3)
                                : (i++, (n += 4));
                          return n;
                        })(t)
                      : Math.ceil(1.33 * (t.byteLength || t.size))),
                n > 0 && e > this.maxPayload)
              )
                return this.writeBuffer.slice(0, n);
              e += 2;
            }
            var t;
            return this.writeBuffer;
          }
          write(e, t, n) {
            return this.sendPacket("message", e, t, n), this;
          }
          send(e, t, n) {
            return this.sendPacket("message", e, t, n), this;
          }
          sendPacket(e, t, n, i) {
            if (
              ("function" == typeof t && ((i = t), (t = void 0)),
              "function" == typeof n && ((i = n), (n = null)),
              "closing" === this.readyState || "closed" === this.readyState)
            )
              return;
            (n = n || {}).compress = !1 !== n.compress;
            const a = { type: e, data: t, options: n };
            this.emitReserved("packetCreate", a),
              this.writeBuffer.push(a),
              i && this.once("flush", i),
              this.flush();
          }
          close() {
            const e = () => {
                this.onClose("forced close"), this.transport.close();
              },
              t = () => {
                this.off("upgrade", t), this.off("upgradeError", t), e();
              },
              n = () => {
                this.once("upgrade", t), this.once("upgradeError", t);
              };
            return (
              ("opening" !== this.readyState && "open" !== this.readyState) ||
                ((this.readyState = "closing"),
                this.writeBuffer.length
                  ? this.once("drain", () => {
                      this.upgrading ? n() : e();
                    })
                  : this.upgrading
                  ? n()
                  : e()),
              this
            );
          }
          onError(e) {
            (hn.priorWebsocketSuccess = !1),
              this.emitReserved("error", e),
              this.onClose("transport error", e);
          }
          onClose(e, t) {
            ("opening" !== this.readyState &&
              "open" !== this.readyState &&
              "closing" !== this.readyState) ||
              (this.clearTimeoutFn(this.pingTimeoutTimer),
              this.transport.removeAllListeners("close"),
              this.transport.close(),
              this.transport.removeAllListeners(),
              "function" == typeof removeEventListener &&
                (removeEventListener(
                  "beforeunload",
                  this.beforeunloadEventListener,
                  !1
                ),
                removeEventListener("offline", this.offlineEventListener, !1)),
              (this.readyState = "closed"),
              (this.id = null),
              this.emitReserved("close", e, t),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0));
          }
          filterUpgrades(e) {
            const t = [];
            let n = 0;
            const i = e.length;
            for (; n < i; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
            return t;
          }
        }
        hn.protocol = 4;
        hn.protocol;
        const mn = "function" == typeof ArrayBuffer,
          gn = (e) =>
            "function" == typeof ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e.buffer instanceof ArrayBuffer,
          fn = Object.prototype.toString,
          vn =
            "function" == typeof Blob ||
            ("undefined" != typeof Blob &&
              "[object BlobConstructor]" === fn.call(Blob)),
          wn =
            "function" == typeof File ||
            ("undefined" != typeof File &&
              "[object FileConstructor]" === fn.call(File));
        function bn(e) {
          return (
            (mn && (e instanceof ArrayBuffer || gn(e))) ||
            (vn && e instanceof Blob) ||
            (wn && e instanceof File)
          );
        }
        function yn(e, t) {
          if (!e || "object" != typeof e) return !1;
          if (Array.isArray(e)) {
            for (let t = 0, n = e.length; t < n; t++) if (yn(e[t])) return !0;
            return !1;
          }
          if (bn(e)) return !0;
          if (
            e.toJSON &&
            "function" == typeof e.toJSON &&
            1 === arguments.length
          )
            return yn(e.toJSON(), !0);
          for (const t in e)
            if (Object.prototype.hasOwnProperty.call(e, t) && yn(e[t]))
              return !0;
          return !1;
        }
        function xn(e) {
          const t = [],
            n = e.data,
            i = e;
          return (
            (i.data = _n(n, t)),
            (i.attachments = t.length),
            { packet: i, buffers: t }
          );
        }
        function _n(e, t) {
          if (!e) return e;
          if (bn(e)) {
            const n = { _placeholder: !0, num: t.length };
            return t.push(e), n;
          }
          if (Array.isArray(e)) {
            const n = new Array(e.length);
            for (let i = 0; i < e.length; i++) n[i] = _n(e[i], t);
            return n;
          }
          if ("object" == typeof e && !(e instanceof Date)) {
            const n = {};
            for (const i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                (n[i] = _n(e[i], t));
            return n;
          }
          return e;
        }
        function An(e, t) {
          return (e.data = Mn(e.data, t)), delete e.attachments, e;
        }
        function Mn(e, t) {
          if (!e) return e;
          if (e && !0 === e._placeholder) {
            if ("number" == typeof e.num && e.num >= 0 && e.num < t.length)
              return t[e.num];
            throw new Error("illegal attachments");
          }
          if (Array.isArray(e))
            for (let n = 0; n < e.length; n++) e[n] = Mn(e[n], t);
          else if ("object" == typeof e)
            for (const n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                (e[n] = Mn(e[n], t));
          return e;
        }
        const En = [
            "connect",
            "connect_error",
            "disconnect",
            "disconnecting",
            "newListener",
            "removeListener",
          ],
          Cn = 5;
        var Sn;
        !(function (e) {
          (e[(e.CONNECT = 0)] = "CONNECT"),
            (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
            (e[(e.EVENT = 2)] = "EVENT"),
            (e[(e.ACK = 3)] = "ACK"),
            (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
            (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
            (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
        })(Sn || (Sn = {}));
        class In {
          constructor(e) {
            this.replacer = e;
          }
          encode(e) {
            return (e.type !== Sn.EVENT && e.type !== Sn.ACK) || !yn(e)
              ? [this.encodeAsString(e)]
              : this.encodeAsBinary({
                  type: e.type === Sn.EVENT ? Sn.BINARY_EVENT : Sn.BINARY_ACK,
                  nsp: e.nsp,
                  data: e.data,
                  id: e.id,
                });
          }
          encodeAsString(e) {
            let t = "" + e.type;
            return (
              (e.type !== Sn.BINARY_EVENT && e.type !== Sn.BINARY_ACK) ||
                (t += e.attachments + "-"),
              e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
              null != e.id && (t += e.id),
              null != e.data && (t += JSON.stringify(e.data, this.replacer)),
              t
            );
          }
          encodeAsBinary(e) {
            const t = xn(e),
              n = this.encodeAsString(t.packet),
              i = t.buffers;
            return i.unshift(n), i;
          }
        }
        function Tn(e) {
          return "[object Object]" === Object.prototype.toString.call(e);
        }
        class kn extends $t {
          constructor(e) {
            super(), (this.reviver = e);
          }
          add(e) {
            let t;
            if ("string" == typeof e) {
              if (this.reconstructor)
                throw new Error(
                  "got plaintext data when reconstructing a packet"
                );
              t = this.decodeString(e);
              const n = t.type === Sn.BINARY_EVENT;
              n || t.type === Sn.BINARY_ACK
                ? ((t.type = n ? Sn.EVENT : Sn.ACK),
                  (this.reconstructor = new Ln(t)),
                  0 === t.attachments && super.emitReserved("decoded", t))
                : super.emitReserved("decoded", t);
            } else {
              if (!bn(e) && !e.base64) throw new Error("Unknown type: " + e);
              if (!this.reconstructor)
                throw new Error(
                  "got binary data when not reconstructing a packet"
                );
              (t = this.reconstructor.takeBinaryData(e)),
                t &&
                  ((this.reconstructor = null),
                  super.emitReserved("decoded", t));
            }
          }
          decodeString(e) {
            let t = 0;
            const n = { type: Number(e.charAt(0)) };
            if (void 0 === Sn[n.type])
              throw new Error("unknown packet type " + n.type);
            if (n.type === Sn.BINARY_EVENT || n.type === Sn.BINARY_ACK) {
              const i = t + 1;
              for (; "-" !== e.charAt(++t) && t != e.length; );
              const a = e.substring(i, t);
              if (a != Number(a) || "-" !== e.charAt(t))
                throw new Error("Illegal attachments");
              n.attachments = Number(a);
            }
            if ("/" === e.charAt(t + 1)) {
              const i = t + 1;
              for (; ++t; ) {
                if ("," === e.charAt(t)) break;
                if (t === e.length) break;
              }
              n.nsp = e.substring(i, t);
            } else n.nsp = "/";
            const i = e.charAt(t + 1);
            if ("" !== i && Number(i) == i) {
              const i = t + 1;
              for (; ++t; ) {
                const n = e.charAt(t);
                if (null == n || Number(n) != n) {
                  --t;
                  break;
                }
                if (t === e.length) break;
              }
              n.id = Number(e.substring(i, t + 1));
            }
            if (e.charAt(++t)) {
              const i = this.tryParse(e.substr(t));
              if (!kn.isPayloadValid(n.type, i))
                throw new Error("invalid payload");
              n.data = i;
            }
            return n;
          }
          tryParse(e) {
            try {
              return JSON.parse(e, this.reviver);
            } catch (e) {
              return !1;
            }
          }
          static isPayloadValid(e, t) {
            switch (e) {
              case Sn.CONNECT:
                return Tn(t);
              case Sn.DISCONNECT:
                return void 0 === t;
              case Sn.CONNECT_ERROR:
                return "string" == typeof t || Tn(t);
              case Sn.EVENT:
              case Sn.BINARY_EVENT:
                return (
                  Array.isArray(t) &&
                  ("number" == typeof t[0] ||
                    ("string" == typeof t[0] && -1 === En.indexOf(t[0])))
                );
              case Sn.ACK:
              case Sn.BINARY_ACK:
                return Array.isArray(t);
            }
          }
          destroy() {
            this.reconstructor &&
              (this.reconstructor.finishedReconstruction(),
              (this.reconstructor = null));
          }
        }
        class Ln {
          constructor(e) {
            (this.packet = e), (this.buffers = []), (this.reconPack = e);
          }
          takeBinaryData(e) {
            if (
              (this.buffers.push(e),
              this.buffers.length === this.reconPack.attachments)
            ) {
              const e = An(this.reconPack, this.buffers);
              return this.finishedReconstruction(), e;
            }
            return null;
          }
          finishedReconstruction() {
            (this.reconPack = null), (this.buffers = []);
          }
        }
        function zn(e, t, n) {
          return (
            e.on(t, n),
            function () {
              e.off(t, n);
            }
          );
        }
        const Dn = Object.freeze({
          connect: 1,
          connect_error: 1,
          disconnect: 1,
          disconnecting: 1,
          newListener: 1,
          removeListener: 1,
        });
        class Pn extends $t {
          constructor(e, t, n) {
            super(),
              (this.connected = !1),
              (this.recovered = !1),
              (this.receiveBuffer = []),
              (this.sendBuffer = []),
              (this._queue = []),
              (this._queueSeq = 0),
              (this.ids = 0),
              (this.acks = {}),
              (this.flags = {}),
              (this.io = e),
              (this.nsp = t),
              n && n.auth && (this.auth = n.auth),
              (this._opts = Object.assign({}, n)),
              this.io._autoConnect && this.open();
          }
          get disconnected() {
            return !this.connected;
          }
          subEvents() {
            if (this.subs) return;
            const e = this.io;
            this.subs = [
              zn(e, "open", this.onopen.bind(this)),
              zn(e, "packet", this.onpacket.bind(this)),
              zn(e, "error", this.onerror.bind(this)),
              zn(e, "close", this.onclose.bind(this)),
            ];
          }
          get active() {
            return !!this.subs;
          }
          connect() {
            return (
              this.connected ||
                (this.subEvents(),
                this.io._reconnecting || this.io.open(),
                "open" === this.io._readyState && this.onopen()),
              this
            );
          }
          open() {
            return this.connect();
          }
          send(...e) {
            return e.unshift("message"), this.emit.apply(this, e), this;
          }
          emit(e, ...t) {
            if (Dn.hasOwnProperty(e))
              throw new Error(
                '"' + e.toString() + '" is a reserved event name'
              );
            if (
              (t.unshift(e),
              this._opts.retries &&
                !this.flags.fromQueue &&
                !this.flags.volatile)
            )
              return this._addToQueue(t), this;
            const n = { type: Sn.EVENT, data: t, options: {} };
            if (
              ((n.options.compress = !1 !== this.flags.compress),
              "function" == typeof t[t.length - 1])
            ) {
              const e = this.ids++,
                i = t.pop();
              this._registerAckCallback(e, i), (n.id = e);
            }
            const i =
              this.io.engine &&
              this.io.engine.transport &&
              this.io.engine.transport.writable;
            return (
              (this.flags.volatile && (!i || !this.connected)) ||
                (this.connected
                  ? (this.notifyOutgoingListeners(n), this.packet(n))
                  : this.sendBuffer.push(n)),
              (this.flags = {}),
              this
            );
          }
          _registerAckCallback(e, t) {
            var n;
            const i =
              null !== (n = this.flags.timeout) && void 0 !== n
                ? n
                : this._opts.ackTimeout;
            if (void 0 === i) return void (this.acks[e] = t);
            const a = this.io.setTimeoutFn(() => {
                delete this.acks[e];
                for (let t = 0; t < this.sendBuffer.length; t++)
                  this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
                t.call(this, new Error("operation has timed out"));
              }, i),
              s = (...e) => {
                this.io.clearTimeoutFn(a), t.apply(this, e);
              };
            (s.withError = !0), (this.acks[e] = s);
          }
          emitWithAck(e, ...t) {
            return new Promise((n, i) => {
              const a = (e, t) => (e ? i(e) : n(t));
              (a.withError = !0), t.push(a), this.emit(e, ...t);
            });
          }
          _addToQueue(e) {
            let t;
            "function" == typeof e[e.length - 1] && (t = e.pop());
            const n = {
              id: this._queueSeq++,
              tryCount: 0,
              pending: !1,
              args: e,
              flags: Object.assign({ fromQueue: !0 }, this.flags),
            };
            e.push((e, ...i) => {
              if (n !== this._queue[0]) return;
              return (
                null !== e
                  ? n.tryCount > this._opts.retries &&
                    (this._queue.shift(), t && t(e))
                  : (this._queue.shift(), t && t(null, ...i)),
                (n.pending = !1),
                this._drainQueue()
              );
            }),
              this._queue.push(n),
              this._drainQueue();
          }
          _drainQueue(e = !1) {
            if (!this.connected || 0 === this._queue.length) return;
            const t = this._queue[0];
            (t.pending && !e) ||
              ((t.pending = !0),
              t.tryCount++,
              (this.flags = t.flags),
              this.emit.apply(this, t.args));
          }
          packet(e) {
            (e.nsp = this.nsp), this.io._packet(e);
          }
          onopen() {
            "function" == typeof this.auth
              ? this.auth((e) => {
                  this._sendConnectPacket(e);
                })
              : this._sendConnectPacket(this.auth);
          }
          _sendConnectPacket(e) {
            this.packet({
              type: Sn.CONNECT,
              data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
                : e,
            });
          }
          onerror(e) {
            this.connected || this.emitReserved("connect_error", e);
          }
          onclose(e, t) {
            (this.connected = !1),
              delete this.id,
              this.emitReserved("disconnect", e, t),
              this._clearAcks();
          }
          _clearAcks() {
            Object.keys(this.acks).forEach((e) => {
              if (!this.sendBuffer.some((t) => String(t.id) === e)) {
                const t = this.acks[e];
                delete this.acks[e],
                  t.withError &&
                    t.call(this, new Error("socket has been disconnected"));
              }
            });
          }
          onpacket(e) {
            if (e.nsp === this.nsp)
              switch (e.type) {
                case Sn.CONNECT:
                  e.data && e.data.sid
                    ? this.onconnect(e.data.sid, e.data.pid)
                    : this.emitReserved(
                        "connect_error",
                        new Error(
                          "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                        )
                      );
                  break;
                case Sn.EVENT:
                case Sn.BINARY_EVENT:
                  this.onevent(e);
                  break;
                case Sn.ACK:
                case Sn.BINARY_ACK:
                  this.onack(e);
                  break;
                case Sn.DISCONNECT:
                  this.ondisconnect();
                  break;
                case Sn.CONNECT_ERROR:
                  this.destroy();
                  const t = new Error(e.data.message);
                  (t.data = e.data.data), this.emitReserved("connect_error", t);
              }
          }
          onevent(e) {
            const t = e.data || [];
            null != e.id && t.push(this.ack(e.id)),
              this.connected
                ? this.emitEvent(t)
                : this.receiveBuffer.push(Object.freeze(t));
          }
          emitEvent(e) {
            if (this._anyListeners && this._anyListeners.length) {
              const t = this._anyListeners.slice();
              for (const n of t) n.apply(this, e);
            }
            super.emit.apply(this, e),
              this._pid &&
                e.length &&
                "string" == typeof e[e.length - 1] &&
                (this._lastOffset = e[e.length - 1]);
          }
          ack(e) {
            const t = this;
            let n = !1;
            return function (...i) {
              n || ((n = !0), t.packet({ type: Sn.ACK, id: e, data: i }));
            };
          }
          onack(e) {
            const t = this.acks[e.id];
            "function" == typeof t &&
              (delete this.acks[e.id],
              t.withError && e.data.unshift(null),
              t.apply(this, e.data));
          }
          onconnect(e, t) {
            (this.id = e),
              (this.recovered = t && this._pid === t),
              (this._pid = t),
              (this.connected = !0),
              this.emitBuffered(),
              this.emitReserved("connect"),
              this._drainQueue(!0);
          }
          emitBuffered() {
            this.receiveBuffer.forEach((e) => this.emitEvent(e)),
              (this.receiveBuffer = []),
              this.sendBuffer.forEach((e) => {
                this.notifyOutgoingListeners(e), this.packet(e);
              }),
              (this.sendBuffer = []);
          }
          ondisconnect() {
            this.destroy(), this.onclose("io server disconnect");
          }
          destroy() {
            this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
              this.io._destroy(this);
          }
          disconnect() {
            return (
              this.connected && this.packet({ type: Sn.DISCONNECT }),
              this.destroy(),
              this.connected && this.onclose("io client disconnect"),
              this
            );
          }
          close() {
            return this.disconnect();
          }
          compress(e) {
            return (this.flags.compress = e), this;
          }
          get volatile() {
            return (this.flags.volatile = !0), this;
          }
          timeout(e) {
            return (this.flags.timeout = e), this;
          }
          onAny(e) {
            return (
              (this._anyListeners = this._anyListeners || []),
              this._anyListeners.push(e),
              this
            );
          }
          prependAny(e) {
            return (
              (this._anyListeners = this._anyListeners || []),
              this._anyListeners.unshift(e),
              this
            );
          }
          offAny(e) {
            if (!this._anyListeners) return this;
            if (e) {
              const t = this._anyListeners;
              for (let n = 0; n < t.length; n++)
                if (e === t[n]) return t.splice(n, 1), this;
            } else this._anyListeners = [];
            return this;
          }
          listenersAny() {
            return this._anyListeners || [];
          }
          onAnyOutgoing(e) {
            return (
              (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
              this._anyOutgoingListeners.push(e),
              this
            );
          }
          prependAnyOutgoing(e) {
            return (
              (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
              this._anyOutgoingListeners.unshift(e),
              this
            );
          }
          offAnyOutgoing(e) {
            if (!this._anyOutgoingListeners) return this;
            if (e) {
              const t = this._anyOutgoingListeners;
              for (let n = 0; n < t.length; n++)
                if (e === t[n]) return t.splice(n, 1), this;
            } else this._anyOutgoingListeners = [];
            return this;
          }
          listenersAnyOutgoing() {
            return this._anyOutgoingListeners || [];
          }
          notifyOutgoingListeners(e) {
            if (
              this._anyOutgoingListeners &&
              this._anyOutgoingListeners.length
            ) {
              const t = this._anyOutgoingListeners.slice();
              for (const n of t) n.apply(this, e.data);
            }
          }
        }
        function Nn(e) {
          (e = e || {}),
            (this.ms = e.min || 100),
            (this.max = e.max || 1e4),
            (this.factor = e.factor || 2),
            (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
            (this.attempts = 0);
        }
        (Nn.prototype.duration = function () {
          var e = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            var t = Math.random(),
              n = Math.floor(t * this.jitter * e);
            e = 1 & Math.floor(10 * t) ? e + n : e - n;
          }
          return 0 | Math.min(e, this.max);
        }),
          (Nn.prototype.reset = function () {
            this.attempts = 0;
          }),
          (Nn.prototype.setMin = function (e) {
            this.ms = e;
          }),
          (Nn.prototype.setMax = function (e) {
            this.max = e;
          }),
          (Nn.prototype.setJitter = function (e) {
            this.jitter = e;
          });
        class $n extends $t {
          constructor(t, n) {
            var i;
            super(),
              (this.nsps = {}),
              (this.subs = []),
              t && "object" == typeof t && ((n = t), (t = void 0)),
              ((n = n || {}).path = n.path || "/socket.io"),
              (this.opts = n),
              Ht(this, n),
              this.reconnection(!1 !== n.reconnection),
              this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
              this.reconnectionDelay(n.reconnectionDelay || 1e3),
              this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
              this.randomizationFactor(
                null !== (i = n.randomizationFactor) && void 0 !== i ? i : 0.5
              ),
              (this.backoff = new Nn({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
              })),
              this.timeout(null == n.timeout ? 2e4 : n.timeout),
              (this._readyState = "closed"),
              (this.uri = t);
            const a = n.parser || e;
            (this.encoder = new a.Encoder()),
              (this.decoder = new a.Decoder()),
              (this._autoConnect = !1 !== n.autoConnect),
              this._autoConnect && this.open();
          }
          reconnection(e) {
            return arguments.length
              ? ((this._reconnection = !!e), this)
              : this._reconnection;
          }
          reconnectionAttempts(e) {
            return void 0 === e
              ? this._reconnectionAttempts
              : ((this._reconnectionAttempts = e), this);
          }
          reconnectionDelay(e) {
            var t;
            return void 0 === e
              ? this._reconnectionDelay
              : ((this._reconnectionDelay = e),
                null === (t = this.backoff) || void 0 === t || t.setMin(e),
                this);
          }
          randomizationFactor(e) {
            var t;
            return void 0 === e
              ? this._randomizationFactor
              : ((this._randomizationFactor = e),
                null === (t = this.backoff) || void 0 === t || t.setJitter(e),
                this);
          }
          reconnectionDelayMax(e) {
            var t;
            return void 0 === e
              ? this._reconnectionDelayMax
              : ((this._reconnectionDelayMax = e),
                null === (t = this.backoff) || void 0 === t || t.setMax(e),
                this);
          }
          timeout(e) {
            return arguments.length
              ? ((this._timeout = e), this)
              : this._timeout;
          }
          maybeReconnectOnOpen() {
            !this._reconnecting &&
              this._reconnection &&
              0 === this.backoff.attempts &&
              this.reconnect();
          }
          open(e) {
            if (~this._readyState.indexOf("open")) return this;
            this.engine = new hn(this.uri, this.opts);
            const t = this.engine,
              n = this;
            (this._readyState = "opening"), (this.skipReconnect = !1);
            const i = zn(t, "open", function () {
                n.onopen(), e && e();
              }),
              a = (t) => {
                this.cleanup(),
                  (this._readyState = "closed"),
                  this.emitReserved("error", t),
                  e ? e(t) : this.maybeReconnectOnOpen();
              },
              s = zn(t, "error", a);
            if (!1 !== this._timeout) {
              const e = this._timeout,
                n = this.setTimeoutFn(() => {
                  i(), a(new Error("timeout")), t.close();
                }, e);
              this.opts.autoUnref && n.unref(),
                this.subs.push(() => {
                  this.clearTimeoutFn(n);
                });
            }
            return this.subs.push(i), this.subs.push(s), this;
          }
          connect(e) {
            return this.open(e);
          }
          onopen() {
            this.cleanup(),
              (this._readyState = "open"),
              this.emitReserved("open");
            const e = this.engine;
            this.subs.push(
              zn(e, "ping", this.onping.bind(this)),
              zn(e, "data", this.ondata.bind(this)),
              zn(e, "error", this.onerror.bind(this)),
              zn(e, "close", this.onclose.bind(this)),
              zn(this.decoder, "decoded", this.ondecoded.bind(this))
            );
          }
          onping() {
            this.emitReserved("ping");
          }
          ondata(e) {
            try {
              this.decoder.add(e);
            } catch (e) {
              this.onclose("parse error", e);
            }
          }
          ondecoded(e) {
            rn(() => {
              this.emitReserved("packet", e);
            }, this.setTimeoutFn);
          }
          onerror(e) {
            this.emitReserved("error", e);
          }
          socket(e, t) {
            let n = this.nsps[e];
            return (
              n
                ? this._autoConnect && !n.active && n.connect()
                : ((n = new Pn(this, e, t)), (this.nsps[e] = n)),
              n
            );
          }
          _destroy(e) {
            const t = Object.keys(this.nsps);
            for (const e of t) {
              if (this.nsps[e].active) return;
            }
            this._close();
          }
          _packet(e) {
            const t = this.encoder.encode(e);
            for (let n = 0; n < t.length; n++)
              this.engine.write(t[n], e.options);
          }
          cleanup() {
            this.subs.forEach((e) => e()),
              (this.subs.length = 0),
              this.decoder.destroy();
          }
          _close() {
            (this.skipReconnect = !0),
              (this._reconnecting = !1),
              this.onclose("forced close"),
              this.engine && this.engine.close();
          }
          disconnect() {
            return this._close();
          }
          onclose(e, t) {
            this.cleanup(),
              this.backoff.reset(),
              (this._readyState = "closed"),
              this.emitReserved("close", e, t),
              this._reconnection && !this.skipReconnect && this.reconnect();
          }
          reconnect() {
            if (this._reconnecting || this.skipReconnect) return this;
            const e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
              this.backoff.reset(),
                this.emitReserved("reconnect_failed"),
                (this._reconnecting = !1);
            else {
              const t = this.backoff.duration();
              this._reconnecting = !0;
              const n = this.setTimeoutFn(() => {
                e.skipReconnect ||
                  (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                  e.skipReconnect ||
                    e.open((t) => {
                      t
                        ? ((e._reconnecting = !1),
                          e.reconnect(),
                          this.emitReserved("reconnect_error", t))
                        : e.onreconnect();
                    }));
              }, t);
              this.opts.autoUnref && n.unref(),
                this.subs.push(() => {
                  this.clearTimeoutFn(n);
                });
            }
          }
          onreconnect() {
            const e = this.backoff.attempts;
            (this._reconnecting = !1),
              this.backoff.reset(),
              this.emitReserved("reconnect", e);
          }
        }
        const On = {};
        function jn(e, t) {
          "object" == typeof e && ((t = e), (e = void 0));
          const n = (function (e, t = "", n) {
              let i = e;
              (n = n || ("undefined" != typeof location && location)),
                null == e && (e = n.protocol + "//" + n.host),
                "string" == typeof e &&
                  ("/" === e.charAt(0) &&
                    (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
                  /^(https?|wss?):\/\//.test(e) ||
                    (e = void 0 !== n ? n.protocol + "//" + e : "https://" + e),
                  (i = un(e))),
                i.port ||
                  (/^(http|ws)$/.test(i.protocol)
                    ? (i.port = "80")
                    : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
                (i.path = i.path || "/");
              const a =
                -1 !== i.host.indexOf(":") ? "[" + i.host + "]" : i.host;
              return (
                (i.id = i.protocol + "://" + a + ":" + i.port + t),
                (i.href =
                  i.protocol +
                  "://" +
                  a +
                  (n && n.port === i.port ? "" : ":" + i.port)),
                i
              );
            })(e, (t = t || {}).path || "/socket.io"),
            i = n.source,
            a = n.id,
            s = n.path,
            r = On[a] && s in On[a].nsps;
          let o;
          return (
            t.forceNew || t["force new connection"] || !1 === t.multiplex || r
              ? (o = new $n(i, t))
              : (On[a] || (On[a] = new $n(i, t)), (o = On[a])),
            n.query && !t.query && (t.query = n.queryKey),
            o.socket(n.path, t)
          );
        }
        Object.assign(jn, { Manager: $n, Socket: Pn, io: jn, connect: jn });
        const Bn = 10;
        let qn = 100,
          Hn = 1;
        const Rn = window.matchMedia("(max-width: 1023px)").matches;
        let Gn;
        function Yn(e, n, i) {
          const a = it(`video_tiles_${e.id}`)?.form_data;
          a &&
            !Gn &&
            ((Gn = jn(t.SOCKET_URL, {
              query: `people_id=${a.people_id}&client_id=${e.client_id}&type=video-tiles&uid=${a.unique_field_value}&video_tile_id=${i.id}`,
            })),
            Gn?.on("connect", (e) => {
              console.log(e, "socket connected successfully");
            }),
            Gn?.on("video_tile_message", async (t) => {
              console.log("message from dashboard", t);
              for (const a in t)
                "media_id" === a && t.media_id === i.id && Un(n, t, e);
            }));
        }
        function Vn() {
          const e = new Date(),
            t = e.getHours() > 12 ? e.getHours() - 12 : e.getHours(),
            n = e.getHours() >= 12 ? "PM" : "AM";
          return `${t}:${e.getMinutes().toString().padStart(2, "0")} ${n}`;
        }
        function Un(e, t, n, i = !1, a = !1) {
          const {
              message_content: s,
              message_time: r,
              message_from: o,
              people_id: l,
            } = t,
            d = e.querySelector(
              "#live-streaming-chat-log" + (Rn ? "-mobile" : "")
            ),
            c = `<div class="message-container">\n    <div class="avatar-wrapper">${
              l
                ? ' <svg\n        width="28"\n        height="28"\n        viewBox="0 0 256 256"\n        xmlns="http://www.w3.org/2000/svg"\n        class="avatar"\n      >\n        <rect fill="none" height="256" width="256" />\n        <circle\n          cx="128"\n          cy="96"\n          fill="none"\n          r="64"\n          stroke="inherit"\n          stroke-linecap="round"\n          stroke-linejoin="round"\n          stroke-width="12"\n        />\n        <path\n          d="M31,216a112,112,0,0,1,194,0"\n          fill="none"\n          stroke="inherit"\n          stroke-linecap="round"\n          stroke-linejoin="round"\n          stroke-width="12"\n        />\n      </svg>'
                : `<img\n        src="${
                    n.agent_avatar ||
                    "https://client-static.saleassist.ai/10b07b83-c8e3-4b74-8c06-3eb5923794af/saleassist-logo.png"
                  }"\n        class="agent-avatar"\n      />`
            }</div>\n    <div class="message-wrapper">\n      <div class="sender-info-wrapper">\n        <p class="sender-name">${
              o || ""
            }</p>\n        <p class="message-meta-info">${
              r || ""
            }</p>\n      </div>\n      <p class="message">${
              s || ""
            }</p>\n    </div>\n  </div>`;
          d.insertAdjacentHTML(i ? "afterbegin" : "beforeend", c),
            a || (d.scrollTop = d.scrollHeight);
        }
        function Fn(e, t, n) {
          const i = () => {
            Gn || (Gn = Yn(e, n, t));
            const i = it(`video_tiles_${e.id}`)?.user_data || {},
              a = it(`video_tiles_${e.id}`)?.form_data,
              s = n.querySelector(
                ".live-streaming-chat-message-input" + (Rn ? "-mobile" : "")
              ),
              r = s.value;
            if ("" !== r.trim()) {
              const n = {
                people_id: a?.people_id,
                client_id: t?.client_id,
                media_id: t?.id,
                playlist_id: e.id,
                message_to: "",
                message_content: r,
                message_from: i?.name || "Unknown",
                message_time: Vn(),
              };
              Gn?.emit("chat_message", n), (s.value = "");
            }
          };
          it(`video_tiles_${e.id}`)?.form_data
            ? i()
            : lt(e.id, 0, e.lead_form, "", e.unique_field_name, () => {}, i);
        }
        function Zn(e, n, i, a) {
          fetch(
            `${t.url}/widget_chat/media/${n.id}/${i.client_id}/${Hn}/${Bn}`,
            { headers: { "Content-Type": "application/json" } }
          )
            .then((e) => e.json())
            .then((t) => {
              if (
                (t.records.forEach((t) => {
                  Un(e, t, i, !0, a);
                }),
                Hn * Bn > qn)
              ) {
                e.querySelector(".live-streaming-load-more-chat-btn").remove();
              }
              (qn = t.count), (Hn += 1);
            })
            .catch((e) => {
              console.log(e);
            });
        }
        const Wn = window.matchMedia("(max-width: 1023px)").matches;
        let Xn = !0;
        function Qn(e) {
          const t = e.querySelector(".live-streaming-modal-video-container"),
            n = e.querySelector("video"),
            i = e.querySelector(".play-pause-btn"),
            a = e.querySelector(".live-streaming-modal-video-cta-mute-unmute"),
            s = e.querySelector(".mini-player-btn"),
            r = e.querySelector(".current-time"),
            o = e.querySelector(".total-time"),
            l = e.querySelector(".timeline-container"),
            d = e.querySelector(".live-streaming-toggle-chat-btn"),
            c = e.querySelector(".live-streaming-toggle-products-btn"),
            p = e.querySelector(".live-streaming-like-btn"),
            u = e.querySelector(".live-streaming-modal-video-cta-share");
          let h,
            m = !1;
          function g(e) {
            const t = l.getBoundingClientRect(),
              n = Math.min(Math.max(0, e.x - t.x), t.width) / t.width;
            m &&
              (e.preventDefault(),
              l.style.setProperty("--progress-position", n));
          }
          function f(e) {
            const i = l.getBoundingClientRect(),
              a = Math.min(Math.max(0, e.x - i.x), i.width) / i.width;
            (m = !(1 & ~e.buttons)),
              t.classList.toggle("scrubbing", m),
              m
                ? ((h = n.paused), n.pause())
                : ((n.currentTime = a * n.duration), h || n.play()),
              g(e);
          }
          l.addEventListener("mousemove", g),
            l.addEventListener("mousedown", f),
            document.addEventListener("mouseup", (e) => {
              m && f(e);
            }),
            document.addEventListener("mousemove", (e) => {
              m && g(e);
            });
          const v = new Intl.NumberFormat(void 0, { minimumIntegerDigits: 2 });
          function w(e) {
            const t = Math.floor(e % 60),
              n = Math.floor(e / 60) % 60,
              i = Math.floor(e / 3600);
            return 0 === i
              ? `${n}:${v.format(t)}`
              : `${i}:${v.format(n)}:${v.format(t)}`;
          }
          function b() {
            n.paused ? n.play() : n.pause();
          }
          n.addEventListener("loadeddata", () => {
            (e.querySelector(".video-loading-spinner-wrapper").style.display =
              "none"),
              (o.textContent = w(n.duration));
          }),
            n.addEventListener("timeupdate", () => {
              r.textContent = w(n.currentTime);
              const e = n.currentTime / n.duration;
              l.style.setProperty("--progress-position", e);
            }),
            a.addEventListener("click", function () {
              (n.muted = !n.muted), a.classList.toggle("muted");
            }),
            i.addEventListener("click", b),
            n.addEventListener("click", b),
            n.addEventListener("play", () => {
              t.classList.remove("paused");
            }),
            n.addEventListener("pause", () => {
              t.classList.add("paused");
            }),
            s.addEventListener("click", function () {
              t.classList.contains("mini-player")
                ? document.exitPictureInPicture()
                : n.requestPictureInPicture();
            }),
            n.addEventListener("enterpictureinpicture", () => {
              t.classList.add("mini-player");
            }),
            n.addEventListener("leavepictureinpicture", () => {
              t.classList.remove("mini-player");
            }),
            d.addEventListener("click", () => {
              e.querySelector(
                ".live-streaming-modal-chat-container"
              ).classList.toggle("show-chat");
              const t = e.querySelector(".chat-container-mobile");
              t && t.classList.toggle("sa_shorts-chat-hidden");
            });
          c.addEventListener("click", () => {
            (() => {
              e.querySelector(
                Wn
                  ? ".live-streaming-modal-products-container-mobile"
                  : ".live-streaming-modal-products-container"
              ).classList.toggle("show-products");
              const t = e.querySelector(".chat-container-mobile"),
                n = e.querySelector(".live-streaming-chat-log-mobile");
              n &&
                ((n.style.transform = Xn
                  ? "translateY(-150px)"
                  : "translateY(0)"),
                (t.style.height = Xn
                  ? t.offsetHeight + "150px"
                  : t.offsetHeight - "150px"),
                (Xn = !Xn));
            })();
          }),
            p.addEventListener("click", () => {
              p.innerHTML =
                '<div class="sa_shorts-hearts flying">\n      <span class="sa_shorts-heart"></span>\n      <span class="sa_shorts-heart"></span>\n      <span class="sa_shorts-heart"></span>\n      <span class="sa_shorts-heart"></span>\n      <span class="sa_shorts-heart"></span>\n      <span class="sa_shorts-heart"></span>\n      <span class="sa_shorts-heart"></span>\n      <span class="sa_shorts-heart"></span>\n    </div>';
            }),
            u.addEventListener("click", (e) => {
              t?.insertAdjacentHTML("beforeend", mt()), ut();
            }),
            setTimeout(() => {
              d.click();
            }, 1e3),
            setTimeout(() => {
              c.click();
            }, 1300);
        }
        function Jn(e, t) {
          const n = e.media.find((e) => e.id === t),
            i = n.products;
          let a = "";
          return (
            0 === i?.length &&
              (a +=
                '<div\n      class="live-streaming-modal-product-wrapper live-streaming-modal-no-product-found"\n    >\n      <div>\n        <p class="live-streaming-modal-product-title">No products found</p>\n      </div>\n    </div>'),
            i?.map((e) => {
              a += `\n      <div class="live-streaming-modal-product-wrapper">\n        <div class="live-streaming-modal-product-image-wrapper">\n          <img\n            src="${
                e.product_images?.[0]
              }"\n            alt="product"\n            class="live-streaming-modal-product-image"\n          />\n        </div>\n        <div class="" style="flex: 1; overflow: hidden">\n          <p class="live-streaming-modal-product-title">\n            ${
                e.product_name
              }\n          </p>\n          <p class="live-streaming-modal-product-description">\n            ${
                e.product_description?.slice(0, 80) || ""
              }...\n          </p>\n          ${((e) => {
                const t = e.product_price,
                  n = e.offer_price,
                  i = e.product_currency;
                return t > 0
                  ? n > 0
                    ? `\n              <div class="live-streaming-modal-product-price-wrapper">\n                <span class="live-streaming-modal-product-offer-price"\n                  >${ct(
                        n,
                        i
                      )}</span\n                ><span class="live-streaming-modal-product-price discount"\n                  >${ct(
                        t,
                        i
                      )}</span\n                >\n              </div>\n            `
                    : `<div>\n              <span class="live-streaming-modal-product-price"\n                >${ct(
                        t,
                        i
                      )}</span\n              >\n            </div> `
                  : "";
              })(e)}\n          ${
                e.variant_id
                  ? `<button\n          class="live-streaming-modal-cta-for-shopify-product"\n          product-variant-id="${
                      e.variant_id
                    }"\n          shopify-domain-name="${
                      e.shopify_domain
                    }"\n          >\n          ${
                      e.product_cta_text || "Buy now"
                    }</button>`
                  : `<a\n            class="live-streaming-modal-product-cta"\n            href="${
                      e.product_url
                    }"\n            target="_blank"\n            data-id="${
                      e.id
                    }"\n            >${
                      e.product_cta_text || "Buy now"
                    }</a\n          >`
              }\n        </div>\n      </div>\n    `;
            }),
            a
          );
        }
        function Kn(e, t) {
          const n = e.media.find((e) => e.id === t),
            i = n.product_offers;
          let a = "";
          return (
            i?.length > 0
              ? i.forEach((e) => {
                  a += `<div\n        class="live-streaming-modal-product-offer-wrapper"\n      >\n        <p>${e}</p>\n      </div> `;
                })
              : (a =
                  '<div\n      class="live-streaming-modal-product-wrapper"\n      style="margin: auto"\n    >\n      <p class="live-streaming-modal-product-title">Offer not available</p>\n    </div>'),
            a
          );
        }
        function ei(e, t, n, i) {
          const a = e?.media?.find((e) => e.id === t);
          document.body.insertAdjacentHTML(
            "beforeend",
            `\n      <div\n        id="live-streaming-modal-${t}"\n        class="live-streaming-modal ${
              "dark" === e.theme_mode ? "dark" : "light"
            }"\n      >\n        <svg\n          class="live-streaming-modal-close-btn"\n          stroke="currentColor"\n          fill="currentColor"\n          stroke-width="0"\n          viewBox="0 0 24 24"\n          height="1em"\n          width="1em"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            fill="none"\n            stroke="currentColor"\n            stroke-width="3"\n            d="M3,3 L21,21 M3,21 L21,3"\n          ></path>\n        </svg>\n\n        <div class="live-streaming-modal-body">\n          <div\n            style="border-radius:${i}"\n            class="live-streaming-modal-products-container"\n          >\n            <div class="live-streaming-modal-products-container-title-wrapper">\n              <p\n                class="live-streaming-modal-products-container-title sa_shorts-active live-streaming-all-products"\n              >\n                Products\n              </p>\n              <p\n                class="live-streaming-modal-products-container-title live-streaming-products-offer"\n              >\n                Offers\n              </p>\n            </div>\n            <div class="live-streaming-modal-products-container-body">\n              ${Jn(
              e,
              t
            )}\n            </div>\n            <div class="live-streaming-modal-product-offers-body">\n              ${Kn(
              e,
              t
            )}\n            </div>\n          </div>\n\n          <div\n            style="border-radius:${i}"\n            class="live-streaming-modal-video-container"\n          >\n            ${(function (
              e,
              t,
              n,
              i
            ) {
              const a = n?.media?.find((e) => e.id === i);
              return `\n    <div class="live-streaming-modal-video-header">\n    <div class="live-streaming-modal-video-info">\n      <p class="live-streaming-type">\n        ${
                n.live_streaming_type || "Recorded"
              }\n      </p>\n      <div class="live-streaming-modal-video-count-wrapper">\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="11.57"\n          height="13.868"\n          viewBox="0 0 11.57 13.868"\n        >\n          <g>\n            <path\n              data-name="Path 35456"\n              d="M90.372 6.68a3.232 3.232 0 0 0 2.361-.98 3.232 3.232 0 0 0 .979-2.362 3.232 3.232 0 0 0-.979-2.36 3.339 3.339 0 0 0-4.723 0 3.232 3.232 0 0 0-.979 2.362 3.232 3.232 0 0 0 .979 2.36 3.233 3.233 0 0 0 2.362.98zm-1.787-5.127a2.527 2.527 0 0 1 3.574 0A2.415 2.415 0 0 1 92.9 3.34a2.415 2.415 0 0 1-.741 1.787 2.526 2.526 0 0 1-3.574 0 2.414 2.414 0 0 1-.741-1.787 2.415 2.415 0 0 1 .741-1.787zm0 0"\n              transform="translate(-84.674)"\n              style="fill:#fff"\n            />\n            <path\n              data-name="Path 35457"\n              d="M11.542 251.282a8.251 8.251 0 0 0-.112-.876 6.9 6.9 0 0 0-.216-.881 4.352 4.352 0 0 0-.362-.822 3.1 3.1 0 0 0-.546-.712 2.408 2.408 0 0 0-.785-.493 2.711 2.711 0 0 0-1-.181 1.017 1.017 0 0 0-.543.23c-.163.106-.353.229-.566.365a3.241 3.241 0 0 1-.732.322 2.841 2.841 0 0 1-1.79 0 3.231 3.231 0 0 1-.731-.322c-.21-.134-.4-.257-.566-.365a1.016 1.016 0 0 0-.543-.23 2.708 2.708 0 0 0-1 .181 2.406 2.406 0 0 0-.785.493 3.1 3.1 0 0 0-.546.712 4.36 4.36 0 0 0-.362.822 6.922 6.922 0 0 0-.215.881 8.194 8.194 0 0 0-.112.877c-.018.265-.028.54-.028.819a2.3 2.3 0 0 0 .684 1.742 2.462 2.462 0 0 0 1.762.643h6.676a2.462 2.462 0 0 0 1.762-.643 2.3 2.3 0 0 0 .684-1.742c0-.281-.009-.556-.028-.82zm-1.216 1.973a1.658 1.658 0 0 1-1.2.419h-6.68a1.658 1.658 0 0 1-1.2-.419 1.5 1.5 0 0 1-.433-1.155c0-.26.009-.516.026-.763a7.391 7.391 0 0 1 .1-.789 6.1 6.1 0 0 1 .189-.777 3.549 3.549 0 0 1 .295-.668 2.3 2.3 0 0 1 .4-.526 1.6 1.6 0 0 1 .522-.325 1.871 1.871 0 0 1 .64-.123c.028.015.079.044.161.1.167.109.36.233.573.369a4.027 4.027 0 0 0 .919.41 3.654 3.654 0 0 0 2.29 0 4.031 4.031 0 0 0 .919-.411c.218-.139.405-.26.572-.369.082-.053.133-.082.161-.1a1.872 1.872 0 0 1 .64.123 1.6 1.6 0 0 1 .522.325 2.29 2.29 0 0 1 .4.526 3.538 3.538 0 0 1 .295.668 6.089 6.089 0 0 1 .19.777 7.452 7.452 0 0 1 .1.789c.017.245.026.5.026.762a1.5 1.5 0 0 1-.427 1.156zm0 0"\n              transform="translate(0 -240.617)"\n              style="fill:#fff"\n            />\n          </g>\n        </svg>\n        <p class="live-streaming-video-views-count">\n          ${Intl.NumberFormat(
                "en",
                { notation: "compact" }
              ).format(
                a?.views || 0
              )}\n        </p>\n      </div>\n    </div>\n\n    <div class="live-streaming-modal-video-cta-wrapper">\n      ${Je(
                a,
                n.is_whatsapp_me
              )}\n      <div\n        class="live-streaming-modal-video-cta live-streaming-modal-video-cta-mute-unmute"\n      >\n        <svg\n          class="live-streaming-modal-video-mute-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          stroke="inherit"\n          fill="none"\n          stroke-width="2"\n          viewBox="0 0 24 24"\n          aria-hidden="true"\n          height="24px"\n          width="24px"\n        >\n          <path\n            stroke-linecap="round"\n            stroke-linejoin="round"\n            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"\n            clip-rule="evenodd"\n          />\n          <path\n            stroke-linecap="round"\n            stroke-linejoin="round"\n            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"\n          />\n        </svg>\n        <svg\n          class="live-streaming-modal-video-unmute-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          stroke="inherit"\n          fill="none"\n          stroke-width="2"\n          viewBox="0 0 24 24"\n          aria-hidden="true"\n          height="24px"\n          width="24px"\n        >\n          <path\n            stroke-linecap="round"\n            stroke-linejoin="round"\n            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"\n          />\n        </svg>\n      </div>\n      <div\n        class="live-streaming-modal-video-cta live-streaming-modal-video-cta-share"\n      >\n        <svg\n          width="24"\n          height="24"\n          data-name="Layer 1"\n          id="Layer_1"\n          viewBox="0 0 24 24"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z"\n            fill="inherit"\n          />\n        </svg>\n      </div>\n    </div>\n  </div>\n\n    <video\n      preload="metadata"\n      playsinline\n      autoplay\n      style="border-radius: inherit"\n    >\n      <source src="${e}#t=0.1" type="video/mp4" />\n    </video>\n    <div class="chat-container-mobile sa_shorts-chat-hidden">\n      <div\n        class="live-streaming-chat-log-mobile"\n        id="live-streaming-chat-log-mobile"\n      ></div>\n      <div class="live-streaming-chat-input-container-mobile">\n        <input\n          type="text"\n          class="live-streaming-chat-message-input-mobile"\n          placeholder="Type Your Message"\n        />\n        <button class="live-streaming-chat-send-btn-mobile">\n          <svg\n            stroke="currentColor"\n            fill="currentColor"\n            stroke-width="0"\n            viewBox="0 0 512 512"\n            height="1em"\n            width="1em"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path d="M16 464l480-208L16 48v160l320 48-320 48z"></path>\n          </svg>\n        </button>\n      </div>\n    </div>\n    <div class="live-streaming-modal-products-container-mobile">\n      ${Jn(
                n,
                i
              )}\n    </div>\n    <div class="live-streaming-modal-product-offers-container-mobile">\n      <p class="live-streaming-modal-product-offers-mobile-title">\n        Product Offers\n      </p>\n      <div class="close-live-streaming-modal-product-offers-mobile">\n        <svg\n          stroke="currentColor"\n          fill="currentColor"\n          stroke-width="0"\n          viewBox="0 0 352 512"\n          height="20"\n          width="20"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"\n          ></path>\n        </svg>\n      </div>\n      <div class="live-streaming-modal-product-offers-wrapper-mobile">\n        ${Kn(
                n,
                i
              )}\n      </div>\n    </div>\n    <div\n      class="live-streaming-modal-video-controls-container"\n      style="border-radius:${t}"\n    >\n      <div class="timeline-container">\n      <div class="timeline">\n        <div class="thumb-indicator"></div>\n      </div>\n    </div>\n    <div class="controls">\n      <button class="play-pause-btn">\n        <svg class="play-icon" viewBox="0 0 24 24">\n          <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />\n        </svg>\n        <svg class="pause-icon" viewBox="0 0 24 24">\n          <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />\n        </svg>\n      </button>\n      <div class="duration-container">\n        <div class="current-time">0:00</div>\n        /\n        <div class="total-time"></div>\n      </div>\n      <button class="mini-player-btn">\n        <svg viewBox="0 0 24 24">\n          <path\n            fill="currentColor"\n            d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"\n          />\n        </svg>\n      </button>\n      <div class="live-streaming-video-cta">\n        <button class="live-streaming-toggle-products-btn">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="18.659"\n            height="22"\n            viewBox="0 0 18.659 22"\n          >\n            <g data-name="Layer 72">\n              <path\n                data-name="Path 35445"\n                d="M25.612 20.482 23.764 9.521a2.239 2.239 0 0 0-2.213-1.866h-.862v-.746a4.359 4.359 0 1 0-8.718 0v.746h-.866a2.239 2.239 0 0 0-2.213 1.866L7.049 20.482a3.489 3.489 0 0 0 3.441 4.068h11.681a3.489 3.489 0 0 0 3.441-4.068zM13.091 6.89a3.239 3.239 0 1 1 6.479 0v.746h-6.479zm10.89 15.7a2.37 2.37 0 0 1-1.81.84H10.49a2.366 2.366 0 0 1-2.336-2.762L9.986 9.7a1.12 1.12 0 0 1 1.12-.937h.862v1.627a.56.56 0 0 0 1.12 0V8.767h6.482v1.627a.56.56 0 1 0 1.12 0V8.767h.866a1.12 1.12 0 0 1 1.12.937l1.832 10.965a2.374 2.374 0 0 1-.527 1.922z"\n                transform="translate(-7.001 -2.55)"\n                style="fill:#fff"\n              />\n            </g>\n          </svg>\n        </button>\n        <button class="ls-modal-show-offers-panel-btn">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="20"\n            height="20"\n            viewBox="0 0 21.804 21.804"\n          >\n            <g data-name="Group 28496">\n              <g data-name="Group 28495">\n                <path\n                  data-name="Path 35447"\n                  d="M21.618.188a.639.639 0 0 0-.9 0l-1.864 1.86a1.921 1.921 0 0 0-.361-.13L12.711.49a1.926 1.926 0 0 0-1.82.5L.562 11.307a1.919 1.919 0 0 0 0 2.71l7.227 7.227a1.919 1.919 0 0 0 2.71 0l10.313-10.33a1.926 1.926 0 0 0 .5-1.82l-1.424-5.781a1.925 1.925 0 0 0-.13-.361l1.861-1.861a.639.639 0 0 0-.001-.903zM20.077 9.4a.642.642 0 0 1-.168.607L9.6 20.341a.64.64 0 0 1-.9 0l-7.235-7.228a.64.64 0 0 1 0-.9L11.795 1.9a.642.642 0 0 1 .453-.187.633.633 0 0 1 .153.019l5.431 1.338-1.538 1.539a1.917 1.917 0 1 0 .9.9l1.538-1.538zM15.92 6.789a.639.639 0 1 1 0-.9.64.64 0 0 1 0 .9z"\n                  transform="translate(-.001 -.001)"\n                  style="fill:inherit"\n                />\n              </g>\n            </g>\n            <g data-name="Group 28498">\n              <g data-name="Group 28497">\n                <path\n                  data-name="Path 35448"\n                  d="M172.983 168.031a1.917 1.917 0 1 0 0 2.71 1.919 1.919 0 0 0 0-2.71zm-.9 1.807a.639.639 0 1 1 0-.9.64.64 0 0 1-.003.9z"\n                  transform="translate(-162.484 -160.339)"\n                  style="fill:inherit"\n                />\n              </g>\n            </g>\n            <g data-name="Group 28500">\n              <g data-name="Group 28499">\n                <path\n                  data-name="Path 35449"\n                  d="M194.2 316.5a1.916 1.916 0 1 0 0 2.71 1.915 1.915 0 0 0 0-2.71zm-.9 1.807a.639.639 0 1 1 0-.9.639.639 0 0 1-.007.899z"\n                  transform="translate(-182.795 -302.483)"\n                  style="fill:inherit"\n                />\n              </g>\n            </g>\n            <g data-name="Group 28502">\n              <g data-name="Group 28501">\n                <path\n                  data-name="Path 35450"\n                  d="M124.24 261.659a.639.639 0 0 0-.705-.564l-8.131.9a.639.639 0 0 0 .07 1.274.655.655 0 0 0 .071 0l8.131-.9a.639.639 0 0 0 .564-.71z"\n                  transform="translate(-109.944 -249.973)"\n                  style="fill:inherit"\n                />\n              </g>\n            </g>\n          </svg>\n        </button>\n        <button class="live-streaming-toggle-chat-btn">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="22"\n            viewBox="0 0 24 22"\n          >\n            <path\n              data-name="Path 35444"\n              d="M22.477 3H3.619A2.622 2.622 0 0 0 1 5.619v11.524a2.622 2.622 0 0 0 2.619 2.619h1.048v4.167a1.064 1.064 0 0 0 .665 1 1.028 1.028 0 0 0 1.131-.247l4.713-4.916h11.3a2.622 2.622 0 0 0 2.624-2.623V5.619A2.622 2.622 0 0 0 22.477 3zm1.571 14.143a1.573 1.573 0 0 1-1.571 1.571H10.953a.524.524 0 0 0-.378.161l-4.86 5.054v-4.691a.524.524 0 0 0-.524-.524H3.619a1.573 1.573 0 0 1-1.571-1.571V5.619a1.573 1.573 0 0 1 1.571-1.571h18.858a1.573 1.573 0 0 1 1.571 1.571zm-17.81-8.9a.524.524 0 0 1 .524-.524H12a.524.524 0 1 1 0 1.048H6.762a.524.524 0 0 1-.524-.524zm11.524 6.286a.524.524 0 0 1-.524.524H6.762a.524.524 0 0 1 0-1.048h10.476a.524.524 0 0 1 .524.524zm2.1-3.143a.524.524 0 0 1-.524.524H6.762a.524.524 0 0 1 0-1.048h12.572a.524.524 0 0 1 .524.524z"\n              style="fill:#fff"\n              transform="translate(-1 -3)"\n            />\n          </svg>\n        </button>\n        <button class="live-streaming-like-btn">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="25.833"\n            height="22"\n            viewBox="0 0 25.833 22"\n          >\n            <g data-name="Group 28491">\n              <g data-name="Group 28490">\n                <path\n                  data-name="Path 35446"\n                  d="M18.139 37.984a7.517 7.517 0 0 0-5.223 2.093 7.517 7.517 0 0 0-5.223-2.093A7.8 7.8 0 0 0 0 45.863c0 2.519 2.147 5.657 6.38 9.329a60.7 60.7 0 0 0 6.265 4.708.5.5 0 0 0 .542 0 60.7 60.7 0 0 0 6.265-4.713c4.233-3.672 6.38-6.81 6.38-9.329a7.8 7.8 0 0 0-7.693-7.874zm.661 16.438a60.232 60.232 0 0 1-5.884 4.455 60.178 60.178 0 0 1-5.875-4.448c-3.946-3.422-6.032-6.385-6.032-8.566a6.787 6.787 0 0 1 6.685-6.87 6.541 6.541 0 0 1 4.852 2.144.5.5 0 0 0 .742 0 6.542 6.542 0 0 1 4.852-2.144 6.787 6.787 0 0 1 6.685 6.869c-.001 2.181-2.084 5.138-6.025 8.56z"\n                  transform="translate(0 -37.984)"\n                  style="fill:#fff"\n                />\n              </g>\n            </g>\n          </svg>\n        </button>\n      </div>\n    </div>\n    </div>\n  `;
            })(
              n,
              i,
              e,
              t
            )}\n            <div class="video-loading-spinner-wrapper">\n              <div class="video-loading-spinner"></div>\n            </div>\n          </div>\n          <div\n            style="border-radius:${i}"\n            class="live-streaming-modal-chat-container"\n          >\n            <div class="live-streaming-modal-chat-overlay">\n              <div>\n                <p>Please fill out this form to join chat</p>\n                <div class="live-streaming-modal-open-form-btn">Click here</div>\n              </div>\n            </div>\n            \n    <p class="live-streaming-modal-chat-container-title">Chat</p>\n    <div class="live-streaming-pinned-chat"></div>\n    <div class="live-streaming-chat-log" id="live-streaming-chat-log">\n      \x3c!-- Chat messages will be displayed here --\x3e\n      <div class="live-streaming-load-more-chat-btn-wrapper">\n        <button class="live-streaming-load-more-chat-btn">\n          Load more ...\n        </button>\n      </div>\n    </div>\n\n    <div class="live-streaming-chat-input-container">\n      <input\n        type="text"\n        id="live-streaming-chat-message-input"\n        class="live-streaming-chat-message-input"\n        placeholder="Type Your Message"\n      />\n      <button\n        id="live-streaming-chat-send-btn"\n        class="live-streaming-chat-send-btn"\n      >\n        <svg\n          stroke="currentColor"\n          fill="currentColor"\n          stroke-width="0"\n          viewBox="0 0 512 512"\n          height="1em"\n          width="1em"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path d="M16 464l480-208L16 48v160l320 48-320 48z"></path>\n        </svg>\n      </button>\n    </div>\n  \n          </div>\n        </div>\n      </div>\n    `
          );
          const s = document.getElementById(`live-streaming-modal-${t}`);
          s.querySelector(".live-streaming-modal-close-btn").addEventListener(
            "click",
            () => {
              s.remove();
            }
          );
          const r = s.querySelector(".live-streaming-pinned-chat"),
            o = `<div class="message-container">\n    <div class="avatar-wrapper">\n      <svg\n        width="28"\n        height="28"\n        viewBox="0 0 256 256"\n        xmlns="http://www.w3.org/2000/svg"\n        class="avatar"\n      >\n        <rect fill="none" height="256" width="256" />\n        <circle\n          cx="128"\n          cy="96"\n          fill="none"\n          r="64"\n          stroke="inherit"\n          stroke-linecap="round"\n          stroke-linejoin="round"\n          stroke-width="12"\n        />\n        <path\n          d="M31,216a112,112,0,0,1,194,0"\n          fill="none"\n          stroke="inherit"\n          stroke-linecap="round"\n          stroke-linejoin="round"\n          stroke-width="12"\n        />\n      </svg>\n    </div>\n    <div class="message-wrapper">\n      <div class="sender-info-wrapper">\n        <p class="sender-name">Sale Assist</p>\n      </div>\n      <div\n        style="display: flex; justify-content: space-between; align-items: flex-start"\n      >\n        <p class="message">${a.pinned_message}</p>\n        <svg class="live-streaming-pin-icon" width="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n          <g data-name="Layer 22" id="Layer_22">\n            <path\n              class="cls-1"\n              d="M16,28.53a1,1,0,0,1-.71-.29L3.76,16.71a1,1,0,0,1,0-1.42l1.52-1.51a6.06,6.06,0,0,1,6.37-1.43l5.41-5.41L16.12,6a1,1,0,0,1,0-1.41l3.29-3.3a1,1,0,0,1,1.41,0l9.89,9.89a1,1,0,0,1,0,1.41l-3.3,3.29a1,1,0,0,1-1.41,0l-.94-.94-5.41,5.41a6.08,6.08,0,0,1-1.43,6.37l-1.51,1.52A1,1,0,0,1,16,28.53ZM5.88,16,16,26.12l.81-.81a4.12,4.12,0,0,0,.77-4.75,1,1,0,0,1,.18-1.15l6.59-6.59a1,1,0,0,1,1.42,0l.94.94,1.88-1.88L20.12,3.41,18.24,5.29l.94.94a1,1,0,0,1,0,1.42l-6.59,6.59a1,1,0,0,1-1.15.18,4.12,4.12,0,0,0-4.75.77Z"\n            />\n            <path\n              class="cls-1"\n              d="M2,31a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.24-8.23a1,1,0,0,1,1.41,1.41L2.71,30.71A1,1,0,0,1,2,31Z"\n            />\n            <path\n              class="cls-1"\n              d="M25.06,14.53a1,1,0,0,1-.71-.29l-2.47-2.47a1,1,0,1,1,1.42-1.42l2.47,2.47a1,1,0,0,1,0,1.42A1,1,0,0,1,25.06,14.53Z"\n            />\n          </g>\n        </svg>\n      </div>\n    </div>\n  </div>`;
          a?.pinned_message?.trim() && (r.innerHTML = o),
            Qn(s),
            Yn(e, s, a),
            (function (e, t, n) {
              Yn(e, n, t), Zn(n, t, e);
              const i = n.querySelector(
                  ".live-streaming-chat-send-btn" + (Rn ? "-mobile" : "")
                ),
                a = n.querySelector(
                  ".live-streaming-chat-message-input" + (Rn ? "-mobile" : "")
                );
              n
                .querySelector(".live-streaming-load-more-chat-btn")
                .addEventListener("click", () => {
                  Zn(n, t, e, !0);
                }),
                a.addEventListener("keydown", (i) => {
                  13 === i.keyCode && (i.preventDefault(), Fn(e, t, n));
                }),
                i.addEventListener("click", () => {
                  Fn(e, t, n);
                });
            })(e, a, s);
          const l = it(`video_tiles_${e.id}`)?.form_data,
            d = s.querySelector(".live-streaming-modal-chat-overlay");
          if (l) d.style.display = "none";
          else {
            const t = s.querySelector(".live-streaming-modal-open-form-btn"),
              n = () => {
                (d.style.display = "none"), Yn(e, s, a);
              };
            t.addEventListener("click", () => {
              lt(e.id, 0, e.lead_form, "", e.unique_field_name, () => {}, n);
            });
          }
          const c = s.querySelector(".live-streaming-all-products"),
            p = s.querySelector(".live-streaming-products-offer"),
            u = s.querySelector(".ls-modal-show-offers-panel-btn"),
            h = s.querySelector(
              ".live-streaming-modal-products-container-body"
            ),
            m = s.querySelector(".live-streaming-modal-product-offers-body"),
            g = s.querySelector(
              ".live-streaming-modal-product-offers-container-mobile"
            ),
            f = s.querySelector(
              ".close-live-streaming-modal-product-offers-mobile"
            ),
            v = s.querySelector(".sa_shorts_whatsapp-me-btn");
          c.addEventListener("click", () => {
            c.classList.add("sa_shorts-active"),
              p.classList.remove("sa_shorts-active"),
              (h.style.display = "flex"),
              (m.style.display = "none");
          });
          p.addEventListener("click", () => {
            c.classList.remove("sa_shorts-active"),
              p.classList.add("sa_shorts-active"),
              (h.style.display = "none"),
              (m.style.display = "flex");
          }),
            u.addEventListener("click", () => {
              g.classList.toggle("open");
            }),
            f.addEventListener("click", () => {
              g.classList.toggle("open");
            });
          s.querySelectorAll(".live-streaming-modal-product-cta").forEach(
            (n) => {
              n.addEventListener("click", (n) => {
                const i = n.target.getAttribute("data-id");
                ((e, t, n, i = "CTA", a = () => {}, s = () => {}) => {
                  const r = {
                    source_id: e,
                    event_type: i,
                    target_id: t,
                    client_id: n,
                    user_data: {},
                  };
                  fetch("https://shorts-analytics-4cxdmdxo6a-el.a.run.app/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(r),
                  })
                    .then((e) => e.json())
                    .then((e) => {
                      a(e);
                    })
                    .catch((e) => {
                      s(e);
                    });
                })(t, i, e.client_id);
              });
            }
          );
          s
            .querySelectorAll(".live-streaming-modal-cta-for-shopify-product")
            .forEach((e) => {
              e.addEventListener("click", (e) => {
                const t = e.target.getAttribute("product-variant-id");
                ((e, t, n = () => {}, i = () => {}) => {
                  const a = { id: t };
                  fetch(`https://${e}.myshopify.com/cart/add`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(a),
                  })
                    .then((e) => e.json())
                    .then((e) => {
                      n(e);
                    })
                    .catch((e) => {
                      i(e);
                    });
                })(e.target.getAttribute("shopify-domain-name"), t);
              });
            }),
            v.addEventListener("click", (t) => {
              const n = t.target.closest(".sa_shorts_whatsapp-me-btn-wrapper"),
                i = n.querySelector("input[type='hidden']")?.value;
              window.open(
                `https://api.whatsapp.com/send?phone=${
                  e.whatsapp_number
                }&text=${encodeURIComponent(i)}`,
                "_blank",
                "noopener"
              );
            });
        }
        let ti = null,
          ni = 0;
        const ii = (e) => {
          const t = Math.floor(e / 60),
            n = Math.round(e % 60);
          return t + ":" + (n < 10 ? "0" : "") + n;
        };
        const ai = class {
            constructor(e) {
              e &&
                ((this.playlistID = e.id ? e.id : ""),
                (this.width = e.width ? e.width : ""),
                (this.height = e.height ? e.height : ""),
                (this.type = e.type ? e.type : ""),
                (this.autoplay = !!e.autoplay && e.autoplay),
                (this.borderRadius = e.borderRadius || "rounded"),
                (this.disableVideoModal = e.disableVideoModal || "false"),
                this.playlistID &&
                  !it(`video_tiles_${this.playlistID}`)?.session_data &&
                  nt(`video_tiles_${this.playlistID}`, {
                    session_data: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                      /[018]/g,
                      (e) =>
                        (
                          e ^
                          (crypto.getRandomValues(new Uint8Array(1))[0] &
                            (15 >> (e / 4)))
                        ).toString(16)
                    ),
                  }),
                "" !== this.playlistID &&
                  fetch(`${t.url}/source/${this.playlistID}/shorts`)
                    .then((e) => e.json())
                    .then((e) => {
                      const t = {
                        ...e,
                        media: e?.media?.filter((e) => !e.deleted),
                      };
                      if (
                        ((ti = t.client_id || null),
                        (ni = t?.media?.length),
                        nt("client_id", ti),
                        (t.theme_color =
                          void 0 === t.theme_color || "" == t.theme_color
                            ? "#ff0000"
                            : t.theme_color),
                        document.documentElement.style.setProperty(
                          "--shortsThemeColor",
                          t.theme_color
                        ),
                        document.documentElement.style.setProperty(
                          "--shortsInvertColor",
                          We(t.theme_color)
                        ),
                        "7b0931c1-5fe3-4789-b5b0-ff020dcd954c" === t?.id)
                      ) {
                        function n(e, t) {
                          const n = e.media.findIndex((e) => e.id === t);
                          if (-1 !== n) {
                            const t = e.media.splice(n, 1)[0];
                            e.media.unshift(t);
                          }
                          return e;
                        }
                        const i = n(t, "234dbb24-8e39-4191-be05-4e5e67d8a4c0");
                        this.videoShorts(i);
                      } else this.videoShorts(t);
                    }));
            }
            videoShorts(e) {
              let n = document.getElementById(
                  this.playlistID
                    ? `video-shorts-${this.playlistID}`
                    : "saleassist-video-shorts-floating-tile"
                ),
                i = Math.floor(ni / 2);
              if (!n) {
                n = document.createElement("div");
                n.id = this.playlistID
                  ? `video-shorts-${this.playlistID}`
                  : "saleassist-video-shorts-floating-tile";
                document.body.appendChild(n); // Append to body or any other container
              }
              n.classList.add("saleassist-video-shorts-root-container");

              var a = document.createElement("script");
              a.setAttribute(
                "src",
                "https://cdn.gumlytics.com/insights/1.1/gumlet-insights.min.js"
              ),
                document.head.appendChild(a),
                Ke.call(this, e, n, i);
              const s = document.querySelectorAll(
                  `.sa_${n?.id}-modal #play-btn`
                ),
                r = document.querySelectorAll(`.sa_${n?.id}-modal #pause-btn`),
                o = document.querySelectorAll(`.sa_${n?.id}-modal .like-btn`),
                l = document.querySelectorAll(`.sa_${n?.id}-modal .volume-btn`),
                d = n.querySelectorAll(`#${n.id} .sa_shorts_share-shorts-btn`),
                c = document.querySelectorAll(
                  `.sa_${n?.id}-modal .sa_shorts_open-share-shorts-popup-btn`
                ),
                p = document.querySelectorAll(
                  `.sa_${n?.id}-modal .sa_shorts_whatsapp-me-btn`
                ),
                u = document.querySelectorAll(
                  `.sa_${n?.id}-modal .sa_shorts_open-lead-capture-form-popup-btn`
                ),
                h = document.querySelector(
                  `.sa_${n?.id}-modal #modal-close-btn`
                ),
                m = document.querySelector(`.sa_${n?.id}-modal #pip-mode-btn`),
                g = document.querySelector(`.sa_${n?.id}-modal`),
                f = document.querySelectorAll(
                  `#${n.id} .sa_shorts_parentSwiper .sa_shorts_video-wrapper`
                ),
                v = document.querySelectorAll(
                  `.sa_${n?.id}-modal .sa_shorts_modal-swiper #video`
                ),
                w = document.querySelectorAll(
                  `.sa_${n?.id}-modal .sa_shorts_modal-swiper .sa_shorts_video-wrapper`
                ),
                b = document.querySelectorAll(
                  `.sa_${n?.id}-modal .sa_shorts_carousel-video-overlay`
                ),
                y = document.querySelectorAll(
                  `#${n.id} .sa_shorts_parentSwiper .sa_shorts_video-wrapper #video`
                ),
                x = document.querySelectorAll(
                  `#${n.id} .sa_shorts_parentSwiper .cta-link`
                ),
                _ = document.querySelectorAll(
                  `.sa_${n?.id}-modal .sa_shorts_carouselSwiper .cta-link`
                ),
                A = document.querySelectorAll(
                  `.sa_${n?.id}-modal .sa_shorts_swiper-button-white`
                ),
                M = document.querySelectorAll("#video-tile-play-btn"),
                E = document.querySelectorAll(
                  ".sa_shorts_mute-unmute-parent-video"
                ),
                C = window.matchMedia("(max-width: 599px)");
              var S = 0,
                I = 0;
              "coverflow" === this.type && (M[i].style.display = "none");
              const T = (e, t) => {
                  try {
                    const n = e.media.find((e) => e.id === t);
                    !(function (e, ...t) {
                      try {
                        let n = e.match(/function\s+(\w+)\s*\(([^)]*)\)/);
                        if (!n)
                          throw new Error(
                            "Invalid function string: Unable to extract function name and parameters"
                          );
                        let i = n[1],
                          a = n[2],
                          s = e.match(/{([\s\S]*)}/);
                        if (!s)
                          throw new Error(
                            "Invalid function string: Unable to extract function body"
                          );
                        let r = s[1].trim(),
                          o = new Function(a, r);
                        return { [i]: o }[i](...t);
                      } catch (e) {
                        throw (
                          (console.error(
                            "Error executing function from string:",
                            e
                          ),
                          e)
                        );
                      }
                    })(n.cta_click_function, this.playlistID);
                  } catch (e) {
                    console.error("Failed to execute function:", e);
                  }
                },
                k = {
                  effect: "coverflow",
                  on: {
                    slideChange: function () {
                      const e = v[S].querySelector("video");
                      this.realIndex !== S &&
                        (j(S),
                        (e.currentTime = 0),
                        (S = this.realIndex),
                        z(v[S], S),
                        L(y[S], S),
                        q(S),
                        O(S));
                      document
                        .querySelectorAll(
                          ".sa_shorts_share-shorts-popup-container"
                        )
                        .forEach((e) => {
                          e.remove();
                        });
                      const t = document.querySelectorAll(
                        ".shorts-widget-lead-capture-form-modal"
                      );
                      t?.forEach((e) => {
                        e?.remove();
                      });
                      const n = document.querySelectorAll(
                        ".sa_shorts_inquiry-btn-wrapper"
                      );
                      n?.forEach((e) => {
                        e?.remove();
                      });
                    },
                  },
                  realIndex: S,
                  centeredSlides: !0,
                  slidesPerView: "auto",
                  mousewheel: { releaseOnEdges: !0 },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 2,
                    slideShadows: !0,
                  },
                },
                L = (n, i, a = "main") => {
                  const s = n.querySelector("img"),
                    r = t.url.includes("platform-stg")
                      ? "https://saleassist-stg.gumlet.io"
                      : "https://prod-saleassist.gumlet.io";
                  if (s) {
                    const t = `<video\n          preload="metadata"\n          playsinline\n          muted\n          loop\n          poster="${
                      n.getAttribute("thumbnail")
                        ? n.getAttribute("thumbnail")
                        : r +
                          `/thumbnail.jpeg?video_url=${n.getAttribute(
                            "src-data"
                          )}&width=${parseFloat(this.width)}&dpr=${
                            window.devicePixelRatio
                          }`
                    }"\n        >\n          <source\n            src="${n.getAttribute(
                      "src-data"
                    )}#t=0.1"\n            type="video/mp4"\n          />\n        </video>`;
                    (n.innerHTML = t), (E[i].style.display = "flex");
                    const s = n.getElementsByTagName("video")[0];
                    if (
                      (E[i].addEventListener("click", (e) => {
                        e.stopPropagation(),
                          (s.muted = !s.muted),
                          E[i].classList.toggle("muted");
                      }),
                      "playOnUnmute" === a && E[i].click(),
                      Hls.isSupported() && "" !== e.media[i].processed_media)
                    ) {
                      const t = new Hls();
                      t.loadSource(e.media[i].processed_media),
                        t.attachMedia(s);
                    }
                    "main" === a &&
                      (s.addEventListener("mouseover", () => {
                        s.play(), (M[i].style.display = "none");
                      }),
                      s.addEventListener("mouseout", () => {
                        s.currentTime > 0 &&
                          !s.paused &&
                          !s.ended &&
                          s.readyState > 2 &&
                          s.pause(),
                          (M[i].style.display = "block");
                      }),
                      s.addEventListener("touchstart", () => {
                        y.forEach((e, t) => {
                          const n = e.getElementsByTagName("video")[0];
                          n &&
                            !n.paused &&
                            (n.pause(), (M[t].style.display = "block"));
                        }),
                          s.play(),
                          (M[i].style.display = "none");
                      })),
                      s.addEventListener("leavepictureinpicture", N, !1);
                  }
                },
                z = (n, i) => {
                  const a = n.querySelector("img"),
                    s = t.url.includes("platform-stg")
                      ? "https://saleassist-stg.gumlet.io"
                      : "https://prod-saleassist.gumlet.io";
                  if (a) {
                    const r = `<video\n          preload="metadata"\n          playsinline\n          poster="${
                      n.getAttribute("thumbnail")
                        ? n.getAttribute("thumbnail")
                        : s +
                          `/thumbnail.jpeg?video_url=${n.getAttribute(
                            "src-data"
                          )}&width=${parseFloat(this.width)}&dpr=${
                            window.devicePixelRatio
                          }`
                    }"\n        >\n          <source\n            src="${n.getAttribute(
                      "src-data"
                    )}#t=0.1"\n            type="video/mp4"\n          />\n        </video>`;
                    n.innerHTML = r;
                    const o = n.getElementsByTagName("video")[0];
                    n.insertAdjacentHTML(
                      "beforeend",
                      '<div class="video-loading-spinner-wrapper">\n            <div class="video-loading-spinner"></div>\n          </div>'
                    );
                    const l = w[S].querySelector(".video-duration"),
                      d = w[S].querySelector(".video-current-time"),
                      c = w[S].querySelector(".timeline-container");
                    o.addEventListener("loadedmetadata", () => {
                      e.media[S].cta_config?.forEach((e) => {
                        const t = document.createElement("span");
                        t.classList.add("tagged-products-indicator");
                        const n = (e.start_time / o.duration) * 100,
                          i = (c.clientWidth * n) / 100;
                        (t.style.left = `${i}px`), c.appendChild(t);
                      });
                    }),
                      c.addEventListener("mousemove", m),
                      c.addEventListener("mousedown", h),
                      c.addEventListener("click", h);
                    let p,
                      u = !1;
                    function h(e) {
                      const t = c.getBoundingClientRect(),
                        n = Math.min(Math.max(0, e.x - t.x), t.width) / t.width;
                      u = !(1 & ~e.buttons);
                      const i = o?.closest(".video-container");
                      i?.classList.toggle("scrubbing", u),
                        u
                          ? ((p = o.paused), o.pause())
                          : ((o.currentTime = n * o.duration), p || o.play()),
                        m(e);
                    }
                    function m(e) {
                      const t = c.getBoundingClientRect(),
                        n = Math.min(Math.max(0, e.x - t.x), t.width) / t.width;
                      u &&
                        (e.preventDefault(),
                        c.style.setProperty("--progress-position", n));
                    }
                    if (
                      Hls.isSupported() &&
                      "" !== e.media[i].processed_media
                    ) {
                      const f = new Hls();
                      f.loadSource(e.media[i].processed_media),
                        f.attachMedia(o);
                    }
                    o.addEventListener("loadeddata", () => {
                      (n.querySelector(
                        ".video-loading-spinner-wrapper"
                      ).style.display = "none"),
                        (l.textContent = ii(o.duration));
                    }),
                      o.addEventListener("click", () => {
                        o.paused
                          ? O(i)
                          : (j(i),
                            e.is_capture_form &&
                              "modal_view" === e.media[i].tag_view &&
                              lt(
                                this.playlistID,
                                0,
                                e.lead_form,
                                "",
                                e.unique_field_name,
                                () => O(i)
                              ));
                      }),
                      o.addEventListener("ended", () => {
                        B(i);
                      }),
                      this.playlistID &&
                        (ht(
                          this.playlistID,
                          v[S],
                          w[S],
                          e.media[S].cta_config,
                          e.media[S].id,
                          e.client_id,
                          0,
                          e.is_capture_form,
                          e.lead_form,
                          e.unique_field_name,
                          0,
                          e.media[S],
                          g,
                          () => O(S)
                        ),
                        o.addEventListener("timeupdate", () => {
                          I = o.currentTime;
                          const t = o?.closest(
                              ".swiper-slide.sa_shorts_video-wrapper.swiper-slide-active"
                            ),
                            n = t?.querySelector(
                              ".sa_shorts_inquiry-btn-wrapper"
                            );
                          d.textContent = ii(I);
                          const i = o.currentTime / o.duration;
                          c.style.setProperty("--progress-position", i),
                            !n &&
                              t &&
                              ((e) => {
                                e.insertAdjacentHTML(
                                  "beforeend",
                                  '\n      <div class="sa_shorts_inquiry-btn-wrapper">\n        <div class="sa_shorts_close-inquiry-btn">\n          <svg\n            width="16"\n            height="16"\n            stroke="#fff"\n            fill="#fff"\n            stroke-width="0"\n            viewBox="0 0 512 512"\n            height="1em"\n            width="1em"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"\n            ></path>\n          </svg>\n        </div>\n        <div class="sa_shorts_inquiry-btn">\n          Send us your inquiry\n          <svg\n            width="20"\n            height="20"\n            xmlns="http://www.w3.org/2000/svg"\n            xmlns:xlink="http://www.w3.org/1999/xlink"\n            style="enable-background:new 0 0 24 24;"\n            version="1.1"\n            viewBox="0 0 24 24"\n            xml:space="preserve"\n          >\n            <style type="text/css">\n              .st0 {\n                display: none;\n              }\n              .st1 {\n                display: inline;\n              }\n              .st2 {\n                opacity: 0.2;\n                fill: none;\n                stroke: #fff;\n                stroke-width: 5e-2;\n                stroke-miterlimit: 10;\n              }\n            </style>\n            <g class="st0" id="grid_system" />\n            <g id="_icons">\n              <g>\n                <path\n                  fill="#fff"\n                  d="M12,3c-5,0-9,4-9,9c0,1.8,0.6,3.6,1.6,5.1l-1.4,2.4c-0.2,0.3-0.2,0.7,0,1S3.6,21,4,21h8c5,0,9-4,9-9S17,3,12,3z M12,19    H5.8l0.9-1.5c0.2-0.4,0.2-0.8-0.1-1.1C5.6,15.2,5,13.6,5,12c0-3.9,3.1-7,7-7s7,3.1,7,7S15.9,19,12,19z"\n                />\n                <path\n                  fill="#fff"\n                  d="M12.1,7.3h-0.1c-1,0-1.9,0.5-2.4,1.3C9.2,9.1,9.3,9.7,9.8,10c0.5,0.3,1.1,0.2,1.4-0.3c0.2-0.3,0.5-0.4,0.8-0.4h0.1    c0.5,0,0.9,0.4,0.9,0.9c0,0.4-0.3,0.8-0.6,0.9l-0.7,0.2c-0.4,0.1-0.7,0.5-0.7,0.9V13c0,0.6,0.4,1,1,1c0.5,0,1-0.4,1-0.9    c1.2-0.4,2-1.5,2-2.8C15,8.7,13.7,7.3,12.1,7.3z"\n                />\n                <circle fill="#fff" cx="12" cy="16" r="1" />\n              </g>\n            </g>\n          </svg>\n        </div>\n      </div>\n    '
                                ),
                                  e
                                    .querySelector(".sa_shorts_inquiry-btn")
                                    .addEventListener("click", () => {
                                      e.querySelector(
                                        ".sa_shorts_open-lead-capture-form-popup-btn"
                                      ).click();
                                    }),
                                  e
                                    .querySelector(
                                      ".sa_shorts_close-inquiry-btn"
                                    )
                                    .addEventListener("click", () => {
                                      document
                                        .querySelector(
                                          ".sa_shorts_inquiry-btn-wrapper"
                                        )
                                        ?.remove();
                                    });
                              })(t),
                            pt(
                              this.playlistID,
                              v[S],
                              o.offsetWidth,
                              o.offsetHeight,
                              I,
                              e.media[S].cta_config,
                              e.media[S].id,
                              e.client_id,
                              0,
                              e.is_capture_form,
                              e.lead_form,
                              e.unique_field_name,
                              () => j(S),
                              () => O(S),
                              e.media[S],
                              g
                            );
                        }));
                  }
                },
                D = (e) => {
                  y.forEach((e, t) => {
                    const n = e.querySelector("video");
                    n && !n.paused && n.pause();
                  }),
                    z(v[e], e),
                    L(y[e], e),
                    (g.style.display = "flex"),
                    Y.slideTo(e),
                    q(e),
                    O(e),
                    (function () {
                      const e = document.querySelector(
                          "#saleassist-video-shorts-floating-tile #sa_shorts_modal-wrapper"
                        ),
                        t = e?.querySelector("video");
                      if (!e || !t) return;
                      const n = e.querySelector(".video-duration"),
                        i = e.querySelector(".video-current-time"),
                        a = e.querySelector(".timeline-container"),
                        s = e.querySelector("#play-btn"),
                        r = e.querySelector("#pause-btn");
                      a.addEventListener("mousemove", c),
                        a.addEventListener("mousedown", d),
                        a.addEventListener("click", d);
                      let o,
                        l = !1;
                      function d(e) {
                        const n = a.getBoundingClientRect(),
                          i =
                            Math.min(Math.max(0, e.x - n.x), n.width) / n.width;
                        l = !(1 & ~e.buttons);
                        const s = t?.closest(".video-container");
                        s?.classList.toggle("scrubbing", l),
                          l
                            ? ((o = t.paused), t.pause())
                            : ((t.currentTime = i * t.duration), o || t.play()),
                          c(e);
                      }
                      function c(e) {
                        const t = a.getBoundingClientRect(),
                          n =
                            Math.min(Math.max(0, e.x - t.x), t.width) / t.width;
                        a.style.setProperty("--preview-position", n),
                          l &&
                            (e.preventDefault(),
                            a.style.setProperty("--progress-position", n));
                      }
                      t.addEventListener("loadeddata", () => {
                        n.textContent = ii(t.duration);
                      }),
                        t.addEventListener("play", () => {
                          s.classList.add("sa_shorts_hidden"),
                            r.classList.remove("sa_shorts_hidden");
                        }),
                        t.addEventListener("pause", () => {
                          s.classList.remove("sa_shorts_hidden"),
                            r.classList.add("sa_shorts_hidden");
                        }),
                        t.addEventListener("timeupdate", () => {
                          i.textContent = ii(t.currentTime);
                          const e = t.currentTime / t.duration;
                          a.style.setProperty("--progress-position", e);
                        });
                    })();
                },
                P = () => {
                  const e = v[S].querySelector("video");
                  (g.style.display = "none"),
                    j(S),
                    (e.currentTime = 0),
                    ("story" === this.type || this.autoplay) &&
                      y.forEach((e, t) => {
                        const n = e.querySelector("video");
                        n && n.play();
                      });
                },
                N = () => {
                  D(S);
                };
              const $ = () => {
                  let e = Y.activeIndex;
                  var t;
                  Y.destroy(!0, !0),
                    (t = "vertical"),
                    (Y = new ae(
                      `.sa_${n?.id}-modal .sa_shorts_carouselSwiper`,
                      C.matches
                        ? {
                            direction: t,
                            slidesPerView: 1,
                            allowTouchMove: !/iPad|iPhone|iPod/.test(
                              navigator.userAgent
                            ),
                            on: {
                              slideChange: function () {
                                if (
                                  !/iPad|iPhone|iPod/.test(navigator.userAgent)
                                ) {
                                  const e = document.querySelectorAll(
                                    ".sa_shorts_swipe-up-arrow-animation"
                                  );
                                  setTimeout(() => {
                                    e.forEach((e) => {
                                      e.style.display = "none";
                                    });
                                  }, 2e3);
                                }
                                const e = v[S].querySelector("video");
                                this.realIndex !== S &&
                                  (j(S),
                                  (e.currentTime = 0),
                                  (S = this.realIndex),
                                  z(v[S], S),
                                  L(y[S], S),
                                  q(S),
                                  O(S));
                              },
                            },
                            navigation: {
                              nextEl: ".swiper-button-next",
                              prevEl: ".swiper-button-prev",
                            },
                          }
                        : k
                    )),
                    Y.slideTo(e, 0);
                },
                O = (e) => {
                  v[e].querySelector("video").play(),
                    s[e].classList.add("sa_shorts_hidden"),
                    r[e].classList.remove("sa_shorts_hidden"),
                    setTimeout(() => {}, 3e3);
                },
                j = (e, t = !1) => {
                  const n = v[e].querySelector("video"),
                    i = () => {
                      s[e].classList.remove("sa_shorts_hidden"),
                        r[e].classList.add("sa_shorts_hidden");
                    };
                  if (n) {
                    if (t)
                      return void n.addEventListener(
                        "canplay",
                        () => {
                          n.pause(), i();
                        },
                        { once: !0 }
                      );
                    n.pause(), i();
                  }
                },
                B = (e) => {
                  O(e),
                    C.matches &&
                      !/iPad|iPhone|iPod/.test(navigator.userAgent) &&
                      (w[e].classList.add("bounce"),
                      setTimeout(() => {
                        w[e].classList.remove("bounce");
                      }, 6e3));
                },
                q = (n) => {
                  gumlet
                    .insights({
                      property_id: t.gumlet_property_id,
                      customVideoId: `${e.media[n].id}`,
                      customVideoTitle: `${e.media[n].caption}`,
                      customData1: `${e.id}`,
                    })
                    .registerHTML5Player(v[n].querySelector("video"));
                };
              s.forEach((e, t) => {
                e.addEventListener("click", () => {
                  O(t);
                });
              }),
                r.forEach((e, t) => {
                  e.addEventListener("click", () => {
                    j(t);
                  });
                }),
                o.forEach((e, t) => {
                  e.addEventListener("click", () => {
                    var e;
                    o[(e = t)].src.includes(Fe)
                      ? (o[e].src = `${Ue}`)
                      : (o[e].src = `${Fe}`);
                  });
                }),
                l.forEach((e, t) => {
                  e.addEventListener("click", () => {
                    ((e) => {
                      const t = v[e].querySelector("video");
                      l[e].src.includes(Ve)
                        ? (l[e].src =
                            "data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWhpZGRlbj0idHJ1ZSIgaGVpZ2h0PSIxZW0iIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNS41ODYgMTVINGExIDEgMCAwMS0xLTF2LTRhMSAxIDAgMDExLTFoMS41ODZsNC43MDctNC43MDdDMTAuOTIzIDMuNjYzIDEyIDQuMTA5IDEyIDV2MTRjMCAuODkxLTEuMDc3IDEuMzM3LTEuNzA3LjcwN0w1LjU4NiAxNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE3IDE0bDItMm0wIDBsMi0ybS0yIDJsLTItMm0yIDJsMiAyIj48L3BhdGg+PC9zdmc+")
                        : (l[e].src = `${Ve}`),
                        (t.muted = !t.muted);
                    })(t);
                  });
                }),
                c.forEach((e, t) => {
                  e.addEventListener("click", () => {
                    const t = e.closest(
                      ".swiper-slide.sa_shorts_video-wrapper.swiper-slide-active"
                    );
                    t?.insertAdjacentHTML("beforeend", mt()), ut();
                  });
                }),
                p.forEach((t, n) => {
                  t.addEventListener("click", () => {
                    const n = t.closest(".sa_shorts_whatsapp-me-btn-wrapper"),
                      i = n.querySelector("input[type='hidden']")?.value;
                    window.open(
                      `https://api.whatsapp.com/send?phone=${
                        e.whatsapp_number
                      }&text=${encodeURIComponent(i)}`,
                      "_blank",
                      "noopener"
                    );
                  });
                }),
                d.forEach((e, t) => {
                  e.addEventListener("click", (t) => {
                    t.stopPropagation();
                    const n = e.closest(
                      ".swiper-slide.sa_shorts_video-wrapper"
                    );
                    n?.insertAdjacentHTML("beforeend", mt()), ut();
                  });
                }),
                u.forEach((t, n) => {
                  t.addEventListener("click", () => {
                    const n = t.closest(
                        ".swiper-slide.sa_shorts_video-wrapper.swiper-slide-active"
                      ),
                      i = n?.querySelector(".cta-link").href;
                    e.is_capture_form
                      ? lt(
                          this.playlistID,
                          0,
                          e.lead_form,
                          i,
                          e.unique_field_name
                        )
                      : window.open(i, "_blank"),
                      j(S);
                  });
                }),
                y.forEach((e, t) => {
                  if ("story" === this.type || this.autoplay) {
                    L(e, t, "other");
                    e.querySelector("video").play();
                  } else
                    "false" === this.disableVideoModal
                      ? e.addEventListener("mouseover", () => {
                          L(e, t), C.matches && f[t].click();
                        })
                      : "true" === this.disableVideoModal &&
                        E[t].addEventListener("click", () => {
                          L(e, t, "playOnUnmute");
                          e.querySelector("video").play(),
                            (M[t].style.display = "none");
                        });
                }),
                "false" === this.disableVideoModal &&
                  f.forEach((t, n) => {
                    t.addEventListener("click", () => {
                      const i = t.querySelector("#video"),
                        a = i.getAttribute("media-id");
                      if (e.is_live_streaming) {
                        const t = i.getAttribute("src-data");
                        ei(
                          e,
                          a,
                          t,
                          ((e) =>
                            "story" === e.type
                              ? "50%"
                              : "none" !== e.borderRadius
                              ? "18px"
                              : "0px")(e)
                        );
                      } else
                        "7b9e1146-846f-4c4c-9341-21ece41d4670" ===
                          this.playlistID && T(e, a),
                          (S = n),
                          D(n);
                    });
                  }),
                h.addEventListener("click", () => {
                  P();
                }),
                m.addEventListener("click", () => {
                  (() => {
                    G.slides[
                      S
                    ].firstElementChild.firstElementChild.requestPictureInPicture(),
                      (g.style.display = "none");
                    const e = y[S].querySelector("video");
                    (e.currentTime = v[S].querySelector("video").currentTime),
                      e.play();
                  })();
                }),
                b.forEach((e, t) => {
                  e.addEventListener("click", () => {
                    const e = v[S].querySelector("video");
                    j(S),
                      (e.currentTime = 0),
                      (S = t),
                      z(v[t], t),
                      Y.slideTo(t),
                      O(t);
                  });
                });
              const H = (e) => {
                const t = {
                  source_id: e.getAttribute("data-media-id"),
                  event_type: "CTA",
                  target_id: e.getAttribute("data-product-id"),
                  client_id: ti,
                  user_data: {},
                };
                fetch("https://shorts-analytics-4cxdmdxo6a-el.a.run.app/", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(t),
                })
                  .then((e) => e.json())
                  .then((e) => {})
                  .catch((e) => {
                    console.error(e);
                  });
              };
              x &&
                x.length > 0 &&
                x.forEach((t, n) => {
                  t.addEventListener("click", (n) => {
                    if (
                      (n.stopPropagation(),
                      n.preventDefault(),
                      e.is_capture_form)
                    )
                      lt(
                        this.playlistID,
                        0,
                        e.lead_form,
                        t.href,
                        e.unique_field_name,
                        null,
                        () => {
                          if (
                            (localStorage.setItem("saleassist", !0),
                            "7b9e1146-846f-4c4c-9341-21ece41d4670" ===
                              this.playlistID)
                          ) {
                            const n = t?.getAttribute("data-media-id");
                            T(e, n);
                          }
                        }
                      );
                    else if (
                      (window.open(t.href, "_blank"),
                      localStorage.setItem("saleassist", !0),
                      "7b9e1146-846f-4c4c-9341-21ece41d4670" ===
                        this.playlistID)
                    ) {
                      const n = t?.getAttribute("data-media-id");
                      T(e, n);
                    }
                    j(S), H(t);
                  });
                }),
                _ &&
                  _.length > 0 &&
                  _.forEach((t, n) => {
                    t.addEventListener("click", (n) => {
                      n.preventDefault(),
                        e.is_capture_form
                          ? lt(
                              this.playlistID,
                              0,
                              e.lead_form,
                              t.href,
                              e.unique_field_name,
                              null,
                              () => localStorage.setItem("saleassist", !0)
                            )
                          : (window.open(t.href, "_blank"),
                            localStorage.setItem("saleassist", !0)),
                        j(S),
                        H(t);
                    });
                  }),
                new ResizeObserver(() => {
                  $(),
                    3 === y?.length &&
                      (document.querySelector(
                        ".sa_shorts_swipe-up-arrow-animation"
                      ).style.display = "none"),
                    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                      (document.querySelector(
                        ".sa_shorts_swipe-up-arrow-animation"
                      ).style.display = "none"),
                    C.matches
                      ? A.forEach((e) => {
                          /iPad|iPhone|iPod/.test(navigator.userAgent)
                            ? (e.style.display = "flex")
                            : (e.style.display = "none");
                        })
                      : A.forEach((e) => {
                          e.style.display = "flex";
                        });
                }).observe(document.body);
              const R = {
                  effect: "coverflow",
                  realIndex: S,
                  centeredSlides: !0,
                  slidesPerView: "auto",
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 2,
                    slideShadows: !0,
                  },
                  initialSlide: i,
                },
                G = new ae(
                  `#${n.id} .sa_shorts_parentSwiper`,
                  "coverflow" === this.type
                    ? R
                    : {
                        spaceBetween: 20,
                        slidesPerView: "auto",
                        freeMode: !0,
                        mousewheel: { releaseOnEdges: !0 },
                        navigation: {
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        },
                      }
                );
              let Y = new ae(`.sa_${n?.id}-modal .sa_shorts_carouselSwiper`, k);
              new ae(
                `#${n.id} .sa_shorts_parentSwiper .sa_shorts_childSwiper`,
                {
                  autoplay: { delay: 1500 },
                  grabCursor: !0,
                  on: {
                    init: function () {
                      this.slides.length <= 1 &&
                        ((this.params.autoplay = !1), this.autoplay.stop());
                    },
                  },
                }
              ),
                new ae(
                  `.sa_${n?.id}-modal .sa_shorts_carouselSwiper .sa_shorts_childSwiper`,
                  {
                    autoplay: { delay: 1500 },
                    grabCursor: !0,
                    slidesPerView: "auto",
                  }
                );
            }
          },
          si = (e) => {
            let n = `${t.url}/source/shorts?source_url=${window.location.href}`;
            e && (n = `${n}&playlist_id=${e}`),
              fetch(n)
                .then((e) => e.json())
                .then(async (e) => {
                  if (e.length > 0) {
                    const n = { theme_color: "#ff0000", media: e },
                      i = await ((t = e[0].media),
                      new Promise((e, n) => {
                        const i = document.createElement("video");
                        (i.src = t),
                          i.addEventListener("loadedmetadata", function () {
                            const t = this.videoWidth,
                              n = this.videoHeight;
                            e(t > n);
                          }),
                          i.addEventListener("error", function () {
                            n(new Error("Unable to load video"));
                          }),
                          i.load();
                      })),
                      a = document.createElement("div");
                    (a.id = "saleassist-video-shorts-floating-tile"),
                      (a.className =
                        "saleassist-video-shorts-floating-tile " +
                        (i ? "sa-floating-tile-landscape" : "")),
                      (a.innerHTML =
                        '\n            <div id="saleassist-video-shorts-floating-tile-close-btn">\n              <svg\n              stroke="currentColor"\n              fill="currentColor"\n              stroke-width="0"\n              viewBox="0 0 24 24"\n              height="1em"\n              width="1em"\n              xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  fill="none"\n                  stroke="currentColor"\n                  stroke-width="3"\n                  d="M3,3 L21,21 M3,21 L21,3"\n                ></path>\n              </svg>\n            </div>'),
                      document.body.appendChild(a),
                      new ai({ autoplay: !0 }).videoShorts(n);
                    document
                      .getElementById(
                        "saleassist-video-shorts-floating-tile-close-btn"
                      )
                      .addEventListener("click", function () {
                        a.style.display = "none";
                      }),
                      ri(e[0]);
                  }
                  var t;
                });
          },
          ri = (e) => {
            const t = `${e.style.vertical_position}_${e.style.horizontal_position}`;
            "bottom_right" === t
              ? document.documentElement.style.setProperty(
                  "--saVideoTilePosition",
                  "auto 15px 15px auto"
                )
              : "bottom_left" === t
              ? document.documentElement.style.setProperty(
                  "--saVideoTilePosition",
                  "auto auto 15px 15px"
                )
              : "top_left" === t
              ? document.documentElement.style.setProperty(
                  "--saVideoTilePosition",
                  "15px auto auto 15px"
                )
              : document.documentElement.style.setProperty(
                  "--saVideoTilePosition",
                  "15px 15px auto auto"
                );
          };
        const oi = class {
            constructor(e) {
              e.id &&
                ((this.playlistID = e.id ?? ""),
                (this.event_name = e.event_name ?? ""),
                (this.data = e.data ?? {}),
                this.init());
            }
            async saveEvent(e) {
              let n = null;
              try {
                const i = fetch(`${t.event}?${e}`).then((e) => e.json());
                n = i;
              } catch (e) {
                console.error(e);
              }
              return n;
            }
            async init() {
              const e = it("client_id"),
                t = it("saleassist"),
                n = it(`video_tiles_${this.playlistID}`)?.session_data ?? "";
              if (
                (console.log("this.session_data:", n),
                t &&
                  "true" == t &&
                  this.playlistID &&
                  "" !== this.playlistID &&
                  e &&
                  "" !== e)
              ) {
                const t = {
                    people_id: "",
                    client_id: e,
                    source_id: this.playlistID,
                    session_id: n,
                    event: this.event_name,
                    data: JSON.stringify(this.data),
                    z: Date.now(),
                    source_referrer: window ? window.location.href : "",
                  },
                  i = Object.keys(t)
                    .map(
                      (e) =>
                        `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`
                    )
                    .join("&");
                await this.saveEvent(i);
              }
            }
          },
          li = (e) => {
            const t = document.createElement("script");
            (t.src =
              "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.4.5/hls.light.min.js"),
              (t.onload = function () {
                return (widget = new ai(e)), widget;
              }),
              document.body.appendChild(t);
          },
          di = (e) => {
            const t = document.createElement("script");
            (t.src =
              "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.4.5/hls.light.min.js"),
              (t.onload = function () {
                si(e?.id);
              }),
              document.body.appendChild(t);
          },
          ci = (e, t, n) => new oi({ id: e, event_name: t, data: n });
        "undefined" != typeof window &&
          ((window.saleassistVideoTiles = window.saleassistVideoTiles || {}),
          (window.saleassistVideoTiles.mountWidget = li),
          (window.saleassistVideoTiles.mountSourceVideo = di),
          (window.saleassistVideoTiles.track = ci)),
          document.addEventListener("DOMContentLoaded", function () {
            const e = document.createElement("script");
            (e.src =
              "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.4.5/hls.light.min.js"),
              (e.onload = function () {
                si();
              }),
              document.body.appendChild(e);
          });
      })(),
      i
    );
  })()
);
