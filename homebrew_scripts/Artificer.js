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
[//level 1
	"alarm", "armor of agathys", "cause fear", "charm person", "comprehend languages", "cure wounds", "detect poison and disease", "disguise self", "entangle", "expeditious retreat", "faerie fire", "false life", "feather fall", "fog cloud", "illusory script", "jump", "longstrider", "mage armor", "protection from evil and good", "shield", "sleep", "thunderwave", "unseen servant",

	//level 2
	"alter self", "arcane lock", "barkskin", "blindness/deafness" , "blur", "calm emotions", "darkness", "darkvision", "earthbind", "enhance ability", "enlarge/reduce", "enthrall", "find traps", "hold person", "invisibility", "levitate", "mirror image", "misty step", "ray of enfeeblement", "rope trick", "see invisibility", "spider climb", "suggestion", "web", "zone of truth",

	//level 3
	"bestow curse", "counterspell", "dispel magic", "enemies abound", "fly", "gaseous form", "haste", "hypnotic pattern", "life transference", "magic circle", "major image", "remove curse", "slow", "thunder step", "tongues", "vampiric touch", "wall of sand", "wall of water",

	//level 4
	"antilife shell", "arcane eye", "banishment", "blight", "charm monster", "compulsion", "confusion", "dimension door", "elemental bane", "fabricate", "fire shield", "freedom of movement", "greater invisibility", "hallucinatory terrain", "shadow of moil", "stone shape", "stoneskin", "wall of fire",

	//level 5
	"contact other plane", "dispel evil and good", "dominate person", "dream", "enervation", "far step", "hold monster", "mass cure wounds", "negative energy flood", "passwall", "scrying", "skill empowerment", "synaptic static", "teleportation circle", "wall of force", "wall of light", "wall of stone"
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
		[true, true],
		[true, true]
	],
	equipment : "Artificer starting equipment:\n \u2022 Any two simple weapons or any martial weapon;\n \u2022 a light crossbow and 20 bolts;\n \u2022 scale mail -or- studded leather armor;\n \u2022 Thieves' tools, formula book, and a dungeoneer's pack; \n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Scientific Study", ["constructs", "medicine", "warsmithing"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave : 4,
	spellcastingFactor : 2,
	spellcastingTable : [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 0, 0, 0, 0, 0, 0, 0, 0],
		[3, 0, 0, 0, 0, 0, 0, 0, 0],
		[4, 2, 0, 0, 0, 0, 0, 0, 0],
		[4, 2, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 0, 0, 0, 0, 0, 0, 0],
		[4, 3, 2, 0, 0, 0, 0, 0, 0],
		[4, 3, 2, 0, 0, 0, 0, 0, 0],
		[4, 3, 3, 0, 0, 0, 0, 0, 0],
		[4, 3, 3, 0, 0, 0, 0, 0, 0],
		[4, 3, 3, 1, 0, 0, 0, 0, 0],
		[4, 3, 3, 1, 0, 0, 0, 0, 0],
		[4, 3, 3, 2, 0, 0, 0, 0, 0],
		[4, 3, 3, 2, 0, 0, 0, 0, 0],
		[4, 3, 3, 3, 1, 0, 0, 0, 0],
		[4, 3, 3, 3, 1, 0, 0, 0, 0],
		[4, 3, 3, 3, 2, 0, 0, 0, 0],
		[4, 3, 3, 3, 2, 0, 0, 0, 0]
	],
	spellcastingKnown : {
		spells : "book",
		prepared : true
	},
	features : {
		"feature0" : {
			name : "Signature Weapon",
			source : ["HB: Artificer", 3],
			minlevel : 1,
			description : desc([
				"I craft a signature weapon only I can wield",
				"It uses Constitution for all attack and damage rolls and counts as magical",
				"I can expend a 2nd lvl formula to make it a +1 for 8 hrs, a 3rd lvl for +2 and 10 hrs or a 4th lvl for +3 that lasts til long rest",
				"To set a weapon as your Signature one, add 'Signature' to the name of the weapon",
				"If broken or stolen I can make a new one w/ 8 hrs and 1 hit die"
			]),
			calcChanges : {
				atkAdd : ["if ((/Signature/i).test(inputText) && ( isMeleeWeapon || isRangedWeapon )) { fields.Mod = What('Con Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') ? 3 : fields.Mod ; fields.Description += (fields.Description ? '; ' : '') + ', the atk is magical'; }; ", "If I include the word 'Signature' in a weapon's name, it gets treated as my the weapon I imbued to use Constitution instead of Strength or Dexterity, if my Constitution modifier is higher than it would otherwise use."]
			},
			action : ["action", ""],
		},
		"feature1" : {
			name : "Magic Item Analysis",
			source : ["HB: Artificer", 3],
			minlevel : 1,
			action : ["action", ""],
			description : desc([
				"You know the artificer spells detect magic and identify and can cast as rituals",
				"You don't need to provide material components when casting identify with this"
			]),
			spellcastingBonus : [{
				name : "Magic Item Analysis",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : "(R)"
			}, {
				name : "Magic Item Analysis",
				spells : ["identify"],
				selection : ["identify"],
				firstCol : "(R)"
			}]
		},
		"feature2" : {
			name : "Arcane Formulas",
			source : ["HB: Artificer", 3],
			minlevel : 2,
			description : desc([
				"I can cast prepared artificer spells via formulas, using Int as my spellcasting ability",
				"During a short rest I can transform one formula into another of equal level",
				"I can prepare an spell from any formula I have in my book"
			]),
			action : ["action", ""],
		},
		"feature3" : {
			name : "Arcane Empowerment",
			source : ["HB: Artificer", 4],
			minlevel : 2,
			recovery : "short rest",
			usages: 1,
			description : desc([
				"You can spend 10 mins with an object to empower it in 1 of 2 ways",
				"An item can be empowered only once per day in each of these ways.",
				"See the \"Notes\" page for more details"
			]),
			eval : "AddString(\"Extra.Notes\", \"Arcane Empowerment:\\n\\u25C6 Impart Energy (Arcane Empowerment 3, HB: Artificer 4)\\n   You recharge the power of a magic item that has a single use per long rest or until dawn.\\n\\u25C6 Augment Energy (Arcane Empowerment 3, HB: Artificer 4)\\n   I can infuse a weapon or an implement with a reservoir of energy that lasts until the end of my next long rest or until it is expended. The wielder of the item can use a free action before making an attack roll to expend the reservoir of energy to gain advantage to the next attack roll made with this item.\", true);",
			removeeval : "RemoveString(\"Extra.Notes\", \"Arcane Empowerment:\\n\\u25C6 Impart Energy (Arcane Empowerment 3, HB: Artificer 4)\\n   You recharge the power of a magic item that has a single use per long rest or until dawn.\\n\\u25C6 Augment Energy (Arcane Empowerment 3, HB: Artificer 4)\\n   I can infuse a weapon or an implement with a reservoir of energy that lasts until the end of my next long rest or until it is expended. The wielder of the item can use a free action before making an attack roll to expend the reservoir of energy to gain advantage to the next attack roll made with this item.\", true);",
		},
		"feature4" : {
			name : "Scientific Study",
			source : ["HB: Artificer", 4],
			minlevel : 3,
			description : desc([
				"Choose a Scientific Study you hone yourself to and put it in the \"Class\" field",
				"Choose either the Study of Constructs, Medicine, or Warsmithing"
			]),
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
			additional : ["", "", "", "", "1 property known", "1 property known", "2 properties known", "2 properties known", "2 properties known", "2 properties known", "3 properties known", "3 properties known", "3 properties known", "4 properties known", "4 properties known", "4 properties known", "4 properties known", "5 properties known", "5 properties known", "5 properties known"],
			extraname : "Transitive Property",
			extrachoices : ["Aura Amplifier", "Barrier Boost (prereq: level 14, Warsmithing subclass)", "Camouflaged (prereq: level 14)", "Chronal Disrupter (prereq: level 19)", "Commanding (prereq: level 11, Constructs subclass)", "Constructive Feedback (prereq: Constructs subclass)", "Empowered Draining (prereq: level 14, Medicine subclass)", "Forceful", "Frictionless", "Infusion Booster (prereq: level 11, Medicine subclass)", "Linked", "Overclocked Construct (prereq: level 14, Constructs subclass)", "Power Armor (prereq: level 11, Warsmithing subclass)", "Neuralyzer (prereq: level 17)", "Ranged Sight", "Room Reader", "Sensory Overload", "Secondary Signature (prereq: Warsmithing subclass)", "Surplus Healing (prereq: Medicine subclass)", "Transdimensional (prereq: level 18)", "Translation Suite"],
			"aura amplifier" : {
				name : "Aura Amplifier",
				description :  desc([
					"Must be on a non-weapon item",
					"My signature weapon bonus effects increase to a range of 10 ft"
				]),
				source : ["HB: Artificer", 9],
				calcChanges : {
					atkAdd : ["if ((/Signature/i).test(inputText) && ( isMeleeWeapon || isRangedWeapon )) {fields.Description = fields.Description.replace('5 ft', '10 ft');};", "My aura extends to 10 ft to buff my allies."]
				}
			},
			"barrier boost (prereq: level 14, warsmithing subclass)" : {
				name : "Camouflaged",
				description :  desc([
					"I can user my Arcane Barrier feature twice per short rest"
				]),
				source : ["HB: Artificer", 9],
				prereqeval : "classes.known.artificer.level >= 14 && (/warsmithing/).test(classes.known.artificer.subclass)"
			},
			"camouflaged (prereq: level 14)" : {
				name : "Camouflaged",
				description : "\n   " + "I can cast Invisibility at-will on myself without expending a formula",
				source : ["HB: Artificer", 9],
				spellcastingBonus : {
					name : "Camouflaged",
					spells : ["invisibility"],
					selection : ["invisibility"],
					atwill : true
				},
				prereqeval : "classes.known.artificer.level >= 14"
			},
			"chronal disrupter (prereq: level 19)" : {
				name : "Chronal Disrupter",
				description :  desc([
					"I can cast Time Stop once per day using this item"
				]),
				source : ["HB: Artificer", 9],
				spellcastingBonus : {
					name : "Chronal Disrupter",
					spells : ["time stop"],
					selection : ["time stop"],
					atwill : false
				},
				prereqeval : "classes.known.artificer.level >= 19"
			},
			"commanding (prereq: level 11, constructs subclass)" : {
				name : "Commanding",
				description : desc([
					"You can cast the command spell at-will against constructs."
				]),
				source : ["HB: Artificer", 9],
				spellcastingBonus : {
					name : "Commanding",
					spells : ["command"],
					selection : ["command"],
					atwill : true
				},
				prereqeval : "classes.known.artificer.level >= 11 && (/constructs/).test(classes.known.artificer.subclass)"
			},
			"constructive feedback (prereq: constructs subclass)" : {
				name : "Constructive Feedback",
				description : desc([
					"Your construct can communicate with you in a limited fashion only you understand via tones and sounds."
				]),
				source : ["HB: Artificer", 9],
				prereqeval : "(/constructs/).test(classes.known.artificer.subclass)"
			},
			"empowered draining (prereq: level 14, medicine subclass)" : {
				name : "Empowered Draining",
				description : desc([
					"Must be on a weapon",
					"Arcane Drain feature now restores temp HP equal to Int + full artificer level."
				]),
				source : ["HB: Artificer", 9],
				prereqeval : "classes.known.artificer.level >= 14 && (/medicine/).test(classes.known.artificer.subclass)"
			},
			"forceful" : {
				name : "Forceful",
				description : desc([
					"When you hit a creature w/ your Signature Weapon, you can push 5ft"
				]),
				source : ["HB: Artificer", 9],
			},
			"frictionless" : {
				name : "Frictionless",
				description : desc([
					"Must be used footwear",
					"Increase your movement speed by 10 ft while wearing"
				]),
				source : ["HB: Artificer", 9],
			},
			"infusion booster (prereq: level 11, medicine subclass)" : {
				name : "Infusion Booster",
				description : desc([
					"Must be on gloves",
					"Healing formulas provide extra temp hp equal to Con Mod + half Artificer level."
				]),
				source : ["HB: Artificer", 9],
				prereqeval : "classes.known.artificer.level >= 11 && (/medicine/).test(classes.known.artificer.subclass)"
			},
			"linked" : {
				name : "Linked",
				description : desc([
					"As a bonus action you can summon the piece of equipment to your hand",
					"Equipment must be within line of sight and 100 ft"
				]),
				source : ["HB: Artificer", 5],
			},
			"overclocked construct (prereq: level 14, constructs subclass)" : {
				name : "Overclocked Construct",
				description : desc([
					"Must be on your construct",
					"Construct mode change lasts until a long rest or a new mode selected."
				]),
				source : ["HB: Artificer", 9],
				prereqeval : "classes.known.artificer.level >= 14 && (/constructs/).test(classes.known.artificer.subclass)"
			},
			"power armor (prereq: level 11, warsmithing subclass)" : {
				name : "Power Armor",
				description :  desc([
					"Must be used on Armor",
					"I gain a +1 power bonus to AC while wearing this armor"
				]),
				source : ["HB: Artificer", 9],
				prereqeval : "classes.known.artificer.level >= 11 && (/warsmithing/).test(classes.known.artificer.subclass)"
			},
			"neuralyzer (prereq: level 17)" : {
				name : "Neuralyzer",
				description :  desc([
					"Must be something handheld",
					"I can cast Power Word Stun once per day using this item"
				]),
				source : ["HB: Artificer", 9],
				spellcastingBonus : {
					name : "Neuralyzer",
					spells : ["power word stun"],
					selection : ["power word stun"],
					atwill : false
				},
				prereqeval : "classes.known.artificer.level >= 17"
			},
			"ranged sight" : {
				name : "Ranged Sight",
				description : desc([
					"Must be used on a ranged weapon, glasses or a helmet",
					"Weapon attacks or perception checks made using this item double in range and long range",
					"For example a longbow goes from 150/600 to 300/1200"
				]),
				source : ["HB: Artificer", 9]
			},
			"room reader" : {
				name : "Room Reader",
				description : desc([
					"Must be used on glasses or a helmet",
					"While wearing this piece you are considered proficient in Wisdom Ability (Insight) checks"
				]),
				source : ["HB: Artificer", 9]
			},
			"sensory overload" : {
				name : "Sensory Overload",
				description : desc([
					"You can cast prestidigitation at will"
				]),
				source : ["HB: Artificer", 9],
				spellcastingBonus : {
					name : "Sensory Overload",
					spells : ["prestidigitation"],
					selection : ["prestidigitation"],
					atwill : true
				}
			},
			"secondary signature (prereq: warsmithing subclass)" : {
				name : "Surplus Healing",
				description : desc([
					"Must be a weapon",
					"This weapon is now considered a second signature weapon."
				]),
				source : ["HB: Artificer", 9],
				prereqeval : "(/warsmithing/).test(classes.known.artificer.subclass)"
			},
			"surplus healing (prereq: medicine subclass)" : {
				name : "Surplus Healing",
				description : desc([
					"Must be used on Gloves",
					"Excess healing done with a healing potion or arcane formula can be transferred to an adj. ally of the recipient"
				]),
				source : ["HB: Artificer", 9],
				prereqeval : "(/medicine/).test(classes.known.artificer.subclass)"
			},
			"transdimensional (prereq: level 18)" : {
				name : "Transdimensional",
				description :  desc([
					"I can cast Teleport once per day using this item"
				]),
				source : ["HB: Artificer", 9],
				spellcastingBonus : {
					name : "Transdimensional",
					spells : ["teleport"],
					selection : ["teleport"],
					atwill : false
				},
				prereqeval : "classes.known.artificer.level >= 18"
			},
			"translation suite" : {
				name : "Translation Suite",
				description : desc([
					"Must be used on glasses or a helmet",
					"You can read all writing"
				]),
				source : ["HB: Artificer", 9],
			}
		},
		"feature7" : {
			name : "Infuse Magic",
			source : ["HB: Artificer", 5],
			minlevel : 6,
			description : desc([
				"Any formula with a casting time of 1 action can be infused in an item",
				"Other creatures can activate the formula as an action",
				"You can have a number of infused formulas at one time equal to your Int Mod"
			]),
		},
		"feature8" : {
			name : "Defuse Magic",
			source : ["HB: Artificer", 5],
			minlevel : 20,
			recovery : "long rest",
			description : desc([
				"I can spend 10 items with several magic items to recover spell slots up to my Int mod",
				"Common magic items recover 1 spell slot, uncommon 2, rare 3, very rare 4, legendary 5",
				"A magic item becomes inert and can't be infused until a long rest after"
			]),
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Con Mod\").value);",
			usages: "Con mod per ",
			recovery : "long rest"
		}
	}
}

//Subclass for Constructs
ClassSubList["constructs"] = {
	regExpSearch : /^(?=.*constructs).*$/i,
	subname : "Study of Constructs",
	source : ["HB: Artificer", 5],
	spellcastingExtra : ["beast bond", "speak with animals", "zephyr strike", "beast sense", "shatter", "sending", "tiny servant", "conjure minor elementals", "locate creature", "animate objects", "conjure elemental", "transmute rock"],
	features : {
		"subclassfeature1" : {
			name : "Innovative Master",
			source : ["HB: Artificer", 5],
			minlevel : 3,
			description : desc([
				"Gain proficiency in Tinker's tools",
				"If I already have Tinker's Tools, I gain expertise in them"
			]),
			eval : "if (CurrentProfs.tool[\"Tinker's Tools\"] && (/(tinker|tinkers).*(tool|tools)/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
			removeeval : "if (CurrentProfs.tool[\"Tinker's Tools\"] && (/tinker|tinkers).*(tool|tools)/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
		},
		"subclassfeature2" : {
			name : "Inventive Measures",
			source : ["HB: Artificer", 5],
			minlevel : 3,
			description : desc([
				"I gain the mending cantrip",
				"I can use mending to heal my loyal construct 1GP per HP",
				"Arcane Formulas that target beasts function instead for constructs",
				"Attacking with my signature weapon now gives allies within 5 ft a +1 to hit on their next attack"
			]),
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : ["if ((/Signature/i).test(inputText) && ( isMeleeWeapon || isRangedWeapon )) {fields.Description += ' & allies within 5 ft get +1 to their next atk'; }; ", "Once on each of my turns when I hit a creature with my Signature Weapon, I can provide allies within 5ft a +1 power bonus to the next attack made against them."]
			},
			spellcastingBonus : {
				name : "Inventive Measures",
				spells : ["mending"],
				selection : ["mending"],
				atwill : true
			}
		},
		"subclassfeature3" : {
			name : "Loyal Construct",
			source : ["HB: Artificer", 6],
			minlevel : 2,
			recovery : "short rest",
			description : desc([
				"I spend 8 hours and 25 GP to build a loyal construct",
				"I can only have 1 loyal construct at a time",
				"I can use my Infuse Magic feature on my Loyal Construct"
			]),
			additional : "1/4 CR up to medium sized beast",
		},
		"subclassfeature4" : {
			name : "Reactionary Syntax",
			source : ["HB: Artificer", 6],
			minlevel : 5,
			description : desc([
				"If I use my Signature Weapon to attack, my construct can use its reaction to make a melee attack"
			]),
		},
		"subclassfeature5" : {
			name : "Construct's Coating",
			source : ["HB: Artificer", 6],
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
			source : ["HB: Artificer", 6],
			minlevel : 10,
			description : desc([
				"My construct can use its bonus action to enter a state for 1 minute",
				"See the \Notes\ Page for more details"
			]),
			eval : "AddString(\"Extra.Notes\", \"Construct Mode Change:\\n\\u25C6 Attack Mode\\n   My construct can attack recklessly.\\n  Attacks are made with advantage, but all attacks against construct have advantage.\\n\\u25C6 Defense Mode\\n  Creatures Construct hit with opportunity attacks have 0 speed for this turn. The Disengage action doesn't work on it. When a creature within 5 ft makes an attack against a target other than me, it can use it's reaction to make a melee weapon attack against the attacker.\\n\\u25C6 Support Mode\\n   Construct can take first aid action as a bonus action to stabilize a dying creature.\\n   I have adv on Wisdom (Medicine) checks while in line of sight of my construct.\", true);",
			removeeval : "RemoveString(\"Extra.Notes\", \"Construct Mode Change:\\n\\u25C6 Attack Mode\\n   My construct can attack recklessly.\\n  Attacks are made with advantage, but all attacks against construct have advantage.\\n\\u25C6 Defense Mode\\n  Creatures Construct hit with opportunity attacks have 0 speed for this turn. The Disengage action doesn't work on it. When a creature within 5 ft makes an attack against a target other than me, it can use it's reaction to make a melee weapon attack against the attacker.\\n\\u25C6 Support Mode\\n   Construct can take first aid action as a bonus action to stabilize a dying creature.\\n   I have adv on Wisdom (Medicine) checks while in line of sight of my construct.\", true);",
			action : ["bonus action", ""],
			recovery : "long rest",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Con Mod\").value);",
			usages: "Con mod per "
		},
		"subclassfeature7" : {
			name : "Construct's Armored Defense",
			source : ["HB: Artificer", 7],
			minlevel : 17,
			recovery : "long rest",
			description : desc([
				"Construct gains resistance to bludgeoning, piercing, and slashing damage"
			]),
			dmgres : [["Bludgeoning", "Bludg."], ["Piercing", "Pierc."], ["Slashing", "Slash."]]
		}
	}
}

//Subclass for Medicine
ClassSubList["medicine"] = {
	regExpSearch : /^(?=.*medicine).*$/i,
	subname : "Study of Medicine",
	source : ["HB: Artificer", 7],
	spellcastingExtra : ["healing word", "inflict wounds", "aid", "gentle repose", "lesser restoration", "fear", "revivify", "mass healing word", "death ward", "polymorph", "contagion", "greater restoration"],
	features : {
		"subclassfeature1" : {
			name : "Healing Master",
			source : ["HB: Artificer", 7],
			minlevel : 3,
			description : desc([
				"Gain proficiency in Alchemist Supplies",
				"If I already have Alchemist Supplies, I gain expertise"
			]),
			eval : "if (CurrentProfs.tool[\"Alchemist's supplies\"] && (/(alchemist|alchemy).*(supplies|kit)/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
			removeeval : "if (CurrentProfs.tool[\"Alchemist's supplies\"] && (/(alchemist|alchemy).*(supplies|kit)/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
		},
		"subclassfeature2" : {
			name : "Field Medic",
			source : ["HB: Artificer", 6],
			minlevel : 3,
			description : desc([
				"I can administer potions as a bonus action",
				"I gain proficiency in Medicine, or expertise if I already had",
				"I have adv. on Wisdom (Medicine) checks to stabilize allies and study ailments",
				"Attacking with my signature weapon now gives allies within 5 ft a +1 to their AC"
			]),
			action : ["bonus action", " (Administer Potion)"],
			calcChanges : {
				atkAdd : ["if ((/Signature/i).test(inputText) && ( isMeleeWeapon || isRangedWeapon )) {fields.Description += ' & allies within 5 ft get +1 AC vs first atk made against them'; }; ", "Once on each of my turns when I hit a creature with my Signature Weapon, I can provide allies within 5 ft a +1 power bonus to the next attack made against them."]
			},
			skills : "\n\n" + toUni("Study of Medicine") + ": Medicine, or expertise if already proficient.",
			eval : "AddSkillProf('Med', true, 'increment')",
			removeeval : "AddSkillProf('Med', false, 'increment')"
		},
		"subclassfeature3" : {
			name : "Arcane Drain",
			source : ["HB: Artificer", 6],
			minlevel : 5,
			recovery : "short rest",
			usages : "Con mod per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Con Mod\").value);",
			description : desc([
				"When I attack with my Signature Weapon I can use my reaction",
				"1 creature within 5 ft of the target of my attack regains temp HP",
				"This Temp HP is equal to my Int Mod + Half Artificer level"
			]),
			action : ["reaction", " "],
		},
		"subclassfeature4" : {
			name : "Convalescence",
			source : ["HB: Artificer", 6],
			minlevel : 7,
			description : desc([
				"When using a healing potion or a healing formula I can take 1 minute to cast/use",
				"I maximize healing, with no need to roll"
			]),
		},
		"subclassfeature5" : {
			name : "Equilibrium",
			source : ["HB: Artificer", 6],
			minlevel : 10,
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Int Mod\").value);",
			recovery : "long rest",
			description : desc([
				"Once per turn when I use a formula that damages, I can heal that to an ally",
				"Vice versa, once per turn when I heal an ally, I can take that respite and damage an enemy, Con saves",
				"If a formula effects multiple targets, select one to take the healing or damage from."
			]),
			usages : "Int mod per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Int Mod\").value);",
			recovery : "long rest",
		},
		"subclassfeature6" : {
			name : "Innovative Formulas",
			source : ["HB: Artificer", 6],
			minlevel : 17,
			description : desc([
				"Any healing spell I do heals additional hit points equal to my Int Mod x Spell Slot",
				"Any damage spells I do deal additional damage equal to my Int Mod x Spell Slot",
				"I can only do this once per formula."
			]),
		}
	}
}

//Subclass for Warsmithing
ClassSubList["warsmithing"] = {
	regExpSearch : /^(?=.*warsmithing).*$/i,
	subname : "Study of Warsmithing",
	source : ["HB: Artificer", 7],
	spellcastingExtra : ["ensnaring strike", "thunderous smite", "wrathful smite", "branding smite", "cordon of arrows", "blinding smite", "flame arrows", "lightning arrow", "staggering smite", "mordenkainen's faithful hound", "banishing smite", "conjure volley"],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature1" : {
			name : "Smith Master",
			source : ["HB: Artificer", 7],
			minlevel : 3,
			description : desc([
				"Gain proficiency in Smith's Tools",
				"If I already have Smith's Tools, I gain expertise"
			]),
			eval : "if (CurrentProfs.tool[\"Smith's Tools\"] && (/(smith|smiths).*(tool|tools)/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
			removeeval : "if (CurrentProfs.tool[\"Smith's Tools\"] && (/smith|smiths).*(tool|tools)/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
		},
		"subclassfeature2" : {
			name : "Analytical Warrior",
			source : ["HB: Artificer", 8],
			minlevel : 3,
			description : desc([
				"I am proficient in heavy armor and shields",
				"Attacking with my signature weapon now gives allies within 5 ft a dmg bonus equal to my Con mod for their next attack"
			]),
			armor : [false, false, true, true],
			calcChanges : {
				atkAdd : ["if ((/Signature/i).test(inputText) && ( isMeleeWeapon || isRangedWeapon )) {fields.Description += ' & allies within 5 ft get +' + What('Con Mod') + ' bonus to their next atk dmg'; }; ", "Once on each of my turns when I hit a creature with my Signature Weapon, I can provide allies within 5 ft a +1 power bonus to the next attack's damage equal to my Con mod."]
			}
		},
		"subclassfeature3" : {
			name : "Extra Signature Weapon attack",
			source : ["HB: Artificer", 8],
			minlevel : 5,
			description : desc([
				"When I attack with my signature weapon, I can make an additional attack as part of the action",
				"The additional effects of my signature weapon do not stack."
			])
		},
		"subclassfeature4" : {
			name : "Arcane Weapon",
			source : ["HB: Artificer", 6],
			minlevel : 7,
			description : desc([
				"As a bonus action I can add 1d8 elemental to my next attack",
				"I select from Acid, Cold, Fire, and Lightning at time",
				"This increases to 2d8 at 11th level and 3d8 at 17th level"
			]),
			recovery : "short rest",
			usages : "Con Mod per",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Con Mod\").value);",
			action : ["bonus action", ""],
			additional : levels.map(function (n) {
				if (n < 7) return "";
				return "+" + (n < 11 ? 1 : n < 17 ? 2 : 3) + "d8 elemental dmg";
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
				atkAdd : ["if ((/Signature/i).test(inputText) && ( isMeleeWeapon || isRangedWeapon )) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; };"],
			},
			dmgres : [["Acid", "Acid"], ["Cold", "Cold"], ["Fire", "Fire"], ["Lightning", "Lightning"]]
		}
	}
}

//add the source
SourceList["HB: Artificer"] = {
	name : "Homebrew: Artificer Class",
	abbreviation : "HB: Artificer",
	group : "Homebrew",
	url : "http://homebrewery.naturalcrit.com/share/HkHx9mmMf"
};
