var q = ''
var id = ''
var correctAns = 0;
var incorrectAns = 0;
var unUnswered = 0;
var counter = 0;
var timer = 10;

var clicked = false
var finished = false;

var timeInterval;
var first;

var correctAnsImage = 'https://media1.giphy.com/media/l41lUjUgLLwWrz20w/200w.webp?cid=790b76115d32f7ce586646342e623013&rid=200w.webp'
var wrongAnsImage = 'https://media1.tenor.com/images/21b14700654046f1d1789e6744093a6d/tenor.gif?itemid=10856212'
var thinkingImage = 'https://media0.giphy.com/media/xUPGcJYhYHA3IrAO1G/200w.webp?cid=790b76115d32ec592e7039444510d8f1&rid=200w.webp'

$(document).ready(function () {
    // Handler for .ready() called.

    $("#start").click(function () {
        $(".lead").hide()
        $("#restart").removeClass("invisible")
        $("#timerUI").removeClass("invisible")

        $("#resultImage").removeClass("d-none")
        $("#mainContent").removeClass("d-none")
        // $("#scoreResults").removeClass("d-none")

        $(".table").removeClass("d-none")
        display()
    })

    // click on rows
    $("table").delegate("td", "click", function () {

        // console.log(counter)
        if (counter <= (mcqs.length) && !clicked) {
            clicked = true;
            if (this.id == mcqs[counter].ans()) {
                id = "#" + this.id;
                $(id).addClass("table-success")
                $(".c").removeClass("table-warning")
                $("#resultImage").attr("src", correctAnsImage)

                correctAns += 1;
            } else {
                id = "#" + this.id;
                $(id).addClass("table-warning")
                $(".c").removeClass("table-success")
                $("#resultImage").attr("src", wrongAnsImage)
                incorrectAns += 1

            }
           
        }       
    });

    //   retrieving mcqs 
function display() {
    displayQuestion()
    first = setInterval(firstTimer, 1000);

    timeInterval = setInterval(() => {
        displayTimer()
        displayQuestion();
    }, 10000);    
}

function firstTimer() {
    if (timer <= 0) {
        clearInterval(first)
    } else {

        timer--;
    }
    $("#timerUI").text("0" + timer)
}

function displayTimer() {

    if (clicked) {
        timer = 10
    }

    if (timer <= 1 && timer >= 0) {
        $("#timerUI").text("Time Out")
        if (timer == 1) {
            timer--
        }

    } else if (timer >= 2) {
        timer--
        $("#timerUI").text("0" + timer)
    }
}

function displayQuestion() {
    if (counter <= mcqs.length - 1) {
        $(".c").removeClass("table-success table-warning")
        $("#resultImage").attr("src", thinkingImage)
        clicked = false

        timer = 10
                
        $("#question").text(mcqs[counter].q)
        $("#a").html("<li>" + mcqs[counter].a + "</li>")
        $("#b").html("<li>" + mcqs[counter].b + "</li>")
        $("#c").html("<li>" + mcqs[counter].c + "</li>")
        $("#d").html("<li>" + mcqs[counter].d + "</li>")

        if (counter < mcqs.length - 1) {
            counter++;
        } else {
            clearInterval(timeInterval)
            displayResults()
        }
    }
}



function displayResults() {
    $("table").empty()
    $("#resultImage").attr("src", "https://pngimage.net/wp-content/uploads/2018/06/result-png-3.png")
    unUnswered = mcqs.length - (correctAns + incorrectAns)
    var _totalCorrectAns = $("<p>Correct Answers: " + correctAns + "</p>")
    var _totalIncorrectAns = $("<p>Incorrect Answers: " + incorrectAns + "</p>")
    var _totalUnAnswered = $("<p>No Answers: " + unUnswered + "</p>")

    $("#scoreResults").removeClass("d-none")
    $(".myclass").removeClass("d-none")
console.log(timeInterval)

    $("#scoreResults").append(_totalCorrectAns)
    $("#scoreResults").append(_totalIncorrectAns)
    $("#scoreResults").append(_totalUnAnswered)

    $("#timerUI").text("Total Time: " + mcqs.length * 10 + " seconds")
    clearInterval(timeInterval)

}

});

