# Daily Challenge #171 - Ordering Beers in Poland

https://dev.to/thepracticaldev/daily-challenge-171-ordering-beers-in-poland-3c5d

## Setup

```js
You are in Poland and want to order a drink. You need to ask "One beer please.", so you say "Jedno piwo poprosze."

 Translator.orderingBeers(1) = "Jedno piwo poprosze."
But let's say you're really thirsty and you want several beers. You would need to learn how to count in Polish, and understand grammar and verb tenses.

Rules
In English, the plural of beer is simply beers, with an "s".
In Polish, however, the plural of piwo (nominative singular) can be piw (genitive plural) or piwa (nominative plural). It depends!

Usually the plural is genitive: piw
An exception occurs when using numbers 2, 3, or 4 (and any other numbers that end with those), the noun changes to the nominative piwa
The exception to the exception is for numbers 12, 13, and 14, which take the genitive piw.

From 0 - 9:
"zero", "jeden"*, "dwa", "trzy", "cztery", "piec", "szesc" , "siedem", "osiem", "dziewiec"

From 10 - 19, nearly the same but with -ascie at the end:
"dziesiec", "jedenascie", "dwanascie", "trzynascie", "czternascie", "pietnascie", "szesnascie", "siedemnascie", "osiemnascie", "dziewietnascie"

Tens** from 10 to 90 are nearly the same, but with -ziesci or ziesiat at the end:
"dziesiec", "dwadziescia", "trzydziesci", "czterdziesci", "piecdziesiat", "szescdziesiat", "siedemdziesiat", "osiemdziesiat", "dziewiecdziesiat"

*"One" could be male ("Jeden"), female ("Jedna") or neuter ("Jedno"), which is the case for "beer" (piwo). But all other numbers are invariant, even if ending with "jeden".
**Compound numbers are constructed similarly to English: tens + units. For example, 22 is "dwadziescia dwa".

```

## Tests

```js
How would you order one beer?

Three beers?

Ten beers?
```
