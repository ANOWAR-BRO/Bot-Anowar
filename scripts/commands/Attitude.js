module.exports.config = {
  name: "Bio",
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
    var tl = ["হুম জানু" ,];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    if (!prompt) return api.sendMessage(`⎯͢⎯⃝😽🪽🪄𝗦𝘆𝗸𝗼 ❥᭄🐲𝗔𝗻𝗼𝘄𝗮𝗿 ❥᭄ ⑅⃝🌺🐰\n\n╰➤ 👤 𝐃𝐞𝐚𝐫 『${name}』,\n\n╰➤ 🗣️ ${rand}\n\n⎯͢⎯⃝😽🪽🪄𝗦𝘆𝗸𝗼 ❥᭄🐲𝗔𝗻𝗼𝘄𝗮𝗿 ❥᭄ ⑅⃝🌺🐰`, event.threadID, event.messageID);
    const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=${prompt}&filter=true`);
    console.log(res.data);
    const respond = res.data.success;
    
    return api.sendMessage({
        body: respond
    }, event.threadID, event.messageID);
};
