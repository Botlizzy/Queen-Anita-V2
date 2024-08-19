//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae26R7EFeXfbF5Rd72B";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347038494997";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/f2d5c2da71ec036dcd6d9.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9YNW9XNEtkVDZZRzF3ckFHUWgrYnVjTG5EdHBrRWowbjhLVHc5MkFXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFllUlVtUEhBRWo4OHNoS3ZRMnB3YXZidHovQm5xTEQvV2FQcERUL3pHVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRm5Bc3hodWxjZEV5Z3RSamxGTzBTMGREOUxOTVNvTlFqM3dIMFh4NG1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNVXB0bmw0ZmxJaU80eVRRUk5rQ0s5djZxM1prYjhsMi96WXQ2aTBLUUVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCOW5kTm5FWkdIUm5UNDh4V3RQaHpKRHcyL2xpZnptLzdEeEwzMWJoSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNpcStldWpXajhnZHdMYllLdFdNOFFhWDhCdWNyRGlpRlRjb0kvUTZqVTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUlLWVh1eUZjTzc3V0d1WU5QOTdqcHJSOFBFbVdDSitsM1EydWJMTkFVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2VBeVdlRVVXbUNJcWVNZU1rZm8wNjhDL1VHRHhkU1M2aG1oSTZEYmlEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAxZE41L0xlb3JTNlFrdHRHNzc2NWNHSUI3WjVkVkZvL3l1YWNFMlB3dmtZUzcwUWVJbVpYT2xVTDFXNHYvVzV2Q1FpUDg2QzNWdVNPcGpCSzkwUEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6Ikc2Nld2VjFwc1ZRVHFtRkM0cUlyY2oyM2QzY2hjNVZ2T1c4WXZlejU3RFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBEMm9qenpBUkZlWTI4bmdTc2xvZWciLCJwaG9uZUlkIjoiNWEyZmFmOTItODFhYS00Nzg1LTk0MzYtMzk1YTE0NmU0OTljIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJuNTZkT1pBd2NpU0M1MW1iNGxsL3doQ2dybz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6ZERiU05xU0VUdW9zdjRNYnRJeTdEenhOL1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTTFQR0U2RzciLCJtZSI6eyJpZCI6IjIzNDcwMzg0OTQ5OTc6ODdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibm8tbmFtZSB0ZWNoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKLzh5SWtGRUltUGpMWUdHQjBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDR1dRVFAvSVBHMDRrOGF0WXc2S2N0TG4xN3BKMk1rV1dxY1BPckNmWkM4PSIsImFjY291bnRTaWduYXR1cmUiOiJtN1VhNjMzUHJCWDI2RmExS1kzRkI5dGhsaEMyaWtKcFlmSzl2bm5kUE4weHZib0Q2aloyMzQ4V2MwNUltOVVwU0Q4M0ZadlpoSjVTdHpwN2xONnlCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUWRrUnJVZGJkYm5HVzZoalVDNkNSYXFCRXdHY1RFdHZhY0Y0WFlMbVo0Y0VNbGoyRUh6WFZpQXprb2pkUFc4cUYramtUS0t3VFpyVFU3L2NQaGUrQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDM4NDk0OTk3Ojg3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFobGtFei95RHh0T0pQR3JXTU9pbkxTNTllNlNkakpGbHFuRHpxd24yUXYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQwNTc0OTR9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`no-name-V2™`",
  author: process.env.PACK_AUTHER || "no-name-V2",
  packname: process.env.PACK_NAME || "N O N A M E",
  botname: process.env.BOT_NAME || "NO-NAME-V2",
  ownername: process.env.OWNER_NAME || "NO-NAME TECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "N O N A M E").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
