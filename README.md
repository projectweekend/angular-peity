[Peity](http://benpickles.github.io/peity/) is a jQuery plugin that converts an element's content into simple `<svg>` charts. This is an AngularJS directive that makes them easy to use in any project by binding data and options to a controller.

## Install it
If you're familar with how to include third-party modules in AngularJS, then you can probably skip this section. If you're new to the framework, this should help.

### Step 1
This module has two external dependencies: [jquery.peity.min.js](http://benpickles.github.io/peity/jquery.peity.min.js) & [jQuery](http://code.jquery.com/jquery-2.1.0.min.js). You will need to get copies of both of these files and put them in your project, in addition to adding a copy of the `angular-peity.js` file from this repository. In this example, I'm using the directory '/js/lib' for the location. My main AngularJS app in this case is in `/js`.

![Screenshot of files in project folder](https://raw.githubusercontent.com/projectweekend/angular-peity/master/screenshots/copy-files-into-project.png)

### Step 2
Include the file before the main app file:

~~~html
<script src="/js/lib/jquery-2.1.0.min.js"></script>
<script src="/js/lib/jquery.peity.min.js"></script>
<script src="/js/lib/angular-peity.js"></script>
<script src="/js/app.js"></script>
~~~

### Step 3
Add `angular-fully-loaded` to the app requirements (`/js/app.js`).
~~~javascript
var app = angular.module('myApp', [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    // 3rd party dependencies
    'angular-peity'
]);
~~~
