exports.defineTags = function _defineTags(dictionary) {
  /* defining stratigent tags */

  dictionary.defineTag('dl', {
    onTagged: function _onTagged(doclet, tag) {}
  });

  dictionary.defineTag('useraction', {
    onTagged: function _onTagged(doclet, tag) {}
  });

  dictionary.defineTag('populate', {
    onTagged: function _onTagged(doclet, tag) {}
  });

  /* tags for testing/optimization */
  dictionary.defineTag('wireframe', {
    onTagged: function _onTagged(doclet, tag) {}
  });
};
