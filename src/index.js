require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const { WolframAlpha } = require('./clients/wolframAlphaClient');
const { XMLParser } = require('fast-xml-parser');

const parser = new XMLParser();
const wolfram = new WolframAlpha();
const cors = require("cors");
const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.post('/solve', async (req, res) => {
    const {equation} = req.body;
    try {
        let ans = await wolfram.solve(equation);
        ans = parser.parse(ans)['queryresult']['pod'];
        console.log(ans)
        let reply = [];
        for(const x of ans) {
            if(x['subpod']['plaintext'] === undefined) continue
            reply.push(x['subpod']['plaintext']);
        }
        res.status(200).send({
            ok: true,
            solution: reply
        });
    } catch(err) {
        res.status(500).send(err);
    }
})

app.listen(port, () => console.log("listening on port ", port));

