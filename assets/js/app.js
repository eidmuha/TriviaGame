var q = ''
$( document ).ready(function() {
    // Handler for .ready() called.
   
    $("#start").click(function(){
        $(".lead").hide()
        $("#restart").removeClass("invisible")
        // alert(t)
        // $(table).css('display', 'inline');
        $(".table").removeClass("d-none")
    console.log("lsjdks")

        displayQuestion()

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
  

//   retrieving mcqs 
function displayQuestion(){    
    q = mcqs[0].q1;
    $("#question").text(q)
    $("#a").text(mcqs[0].a)
    $("#b").text(mcqs[0].b)
    $("#c").text(mcqs[0].c)
    $("#d").text(mcqs[0].d)

}

