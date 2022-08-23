console.log("aaabbbbccc");

window.setTimeout( () => {
    console.log("timeout triggered")
    var test = document.querySelectorAll('[data-type="virtual-form-table-row"');
    
    test.forEach((row, index) => {
        console.log("1111", row);
    
        var inputs = row.querySelectorAll("input, textarea, select");
    
         
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
        
    
        console.log('2222', inputs)
    
       
    
    });
}, 500)
