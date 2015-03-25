Package.describe({
    name: "goltfisch:bootstrap3-datetimepicker",
    summary: "Bootstrap 3 DateTime picker from @Eonasdan, packaged for Meteor.js with rzymek:moment dependency",
    version: "0.1.0",
    git: "https://github.com/Goltfisch/meteor-bootstrap3-datetimepicker"
});

Package.onUse(function (api) {
    api.use('jquery', 'client');
    api.use('rzymek:moment', 'client');

    api.addFiles([
      'lib/css/bootstrap3-datetimepicker.css', // Add Date Time Picker CSS and JS files
      'lib/js/bootstrap3-datetimepicker.js',
    ], 'client');
});
