module.exports = (grunt) ->
	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'

		sass: 
			dev: 
				options: 
					style: 'expanded'
					compass: true
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['*.scss'],
					dest: 'public_html/css',
					ext: '.css'
				}]

		watch:
			files: ['scss/**']
			tasks: ['sass']

	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-sass'

	grunt.registerTask 'default', ['sass']