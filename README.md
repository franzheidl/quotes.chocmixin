# quotes.chocmixin

A mixin for [Chocolat](http://www.chocolatapp.com) to convert, remove or toggle single and double quotes.


![quotes.chocmixin screenshot](screenshot/quotes_menu.png)


* `ctrl-q` will convert double quotes to single quotes

* `alt-ctrl-q` will convert single quotes double quotes

* `cmd-ctrl-q` will toggle quotes: 

  `'<span class="some-class"></span>'`
    
  will become

  `"<span class='some-class'></span>"`
    
  and vice versa.
  
There are additional menu items for removing either single, double, or all quotes.

These actions will be run in the scope of a selection if one exists, otherwise affect the whole document.


###The MIT License (MIT)


Copyright (c) 2014 Franz Heidl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.