function remove (string) {
  //Check is string ends with "!" with endsWith method
  if (string.endsWith("!")) {
    //If it does, remove it with slice method
    return string.slice(0, -1);
  } else {
    //If it doesn't, return string as is
    return string;
  }
}