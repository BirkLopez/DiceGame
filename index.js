// first dice playing

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "images/" + "dice" + randomNumber1 + ".png";
  // other option of manipulate the DOM
  // document.getElementsByClassName("img1")[0].setAttribute("src", randomImageSource);
 document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

 // Second dice playing
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "images/" + "dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage);


  // code to write the winner

  if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = " 🎉Player 1 winner";

  }
   else if (randomNumber1 < randomNumber2) {
     document.getElementsByTagName("h1")[0].innerHTML = "🎉Player 2 winner";
   } else {
     document.getElementsByTagName("h1")[0].innerHTML = "🤦‍♂️Draw";
   }
