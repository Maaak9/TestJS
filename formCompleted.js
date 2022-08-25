window.setTimeout(() => {
  var eventData = {
    event: "formSubmit",
    formInfo: {
      name: document.title || "",
    },
    eventInfo: {
      success: true,
    }
  }
  console.log('push event data ', eventData)
  if (window.dataLayer) {
      window.dataLayer.push(eventData);
  }
}, 250);
