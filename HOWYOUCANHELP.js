var paragraph = $(".q");

var buttonone = $(".r");
var guess = ["K.I.D.S. (Kids in Distressed Situations): This large organization improves the lives of children living in poverty around the world. They provide new clothes, toys, books, and other products, as well as shelter and medical care. They’re also extremely well-run, spending 99.5% of their budget on programs, rather than fundraising or administrative overhead.", "International Rescue Committee: This enormous organization directed over $350 million to those in need in 2011. They provide emergency aid in 42 countries, aiming to permanently improve life for victims of violence and oppression.", "SIGN Fracture Care International: This non-profit works to provide orthopedic treatment to trauma victims in the developing world by training and equipping local surgeons. Proper treatment minimizes the financial burden placed on trauma victims and their families, giving them hope and fiscal security.", "InterAction: This is a coalition of U.S. based NGOs that are aiming to eliminate poverty on an international scale. The partnerships allow each individual organization to multiply its impact by providing important connections, insight, and capital.", "International Child Care: The Christian health development organization is working to alleviate many of the causes of poverty in Haiti and the Dominican Republic. By providing vital medical care for children and their families, ICC allows them to lead happier, healthier lives in less danger of falling into poverty.", "Action Against Hunger (ACF-USA): This organization’s efforts are primarily aimed at ending global hunger. Their work saves lives by fighting malnutrition, especially in times of crisis or conflict. Programs are integrated with local and national systems to ensure long-term solutions that tackle the underlying causes of malnutrition."]
buttonone.on("click", doSomething);
function doSomething() {
  console.log("click me");
  var random = Math.random()* guess.length;
  var rounded = Math.floor(random);
  var itisme = guess[rounded];
  paragraph.text(itisme);
}

var parag = $(".w");
var buttontwo = $(".y");
var guessit = ["Bowery Mission: Provide meals and care for our neighbors who are making the tough choice between buying food or paying rent.", "Coalition For The Homeless:The Coalition’s youth programs help homeless kids overcome the tremendous obstacles they have endured so they can build brighter futures for themselves.", "The Hoboken Shelter: The Hoboken Shelter’s mission is to be a community partnership that transforms lives by providing meals for the hungry, shelter for the homeless, & services to support people to become housed.", "Volunteers Of America: Volunteers of America is a faith-based human services organization. They are dedicated to helping individuals and families in need create positive and lasting change through social service programs that support and empower them to live safe, healthy and productive lives."]
buttontwo.on("click", doSomething1);
function doSomething1() {
  console.log("click me");
  var random = Math.random()* guess.length;
  var rounded = Math.floor(random);
  var me = guessit[rounded];
  parag.text(me);
}
