/*
Quotes-Chocmixin.
A Mixin for Chocolat to remove or toggle single and double quotes.
https://github.com/franzheidl/quotes.chocmixin
Franz Heidl 2014
MIT License
*/


function quotes(q) {
  Recipe.run(function(recipe) {
    
    var r, s, regex, result, indices;
    
    if (recipe.selection.length > 0) {
      r = recipe.selection;
    }
    else {
      r = new Range(0, recipe.length);
    }
    
    s = recipe.textInRange(r);
    
    if (q === 'toggle') {
      
      var setCharAt = function(str, i, chr) {
        return str.substr(0, i) + chr + str.substr(i + 1);
      };
      
      regex = /'|"/g, result, indices = [];
      while ((result = regex.exec(s))) {
        indices.push(result.index);
      }
          
      for (var y = 0; y < indices.length; y++) {
        if (s.charAt(indices[y]) === '\'') {
          s = setCharAt(s, indices[y], '"');
          
        }
        else if (s.charAt(indices[y]) === '"') {
          s = setCharAt(s, indices[y], '\'');
        }
      }
      
      recipe.replaceTextInRange(r, s);
      
    }
    else {
      if (q === 'single') {
        regex = new RegExp(/'/g);
      }
      else if (q === 'double') {
        regex = new RegExp(/"/g);
      }
      else if (q === 'all') {
        regex = new RegExp(/'|"/g);
      }
      
      if (s.search(regex) > -1) {
        s = s.replace(regex, '');
        recipe.replaceTextInRange(r, s);
      }
    }
    
  });
}


Hooks.addMenuItem('Text/Quotes/Remove Single Quotes', 'ctrl-q', function() {
  quotes('single');
});

Hooks.addMenuItem('Text/Quotes/Remove Double Quotes', 'alt-ctrl-q', function() {
  quotes('double');
});

Hooks.addMenuItem('Text/Quotes/Remove All Quotes', 'alt-cmd-ctrl-q', function() {
  quotes('all');
});

Hooks.addMenuItem('Text/Quotes/Toggle Quotes  " <-> \' ', 'cmd-ctrl-q', function() {
  quotes('toggle');
});
