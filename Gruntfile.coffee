module.exports = (grunt) ->
	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'

		sass: 
			dev: 
				options: 
					style: 'expanded'
					compass: true
				files: [{
					expand: true
					cwd: 'scss'
					src: ['*.scss']
					dest: 'public_html/css'
					ext: '.css'
				}]

		coffee:
			dev:
				files: [{
					expand: true
					cwd: 'coffee'
					src: ['*.coffee']
					dest: 'public_html/js'
					ext: '.js'
				}]

		watch:
			coffee:
				files: ['coffee/**']
				tasks: ['coffee']
			sass:
				files: ['scss/**']
				tasks: ['sass']

	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.loadNpmTasks 'grunt-contrib-coffee'

	grunt.registerTask 'default', ['sass']