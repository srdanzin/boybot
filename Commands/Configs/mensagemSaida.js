const Discord = require("discord.js");
const admin = require("firebase-admin");
const database = admin.database();

module.exports = {
  name: "mensagemsaida",
  aliases: ['ms'],
  description: `Configure uma mensagem de adeus`,
  usage: "mensagemsaida [titulo] [mensagem]",
    categories: "Configurações",
  run: async (client, message, args) => {
    const titulo = args[0];
    const mensagem = args.slice(1).join(" ");

    let ajuda = new Discord.EmbedBuilder()
    .setTitle(`📝 Mensagem de saida`)
    .setDescription(`
    Lembre-se de usar um TITULO e uma MENSAGEM para configurar a mensagem de saida.

    **Tags:**
    [username] - Mostra o nome do usuário.
    [usertag] - Mostra a tag do usuário.
    [userid] - Mostra o id do usuário.
    [servername] - Mostra o nome do servidor.
    [serverid] - Mostra o id do servidor.
    [contagem] - Mostra a contagem de membros do servidor.

    Exemplo: <prefix>mensagementrada [servername]! Adeus [username]!`)
    .setColor(0x2f3136)

    if (!titulo) return message.reply({ embeds: [ajuda]})
    if (!mensagem) return message.reply({ embeds: [ajuda]})

    let titleDir = `guild/${message.guild.id}/settings/bye/titulo`
    let messageDir = `guild/${message.guild.id}/settings/bye/mensagem`

    if (!message.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) {
        return message.reply(`:x: Você precisa ter permissão de **gerenciar canais** para usar esse comando`)
    }

    database.ref(messageDir).set(String(`${mensagem}`))

    database.ref(titleDir).set(String(`${titulo}`))

    message.reply(`Mensagem de saida foi setada com sucesso`)
  },
};
