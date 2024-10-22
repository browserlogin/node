const { model } = require('mongoose');
const helper = require('../helper/helper');
helper.messageInConsole('dummy router');
//add mdummy model
const Dummy = require('../models/dummy');
//add express
const express = require('express');
const router = express.Router();

//list of dummy
router.get("/", async function (req, res) {
    helper.messageInConsole('dummy get all data');
    const data = await Dummy.find({});
    res.status(200).json({'data':data,'trace_id':helper.getUuid});
});

//detail by id
router.get("/:id", async function (req, res) {
    try {
        var id = req.params.id;
        helper.messageInConsole('dummy get all data' + id);
        const data = await Dummy.find({ "_id": id });
        res.status(200).json({'data':data,'trace_id':helper.getUuid});
    } catch (error) {
        helper.messageInConsole('dummy detail exeption' + id);
        helper.consoleError(error);
        res.status(400).json(error);
    }
});

//create dummy data
router.post("/", async (req, res) => {
    helper.messageInConsole('dummy_post.js');
    try {
        const data = req.body;
        const newDummy = new Dummy(data);
        const saveDummy = await newDummy.save();
        res.status(200).json(saveDummy);

    } catch (error) {
        helper.messageInConsole('dummy_post not create exeption');
        helper.consoleError(error);
        res.status(400).json(error);
    }
});
module.exports = router;