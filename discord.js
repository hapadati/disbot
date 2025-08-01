const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');  // 環境変数を使うためのパッケージ

dotenv.config();  // .envファイルから環境変数を読み込む

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.once('ready', () => {
  console.log('Bot is online!');
});

// コマンドの処理
client.on('messageCreate', (message) => {
  if (message.content === '!hello') {
    message.channel.send('Hello!');
  }
});

// トークンでログイン
client.login(process.env.DISCORD_TOKEN);
