function detectPalindrome(text) {
  if (typeof text === 'string') {
    // take off any number of spaces anywhere in the string
    text = text.split(' ').join('');
    return text.split('').reverse().join('') === text;
  } else {
      return false;
  }
}

var sampleText = "hey how are you doing?";

if (process.env.NODE_ENV !== "test") {
  console.log(detectPalindrome(sampleText));
}
