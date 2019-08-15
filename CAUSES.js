var paragraph = $(".t");

var buttonone = $(".buttonone");
var guess = ["More than 1.3 billion live in extreme poverty — less than $1.25 a day!","1 billion children worldwide are living in poverty, and according to UNICEF, 22,000 children die each day because of it.","Preventable diseases like diarrhea and pneumonia take the lives of 2 million children a year who are too poor to afford proper treatment.","In 2011, 165 million children under the age 5 were stunted (reduced rate of growth and development) due to chronic malnutrition.","1/4 of all humans live without electricity — approximately 1.6 billion people.","As of 2013, 21.8 million children under 1 year of age worldwide had not received the three recommended doses of vaccine against diphtheria, tetanus and pertussis."]
buttonone.on("click", doSomething);
function doSomething() {
  console.log("click me");
  var random = Math.random()* guess.length;
  var rounded = Math.floor(random);
  var itisme = guess[rounded];
  paragraph.text(itisme);
}
