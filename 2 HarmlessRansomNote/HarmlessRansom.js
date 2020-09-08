function harmlessRansomNote(noteText, magazineText) {
  // first convert the strings to proper arrays of words
  let noteArr = editString(noteText);
  let magazineArr = editString(magazineText);

  // if the noteText longer than the magazineText return false
  if (noteArr.length > magazineArr.length) {
    return false;
  }
  let counter = 0; // counter for comparison at the end of for loop

  // check every word in noteText if it exists in magazineText
  for (let i = 0; i < noteArr.length; i++) {
    let word = noteArr[i];
    if (magazineArr.includes(word)) {
      counter++;
      let indexOfWord = magazineArr.indexOf(word);
      magazineArr.splice(indexOfWord, 1);
    } else {
      return false; // if one of the word doesn't exist no need to continue loop
    }
  }
  /* if the counter equal to length of noteArr that means
   every word in the note array exists in the magazine array */
  if (counter === noteArr.length) {
    return true;
  }
}

function editString(str) {
  let editedStr = str
    .replace(/[^a-zA-Z ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .split(" ");
  return editedStr;
}

/*              TEST              */
/*              TEST              */
/*              TEST              */
const note1 =
  "  ,,, this is a secret ,,,  999 code  for this secret algorithm  ??  ";

const magazine1 =
  "Lorem ipsum dolor secret this sit amet, consectetur adipiscing elit. Nunc sit amet purus vestibulum, luctus quam vel, aliquet for ante. Suspendisse tempor, lacus sit amet euismod sagittis, sapien nunc a vestibulum nulla, nec this dapibus algorithm dui is magna ac mi. Praesent purus purus, feugiat eu ex in, congue code lacinia secret tortor.";

const note2 = "quam vel, aliquet for ante. Suspendisse tempor, lacus";
const magazine2 = "quam vel, aliquet for ante. ";

const note3 = "test test test";
const magazine3 = "test Lorem ipsum dolor secret";

const result1 = harmlessRansomNote(note1, magazine1);
const result2 = harmlessRansomNote(note2, magazine2);
const result3 = harmlessRansomNote(note3, magazine3);

console.log(result1); // expected result: TRUE
console.log(result2); // expected result: FALSE
console.log(result3); // expected result: FALSE
