const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.bot) return
  
  if (msg.content.includes("Liberia") || msg.content.includes("liberia")) {
    msg.channel.send("Liberia (/laɪˈbɪəriə/), officially the Republic of Liberia, is a country on the West African coast. It is bordered by Sierra Leone to its northwest, Guinea to its north, Ivory Coast to its east, and the Atlantic Ocean to its south and southwest. It has a population of around 5 million and covers an area of 111,369 square kilometers (43,000 sq mi). English is the official language, but over 20 indigenous languages are spoken, reflecting the country's ethnic and cultural diversity. The country's capital and largest city is Monrovia.");
  }
  
  if (msg.content.includes("Founding") || msg.content.includes("founding")) {
    msg.channel.send("Liberia began in the early 19th century as a project of the American Colonization Society (ACS), which believed black people would face better chances for freedom and prosperity in Africa than in the United States.[7] Between 1822 and the outbreak of the American Civil War in 1861, more than 15,000 freed and free-born black people who faced social and legal oppression in the U.S., along with 3,198 Afro-Caribbeans, relocated to Liberia.[8] Gradually developing an \"Americo-Liberian\" identity, the settlers carried their culture and tradition with them; the Liberian constitution and flag were modeled after those of the U.S., while its capital was named after ACS supporter and U.S. President James Monroe. Liberia declared independence on July 26, 1847, which the U.S. did not recognize until February 5, 1862. On January 3, 1848, Joseph Jenkins Roberts, a wealthy, free-born African American from the U.S. state of Virginia who settled in Liberia, was elected Liberia's first president after the people proclaimed independence.[8]");
  }
})

client.login(process.env.TOKEN)
