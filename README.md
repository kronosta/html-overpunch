This is a quick little custom HTML element library to overpunch characters like on old typewriters. You can use this to make fun symbols like the said no one ever quotes ("/) and not equal (=/).
It works with any symbol in the Basic Multilingual Plane of Unicode.

See `overpunch-element-test.html` for examples.

# How to use
The syntax is like this:
```
<over-punch chars="B^" fontclass="serif" spacecount="3"></over-punch>
```

`chars` is the characters to overpunch, combined into a string (can be more than two). `fontclass` is the name of a CSS class that applies the font. It will not be used for anything else,
for other styles use the `style` attribute on the `over-punch` element or an enclosing one, or use a second CSS class. `spacecount` is how much the character after the overpunch should be separates,
measured in the width of a space in the font determined by `fontclass`. For monospace fonts this should always be 1, for others you'll have to play around with it and the best value will be different
depending on the font and `chars`. Characters that are widely different sizes in the font (like M and l) might not look great (in monospace this isn't an issue).

# How it works
It essentially uses `position:absolute` and `position:relative` alongside the `left` attribute to make elements overlap, and encloses the contained characters in `span`s with those styles.

# Fun demos
Technically these don't actually use the library, they use their own implementation.

`overpunch-type-X.html` allows you to type in overpunches. Type every normal character (including spaces, but not newlines) twice, then type a pair of different characters for an overpunch.
The result will appear on screen.

`overpunch-table.html` will generate a table of overpunches within a starting and ending Unicode range for the first and second character.

