# Rata

Tidy up your string list

# Installation

`$ npm install rata`

# Usage

```js
const rata = require('rata')

const data = [
    ["eat", "eat some apples"],
    ["play", "play some music"],
    ["cry", "crying about your life"],
    ["makemehappy", "make happy!"]
]

console.log(rata(data))
```

```
eat         eat some apples
play        play some music
cry         crying about your life
makemehappy make happy!
```

```js
const rata = require('rata')

const data = [
    ["eat", "eat some apples"],
    ["play", "play some music"],
    ["cry", "crying about your life"],
    ["makemehappy", "make happy!"]
]

console.log(rata(data, ' - '))
```

```
eat         - eat some apples
play        - play some music
cry         - crying about your life
makemehappy - make happy!
```