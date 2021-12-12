function substring(string, s, e) {
  var r = "",
      length = Math.min(string.length, e),
      i = s;

  while (i < length) r += string[i++];
  return r;
}

console.log(substring('My name is mayank bhatt', 0, 7));