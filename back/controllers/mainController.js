/* eslint-disable no-console */
const keygen = require('keygenerator');
const bcrypt = require('bcrypt');
const moment = require('moment');
const UserSchema = require('../schemas/userSchema');
const TopicSchema = require('../schemas/topicSchema');
const sendRes = require('../modules/universalRes');
const { dateStr, dateStrAddOne } = require('../modules/dateStr');

module.exports = {

  register: async (req, res) => {
    const { password } = req.body;

    const hash = await bcrypt.hash(password, 15);

    const secret = keygen._();
    const newUser = new UserSchema({ ...req.body, password: hash, secret });
    console.log('newUser', newUser);

    await newUser.save();

    return sendRes(res, false, 'all good', null);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    // todo: create middle to check if user exist
    const userExists = await UserSchema.findOne({ email });

    if (userExists) {
      const compare = await bcrypt.compare(password, userExists.password);

      if (compare) return sendRes(res, false, 'all good', { secret: userExists.secret });
    }

    return sendRes(res, true, 'bad credentials', null);
  },
  userData: async (req, res) => {
    const { user } = req.body;
    // const userExists = await userSchema.findOne({ secret });
    return sendRes(res, false, 'all good', user);
  },
  setPhoto: async (req, res) => {
    const { secret, photo } = req.body;

    const userData = await UserSchema.findOneAndUpdate(
      { secret },
      { $set: { photo } },
      { new: true },
    );

    return sendRes(res, false, 'ok-photo', { photo: userData.photo });
  },
  createTopic: async (req, res) => {
    const { title, content, secret } = req.body;
    // years & days is 1 indexed
    // month is 0 indexed
    const date = moment().toArray();
    const progress1 = moment(date).add(10, 'm').toArray();
    const progress2 = moment(progress1).add(1, 'd').toArray();
    const progress3 = moment(progress2).add(1, 'w').toArray();
    const progress4 = moment(progress3).add(1, 'M').toArray();
    const progress5 = moment(progress4).add(6, 'M').toArray();
    const topicData = {
      userIdSecret: secret,
      title,
      content,
      startDay: date,
      progress: [progress1, progress2, progress3, progress4, progress5],
      progressDone: -1,
      progressDate: dateStrAddOne(progress1),
    };
    const progressDate = topicData.progress[topicData.progressDone + 1];
    topicData.progressDate = dateStr(progressDate);

    console.log('progressDate', topicData.progressDate);

    const newTopic = new TopicSchema(topicData);
    await newTopic.save();

    return sendRes(res, false, 'ok-post', topicData);
  },
  allTopics: async (req, res) => {
    const { secret } = req.params;
    const topics = await TopicSchema.find({ userIdSecret: secret });

    return sendRes(res, false, 'ok-all-topics', topics);
  },
  singleTopic: async (req, res) => {
    const { id } = req.params;
    const topic = await TopicSchema.findOne({ _id: id });
    return sendRes(res, false, 'ok-topic', topic);
  },
  updateProgress: async (req, res) => {
    const { id } = req.params;

    const topicData = await TopicSchema.findOneAndUpdate(
      { _id: id },
      { $inc: { progressDone: 1 } },
      { new: true },
    );

    await topicData.save();

    const date = topicData.progress[topicData.progressDone];
    const dateToStr = dateStrAddOne(date);
    console.log('dateToStr', dateToStr);

    const updateTopicDate = await TopicSchema.findOneAndUpdate(
      { _id: id },
      { $set: { progressDate: dateToStr } },
      { new: true },
    );

    return sendRes(res, false, 'ok-all-posts', { updateTopicDate });
  },
  updateTopic: async (req, res) => {
    const {
      id, title, content,
    } = req.body;

    const topicData = await TopicSchema.findOneAndUpdate(
      { _id: id },
      { $set: { title, content } },
      { new: true },
    );
    await topicData.save();

    return sendRes(res, false, 'ok-update-topic', {
      topic: id, title, content,
    });
  },
  deleteTopic: async (req, res) => {
    const { id } = req.params;
    await TopicSchema.findByIdAndDelete({ _id: id });

    return sendRes(res, false, 'ok-deleted-topic', null);
  },
  progressArr: async (req, res) => {
    const { secret } = req.params;

    const allTopicsCount = await TopicSchema.countDocuments({ userIdSecret: secret });
    console.log('allTopicsCount', allTopicsCount);
    const progress0 = await TopicSchema.countDocuments({ progressDone: 0, userIdSecret: secret });
    const progress1 = await TopicSchema.countDocuments({ progressDone: 1, userIdSecret: secret });
    const progress2 = await TopicSchema.countDocuments({ progressDone: 2, userIdSecret: secret });
    const progress3 = await TopicSchema.countDocuments({ progressDone: 3, userIdSecret: secret });
    const progress4 = await TopicSchema.countDocuments({ progressDone: 4, userIdSecret: secret });

    const progressNumArr = [progress0, progress1, progress2, progress3, progress4];
    console.log('progressNumArr', progressNumArr);

    const progressPercent = progressNumArr.map((num) => Math.floor((num * 100) / allTopicsCount));
    // todo: check result with connection with router and with front
    return sendRes(res, false, 'ok-progress-arr', progressPercent);
  },
  todayTopics: async (req, res) => {
    const { secret, today } = req.params;

    const topics = await TopicSchema.find({
      userIdSecret: secret,
      progressDate: today,
    });

    return sendRes(res, false, 'ok-today-topic', topics);
  },
};
