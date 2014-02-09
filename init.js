/*
Quotes-Chocmixin.
A Mixin for Chocolat to convert, remove or toggle single and double quotes.
https://github.com/franzheidl/quotes.chocmixin
Franz Heidl 2014
MIT License
*/


function convertQuotes(q) {
  Recipe.run(function(recipe) {
    var r, s, regex, result;
    
    var setCharAt = function(str, i, chr) {
      return str.substr(0, i) + chr + str.substr(i + 1);
    };
    
    if (recipe.selection.length > 0) {
      r = recipe.selection;
    }
    else {
      r = new Range(0, recipe.length);
    }
    
    s = recipe.textInRange(r);
    
    if (q === 'toggle') {
      var indices = [];
      regex = new RegExp(/'|"/g);
      
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
        regex = new RegExp(/"/g);
        
        if (s.search(regex) > -1) {
          s = s.replace(regex, '\'');
          recipe.replaceTextInRange(r, s);
        }
        
      }
      else if (q === 'double') {
        regex = new RegExp(/'/g);
        
        if (s.search(regex) > -1) {
          s = s.replace(regex, '"');
          recipe.replaceTextInRange(r, s);
        }
        
      }
    }
    
  });
}

function removeQuotes(q) {
  Recipe.run(function(recipe) {
    var r, s, regex;
    
    if (recipe.selection.length > 0) {
      r = recipe.selection;
    }
    else {
      r = new Range(0, recipe.length);
    }
    
    s = recipe.textInRange(r);
    
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
    
  });
}


Hooks.addMenuItem('Text/Quotes/Convert to Single Quotes', 'ctrl-q', function() {
  convertQuotes('single');
});

Hooks.addMenuItem('Text/Quotes/Convert to Double Quotes', 'alt-ctrl-q', function() {
  convertQuotes('double');
});

Hooks.addMenuItem('Text/Quotes/Toggle Quotes', 'cmd-ctrl-q', function() {
  convertQuotes('toggle');
});

Hooks.addMenuItem('Text/Quotes/Remove Single Quotes', '', function() {
  removeQuotes('single');
});

Hooks.addMenuItem('Text/Quotes/Remove Double Quotes', '', function() {
  removeQuotes('double');
});

Hooks.addMenuItem('Text/Quotes/Remove All Quotes', '', function() {
  removeQuotes('all');
});
