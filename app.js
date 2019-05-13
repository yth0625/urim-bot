const express = require('express');
const bodyparser = require('body-parser');

const menus = require('./menu');

const SERVER_URL = process.env['SERVER_URL'];
const PORT = process.env['PORT'] || 8625;

const app = express();
app.use(bodyparser.urlencoded({'extended':'true'}));
app.use(bodyparser.json());
  
app.post("/urim", (req, res) => {
    const attachments = [{
        text: '점심먹을 장소를 골라주세요.',
        actions: ['3층', '1층', '지하', '바깥', null].map(location => ({
            name: location ? `${location}에서 먹기` : '아무데서나 먹기',
            integration: {
                url: `${SERVER_URL}:${PORT}/choice`,
                context: { location }
            }
        }))
    }];

    res.send({ response_type: 'in_channel', attachments });
});

app.post("/choice", (req, res) => {
    const { location } = req.body.context;
    const range = location
        ? menus.filter(menu => menu.location === location)
        : menus;

    const selected = range[~~(Math.random() * range.length)];

    const attachments = [{
        title: '오늘의 점심',
        fields: [{
            short: false,
            value: `오늘의 점심은 ${selected.name}에서 먹습니다!`
        }],
        image_url: selected.picUrl
    }];

    res.send({ update: { props: { attachments } } });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
