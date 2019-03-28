$(document).ready(function () {

    // VARIABLES
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator_display');
    var calcKeys = calc.find('.calculator_key');
    var calcButton = calc.find('.calculator_button');
    var calcClear = calc.find('.calculator_clear');
    var calcEqual = calc.find('.calculator_key--equal');
    var calcPower= calc.find('.calculator_power');
    var calcSpace= calc.find('.calculator_backspace');

    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + (this).attr('value') );
    });
    
    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
 
    });

    //SHOW RESULT
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    // POWER BUTTON
    calcEqual.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
    });
        // BACKSPACE BUTTON
    calcSpace.on('click', function () { //
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().lenght-1) );
    });
});