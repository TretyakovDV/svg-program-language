# SVG generator program language

For start, you need clone this repositories.

Create file `<file-name>.td`.

#### Instructions:

##### Paper [value]

This command change svg foreground color from 0 to 100

0 - white

100 - black

For example:
`Paper 25` - fill svg to the light gray color

##### Line [x1] [y1] [x2] [y2]

This command draw the line

Min value 0, max value 100

For example:
`Line 0 25 55 80`

#### Compilation:

Run command `node lib/index.js [.td file path]`

Example



```
// code.td
Paper 100
Line 0 0 50 50
Line 0 60 60 0

```

![alt Final result](https://github.com/TretyakovDV/svg-program-language/blob/master/test.svg)
