displayFile("<div class=\"file\">\n  <h2 id=\"server/models/document.js\"> server/models/document.js</h2>\n  <div id=\"stats\">\n    <div class=\"linecoverage\">\n      <span class=\"linecov high\">\n        [100%]\n      </span>\n      <span>6/6<span>\n      <span class=\"misses\">\n        0\n      </span>\n    </div>\n    <div class=\"branchcoverage\">\n      <span class=\"branchcov high\">\n        [100%]\n      </span>\n      <span>0/0</span>\n      <span class=\"misses\">\n        0\n      </span>\n    </div>\n  </div>\n  <table id=\"source\">\n    <thead>\n      <tr>\n        <th>Line</th>\n        <th>Hits</th>\n        <th>Source</th>\n      </tr>\n    </thead>\n    <tbody>\n      \n      \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">1</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">(function() {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">2</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  'use strict';</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">3</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">  // Require mongoose</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">4</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  var mongoose = require('mongoose'),</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">5</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    Schema = mongoose.Schema;</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">6</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  require('./user');</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">7</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\"></td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">8</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">  // Document Schema</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">9</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  var documentSchema = new Schema({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">10</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    ownerId: {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">11</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      type: String,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">12</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      required: true</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">13</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">14</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    owner: {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">15</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      type: String,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">16</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      required: true</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">17</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">18</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    title: {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">19</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      type: String,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">20</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      required: true,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">21</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      unique: true</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">22</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">23</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    content: {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">24</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      type: String,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">25</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      required: true</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">26</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">27</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    accessType: {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">28</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      type: String,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">29</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      default: 'None'</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">30</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">31</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    accessId: {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">32</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      type: mongoose.Schema.Types.ObjectId,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">33</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      ref: 'Role',</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">34</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      required: false</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">35</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">36</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    typeId: {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">37</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      type: mongoose.Schema.Types.ObjectId,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">38</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      ref: 'Type',</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">39</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      required: true</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">40</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">41</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    dateCreated: {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">42</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      type: Date,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">43</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      required: true</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">44</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">45</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    lastModified: {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">46</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      type: Date,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">47</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      required: true</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">48</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">49</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">  });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">50</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\"></td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">51</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">  // Create model and export</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">52</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  module.exports = mongoose.model('Document', documentSchema);</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">53</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">})();</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">54</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\"></td>\n            </tr>\n        \n      \n    </tbody>\n  </table>\n</div>");