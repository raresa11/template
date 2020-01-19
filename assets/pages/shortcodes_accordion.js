"use strict";

var shortcodes_accordion = "\n<style>\n/* .shortcodes_accordion */\nh3 {\n\tpadding-top: 0;\n}\nsection ol, section ul, section li {\n\tmargin: 0;\n}\n.uk-panel {\n\tborder: 1px solid #ddd;\n\tpadding: 40px;\n}\n.red {\n\tbackground: #fc4545;\n\tborder-radius: 2px;\n\tpadding: 0 4px;\n}\n.red > span {\n\tcolor: #fff !important;\n}\n</style>\n<div class=\"content shortcodes_accordion\">\n\t<p class=\"uk-text-meta uk-margin-remove uk-flex uk-flex-middle\">Short Codes <span uk-icon=\"chevron-double-right\"></span></p>\n\t<h1>Accordion</h1>\n\t<div class=\"uk-panel\">\n\t\t<ul data-uk-accordion>\n\t\t\t<li class=\"uk-open\">\n\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Item 1</a>\n\t\t\t\t<div class=\"uk-accordion-content\">\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Item 2</a>\n\t\t\t\t<div class=\"uk-accordion-content\">\n\t\t\t\t\t<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Item 3</a>\n\t\t\t\t<div class=\"uk-accordion-content\">\n\t\t\t\t\t<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<h4>Explanation</h4>\n\t<ol>\n\t\t<li><p>The accordion consists of a parent container with the <code>data-uk-accordion</code> attribute, a title and content part for each accordion item</p>\n\t\t\t<div class=\"uk-overflow-auto\">\n\t\t\t\t<table class=\"uk-table uk-table-small\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr><th>Class</th><th>Description</th></tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><code>.uk-accordion-title</code></td>\n\t\t\t\t\t\t\t<td>Defines and styles the toggle for each accordion item. Use <code>&lt;a&gt;</code> elements</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><code>.uk-accordion-content</code></td>\n\t\t\t\t\t\t\t<td>Defines the content part for each accordion item</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<pre class=\"prettyprint linenums\">&lt;ul <span class=\"red\">data-uk-accordion=\"\"</span>&gt;\n\t&lt;li&gt;\n\t\t&lt;a class=\"<span class=\"red\">uk-accordion-title</span>\" href=\"#\"&gt;Item 1&lt;/a&gt;\n\t\t&lt;div class=\"<span class=\"red\">uk-accordion-content</span>\"&gt;Item 1 Content&lt;/div&gt;\n\t&lt;/li&gt;\n\t&lt;li&gt;\n\t\t&lt;a class=\"<span class=\"red\">uk-accordion-title</span>\" href=\"#\"&gt;Item 2&lt;/a&gt;\n\t\t&lt;div class=\"<span class=\"red\">uk-accordion-content</span>\"&gt;Item 2 Content&lt;/div&gt;\n\t&lt;/li&gt;\n\t&lt;li&gt;\n\t\t&lt;a class=\"<span class=\"red\">uk-accordion-title</span>\" href=\"#\"&gt;Item 3&lt;/a&gt;\n\t\t&lt;div class=\"<span class=\"red\">uk-accordion-content</span>\"&gt;Item 3 Content&lt;/div&gt;\n\t&lt;/li&gt;\n&lt;/ul&gt;</pre>\n\t\t\t<div class=\"uk-panel\">\n\t\t\t\t<ul uk-accordion=\"\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Item 1</a>\n\t\t\t\t\t\t<div class=\"uk-accordion-content\">Item 1 Content</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Item 2</a>\n\t\t\t\t\t\t<div class=\"uk-accordion-content\">Item 2 Content</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Item 3</a>\n\t\t\t\t\t\t<div class=\"uk-accordion-content\">Item 3 Content</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\t\t\t\t\n\t\t\t</div>\n\t\t\t<br>\n\t\t</li>\n\t\t<li><p>To specify which items should be opened initially, add the <code>.uk-open</code> class to the item</p>\n\t\t\t<pre class=\"prettyprint linenums\">&lt;ul data-uk-accordion=\"\"&gt;\n\t&lt;li&gt;\n\t\t&lt;a class=\"uk-accordion-title\" href=\"#\"&gt;Item 1&lt;/a&gt;\n\t\t&lt;div class=\"uk-accordion-content\"&gt;Item 1 Content&lt;/div&gt;\n\t&lt;/li&gt;\n\t&lt;li <span class=\"red\">class=\"uk-open\"</span>&gt;\n\t\t&lt;a class=\"uk-accordion-title\" href=\"#\"&gt;Item 2&lt;/a&gt;\n\t\t&lt;div class=\"uk-accordion-content\"&gt;Item 2 Content&lt;/div&gt;\n\t&lt;/li&gt;\n\t&lt;li&gt;\n\t\t&lt;a class=\"uk-accordion-title\" href=\"#\"&gt;Item 3&lt;/a&gt;\n\t\t&lt;div class=\"uk-accordion-content\"&gt;Item 3 Content&lt;/div&gt;\n\t&lt;/li&gt;\n&lt;/ul&gt;</pre>\n\t\t\t<div class=\"uk-panel\">\n\t\t\t\t<ul uk-accordion=\"\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Item 1</a>\n\t\t\t\t\t\t<div class=\"uk-accordion-content\">Item 1 Content</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"uk-open\">\n\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Item 2</a>\n\t\t\t\t\t\t<div class=\"uk-accordion-content\">Item 2 Content</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Item 3</a>\n\t\t\t\t\t\t<div class=\"uk-accordion-content\">Item 3 Content</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\t\t\t\t\n\t\t\t</div>\n\t\t</li>\n\t</ol>\n\n</div>";