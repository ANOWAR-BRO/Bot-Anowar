module.exports.config = {
  name: "🤬",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "🤬",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
    const content = event.body ? event.body : '';
    const body = content.toLowerCase();
    if (body.startsWith("🤬")) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var rahad = [
      "চোদে ༆নাহ ༆কেউ ༆মনে ༆লাগে\n\n༆ডেউ ༆নাম ༆করা༆ চুতমারানি\n\n༆পাট༆লয়༆রাজ-রানি༆🤦‍♂️🤒","シআমি ༆জানি ༆তুমি ༆১২ vatari🤮\n\nতবুও ༆আমি ༆তোমার ༆প্রেমে ༆🤩\n\nঅন্ধ কি ༆ভাবছো ༆এইটা ༆কমু 😯\n\n༆𝐜𝐡𝐚𝐥 ༆𝐧𝐢𝐤𝐚𝐥 ༆𝐤𝐡𝐚নকি 𝐦𝐚গি👿","シDear ༆ EX ༆🐲🕶️👇\n\nতুমি ༆যে এত ༆ভাব ༆নিতেছো😯\n\nতোমার ༆ওইগুলা ༆কিন্তু ༆আমি ༆\n\nজুলাইছি༆একটু মনে কইরা༆ দেখো🥱"];
    
    var rahad2 = rahad[Math.floor(Math.random() * rahad.length)];
 
    var link = ["https://i.imgur.com/mVoSkbo.mp4","https://i.imgur.com/SD0MIPT.mp4","https://i.imgur.com/Q20XyVg.mp4"];
    var callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    
    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data[" 🤗"] == "undefined" || data["🤗"] == true) data["🤗"] = false;
  else data["🤗"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["🤗"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
