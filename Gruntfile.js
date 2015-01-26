module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    coffee: {
	  dist: {
	    files: [{
	      expand: true,
	      cwd: 'assets/javascripts',
	      src: ['{,*/}*.coffee'],
	      dest: 'public/js',
	      rename: function(dest, src) {
	        return dest + '/' + src.replace(/\.coffee$/, '');
	      }
	    }]
	  }
	},


	sass: {
	    dist: {
	      files: [{
	        expand: true,
	        sourcemap: 'none',
	        cwd: 'assets/stylesheets',
	        src: ['*.scss'],
	        dest: 'public/css',
	        ext: '.css'
	      }]
	    }
	  },


	uglify: {
	  my_target: {
	    files: [{
	        expand: true,
	        cwd: 'public/js',
	        src: '**/*.js',
	        dest: 'public/js',
	        ext: '.min.js'

	    }]
	  }
	},

	cssmin: {
	  target: {
	    files: [{
	      expand: true,
	      cwd: 'public/css',
	      src: ['*.css', '!*.min.css'],
	      dest: 'public/css',
	      ext: '.min.css'
	    }]
	  }
	},

	jquery: {
	  dev: {
	    options: {
	      prefix: "jquery-",
	    },
	    output: "lib",
	    versions: [ "1.10.0" ]
	  }
	},

	connect: {
    	server: {
	        options: {
	            keepalive: true,
	            hostname: 'localhost',
	            port: 9000
	        }
	    }
}
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks("grunt-jquery-builder");
  grunt.loadNpmTasks('grunt-contrib-connect');
  // Default task(s).

  grunt.registerTask('default', ['coffee', 'sass', 'uglify', 'cssmin', 'jquery', 'connect:server']);

};
