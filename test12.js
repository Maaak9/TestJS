window.setTimeout(() => {
  var rows = [];
  var inputs = document.querySelectorAll("input, textarea, select");
  
  var lastInputId = undefined;

  // Group together inputs that are connected to eachother by checking if the id matches with the previous input.
  // for groups like checkboxs / radiobuttons
  inputs.forEach((input) => {
    console.log('rows', rows)
    var inputId = input.id.split("_")[0];
    if (inputId && lastInputId && lastInputId === inputId) {
      rows[rows.length - 1].push(input)
    } else {
      rows.push([input]);
    }
  
    lastInputId = inputId.length > 0 ? inputId : undefined;
  })


  var filteredRows = rows.filter((row) => row[0].clientHeight > 0);
  console.log('filteredRows', filteredRows)
  filteredRows.forEach((inputs, index) => {
    inputs.forEach((input) => {
      
      input.addEventListener("focus", (event) => {
        var eventData = {
          event: "formEnterProgress",
          formInfo: {
            name: document.title || "",
            step: index + 1,
          },
        }
        console.log('push event data ', eventData)
        if (window.dataLayer) {
            window.dataLayer.push(eventData);
        }
      });
    })
  });

}, 250);
