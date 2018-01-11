/*  -WHAT IS THIS?-
	The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://flapkan.com/mpmb/dmsguild
	You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.
 
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
	It is recommended to enter the code in a fresh sheet before adding any other information.
*/
 
/*  -INFORMATION-
	Subject:	Class
	Effect:		This script adds the class called "Alchemist" and its 3 subclasses known as Research Focuses "Arcane Distiller", "Grenadier", and "Metamorph"
				This is taken from DawnforgedCast (https://dawnforgedcast.myshopify.com/products/5th-edition-alchemist-class)
				This content is made by Erik J
	Original:	Erik
	Completed:	/u/pbfarmer
	Date:		2017-09-22 (sheet v12.998)
 
	Code Version:	1.0
 
	Please support the creator of this content (DawnforgedCast) and download their material from their website: http://dawnforgedcast.org/
*/

/*	-IMPORTANT NOTICE-
	This code has not been corrected by MPMB to his usual rigid standards. He only corrected errors in the code, but hasn't compared the content to the original source.
	Things will not look as polished as with the other pre-written code that you can find in the same folder. For example, descriptions for class features will overflow their allowed space.
	Also, automation for spell selection isn't fully functional for several of the subclass features.
*/

var iFileName = "hb_Alchemist.js";
RequiredSheetVersion(12.998);

//first make the sheet know which spells are alchemist spells
[//level 0 (cantrips)
	"acid splash", "blade ward", "control flames", "friends", "guidance", "light", "mending", "prestidigitation", "resistance", "true strike",

	//level 1
	"absorb elements", "animal friendship", "armor of agathys", "arms of hadar", "comprehend languages", "cure wounds", "detect evil and good", "detect magic", "detect poison and disease", "disguise self", "expeditious retreat", "false life", "feather fall", "heroism", "identify", "illusory script", "jump", "longstrider", "mage armor", "protection from evil and good", "speak with animals", "zephyr strike",

	//level 2
	"aid", "alter self", "barkskin", "blur", "darkvision", "dragon's breath", "enhance ability", "enlarge/reduce", "find traps", "invisibility", "lesser restoration", "locate animals or plants", "locate object", "magic weapon", "mirror image", "pass without trace", "protection from poison", "see invisibility", "spider climb", "silence", "zone of truth",

	//level 3
	"animate dead", "blink", "catnap", "elemental weapon", "feign death", "fly", "gaseous form", "haste", "meld into stone", "nondetection", "protection from energy", "remove curse", "revivify", "tongues", "water breathing", "water walk", 

	//level 4
	"death ward", "fire shield", "freedom of movement", "giant insect", "greater invisibility", "locate creature", "polymorph", "stoneskin",

	//level 5
	"greater restoration", "legend lore", "mass cure wounds", "modify memory", "telekinesis", "treestride",

	//level 6
	"find the path", "flesh to stone", "globe of invulnerability", "heal", "investiture of flame", "investiture of ice", "investiture of stone", "investiture of wind", "primordial ward", "tenser's transformation", "true seeing", "wind walk",

	//level 7
	"etherealness", "plane shift", "regenerate", "simulacrum"
].forEach(function (alchemistSpells) {
	if (SpellsList[alchemistSpells]) SpellsList[alchemistSpells].classes.push("alchemist");
});

//now make the alchemist class
ClassList["alchemist"] = {
	regExpSearch : /alchemist/i,
	name : "Alchemist",
	source : ["DFC:AC", 1],
	primaryAbility : "\n \u2022 Alchemist: Intelligence;",
	prereqs : "\n \u2022 Alchemist: Intelligence 13 and Dexterity 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skills : ["\n\n" + toUni("Alchemist") + ": Choose three from Arcana, History, Investigation, Medicine, Nature, Religion, and Sleight of Hand."],
	toolProfs : {
		primary : ["Alchemist's supplies", ["Herbalism or poisoner's kit", 1]],
		secondary : ["Alchemist's supplies", ["Herbalism or poisoner's kit", 1]]
	},
	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],
	weapons : [
		[true, false, ["hand crossbow"]],
		[true, false, ["hand crossbow"]]
	],
	equipment : "Alchemist starting equipment:\n \u2022 A light crossbow and 20 bolts -or- any simple weapon;\n \u2022 A scholar's pack -or- a dungeoneer's pack;\n \u2022 one vial of alchemist fire -or- two vials of acid -or- one healing potion;\n \u2022 Leather armor, Alchemist Supplies, formula book, and a dagger; \n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Research Focus", ["alchemist-arcane distiller", "alchemist-grenadier", "alchemist-metamorph"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave : 4,
	spellcastingFactor : 1,
	spellcastingTable : [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 1, 0, 0, 0, 0, 0, 0, 0],
		[4, 1, 0, 0, 0, 0, 0, 0, 0],
		[4, 2, 0, 0, 0, 0, 0, 0, 0],
		[4, 2, 1, 0, 0, 0, 0, 0, 0],
		[4, 3, 1, 0, 0, 0, 0, 0, 0],
		[4, 3, 2, 0, 0, 0, 0, 0, 0],
		[4, 3, 2, 1, 0, 0, 0, 0, 0],
		[4, 3, 3, 1, 0, 0, 0, 0, 0],
		[4, 3, 3, 2, 0, 0, 0, 0, 0],
		[4, 3, 3, 2, 1, 0, 0, 0, 0],
		[4, 3, 3, 3, 1, 0, 0, 0, 0],
		[4, 3, 3, 3, 2, 0, 0, 0, 0],
		[4, 3, 3, 3, 2, 1, 0, 0, 0],
		[4, 3, 3, 3, 3, 1, 0, 0, 0],
		[4, 3, 3, 3, 3, 2, 0, 0, 0],
		[4, 3, 3, 3, 3, 2, 1, 0, 0],
		[4, 3, 3, 3, 3, 2, 1, 0, 0],
		[4, 3, 3, 3, 3, 2, 2, 0, 0]
	],
	spellcastingKnown : {
		cantrips : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
		spells : "book",
		prepared : true
	},
	features : {
		"classfeature1" : {
			name : "Extracts",
			source : ["DFC:AC", 2],
			minlevel : 1,
			description : desc([
				"I can cast prepared alchemist spells via extracts, using Int as my spellcasting ability",
				"Extracts are ingested and are limited use offensively",
				"I can prepare an extract from any formula I have in my book"
			]),
		},
		"classfeature2" : {
			name : "Bombs",
			source : ["DFC:AC", 3],
			minlevel : 1,
			description : desc([
				"I can throw a number of bombs using Dexterity for my attack and damage rolls"
			]),
			usages : "Int mod + 1/2 lvl per ",
			additional : levels.map(function (n) {
				if (n < 4) return "1d6";
				if (n < 7) return "2d6";
				if (n < 10) return "3d6";
				if (n < 13) return "4d6";
				if (n < 16) return "5d6";
				if (n < 19) return "6d6";
				return "7d6";
			}),
			usagescalc : "event.value = Math.floor(classes.known['alchemist'].level/2) + What('Int Mod');",
			action : ["action", ""],
			recovery : "long rest",
			eval : "AddWeapon('Bomb');",
			removeeval : "RemoveWeapon('Bomb');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'bomb' && classes.known.alchemist) {fields.Damage_Die = function(n){return (n < 4 ? 1 : n < 7 ? 2 : n < 10 ? 3 : n < 13 ? 4 : n < 16 ? 5 : n < 19 ? 6 : 7) + 'd6';}(classes.known.alchemist.level); }; ", ""]
			}
		},
		"classfeature3" : {
			name : "Swift Alchemy",
			source : ["DFC:AC", 4],
			minlevel : 2,
			description : desc([
				"I can spend 2 hours to craft 1 item with no ability check required"
			]),
			additional : ["Common Items", "Common Items", "Common Items", "Common Items", "Common Items", "Common Items", "Improved Items", "Improved Items", "Improved Items", "Improved Items", "Improved Items", "Improved Items", "Advanced Items", "Advanced Items", "Advanced Items", "Advanced Items", "Advanced Items", "Advanced Items", "Advanced Items", "Advanced Items"],
			usages : 1,
			recovery : "long rest",
		},
		"classfeature4" : {
			name : "Mutagen",
			source : ["DFC:AC", 4],
			minlevel : 2,
			description : desc([
				"I brew a mutagen that lets me transform into a monstrous identity that lasts for 30 minutes",
				"See the \"Notes\" page for more details"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""],
			eval : "AddWeapon(\"Natural Weapons Mutagen\"); AddString(\"Extra.Notes\", \"Mutagen features:\\n\\u25C6 While I am in this new form, I gain the following features:\\n\\u25C6 Natural Weapons (Mutagen 2, HB:DF A 5)\\n   I grow claws, fangs, and all sorts of natural weapons.  I am now proficient in unarmed strike that deal 1d6 damage\\n   My damage die increases to 1d8 at 11th lvl, and 1d10 at 17th lvl\\n\\u25C6 Primal Savagery (Mutagen 2, HB:DF A 5)\\n You can make a melee spell attack against 1 creature within 5ft.  On a hit, target takes 1d10 acid.  Can only be used 1x per transformation.\\\n   The damage increases to 2d10 at 5th lvl, 3d20 at 11th, and 4d10 at 17th lvl.\\n\\u25C6 Monstrous Power (Mutagen 2, HB:DF A 5)\\n   I gain advantage on Charisma (Intimidation) checks and get one of the following 3 benefits\\n    - Bear's Endurance: I gain 2d6 temp HP and advantage on Con checks\\n    - Bull's Strength: I gain double carrying capacity and advantage on Str checks\\n    - Cat's Grace: I don't take damage falling 20 ft or less unless incapacitated and gain advantage on Dex checks\\n\\u25C6 Toughened Hide (Mutagen 2, HB:DF A 5)\\n   My skin is hardened and AC is now 13 + Dex Mod\\n\u25C6 Monstrous Cost (Mutagen 2, HB:DF A 5)\\n   I have disadvantage on Intelligence and Charisma checks and saving throws\\n   I can not use my extracts or cast spells through other means\\n   I cannot wear armor, wield a shield, or use a weapon\", true);",
			removeeval : "RemoveWeapon(\"Natural Weapons Mutagen\"); RemoveString(\"Extra.Notes\", \"Mutagen features:\\n\\u25C6 While I am in this new form, I gain the following features:\\n\\u25C6 Natural Weapons (Mutagen 2, HB:DF A 5)\\n   I grow claws, fangs, and all sorts of natural weapons.  I am now proficient in unarmed strike that deal 1d6 damage\\n   My damage die increases to 1d8 at 11th lvl, and 1d10 at 17th lvl\\n\\u25C6 Primal Savagery (Mutagen 2, HB:DF A 5)\\n You can make a melee spell attack against 1 creature within 5ft.  On a hit, target takes 1d10 acid.  Can only be used 1x per transformation.\\\n   The damage increases to 2d10 at 5th lvl, 3d20 at 11th, and 4d10 at 17th lvl.\\n\\u25C6 Monstrous Power (Mutagen 2, HB:DF A 5)\\n   I gain advantage on Charisma (Intimidation) checks and get one of the following 3 benefits\\n    - Bear's Endurance: I gain 2d6 temp HP and advantage on Con checks\\n    - Bull's Strength: I gain double carrying capacity and advantage on Str checks\\n    - Cat's Grace: I don't take damage falling 20 ft or less unless incapacitated and gain advantage on Dex checks\\n\\u25C6 Toughened Hide (Mutagen 2, HB:DF A 5)\\n   My skin is hardened and AC is now 13 + Dex Mod\\n\u25C6 Monstrous Cost (Mutagen 2, HB:DF A 5)\\n   I have disadvantage on Intelligence and Charisma checks and saving throws\\n   I can not use my extracts or cast spells through other means\\n   I cannot wear armor, wield a shield, or use a weapon\", true);",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'natural weapons mutagen' && classes.known.alchemist) {fields.Damage_Die = '1d' + function(n){return (n < 11 ? 6 : n < 17 ? 8 : 10);}(classes.known.alchemist.level); }; ", ""]
			}
		},
		"classfeature5" : {
			name : "Research Focus",
			source : ["DFC:AC", 5],
			minlevel : 3,
			description : desc([
				"Choose a Research Focus you commit to and put it in the \"Class\" field",
				"Choose either the Arcane Distiller, Grenadier, or Metamorph"
			]),
		},
		"classfeature6" : {
			name : "Permanent Mutation",
			source : ["DFC:AC", 5],
			minlevel : 11,
			description : desc([
				"Use the \"Choose Features\" button above to select a permanent mutation",
				"At 17th level select a 2nd mutation"
			]),
			choices : ["Anaerobic Respiration", "Extra Limb (Arm)", "Extra Limb (Tentacle)", "Keen Senses", "Prehensile Tongue", "Prehensile Tail", "Rigid Horns", "Suckers", "Toxified Metabolism", "Vestigial Wings", "Webbed Extremities"],
			"anaerobic respiration" : {
				name : "Permanent Mutation: Anaerobic Respiration",
				source : ["DFC:AC", 5],
				description : desc([
					"I have played God and permanently altered myself",
					"I can hold my breath indefinitely",
					"I have advantage on saving throws to resist the effects of inhalation or suffocation based attacks"
				])
			},
			"extra limb (arm)" : {
				name : "Permanent Mutation: Extra Arm Limb",
				source : ["DFC:AC", 5],
				description : desc([
					"Double dutch rudder, try the triple dutch rudder",
					"I can carry and manipulate objects even when my regular arms are occupied",
					"I can draw and stow up to two weapons on my turn"
				])
			},
			"extra limb (tentacle)" : {
				name : "Permanent Mutation: Extra Tentacle Limb",
				source : ["DFC:AC", 5],
				description : desc([
					"I'm a monster, but have a new lucrative career in Blestem pornography",
					"I can carry ad manipulate objects even when my regular arms are occupied",
					"I can draw and stow up to two weapons on my turn"
				])
			},
			"keen senses" : {
				name : "Permanent Mutation: Keen Senses",
				source : ["DFC:AC", 5],
				description : desc([
					"I have the senses of a mongoose",
					"I gain the senses of a predator and now have darkvision up to 120 ft",
					"I have advantage on Wisdom (Perception) checks that rely on smell or hearing."
				]),
				vision : [["Darkvision", 120]]
			},
			"prehensile tail" : {
				name : "Permanent Mutation: Prehensile Tail",
				source : ["DFC:AC", 5],
				description : desc([
					"I now have a tail, that's kind of cool",
					"I can interact with objects up to a range of 10 feet",
					"I can pick up items weighing up to 5 pounds, touch an ally or foe or retrieve up to 2 objects at once",
					"I can make Dexterity (Sleight of Hand) checks using my tail even if both hands are preoccupied"
				])
			},
			"prehensile tongue" : {
				name : "Permanent Mutation: Prehensile Tongue",
				source : ["DFC:AC", 5],
				description : desc([
					"I'm a monster",
					"I can interact with objects up to a range of 10 feet",
					"I can pick up items weighing up to 5 pounds, touch an ally or foe or retrieve up to 2 objects at once",
					"I can make Dexterity (Sleight of Hand) checks using my tongue even if both hands are preoccupied"
				])
			},
			"rigid horns" : {
				name : "Permanent Mutation: Rigid Horns",
				source : ["DFC:AC", 5],
				description : desc([
					"Mess with the horns, ya get the bull",
					"As a bonus action, I can try to shove a creature when I make a melee attack",
					"I can not knock a creature prone using this"
				]),
				action : ["bonus action", ""]
			},
			"suckers" : {
				name : "Permanent Mutation: Suckers",
				source : ["DFC:AC", 5],
				description : desc([
					"Sucks to be me.  Get it?",
					"I now have a climb speed of 30 ft",
					"I can advantage on any check made to avoid being disarmed"
				]),
				speed : { climb : { spd : 30, enc : 20 } }
			},
			"toxified metabolism" : {
				name : "Permanent Mutation: Toxified Metabolism",
				source : ["DFC:AC", 5],
				description : desc([
					"I licked too much paint",
					"I am immune to the poison condition and resistant to poison damage"
				])
			},
			"vestigial wings" : {
				name : "Permanent Mutation: Vestigial Wings",
				source : ["DFC:AC", 5],
				description : desc([
					"I ran with scissors",
					"I can now glide, increasing jump length to 30 ft",
					"I can slow my descent up to 60 ft per round, avoiding falling damage and landing on my feet"
				])
			},
			"webbed extremities" : {
				name : "Permanent Mutation: Webbed Extremities",
				source : ["DFC:AC", 5],
				description : desc([
					"I drink like I swim, like a fish",
					"I now have a swim speed of 60 ft"
				]),
				speed : { swim : { spd : 60, enc : 50 } }
			}
		}
	}
}

ClassSubList["alchemist-arcane distiller"] = {
	regExpSearch : /^(?=.*alchemist)(?=.*arcane)(?=.*distiller).*$/i,
	subname : "Arcane Distiller",
	source : ["DFC:AC", 7],
	features : {
		"subclassfeature1" : {
			name : "Infusion",
			source : ["DFC:AC", 3],
			minlevel : 3,
			description : desc([
				"I can provide my extracts to be used by others",
				"I still roll any concentration saving throws, others use an action to consume"
			]),
			usages : "Int mod per ",
			usagescalc : "event.value = What('Int Mod');",
			action : ["action", ""],
			recovery : "long rest"
		},
		"subclassfeature2" : {
			name : "Arcane Poisons",
			source : ["DFC:AC", 8],
			minlevel : 3,
			description : desc([
				"I can now coat a weapon or ammo in a spell",
				"The effect requires no concentration to cast",
				"The spells lasts a number of rounds equal to my prof bonus or the spell duration, whichever is less"
			]),
			spellcastingBonus : {
				name : "Arcane Poisons",
				spells : ["bane", "command", "faerie fire", "hideous laughter", "blindness", "crown of madness", "hold person", "ray of enfeeblement", "bestow curse", "dispel magic", "fear", "slow", "blight", "confusion", "elemental bane", "polymorph"]
			}
		},
		"subclassfeature3" : {
			name : "Combine Extracts",
			source : ["DFC:AC", 8],
			minlevel : 5,
			description : desc([
				"I can combine 2 spells by expending 2 spell slots to create a single extract",
				"Can use this in conjunction with infusion"
			]),
			action : ["action", ""],
		},
		"subclassfeature4" : {
			name : "Bottled Ooze",
			source : ["DFC:AC", 7],
			minlevel : 5,
			description : desc([
				"I create a living animated ooze, please see the ooze table"
			]),
		},
		"subclassfeature5" : {
			name : "Efficient Alchemy",
			source : ["DFC:AC", 8],
			minlevel : 10,
			description : desc([
				"My swift alchemy now allows me to craft 2 items at once"
			]),
		},
		"subclassfeature6" : {
			name : "Stable Formulas",
			source : ["DFC:AC", 8],
			minlevel : 10,
			description : desc([
				"I gain advantage on all concentration checks for my extracts"
			]),
		},
		"subclassfeature7" : {
			name : "Permanent Extract",
			source : ["DFC:AC", 8],
			minlevel : 14,
			description : desc([
				"I can now permanently gain the benefit of a 2nd lvl extract or lower",
				"Lasts until I dispel it or use another extract"
			]),
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature8" : {
			name : "Grand Discovery",
			source : ["DFC:AC", 8],
			minlevel : 20,
			description : desc([
				"Use the \"Choose Features\" button above to select a grand alchemical discovery"
			]),
			choices : ["Eternal Youth", "Legendary Distiller", "Philosophers Stone", "Secret Formula"],
			"eternal youth" : {
				name : "Grand Discovery: Eternal Youth",
				source : ["DFC:AC", 8],
				description : desc([
					"You now select your age and stay there permanently",
					"Gain 2 Con and increase base movement by 10 ft"
				]),
			},
			"legendary distiller" : {
				name : "Grand Discovery: Legendary Distiller",
				source : ["DFC:AC", 8],
				description : desc([
					"Using swift alchemy I can now craft 3 items at once",
					"I can craft legendary items",
					"I can charge up to 5x market rates on my sales"
				]),
			},
			"philosophers stone" : {
				name : "Grand Discovery: Philosophers Stone",
				source : ["DFC:AC", 8],
				description : desc([
					"I can create 1 Philosopher's stone per month",
					"Stone turns 5k lbs of iron into silver (worth 25k GP)"
				]),
			},
			"secret formula" : {
				name : "Grand Discovery: Secret Formula",
				source : ["DFC:AC", 8],
				description : desc([
					"I gain 8th level spells I can now use or expend the spell slot to create an Ooze"
				]),
				spellcastingBonus : {
					name : "Secret Formula",
					spells : ["antipathy/sympathy", "clone", "glibness", "mind blank", "telepathy"],
					selection : ["antipathy/sympathy", "clone", "glibness", "mind blank", "telepathy"],
					times : 5
				}
			}
		}
	}
}

ClassSubList["alchemist-grenadier"] = {
	regExpSearch : /^(?=.*alchemist)(?=.*grenadier).*$/i,
	subname : "Grenadier",
	source : ["DFC:AC", 7],
	spellcastingExtra : ["chromatic orb", "entangle", "faerie fire", "fog cloud", "grease", "sleep", "darkness", "flaming sphere", "levitate", "shatter", "spike growth", "web", "erupting earth", "fireball", "hunger of hadar", "sleet storm", "stinking cloud", "wind wall", "blight", "evard's black tentacles", "hallucinatory terrain", "ice storm", "polymorph", "storm sphere", "vitriolic sphere", "wall of fire", "cloudkill", "cone of cold", "flame strike", "immolation"],
	features : {
		"subclassfeature1" : {
			name : "Bombs",
			source : ["DFC:AC", 3],
			minlevel : 3,
			description : desc([
				"As a Grenadier I gain an additional 3 bombs"
			]),
			additional : levels.map(function (n) {
				if (n < 4) return "1d6";
				if (n < 7) return "2d6";
				if (n < 10) return "3d6";
				if (n < 13) return "4d6";
				if (n < 16) return "5d6";
				if (n < 19) return "6d6";
				return "7d6";
			}),
			usages : "Int mod + 3 + 1/2 lvl per ",
			usagescalc : "event.value = Math.floor(classes.known['alchemist'].level/2) + 3 + tDoc.getField('Int Mod').value;",
			action : ["action", ""],
			recovery : "long rest",
			eval : "AddWeapon(\"Bomb\");",
			removeeval : "RemoveWeapon(\"Bomb\");",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'bomb' && classes.known.alchemist) {fields.Damage_Die = function(n){return (n < 4 ? 1 : n < 7 ? 2 : n < 10 ? 3 : n < 13 ? 4 : n < 16 ? 5 : n < 19 ? 6 : 7) + 'd6';}(classes.known.alchemist.level); }; ", ""],
			}
		},
		"subclassfeature2" : {
			name : "Full Potential",
			source : ["DFC:AC", 7],
			minlevel : 3,
			description : desc([
				"I can admix extra ingredients to my bombs to give them spell like effects",
				"The effect lasts only my proficiency bonus in rounds, but doesn't require concentration",
				"The spells are now accessible in your formula book"
			]),
		},
		"subclassfeature3" : {
			name : "Considerate Bomber",
			source : ["DFC:AC", 7],
			minlevel : 5,
			description : desc([
				"When using a bomb, I can select a number of creatures up to my Int mod to not be effected by splash damage",
				"If I miss, my attempt at being considerate has no effect"
			]),
		},
		"subclassfeature4" : {
			name : "Explosive Bombs",
			source : ["DFC:AC", 7],
			minlevel : 5,
			description : desc([
				"I can expend a spell slot to increase splash damage radius by 5ft/level of spell slot expended"
			]),
		},
		"subclassfeature5" : {
			name : "Elemental Bombs",
			source : ["DFC:AC", 8],
			minlevel : 10,
			description : desc([
				"I can make my bombs deal any type of elemental damage, not just fire.",
				"Before throwing a bomb, choose between acid, cold, fire, lightning, or thunder"
			]),
		},
		"subclassfeature6" : {
			name : "Debilitating Bombs",
			source : ["DFC:AC", 8],
			minlevel : 10,
			description : desc([
				"I can expend a 2nd level or higher spell slot to cause an additional effect: blind, deafen, or poison",
				"On a hit, creature must make a Con Saving throw or suffer condition for 1 minute.",
				"Creature can make additional Con saving throws at the end of their turn, condition ends on a successful save.",
				"Effect does not extend to splash damage."
			]),
		},
		"subclassfeature7" : {
			name : "Rapid Bomber",
			source : ["DFC:AC", 8],
			minlevel : 14,
			description : desc([
				"I can now throw up to 2 bombs at once during an attack action, but do so at disadvantage"
			]),
		},
		"subclassfeature8" : {
			name : "Grand Discovery",
			source : ["DFC:AC", 8],
			minlevel : 20,
			description : desc([
				"Use the \"Choose Features\" button above to add a grand alchemical discovery to your bombs"
			]),
			choices : ["Cataclysmic Bomb", "High Octane Cocktail", "Mad Bomber", "Volatile Barrage"],
			"cataclysmic bomb" : {
				name : "Cataclysmic Bomb",
				source : ["DFC:AC", 8],
				description : desc([
					"The base splash damage radius for my bombs is now 10 ft",
				]),
				calcChanges : {
					atkAdd : ["if (WeaponName === 'bomb' && classes.known.alchemist) {fields.Description = fields.Description.replace(/(,? ?dmg in a 5-ft radius,? ?)/i, 'dmg in a 10-ft radius ');}; ", "My radius has improved to 10 ft."]
				}
			},
			"high octane cocktail" : {
				name : "High Octane Cocktail",
				source : ["DFC:AC", 8],
				description : desc([
					"Instead of base d6 damage, my bombs now deal d8"
				]),
				calcChanges : {
					atkAdd : ["if (WeaponName === 'bomb' && classes.known.alchemist) {fields.Damage_Die = function(n){return (n < 4 ? 1 : n < 7 ? 2 : n < 10 ? 3 : n < 13 ? 4 : n < 16 ? 5 : n < 19 ? 6 : 7) + 'd8';}(classes.known.alchemist.level); }; ", ""]
				}
			},
			"mad bomber" : {
				name : "Mad Bomber",
				source : ["DFC:AC", 8],
				description : desc([
					"I no longer have a limit to the number of bombs I prepare"
				]),
			},
			"volatile barrage" : {
				name : "Volatile Barrage",
				source : ["DFC:AC", 8],
				description : desc([
					"I no longer have disadvantage on throwing multiple bombs from the Rapid Bomber feature"
				])
			}
		}
	}
}

ClassSubList["alchemist-metamorph"] = {
	regExpSearch : /^(?=.*alchemist)(?=.*metamorph).*$/i,
	subname : "Metamorph",
	source : ["DFC:AC", 7],
	features : {
		"subclassfeature1" : {
			name : "Mutagen",
			source : ["DFC:AC", 6],
			minlevel : 3,
			description : desc([
				"I brew a mutagen that lets me transform into a monstrous identity that lasts for 1 hour.",
				"See the \"Notes\" page for more details."
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""],
		},
		"subclassfeature2" : {
			name : "Mutagen Admixture",
			source : ["DFC:AC", 6],
			minlevel : 3,
			description : desc([
				"I can admix extra ingredients to my mutagen",
				"Doing so allows me to use the spell for as long as my mutation lasts, no concentration required"
			]),
			spellcastingBonus : {
				name : "Mutagen Admixture",
				spells : ["disguise self", "jump", "longstrider", "speak with animals", "barkskin", "darkvision", "enlarge/reduce", "spider climb", "elemental weapon", "protection from energy", "water walk", "freedom of movement", "stoneskin"]
			}
		},
		"subclassfeature3" : {
			name : "Feral Mutagen",
			source : ["DFC:AC", 6],
			minlevel : 5,
			description : desc([
				"I can now attack twice using my natural weapons from my mutagen",
				"See \"Notes\" for more details"
			]),
			eval : "AddString(\"Extra.Notes\", \"Feral Mutagen features:\\n\\u25C6 I now have the ability while mutated to select one of the following:\\n      Blood Frenzy: I gain advantage on melee attacks if I have less than half HP\\n      Feral Pounce: I can charge as an action if I move a straight line of 20+ft to my target.  Target must make a Str Saving Throw, against my Str+8+Prof.  If knocked down I can take a bonus action to attack with my natural weapons.\\n      Hunter: Gain darkvision out to 60ft (120ft if I already have it), and gain advantage on Wisdom (Perception) checks for sent or hearing.\\n      Iron Hide: My Base AC becomes 13 + Dex + Con.\\n      Rampage: When I down a target to 0hp using natural weapons, I can move half my speak and make an additional attack against another target.\\n      Relentless: If I get downed but not killed, I can reduce the dmg to bring me to 1hp instead, can't use again until short/\long rest.\\n      Stalker: I gain advantage on Dexterity (Stealth) checks and can move at full speed while stealthed.  Any surprised creature attacked is automatically critted.\", true);",
			removeeval : "RemoveString(\"Extra.Notes\", \"Feral Mutagen features:\\n\\u25C6 I now have the ability while mutated to select one of the following:\\n      Blood Frenzy: I gain advantage on melee attacks if I have less than half HP\\n      Feral Pounce: I can charge as an action if I move a straight line of 20+ft to my target.  Target must make a Str Saving Throw, against my Str+8+Prof.  If knocked down I can take a bonus action to attack with my natural weapons.\\n      Hunter: Gain darkvision out to 60ft (120ft if I already have it), and gain advantage on Wisdom (Perception) checks for sent or hearing.\\n      Iron Hide: My Base AC becomes 13 + Dex + Con.\\n      Rampage: When I down a target to 0hp using natural weapons, I can move half my speak and make an additional attack against another target.\\n      Relentless: If I get downed but not killed, I can reduce the dmg to bring me to 1hp instead, can't use again until short/\long rest.\\n      Stalker: I gain advantage on Dexterity (Stealth) checks and can move at full speed while stealthed.  Any surprised creature attacked is automatically critted.\", true);",
		},
		"subclassfeature4" : {
			name : "Greater Mutagen",
			source : ["DFC:AC", 7],
			minlevel : 10,
			description : desc([
				"I can now select 2 Feral Mutagen options and 2 monstrous power benefits.",
				"My natural weapons now do 1d8 damage"
			]),
			calcChanges : {
				atkCalc : ["if (WeaponName === 'natural weapons mutagen') { output.die = output.die.replace('1d6', '1d8'); }; ", ""]
			}
		},
		"subclassfeature5" : {
			name : "Supreme Mutagen",
			source : ["DFC:AC", 7],
			minlevel : 14,
			description : desc([
				"I now have all 3 monstrous power benefits",
				"I now regen every while mutated equal to my Prof bonus, once a round in combat, once a minute outside of combat"
			]),
		},
		"subclassfeature6" : {
			name : "Grand Discovery",
			source : ["DFC:AC", 7],
			minlevel : 20,
			description : desc([
				"Use the \"Choose Features\" button above to add a grand alchemical discovery to your bombs"
			]),
			choices : ["Embrace the Beast", "Frenzied Regeneration", "Tainted Claws", "Unyielding Hide"],
			"embrace the beast" : {
				name : "Embrace the Beast",
				source : ["DFC:AC", 7],
				description : desc([
					"I no longer suffer any of the penalties from the mutagen"
				]),
			},
			"frenzied regeneration" : {
				name : "Frenzied Regeneration",
				source : ["DFC:AC", 7],
				description : desc([
					"I now regain an additional 12 HP regen, stacking with Supreme Mutagen"
				]),
			},
			"tainted claws" : {
				name : "Tainted Claws",
				source : ["DFC:AC", 7],
				description : desc([
					"My claws now deal 2d6 damage and poison for 1 minute, Con saving throw"
				]),
				calcChanges : {
					atkCalc : ["if (WeaponName === 'natural weapons mutagen') { output.die = output.die.replace('1d8', '2d6'); }; ", ""]
				}
			},
			"unyielding hide" : {
				name : "Unyielding Hide",
				source : ["DFC:AC", 7],
				description : desc([
					"I now resist all damage except psychic damage"
				])
			}
		}
	}
};

//create the Bomb attack option
WeaponsList["bomb"] = {
	regExpSearch : /^(?=.*bomb).*$/i,
	name : "Bomb",
	source : ["DFC:AC", 3],
	ability : 2,
	type : "Natural",
	damage : [1, 6, "Fire"],
	range : "30/60 ft",
	description : "Deal additional dmg in a 5-ft radius equal to Int Mod + # of Dmg die",
	abilitytodamage : false,
	modifiers : ["", "Int"],
	monkweapon : false
};
WeaponsList["natural weapons mutagen"] = {
	regExpSearch : /^(?=.*natural)(?=.*weapons)(?=.*mutagen).*$/i,
	name : "Natural Weapons Mutagen",
	source : ["DFC:AC", 4],
	ability : 2,
	type : "Natural",
	damage : [1, 6, "All"],
	range : "Melee",
	description : "Usable when I go into my mutagenic form, gaining claws, fangs, spines, etc.",
	abilitytodamage : true,
	monkweapon : false
};

//add the source
SourceList["DFC:AC"] = {
	name : "DawnforgedCast: Alchemist Class",
	abbreviation : "DFC:AC",
	group : "Homebrew",
	url : "https://dawnforgedcast.myshopify.com/products/5th-edition-alchemist-class"
};
