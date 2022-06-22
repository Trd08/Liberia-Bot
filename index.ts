import discordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

function getRandomInt() {
    return Math.floor(Math.random() * (10 - 0) + 0); //The maximum is exclusive and the minimum is inclusive
  }
  

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
    //if(getRandomInt() != 1) return
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
    if(message.content.toLowerCase().includes("coup") || message.content.toLowerCase().includes("war") || message.content.toLowerCase().includes("fraud") || message.content.toLowerCase().includes("civil") || message.content.toLowerCase().includes("fight") || message.content.toLowerCase().includes("factions") || message.content.toLowerCase().includes("insurrection") || message.content.toLowerCase().includes("force") || message.content.toLowerCase().includes("troops")) {
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
    if(message.content.toLowerCase().includes("attacks")) {
        message.channel.send({
            content: "In March 2003, a second rebel group, Movement for Democracy in Liberia, began launching attacks against Taylor from the southeast.[49] Peace talks between the factions began in Accra in June of that year, and Taylor was indicted by the Special Court for Sierra Leone for crimes against humanity the same month.[48] By July 2003, the rebels had launched an assault on Monrovia.[50] Under heavy pressure from the international community and the domestic Women of Liberia Mass Action for Peace movement,[51] Taylor resigned in August 2003 and went into exile in Nigeria.[52] A peace deal was signed later that month.[53]",
        })
    }
    if(message.content.toLowerCase().includes("peace")) {
        message.channel.send({
            content: "The United Nations Mission in Liberia began arriving in September 2003 to provide security and monitor the peace accord,[54] and an interim government took power the following October.[55] The subsequent 2005 elections were internationally regarded as the freest and fairest in Liberian history.[56] Ellen Johnson Sirleaf, a US-educated economist, former Minister of Finance and future Nobel Prize for Peace winner, was elected as the first female president in Africa.[56] Upon her inauguration, Sirleaf requested the extradition of Taylor from Nigeria and transferred him to the SCSL for trial in The Hague.[57][58]",
        })
    }
    if(message.content.toLowerCase().includes("crimes")) {
        message.channel.send({
            content: "In 2006, the government established a Truth and Reconciliation Commission to address the causes and crimes of the civil war.[59] In 2011, July 26 was proclaimed by President Ellen Johnson Sirleaf to be observed as National Independence Day.[60] In October 2011, peace activist Leymah Gbowee received the Nobel Peace Prize in her work of leading a women's peace movement that brought to an end to the Second Liberian Civil War in 2003.",
        })
    }
    if(message.content.toLowerCase().includes("truth")) {
        message.channel.send({
            content: "In 2006, the government established a Truth and Reconciliation Commission to address the causes and crimes of the civil war.[59] In 2011, July 26 was proclaimed by President Ellen Johnson Sirleaf to be observed as National Independence Day.[60] In October 2011, peace activist Leymah Gbowee received the Nobel Peace Prize in her work of leading a women's peace movement that brought to an end to the Second Liberian Civil War in 2003.",
        })
    }
    if(message.content.toLowerCase().includes("football")) {
        message.channel.send({
            content: "Following the 2017 Liberian general election, former professional football striker George Weah, one of the greatest African players of all time,[61][62] was sworn in as president on January 22, 2018, becoming the fourth youngest serving president in Africa.[63] The inauguration marked Liberia's first fully democratic transition in 74 years.[64] Weah cited fighting corruption, reforming the economy, combating illiteracy, and improving life conditions as the main targets of his presidency.[64]",
        })
    }
    if(message.content.toLowerCase().includes("geography") || message.content.toLowerCase().includes("location") || message.content.toLowerCase().includes("ocean") || message.content.toLowerCase().includes("biome") || message.content.toLowerCase().includes("water") || message.content.toLowerCase().includes("river") || message.content.toLowerCase().includes("high") || message.content.toLowerCase().includes("sea") || message.content.toLowerCase().includes("wind")) {
        message.channel.send({
            content: "Liberia is situated in West Africa, bordering the North Atlantic Ocean to the country's southwest. It lies between latitudes 4° and 9°N, and longitudes 7° and 12°W.\n\nThe landscape is characterized by mostly flat to rolling coastal plains that contain mangroves and swamps, which rise to a rolling plateau and low mountains in the northeast.[65]\n\nTropical rainforests cover the hills, while elephant grass and semi-deciduous forests make up the dominant vegetation in the northern sections.[65] The equatorial climate, in the south of the country, is hot year-round with heavy rainfall from May to October with a short interlude in mid-July to August.[65] During the winter months of November to March, dry dust-laden harmattan winds blow inland, causing many problems for residents.[65]\n\n",
        })
        message.channel.send({
            content: "Liberia's watershed tends to move in a southwestern pattern towards the sea as new rains move down the forested plateau off the inland mountain range of Guinée Forestière, in Guinea. Cape Mount near the border with Sierra Leone receives the most precipitation in the nation.[65]\n\nLiberia's main northwestern boundary is traversed by the Mano River while its southeast limits are bounded by the Cavalla River.[65] Liberia's three largest rivers are St. Paul exiting near Monrovia, the river St. John at Buchanan, and the Cestos River, all of which flow into the Atlantic. The Cavalla is the longest river in the nation at 515 kilometers (320 mi).[65]\n\nThe highest point wholly within Liberia is Mount Wuteve at 1,440 meters (4,724 ft) above sea level in the northwestern Liberia range of the West Africa Mountains and the Guinea Highlands.[65] However, Mount Nimba near Yekepa, is higher at 1,752 meters (5,748 ft) above sea level but is not wholly within Liberia as Nimba shares a border with Guinea and Ivory Coast and is their tallest mountain as well.[66]",
        })
    }
    if(message.content.toLowerCase().includes("forest")) {
        message.channel.send({
            content: "Forests on the coastline are composed mostly of salt-tolerant mangrove trees, while the more sparsely populated inland has forests opening onto a plateau of drier grasslands. The climate is equatorial, with significant rainfall during the May–October rainy season and harsh harmattan winds the remainder of the year. Liberia possesses about forty percent of the remaining Upper Guinean rainforest. It was an important producer of rubber in the early 20th century.[citation needed] Four terrestrial ecoregions lie within Liberia's borders: Guinean montane forests, Western Guinean lowland forests, Guinean forest–savanna mosaic, and Guinean mangroves.[67] It had a 2019 Forest Landscape Integrity Index mean score of 4.79/10, ranking it 116th globally out of 172 countries.[68] ",
        })
    }
    if(message.content.toLowerCase().includes("counties")) {
        message.channel.send({
            content: "Liberia is divided into fifteen counties, which, in turn, are subdivided into a total of 90 districts and further subdivided into clans. The oldest counties are Grand Bassa and Montserrado, both founded in 1839 prior to Liberian independence. Gbarpolu is the newest county, created in 2001. Nimba is the largest of the counties in size at 11,551 km2 (4,460 sq mi), while Montserrado is the smallest at 1,909 km2 (737 sq mi).[69] Montserrado is also the most populous county with 1,144,806 residents as of the 2008 census.[69]\n\nThe fifteen counties are administered by superintendents appointed by the president. The Constitution calls for the election of various chiefs at the county and local level, but these elections have not taken place since 1985 due to war and financial constraints.[70]\n\nParallel to the administrative divisions of the country are the local and municipal divisions. Liberia currently does not have any constitutional framework or uniform statutes which deal with the creation or revocation of local governments.[71] All existing local governments – cities, townships, and a borough – were created by specific acts of the Liberian government, and thus the structure and duties/responsibilities of each local government varies greatly from one to the other.",
        })
    }
    if(message.content.toLowerCase().includes("nature") || message.content.toLowerCase().includes("bad") || message.content.toLowerCase().includes("meat")) {
        message.channel.send({
            content: "Endangered species are hunted for human consumption as bushmeat in Liberia.[72] Species hunted for food in Liberia include elephants, pygmy hippopotamus, chimpanzees, leopards, duikers, and other monkeys.[72] Bushmeat is often exported to neighboring Sierra Leone and Ivory Coast, despite a ban on the cross-border sale of wild animals.[72]\n\nBushmeat is widely eaten in Liberia, and is considered a delicacy.[74] A 2004 public opinion survey found that bushmeat ranked second behind fish amongst residents of the capital Monrovia as a preferred source of protein.[74] Of households where bushmeat was served, 80% of residents said they cooked it \"once in a while,\" while 13% cooked it once a week and 7% cooked bushmeat daily.[74] The survey was conducted during the last civil war, and bushmeat consumption is now believed to be far higher.[74]\n\n",
        })
        message.channel.send({
            content: "Liberia is a global biodiversity hotspot—a significant reservoir of biodiversity that is under threat from humans.[75]\n\nSlash-and-burn agriculture is one of the human activities eroding Liberia's natural forests.[76] A 2004 UN report estimated that 99% of Liberians burned charcoal and fuel wood for cooking and heating, resulting in deforestation.[76]\n\nIllegal logging has increased in Liberia since the end of the Second Civil War in 2003.[75] In 2012, President Sirleaf granted licenses to companies to cut down 58% of all the primary rainforest left in Liberia.[75] After international protests, many of those logging permits were canceled.[75] In September 2014, Liberia and Norway struck an agreement whereby Liberia ceased all logging in exchange for $150 million in development aid.[75]\n\nPollution is a significant issue in Monrovia.[77] Since 2006, the international community has paid for all garbage collection and disposal in Monrovia via the World Bank.[78] ",
        })
    }
})
client.login(process.env.TOKEN)