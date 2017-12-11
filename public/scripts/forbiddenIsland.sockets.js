jQuery(function($){
    var socket = io.connect();

//////////////////////////
//        REQUESTS      //
//////////////////////////

//        GENERIC NOTIFICATION REQUESTS
    $(document).on('click', '#genericNotificationOn', function (e) {
        socket.emit('genericNotificationOn');
        e.preventDefault();
    });

    $(document).on('click', '#genericNotificationOff', function (e) {
        socket.emit('genericNotificationOff');
        e.preventDefault();
    });
//        END OF GENERIC NOTIFICATION REQUESTS

//        WEATHER EFFECT REQUESTS
    $(document).on('click', '#lightRain', function (e) {
        socket.emit('lightRain');
        e.preventDefault();
    });

    $(document).on('click', '#mediumRain', function (e) {
        socket.emit('mediumRain');
        e.preventDefault();
    });

    $(document).on('click', '#heavyRain', function (e) {
        socket.emit('heavyRain');
        e.preventDefault();
    });

    $(document).on('click', '#torrentialRain', function (e) {
        socket.emit('torrentialRain');
        e.preventDefault();
    });

    $(document).on('click', '#stopRain', function (e) {
        socket.emit('stopRain');
        e.preventDefault();
    });

    $(document).on('click', '#generateLightning', function (e) {
        socket.emit('generateLightning');
        e.preventDefault();
    });

//        END OF WEATHER EFFECT REQUESTS

//        OTHER ANIMATIONS
    $(document).on('click', '#moveHelecopter', function (e) {
        socket.emit('moveHelecopter');
        e.preventDefault();
    });
//        END OF OTHER ANIMATIONS

//        Tile Animations
//        Land Pulses

    $(document).on('click', '#pulseOneOne', function (e) {
        socket.emit('pulseOneOne');
        e.preventDefault();
    });

    $(document).on('click', '#pulseOneTwo', function (e) {
        socket.emit('pulseOneTwo');
        e.preventDefault();
    });

    $(document).on('click', '#pulseTwoOne', function (e) {
        socket.emit('pulseTwoOne');
        e.preventDefault();
    });

    $(document).on('click', '#pulseTwoTwo', function (e) {
        socket.emit('pulseTwoTwo');
        e.preventDefault();
    });

    $(document).on('click', '#pulseTwoThree', function (e) {
        socket.emit('pulseTwoThree');
        e.preventDefault();
    });

    $(document).on('click', '#pulseTwoFour', function (e) {
        socket.emit('pulseTwoFour');
        e.preventDefault();
    });

    $(document).on('click', '#pulseThreeOne', function (e) {
        socket.emit('pulseThreeOne');
        e.preventDefault();
    });

    $(document).on('click', '#pulseThreeTwo', function (e) {
        socket.emit('pulseThreeTwo');
        e.preventDefault();
    });

    $(document).on('click', '#pulseThreeThree', function (e) {
        socket.emit('pulseThreeThree');
        e.preventDefault();
    });

    $(document).on('click', '#pulseThreeFour', function (e) {
        socket.emit('pulseThreeFour');
        e.preventDefault();
    });

    $(document).on('click', '#pulseThreeFive', function (e) {
        socket.emit('pulseThreeFive');
        e.preventDefault();
    });

    $(document).on('click', '#pulseThreeSix', function (e) {
        socket.emit('pulseThreeSix');
        e.preventDefault();
    });

    $(document).on('click', '#pulseFourOne', function (e) {
        socket.emit('pulseFourOne');
        e.preventDefault();
    });

    $(document).on('click', '#pulseFourTwo', function (e) {
        socket.emit('pulseFourTwo');
        e.preventDefault();
    });

    $(document).on('click', '#pulseFourThree', function (e) {
        socket.emit('pulseFourThree');
        e.preventDefault();
    });

    $(document).on('click', '#pulseFourFour', function (e) {
        socket.emit('pulseFourFour');
        e.preventDefault();
    });

    $(document).on('click', '#pulseFourFive', function (e) {
        socket.emit('pulseFourFive');
        e.preventDefault();
    });

    $(document).on('click', '#pulseFourSix', function (e) {
        socket.emit('pulseFourSix');
        e.preventDefault();
    });

    $(document).on('click', '#pulseFiveOne', function (e) {
        socket.emit('pulseFiveOne');
        e.preventDefault();
    });

    $(document).on('click', '#pulseFiveTwo', function (e) {
        socket.emit('pulseFiveTwo');
        e.preventDefault();
    });

    $(document).on('click', '#pulseFiveThree', function (e) {
        socket.emit('pulseFiveThree');
        e.preventDefault();
    });

    $(document).on('click', '#pulseFiveFour', function (e) {
        socket.emit('pulseFiveFour');
        e.preventDefault();
    });

    $(document).on('click', '#pulseSixOne', function (e) {
        socket.emit('pulseSixOne');
        e.preventDefault();
    });

    $(document).on('click', '#pulseSixTwo', function (e) {
        socket.emit('pulseSixTwo');
        e.preventDefault();
    });

    $(document).on('click', '#startPulsing', function (e) {
        socket.emit('startPulsing');
        e.preventDefault();
    });

    $(document).on('click', '#stopPulsing', function (e) {
        socket.emit('stopPulsing');
        e.preventDefault();
    });

//    Flood Tiles

    $(document).on('click', '#floodOneOne', function (e) {
        socket.emit('floodOneOne');
        e.preventDefault();
    });

    $(document).on('click', '#floodOneTwo', function (e) {
        socket.emit('floodOneTwo');
        e.preventDefault();
    });

    $(document).on('click', '#floodTwoOne', function (e) {
        socket.emit('floodTwoOne');
        e.preventDefault();
    });

    $(document).on('click', '#floodTwoTwo', function (e) {
        socket.emit('floodTwoTwo');
        e.preventDefault();
    });

    $(document).on('click', '#floodTwoThree', function (e) {
        socket.emit('floodTwoThree');
        e.preventDefault();
    });

    $(document).on('click', '#floodTwoFour', function (e) {
        socket.emit('floodTwoFour');
        e.preventDefault();
    });

    $(document).on('click', '#floodThreeOne', function (e) {
        socket.emit('floodThreeOne');
        e.preventDefault();
    });

    $(document).on('click', '#floodThreeTwo', function (e) {
        socket.emit('floodThreeTwo');
        e.preventDefault();
    });

    $(document).on('click', '#floodThreeThree', function (e) {
        socket.emit('floodThreeThree');
        e.preventDefault();
    });

    $(document).on('click', '#floodThreeFour', function (e) {
        socket.emit('floodThreeFour');
        e.preventDefault();
    });

    $(document).on('click', '#floodThreeFive', function (e) {
        socket.emit('floodThreeFive');
        e.preventDefault();
    });

    $(document).on('click', '#floodThreeSix', function (e) {
        socket.emit('floodThreeSix');
        e.preventDefault();
    });

    $(document).on('click', '#floodFourOne', function (e) {
        socket.emit('floodFourOne');
        e.preventDefault();
    });

    $(document).on('click', '#floodFourTwo', function (e) {
        socket.emit('floodFourTwo');
        e.preventDefault();
    });

    $(document).on('click', '#floodFourThree', function (e) {
        socket.emit('floodFourThree');
        e.preventDefault();
    });

    $(document).on('click', '#floodFourFour', function (e) {
        socket.emit('floodFourFour');
        e.preventDefault();
    });

    $(document).on('click', '#floodFourFive', function (e) {
        socket.emit('floodFourFive');
        e.preventDefault();
    });

    $(document).on('click', '#floodFourSix', function (e) {
        socket.emit('floodFourSix');
        e.preventDefault();
    });

    $(document).on('click', '#floodFiveOne', function (e) {
        socket.emit('floodFiveOne');
        e.preventDefault();
    });

    $(document).on('click', '#floodFiveTwo', function (e) {
        socket.emit('floodFiveTwo');
        e.preventDefault();
    });

    $(document).on('click', '#floodFiveThree', function (e) {
        socket.emit('floodFiveThree');
        e.preventDefault();
    });

    $(document).on('click', '#floodFiveFour', function (e) {
        socket.emit('floodFiveFour');
        e.preventDefault();
    });

    $(document).on('click', '#floodSixOne', function (e) {
        socket.emit('floodSixOne');
        e.preventDefault();
    });

    $(document).on('click', '#floodSixTwo', function (e) {
        socket.emit('floodSixTwo');
        e.preventDefault();
    });

//    End of Land Tiles



//////////////////////////
//        RESPONSES     //
//////////////////////////

//        GENERIC NOTIFICATIONS RESPONSES
    socket.on('genericNotificationOn', function () {
        console.log('genericNotificationOn');
        notificationOn();
    });

    socket.on('genericNotificationOff', function () {
        console.log('genericNotificationOff');
        notificationOff();
    });
//        END OF GENERIC NOTIFICATION RESPONSES

//        WEATHER EFFECT RESPONSES
    socket.on('lightRain', function () {
        console.log('lightRain');
        createRain(100);
    });

    socket.on('mediumRain', function () {
        console.log('mediumRain');
        createRain(200);
    });

    socket.on('heavyRain', function () {
        console.log('heavyRain');
        createRain(400);
    });

    socket.on('torrentialRain', function () {
        console.log('torrentialRain');
        createRain(800);
    });

    socket.on('stopRain', function () {
        console.log('stopRain');
        stopRain();
    });

    socket.on('generateLightning', function () {
        console.log('generateLightning');
        generateLightning();
    });
//        WEATHER EFFECT RESPONSES END

//        OTHER ANIMATIONS START
    socket.on('moveHelecopter', function () {
        console.log('moveHelecopter');
        moveHelecopter();
    });
//        OTHER ANIMATIONS END

//        Tile Animation
//        Land Pulses
    socket.on('startPulsing', function () {
        console.log('startPulsing');
        startPulsing();
    });

    socket.on('stopPulsing', function () {
        console.log('stopPulsing');
        stopPulsing();
    });


    socket.on('pulseOneOne', function () {
        console.log('pulseOneOne');
        swOneOne();
    });

    socket.on('pulseOneTwo', function () {
        console.log('pulseOneTwo');
        swOneTwo();
    });

    socket.on('pulseTwoOne', function () {
        console.log('pulseTwoOne');
        swTwoOne();
    });

    socket.on('pulseTwoTwo', function () {
        console.log('pulseTwoTwo');
        swTwoTwo();
    });

    socket.on('pulseTwoThree', function () {
        console.log('pulseTwoThree');
        swTwoThree();
    });

    socket.on('pulseTwoFour', function () {
        console.log('pulseTwoFour');
        swTwoFour();
    });

    socket.on('pulseThreeOne', function () {
        console.log('pulseThreeOne');
        swThreeOne();
    });

    socket.on('pulseThreeTwo', function () {
        console.log('pulseThreeTwo');
        swThreeTwo();
    });

    socket.on('pulseThreeThree', function () {
        console.log('pulseThreeThree');
        swThreeThree();
    });

    socket.on('pulseThreeFour', function () {
        console.log('pulseThreeFour');
        swThreeFour();
    });

    socket.on('pulseThreeFive', function () {
        console.log('pulesThreeFive');
        swThreeFive();
    });

    socket.on('pulseThreeSix', function () {
        console.log('pulseThreeSix');
        swThreeSix();
    });

    socket.on('pulseFourOne', function () {
        console.log('pulseFourOne');
        swFourOne();
    });

    socket.on('pulseFourTwo', function () {
        console.log('pulseFourTwo');
        swFourTwo();
    });

    socket.on('pulseFourThree', function () {
        console.log('pulseFourThree');
        swFourThree();
    });

    socket.on('pulseFourFour', function () {
        console.log('pulseFourFour');
        swFourFour();
    });

    socket.on('pulseFourFive', function () {
        console.log('pulseFourFive');
        swFourFive();
    });

    socket.on('pulseFourSix', function () {
        console.log('pulseFourSix');
        swFourSix();
    });

    socket.on('pulseFiveOne', function () {
        console.log('pulseFiveOne');
        swFiveOne();
    });

    socket.on('pulseFiveTwo', function () {
        console.log('pulseFiveTwo');
        swFiveTwo();
    });

    socket.on('pulseFiveThree', function () {
        console.log('pulseFiveThree');
        swFiveThree();
    });

    socket.on('pulseFiveFour', function () {
        console.log('pulseFiveFour');
        swFiveFour();
    });

    socket.on('pulseSixOne', function () {
        console.log('pulseSixOne');
        swSixOne();
    });

    socket.on('pulseSixTwo', function () {
        console.log('pulseSixTwo');
        swSixTwo();
    });

//  Flood Tiles
    socket.on('floodOneOne', function () {
        console.log('floodOneOne');
        floodArea('.oneOne-square');
    });

    socket.on('floodOneTwo', function () {
        console.log('floodOneTwo');
        floodArea('.oneTwo-square');
    });

    socket.on('floodTwoOne', function () {
        console.log('floodTwoOne');
        floodArea('.twoOne-square');
    });

    socket.on('floodTwoTwo', function () {
        console.log('floodTwoTwo');
        floodArea('.twoTwo-square');
    });

    socket.on('floodTwoThree', function () {
        console.log('floodTwoThree');
        floodArea('.twoThree-square');
    });

    socket.on('floodTwoFour', function () {
        console.log('floodTwoFour');
        floodArea('.twoFour-square');
    });

    socket.on('floodThreeOne', function () {
        console.log('floodThreeOne');
        floodArea('.threeOne-square');
    });

    socket.on('floodThreeTwo', function () {
        console.log('floodThreeTwo');
        floodArea('.threeTwo-square');
    });

    socket.on('floodThreeThree', function () {
        console.log('floodThreeThree');
        floodArea('.threeThree-square');
    });

    socket.on('floodThreeFour', function () {
        console.log('floodThreeFour');
        floodArea('.threeFour-square');
    });

    socket.on('floodThreeFive', function () {
        console.log('pulesThreeFive');
        floodArea('.threeFive-square');
    });

    socket.on('floodThreeSix', function () {
        console.log('floodThreeSix');
        floodArea('.threeSix-square');
    });

    socket.on('floodFourOne', function () {
        console.log('floodFourOne');
        floodArea('.fourOne-square');
    });

    socket.on('floodFourTwo', function () {
        console.log('floodFourTwo');
        floodArea('.fourTwo-square');
    });

    socket.on('floodFourThree', function () {
        console.log('floodFourThree');
        floodArea('.fourThree-square');
    });

    socket.on('floodFourFour', function () {
        console.log('floodFourFour');
        floodArea('.fourFour-square');
    });

    socket.on('floodFourFive', function () {
        console.log('floodFourFive');
        floodArea('.fourFive-square');
    });

    socket.on('floodFourSix', function () {
        console.log('floodFourSix');
        floodArea('.fourSix-square');
    });

    socket.on('floodFiveOne', function () {
        console.log('floodFiveOne');
        floodArea('.fiveOne-square');
    });

    socket.on('floodFiveTwo', function () {
        console.log('floodFiveTwo');
        floodArea('.fiveTwo-square');
    });

    socket.on('floodFiveThree', function () {
        console.log('floodFiveThree');
        floodArea('.fiveThree-square');
    });

    socket.on('floodFiveFour', function () {
        console.log('floodFiveFour');
        floodArea('.fiveFour-square');
    });

    socket.on('floodSixOne', function () {
        console.log('floodSixOne');
        floodArea('.sixOne-square');
    });

    socket.on('floodSixTwo', function () {
        console.log('floodSixTwo');
        floodArea('.sixTwo-square');
    });
//    End of Flood Tiles
//    End of Land Tiles

//    ////////////////////////
//    Item Highlighting
//    ///////////////////////

    //        Blue
    $(document).on('click', '#highlightBlue', function (e) {
        socket.emit('highlightBlue');
        e.preventDefault();
    });

    socket.on('highlightBlue', function () {
        console.log('highlightBlue');
        highlightBlue();
    });

//       Red
    $(document).on('click', '#highlightRed', function (e) {
        socket.emit('highlightRed');
        e.preventDefault();
    });

    socket.on('highlightRed', function () {
        console.log('highlightRed');
        highlightRed();
    });

//        Highlight Player One
    $(document).on('click', '#highlightPlayerOne', function (e) {
        socket.emit('highlightPlayerOne');
        e.preventDefault();
    });

    socket.on('highlightPlayerOne', function () {
        console.log('highlightPlayerOne');
        highlightPlayerOne();
    });

//        Highlight Player Two
    $(document).on('click', '#highlightPlayerTwo', function (e) {
        socket.emit('highlightPlayerTwo');
        e.preventDefault();
    });

    socket.on('highlightPlayerTwo', function () {
        console.log('highlightPlayerTwo');
        highlightPlayerTwo();
    });

//        Highlight Player Three
    $(document).on('click', '#highlightPlayerThree', function (e) {
        socket.emit('highlightPlayerThree');
        e.preventDefault();
    });

    socket.on('highlightPlayerThree', function () {
        console.log('highlightPlayerThree');
        highlightPlayerThree();
    });

//        Highlight Stone Treasure
    $(document).on('click', '#stoneIslandButton', function (e) {
        socket.emit('highlightStoneTreasure');
        e.preventDefault();
    });

    socket.on('highlightStoneTreasure', function () {
        console.log('highlightStoneTreasure');
        highlightStoneTreasure();
    });

//        Highlight Lion Treasure
    $(document).on('click', '#lionIslandButton', function (e) {
        socket.emit('highlightLionTreasure');
        e.preventDefault();
    });

    socket.on('highlightLionTreasure', function () {
        console.log('highlightLionTreasure');
        highlightLionTreasure();
    });

//      Highlight Lion Treasure
    $(document).on('click', '#floodIslandButton', function (e) {
        socket.emit('highlightFloodTreasure');
        e.preventDefault();
    });

    socket.on('highlightFloodTreasure', function () {
        console.log('highlightFloodTreasure');
        highlightFloodTreasure();
    });

//        Highlight Fire Treasure
    $(document).on('click', '#fireIslandButton', function (e) {
        socket.emit('highlightFireTreasure');
        e.preventDefault();
    });

    socket.on('highlightFireTreasure', function () {
        console.log('highlightFireTreasure');
        highlightFireTreasure();
    });

});