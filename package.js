Package.describe({
    summary: "Bootstrap 3 DateTime picker from @Eonasdan, packaged for Meteor.js",
    version: "0.1.0",
    git: "https://github.com/Goltfisch/meteor-bootstrap3-datetimepicker"
});

Package.on_use(function (api, where) {

    api.use('jquery', 'client');
    api.use('rzymek:moment');

    api.add_files([
      'lib/css/bootstrap3-datetimepicker.css', // Add Date Time Picker CSS and JS files
      'lib/js/bootstrap3-datetimepicker.js',
    ], 'client');
});
