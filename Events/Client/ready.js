const client = require('../../index.js');
const Discord = require("discord.js");

client.on("ready", () => {
  console.log("Iniciado como " + client.user.username)

  let voltei = new Discord.EmbedBuilder()

    .setTitle(`📶 | Reniciando...`)
    .setDescription(`Fui reniciado! Mas eu ja voltei!\n👤•${client.users.cache.size} Usuários!\n💬•${client.channels.cache.size} Canais!\n✨•${client.guilds.cache.size} Servidores!`)
  client.channels.cache.get("1307750773513523211").send({embeds: [voltei]})

  var tabela = [

    { name: `© foxy`, type: "WATCHING" },
  ];
  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)];
    client.user.setActivity(altstatus.name, {
      type: altstatus.type
    }); 
  }
  setStatus(); 
  setInterval(() => setStatus(), 1500); 
});