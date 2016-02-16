'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PostSchema = new mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Post', PostSchema);
