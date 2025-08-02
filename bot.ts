import { Client } from "https://deno.land/x/discordeno@11.0.0/mod.ts";

const token = Deno.env.get("DISCORD_TOKEN");

if (!token) {
  throw new Error("DISCORD_TOKEN is required");
}

const client = new Client({
  token: token,
});

client.on("ready", () => {
  console.log("Bot is online!");
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("Pong!");
  }
});

client.run();
