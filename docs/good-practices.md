# Good technical practices applied in this project

## General guidelines

- [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): Logical units of the application (services, functions, components, etc...) should do **one thing** and do it well.

- [KISS principle](https://fr.wikipedia.org/wiki/Principe_KISS): **simple code** is often a synonym for technical excellence

- Comments are a [code smell](https://en.wikipedia.org/wiki/Code_smell): they should be used **very conservatively**; as they are a frequent source of confusion, and are rarely useful in the case of a well-written program.

- Small is beautiful: files should not be longer than 300 lines of code.

- Constants should be declared **outside of functions** and given **meaningful names**.

- Don't repeat yourself: Duplicated code should be avoided, but not at the expense of code simplicity. Sometimes a little duplication is better than over-engineered factorization.

### Naming

Naming variables should require continuous attention from both the developers and the reviewers. In particular:

- Names should be **clear**, **concise** and **descriptive**.

- Business terms should **never** be developer-given names / conventions. Business entities and behaviors should **always** be called by their native business name, in their native business language.

- Giving technical suffixes to files containing business logic (ex: MyEntityService or MyBusinessException) should be avoided, as they hold little value, and to compel developers to give more meaningful and intent-expressing names to their files.

ex: ``NumberException`` is a poor exception name because it gives no information other than the error has to do with a number. Instead, ``IllegalDivisionByZero`` gives all information needed and is unambiguously an exception name.


## Functional codestyle

- Code should be split into short, readable, aptly named and pure functions.

- Mutable global variables should **never** be used.

- Mutation and reassigning of local variables should be avoided when possible.

- Immutable data structures should be used wherever possible.

- Functional patterns (labmda functions, ternaries, `filter`, `map`, `foreach`, `reduce`) should be preferred to their imperative counterparts (`for`, `if-then-else`).

## Testing

- Every piece of business logic must be unit-tested

- Test driven design must be used liberally; as it is a very powerful approach to producing quality features

- Integration tests should be written in the case of complex and / or critical module interaction. Their number must not be too large as they are costly to write and maintain, and slow to run.

### F.I.R.S.T principles

Unit tests must conform to the F.I.R.S.T principles of testing :

- Fast: a unit test should never call for the instantiation of the Spring framework, or a database connection, or require heavy computing logic.
- Isolated and Independent: a unit test should never be influenced by external factors. Therefore, dependencies of the tested code should be mocked whenever possible.
- Repeatable: tests should always be deterministic. A test should set up its own data.
- Self-validating : tests must be fully automated, no manual action should be required to check if they pass.
- Timely: a test is what specifies the application's behavior, and as such it should be written before the code (cf. TDD).

In addition, unit tests should not contain complex scenarios. If that's the case, it means that the tested has more than one responsability, and should therefore be split.

Fixtures (object mocks) may be used for unit tests, but the fixtures should remain **small** and **easy to maintain**.

## Other

- Nested ternaries should **absolutely never** be used (``condition ? secondCondition ? A : B : C``).
