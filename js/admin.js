import {upload} from './upload.js';

upload('#file', {
    multi: true,
    accept: ['.png', '.jpg', '.jpeg', '.pdf', '.gif']
});

console.log ('admin.js');