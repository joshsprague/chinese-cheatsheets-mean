
/*
 * GET home page.
 */

exports.index = function(Translation){
  return function (req, res) {
    Translation.find({}, function(error, translation) {
      res.render('index', {
        title: 'Chinese Cheatsheets',
        translations: translations
      });
    });
  };
};

exports.addTranslation = function(Translation) {
  return function(req, res) {
    var translation = new Translation(req.body);
    translation.save(function(error, translation) {
      if (error || !translation) {
        res.json({ error : error });
      } else {
        res.json({ translation : translation });
      }
    });
  };
};