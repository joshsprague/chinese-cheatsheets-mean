
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

var getTranslation = function(){
  $.ajax({
    url: 'http://api.pearson.com/v2/dictionaries/ldec/entries?headword='+attrs.title+'&apikey=d0Q5fQJA1TLjuY8pGYliGnbKWGmnAy8V',
    dataType: 'jsonp',
    success: function (body) {
      if (body["results"][0] === undefined) {
        //TODO Message user that word is not in dictionary
      } else if (body["results"][0]["senses"][0]["translation"] === undefined) {
          newPair.translation = body["results"][0]["senses"][0]["subsenses"][0]["translation"];
          console.log(newPair.translation);
      } else {
          newPair.translation = body["results"][0]["senses"][0]["translation"];
          console.log(newPair.translation);
      }

      self.collection.add({title: newPair.search_word, translation: newPair.translation});

      newPair.save({search_word: newPair.search_word, translation: newPair.translation});
    }
  });
};