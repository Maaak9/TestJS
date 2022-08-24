console.log("aaabbbbccc");

document.addEventListener("DOMContentLoaded", function(){
  console.log("DOMContentLoaded triggered")
  var rows = document.querySelectorAll('[data-type="virtual-form-table-row"');
  console.log('rows', rows)
  var rowsWithInput = [];
  rows.forEach((row) => {
    rowsWithInput.push(row.querySelectorAll("input, textarea, select"));
  });
  console.log('rowsWithInput', rowsWithInput)
  // Filter out rows that don't have input, textarea, select
  rowsWithInput = rowsWithInput.filter((inputs) => inputs.length > 0);

  console.log('rowsWithInput after filter', rowsWithInput)

  rowsWithInput.forEach((inputs, index) => {
    console.log("1111", inputs);
      
    inputs.forEach((input) => {
      console.log('5555', input);
      
      input.addEventListener("focus", (event) => {
        console.log('Change on input in', index, input);

        if (window.dataLayer) {
            window.dataLayer.push({
              event: "formEnterProgress",
              formInfo: {
                name: "testForm",
                step: index,
              },
            });
        }
      });
    })
  });
});

