module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "Admin information", 
  usages: "/admin",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://ibb.co/LCrY9Cc", 
            
            "https://ibb.co/LCrY9Cc", 
            
"https://ibb.co/LCrY9Cc",
            
            "https://ibb.co/LCrY9Cc"];
  
var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : 𝑚𝑜ℎ𝑎𝑚𝑚𝑜𝑑 𝐴𝑛𝑜𝑤𝑎𝑟\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝑚𝑜ℎ𝑎𝑚𝑚𝑜𝑑 𝐴𝑛𝑜𝑤𝑎𝑟\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝐼𝑠𝑙𝑎𝑚)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝗗𝗵𝗮𝗸𝗮)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝑛𝑜𝑎𝑘ℎ𝑎𝑖𝑙𝑙𝑎 𝑚𝑎𝑙𝑠\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (21)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : 𝗧𝗵𝗮𝗶 𝗔𝗻𝗱 𝗚𝗹𝗮𝘀𝘀\n𝗚𝗺𝗮𝗶𝗹        :  𝑎𝑛𝑜𝑤𝑎𝑟𝑘ℎ𝑎𝑛19950@𝑔𝑚𝑎𝑖𝑙.𝑐𝑜𝑚\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+8801310041195\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : t.me/rabbyhosainRahad\n𝗙𝗯 𝗹𝗶𝗻𝗸   : https://www.facebook.com/NEED.12.V4T4RI?mibextid=JRoKGi
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
