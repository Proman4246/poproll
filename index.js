const { AoiClient } = require("aoi.js");
const { AoiVoice, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");








const client = new AoiClient({
  token: process.env.Token,
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@aoijs/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  },
});




client.command({
  name: "test",
  code: `ms: $pingms
  `,
});



client.loadCommands("./commands/")
client.variables(require("./variables.js"))






const voice = new AoiVoice(client, {
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
  searchOptions: {
   youtubeClient: "WEB"
  }
});

voice.addPlugin(PluginName.Cacher, new Cacher("memory"));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false
})),

voice.bindExecutor(client.functionManager.interpreter);







 


































client.readyCommand({
    name: "Info",
    type: "ready",
    channel: "1275095660516872254",
    code: `
    $loop[999999999999999999;{ "message": "$get[messageID]", "channel": "$channelID" };editMessage]
    $let[messageID;$sendMessage[\`\`\Analizing...\`\`\;true]]
 $clear[$channelID;20000000000000]
 $joinVC[1275067164054913025;yes;no;yes;default;no]
 $setStatus[Minecraft;PLAYING;idle]
 
 `
    
});

client.awaitedCommand({
    name: "editMessage",
    type: "awaited",
    code: `
    $editMessage[$awaitData[message];{newEmbed:
        
        {title:Real Time Information}
        {description:
\`\`\`
Name       -     $userTag[$clientID]
Servers    -     $guildCount
Members    -     $allMembersCount
Ping       -     $pingms
Uptime     -     $uptime[humanize]
Developer  -     @ThaGreatJoel
Package.   -     aoi.js $packageVersion
Node       -     $nodeVersion
CPU Usage  -     $cpu%
RAM Usage  -     $round[$ram] MB / $round[$maxRam] MB
DB ping    -     $round[$databasePing]ms
\`\`\`

IST <t:$truncate[$divide[$dateStamp;1000]]:T>
}
        {color:#00ff00}};$awaitData[channel]]
    $wait[1s]
  


   `
    
});

const express = require('express'); // Import the express library
const app = express(); // Launch the express app
const http = require('http'); // Import the http library
const server = http.createServer(app); // Create the server

/** Replying to request at '/' */
app.get('/', (req, res) => {
  res.send('Testing...'); 
});

server.listen(3000, () => { }); // Opening the 3000 port


