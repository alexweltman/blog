/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Post from '../api/post/post.model';
import User from '../api/user/user.model';

Post.find({}).removeAsync()
  .then(() => {
    Post.create({
      title: 'Seed Blog Post #1',
      author: 'Alex Weltman',
      body: 'ibus. Mauris mauris orci, pellentesque sit amet tempor id,'+
      'hendrerit ut orci. Vivamus iaculis est malesuada diam fermentum ' +
      'fringilla. Donec rutrum porta nunc, in auctor sem fermentum a.' +
      'hendrerit. Quisque eu pulvinar mauris, nec volutpat arcu. Integer quis felis' +
      'felis, auctor non eros in, dignissim vehicula metus.'
    }, {
      title: 'Seed Blog Post #2',
      author: 'Bernie Sanders',
      body: 'ibus. Mauris mauris orci, pellentesque sit amet tempor id,'+
      'hendrerit ut orci. Vivamus iaculis est malesuada diam fermentum ' +
      'fringilla. Donec rutrum porta nunc, in auctor sem fermentum a.' +
      'hendrerit. Quisque eu pulvinar mauris, nec volutpat arcu. Integer quis felis' +
      'felis, auctor non eros in, dignissim vehicula metus.'
    }, {
      title: 'Seed Blog Post #3',
      author: 'DONALD TRUMP',
      body: 'ibus. Mauris mauris orci, pellentesque sit amet tempor id,'+
      'hendrerit ut orci. Vivamus iaculis est malesuada diam fermentum ' +
      'fringilla. Donec rutrum porta nunc, in auctor sem fermentum a.' +
      'hendrerit. Quisque eu pulvinar mauris, nec volutpat arcu. Integer quis felis' +
      'felis, auctor non eros in, dignissim vehicula metus.'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
