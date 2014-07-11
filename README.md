# It's CSS so it is

Like a magpie I have gathered bits and pieces of CSS from all corners of the globe, so I have.

## Requirements
* Sass, so it does
* Susy, so it does
* Compass, so it does (Master branch)
* Grunt, so it does (Master branch)

## Installation

Clone the repository `https://github.com/bigskinnyboy/so-it-is.git` or download it. Installing gems may require sudo.

Install Sass
```
gem install sass
```

Install Compass, 3.3 of sass requires the pre-release version
```
gem install compass --pre
```

Install Susy grids
```
gem install susy
```

Install Grunt globally - see http://gruntjs.com/getting-started
```
npm install -g grunt-cli
```

You can then cd into directory and run `npm install` to install dependencies.

Final step so it is, `grunt watch` to watch for changes.

## Alternative versions
There is also a Gulp branch which removes compass support and will probably change quite a bit as I work out how to use it.

A libsass branch exists but is broken as it currently does not support sass maps and a stable version of @extends as yet.

Very much a work in progress.
