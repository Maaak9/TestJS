const test = document.querySelectorAll('[data-type="virtual-form-table-row"');

test.forEach((row, index) => {
    console.log("1111", row);

    let inputs = row.querySelectorAll(”input, textarea, select");

    
    inputs.forEach((input) => {
        console.log('5555', input);
        
        input.addEventListener(’focus', (event) => {
            console.log('Change on input in', index, input);
        });
        
    })
    

    console.log('2222', inputs)
});