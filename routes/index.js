
/*
 * GET home page.
 */

exports.index = function(translations){
  return function (req, res) {
    res.render('index', {
      title: 'Chinese Cheatsheets',
      translations: translations
    });
  };
};

exports.addTranslation = function(translations) {
  return function(req, res) {
    translations.push(req.body);
    res.json({ translations: translations });
  };
};