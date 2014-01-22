module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-html-snapshot');

    var config = grunt.file.readJSON('build.config.json');

    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    copy: {
		    'app-files': {
		    	expand: true,
		    	cwd: 'src/',
		        src: ['**'],
		        dest: '_dist/'
		    }
	    },
		concat: {
			'vendor-js': {
                src: config.vendorFiles.js ,
			    dest: '_dist/vendor.js'
			},
			'vendor-css': {
			    src: config.vendorFiles.css,
			    dest: '_dist/vendor.css'
			}

		},
		clean: ["_tmp", "_dist"],
        watch: {
            src: {
                files: ['src/**/*.js','src/**/*.html'],
                tasks: ['dist'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: '_dist'
                }
            }
        }
	});
	grunt.registerTask('vendor-files', ['copy:vendor-assets','concat:vendor-js','concat:vendor-css'])
    grunt.registerTask('app-files', ['copy:app-files'])
    grunt.registerTask('dist', ['vendor-files', 'app-files']);
	grunt.registerTask('default', ['dist', 'connect','watch']);

};
