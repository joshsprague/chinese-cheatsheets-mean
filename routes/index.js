
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index',
    { title: 'Chinese Cheatsheets',
    translations : [
      { english: "cat", chinese: "猫"},
      { english: "dog", chinese: "狗"},
      { english: "horse", chinese: "马"}
    ]
  });
};