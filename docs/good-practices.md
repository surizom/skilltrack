# Good technical practices applied in this project

## General guidelines

- Boy scout rule: Leave your code better than you found it.

- [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): Logical units of the application (services, functions, components, etc...) should do **one thing** and do it well.

- [KISS principle](https://fr.wikipedia.org/wiki/Principe_KISS): **simple code** is often a synonym for technical excellence

- Comments are a [code smell](https://en.wikipedia.org/wiki/Code_smell): they should be used **very conservatively**; as they are a frequent source of confusion, and are rarely useful in the case of a well-written program. Exceptions exist, especially in the case of complex business logic, or counterintuitive implementation.

- Small is beautiful: files should not be longer than 300 lines of code.

- Constants should be declared **outside of functions** and given **meaningful names**.

- Don't repeat yourself: Duplicated code should be avoided, but not at the expense of code simplicity. Sometimes a little duplication is better than over-engineered factorization.

### Naming

Naming variables should require continuous attention from both the developers and the reviewers. In particular:

- Names should be **clear**, **concise** and **descriptive** of what the logical unit **does**.

- Business terms should **never** be developer-given names / conventions. Business entities and behaviors should **always** be called by their native business name, in their native business language.

- When naming files, one should think about what the name means without the technical suffix. In particular, if the name of the file doesn't make sense after removing the ``Service`` suffix, it's more than probably a bad name.
## Functional codestyle

- Code should be split into short, readable, aptly named and pure functions.

- Mutable global variables should **never** be used.

- Mutation and reassigning of local variables should be avoided when possible.

- Immutable data structures should be used wherever possible.

- Functional patterns (lambda functions, ternaries, `filter`, `map`, `foreach`, `reduce`) should be preferred to their imperative counterparts (`for`, `if-then-else`).

- Lambda functions should not exceed five lines in length. If a function's length can't be reduced to this point, classic functions should be used instead.

- Ternary operators' arguments should always be one-line, simple, very short and explicit instructions.

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

In addition, unit tests should not contain complex scenarios. If that's the case, it means that the tested logical unit has more than one responsibility, and should therefore be split.

Fixtures (object mocks) may be used for unit tests, but the fixtures should remain **small** and **easy to maintain**.

## Git

Best practices of commit composition and [messages](https://chris.beams.io/posts/git-commit/) must be observed. In particular:

- Git commit messages should be less than 50 characters (the body of the commit can be used to provide more details)

- Git commit messages should be written in imperative style. A good commit message should always be able to complete the following sentence : "If applied, this commit will ..."

ex: _If applied, this commit will_ **remove deprecated methods** / _If applied, this commit will_ **implement new computing service**

- Commit operations should be done very often, as to easily rollback and keep track of your changes.

- Commits should be atomic: each commit should contain exactly one self-contained change - do not mix unrelated changes, and do not create inconsistent states.

- Changes must be added using ``git add -p`` to allow for code review before committing, and to only select changes relevant to the commit.

- Interactive rebasing should be used extensively to maintain a linear and meaningful commit history.

## Other

- Nested ternaries should **absolutely never** be used (``condition ? secondCondition ? A : B : C``).

- Dead code should be deleted at the earliest opportunity.

- The names of variables, functions, parameters, identifiers, regular front-end files should be written in ``lowerCamelCase``.

- The names of classes, java files, react components and their files should be written in ``PascalCase``.

- The names of constants should be written in ``UPPER_SNAKE_CASE``.

- Whitespaces must be used to improve the readability of code. In particular, blank lines should be inserted between logical groups of operations.