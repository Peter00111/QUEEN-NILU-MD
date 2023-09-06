/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;F6QgVaIY#W0jkQsRkN7Nrm4OVuYF84uxHtBS-Tk4SsBPbzU8JqeQ' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://nilutest_user:tfYV19nVopA57D58cU7iGshKQ27Ii0dy@dpg-cjrs6j8jbais73fu8uf0-a.oregon-postgres.render.com/nilutest'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94767438882'

global.OWNER_NAME = 'Ericson'

global.TIMEZONE = 'Africa/Nairobi' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'NILU-MD'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = 'Ericson.stickers🤹‍♂️' //sticker

global.FOOTER = 'Queen Nilu 2023 '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ǫᴜᴇᴇɴ ɴɪʟᴜ  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'true' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = false 

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Nairobi, Kenya" //ur location

