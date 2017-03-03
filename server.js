'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
  require('node-env-file')('.env');
  console.log('Running Development!');
}

require('mahrio')( process.env, __dirname ).then( function(server){

  // ASSETS
  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: ['../public/assets/']
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function( request, reply ){
      reply.view('index');
    }
  });
});
