var iFileName = "TalDoreiCampaignSetting.js";
RequiredSheetVersion(12.999);
// This file adds the subclasses, backgrounds and feats from Matthew Mercer's Tal'Dorei Campaign Setting to MPMB's Character Record Sheet

// Define the source
SourceList.TDCS = {
    name: "Tal'Dorei Campaign Setting",
    abbreviation: "TDCS",
    group: "Third Party Sources",
    url: "https://greenroninstore.com/products/critical-role-tal-dorei-campaign-setting-5e-pdf",
    date: "2018/1/3"
};

// Add 1 subclass for the Cleric
AddSubClass("cleric", "blood domain-tdcs", {
    regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(blood|health|vitality)).*$/i,
    subname: "Blood Domain",
    source: ["TDCS", 101],
    spellcastingExtra: ["sleep", "ray of sickness", "ray of enfeeblement", "crown of madness", "haste", "slow", "blight", "stoneskin", "dominate person", "hold monster"],
    features: {
          "subclassfeature1" : {
               name : "Bonus Proficiency",
               source : ["TDCS", 62],
               minlevel : 1,
               weapons : [true, true],
               description : desc([
                    "I gain proficiency with martial weapons."
               ])
},
          "subclassfeature1.1" : {
               name : "Bloodletting Focus",
               source : ["TDCS", 101],
               minlevel : 1,
               description : desc([
                    "When I use a spell of 1st level or higher to damage creatures who have blood, those",
				    "creatures suffer additional necrotic damage equal to 2 + spell level."
               ])
          },
          "subclassfeature2" : {
               name : "Channel Divinity: Blood Puppet",
               source : ["TDCS", 101],
               minlevel : 2,
			   usages : [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
			   recovery : "short rest",
			   eval : "AddAction(\"action\", \"Blood Puppet\", \"Blood Domain Cleric\")",
			   removeeval : "RemoveAction(\"action\", \"Blood Puppet\", \"Blood Domain Cleric\")",
               description : desc([
                    "I can briefly control a creature's actions against its will. As an action, I target a Large",
                    "or smaller creature within 60 feet that has blood. That creature must succeed on a",
                    "Constitution save against my spell save DC or immediately move up to half of its movement",
                    "in a direction of my choice and make a single weapon attack against a creature of my choice",
                    "within range. Dead or unconscious creatures automatically fail their save. At 8th level, I",
                    "can target a Huge or smaller creature."
               ])
          },
          "subclassfeature6" : {
               name : "Channel Divinity: Crimson Bond",
               source : ["TDCS", 101],
               minlevel : 6,
			   usages : [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
			   recovery : "short rest",
			   eval : "AddAction(\"action\", \"Crimson Bond\", \"Blood Domain Cleric\")",
			   removeeval : "RemoveAction(\"action\", \"Crimson Bond\", \"Blood Domain Cleric\")",
               description : desc([
                    "I can use my Channel Divinity to focus on a sample of blood of 2 oz or greater that is less",
                    "than a week old. As an action, I learn the creature's approximate distance and direction",
                    "from me, as well as their general state of health, if they are within 10 miles of me. I can",
                    "maintain this effect for up to 1 hour as though concentrating on a spell. During this bond,",
                    "I can spend an action to attempt to connect with the bonded creature's senses. The target",
                    "makes a Constitution save against my spell save DC. On success, they resist the bond and I",
                    "suffer 2d6 necrotic damage. On failure, I can either see through their eyes or hear through",
                    "their ears for a number of rounds equal to my Wisdom modifier (minimum 1). During this",
                    "time I am blind or deaf in my own senses. Once this connection ends, the bond is lost."
               ])
          },
          "subclassfeature8" : {
               name : "Sanguine Recall",
               source : ["TDCS", 102],
               minlevel : 8,
			   usages : 1,
			   recovery : "long rest",
			   eval : "AddAction(\"action\", \"Sanguine Recall\", \"Blood Domain Cleric\")",
			   removeeval : "RemoveAction(\"action\", \"Sanguine Recall\", \"Blood Domain Cleric\")",
               description : desc([
                    "Once per long rest, I can sacrifice some of my vitality to recover expended spell slots.",
                    "As an action, I recover spell slots with a combined level equal to or less than half my",
                    "cleric level rounded up. None of these slots can be greater than 5th level. I immediately",
                    "suffer 1d6 necrotic damage per spell slot level recovered."
               ]),
               },
          },
          "subclassfeature17" : {
               name : "Vascular Corruption Aura",
               source : ["TDCS", 102],
               minlevel : 17,
			   usages : 1,
			   recovery : "long rest",
			   eval : "AddAction(\"action\", \"Sanguine Recall\", \"Blood Domain Cleric\")",
			   removeeval : "RemoveAction(\"action\", \"Sanguine Recall\", \"Blood Domain Cleric\")",
               description : desc([
                    "As an action, I emit a magical aura within 30 feet of me that pulses necrotic energy",
                    "through my foes. For 1 minute, enemy creatures with blood that begin their turn within the",
                    "aura or enter it for the first time on their turn immediately suffer 2d6 necrotic damage.",
                    "Any affected creature that would regain hit points within the aura only regains half the",
                    "intended amount, rounded up. I can't use this feature again until I finish a long rest."
               ])
          }
     }
);

// Add 1 subclass for the Barbarian
AddSubClass("barbarian", "juggernaut-tdcs", {
     regExpSearch : /juggernaut/i,
     subname : "Path of the Juggernaut",
     source : ["TDCS", 102],
     features : {
          "subclassfeature3" : {
               name : "Thunderous Blows",
               source : ["TDCS", 102],
               minlevel : 3,
               description : desc([
                    "Once per turn while raging, when I damage a creature with a melee attack, I can force the",
                    "target to make a Strength saving throw (DC 8 + proficiency bonus + Strength modifier).",
                    "On a failure, I can push the target 5 feet away from me and immediately move 5 feet into",
                    "the target's previous position."
               ])
          },
          "subclassfeature3.1" : {
               name : "Stance of the Mountain",
               source : ["TDCS", 102],
               minlevel : 3,
               savetxt : { immune : ["prone"] },
               description : desc([
                    "I can no longer be knocked prone while raging."
               ])
          },
          "subclassfeature6" : {
               name : "Demolishing Might",
               source : ["TDCS", 102],
               minlevel : 6,
               description : desc([
                    "My melee attacks deal double damage to objects and structures. If I hit a construct with",
                    "a melee attack, it takes an additional 1d8 weapon damage."
               ])
          },
          "subclassfeature10" : {
               name : "Overwhelming Cleave",
               source : ["TDCS", 102],
               minlevel : 10,
			   eval : "AddAction(\"bonus action\", \"raging: Overwhelming Cleave\", \"Juggernaut Barbarian\")",
			   removeeval : "RemoveAction(\"bonus action\", \"raging: Overwhelming Cleave\", \"Juggernaut Barbarian\")",
               description : desc([
                    "When I make a weapon attack while raging, I can make another attack as a bonus action with",
                    "the same weapon, targeting a different creature that is within 5 feet of the original target",
                    "and is within range of my weapon."
               ]),
          },
          "subclassfeature14" : {
               name : "Unstoppable",
               source : ["TDCS", 103],
               minlevel : 14,
               description : desc([
                    "I can become unstoppable while raging. If I do so, my speed cannot be reduced and I become",
                    "immune to the frightened, paralyzed and stunned conditions. If I am already frightened,",
                    "paralyzed or stunned, I can still use my bonus action to enter a rage and suspend the effects",
                    "for the duration of my rage. When my rage ends, I suffer 1 level of exhaustion."
               ])
          }
     }
});

// Add 1 subclass for the Monk
AddSubClass("monk", "way of the cobalt soul-tdcs", {
     regExpSearch : /^((?=.*cobalt)(?=.*soul))|((?=.*cobalt)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
     subname : "Way of the Cobalt Soul",
     source : ["TDCS", 104],
     fullname : "Cobalt Soul",
     features : {
          "subclassfeature3" : {
               name : "Mystical Erudition",
               source : ["TDCS", 104],
               minlevel : 3,
               languageProfs : [1],
               description : desc([
                    "When I make an Intelligence (Arcana), Intelligence (History) or Intelligence (Religion)",
                    "check, I can spend 1 ki point to gain advantage on the roll. I also learn one additional",
                    "language, plus one additional language each at 11th and 17th level."
               ])
          },
          "subclassfeature3.1" : {
               name : "Extract Aspects",
               source : ["TDCS", 104],
               minlevel : 3,
               description : desc([
                    "When I hit a single creature with two or more attacks in one round, I can spend 1 ki point",
                    "to force the target to make a Constitution saving throw. On a failure, I learn one aspect",
                    "about the creature: Creature Type, Armor Class, Senses, Highest Saving Throw Modifier,",
				    "Lowest Saving Throw Modifier, Damage Vulnerabilities, Damage Resistances, Damage",
				    "Immunities, or Condition Immunities. Upon reaching 6th level, I can choose two aspects to",
				    "learn. This increases to three at 11th level and four at 17th level."
               ]),
          },
          "subclassfeature6" : {
               name : "Extort Truth",
               source : ["TDCS", 104],
               minlevel : 6,
               description : desc([
                    "If I hit a single creature with two or more attacks in a rounnd, I can spend 2 ki points to",
                    "force them to make a Charisma saving throw. I can choose to have these attacks deal",
                    "no damage. On a failed save, the target is unable to lie for one minute. I know whether",
                    "the target succeeeded or failed the saving throw. An affected creature is aware",
                    "of the affect and can avoid answering or give evasive answers."
               ])
          },
               "subclassfeature6.1" : {
               name : "Mind of Mercury",
               source : ["TDCS", 104],
               minlevel : 6,
			   eval : "AddAction(\"reaction\", \"Mind of Mercury\", \"Cobalt Soul Monk\")",
			   removeeval : "RemoveAction(\"reaction\", \"Mind of Mercury\", \"Cobalt Soul Monk\")",
               description : desc([
                    "I can take additional reactions each round equal to my Intelligence modifier (minimum 1)",
                    "spending 1 ki point for each reaction beyond the first. I can only use one reaction per",
                    "trigger. I can also spend 1 ki point for advantage on an Intelligence (Investigation) check."
               ])
          },
          "subclassfeature11" : {
               name : "Preternatural Counter",
               source : ["TDCS", 104],
               minlevel : 11,
			   eval : "AddAction(\"reaction\", \"Preternatural Counter\", \"Cobalt Soul Monk\")",
			   removeeval : "RemoveAction(\"reaction\", \"Preternatural Counter\", \"Cobalt Soul Monk\")",
               description : "\n   " + "If a creature misses me with an attack, I can use my reaction to make a melee attack against them."
          },
               "subclassfeature11.1" : {
               name : "Mystical Erudition 2",
               source : ["TDCS", 104],
               minlevel : 11,
               languageProfs : [1],
               description : "\n   " + "My expanded knowledge allows me to learn a second additional language."
          },
          "subclassfeature17" : {
               name : "Debilitating Barrage",
               source : ["TDCS", 104],
               minlevel : 17,
               description : desc([
                    "When I hit a single creature with 3 or more attacks in one round, I can spend 3 ki points",
                    "to give the target disadvantage on their attacks until the end of your next turn.",
                    "The target must also make a Constitution saving throw or suffer vulnerability to a damage",
                    "type of my choice for 1 minute, or until after they take any damage of that type.",
                    "Creatures with resistance or immunity to my chosen damage type do not suffer this effect."
               ])
          },
               "subclassfeature17.1" : {
               name : "Mystical Erudition 3",
               source : ["TDCS", 104],
               minlevel : 17,
               description : "\n   " + "My mastery of mystical knowledge allows me to learn a third additional language.",
               languageProfs : [1]
          }
     }
});

// Add 1 subclass for the Sorcerer
AddSubClass("sorcerer", "runechild-tdcs", {
     regExpSearch : /^(?=.*rune)(?=.*child).*$/i,
     subname : "Runechild",
     source : ["TDCS", 103],
     fullname : "Runechild",
     spellcastingList : {
          "class" : ["sorcerer"]
     },
     features : {
          "subclassfeature1" : {
               name : "Essence Runes",
               source : ["TDCS", 103],
               minlevel : 1,
			   eval : "AddAction(\"bonus action\", \"Charge Runes (points)\", \"Runechild\")",
			   removeeval : "RemoveAction(\"bonus action\", \"Charge Runes (points)\", \"Runechild\")",
			   eval : "AddAction(\"action\", \"Charge Rune\", \"Runechild\")",
			   removeeval : "RemoveAction(\"action\", \"Charge Rune\", \"Runechild\")",
               description : desc([
                    "I start with 1 Essence Rune on my forehead, which remains invisible when not charged.",
                    "I gain an additional Rune with each level of this class. At the end of a turn in which I",
                    "spent a number of sorcery points, an equal number of Runes become charged. As a bonus",
                    "action, I can expend any number of sorcery points to charge an equal number of Runes. If I",
                    "have no sorcery points and no charged Runes, I can charge a Rune as an action. If I have 5 or",
                    "more charged Runes, I emit bright light in a 5 foot radius and dim light for an additional 5",
                    "feet. Any charged Runes revert to inert Runes after I complete a long rest."
               ])
          },
          "subclassfeature1.2" : {
               name : "Glyphs of Aegis",
               source : ["TDCS", 103],
               minlevel : 1,
			   eval : "AddAction(\"reaction\", \"Glyphs of Aegis\", \"Runechild\")",
			   removeeval : "RemoveAction(\"reaction\", \"Glyphs of Aegis\", \"Runechild\")",
               description : desc([
                    "When I take damage, I can use a reaction to expend any number of charged Runes, subtracting",
                    "1d6 per Rune expended from the damage taken."
               ])
          },
          "subclassfeature6" : {
               name : "Sigilic Augmentation",
               source : ["TDCS", 103],
               minlevel : 6,
			   eval : "AddAction(\"bonus action\", \"Sigilic Augmentation\", \"Runechild\")",
			   removeeval : "RemoveAction(\"bonus action\", \"Sigilic Augmentation\", \"Runechild\")",
               description : desc([
                    "I can expend a charged Rune as a bonus action to enhance either Strength, Dexterity or",
                    "Consitution, granting myself advantage on ability checks with that ability until the start",
                    "of my next turn. I can maintain this ability for additional rounds by expending a charged Rune",
                    "at the start of each of my following turns."
               ])
          },
          "subclassfeature6.1" : {
               name : "Manifest Inscriptions",
               source : ["TDCS", 103],
               minlevel : 6,
			   eval : "AddAction(\"action\", \"Manifest Inscriptions\", \"Runechild\")",
			   removeeval : "RemoveAction(\"action\", \"Manifest Inscriptions\", \"Runechild\")",
               description : desc([
                    "As an action, I can expend a charged Rune to reveal any hidden magical marks, runes, wards",
                    "or glyphs within 15 feet to glow for 1 round. This glow casts dim light for a 5 foot radius."
               ])
          },
          "subclassfeature6.2" : {
               name : "Warding Glyph",
               source : ["TDCS", 103],
               minlevel : 6,
			   eval : "AddAction(\"action\", \"Warding Glyph\", \"Runechild\")",
			   removeeval : "RemoveAction(\"action\", \"Warding Glyph\", \"Runechild\")",
               description : desc([
                    "As an action, I can expend a charged Rune to transfer a Glyph of Aegis to a creature I touch.",
                    "A creature can only hold one Glyph, which lasts for 1 hour or until the creature takes",
                    "damage. The next time the creature takes damage, subtract 1d6 damage from the total. The",
                    "Glyph then vanishes."
               ])
          },
          "subclassfeature14" : {
               name : "Runic Torrent",
               source : ["TDCS", 103],
               minlevel : 14,
               description : desc([
                    "When I cast a spell, I can expend a number of charged Runes equal to the spell's level to",
                    "allow it to ignore resistance or immunity to the spell's damage type."
               ])
          },
          "subclassfeature18" : {
               name : "Arcane Exemplar",
               source : ["TDCS", 103],
               minlevel : 18,
			   usages : 1,
			   recovery: "long rest",
			   eval : "AddAction(\"bonus action\", \"Arcane Exemplar\", \"Runechild\")",
			   removeeval : "RemoveAction(\"bonus action\", \"Arcane Exemplar\", \"Runechild\")",
               description : desc([
                    "As a bonus action, I can expend 6 or more charged Runes to become a being of pure energy.",
                    "This new form lasts for 3 rounds, plus 1 round for each Rune expended above 6. While",
                    "transformed, I have a flying speed of 40, my spell save DC increases by 2, I resist damage",
                    "from spells, and casting a spell of 1st level or higher heals me by a number of Hit Points",
                    "equal to the spell's level. When this form ends, I can't move or take actions until after",
                    "my next turn. I can use this feature once per long rest."
               ]),
          }
     }
});

// Add backgrounds
BackgroundList.clasp = {
     regExpSearch : /(Clasp|criminal|blackmailer|burglar|fence|robber|killer|assassin|pickpocket|smuggler)/i,
     name : "Clasp Member",
     source : ["TDCS", 105],
     skills : ["Deception", "either Sleight of Hand or Stealth"],
     gold : 15,
     equipright : [
          ["Dark, common clothes with hood", "", 3],
          ["Tools to match your chosen proficiency", "", 10],
          ["Belt pouch (with coins)", "", 1]
     ],
     feature : "A Favor in Turn",
     trait : [
          "I always have a plan for what to do when things go wrong.",
          "I am always calm, no matter the situation. I never raise my voice or let my emotions control me.",
          "The first thing I do in a new place is note the locations of everything valuable \u2015 or where such things could be hidden.",
          "I would rather make a new friend than a new enemy.",
          "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
          "I don't pay attention to the risks in a situation. Never tell me the odds.",
          "The best way to get me to do something is to tell me I can't do it.",
          "I blow up at the slightest insult."
     ],
     ideal : [
          ["Honor",
               "Honor: I don't steal from others in the trade. (Lawful)"
          ],
          ["Freedom",
               "Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)"
          ],
          ["Charity",
               "Charity: I steal from the wealthy so that I can help people in need. (Good)"
          ],
          ["Greed",
               "Greed: I will do whatever it takes to become wealthy. (Evil)"
          ],
          ["People",
               "People: I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
          ],
          ["Redemption",
               "Redemption: There's a spark of good in everyone. (Good)"
          ]
     ],
     bond : [
          "I'm trying to pay off an old debt I owe to a generous benefactor.",
          "My ill-gotten gains go to support my family.",
          "Something important was taken from me, and I aim to steal it back.",
          "I will become the greatest thief that ever lived.",
          "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
          "Someone I loved died because of a mistake I made. That will never happen again."
     ],
     flaw : [
          "When I see something valuable, I can't think about anything but how to steal it.",
          "When faced with a choice between money and my friends, I usually choose the money.",
          "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
          "I have a \"tell\" that reveals when I'm lying.",
          "I turn tail and run when things look bad.",
          "An innocent person is in prison for a crime that I committed. I'm okay with that."
     ],
     extra : [
          "Select a Criminal Specialty",
          "Blackmailer",
          "Burglar",
          "Enforcer",
          "Fence",
          "Highway robber",
          "Hired killer",
          "Pickpocket",
          "Smuggler",
          "Spy"
     ],
     toolProfs : [["Thieves' Tools, Forgery Kit or Disguise Kit", 1]],
     lifestyle : "poor"
};
BackgroundList.lyceum = {
     regExpSearch : /(lyceum|student|scholar|researcher|archivist)/i,
     name : "Lyceum Student",
     source : ["TDCS", 105],
     skills : ["Arcana", "either History or Persuasion"],
     gold : 10,
     equipright : [
          ["Fine clothes", "", 5],
          ["Student uniform", "", 3],
          ["Belt pouch (with coins)", "", 1],
          ["Writing supplies", "", 1]
     ],
     feature : "Student Privilege",
     trait : [
          "I use polysyllabic words that convey the impression of great erudition.",
          "I've read every book in the world's greatest libraries\u2015 or I like to boast that I have.",
          "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
          "There's nothing I like more than a good mystery.",
          "I'm willing to listen to every side of an argument before I make my own judgment.",
          "I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost. . . everyone . . . is . . . compared . . . to me.",
          "I am horribly, horribly awkward in social situations.",
          "I'm convinced that people are always trying to steal my secrets."
     ],
     ideal : [
          ["Knowledge",
               "Knowledge: The path to power and self-improvement is through knowledge. (Neutral)"
          ],
          ["Beauty",
               "Beauty: What is beautiful points us beyond itself toward what is true. (Good)"
          ],
          ["Logic",
               "Logic: Emotions must not cloud our logical thinking. (Lawful)"
          ],
          ["No Limits",
               "No Limits: Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)"
          ],
          ["Power",
               "Power: Knowledge is the path to power and domination. (Evil)"
          ],
          ["Self-Improvement",
               "Self-Improvement: The goal of a life of study is the betterment of oneself. (Any)"
          ]
     ],
     bond : [
          "It is my duty to protect my students.",
          "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
          "I work to preserve a library, university, scriptorium, or monastery.",
          "My life's work is a series of tomes related to a specific field of lore.",
          "I've been searching my whole life for the answer to a certain question.",
          "I sold my soul for knowledge. I hope to do great deeds and win it back."
     ],
     flaw : [
          "I am easily distracted by the promise of information.",
          "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
          "Unlocking an ancient mystery is worth the price of a civilization.",
          "I overlook obvious solutions in favor of complicated ones.",
          "I speak without really thinking through my words, invariably insulting others.",
          "I can't keep a secret to save my life, or anyone else's."
     ],
     extra : ["Select a Specialty",
          "Alchemist",
          "Astronomer",
          "Discredited academic",
          "Librarian",
          "Professor",
          "Researcher",
          "Wizard's apprentice",
          "Scribe"
     ],
     languageProfs : [2],
     lifestyle : "modest"
};
BackgroundList.ashari = {
     regExpSearch : /^(?!.*urban)(?=.*(druid|Ashari|outlander|forester|trapper|homesteader|guide|exile|outcast|bounty.?hunter|tribal|nomad|hunter-gatherer|tribal.?marauder)).*$/i,
     name : "Ashari",
     source : ["TDCS", 107],
     skills : ["Nature", "either Arcana or Survival"],
     gold : 10,
     equipright : [
          ["Traveler's clothes", "", 4],
          ["Staff", "", 4],
          ["Hunting gear", "", 25],
          ["Trophy from animal", "", ""],
          ["Belt pouch (with coins)", "", 1]
     ],
     feature : "Elemental Harmony",
     trait : [
          "I'm driven by a wanderlust that led me away from home.",
          "I watch over my friends as if they were a litter of newborn pups.",
          "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
          "I have a lesson for every situation, drawn from observing nature.",
          "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
          "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
          "I feel far more comfortable around animals than people.",
          "I was, in fact, raised by wolves."
     ],
     ideal : [
          ["Change",
               "Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
          ],
          ["Greater Good",
               "Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
          ],
          ["Honor",
               "Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
          ],
          ["Might",
               "Might: The strongest are meant to rule. (Evil)"
          ],
          ["Nature",
               "Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
          ],
          ["Glory",
               "Glory: I must earn glory in battle, for myself and my clan. (Any)"
          ]
     ],
     bond : [
          "My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
          "An injury to the unspoiled wilderness of my home is an injury to me.",
          "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
          "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
          "I suffer awful visions of a coming disaster and will do anything to prevent it.",
          "It is my duty to provide children to sustain my tribe."
     ],
     flaw : [
          "I am too enamored of ale, wine, and other intoxicants.",
          "There's no room for caution in a life lived to the fullest.",
          "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
          "I am slow to trust members of other races, tribes, and societies.",
          "Violence is my answer to almost any challenge.",
          "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
     ],
     extra : ["Select an Origin",
          "Forester",
          "Trapper",
          "Homesteader",
          "Guide",
          "Exile or outcast",
          "Bounty hunter",
          "Pilgrim",
          "Tribal nomad",
          "Hunter-gatherer",
          "Tribal marauder"
     ],
     toolProfs : [["Herbalism kit"]],
     languageProfs : [1],
     lifestyle : "poor"
};
BackgroundList.excultist = {
     regExpSearch : /^(?=.*(cultist|recovered)).*$/i,
     name : "Recovered Cultist",
     source : ["TDCS", 107],
     skills : ["Religion", "Deception"],
     gold : 15,
     equipright : [
          ["Vestments", "", 2],
          ["Holy symbol", "", 1],
          ["Common clothes", "", 1],
          ["Belt pouch (with coins)", "", 1]
     ],
     feature : "Wicked Awareness",
     trait : [
          "I idolize a particular hero of my faith and constantly refer to that person's deeds and example.",
          "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
          "I see omens in every event and action. The gods try to speak to us, we just need to listen to them.",
          "Nothing can shake my optimistic attitude.",
          "I quote (or misquote) sacred texts and proverbs in almost every situation.",
          "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
          "I've enjoyed the fine food, drink and high society of my temple's elite. Rough living grates on me.",
          "I've spent so long in the temple that I have little experience dealing with people in the outside world."
     ],
     ideal : [
          ["Tradition",
               "Tradition: The ancient traditions of worship and sacrifice must be upheld. (Lawful)"
          ],
          ["Charity",
               "Charity: I always try to help those in need, no matter what the personal cost. (Good)"
          ],
          ["Change",
               "Change: We must help bring about the changes the gods are working in the world. (Chaotic)"
          ],
          ["Power",
               "Power: I hope to rise to teh top of my faith's religious heirarchy. (Lawful)"
          ],
          ["Faith",
               "Faith: I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)"
          ],
          ["Aspiration",
               "Aspiration: I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"
          ]
     ],
     bond : [
          "I would die to recover an ancient relic of my faith that was lost long ago.",
          "I will someday get revenge on the corrupt temple heirarchy who branded me a heretic.",
          "I owe my life to the priest who took me in when my parents died.",
          "Everything I do is for the common people.",
          "I would do anything to protect the temple where I served.",
          "I seek to preserve a sacred text that my enemies consider heretical and wish to destroy."
     ],
     flaw : [
          "I judge others harshly, and myself even more severely.",
          "I put too much trust in those who wield power within my temple's heirarchy.",
          "My piety sometimes leads me to trust blindly in those who profess my faith.",
          "I am inflexible in my thinking.",
          "I am suspicious of strangers and expect the worst from them.",
          "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
     ],
     languageProfs : [1],
     lifestyle : "poor"
};

// Add background features
BackgroundFeatureList["a favor in turn"] = {
     description : "I can call in a favor from my criminal organization, such as money, muscle or assistance escaping legal trouble. However, they will expect me to repay this favor in some way, either now or later.",
     source : ["TDCS", 105]
};
BackgroundFeatureList["student privilege"] = {
     description : "Thanks to my academic credentials, I can access areas of schools and similar institutions that are not open to the general public. I can also use any Tool Kits these establishments have, although I cannot remove them from the premises. Staff supervision may be required.",
     source : ["TDCS", 106]
};
BackgroundFeatureList["elemental harmony"] = {
     description : "I am in tune with elemental energy and can produce a small magical effect of the type associated with my chosen Ashari tribe, such as producing a puff of wind, a small burst of flame, a palm-sized rock, or enough water to fill a small glass.",
     source : ["TDCS", 107]
};
BackgroundFeatureList["wicked awareness"] = {
     description : "My time in the cult left me with an eye for the signs of hidden worship. I can usually spot hidden signs, messages or signals left by cults and similar organizations, and have advantage when searching for such details.",
     source : ["TDCS", 108]
};

// Add feats
FeatsList["cruel-tdcs"] = {
     name : "Cruel",
     source : ["TDCS", 108],
     description : "I have a number of cruelty points equal to my proficiency mod. I can spend these points to: deal an additional 1d6 attack damage (1/turn), regain 1d6 HP if I crit, gain adv. on Intimidation check. I regain all expended points when I finish a long rest."
};
FeatsList["dual focused-tdcs"] = {
     name : "Dual-Focused",
     source : ["TDCS", 108],
     description : "I can use my action to concentrate on 2 spells. CON save at the end of each turn (DC 10 + rounds concentrating) vs. losing both spells. I can end one spell to avoid this save. When I take damage, CON save (DC 10 + both spells' levels or half damage, whichever is higher) or lose both spells.",
	 eval : "AddAction(\"action\", \"Maintain Focus\", \"Dual-Focused\")",
	 removeeval : "RemoveAction(\"action\", \"Maintain Focus\", \"Dual-Focused\")",
     prerequisite : "The ability to cast at least one spell",
     prereqeval : "CurrentSpells.toSource() !== '({})'"
};
FeatsList["flashrecall-tdcs"] = {
     name : "Flash Recall",
     source : ["TDCS", 109],
     description : "Once per short rest, I can instantly prepare a spell from my class list or spellbook if I have a spell slot of that level. I lose preparation of another spell of equal or higher level.",
     prerequisite : "The ability to cast at least one spell",
     prereqeval : "CurrentSpells.toSource() !== '({})'"
};
FeatsList["gambler-tdcs"] = {
     name : "Gambler",
     source : ["TDCS", 109],
     description : "I have a reputation as a shark in some circles. Adv. on Deception to bluff or Persuasion to invite to games. I can re-roll my result on the Carousing table (once per day). I gain proficiency with two gaming sets. [+1 Charisma].",
     improvements : "Gambler (feat): +1 Charisma;",
     scores : [0, 0, 0, 0, 0, 1]
};
FeatsList["mending-tdcs"] = {
     name : "Mending Affinity",
     source : ["TDCS", 109],
     description : "When I heal, I regain additional HP equal to my proficiency mod. When stabilized with a healer's kit, I also heal a number of HP equal to my proficiency mod. [+1 Constitution]",
     improvements : "Mending Affinity (feat): +1 Constitution;",
     scores : [0, 0, 1, 0, 0, 0]
};
FeatsList["mysticconflux-tdcs"] = {
     name : "Mystic Conflux",
     source : ["TDCS", 109],
     description : "I have advantage on Intelligence (Arcana) checks to determine the nature of a magical object or device. I can attune to a maximum of four magical items, rather than three; other attunement limitations still apply."
};
FeatsList["rapiddrinker-tdcs"] = {
     name : "Rapid Drinker",
     source : ["TDCS", 109],
     description : "I can drink a potion as a bonus action rather than an action. I have advantage on saving throws triggered by drinking an alcoholic or dangerous substance.",
	 eval : "AddAction(\"bonus action\", \"Rapid Drinker\", \"Rapid Drinker\")",
	 removeeval : "RemoveAction(\"bonus action\", \"Rapid Drinker\", \"Rapid Drinker\")",
};
FeatsList["spelldriver-tdcs"] = {
     name : "Spelldriver",
     source : ["TDCS", 109],
     description : "I am no longer limited to casting only one non-cantrip spell in a turn. However, if I cast multiple spells in a turn, only one of them can be of 3rd level or higher.",
     prerequisite : "Character Level 8 AND the ability to cast at least one spell",
     prereqeval : "CurrentSpells.toSource() !== '({})' && What('Character Level') >= 8"
};
FeatsList["thrownarms-tdcs"] = {
     name : "Thrown Arms Master",
     source : ["TDCS", 109],
     description : "I can throw weapons without the thrown property. One-handed weapons have a range of 20/60. Two-handed weapons have a range of 15/30. Weapons with the thrown property increase range by +20/+40. If I miss with a thrown light weapon, it boomerangs back to me. [+1 Strength or Dexterity].",
     improvements : "Thrown Arms Master (feat): +1 Strength or Dexterity;"
};