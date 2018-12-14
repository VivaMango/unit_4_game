
// calling our getRandomInt function (DEF: BOTTOM OF PAGE) to randomly generate the target number our player must reach to win
var targetNumber = getRandomInt(19-121) //max is 121 because max in getRandomInt is exclusive
console.log(targetNumber , "targetNumber") //FOR TESTING
// using jQuery to display our randomly generated target number on the DOM
$("#numberToGuess").text(targetNumber); // NAN??? TESTING STILL

  //Global counter variable to store our player's score
    var counter = 0;

  //creating a for loop to generate 4 images with random hidden values for our player to click
    for (var i = 0; i < 4; i++) { // i < 4 because we want to randomly generate 4 images with this loop for each game

        // storing our jQuery image handler as a variable to make it easier to manipulate
        var imageToClick = $("<img>");

        //automatically adding our pre-defined css styling .clickImageClass to each image
        imageToClick.addClass("clickImageClass");

        // using jQuery to add the image link attribute to our container
        imageToClick.attr("src", "assets/images/bluepushblank.jpg"); //relative path to our image file

        //using jQuery to store a random integer as an arbitrary data value to call later when our player clicks the image
        imageToClick.attr("dataimageValue", getRandomInt(1,13)); //max is 13 because max in getRandomInt is exclusive

        // Adding each image to the DOM via our HTML container with a pre-named ID
        $("#clickImages").append(imageToClick);
  }

  //defining our click event listener with jQuery to apply to each crystal using the this keyword via jQuery
  $(".clickImageClass").click(function() { //using a locally defined function to each crystal image

    var clickImageValue = ($(this).attr("dataimageValue")); //using the this keyword contextualizes the data attribute we are interacting with onclick we stored earlier to the crystal that was clicked by the player.
    console.log(clickImageValue , "clickImageValue") //logs the clicked image value to the console each time FOR TESTING
    clickImageValue = parseInt(clickImageValue); //converting our image value integer to a string VERIFYS $(THIS) is working
    //for each click, we add the random value stored in this image to our globally defined player score counter variable displayed to the player
    counter += clickImageValue; 

    // Alerts the player an update each time they click this image to their new score.
    alert("New score: " + counter);
    console.log(counter , "counter") //logs counter to the console after each click FOR TESTING

    //DEFINING WIN CONDITIONAL STATEMENT

    //if our player correctly adds up to the target number
    if (counter === targetNumber) { 
      alert("You matched my number! Can you do it again?"); // alert them that they've won the game 
      //ADD RESET FUNCTION HERE
    }
    //or if our player exceeds target number
    else if (counter >= targetNumber) {
      alert("BUST!!! Please try again."); //alert them they've lost the game 
      //ADD RESET FUNCTION HERE
    }

  });

//   Declaring our function to generate a random integer between two values. 
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min)) + min; //getRandomInt is exclusive on the upper bound
  }