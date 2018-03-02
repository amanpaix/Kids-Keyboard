var rhymeClick = 0;
// 0.1 Function defintion when we click on play button
function play() {
    var name = $("#nameValue").val();
        $("#name").text(name);
        $("div.container").addClass("hidden");
        $("div.container-fluid").removeClass("hidden");
        $(".container").fadeOut(1000);

        function cloky() {
            var clock, date, hour, minute, second;
            var date = new Date();
            hour = date.getHours();
            if (hour > 12) {
                hour = hour % 12;
            }
            minute = date.getMinutes();
            second = date.getSeconds();

            if (hour <= 9) {
                hour = "0" + hour;
            }

            if (minute <= 9) {
                minute = "0" + minute;
            }

            if (second <= 9) {
                second = "0" + second;
            }

            clock = hour + ":" + minute + ":" + second;
            document.getElementById("clock").innerHTML = "<i class ='fa fa-clock-o' aria-hidden='true'></i>" + " " + clock;

            setTimeout(cloky, 1000);
        }
        cloky();
}
//  1. --JQuery Code for Clock placed at Top-Left Corner //
//  1.1 --JQuery Code for Play Button //
$(document).ready(function () {
    // Focuses the text value when we open webpage
    $("#nameValue").focus();
    
    $("#plays").mouseover(function () {
        $("#plays").addClass("animated wobble");
    });

    $("#plays").mouseleave(function () {
        $("#plays").removeClass("animated wobble");
    });

    $("#plays").click(function () {
        play();
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




$(document).ready(function () {

    // 2. Jquery code for Piaon Button placed at the left section of the Page
    // INFO- This code adds the audio tag in "index.html" file when we click on piano button
    $("#piano").click(function () {

        // Reset this variable to 0 so that images won't show when we pressed or clicked keyboard button
        rhymeClick = 0;

        // This adds audio tags in "index.html" which contains to link to Piano Notes music
        $("#change").html('');
        $("#change").html("<div> <audio data-key='65' src='sounds/a65.mp3'></audio><audio data-key='66' src='sounds/a66.mp3'></audio><audio data-key='67' src='sounds/a67.mp3'></audio><audio data-key='68' src='sounds/a68.mp3'></audio><audio data-key='69' src='sounds/a69.mp3'></audio><audio data-key='70' src='sounds/a70.mp3'></audio><audio data-key='71' src='sounds/a71.mp3'></audio><audio data-key='72' src='sounds/a72.mp3'></audio><audio data-key='73' src='sounds/a73.mp3'></audio><audio data-key='74' src='sounds/a74.mp3'></audio><audio data-key='75' src='sounds/a75.mp3'></audio><audio data-key='76' src='sounds/a76.mp3'></audio><audio data-key='77' src='sounds/a77.mp3'></audio><audio data-key='78' src='sounds/a78.mp3'></audio><audio data-key='79' src='sounds/a79.mp3'></audio><audio data-key='80' src='sounds/a80.mp3'></audio><audio data-key='81' src='sounds/a81.mp3'></audio><audio data-key='82' src='sounds/a82.mp3'></audio><audio data-key='83' src='sounds/a83.mp3'></audio><audio data-key='84' src='sounds/a84.mp3'></audio><audio data-key='85' src='sounds/a85.mp3'></audio><audio data-key='86' src='sounds/a86.mp3'></audio><audio data-key='87' src='sounds/a87.mp3'></audio><audio data-key='88' src='sounds/a88.mp3'></audio><audio data-key='89' src='sounds/a89.mp3'></audio><audio data-key='90' src='sounds/a90.mp3'></audio> </div>");

        // This makes button look like it is active when we click on it
        $("#ryhmes").removeClass('activeGrey');
        $("#piano").addClass('activePink');
        $("#games").removeClass('activeGreenish');
        $("#drum").removeClass('activePurple');

        // Hides all the games
        $("#placeGame").addClass("hidden");
        $("#gameGroup").addClass("hidden");
        $("#guessNumber").addClass("hidden");
        $("#mathQuizGame").addClass("hidden");

        // Show keyboard
        $("#keysOfKeyboard").removeClass("hidden");

        // Clear the images which shows at when we click on ryhmes button and press key on keyboard
        $("#images").html('');
    });

    // 3. Jquery code for "Drum Button" placed at the left section of the Page
    // INFO- This code adds the audio tag in "index.html" file when we click on "Drum" button

    $("#drum").click(function () {
        // Reset this variable to 0 so that images won't show when i pressed or clicked keyboard button
        rhymeClick = 0;

        // This adds audio tags in "index.html" which contains to link to Drum Notes music
        $("#change").html('');
        $("#change").html(" <div> <audio data-key='65' src='sounds/clap.wav'></audio><audio data-key='66' src='sounds/hihat.wav'></audio><audio data-key='67' src='sounds/kick.wav' class='audio'></audio> <audio data-key='68' src='sounds/openhat.wav'></audio> <audio data-key='69' src='sounds/boom.wav'></audio><audio data-key='70' src='sounds/ride.wav'></audio><audio data-key='71' src='sounds/snare.wav'></audio><audio data-key='72' src='sounds/tom.wav'></audio> <audio data-key='73' src='sounds/tink.wav'></audio> <audio data-key='74' src='sounds/clap.wav'></audio><audio data-key='75' src='sounds/hihat.wav'></audio><audio data-key='76' src='sounds/kick.wav'></audio><audio data-key='77' src='sounds/openhat.wav'></audio><audio data-key='78' src='sounds/boom.wav'></audio><audio data-key='79' src='sounds/ride.wav'></audio><audio data-key='80' src='sounds/snare.wav'></audio><audio data-key='81' src='sounds/tom.wav'></audio><audio data-key='82' src='sounds/tink.wav'></audio><audio data-key='83' src='sounds/clap.wav'></audio><audio data-key='84' src='sounds/hihat.wav'></audio><audio data-key='85' src='sounds/kick.wav'></audio><audio data-key='86' src='sounds/openhat.wav'></audio><audio data-key='87' src='sounds/boom.wav'></audio><audio data-key='88' src='sounds/ride.wav'></audio><audio data-key='89' src='sounds/snare.wav'></audio><audio data-key='90' src='sounds/tom.wav'></audio></div> ");

        // This makes button look like it is active when we click on it
        $("#ryhmes").removeClass('activeGrey');
        $("#piano").removeClass('activePink');
        $("#games").removeClass('activeGreenish');
        $("#drum").addClass('activePurple');

        // Hides all the games
        $("#placeGame").addClass("hidden");
        $("#gameGroup").addClass("hidden");
        $("#guessNumber").addClass("hidden");
        $("#mathQuizGame").addClass("hidden");

        // Show keyboard
        $("#keysOfKeyboard").removeClass("hidden");

        // Clear the images which shows at when we click on ryhmes button and press key on keyboard
        $("#images").html('');
    });


    // 4. Jquery code for "Rhymes Button" placed at the left section of the Page
    // INFO- This code adds the audio tag in "index.html" file when we click on "Drum" button
    $("#ryhmes").click(function () {

        rhymeClick += 1;
        $("#change").html('');
        $("#change").html("<div> <audio data-key='65' src='sounds/65.mp3'></audio><audio data-key='66' src='sounds/66.mp3'></audio><audio data-key='67' src='sounds/67.mp3'></audio><audio data-key='68' src='sounds/68.mp3'></audio><audio data-key='69' src='sounds/69.mp3'></audio><audio data-key='70' src='sounds/70.mp3'></audio><audio data-key='71' src='sounds/71.mp3'></audio><audio data-key='72' src='sounds/72.mp3'></audio><audio data-key='73' src='sounds/73.mp3'></audio><audio data-key='74' src='sounds/74.mp3'></audio><audio data-key='75' src='sounds/75.mp3'></audio><audio data-key='76' src='sounds/76.mp3'></audio><audio data-key='77' src='sounds/77.mp3'></audio><audio data-key='78' src='sounds/78.mp3'></audio><audio data-key='79' src='sounds/79.mp3'></audio><audio data-key='80' src='sounds/80.mp3'></audio><audio data-key='81' src='sounds/81.mp3'></audio><audio data-key='82' src='sounds/82.mp3'></audio><audio data-key='83' src='sounds/83.mp3'></audio><audio data-key='84' src='sounds/84.mp3'></audio><audio data-key='85' src='sounds/85.mp3'></audio><audio data-key='86' src='sounds/86.mp3'></audio><audio data-key='87' src='sounds/87.mp3'></audio><audio data-key='88' src='sounds/88.mp3'></audio><audio data-key='89' src='sounds/89.mp3'></audio><audio data-key='90' src='sounds/90.mp3'></audio></div>");

        // This makes button look like it is active when we click on it
        $("#ryhmes").addClass('activeGrey');
        $("#piano").removeClass('activePink');
        $("#games").removeClass('activeGreenish');
        $("#drum").removeClass('activePurple');

        // Hides all the games
        $("#placeGame").addClass("hidden");
        $("#gameGroup").addClass("hidden");
        $("#guessNumber").addClass("hidden");
        $("#mathQuizGame").addClass("hidden");

        // Show Keyboard
        $("#keysOfKeyboard").removeClass("hidden");

        // Clear the images which shows at when we click on ryhmes button and press key on keyboard
        $("#images").html('');
    });


    // 5. Jquery code for "Game Button" placed at the left section of the Page
    // INFO- Shows all the Game and Code for Them
    $("#games").click(function () {

        // Remove all audio tags in "index.html" 
        $("#change").html('');

        // Adds three button in "index.html" 
        //  1.For Math Quiz      2.Guess the Number          3.Guess the Image
        $("#gameGroup").html("<button id='mathQuiz' class='btn grey'><i class='fa fa-medium' aria-hidden='true'></i> Math Quiz</button><button id='guessTheNumber' class='btn pink guessTheNumber'><i class='fa fa-question-circle' aria-hidden='true'></i> Guess the Number</button><button id='kbc' class='btn greenish guessTheGame'><i class='fa fa-eye' aria-hidden='true'></i> Guess the Image</button>");

        // Show Name of all Game at the Top like Math Quiz , Guess the Number , Guess The Image
        $("#gameGroup").removeClass("hidden");

        // Hide Keyboard
        $("#keysOfKeyboard").addClass("hidden");


        // This makes button look like it is active when we click on it
        $("#ryhmes").removeClass('activeGrey');
        $("#piano").removeClass('activePink');
        $("#games").addClass('activeGreenish');
        $("#drum").removeClass('activePurple');

        // Clear the images which shows at when we click on ryhmes button and press key on keyboard
        $("#images").html('');

        // For Math Quiz
        $("#info").text("Type in the box!");


        // 5.1 -- Guess The Image
        // JQuery Code for "Guess the Image button"

        $("#kbc").click(function () {
            var rightAns, wa1, wa2, wa3;
            wa1 = null;
            wa2 = null;
            wa3 = null;
            rightAns = null;
            var preNum = 0;

            // Show "Guess the Image" Game
            $("#placeGame").removeClass("hidden");

            // Hide Other Games
            $("#mathQuizGame").addClass("hidden");
            $("#guessNumber").addClass("hidden");

            // Makes Button look like it is Active
            $("#mathQuiz").removeClass('activeGrey');
            $("#guessTheNumber").removeClass('activeGreenish');
            $("#games").removeClass('activeGreenish');
            $("#kbc").addClass('activeGreenish');


            $("#ansNum0").removeClass("rightAnswer rightAnswer:hover");
            $("#ansNum1").removeClass("rightAnswer rightAnswer:hover");
            $("#ansNum2").removeClass("rightAnswer rightAnswer:hover");
            $("#ansNum3").removeClass("rightAnswer rightAnswer:hover");


            // Generate Random Image from 26 Images 
            var imgNum = Math.floor(Math.random() * 26);

            // Avoid Repetition of Same Image
            while (preNum == imgNum) {
                imgNum = Math.floor(Math.random() * 26);
            }
            preNum = imgNum;
            imgNum += 65;
            console.log("image no " + imgNum);
            var string = "<img src='img/" + imgNum + ".png' class='imageAtGame'>"
            $("#placeImage").html(string);

            var alphabet = [
              "Apple", "Bus", "Car", "Dog", "Egg", "Fish",
                "Goat", "Hat", "Igloo", "Jeep", "Kangaroo", "Lamp",
                "Mango", "Net", "Ox", "Peacock", "Queen", "Rabbit",
                "Snake", "Train", "Umbrella", "Vegetables", "Well", "X-Ray",
                "Yoga", "Zoo"
            ];

            //For Right Answer
            rightAns = null;
            var ansNum = Math.floor(Math.random() * 4);
            var textVal = imgNum - 65;
            rightAns = ansNum;
            console.log("Right answer: " + rightAns);
            $("#ansNum" + ansNum + "").text(alphabet[textVal]);

            //For 1st Wrong Answer
            var preAnsNum1 = ansNum;
            ansNum = Math.floor(Math.random() * 4);
            while (preAnsNum1 == ansNum) {
                ansNum = Math.floor(Math.random() * 4);
            }
            wa1 = null;
            wa1 = ansNum;
            console.log("wa1: " + wa1);
            var wrongAns1 = Math.floor(Math.random() * 26);
            while (wrongAns1 == textVal) {
                var wrongAns1 = Math.floor(Math.random() * 26);
            }
            $("#ansNum" + ansNum + "").text(alphabet[wrongAns1]);

            //For 2nd Wrong Answer
            var preAnsNum2 = ansNum;
            ansNum = Math.floor(Math.random() * 4);
            while ((ansNum == preAnsNum1) || (ansNum == preAnsNum2)) {
                ansNum = Math.floor(Math.random() * 4);
            }
            wa2 = null;
            wa2 = ansNum;
            console.log("wa2: " + wa2);
            var wrongAns2 = Math.floor(Math.random() * 25);
            while ((wrongAns2 == wrongAns1) || (wrongAns2 == textVal)) {
                wrongAns2 = Math.floor(Math.random() * 25);
            }
            $("#ansNum" + ansNum).text(alphabet[wrongAns2]);

            //For 3rd Wrong Answer
            var preAnsNum3 = ansNum;
            ansNum = Math.floor(Math.random() * 4);
            while ((ansNum == preAnsNum1) || (ansNum == preAnsNum2) || (ansNum == preAnsNum3)) {
                ansNum = Math.floor(Math.random() * 4);
            }
            wa3 = null;
            wa3 = ansNum;
            console.log("wa3: " + wa3);
            var wrongAns3 = Math.floor(Math.random() * 25);
            while ((wrongAns3 == wrongAns1) || (wrongAns3 == wrongAns2) || (wrongAns3 == textVal)) {
                wrongAns3 = Math.floor(Math.random() * 25);
            }
            $("#ansNum" + ansNum).text(alphabet[wrongAns3]);

            $("#ansNum0").removeClass("rightAnswer rightAnswer:hover wrongAnswer wrongAnswer:hover");
            $("#ansNum1").removeClass("rightAnswer rightAnswer:hover wrongAnswer wrongAnswer:hover");
            $("#ansNum2").removeClass("rightAnswer rightAnswer:hover wrongAnswer wrongAnswer:hover");
            $("#ansNum3").removeClass("rightAnswer rightAnswer:hover wrongAnswer wrongAnswer:hover");

            // When click on Right Answer
            $("#ansNum" + rightAns).click(function () {
                $("#ansNum" + rightAns).addClass("rightAnswer rightAnswer:hover");
                rightAns = null;
                wa1 = null;
                wa2 = null;
                wa3 = null;
                $("#audioPlay").html("<audio src='sounds/right.mp3' autoplay></audio>");
            });

            // When Click on Wrong Answer 1
            $("#ansNum" + wa1).click(function () {
                $("#ansNum" + wa1).addClass("wrongAnswer wrongAnswer:hover");
                wa1 = null;
                $("#audioPlay").html("<audio src='sounds/wrong.mp3' autoplay></audio>");
            });

            // When Click on Wrong Answer 2
            $("#ansNum" + wa2).click(function () {
                $("#ansNum" + wa2).addClass("wrongAnswer wrongAnswer:hover");
                wa2 = null;
                $("#audioPlay").html("<audio src='sounds/wrong.mp3' autoplay></audio>");

            });

            // When Click on Wrong Answer 3
            $("#ansNum" + wa3).click(function () {
                $("#ansNum" + wa3).addClass("wrongAnswer wrongAnswer:hover");
                wa3 = null;
                $("#audioPlay").html("<audio src='sounds/wrong.mp3' autoplay></audio>");

            });


        });
        // 5.1 "Guess the Image" End here



        // 5.2 "Guess the Number" 
        $("#guessTheNumber").click(function () {

            // Show "Guess the Number" Game
            $("#guessNumber").removeClass("hidden");

            // Make look like button "Guess the Number" is Active       
            $("#games").removeClass('activeGreenish');
            $("#mathQuiz").removeClass('activeGrey');
            $("#guessTheNumber").addClass('activeGreenish');
            $("#kbc").removeClass('activeGreenish');

            // Hide other Games 
            $("#placeGame").addClass("hidden");
            $("#mathQuizGame").addClass("hidden");



            // Generate Random Number which will be guessed by kid
            guessme = Math.floor(Math.random() * (50) + 1);
            speech = 'Guess my number (from 1 to 50)';

            // Shows message in text box in Game
            $("#prompt").val(speech);

            // Focus the input text in Game
            $("#inputVal").focus();

            // Testing
            console.log("Guess Me:" + guessme);

            // Further code for this game found after 5.3
        });
        // 5.2 "Guess the Number" End here





        // 5.3 "Math Quiz"
        $("#mathQuiz").click(function () {

            // Show "Math Quiz" Game
            $("#mathQuizGame").removeClass("hidden");

            // Hide Othe Games
            $("#placeGame").addClass("hidden");
            $("#guessNumber").addClass("hidden");

            // Makes button "Math Quiz" look like Active
            $("#mathQuiz").addClass('activeGrey');
            $("#guessTheNumber").removeClass('activeGreenish');
            $("#kbc").removeClass('activeGreenish');
            $("#games").removeClass('activeGreenish');


            $("#info").text("Type your Answer!");
            $("#answer").focus();
            $("#answer").val("");

            // Generate First Number
            firstNum = Math.floor(Math.random() * (10) + 1);
            // Generate Second Number
            secondNum = Math.floor(Math.random() * (10) + 1);
            // Generate Mathematical Operator i.e "+" , "-" , "*"
            operator = Math.floor(Math.random() * 3);

            // Swap if Second number is Greater than first number
            // So that kid don't get confused in Subtration type questions
            if (secondNum > firstNum) {
                var temp = firstNum;
                firstNum = secondNum;
                secondNum = firstNum;
            }

            // Show Question 
            $("#firstNum").text(firstNum);
            $("#secondNum").text(secondNum);
            if (operator == 0) {
                $("#operator").text("+");
                answer = firstNum + secondNum;
            } else if (operator == 1) {
                $("#operator").text("-");
                answer = firstNum - secondNum;

            } else if (operator == 2) {
                $("#operator").text("X");
                answer = firstNum * secondNum;
            }

            // Focus the Text box in Game 
            $("#answer").focus();

            // Testing
            console.log("First Num:" + firstNum);
            console.log("Second Num:" + secondNum);
            console.log("Answer:" + answer);
            console.log("Operator:" + operator);

            // Further code for "Check" button found at end of file

        });
        // 5.3 End here
    });
    // 5."Games Button" End here




    // This is a code for "Guess the Number" Game
    // Contains code when we click on "Guess" button in "Guess the Number" Game
    var guessme = null,
        speech = null,
        guess = null;
    $("#guess").click(function () {

        $("#inputVal").focus();
        guess = $("#inputVal").val();
        $("#inputVal").val('');
        console.log("Guessed val:" + guess);
        var speech = '"' + guess + '" does not make sense to me.';



        if (guess == guessme) {
            $("#prompt").val("Contratulation!");
            speech = 'Congratulations';
            $("#guessTheNumber").focus();
            // IF we guessed right this will play audio
            $("#audioPlay").html("<audio src='sounds/right.mp3' autoplay></audio>");
        }

        if (guessme < guess) {
            speech = 'Less than ' + guess;
        }

        if (guessme > guess) {
            speech = 'Greater than ' + guess;
        }

        if (guess == '') {
            speech = 'You didn\'t guess anything!'
        }

        // Show info. in text box like number > or number < or congratulation you guessed the number
        $("#prompt").val(speech);

    });

    function playSound(e) {
        // Testing 
        console.log("ASCII Code of KEY pressed:" + e.keyCode);

        // Javascript code for selecting "Audio" tag and "div" tag
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;

        // This code will work if we click on Rhymes button only!
        if (rhymeClick > 0) {
            // Shows Image at the bottom Left
            $("#images").html('<img src="img/' + e.keyCode + '.png" class="img"> ');

            // Pause audio of all other tags except one which is pressed.
            // So that audio of current key and previous key won't conflict.
            for (var i = 65; i <= 90; i++) {
                if (i != e.keyCode) {
                    var audi = document.querySelector(`audio[data-key="${i}"]`);
                    audi.pause();
                }
            }
        }

        // set the audio to the begining
        audio.currentTime = 0;

        // play the audio
        audio.play();

        // Add animation effect when we press any key in keyboard
        $('div[data-key="' + e.keyCode + '"]').addClass("playing");

        // This function will call after 200ms
        // where 200 shows the delay time
        setTimeout(function () {
            $('div[data-key="' + e.keyCode + '"]').removeClass("playing");
        }, 200);
    }

    // Listen for event
    window.addEventListener('keydown', playSound);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// This contains the code for "Math Quiz" Game
// contains code when we click on "Check button" in the "Math Quiz" Game
var firstNum = null,
    secondNum = null,
    answer = null,
    operator = null,
    ansByKid = null;
$(document).ready(function () {
    $("#checkAns").click(function () {
        // Store the given answer in Variable
        ansByKid = $("#answer").val();


        if (ansByKid == '') {

            $("#info").text("Please Answer Me!");
            $("#answer").focus();

        } else if (ansByKid == answer) {

            $("#info").text("Right Answer");
            $("#info").css("background-color", "green");
            $("#audioPlay").html("<audio src='sounds/right.mp3' autoplay></audio>");

        } else if (ansByKid != answer) {

            $("#audioPlay").html("<audio src='sounds/wrong.mp3' autoplay></audio>");
            $("#answer").val("");
            $("#answer").focus();
            $("#info").text("Wrong Answer, try Again!");
            $("#info").css("background-color", "red");
        }
    });



});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
