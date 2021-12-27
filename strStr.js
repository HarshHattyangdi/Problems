var strStr = function (haystack, needle) {
  if (needle === "") return 0; //If needle is an empty return 0
  if (haystack.includes(needle)) {
    //If haystack has the needle proceed further
    return haystack.indexOf(needle); //Return index where needle begins
  } else {
    return -1; //If needle is not a part of the haystack return -1
  }
};
