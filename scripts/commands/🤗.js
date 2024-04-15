module.exports.config = {
  name: "❤️‍🔥",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "❤️‍🔥",
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
    if (body.startsWith("❤️‍🔥")) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var rahad = [
      "জীবনে প্রথম দ্বিতীয় বলতে কিছু\n\n হয় না,শেষ পর্যন্ত যে থেকে যায়\n\nসেই আসল...!🥰💚🥀 ","-🌼💚---︵♡︎\n\n—আমি থাকতেও যার অন্যের\n প্রতি ঝোক তার জন্য আমার \nমায়া কখনোই না হোক༊🖤🌻\n\n༊❞﹏-🌼💚--- ","︵❝།།🍒\n\n︵ღ۵𝗜 𝗕𝗲𝗹𝗶𝗲𝘃𝗲 𝘁𝗵𝗮𝘁-🌻যে থাকার সে শত\n\n খারাপ জেনে ও পাশে থাকবে-!!🖤🌺 ","___۵ღ༎ শখের জিনিস ক্ষুদ্র হলেও \n\nমায়া বেশি❞༅༎-☺️🌻🌿🌺🥳 "];
    
    var rahad2 = rahad[Math.floor(Math.random() * rahad.length)];
 
    var link = ["https://i.imgur.com/wC0na3W.mp4","https://i.imgur.com/sRT25Sr.mp4","https://i.imgur.com/hm9gE1X.mp4","https://i.imgur.com/FMYV9VH.mp4","https://i.imgur.com/sI8UArr.mp4"," https://i.imgur.com/aVIbFDv.mp4","https://i.imgur.com/fK8AMUu.mp4","https://i.imgur.com/6QEX6q9.mp4"];
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
