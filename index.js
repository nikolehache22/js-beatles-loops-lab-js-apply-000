function theBeatlesPlay( musicians, instruments ) {
  var allMusicians = [];
  for ( var i = 0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + " plays " + instruments[i])
  }
  return allMusicians;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var i = 0;
  while ( i < facts.length ) {
    facts.push(facts[i] + "!!!");
    i++;
    return facts;
  }
  var newFacts = ["foo","bar"];
  while ( i < newFactsacts.length ) {
    newFacts.push(newFactsacts[i] + "!!!");
    i++;
    return newFacts;
  }
}

function iLoveTheBeatles(num) {
  var beatlesLove = [];
  do { beatlesLove.push("I love the Beatles!"); 
    num++;
  }
  while ( num < 15 );
  
  return beatlesLove;
}