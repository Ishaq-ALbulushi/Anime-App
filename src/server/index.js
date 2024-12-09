var aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
  });
  const axios = require('axios');

const analyzeSentiment = async (text) => {
  const response = await axios.post('https://api.meaningcloud.com/sentiment-2.1', {
    key: process.env.API_KEY,
    txt: text,
    lang: 'en'
  });
  return response.data;
};
app.post('/analyze', (req, res) => {
    textapi.sentiment({
      'text': req.body.text
    }, (error, response) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.json(response);
    });
  });
  app.post('/analyze', async (req, res) => {
    try {
      const sentiment = await analyzeSentiment(req.body.text);
      res.json(sentiment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  