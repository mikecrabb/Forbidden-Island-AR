function notificationOn() {
    var headerText = $("#headerToMove").val();
    var mainText = $("#textToMove").val();

    $(".genericNoteTitle").text(headerText);
    $(".genericNoteText").text(mainText);
    $(".genericNotification").fadeIn("slow", function () {
    });
}

function notificationOff() {
    $(".genericNotification").fadeOut("slow", function () {
    });
}

function NavNotificationOn() {
    $(".playerTurn").fadeIn("slow", function () {
    });
    $(".playerImage").fadeIn("slow", function () {
    });
}

function NavNotificationOff() {
    $(".playerTurn").fadeOut("slow", function () {
    });
    $(".playerImage").fadeOut("slow", function () {
    });
}

function moveHelecopter() {
    $(".helecopter").animate({
        left: '30%',
        top: '57%'
    }, 2000);
    $(".genericNoteTitle").text('Time to escape!');
    $(".genericNoteText").text('Get everyone to the helecopter before the island sinks');
    $(".genericNotification").fadeIn(1000, function () {
    });
}

function generateLightning() {
    $(".lightning").delay(500). fadeIn(2). delay(100). fadeOut(2). delay(700).fadeIn(2). delay(100). fadeOut(2). delay(300).fadeIn(2). delay(50). fadeOut(2);

}

function randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function stopRain() {
    $("div").remove(".drop");
}

function createRain(nbDrop) {
    for (i = 1; i < nbDrop; i++) {
        var dropLeft = randRange(0, 900);
        var dropTop = randRange(-1000, 700);
        $('.rain').append('<div class="drop" id="drop' + i + '"></div>');
        $('#drop' + i).css('left', dropLeft);
        $('#drop' + i).css('top', dropTop);
    }

}

function floodArea(areaClass) {
    var color = $(areaClass).css('background-color');
    console.log($(areaClass).css('background-color'))
    if (color === 'rgb(30, 144, 255)') {
        console.log("turning black");
        $(areaClass).css('background-color', 'black');
    } else {
        $(areaClass).css('background-color', 'dodgerblue');
        console.log("turning blue");
    }
}

function startPulsing() {
    pulsing = 'on';
    pulse();
}

function stopPulsing() {
    pulsing = 'off';
    $('.p11').css('background-color', 'black');
    $('.p12').css('background-color', 'black');
    $('.p21').css('background-color', 'black');
    $('.p22').css('background-color', 'black');
    $('.p23').css('background-color', 'black');
    $('.p24').css('background-color', 'black');
    $('.p31').css('background-color', 'black');
    $('.p32').css('background-color', 'black');
    $('.p33').css('background-color', 'black');
    $('.p34').css('background-color', 'black');
    $('.p35').css('background-color', 'black');
    $('.p36').css('background-color', 'black');
    $('.p41').css('background-color', 'black');
    $('.p42').css('background-color', 'black');
    $('.p43').css('background-color', 'black');
    $('.p44').css('background-color', 'black');
    $('.p45').css('background-color', 'black');
    $('.p46').css('background-color', 'black');
    $('.p51').css('background-color', 'black');
    $('.p52').css('background-color', 'black');
    $('.p53').css('background-color', 'black');
    $('.p54').css('background-color', 'black');
    $('.p61').css('background-color', 'black');
    $('.p62').css('background-color', 'black');
    oneOnePulse = 'off';
    oneTwoPulse = 'off';
    twoOnePulse = 'off';
    twoTwoPulse = 'off';
    twoThreePulse = 'off';
    twoFourPulse = 'off';
    threeOnePulse = 'off';
    threeTwoPulse = 'off';
    threeThreePulse = 'off';
    threeFourPulse = 'off';
    threeFivePulse = 'off';
    threeSixPulse = 'off';
    fourOnePulse = 'off';
    fourTwoPulse = 'off';
    fourThreePulse = 'off';
    fourFourPulse = 'off';
    fourFivePulse = 'off';
    fourSixPulse = 'off';
    fiveOnePulse = 'off';
    fiveTwoPulse = 'off';
    fiveThreePulse = 'off';
    fiveFourPulse = 'off';
    sixOnePulse = 'off';
    sixTwoPulse = 'off';

}

var pulsing = 'off';
var oneOnePulse = 'off';
var oneTwoPulse = 'off';
var twoOnePulse = 'off';
var twoTwoPulse = 'off';
var twoThreePulse = 'off';
var twoFourPulse = 'off';
var threeOnePulse = 'off';
var threeTwoPulse = 'off';
var threeThreePulse = 'off';
var threeFourPulse = 'off';
var threeFivePulse = 'off';
var threeSixPulse = 'off';
var fourOnePulse = 'off';
var fourTwoPulse = 'off';
var fourThreePulse = 'off';
var fourFourPulse = 'off';
var fourFivePulse = 'off';
var fourSixPulse = 'off';
var fiveOnePulse = 'off';
var fiveTwoPulse = 'off';
var fiveThreePulse = 'off';
var fiveFourPulse = 'off';
var sixOnePulse = 'off';
var sixTwoPulse = 'off';

function pulse() {
    if (pulsing == 'on') {
        if (oneOnePulse == 'on') {
            $('.oneOne-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (oneTwoPulse == 'on') {
            $('.oneTwo-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (twoOnePulse == 'on') {
            $('.twoOne-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (twoTwoPulse == 'on') {
            $('.twoTwo-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (twoThreePulse == 'on') {
            $('.twoThree-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (twoFourPulse == 'on') {
            $('.twoFour-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (threeOnePulse == 'on') {
            $('.threeOne-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (threeTwoPulse == 'on') {
            $('.threeTwo-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (threeThreePulse == 'on') {
            $('.threeThree-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (threeFourPulse == 'on') {
            $('.threeFour-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (threeFivePulse == 'on') {
            $('.threeFive-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (threeSixPulse == 'on') {
            $('.threeSix-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (fourOnePulse == 'on') {
            $('.fourOne-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (fourTwoPulse == 'on') {
            $('.fourTwo-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (fourThreePulse == 'on') {
            $('.fourThree-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (fourFourPulse == 'on') {
            $('.fourFour-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (fourFivePulse == 'on') {
            $('.fourFive-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (fourSixPulse == 'on') {
            $('.fourSix-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (fiveOnePulse == 'on') {
            $('.fiveOne-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (fiveTwoPulse == 'on') {
            $('.fiveTwo-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (fiveThreePulse == 'on') {
            $('.fiveThree-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (fiveFourPulse == 'on') {
            $('.fiveFour-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (sixOnePulse == 'on') {
            $('.sixOne-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
        if (sixTwoPulse == 'on') {
            $('.sixTwo-square').delay(200).fadeOut('500').delay(50).fadeIn('500');
        }
    } else {
        return;
    }
}

function swOneOne() {
    if (oneOnePulse == 'on') {
        oneOnePulse = 'off';
        $('.p11').css('background-color', 'black');
    } else {
        oneOnePulse = 'on';
        $('.p11').css('background-color', 'yellow');
    }
}

function swOneTwo() {
    if (oneTwoPulse == 'on') {
        oneTwoPulse = 'off';
        $('.p12').css('background-color', 'black');
    } else {
        oneTwoPulse = 'on';
        $('.p12').css('background-color', 'yellow');
    }
}

function swTwoOne() {
    if (twoOnePulse == 'on') {
        twoOnePulse = 'off';
        $('.p21').css('background-color', 'black');
    } else {
        twoOnePulse = 'on';
        $('.p21').css('background-color', 'yellow');
    }
}

function swTwoTwo() {
    if (twoTwoPulse == 'on') {
        twoTwoPulse = 'off';
        $('.p22').css('background-color', 'black');
    } else {
        twoTwoPulse = 'on';
        $('.p22').css('background-color', 'yellow');
    }
}

function swTwoThree() {
    if (twoThreePulse == 'on') {
        twoThreePulse = 'off';
        $('.p23').css('background-color', 'black');
    } else {
        twoThreePulse = 'on';
        $('.p23').css('background-color', 'yellow');
    }
}

function swTwoFour() {
    if (twoFourPulse == 'on') {
        twoFourPulse = 'off';
        $('.p24').css('background-color', 'black');
    } else {
        twoFourPulse = 'on';
        $('.p24').css('background-color', 'yellow');
    }
}

function swThreeOne() {
    if (threeOnePulse == 'on') {
        threeOnePulse = 'off';
        $('.p31').css('background-color', 'black');
    } else {
        threeOnePulse = 'on';
        $('.p31').css('background-color', 'yellow');
    }
}

function swThreeTwo() {
    if (threeTwoPulse == 'on') {
        threeTwoPulse = 'off';
        $('.p32').css('background-color', 'black');
    } else {
        threeTwoPulse = 'on';
        $('.p32').css('background-color', 'yellow');
    }
}

function swThreeThree() {
    if (threeThreePulse == 'on') {
        threeThreePulse = 'off';
        $('.p33').css('background-color', 'black');
    } else {
        threeThreePulse = 'on';
        $('.p33').css('background-color', 'yellow');
    }
}

function swThreeFour() {
    if (threeFourPulse == 'on') {
        threeFourPulse = 'off';
        $('.p34').css('background-color', 'black');
    } else {
        threeFourPulse = 'on';
        $('.p34').css('background-color', 'yellow');
    }
}

function swThreeFive() {
    if (threeFivePulse == 'on') {
        threeFivePulse = 'off';
        $('.p35').css('background-color', 'black');
    } else {
        threeFivePulse = 'on';
        $('.p35').css('background-color', 'yellow');
    }
}

function swThreeSix() {
    if (threeSixPulse == 'on') {
        threeSixPulse = 'off';
        $('.p36').css('background-color', 'black');
    } else {
        threeSixPulse = 'on';
        $('.p36').css('background-color', 'yellow');
    }
}

function swFourOne() {
    if (fourOnePulse == 'on') {
        fourOnePulse = 'off';
        $('.p41').css('background-color', 'black');
    } else {
        fourOnePulse = 'on';
        $('.p41').css('background-color', 'yellow');
    }
}

function swFourTwo() {
    if (fourTwoPulse == 'on') {
        fourTwoPulse = 'off';
        $('.p42').css('background-color', 'black');
    } else {
        fourTwoPulse = 'on';
        $('.p42').css('background-color', 'yellow');
    }
}

function swFourThree() {
    if (fourThreePulse == 'on') {
        fourThreePulse = 'off';
        $('.p43').css('background-color', 'black');
    } else {
        fourThreePulse = 'on';
        $('.p43').css('background-color', 'yellow');
    }
}

function swFourFour() {
    if (fourFourPulse == 'on') {
        fourFourPulse = 'off';
        $('.p44').css('background-color', 'black');
    } else {
        fourFourPulse = 'on';
        $('.p44').css('background-color', 'yellow');
    }
}

function swFourFive() {
    if (fourFivePulse == 'on') {
        fourFivePulse = 'off';
        $('.p45').css('background-color', 'black');
    } else {
        fourFivePulse = 'on';
        $('.p45').css('background-color', 'yellow');
    }
}

function swFourSix() {
    if (fourSixPulse == 'on') {
        fourSixPulse = 'off';
        $('.p46').css('background-color', 'black');
    } else {
        fourSixPulse = 'on';
        $('.p46').css('background-color', 'yellow');
    }
}

function swFiveOne() {
    if (fiveOnePulse == 'on') {
        fiveOnePulse = 'off';
        $('.p51').css('background-color', 'black');
    } else {
        fiveOnePulse = 'on';
        $('.p51').css('background-color', 'yellow');
    }
}

function swFiveTwo() {
    if (fiveTwoPulse == 'on') {
        fiveTwoPulse = 'off';
        $('.p52').css('background-color', 'black');
    } else {
        fiveTwoPulse = 'on';
        $('.p52').css('background-color', 'yellow');
    }
}

function swFiveThree() {
    if (fiveThreePulse == 'on') {
        fiveThreePulse = 'off';
        $('.p53').css('background-color', 'black');
    } else {
        fiveThreePulse = 'on';
        $('.p53').css('background-color', 'yellow');
    }
}

function swFiveFour() {
    if (fiveFourPulse == 'on') {
        fiveFourPulse = 'off';
        $('.p54').css('background-color', 'black');
    } else {
        fiveFourPulse = 'on';
        $('.p54').css('background-color', 'yellow');
    }
}

function swSixOne() {
    if (sixOnePulse == 'on') {
        sixOnePulse = 'off';
        $('.p61').css('background-color', 'black');
    } else {
        sixOnePulse = 'on';
        $('.p61').css('background-color', 'yellow');
    }
}

function swSixTwo() {
    if (sixTwoPulse == 'on') {
        sixTwoPulse = 'off';
        $('.p62').css('background-color', 'black');
    } else {
        sixTwoPulse = 'on';
        $('.p62').css('background-color', 'yellow');
    }
}

//HIGHLIGHT FUNCTIONS
function highlightBlue(){
    $('.floodDeck').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');
}

function highlightRed(){
    $('.treasureDeck').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');

}

function highlightPlayerOne(){
    $('.player1').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');

}

function highlightPlayerTwo(){
    $('.player2').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');

}

function highlightPlayerThree(){
    $('.player3').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');
}

function highlightStoneTreasure(){
    $('.stoneIsland').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');
}

function highlightLionTreasure(){
    $('.lionIsland').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');
}

function highlightFloodTreasure(){
    $('.floodIsland').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');
}

function highlightFireTreasure(){
    $('.fireIsland').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');
}

