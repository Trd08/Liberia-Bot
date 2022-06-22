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

    if(message.content.toLowerCase().includes("stone")) {
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
    if(message.content.toLowerCase().includes("indigenous")) {
        message.channel.send({
            content: "The Pepper Coast, also known as the Grain Coast, has been inhabited by indigenous peoples of Africa at least as far back as the 12th century. Mande-speaking people expanded westward from the Sudan, forcing many smaller ethnic groups southward toward the Atlantic Ocean. The Dei, Bassa, Kru, Gola, and Kissi were some of the earliest documented peoples in the area.[15]\n\nThis influx of these groups was compounded by the decline of the Western Sudanic Mali Empire in 1375 and the Songhai Empire in 1591. As inland regions underwent desertification, inhabitants moved to the wetter coast. These new inhabitants brought skills such as cotton spinning, cloth weaving, iron smelting, rice and sorghum cultivation, and social and political institutions from the Mali and Songhai empires.[15] Shortly after the Mane conquered the region, the Vai people of the former Mali Empire immigrated into the Grand Cape Mount County region. The ethnic Kru opposed the influx of Vai, forming an alliance with the Mane to stop further influx of Vai.[16]\n\nPeople along the coast built canoes and traded with other West Africans from Cap-Vert to the Gold Coast.",
        })
    }
    if(message.content.toLowerCase().includes("early")) {
        message.channel.send({
            content: "Between 1461 and the late 17th century, Portuguese, Dutch, and British traders had contacts and trading posts in the region. The Portuguese named the area Costa da Pimenta (\"Pepper Coast\") but it later came to be known as the Grain Coast, due to the abundance of melegueta pepper grains. European traders would barter commodities and goods with local people.",
        })
    }
    if(message.content.toLowerCase().includes("colonize")) {
        message.channel.send({
            content: "In the United States, there was a movement to settle free people of color, both free-born and formerly enslaved, in Africa. This was because they faced racial discrimination in the form of political disenfranchisement and the denial of civil, religious, and social rights.[17] Formed in 1816, the American Colonization Society (ACS) was made up mostly of Quakers and slaveholders. Quakers believed blacks would face better chances for freedom in Africa than in the U.S.[7][18] While slaveholders opposed freedom for enslaved people, they viewed \"repatriation\" of free people of color as a way to avoid slave rebellions.\n\nIn 1822, the American Colonization Society began sending free people of color to the Pepper Coast voluntarily to establish a colony. Mortality from tropical diseases was high — of the 4,571 emigrants who arrived in Liberia between 1820 and 1843, only 1,819 survived.[19][20] By 1867, the ACS (and state-related chapters) had assisted in the migration of more than 13,000 people of color from the United States and the Caribbean to Liberia.[21] These free African Americans and their descendants married within their community and came to identify as Americo-Liberians. Many were of mixed race and educated in American culture; they did not identify with the indigenous natives of the tribes they encountered. They intermarried largely within the colonial community, developing an ethnic group that had a cultural tradition infused with American notions of political republicanism and Protestant Christianity.[22]",
        })
    }
    if(message.content.toLowerCase().includes("settle")) {
        message.channel.send({
            content: "The Americo-Liberian settlers did not relate well to the indigenous peoples they encountered, especially those in communities of the more isolated \"bush\". The colonial settlements were raided by the Kru and Grebo, from their inland chiefdoms. Encounters with tribal Africans in the bush often became violent. Believing themselves different from and culturally and educationally superior to the indigenous peoples, the Americo-Liberians developed as an elite minority that created and held on to political power. In a conscious effort to emulate the American South, the Americo-Liberian settlers adopted clothing such as hoop skirts and tailcoats, and excluded natives from economic opportunities, including creating plantations on which natives were forced to work as slaves.[24] Indigenous tribesmen did not enjoy birthright citizenship in their own land until 1904.[10] Americo-Liberians encouraged religious organizations to set up missions and schools to educate the indigenous peoples.[24]",
        })
    }
    if(message.content.toLowerCase().includes("constitution")) {
        message.channel.send({
            content: "On July 26, 1847, the settlers issued a Declaration of Independence and promulgated a constitution. Based on the political principles of the United States Constitution, it established the independent Republic of Liberia.[25][26] On August 24, Liberia adopted its 11-striped national flag.[27] The United Kingdom was the first country to recognize Liberia's independence.[28] The United States did not recognize Liberia until 1862, after the Southern states, which had strong political power in the American government, declared their secession and the formation of the Confederacy.[29][30][31]",
        })
    }
    if(message.content.toLowerCase().includes("leader")) {
        message.channel.send({
            content: "The leadership of the new nation consisted largely of the Americo-Liberians, who initially established political and economic dominance in the coastal areas that the ACS had purchased; they maintained relations with U.S. contacts in developing these areas and the resulting trade. Their passage of the 1865 Ports of Entry Act prohibited foreign commerce with the inland tribes, ostensibly to \"encourage the growth of civilized values\" before such trade was allowed in the region.[25]",
        })
    }
    if(message.content.toLowerCase().includes("party")) {
        message.channel.send({
            content: "By 1877, the True Whig Party was the country's most powerful political entity.[32] It was made up primarily of Americo-Liberians, who maintained social, economic and political dominance well into the 20th century, repeating patterns of European colonists in other nations in Africa. Competition for office was usually contained within the party; a party nomination virtually ensured election.[32]",
        })
    }
    if(message.content.toLowerCase().includes("britain") || message.content.toLowerCase().includes("england") || message.content.toLowerCase().includes("united kingdom")) {
        message.channel.send({
            content: "Pressure from the United Kingdom, which controlled Sierra Leone to the northwest, and France, with its interests in the north and east, led to a loss of Liberia's claims to extensive territories. Both Sierra Leone and the Ivory Coast annexed territories.[33] Liberia struggled to attract investment to develop infrastructure and a larger, industrial economy.",
        })
    }
    if(message.content.toLowerCase().includes("decline")) {
        message.channel.send({
            content: "There was a decline in production of Liberian goods in the late 19th century, and the government struggled financially, resulting in indebtedness on a series of international loans.[34] On July 16, 1892, Martha Ann Erskine Ricks met Queen Victoria at Windsor Castle and presented her a handmade quilt, Liberia's first diplomatic gift. Born into slavery in Tennessee, Ricks said, \"I had heard it often, from the time I was a child, how good the Queen had been to my people—to slaves—and how she wanted us to be free.\"[28]",
        })
    }
    if(message.content.toLowerCase().includes("rubber")) {
        message.channel.send({
            content: "American and other international interests emphasized resource extraction, with rubber production a major industry in the early 20th century.[35] In 1914, Imperial Germany accounted for three quarters of the trade of Liberia. This was a cause for concern among the British colonial authorities of Sierra Leone and the French colonial authorities of French Guinea and the Ivory Coast as tensions with Germany increased.[36]",
        })
    }
    if(message.content.toLowerCase().includes("world war 1") || message.content.toLowerCase().includes("neutral")) {
        message.channel.send({
            content: "Liberia remained neutral during World War I until August 4, 1917, upon declaring war on Germany. Subsequently, it was one of 32 nations to take part in the Versailles Peace Conference in 1919, which ended the war and established the League of Nations; Liberia was among the few African and non-Western nations to participate in both the conference and the founding of the League.[37]",
        })
    }
    if(message.content.toLowerCase().includes("election")) {
        message.channel.send({
            content: "In 1927, the country's elections again showed the power of the True Whig Party, with electoral proceedings that have been called some of the most rigged ever; the winning candidate was declared to have received votes amounting to more than 15 times the number of eligible voters. (The loser actually received around 60% of the eligible vote.)",
        })
    }
    if(message.content.toLowerCase().includes("slavery")) {
        message.channel.send({
            content: "Soon after, allegations of modern slavery in Liberia led the League of Nations to establish the Christy commission. Findings included government involvement in widespread \"Forced or compulsory labour\". Minority ethnic groups especially were exploited in a system that enriched well-connected elites.[38] As a result of the report, President Charles D. B. King and Vice President Allen N. Yancy resigned.[39]",
        })
    }
    if(message.content.toLowerCase().includes("world war 2") || message.content.toLowerCase().includes("modern")) {
        message.channel.send({
            content: "In the mid-20th century, Liberia gradually began to modernize with American assistance. During World War II, the United States made major infrastructure improvements to support its military efforts in Africa and Europe against Germany. It built the Freeport of Monrovia and Roberts International Airport under the Lend-Lease program before its entry into the Second World War.[40]",
        })
    }
    if(message.content.toLowerCase().includes("invest")) {
        message.channel.send({
            content: "After the war, President William Tubman encouraged foreign investment, with Liberia achieving the second-highest rate of economic growth in the world during the 1950s.[40] In international affairs, it was a founding member of the United Nations, a vocal critic of South African apartheid,[41] a proponent of African independence from European colonial powers, and a supporter of Pan-Africanism. Liberia also helped to fund the Organisation of African Unity.[42]",
        })
    }
    if(message.content.toLowerCase().includes("coup") || message.content.toLowerCase().includes("war") || message.content.toLowerCase().includes("fraud") || message.content.toLowerCase().includes("civil") || message.content.toLowerCase().includes("fight") || message.content.toLowerCase().includes("factions") || message.content.toLowerCase().includes("peace") || message.content.toLowerCase().includes("insurrection") || message.content.toLowerCase().includes("force") || message.content.toLowerCase().includes("troops")) {
        message.channel.send({
            content: "On April 12, 1980, a military coup led by Master Sergeant Samuel Doe of the Krahn ethnic group overthrew and killed President William R. Tolbert, Jr. Doe and the other plotters later executed a majority of Tolbert's cabinet and other Americo-Liberian government officials and True Whig Party members.[43] The coup leaders formed the People's Redemption Council (PRC) to govern the country.[43] A strategic Cold War ally of the West, Doe received significant financial backing from the United States while critics condemned the PRC for corruption and political repression.[43]",
        })
        message.channel.send({
            content: "After Liberia adopted a new constitution in 1985, Doe was elected president in subsequent elections that were internationally condemned as fraudulent.[43] On November 12, 1985, a failed counter-coup was launched by Thomas Quiwonkpa, whose soldiers briefly occupied the national radio station.[44] Government repression intensified in response, as Doe's troops retaliated by executing members of the Gio and Mano ethnic groups in Nimba County.[44]",
        })
        message.channel.send({
            content: "The National Patriotic Front of Liberia (NPFL), a rebel group led by Charles Taylor, launched an insurrection in December 1989 against Doe's government with the backing of neighboring countries such as Burkina Faso and Ivory Coast. This triggered the First Liberian Civil War.[45] By September 1990, Doe's forces controlled only a small area just outside the capital, and Doe was captured and executed in that month by rebel forces.[46]",
        })
        message.channel.send({
            content: "The rebels soon split into various factions fighting one another. The Economic Community Monitoring Group under the Economic Community of West African States organized a military task force to intervene in the crisis.[46][failed verification] From 1989 to 1997 around 60,000 to 80,000 Liberians died, and, by 1996, around 700,000 others had been displaced into refugee camps in neighboring countries.[47] A peace deal between warring parties was reached in 1995, leading to Taylor's election as president in 1997.[46]",
        })
        message.channel.send({
            content: "Under Taylor's leadership, Liberia became internationally known as a pariah state due to its use of blood diamonds and illegal timber exports to fund the Revolutionary United Front in the Sierra Leone Civil War.[48] The Second Liberian Civil War began in 1999 when Liberians United for Reconciliation and Democracy, a rebel group based in the northwest of the country, launched an armed insurrection against Taylor.[49]",
        })
    }
})

client.login(process.env.TOKEN)