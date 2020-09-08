
    Algorithm - Harmless Ransom Note

Problem: 
You have been given two strings. You have to find out 
whether you can make up the first string with the words
present in the second string.
  Let’s say you have a magazine and you want to create
a note text with every word that is present in this
specific magazine text, but you’re only allowed to
use the words you have been given.

/* 
Part I of the solution 
Edit String
1 exclude white spaces and punctuations.
2 convert every letter to lowercase letters
3 convert the strings to arrays of individual words
Part II 
Comparing Two Arrays
1 if the note-Text longer than the magazine-Text return false
2 check every word in noteText if the word exists
3 if one of the word doesn't exist no need to continue loop so return False
4 if every word of noteText exist in the magazineText return TRUE
*/