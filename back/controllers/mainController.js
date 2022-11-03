const keygen = require("keygenerator");
const bcrypt = require('bcrypt');
const moment = require('moment');
const userSchema = require('../schemas/userSchema');
const topicSchema = require('../schemas/topicSchema');
const sendRes = require('../modules/universalRes');

module.exports = {

  register: async (req, res) => {
    const { password } = req.body;

    const hash = await bcrypt.hash(password, 15);

    const secret = keygen._();
    const newUser = new userSchema({ ...req.body, password: hash, secret });
    console.log('newUser', newUser);

    await newUser.save();

    return sendRes(res, false, 'all good', null);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    //todo: create middle to check if user exist
    const userExists = await userSchema.findOne({ email });

    if (userExists) {
      const compare = await bcrypt.compare(password, userExists.password);

      if (compare) return sendRes(res, false, 'all good', { secret: userExists.secret });
    }

    return sendRes(res, true, "bad credentials", null);
  },
  userData: async (req, res) => {
    const { user } = req.body;
    console.log('user', user);

    // const userExists = await userSchema.findOne({ secret });

    return sendRes(res, false, 'all good', user);
  },
  setPhoto: async (req, res) => {
    const { secret, photo } = req.body;

    const userData = await userSchema.findOneAndUpdate(
      { secret: secret },
      { $set: { photo: photo } },
      { new: true }
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
      progressDone: 0
    };

    const newTopic = new topicSchema(topicData);
    await newTopic.save();

    return sendRes(res, false, "ok-post", topicData);
  },
  allTopics: async (req, res) => {
    const { secret } = req.params;
    const topics = await topicSchema.find({ userIdSecret: secret });

    return sendRes(res, false, "ok-all-posts", topics);
  },
  singleTopic: async (req, res) => {
    const { id } = req.params;
    const topic = await topicSchema.findOne({ _id: id });
    console.log('topic', topic);
    return sendRes(res, false, "ok-all-posts", topic);
  }

}