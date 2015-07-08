/**
 * gruntfile.js
 *
 * Takes the metadata from package.json and compiles the source code.
 * More info here: http://gruntjs.com/getting-started
 */

module.exports = function (grunt) {
	/**
	 * 	Step 1. Load all grunt plugins.
	 *
	 * 	As long as a plugin is listed in package.json to be installed by npm,
	 * 	you can enable it here. Note that installing plugins via NPM doesn't
	 * 	directly mean that it'll be used.
	 */
	[
		"grunt-tslint",
		"grunt-typescript",
		"grunt-pleeease"
	].forEach(grunt.loadNpmTasks);

	// Step 2. Configuration
	grunt.initConfig({

		// 2.1 - Read NPM dependencies.
		pkg: grunt.file.readJSON('package.json'),

		// 2.2 - CSS processing.
		pleeease: {
			custom: {
				options: {
					autoprefixer: {
						'browsers': [
							'ie 9',
							'chrome 13',
							'firefox 4',
							'safari 5.1',
							'opera 11.1'
						]
					},
					rem: ['12px'],
					minifier: false
				},
				files: {
					// 'output: input' is the notation. I have no idea why.
					'./output/css/': './styles/*.css'
				}
			}
		},

		// 2.3 - Typescript inspections.
		tslint: {
			options: {
				configuration: {
					rules: {
						"variable-name": true,
						"quotemark": [true, "single"]
					}
				}
			},
			files: {
				src: ['./scripts/*.ts']
			}
		},

		// 2.4 - Typescript compiling.
		typescript: {
			base: {
				src: './scripts/*.ts',
				dest: './output/js',
				options: {
					module: 'amd', //or commonjs
					target: 'es5', //or es3
					sourceMap: false,
					declaration: false
				}
			}
		}
	});

	// 3. - Create runnable commands
	grunt.registerTask('default', ['pleeease', 'tslint', 'typescript']);
};