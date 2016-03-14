displayFile("<div class=\"file\">\n  <h2 id=\"server/controllers/roles.js\"> server/controllers/roles.js</h2>\n  <div id=\"stats\">\n    <div class=\"linecoverage\">\n      <span class=\"linecov low\">\n        [78.56%]\n      </span>\n      <span>33/42<span>\n      <span class=\"misses\">\n        9\n      </span>\n    </div>\n    <div class=\"branchcoverage\">\n      <span class=\"branchcov low\">\n        [50%]\n      </span>\n      <span>19/38</span>\n      <span class=\"misses\">\n        19\n      </span>\n    </div>\n  </div>\n  <table id=\"source\">\n    <thead>\n      <tr>\n        <th>Line</th>\n        <th>Hits</th>\n        <th>Source</th>\n      </tr>\n    </thead>\n    <tbody>\n      \n      \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">1</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">(function() {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">2</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  'use strict';</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">3</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  var Roles = require('../models/role');</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">4</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  var jwt = require('jsonwebtoken');</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">5</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  var secretKey = require('../../config/config').secret;</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">6</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  var roles, role1;</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">7</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">  module.exports = {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">8</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    create: function(req, res) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">9</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      // Check the role of user in token Object.</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">10</td>\n              <td class=\"hits\">3</td>\n              <td class=\"source\">      Roles.findById(req.decoded._doc.roleId, function(err, role) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">11</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        if (err)</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss-branch\">\n              <td class=\"line\">12</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          return res.status(500).send(<i class=\"cond-miss\">err.errmessage</i> || <i class=\"cond-miss\">err</i>);</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">13</td>\n              <td class=\"hits\">3</td>\n              <td class=\"source\">        roles = role.title;</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">14</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        if (roles === 'Admin') {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">15</td>\n              <td class=\"hits\">2</td>\n              <td class=\"source\">          role1 = new Roles();</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">16</td>\n              <td class=\"hits\">2</td>\n              <td class=\"source\">          role1.title = req.body.title;</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">17</td>\n              <td class=\"hits\">2</td>\n              <td class=\"source\">          role1.save(function(err) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">18</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            if (err)</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">19</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              return res.status(409).send({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">20</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                'error': err.errmessage || err,</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">21</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                'message': 'You cannot create duplicate roles'</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">22</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              });</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">23</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">            return res.status(200).json({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">24</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              'message': 'Role created'</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">25</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">26</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">27</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        } else {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">28</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">          return res.status(403).json({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">29</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            'message': 'You need to be an Admin'</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">30</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">31</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">32</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">33</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">34</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\"></td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">35</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    session: function(req, res, next) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">36</td>\n              <td class=\"hits\">7</td>\n              <td class=\"source\">      var token = req.headers['x-access-token'];</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">37</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      if(token) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">38</td>\n              <td class=\"hits\">7</td>\n              <td class=\"source\">        jwt.verify(token, secretKey, function(err, decoded) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">39</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          if (!err) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">40</td>\n              <td class=\"hits\">7</td>\n              <td class=\"source\">            req.decoded = decoded;</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">41</td>\n              <td class=\"hits\">7</td>\n              <td class=\"source\">            next();</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">42</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          } else {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss\">\n              <td class=\"line\">43</td>\n              <td class=\"hits\">0</td>\n              <td class=\"source\">            return res.status(401).send({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">44</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              message: 'Failed to Authenticate'</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">45</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">46</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">47</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">48</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      } else {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss\">\n              <td class=\"line\">49</td>\n              <td class=\"hits\">0</td>\n              <td class=\"source\">        return res.status(401).send({message: 'You are not authenticated role'});</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">50</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">51</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">52</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\"></td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">53</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    find: function(req, res) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">54</td>\n              <td class=\"hits\">2</td>\n              <td class=\"source\">      Roles.findById(req.decoded._doc.roleId, function(err, role) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">55</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        if (err)</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss-branch\">\n              <td class=\"line\">56</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          return res.status(500).send(<i class=\"cond-miss\">err.errmessage</i> || <i class=\"cond-miss\">err</i>);</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">57</td>\n              <td class=\"hits\">2</td>\n              <td class=\"source\">        roles = role.title;</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">58</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        if (roles === 'Admin') {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">59</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">          Roles.find(function(err, roles) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">60</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            if (err)</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss-branch\">\n              <td class=\"line\">61</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              return res.status(500).send(<i class=\"cond-miss\">err.errmessage</i> || <i class=\"cond-miss\">err</i>);</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">62</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">            return res.status(200).json(roles);</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">63</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">64</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        } else {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">65</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">          return res.status(403).json({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">66</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            'message': 'You need to be an Admin to perform this'</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">67</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">68</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">69</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">70</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">71</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\"></td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">72</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    findOne: function(req, res) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss\">\n              <td class=\"line\">73</td>\n              <td class=\"hits\">0</td>\n              <td class=\"source\">      Roles.findById(req.decoded._doc.roleId, function(err, role) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss-branch\">\n              <td class=\"line\">74</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        if (<i class=\"cond-miss\">err</i>)</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss-branch\">\n              <td class=\"line\">75</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          return res.status(500).send(<i class=\"cond-miss\">err.errmessage</i> || <i class=\"cond-miss\">err</i>);</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss\">\n              <td class=\"line\">76</td>\n              <td class=\"hits\">0</td>\n              <td class=\"source\">        return res.status(200).send(role.title);</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">77</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        // if (roles === 'Admin') {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">78</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        //   Roles.findById(req.params.role_id, function(err, roles) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">79</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        //     if (err)</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">80</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        //       return res.status(500).send(err.errmessage || err);</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">81</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        //     return res.status(200).json(roles);</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">82</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        //   });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">83</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        // } else {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">84</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        //   return res.status(403).json({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">85</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        //     'message': 'You need to be an Admin to perform this.'</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">86</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        //   });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">87</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        // }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">88</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">89</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">90</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\"></td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">91</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    update: function(req, res) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">92</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">      Roles.findById(req.decoded._doc.roleId, function(err, role) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">93</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        if (err)</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss-branch\">\n              <td class=\"line\">94</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          return res.status(500).send(<i class=\"cond-miss\">err.errmessage</i> || <i class=\"cond-miss\">err</i>);</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">95</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">        roles = role.title;</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">96</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        if (roles === 'Admin') {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">97</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">          Roles.findById(req.params.role_id, function(err, role) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">98</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            if (err) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss-branch\">\n              <td class=\"line\">99</td>\n              <td class=\"hits\">0</td>\n              <td class=\"source\">              return res.status(500).sned(<i class=\"cond-miss\">err.errmessage</i> || <i class=\"cond-miss\">err</i>);</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">100</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            } else {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">101</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              if (req.body.title) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">102</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">                role.title = req.body.title;</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">103</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              }</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">104</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">              role.save(function(err, role) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">105</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                if (err) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss-branch\">\n              <td class=\"line\">106</td>\n              <td class=\"hits\">0</td>\n              <td class=\"source\">                  return res.status(500).send(<i class=\"cond-miss\">err.errmessage</i> || <i class=\"cond-miss\">err</i>);</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">107</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                } else {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">108</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">                  return res.status(200).json({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">109</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                    'message': 'Role successfully updated',</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">110</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                    'role': role</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">111</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                  });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">112</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">113</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">114</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">115</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">116</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        } else {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss\">\n              <td class=\"line\">117</td>\n              <td class=\"hits\">0</td>\n              <td class=\"source\">          return res.status(403).json({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">118</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            'message': 'You must be an Admin to perform this action'</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">119</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">120</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">121</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">122</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    },</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">123</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\"></td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">124</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    delete: function(req, res) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">125</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">      Roles.findById(req.decoded._doc.roleId, function(err, roles) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">126</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        if (err) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss-branch\">\n              <td class=\"line\">127</td>\n              <td class=\"hits\">0</td>\n              <td class=\"source\">          return res.status(500).send(<i class=\"cond-miss\">err.errmessage</i> || <i class=\"cond-miss\">err</i>);</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">128</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        } else {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">129</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">          roles = roles.title;</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">130</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          if (roles === 'Admin') {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">131</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            if (req.params.role_id) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">132</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">              Roles.remove({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">133</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                _id: req.params.role_id</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">134</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              }, function(err) {</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">135</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                if (err)</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss-branch\">\n              <td class=\"line\">136</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                  return res.status(500).send(<i class=\"cond-miss\">err.errmessage</i> || <i class=\"cond-miss\">err</i>);</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"hit\">\n              <td class=\"line\">137</td>\n              <td class=\"hits\">1</td>\n              <td class=\"source\">                return res.status(200).json({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">138</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                  'message': 'Role deleted'</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">139</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">                });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">140</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">141</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">142</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          } else {</td>\n            </tr>\n        \n      \n        \n        \n            <tr class=\"miss\">\n              <td class=\"line\">143</td>\n              <td class=\"hits\">0</td>\n              <td class=\"source\">            return res.status(403).json({</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">144</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">              'message': 'You must be an Admin to perform this action'</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">145</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">            });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">146</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">          }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">147</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">        }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">148</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">      });</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">149</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">    }</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">150</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">  };</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">151</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\">})();</td>\n            </tr>\n        \n      \n        \n        \n            <tr>\n              <td class=\"line\">152</td>\n              <td class=\"hits\"></td>\n              <td class=\"source\"></td>\n            </tr>\n        \n      \n    </tbody>\n  </table>\n</div>");