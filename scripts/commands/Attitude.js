module.exports.config = {
  name: "bio",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "Rahad",
  description: "fun",
  category: "admin",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);
    var tl = "hmm"];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=${prompt}&filter=true`);
    console.log(res.data);
    const respond = res.data.success;
    
    return api.sendMessage({
        body: respond
    }, event.threadID, event.messageID);
};
