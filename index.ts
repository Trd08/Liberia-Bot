import discordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new discordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Online!')
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return

    if(message.content.toLowerCase().includes("liberia")) {
        message.channel.send({
            content: "Liberia officially the Republic of Liberia, is a country on the West African coast. It is bordered by Sierra Leone to its northwest, Guinea to its north, Ivory Coast to its east, and the Atlantic Ocean to its south and southwest. It has a population of around 5 million and covers an area of 111,369 square kilometers (43,000 sq mi). English is the official language, but over 20 indigenous languages are spoken, reflecting the country's ethnic and cultural diversity. The country's capital and largest city is Monrovia.",
        })
    }

    if(message.content.toLowerCase().includes("found")) {
        message.channel.send({
            content: "Liberia began in the early 19th century as a project of the American Colonization Society (ACS), which believed black people would face better chances for freedom and prosperity in Africa than in the United States.[7] Between 1822 and the outbreak of the American Civil War in 1861, more than 15,000 freed and free-born black people who faced social and legal oppression in the U.S., along with 3,198 Afro-Caribbeans, relocated to Liberia.[8] Gradually developing an \"Americo-Liberian\" identity, the settlers carried their culture and tradition with them; the Liberian constitution and flag were modeled after those of the U.S., while its capital was named after ACS supporter and U.S. President James Monroe. Liberia declared independence on July 26, 1847, which the U.S. did not recognize until February 5, 1862. On January 3, 1848, Joseph Jenkins Roberts, a wealthy, free-born African American from the U.S. state of Virginia who settled in Liberia, was elected Liberia's first president after the people proclaimed independence.[8]",
        })
    }

    if(message.content.toLowerCase().includes("independence")) {
        message.channel.send({
            content: "Liberia was the first African republic to proclaim its independence and is Africa's first and oldest modern republic. It was among the few African countries to maintain its sovereignty during the Scramble for Africa. During World War II, Liberia supported the United States war effort against Germany, and in turn received considerable American investment in infrastructure, which aided the country's wealth and development. President William Tubman encouraged economic and political changes that heightened the country's prosperity and international profile; Liberia was a founding member of the League of Nations, United Nations, and the Organisation of African Unity. ",
        })
    }

    if(message.content.toLowerCase().includes("opress")) {
        message.channel.send({
            content: "The Americo-Liberian settlers did not relate well to the indigenous peoples they encountered, especially those living in the more isolated interior. Colonial settlements were raided by the Kru and Grebo from their inland chiefdoms. Americo-Liberians promoted religious organizations to set up missions and schools to educate the native populace.[9] Americo-Liberians formed into a small elite that held disproportionate political power; indigenous Africans were excluded from birthright citizenship in their own land until 1904.[9][10]",
        })
    }

    if(message.content.toLowerCase().includes("tension")) {
        message.channel.send({
            content: "In 1980, political tensions from the rule of William R. Tolbert resulted in a military coup during which Tolbert was killed, marking the end of Americo-Liberian rule in the country and beginning over two decades of political instability. Five years of military rule by the People's Redemption Council and five years of civilian rule by the National Democratic Party of Liberia were followed by the First and Second Liberian Civil Wars. These resulted in the deaths of 250,000 people (about 8% of the population) and the displacement of many more, with Liberia's economy shrinking by 90%.[11] A peace agreement in 2003 led to democratic elections in 2005, in which Ellen Johnson Sirleaf was elected president, making history as the first female president in the continent. National infrastructure and basic social services were severely affected by the conflicts as well as by the 2013–2016 outbreak of Ebola virus, with 83% of the population living below the international poverty line as of 2015.[12]",
        })
    }

    if(message.content.toLowerCase().includes("indigenous")) {
        message.channel.send({
            content: "The presence of Oldowan Earlier Stone Age (earliest ESA) artifacts in West Africa has been confirmed by Michael Omolewa, attesting to the presence of ancient humans.[13]",
        })
        message.channel.send({
            content: "Undated Acheulean (ESA) artifacts are well documented across West Africa. The emerging chronometric record of the Middle Stone Age (MSA) indicates that core and flake technologies have been present in West Africa since at least the Middle Pleistocene (~780–126 thousand years ago or ka) in northern, open Sahelian zones, and that they persisted until the Terminal Pleistocene/Holocene boundary (~12ka) in both northern and southern zones of West Africa. This makes them the youngest examples of such MSA technology anywhere in Africa. The presence of MSA populations in forests remains an open question; however technological differences may correlate with various ecological zones. Later Stone Age (LSA) populations evidence significant technological diversification, including both microlithic and macrolithic traditions.[14]",
        })
        message.channel.send({
            content: "The record shows that aceramic and ceramic Later Stone Age (LSA) assemblages in West Africa overlap chronologically, and that changing densities of microlithic industries from the coast to the north are geographically structured. These features may represent social networks or some form of cultural diffusion allied to changing ecological conditions.[14]",
        })
        message.channel.send({
            content: "Microlithic industries with ceramics became common by the Mid-Holocene, coupled with an apparent intensification of wild food exploitation. Between ~4–3.5ka, these societies gradually transformed into food producers, possibly through contact with northern pastoralists and agriculturalists, as the environment became more arid. However, hunter-gatherers have survived in the more forested parts of West Africa until much later, attesting to the strength of ecological boundaries in this region.[14] ",
        })
    }
})

client.login(process.env.TOKEN)