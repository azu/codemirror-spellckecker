# codemirror-spellckecker

[CodeMirror](http://codemirror.net/ "CodeMirror") + Spell Check + Quick Fix.

Japanese : [WEB+DB PRESS用語統一ルール](https://gist.github.com/inao/f55e8232e150aee918b9 " WEB+DB PRESS用語統一ルール") を元に技術用語のLintを行う事を目的にしています。

DEMO: http://azu.github.io/codemirror-spellckecker/

## Installation

```
npm install codemirror-spellckecker
```

## Usage

### Dictionary format

Dictionary as JavaScript Objects.

```
var dictionaryItems = [

    {
        pattern: 'Web Socket',
        expected: 'WebSocket'
    },
    {
        pattern: '\\bBigTable\\b|Big Table|Big table',
        expected: 'Bigtable'
    },
    {
        pattern: '\\bCakePHP\\b',
        flag: 'i',
        expected: 'CakePHP'
        // means - cakePHP -> CakePHP
    }
];
// register dictionary
registerSpellDictionary("markdown", dictionaryItems);
```

Related library -> [azu/wzeditor-word-rules-parser](https://github.com/azu/wzeditor-word-rules-parser "azu/wzeditor-word-rules-parser")

### How to use

Include these plugin

```html
<script src="node_modules/codemirror/lib/codemirror.js"></script>
<script src="node_modules/codemirror/addon/mode/overlay.js"></script>
<script src="node_modules/codemirror/mode/javascript/javascript.js"></script>
<script src="node_modules/codemirror/mode/markdown/markdown.js"></script>
<script src="node_modules/codemirror/mode/gfm/gfm.js"></script>
<!--Lint-->
<script src="node_modules/codemirror-spellckecker/lib/lint-typo.js"></script>
<script src="node_modules/codemirror-spellckecker/lib/register-spell-dictionary.js"></script>
<link rel="stylesheet" type="text/css" href="node_modules/codemirror/lib/codemirror.css">
<link rel="stylesheet" type="text/css" href="node_modules/codemirror/addon/lint/lint.css">
```

Setup CodeMirror Editor options.

```js
registerSpellDictionary("markdown", dictionaryItems);
var editor = CodeMirror.fromTextArea(document.getElementById("js-main-editor"), {
    lineNumbers: true,
    mode: "gfm",
    gutters: ["CodeMirror-lint-markers"],
    lintTypo: true
});
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT