# CLIP IT

A totally easy way for modern browsers to put something into clipboard.

## Try it Out

> [Demo by Codepen](https://codepen.io/Dafrok/full/jaQZME/)

## Install

```bash
$ npm i --save clip-it
```

## Usage

**ATTENTION:** The `clip-it` API must be triggered in the same callstack with a trusted event.

### HTML

```html
<button>Copy as Text</button>
<button>Copy as HTML</button>
```

### JavaScript

```javascript
import clipIt from 'clip-it'

const $btnCopyText = document.querySelector('button')
const $btnCopyHTML = document.querySelector('button')

$btnCopyText.onclick = e => clipIt('Hello World'))

// Some browsers only supports plain text. (e.g. iOS Safari)
$btnCopyHTML.onclick = e => clipIt('<span style="color: red;">Hello world!</span>', {
  contentType: 'text/html'
}))
```
