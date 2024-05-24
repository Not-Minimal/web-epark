const express = require('express');
const CourseController = require('../controllers/course');
const multiparty = require('connect-multiparty');
const md_auth = require('../middlewares/authenticated');

const md_upload = multiparty({ uploadDir: './uploads/course' });

const api = express.Router();
//Apis
api.post('/course',
  [md_auth.asureAuth, md_upload],
  CourseController.createCourse
);

api.get('/course',
  CourseController.getCourse
);

api.patch('/course/:id',
  [md_auth.asureAuth, md_upload],
  CourseController.updateCourse
);

api.delete('/course/:id',
  md_auth.asureAuth,
  CourseController.deleteCourse
);
module.exports = api;