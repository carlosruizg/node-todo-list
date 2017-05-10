'use strict';

exports.about = function(req, res) {
  res.sendFile('../public/about.html');
};

exports.contact = function(req, res) {
   res.sendFile('../public/contact.html');
};

