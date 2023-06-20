const Lesson = require("../models/Lesson");

const getLessons = async () => {
  const lessons = await Lesson.find();
  return lessons;
}

const getLessonById = async (id) => {
  const lesson = await Lesson.findOne({ id }, { _id: 0 });
  return lesson;
}

const updateLessonType = async (id, type) => {
  const lesson = await Lesson.findOne({ id });
  lesson.type = type;
  await lesson.save();
  return lesson;
}

module.exports = { 
  getLessons,
  getLessonById
};