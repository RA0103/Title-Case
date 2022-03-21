/*
A string is considered to be in title case if each word in the string is either(a)
capitalised (that is, only the first letter of the word is in uppercase) or (b)
considered to be an exception and put entirely into lowercase unless it is the first
word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of
exceptions (minor words). The list of minor words will be given as a string with each
word separated by a space. Your function should ignore the case of the minor words
string -- it should behave in the same way even if the case of the minor word string
is changed.

// Arguments (Haskell)

 First argument: space-delimited list of minor words that must always be lowercase
except for the first word in the string.
 Second argument: the original string to be converted

// Arguments (Other languages)

 First argument(required): the original string to be converted.
 Second argument(optional): space-delimited list of minor words that must always be
lowercase except for the first word in the string. The Javascript/CoffeeScript will
pass undefined when this argument is unused.

// Example:

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'


titleCase('THE WIND IN THE WILLOWS', 'The in') // should return: 'The Wind in the Willows'


titleCase('the quick brown for') // should return: 'The Quick Brown For'

*/

function titleCase(title, minorWords = "") {
  // minorWords = '' shunaqa qilib qo'ysa ham bo'ladi. shunda biz minor uchun ochgan
  //   if mizni o'chirib yuborishimiz kerak

  let minorArray = minorWords.toLowerCase().split("");

  let titleArray = title.toLowerCase().split("");

  if (titleArray.length === 0) {
    return "";
  }
  titleArray[0] = capitalize(titleArray[0]);

  for (let i = 0; i < titleArray.length; i++) {
    if (minorArray.indexOf(titleArray[i]) === -1) {
      titleArray[i] = capitalize(titleArray[i]);
    }
  }

  return titleArray.join("");
}

let capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

console.log(titleCase("a clash of KINGS", "a an the of"));

// That's for capitalize first word

// let capitalised = (str) => {
//   return str[0].toUpperCase() + str.slice(1);
// };
// console.log(capitalised("sdf"));
