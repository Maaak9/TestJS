window.setTimeout(() => {
  var rows = document.querySelectorAll('[data-type="virtual-form-table-row"');
  var rowsWithInput = [];
  rows.forEach((row) => {
    rowsWithInput.push(row.querySelectorAll("input, textarea, select"));
  });
  console.log('rowsWithInput', rowsWithInput)
  // Filter out rows that don't have input, textarea, select
  rowsWithInput = rowsWithInput.filter((inputs) => inputs.length > 0);

  rowsWithInput.forEach((inputs, index) => {
    inputs.forEach((input) => {
      
      input.addEventListener("focus", (event) => {
        console.log('focus at', index, input, document.title);

        if (window.dataLayer) {
            window.dataLayer.push({
              event: "formEnterProgress",
              formInfo: {
                name: document.title || "",
                step: index,
              },
            });
        }
      });
    })
  });
}, 500);
