const newman = require('newman');
require('dotenv').config();
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:`https://api.postman.com/collections/25316980-d7b33bab-236e-46b9-8578-183fd6e0b4c9?access_key=${process.env.accessKey}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
