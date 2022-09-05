/* eslint-disable no-var */

/**
 * This script is included in the 123Forms at https://forms.husqvarna.com/
 *
 * 123Form script that pushes formSubmit event to the ifarmes parent
 * where a listener is setup in src/tracking/index.ts that handles the GTM tracking,
 */

 window.setTimeout(() => {
  var eventData = {
    event: "formSubmit",
    formInfo: {
      name: document.title || "",
    },
    eventInfo: {
      success: true,
    },
  };

  if (window && window.top) {
    window.top.postMessage({ event: "123FormEvent", eventData: { ...eventData } }, "*");
  }
}, 250);
