/**
 * Created by azu on 2014/10/12.
 * LICENSE : MIT
 */
"use strict";


(function (root, factory) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
    {
        module.exports = factory(require("codemirror"));
    } else // Plain browser env
    {
        // Browser globals (root is window)
        root.registerSpellDictionary = factory(CodeMirror);
    }
}(this, function (CodeMirror) {
    function registerSpellDictionary(name, dictionaryItems) {
        CodeMirror.registerHelper("lint", name, function (content) {
            var found = [];
            var lines = content.split("\n");
            for (var i = 0; i < dictionaryItems.length; i++) {
                var dictionary = dictionaryItems[i];
                var query = new RegExp(dictionary.pattern, dictionary.flag);
                for (var j = 0; j < lines.length; j++) {
                    var line = lines[j];
                    var match = query.exec(line);
                    if (!match) {
                        continue;
                    }
                    var matchedString = match[0];
                    var matchedIndex = match.index;
                    var matchedLastIndex = matchedIndex + (matchedString.length);
                    //console.log({
                    //    index: matchedIndex,
                    //    last: matchedLastIndex
                    //});
                    // s/Web/Web/iは大文字小文字無視してWebに変換したいという意味に対応する
                    if (dictionary.flag != null) {
                        var strictQuery = new RegExp(dictionary.pattern);
                        var isStrictMatch = strictQuery.test(match[0]);
                        // /Web/i でマッチするけど、 /Web/ でマッチするならそれは除外する
                        if (isStrictMatch) {
                            continue;
                        }
                    }
                    var expected = matchedString.replace(query, dictionary.expected);
                    found.push({
                        from: CodeMirror.Pos(j, matchedIndex),
                        to: CodeMirror.Pos(j, matchedLastIndex),
                        actual: dictionary.pattern,
                        expected: expected
                    });
                }
            }
            return found;
        });
    }

    return registerSpellDictionary;
}));