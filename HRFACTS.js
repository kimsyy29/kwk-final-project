var paragraph = $('.t');

var buttonone = $('.buttonone');
buttonone.on("click", doSomething)
var guess = ["Some 795 million people in the world do not have enough food to lead a healthy active life.","The vast majority of the world's hungry people live in developing countries, where 12.9 percent of the population is undernourished.",
"2 billion people don't have a decent toilet of their own.", "785 million people don’t have clean water close to home.", "An estimated 2.5 billion people lack access to improved sanitation", "66 million primary school-age children attend classes hungry across the developing world, with 23 million in Africa alone.", "If women farmers had the same access to resources as men, the number of hungry in the world could be reduced by up to 150 million.", "One out of six children -- roughly 100 million -- in developing countries is underweight.","1.3 billion tons of the food produced worldwide never gets eaten."]
function doSomething() {
  console.log("click me");
  var random = Math.random()* guess.length;
  var rounded = Math.floor(random);
  var itisme = guess[rounded];
  paragraph.text(itisme);
}
