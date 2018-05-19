var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./src/certificate.html', 'utf8');
var options = {
    border: '0',
    orientation: 'landscape',
    type: 'pdf',
    quality: '90'
};

pdf.create(html, options)
    .toFile('./dist/t.pdf', function (err, res) {
        console.log(res.filename);
    });