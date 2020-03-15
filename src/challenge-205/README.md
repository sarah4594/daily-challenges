# Daily Challenge #205 - Consonant String Value

https://dev.to/thepracticaldev/daily-challenge-205-consonant-string-value-4i25

## Setup

Given a lowercase string that has alphabetic characters only and no spaces, implement a function that will return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z, d, cs". The values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

## Tests

```js
solve("chruschtschov") => 80
solve("khrushchev")
solve("strength")
solve("catchphrase")
solve("twelfthstreet")
solve("mischtschenkoana")
```
