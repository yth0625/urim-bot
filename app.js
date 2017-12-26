import express from "express";
import bodyparser from "body-parser";
import menu from "./menu.js";

const app = express();
const server_url = '';
const port = 8625;

app.use(bodyparser.urlencoded({'extended':'true'}));
app.use(bodyparser.json());
  
app.post("/urim", (req, res) => {
    const attachments = [{
        "text": "점심먹을 장소를 골라주세요.",
        "actions": [
            {
                "name": "3층에서 먹기",
                "integration": {
                    "url": `${server_url}:${port}/choice`,
                    "context": {
                        "floor": 0
                    }
                }
            }, 
            {
                "name": "1층에서 먹기",
                "integration": {
                    "url": `${server_url}:${port}/choice`,
                    "context": {
                        "floor": 1
                    }
                }
            },
            {
                "name": "지하에서 먹기",
                "integration": {
                    "url": `${server_url}:${port}/choice`,
                    "context": {
                        "action": "do_something",
                        "floor": 2
                    }
                }
            },
            {
                "name": "밖에서 먹기",
                "integration": {
                    "url": `${server_url}:${port}/choice`,
                    "context": {
                        "floor": 3
                    }
                }
            },
            {
                "name": "아무거나 먹기",
                "integration": {
                    "url": `${server_url}:${port}/choice`,
                    "context": {
                        "floor": 4
                    }
                }
            }
        ]
    }];

    res.send({
        response_type: "in_channel", attachments: attachments
    });
});

app.post("/choice", (req, res) => {
    const choice_value = req.body.context.floor;
    let attachments = [{
        title: "오늘의 점심",
        fields: [
            {
                short: false,
                value: ""
            }],
        image_url: ""
    }];

    if (choice_value === 4) {
        const random_floor = Math.floor(Math.random() * menu.length);
        const random_food = Math.floor(Math.random() * menu[random_floor][0].length);
        attachments[0].fields[0].value = "오늘의 점심은 " + menu[random_floor][0][random_food] + "에서 먹습니다!";
        attachments[0].image_url = menu[random_floor][1][random_food];
    } else {
        const random_food = Math.floor(Math.random() * menu[choice_value][0].length);
        attachments[0].fields[0].value = "오늘의 점심은 " + menu[choice_value][0][random_food] +  "에서 먹습니다!";
        attachments[0].image_url = menu[choice_value][1][random_food];
    }
    res.send({
        update: {
            props: {
                attachments: attachments
            }
        }
    });
});

app.listen(port, () => console.log('app listening on port ' + port));