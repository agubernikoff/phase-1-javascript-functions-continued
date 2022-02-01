function saturdayFun(a = "roller-skate") {
  return `This Saturday, I want to ${a}!`;
}
function mondayWork(a = "go to the office") {
  return `This Monday, I will ${a}.`;
}
function wrapAdjective(flair = "*") {
  return function encouragingPromptFn(adj = "special") {
    return `You are ${flair}${adj}${flair}!`;
  };
}
//wrapAdjective("||")("a hard worker");
