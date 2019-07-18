var q = ''
var counter = 0;
$( document ).ready(function() {
    // Handler for .ready() called.
   
    $("#start").click(function(){
        $(".lead").hide()
        $("#restart").removeClass("invisible")
        // alert(t)
        // $(table).css('display', 'inline');
        $(".table").removeClass("d-none")
    console.log("lsjdks")

        display()

        animate()
    })




    // click on rows
$("table").delegate("td", "click", function(){
    
    // console.log(mcqs[0].ans())
    if(this.id == mcqs[0].ans()) 
    console.log("ok")
});
  });

  var $alert = $('.alert');
  var $progressBar = $('.progress');
  
  var progress = 0;      // initial value of your progress bar
  var timeout = 10;      // number of milliseconds between each frame
  var increment = .2;    // increment for each frame
  var maxprogress = 10; // when to leave stop running the animation
  
  function animate() {
      setTimeout(function () {
        $(".progress").removeClass("invisible")

        progress += increment;
        if(progress < maxprogress) {
            $progressBar.attr('value', progress);
            animate();
        } else {
            $progressBar.css('display', 'none');
            
            $alert.css('display', 'inline');
        }
      }, timeout);
  };
  
var timeInterval;
//   retrieving mcqs 
function display(){   
    timeInterval=  setInterval(displayQuestion, 3000) 
    

}

var q = '';
function displayQuestion(){
    // console.log("length:"+mcqs.length)
    q = 'q' + counter;
    if(counter>=mcqs.length){
        clearInterval(timeInterval)
    }else{   

        console.log("Check: "+q)
        // console.log("counter: "+counter)
        // console.log("temp: "+q)
        qustion = mcqs[counter].q;
        console.log("question:"+qustion)
        $("#question").text(qustion)
        $("#a").html("<li>"+mcqs[counter].a+"</li>")
        $("#b").html("<li>"+mcqs[counter].b+"</li>")
        $("#c").html("<li>"+mcqs[counter].c+"</li>")
        $("#d").html("<li>"+mcqs[counter].d+"</li>")
        counter++;
    }
}

