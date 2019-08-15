var paragraph = $(".q");

var buttonone = $(".r");
var guess = ["Action Against Hunger, a global humanitarian organization that takes decisive action against the causes and effects of hunger in 47 countries, impacting 21 million people worldwide.","Generosity, a nonprofit that brings clean water, medical aid, education, family support, and more to people all over the world.","Blood:water, an equipping agency that partners with African grassroots organizations to address the water and HIV/AIDS crises."]
buttonone.on("click", doSomething);
function doSomething() {
  console.log("click me");
  var random = Math.random()* guess.length;
  var rounded = Math.floor(random);
  var itisme = guess[rounded];
  paragraph.text(itisme);
}
