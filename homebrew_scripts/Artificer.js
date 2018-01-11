/*  -WHAT IS THIS?-
	The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://flapkan.com/mpmb/dmsguild
	You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.
 
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
	It is recommended to enter the code in a fresh sheet before adding any other information.
*/
 
/*  -INFORMATION-
	Subject:	Class
	Effect:		This script adds the class called "Artificer" and its 3 subclasses known as Research Focuses "Arcane Distiller", "Grenadier", and "Metamorph"
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

var iFileName = "hb_Artificer.js";
RequiredSheetVersion(12.999);

//Artificer Spell List
[//level 0 (cantrips)
	"artificer's weapon", "booming blade", "chill touch", "create bonfire", "friends", "frostbite", "green-flame blade", "guidance", "light", "lightning lure", "magic stone", "mending", "poison spray", "sword burst", "true strike",

	//level 1
	"alarm", "armor of agathys", "cause fear", "charm person", "comprehend languages", "cure wounds", "detect poison and disease", "disguise self", "expeditious retreat", "faerie fire", "false life", "feather fall", "fog cloud", "illusory script", "jump", "longstrider", "mage armor", "protection from evil and good", "shield", "thunderwave", "unseen servant",

	//level 2
	"alter self", "arcane lock", "barkskin", "blindness/deafness" , "blur", "calm emotions", "darkness", "darkvision", "earthbind", "enhance ability", "enlarge/reduce", "enthrall", "hold person", "invisibility", "levitate", "mirror image", "misty step", "ray of enfeeblement", "rope trick", "see invisibility", "spider climb", "suggestion", "web", "zone of truth",

	//level 3
	"bestow curse", "counterspell", "dispel magic", "enemies abound", "fly", "gaseous form", "haste", "hypnotic pattern", "life transference", "magic circle", "major image", "remove curse", "thunder step", "tongues", "vampiric touch", "wall of sand", "wall of water",

	//level 4
	"arcane eye", "banishment", "blight", "charm monster", "compulsion", "confusion", "dimension door", "elemental bane", "fabricate", "fire shield", "freedom of movement", "greater invisibility", "hallucinatory terrain", "shadow of moil", "stone shape", "stoneskin", "wall of fire",

	//level 5
	"contact other plane", "dispel evil and good", "dominate person", "dream", "enervation", "far step", "hold monster", "mass cure wounds", "negative energy flood", "passwall", "scrying", "skill empowerment", "synaptic static", "teleportation circle", "wall of force", "wall of light", "wall of stone",

	//level 6
	"arcane gate", "create homunclus", "globe of invulnerability", "guards and wards", "flesh to stone", "harm", "heal", "investiture of flame", "investiture of ice", "investiture of stone", "investiture of wind", "magic jar", "programmed illusion", "true seeing", "wall of ice", "wind walk", "word of recall",

	//level 7
	"etherealness", "forcecage", "mordenkainen's magnificent mansion", "mordenkainen's sword", "plane shift", "project image", "regenerate", "reverse gravity", "sequester", "simulacrum", "teleport",
	
	//level 8
	"antimagic field", "antipathy/sympathy", "clone", "control weather", "demiplane", "dominate monster", "power word stun",

	//level 9
	"foresight", "gate", "imprisonment", "power word heal", "power word kill", "prismatic wall", "shapechange", "time stop", "true polymorph"
].forEach(function (artificerSpells) {
	if (SpellsList[artificerSpells]) SpellsList[artificerSpells].classes.push("artificer");
});

//The Artificer class
ClassList["artificer"] = {
	regExpSearch : /artificer/i,
	name : "Artificer",
	source : ["HB: Artificer", 1],
	primaryAbility : "\n \u2022 Artificer: Intelligence;",
	prereqs : "\n \u2022 Artificer: Intelligence 13 and Constitution 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skills : ["\n\n" + toUni("Artificer") + ": Choose three from Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand."],
	toolProfs : {
		primary : ["Thieves' Tools", ["one set of artisan's tools", 1]],
		secondary : ["Thieves' Tools", ["one set of artisan's tools", 1]]
	},
	armor : [
		[true, true, false, false],
		[true, true, false, false]
	],
	weapons : [
		[true, false],
		[true, false]
	],
	equipment : "Artificer starting equipment:\n \u2022 Any two simple weapons or any martial weapon (if proficient);\n \u2022 a light crossbow and 20 bolts;\n \u2022 scale mail -or- studded leather armor;\n \u2022 Thieves' tools, formula book, and a dungeoneer's pack; \n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Scientific Approach", ["inventor", "physician", "warsmith"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave : 4,
	spellcastingFactor : 1,
	spellcastingTable : [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 0, 0, 0, 0, 0, 0, 0, 0],
		[4, 2, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 2, 0, 0, 0, 0, 0, 0],
		[4, 3, 3, 0, 0, 0, 0, 0, 0],
		[4, 3, 3, 1, 0, 0, 0, 0, 0],
		[4, 3, 3, 2, 0, 0, 0, 0, 0],
		[4, 3, 3, 3, 1, 0, 0, 0, 0],
		[4, 3, 3, 3, 2, 0, 0, 0, 0],
		[4, 3, 3, 3, 2, 1, 0, 0, 0],
		[4, 3, 3, 3, 2, 1, 0, 0, 0],
		[4, 3, 3, 3, 2, 1, 1, 0, 0],
		[4, 3, 3, 3, 2, 1, 1, 0, 0],
		[4, 3, 3, 3, 2, 1, 1, 1, 0],
		[4, 3, 3, 3, 2, 1, 1, 1, 0],
		[4, 3, 3, 3, 2, 1, 1, 1, 1],
		[4, 3, 3, 3, 3, 1, 1, 1, 1],
		[4, 3, 3, 3, 3, 2, 1, 1, 1],
		[4, 3, 3, 3, 3, 2, 2, 1, 1]
	],
	spellcastingKnown : {
		cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells : "book",
		prepared : true
	},
	features : {
		"feature0" : {
			name : "Arcane Formulas",
			source : ["HB: Artificer", 3],
			minlevel : 1,
			description : desc([
				"I can cast prepared artificer spells via formulas, using Int as my spellcasting ability",
				"During a short rest I can transform one formula into another of equal level",
				"I can prepare an spell from any formula I have in my book"
			]),
			action : ["action", ""],
		},
		"feature1" : {
			name : "Artificer's Weapon",
			source : ["HB: Artificer", 4],
			minlevel : 1,
			description : desc([
				"I gain the Artificer's Weapon cantrip",
				"When making a weapon attack using Artificer's Weapon cantrip, I can use it with Int",
				"To set a weapon as your Artificer one, add 'Artificer's' to the name of the weapon"
			]),
			spellcastingBonus : [{
				name : "Artificer's Weapon",
				spells : ["artificer's weapon"],
				selection : ["artificer's weapon"]
			}],
			calcChanges : {
				atkAdd : ["if ((/Artificer's/i).test(inputText) && ( isMeleeWeapon || isRangedWeapon )) { fields.Mod = What('Int Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') ? 4 : fields.Mod ; fields.Description += (fields.Description ? '; ' : '') + ', the atk is magical, and has addtl effects per Artificers Weapon cantrip'; }; ", "If I include the word 'Artificers' in a weapon's name, it gets treated as my the weapon I imbued to use Intelligence instead of Strength or Dexterity, if my Intelligence modifier is higher than it would otherwise use."]
			},
			action : ["action", ""],
			eval : "AddWeapon(\"Artificer's Weapon\")",
			removeeval : "RemoveWeapon(\"Artificer's Weapon\")",
		},
		"feature2" : {
			name : "Magic Item Analysis",
			source : ["HB: Artificer", 4],
			minlevel : 1,
			action : ["action", ""],
			description : desc([
				"You know the artificer spells detect magic and identify and can cast as rituals",
				"You don't need to provide material components when casting identify with this"
			]),
		},
		"feature3" : {
			name : "Scientific Approach",
			source : ["HB: Artificer", 4],
			minlevel : 2,
			description : desc([
				"Choose a Scientific Approach you hone yourself to and put it in the \"Class\" field",
				"Choose either the Inventor, Physician, or Warsmith"
			]),
		},
		"feature4" : {
			name : "Arcane Empowerment",
			source : ["HB: Artificer", 4],
			minlevel : 3,
			recovery : "short rest",
			usages: 1,
			description : desc([
				"You can spend 10 mins with an object to empower it in 1 of 2 ways",
				"An implement or a weapon can be empowered only once per day in each of these ways.",
				"See the \"Notes\" page for more details"
			]),
			eval : "AddString(\"Extra.Notes\", \"Arcane Empowerment:\\n\\u25C6 Impart Energy (Arcane Empowerment 3, HB: Artificer 4)\\n   You recharge the power of a magic item that has a single use per long rest or until dawn.\\n\\u25C6 Augment Energy (Arcane Empowerment 3, HB: Artificer 4)\\n   I can infuse a weapon or an implement with a reservoir of energy that lasts until the end of my next long rest or until it is expended. The wielder of the item can use a free action before making an attack roll to expend the reservoir of energy to gain advantage to the next attack roll made with this item.\", true);",
			removeeval : "RemoveString(\"Extra.Notes\", \"Arcane Empowerment:\\n\\u25C6 Impart Energy (Arcane Empowerment 3, HB: Artificer 4)\\n   You recharge the power of a magic item that has a single use per long rest or until dawn.\\n\\u25C6 Augment Energy (Arcane Empowerment 3, HB: Artificer 4)\\n   I can infuse a weapon or an implement with a reservoir of energy that lasts until the end of my next long rest or until it is expended. The wielder of the item can use a free action before making an attack roll to expend the reservoir of energy to gain advantage to the next attack roll made with this item.\", true);",
		},
		"feature5" : {
			name : "Energy Transference",
			source : ["HB: Artificer", 4],
			minlevel : 3,
			recovery : "long rest",
			usages: 1,
			description : desc([
				"After a short rest you can breakdown higher level formulas into lower level",
				"You can never exceed breaking down a spell into higher than a 5th lvl",
				"You can return a number of formulas equal to your Intelligence modifier"
			]),
		},
		"feature6" : {
			name : "Transitive Properties",
			source : ["HB: Artificer", 5],
			minlevel : 5,
			description : desc([
				"Use the \"Choose Features\" button above to add Transitive Properties to the third page",
				"Whenever I gain an artificer level, I can replace an transitive property I know with another"
				]),
			additional : ["", "", "", "", "1 property known", "1 property known", "2 properties known", "2 properties known", "2 properties known", "2 properties known", "2 properties known", "2 properties known", "3 properties known", "3 properties known", "3 properties known", "3 properties known", "3 properties known", "4 properties known", "4 properties known", "4 properties known"],
			extraname : "Transitive Property",
			extrachoices : ["Camouflaged (prereq: level 13 artificer)", "Commanding (prereq: level 12 artificer, inventor subclass)", "Constructive Feedback (prereq: inventor subclass)", "Forceful", "Frictionless", "Linked", "Power Armor (prereq: level 10 artificer, warsmith subclass)", "Ranged Sight", "Reactionary", "Room Reader", "Sensory Overload", "Surplus Healing (prereq: physician subclass)", "Translation Suite"],
			"camouflaged (prereq: level 13 artificer)" : {
				name : "Camouflaged",
				description : "\n   " + "I can cast Invisibility at-will on myself without expending a formula",
				source : ["HB: Artificer", 5],
				spellcastingBonus : {
					name : "Camouflaged",
					spells : ["invisibility"],
					selection : ["invisibility"],
					atwill : true
				},
				prereqeval : "classes.known.artificer.level >= 13"
			},
			"commanding (prereq: level 12 artificer, inventor subclass)" : {
				name : "Commanding",
				description : "\n   " + "You can cast the command spell at-will against constructs.",
				source : ["HB: Artificer", 5],
				spellcastingBonus : {
					name : "Commanding",
					spells : ["command"],
					selection : ["command"],
					atwill : true
				},
				prereqeval : "classes.known.artificer.level >= 12 && (/inventor/).test(classes.known.artificer.subclass)"
			},
			"constructive feedback (prereq: inventor subclass)" : {
				name : "Constructive Feedback",
				description : "\n   " + "Your construct can communicate with you in a limited fashion only you understand via tones and sounds.",
				source : ["HB: Artificer", 5],
				prereqeval : "(/inventor/).test(classes.known.artificer.subclass)"
			},
			"forceful" : {
				name : "Forceful",
				description : "\n   " + "When you hit a creature w/ Artificer's Weapon cantrip, you can push 5ft",
				source : ["HB: Artificer", 5],
			},
			"frictionless" : {
				name : "Frictionless",
				description : "\n   " + "Must be used on Boots" + "\n   " + "Increase your movement speed by 10 ft while wearing",
				source : ["HB: Artificer", 5],
			},
			"linked" : {
				name : "Linked",
				description : "\n   " + "As a bonus action you can summon the piece of equipment to your hand" + "\n   " + "Equipment must be within line of sight and 100 ft",
				source : ["HB: Artificer", 5],
			},
			"power armor (prereq: level 10 artificer, warsmith subclass)" : {
				name : "Power Armor",
				description : "\n   " + "Must be used on Armor" + "\n   " + "I gain a +1 power bonus to AC while wearing this armor",
				source : ["HB: Artificer", 5],
				prereqeval : "classes.known.artificer.level >= 10 && (/warsmith/).test(classes.known.artificer.subclass)"
			},
			"ranged sight" : {
				name : "Ranged Sight",
				description : "\n   " + "Must be used on a ranged weapon, glasses or a helmet" + "\n   " + "Weapon attacks or perception checks made using this item double in range and long range" + "\n   " + "For example a longbow goes from 150/600 to 300/1200",
				source : ["HB: Artificer", 5],
			},
			"reactionary" : {
				name : "Reactionary",
				description : "\n   " + "Must be a weapon" + "\n   " + "Your Artificer's Weapon cantrip can be used as a reaction during opportunity attacks with this weapon",
				source : ["HB: Artificer", 5],
			},
			"room reader" : {
				name : "Room Reader",
				description : "\n   " + "Must be used on glasses or a helmet" + "\n   " + "While wearing this piece you are considered proficient in Wisdom Ability (Insight) checks",
				source : ["HB: Artificer", 5],
			},
			"sensory overload" : {
				name : "Sensory Overload",
				description : "\n   " + "Your piece can exhibit fanciful sensory changes to the area, you can cast prestidigitation at will",
				source : ["HB: Artificer", 5],
				spellcastingBonus : {
					name : "Sensory Overload",
					spells : ["prestidigitation"],
					selection : ["prestidigitation"],
					atwill : true
				},
			},
			"surplus healing (prereq: physician subclass)" : {
				name : "Surplus Healing",
				description : "\n   " + "Must be used on Gloves" + "\n   " + "Excess healing done with a healing potion or arcane formula can be transferred to an adj. ally of the recipient",
				source : ["HB: Artificer", 5],
				prereqeval : "(/physician/).test(classes.known.artificer.subclass)"
			},
			"translation suite" : {
				name : "Translation Suite",
				description : "\n   " + "Must be used on glasses or a helmet" + "\n   " + "You can read all writing",
				source : ["HB: Artificer", 5],
			}
		},
		"feature7" : {
			name : "Infuse Magic",
			source : ["HB: Artificer", 5],
			minlevel : 6,
			description : desc([
				"Any spell with a casting time of 1 action can be infused in an item",
				"Other creatures can activate the formula as an action",
				"You can have a number of infused spells at one time equal to your Int Mod"
			]),
		},
		"feature8" : {
			name : "Carry the Remainder",
			source : ["HB: Artificer", 5],
			minlevel : 20,
			recovery : "long rest",
			description : desc([
				"When I complete a long rest, I can keep unused formulas for the next day",
				"These formulas can have a combined level equal or less than double Int Mod",
				"These spells can't be higher than 6th lvl and don't count against your spells"
			]),
		}
	}
}

//Subclass for Inventor
ClassSubList["inventor"] = {
	regExpSearch : /^(?=.*inventor).*$/i,
	subname : "Inventor",
	source : ["HB: Artificer", 7],
	spellcastingExtra : ["beast bond", "speak with animals", "zephyr strike", "beast sense", "shatter", "sending", "tiny servant", "conjure minor elementals", "locate creature", "animate objects", "conjure elemental", "transmute rock"],
	features : {
		"subclassfeature1" : {
			name : "Innovative Master",
			source : ["HB: Artificer", 7],
			minlevel : 2,
			description : desc([
				"Gain proficiency in Tinker's tools",
				"If I already have Tinker's Tools, I gain expertise"
			]),
		},
		"subclassfeature2" : {
			name : "Inventive Measures",
			source : ["HB: Artificer", 7],
			minlevel : 2,
			description : desc([
				"I gain mending as a bonus cantrip",
				"I can use mending to heal my loyal construct 1GP per HP",
				"Arcane Formulas that target beasts function instead for constructs",
				"Your Artificer's Weapon cantrip now gives each adj ally a +1 to hit on their next attack"
			]),
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : ["if (theWea && (/artificer's weapon/i).test(theWea.name)) {fields.Description += ' & allies within 5ft get +1 to their next atk'; }; ", "Once on each of my turns when I hit a creature with my Artificer's Weapon cantrip, I can provide allies within 5ft a +1 power bonus to the next attack made against them."]
			},
		},
		"subclassfeature3" : {
			name : "Loyal Construct",
			source : ["HB: Artificer", 7],
			minlevel : 2,
			recovery : "short rest",
			description : desc([
				"I spend 8 hours and 25 GP to build a loyal construct",
				"I can only have 1 loyal construct at a time",
				"I can use my Infuse Object feature on my Loyal Construct"
			]),
			additional : "1/4 CR up to medium sized beast",
		},
		"subclassfeature4" : {
			name : "Reactionary Syntax",
			source : ["HB: Artificer", 8],
			minlevel : 5,
			description : desc([
				"If I use the Artificer's Weapon cantrip, my construct can use its reaction to make a melee attack"
			]),
		},
		"subclassfeature5" : {
			name : "Construct's Coating",
			source : ["HB: Artificer", 8],
			minlevel : 7,
			description : desc([
				"Your construct can be coated to gain resistance to an element during a long rest",
				"Select from Acid, Cold, Fire, Lightning, or Thunder"
			]),
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Construct Mode Change",
			source : ["HB: Artificer", 8],
			minlevel : 10,
			description : desc([
				"My construct can use its bonus action to enter a state for 1 minute",
				"At 18th lvl, the modes last until a new mode is selected",
				"See the \Notes\ Page for more details"
			]),
			eval : "AddString(\"Extra.Notes\", \"Construct Mode Change:\\n\\u25C6 Attack Mode\\n   My construct can attack recklessly.\\n  Attacks are made with advantage, but all attacks against construct have advantage.\\n\\u25C6 Defense Mode\\n  Creatures Construct hit with opportunity attacks have 0 speed for this turn. The Disengage action doesn't work on it. When a creature within 5 ft makes an attack against a target other than me, it can use it's reaction to make a melee weapon attack against the attacker.\\n\\u25C6 Support Mode\\n   Construct can take first aid action as a bonus action to stabilize a dying creature.\\n   I have adv on Wisdom (Medicine) checks while in line of sight of my construct.\", true);",
			removeeval : "RemoveString(\"Extra.Notes\", \"Construct Mode Change:\\n\\u25C6 Attack Mode\\n   My construct can attack recklessly.\\n  Attacks are made with advantage, but all attacks against construct have advantage.\\n\\u25C6 Defense Mode\\n  Creatures Construct hit with opportunity attacks have 0 speed for this turn. The Disengage action doesn't work on it. When a creature within 5 ft makes an attack against a target other than me, it can use it's reaction to make a melee weapon attack against the attacker.\\n\\u25C6 Support Mode\\n   Construct can take first aid action as a bonus action to stabilize a dying creature.\\n   I have adv on Wisdom (Medicine) checks while in line of sight of my construct.\", true);",
			action : ["bonus action", ""],
			recovery : "long rest",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Con Mod\").value);",
			usages: "Con mod per ",
		},
		"subclassfeature7" : {
			name : "Construct's Armored Defense",
			source : ["HB: Artificer", 8],
			minlevel : 17,
			recovery : "long rest",
			description : desc([
				"Construct gains resistance to bludgeoning, piercing, and slashing damage"
			]),
			dmgres : [["Bludgeoning", "Bludg."], ["Piercing", "Pierc."], ["Slashing", "Slash."]]
		}
	}
}

//Subclass for Physician
ClassSubList["physician"] = {
	regExpSearch : /^(?=.*physician).*$/i,
	subname : "Physician",
	source : ["HB: Artificer", 5],
	spellcastingExtra : ["healing word", "inflict wounds", "aid", "lesser restoration", "fear", "revivify", "mass healing word", "death ward", "polymorph", "contagion", "greater restoration"],
	features : {
		"subclassfeature1" : {
			name : "Healing Master",
			source : ["HB: Artificer", 5],
			minlevel : 2,
			description : desc([
				"Gain proficiency in Alchemist Supplies",
				"If I already have Alchemist Supplies, I gain expertise"
			]),
		},
		"subclassfeature2" : {
			name : "Field Medic",
			source : ["HB: Artificer", 6],
			minlevel : 2,
			description : desc([
				"I can administer potions as a bonus action",
				"If proficient in the Medicine Skill, I have adv. on Wisdom (Medicine) checks to stabilize allies and study ailments",
				"My Artificer's Weapon cantrip now gives each adj ally a +1 to their AC"
			]),
			action : ["bonus action", " (Administer Potion)"],
			calcChanges : {
				atkAdd : ["if (theWea && (/artificer's weapon/i).test(theWea.name)) {fields.Description += ' & allies within 5ft get +1 AC vs first atk made against them'; }; ", "Once on each of my turns when I hit a creature with my Artificer's Weapon cantrip, I can provide allies within 5ft a +1 power bonus to the next attack made against them."]
			},
		},
		"subclassfeature3" : {
			name : "Adrenaline Shot",
			source : ["HB: Artificer", 6],
			minlevel : 5,
			recovery : "long rest",
			usages : "Con mod per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Con Mod\").value);",
			description : desc([
				"When I use a support formula on an ally, they can instead take a +1 AC and temp HP equal to half my artificer's level + Int Mod",
				"Recipient can expend the bonuses to activate actual effect of the formula",
				"The booster lasts for 1 minute, if not expended before, the effects dissipate"
			]),
		},
		"subclassfeature4" : {
			name : "Patience is a Virtue",
			source : ["HB: Artificer", 6],
			minlevel : 7,
			description : desc([
				"When using a healing potion or a healing formula I can take 1 minute to cast/use",
				"I maximize healing, with no need to roll"
			]),
		},
		"subclassfeature5" : {
			name : "Innovative Formulas",
			source : ["HB: Artificer", 6],
			minlevel : 10,
			description : desc([
				"Any healing spell I do heals additional hit points equal to my Int Mod",
				"Any damage spells I do deal additional damage equal to my Int Mod"
			]),
		},
		"subclassfeature6" : {
			name : "Coalescence",
			source : ["HB: Artificer", 6],
			minlevel : 17,
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Int Mod\").value);",
			recovery : "long rest",
			description : desc([
				"Once per turn when I use a support formula I can use an offensive formula as a bonus action and vice versa",
				"The bonus action spell can not be higher than 5th level"
			]),
		}
	}
}

//Subclass for Warsmith
ClassSubList["warsmith"] = {
	regExpSearch : /^(?=.*warsmith).*$/i,
	subname : "Warsmith",
	source : ["HB: Artificer", 7],
	spellcastingExtra : ["ensnaring strike", "thunderous smite", "wrathful smite", "branding smite", "cordon of arrows", "blinding smite", "flame arrows", "lightning arrow", "staggering smite", "mordenkainen's faithful hound", "banishing smite", "conjure volley"],
	features : {
		"subclassfeature1" : {
			name : "Smith Master",
			source : ["HB: Artificer", 5],
			minlevel : 2,
			description : desc([
				"Gain proficiency in Smith's Tools",
				"If I already have Smith's Tools, I gain expertise"
			]),
		},
		"subclassfeature2" : {
			name : "Analytical Warrior",
			source : ["HB: Artificer", 6],
			minlevel : 2,
			description : desc([
				"I am proficient in heavy armor and martial weapons",
				"My Artificer's Weapon cantrip now gives each adj ally a bonus to dmg equal to my Con Mod for their next 1st attack"
			]),
			armor : [false, false, true, false],
			weapons : [false, true],
			calcChanges : {
				atkAdd : ["if (theWea && (/artificer's weapon/i).test(theWea.name)) {fields.Description += ' & allies within 5ft get +' + What('Con Mod') + ' bonus to their next atk dmg'; }; ", "Once on each of my turns when I hit a creature with my Artificer's Weapon cantrip, I can provide allies within 5ft a +1 power bonus to the next attack made against them."]
			}
		},
		"subclassfeature3" : {
			name : "Signature Weapon",
			source : ["HB: Artificer", 6],
			minlevel : 5,
			recovery : "short rest",
			description : desc([
				"I craft a signature weapon only I can wield",
				"It uses Intelligence for all attack and damage rolls and counts as magical",
				"I can expend a 3rd lvl formula to make it a +1 for 8 hrs, a 5th lvl for +2 and 10 hrs or a 7th lvl for +3 that lasts til long rest",
				"If broken or stolen I can make a new one w/ 8 hrs and 1 hit die"
			]),
			calcChanges : {
				atkAdd : ["if ((/Signature/i).test(inputText) && ( isMeleeWeapon || isRangedWeapon )) { fields.Mod = What('Int Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') ? 4 : fields.Mod ; fields.Description += (fields.Description ? '; ' : '') + ', the atk is magical, and can be made into a +1/+2/+3 wpn'; }; ", "If I include the word 'Signature' in a weapon's name, it gets treated as my the weapon that is my signature weapon."]
			},
		},
		"subclassfeature4" : {
			name : "Arcane Weapon",
			source : ["HB: Artificer", 6],
			minlevel : 7,
			description : desc([
				"As a bonus action I can add 1d10 elemental to my next attack",
				"I select from Acid, Cold, Fire, and Lightning at time",
				"This increases to 2d10 at 11th level and 3d10 at 17th level"
			]),
			recovery : "long rest",
			usages : "Con Mod per",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Con Mod\").value);",
			action : ["bonus action", ""],
			additional : levels.map(function (n) {
				if (n < 7) return "";
				return "+" + (n < 11 ? 1 : n < 17 ? 2 : 3) + "d10 elemental dmg";
			}),
		},
		"subclassfeature5" : {
			name : "Arcane Barrier",
			source : ["HB: Artificer", 6],
			minlevel : 10,
			description : desc([
				"I can touch an ally or myself to create an elemental barrier for 1 min",
				"See the \Notes\ Page for more details"
			]),
			eval : "AddString(\"Extra.Notes\", \"Arcane Barrier:\\n\\u25C6 Acid Barrier\\n   When target is hit by a melee attack, attacker takes 2d6 acid damage.\\n   Attacker must make a Dex Save, on fail, blinded til end of their next turn.\\n\\u25C6 Cold Barrier\\n   When target is hit by a melee attack, attacker takes 2d6 cold damage.\\n   Attacker must make a Con Save, on fail, restrained til end of their next turn.\\n\\u25C6 Fire Barrier\\n   When target is hit by a melee attack, attacker takes 2d6 fire damage.\\n   Attacker must make a Wis Save, on fail, frightened til end of their next turn.\\n\\u25C6 Lightning Barrier\\n   When target is hit by a melee attack, attacker takes 2d6 lightning damage.\\n  Any enemy within 10 ft of attacker takes 1d6 lightning damage.\", true);",
			removeeval : "RemoveString(\"Extra.Notes\", \"Arcane Barrier:\\n\\u25C6 Acid Barrier\\n   When target is hit by a melee attack, attacker takes 2d6 acid damage.\\n   Attacker must make a Dex Save, on fail, blinded til end of their next turn.\\n\\u25C6 Cold Barrier\\n   When target is hit by a melee attack, attacker takes 2d6 cold damage.\\n   Attacker must make a Con Save, on fail, restrained til end of their next turn.\\n\\u25C6 Fire Barrier\\n   When target is hit by a melee attack, attacker takes 2d6 fire damage.\\n   Attacker must make a Wis Save, on fail, frightened til end of their next turn.\\n\\u25C6 Lightning Barrier\\n   When target is hit by a melee attack, attacker takes 2d6 lightning damage.\\n  Any enemy within 10 ft of attacker takes 1d6 lightning damage.\", true);",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Elemental Embodiment",
			source : ["HB: Artificer", 6],
			minlevel : 17,
			recovery : "long rest",
			usages : 1,
			action : ["bonus action", " Immunity"],
			description : desc([
				"I gain resistance to Acid, Cold, Fire, and Lightning Damage",
				"As a bonus action I can gain immunity to one of these for 1 min per long rest",
				"My Signature Weapon now crits on a 19-20"
			]),
			calcChanges : {
				atkAdd : ["if ((/Signature/i).test(inputText) && ( isMeleeWeapon || isRangedWeapon )) { var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';"],
			},
			dmgres : [["Acid", "Acid"], ["Cold", "Cold"], ["Fire", "Fire"], ["Lightning", "Lightning"]]
		}
	}
}

//Add Artificer's Weapon spell to the Spell List
SpellsList["artificer's weapon"] = {
	name : "Artificer's Weapon",
	classes : ["artificer"],
	source : ["HB: Artificer", 11],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "weapon",
	components : "V, M",
	compMaterial : "A weapon",
	duration : "Instantaneous",
	description : "1 crea takes magic weapon damage; +1d8 at CL 5, 11, and 17",
	descriptionFull : "Your weapon is infused with arcane energy.  Make a melee or range attack with a weapon against one creature. The weapon's attack is considered magical for the sake of getting passed resistances.  The spell’s damage deals additional thunder damage at 5th level (1d8), 11th level (2d8), and 17th level (3d8), and the damage type is thunder."
};

// Add weapons (attack cantrips)
WeaponsList["artificer's weapon"] = {
	regExpSearch : /^(?=.*artificer's)(?=.*weapon).*$/i,
	name : "Artificer's Weapon",
	source : ["HB: Artificer", 11],
	list : "spell",
	ability : 4,
	type : "Cantrip",
	damage : ["Bd8", "", "thunder"],
	range : "With weapon",
	description : "You deal additional Thunder dmg",
	abilitytodamage : false
};

UpdateDropdown("weapon");
UpdateDropdown("spells");

//add the source
SourceList["HB: Artificer"] = {
	name : "Homebrew: Artificer Class",
	abbreviation : "HB: Artificer",
	group : "Homebrew",
	url : "http://homebrewery.naturalcrit.com/share/HkHx9mmMf"
};
