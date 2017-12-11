/**
 * Created by michaelcrabb on 02/12/2016.
 */
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000);

app.get('/controls', function(req,res){
    console.log('control File Requested')
    res.sendFile(__dirname+ '/views/controlPage.html');
});

app.get('/projector', function(req,res){
    console.log('projector File Requested')
    res.sendFile(__dirname+ '/views/projectedBoard.html');
});

io.sockets.on('connection', function(socket){

    //GENERIC NOTIFICATIONS
    socket.on('genericNotificationOn', function(){
        console.log('genericNofiticationOn');
        io.sockets.emit('genericNotificationOn');
    });

    socket.on('genericNotificationOff', function(){
        console.log('genericNofiticationOff');
        io.sockets.emit('genericNotificationOff');
    });

//    WEATHER NOTIFICATIONS
    socket.on('lightRain', function(){
        console.log('lightRain');
        io.sockets.emit('lightRain');
    });

    socket.on('mediumRain', function(){
        console.log('mediumRain');
        io.sockets.emit('mediumRain');
    });

    socket.on('heavyRain', function(){
        console.log('heavyRain');
        io.sockets.emit('heavyRain');
    });

    socket.on('torrentialRain', function(){
        console.log('torrentialRain');
        io.sockets.emit('torrentialRain');
    });

    socket.on('stopRain', function(){
        console.log('stopRain');
        io.sockets.emit('stopRain');
    });

    socket.on('generateLightning', function(){
        console.log('generateLightning');
        io.sockets.emit('generateLightning');
    });

//    OTHER ANIMATIONS
    socket.on('moveHelecopter', function(){
        console.log('moveHelecopter');
        io.sockets.emit('moveHelecopter');
    });

//    Tile Animations
//    Board Pulses
    socket.on('startPulsing', function(){
        console.log('startPulsing');
        io.sockets.emit('startPulsing');
    });

    socket.on('stopPulsing', function(){
        console.log('stopPulsing');
        io.sockets.emit('stopPulsing');
    });

    socket.on('pulseOneOne', function(){
        console.log('pulseOneOne');
        io.sockets.emit('pulseOneOne');
    });

    socket.on('pulseOneTwo', function(){
        console.log('pulseOneTwo');
        io.sockets.emit('pulseOneTwo');
    });

    socket.on('pulseTwoOne', function(){
        console.log('pulseTwoOne');
        io.sockets.emit('pulseTwoOne');
    });

    socket.on('pulseTwoTwo', function(){
        console.log('pulseTwoTwo');
        io.sockets.emit('pulseTwoTwo');
    });
    socket.on('pulseTwoThree', function(){
        console.log('pulseTwoThree');
        io.sockets.emit('pulseTwoThree');
    });

    socket.on('pulseTwoFour', function(){
        console.log('pulseTwoFour');
        io.sockets.emit('pulseTwoFour');
    });

    socket.on('pulseThreeOne', function(){
        console.log('pulseThreeOne');
        io.sockets.emit('pulseThreeOne');
    });

    socket.on('pulseThreeTwo', function(){
        console.log('pulseThreeTwo');
        io.sockets.emit('pulseThreeTwo');
    });

    socket.on('pulseThreeThree', function(){
        console.log('pulseThreeThree');
        io.sockets.emit('pulseThreeThree');
    });

    socket.on('pulseThreeFour', function(){
        console.log('pulseThreeFour');
        io.sockets.emit('pulseThreeFour');
    });

    socket.on('pulseThreeFive', function(){
        console.log('pulseThreeFive');
        io.sockets.emit('pulseThreeFive');
    });

    socket.on('pulseThreeSix', function(){
        console.log('pulseThreeSix');
        io.sockets.emit('pulseThreeSix');
    });

    socket.on('pulseFourOne', function(){
        console.log('pulseFourOne');
        io.sockets.emit('pulseFourOne');
    });

    socket.on('pulseFourTwo', function(){
        console.log('pulseFourTwo');
        io.sockets.emit('pulseFourTwo');
    });

    socket.on('pulseFourThree', function(){
        console.log('pulseFourThree');
        io.sockets.emit('pulseFourThree');
    });

    socket.on('pulseFourFour', function(){
        console.log('pulseFourFour');
        io.sockets.emit('pulseFourFour');
    });

    socket.on('pulseFourFive', function(){
        console.log('pulseFourFive');
        io.sockets.emit('pulseFourFive');
    });

    socket.on('pulseFourSix', function(){
        console.log('pulseFourSix');
        io.sockets.emit('pulseFourSix');
    });

    socket.on('pulseFiveOne', function(){
        console.log('pulseFiveOne');
        io.sockets.emit('pulseFiveOne');
    });

    socket.on('pulseFiveTwo', function(){
        console.log('pulseFiveTwo');
        io.sockets.emit('pulseFiveTwo');
    });

    socket.on('pulseFiveThree', function(){
        console.log('pulseFiveThree');
        io.sockets.emit('pulseFiveThree');
    });

    socket.on('pulseFiveFour', function(){
        console.log('pulseFiveFour');
        io.sockets.emit('pulseFiveFour');
    });

    socket.on('pulseSixOne', function(){
        console.log('pulseSixOne');
        io.sockets.emit('pulseSixOne');
    });

    socket.on('pulseSixTwo', function(){
        console.log('pulseSixTwo');
        io.sockets.emit('pulseSixTwo');
    });

    socket.on('floodOneOne', function(){
        console.log('floodOneOne');
        io.sockets.emit('floodOneOne');
    });

    socket.on('floodOneTwo', function(){
        console.log('floodOneTwo');
        io.sockets.emit('floodOneTwo');
    });

    socket.on('floodTwoOne', function(){
        console.log('floodTwoOne');
        io.sockets.emit('floodTwoOne');
    });

    socket.on('floodTwoTwo', function(){
        console.log('floodTwoTwo');
        io.sockets.emit('floodTwoTwo');
    });
    socket.on('floodTwoThree', function(){
        console.log('floodTwoThree');
        io.sockets.emit('floodTwoThree');
    });

    socket.on('floodTwoFour', function(){
        console.log('floodTwoFour');
        io.sockets.emit('floodTwoFour');
    });

    socket.on('floodThreeOne', function(){
        console.log('floodThreeOne');
        io.sockets.emit('floodThreeOne');
    });

    socket.on('floodThreeTwo', function(){
        console.log('floodThreeTwo');
        io.sockets.emit('floodThreeTwo');
    });

    socket.on('floodThreeThree', function(){
        console.log('floodThreeThree');
        io.sockets.emit('floodThreeThree');
    });

    socket.on('floodThreeFour', function(){
        console.log('floodThreeFour');
        io.sockets.emit('floodThreeFour');
    });

    socket.on('floodThreeFive', function(){
        console.log('floodThreeFive');
        io.sockets.emit('floodThreeFive');
    });

    socket.on('floodThreeSix', function(){
        console.log('floodThreeSix');
        io.sockets.emit('floodThreeSix');
    });

    socket.on('floodFourOne', function(){
        console.log('floodFourOne');
        io.sockets.emit('floodFourOne');
    });

    socket.on('floodFourTwo', function(){
        console.log('floodFourTwo');
        io.sockets.emit('floodFourTwo');
    });

    socket.on('floodFourThree', function(){
        console.log('floodFourThree');
        io.sockets.emit('floodFourThree');
    });

    socket.on('floodFourFour', function(){
        console.log('floodFourFour');
        io.sockets.emit('floodFourFour');
    });

    socket.on('floodFourFive', function(){
        console.log('floodFourFive');
        io.sockets.emit('floodFourFive');
    });

    socket.on('floodFourSix', function(){
        console.log('floodFourSix');
        io.sockets.emit('floodFourSix');
    });

    socket.on('floodFiveOne', function(){
        console.log('floodFiveOne');
        io.sockets.emit('floodFiveOne');
    });

    socket.on('floodFiveTwo', function(){
        console.log('floodFiveTwo');
        io.sockets.emit('floodFiveTwo');
    });

    socket.on('floodFiveThree', function(){
        console.log('floodFiveThree');
        io.sockets.emit('floodFiveThree');
    });

    socket.on('floodFiveFour', function(){
        console.log('floodFiveFour');
        io.sockets.emit('floodFiveFour');
    });

    socket.on('floodSixOne', function(){
        console.log('floodSixOne');
        io.sockets.emit('floodSixOne');
    });

    socket.on('floodSixTwo', function(){
        console.log('floodSixTwo');
        io.sockets.emit('floodSixTwo');
    });

    socket.on('highlightPlayerOne', function(){
        console.log('highlightPlayerOne');
        io.sockets.emit('highlightPlayerOne');
    });

    socket.on('highlightPlayerTwo', function(){
        console.log('highlightPlayerTwo');
        io.sockets.emit('highlightPlayerTwo');
    });

    socket.on('highlightPlayerThree', function(){
        console.log('highlightPlayerThree');
        io.sockets.emit('highlightPlayerThree');
    });

    socket.on('highlightRed', function(){
        console.log('highlightRed');
        io.sockets.emit('highlightRed');
    });

    socket.on('highlightBlue', function(){
        console.log('highlightBlue');
        io.sockets.emit('highlightBlue');
    });

    socket.on('highlightStoneTreasure', function(){
        console.log('highlightStoneTreasure');
        io.sockets.emit('highlightStoneTreasure');
    });

    socket.on('highlightLionTreasure', function(){
        console.log('highlightLionTreasure');
        io.sockets.emit('highlightLionTreasure');
    });


    socket.on('highlightFloodTreasure', function(){
        console.log('highlightFloodTreasure');
        io.sockets.emit('highlightFloodTreasure');
    });


    socket.on('highlightFireTreasure', function(){
        console.log('highlightFireTreasure');
        io.sockets.emit('highlightFireTreasure');
    });


});