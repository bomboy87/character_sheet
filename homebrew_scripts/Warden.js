/*  -WHAT IS THIS?-
    The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://flapkan.com/mpmb/dmsguild
    You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.
 
    -KEEP IN MIND-
    Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
    It is recommended to enter the code in a fresh sheet before adding any other information.
*/
 
/*  -INFORMATION-
    Subject:    Class
    Effect:     This script adds the class called "Warden" and its 3 subclasses known as Combat Disciplines "Primal Focus", "Unarmed Fighter", and "Weapon Master"
                This is taken from reddit user /u/layhnet
                This content is made by Erik J
    Original:   Erik
    Completed:  /u/pbfarmer
    Date:       2017-08-16 (sheet v12.999)
 
    Code Version:   1.0
*/

var iFileName = "hb_Warden.js";
RequiredSheetVersion(12.999);

//Warden Spell List
[//level 1
    "burning hands", "chromatic orb", "color spray", "create or destroy water", "detect poison and disease", "earth tremor", "entangle", "ice knife", "searing smite", "sleep", "thunderwave",
 
    //level 2 -- Agnazzar
    "agnazzar's scorcher", "continual flame", "dust devil", "heat metal", "invisibility", "levitate", "locate animals or plants", "pyrotechnics", "scorching ray", "shatter", "spike growth", "warding wind",
 
    //level 3
    "call lightning", "conjure animals", "create food and water", "daylight", "elemental weapon", "erupting earth", "fireball", "lightning bolt", "meld into stone", "plant growth", "sleet storm", "speak with plants", "tidal wave", "wall of sand",
	
    //level 4
    "control water", "dominate beast", "elemental bane", "freedom of movement", "grasping vine", "hallucinatory terrain", "stone shape", "vitriolic sphere", "wall of fire", "watery sphere",
 
    //level 5
    "awaken", "cloudkill", "cone of cold", "conjure elemental", "control winds", "flame strike", "immolation", "maelstrom", "wall of stone"
].forEach(function(wardenSpells) {
    if (SpellsList[wardenSpells]) SpellsList[wardenSpells].classes.push("warden");
});

//The Warden class
ClassList["warden"] = {
    regExpSearch : /warden/i,
    name : "Warden",
    source : ["HB: Warden", 1],
    primaryAbility : "\n \u2022 Warden: Strength or Dexterity;",
    prereqs : "\n \u2022 Warden: Strength or Dexterity 13, and Wisdom 13;",
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    die : 10,
    saves : ["Str", "Wis"],
    skills : ["\n\n" + toUni("Warden") + ": Choose two from Athletics, Arcana, Intimidation, Investigation, Nature, and Survival."],
    armor : [
        [true, true, false, false],
        [true, true, false, false]
    ],
    weapons : [
        [true, false],
		[true, false]
    ],
    equipment : "Warden starting equipment:\n \u2022 A martial weapon -or- two simple weapons;\n \u2022 A explorer's pack and a component pouch;\n \u2022 a shortbow and 20 arrows -or- a shield;\n \u2022 Leather armor -or- Scale mail; \n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses : ["Combat Discipline", ["man-at-arms", "primal champion", "primal focus"]],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    abilitySave : 5,
    spellcastingFactor : 2,
    spellcastingTable : [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 3, 0, 0, 0, 0, 0],
		[0, 0, 0, 3, 0, 0, 0, 0, 0],
		[0, 0, 0, 3, 0, 0, 0, 0, 0],
		[0, 0, 0, 3, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 3, 0, 0, 0, 0],
		[0, 0, 0, 0, 3, 0, 0, 0, 0],
		[0, 0, 0, 0, 3, 0, 0, 0, 0],
		[0, 0, 0, 0, 3, 0, 0, 0, 0],
	],
    spellcastingKnown : {
		spells : [0,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10],
    },
    features : {
		"classfeature1" : {
            name : "Combat Discipline",
            source : ["HB: Warden", 3],
            minlevel : 1,
            description :  desc([
				"Choose a Combat Discipline you commit to and put it in the \"Class\" field",
				"Choose either the Man-At Arms, Primal Champion, or Primal Focus"
			]),
        },
        "classfeatur2" : {
            name : "Natural Awareness",
            source : ["HB: Warden", 3],
            minlevel : 1,
            description :  desc([
				"Advantage on Wisdom (Perception) checks for all natural phenomena",
				"At 18th level, I have +5 initiative in a natural environment"
			])
        },
        "classfeature3" : {
            name : "Natural Power",
            source : ["HB: Warden", 3],
            minlevel : 1,
            description : desc([
                "I can expend a power die to do additional damage on any weapon attack or spell that does damage",
				"I regain all expended uses of power die on a long rest or half the expended (round up) on a short rest"
            ]),
			usages : [4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8, "\u221E\u00D7 per "],
			additional : ["d4", "d4", "d4", "d4", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10"],
			recovery : "long rest",
        },
		"classfeature4" : {
            name : "Source Magic",
            source : ["HB: Warden", 3],
            minlevel : 2,
            description : desc([
                "I can now use spellcasting with wisdom as my spellcasting ability modifier."
			]),
		},
        "classfeature5" : {
            name : "Prime Element",
            source : ["HB: Warden", 4],
            minlevel : 3,
            description : "\n   " + "Use the \"Choose Features\" button above to select a Prime Element",
			choices : ["Flaming Bravery", "Stoic Chill", "Unrelenting Storm", "Putrid Corrosion"],
            "flaming bravery" : {
                name : "Prime Element: Flaming Bravery",
                source : ["HB: Warden", 4],
                description : desc([
					"I learn the cantrips firebolt and green-flame blade",
					"I can use a reaction to spend a power die and gain the roll to AC",
					"If the attack misses, the creature takes fire dmg equal to Wis + Str mods"
				]),
				action : ["reaction", " (AC)"],
				spellcastingBonus : [{
					name : "Flaming Bravery",
					spells : ["fire bolt"],
					selection : ["fire bolt"]
				}, {
					name : "Flaming Bravery",
					spells : ["green-flame blade"],
					selection : ["green-flame blade"]
				}],
				eval : "var ToAdd = ['warden', 'classfeature7', 'flaming bravery']; if (classes.known.warden.level >= 7 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'classfeature9'; if (classes.known.warden.level >= 11 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'classfeature11'; if (classes.known.warden.level >= 20 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
            },
            "stoic chill" : {
                name : "Prime Element: Stoic Chill",
                source : ["HB: Warden", 4],
                description : desc([
					"I learn the cantrips frostbite and ray of frost",
					"I can use a reaction to spend a power die and add it to a saving throw",
					"If the saving throw succeeds, 20 ft radius is covered in ice, all creatures must make a dex saving throw or fall prone, lasts 1 minute"
				]),
				action : ["reaction", " (Save)"],
				spellcastingBonus : [{
					name : "Stoic Chill",
					spells : ["frostbite"],
					selection : ["frostbite"]
				}, {
					name : "Stoic Chill",
					spells : ["ray of frost"],
					selection : ["ray of frost"]
				}],
				eval : "var ToAdd = ['warden', 'classfeature7', 'stoic chill']; if (classes.known.warden.level >= 7 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'classfeature9'; if (classes.known.warden.level >= 11 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'classfeature11'; if (classes.known.warden.level >= 20 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
            },
            "unrelenting storm" : {
                name : "Prime Element: Unrelenting Storm",
                source : ["HB: Warden", 4],
                description : desc([
					"I learn the cantrips lightning lure and booming blade",
					"When I make a weapon attack roll, can expend a power die and add to attack roll",
					"On a hit, all creatures hit within 5 ft make a Con saving throw, or are knocked back 5 ft"
				]),
				spellcastingBonus : [{
					name : "Unrelenting Storm",
					spells : ["lightning lure"],
					selection : ["lightning lure"]
				}, {
					name : "Unrelenting Storm",
					spells : ["booming blade"],
					selection : ["booming blade"]
				}],
				eval : "var ToAdd = ['warden', 'classfeature7', 'unrelenting storm']; if (classes.known.warden.level >= 7 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'classfeature9'; if (classes.known.warden.level >= 11 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'classfeature11'; if (classes.known.warden.level >= 20 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
            },
            "putrid corrosion" : {
                name : "Prime Element: Putrid Corrosion",
                source : ["HB: Warden", 4],
                description : desc([
					"I learn the cantrips acid splash and poison spray",
					"When I use a spell that forces a saving throw, I can expend a power die",
					"If the spell worked, at the beginning of the creatures turn, they must make a Con saving throw or take acid damage equal to the power die spent.  Save ends.",
				]),
				spellcastingBonus : [{
					name : "Putrid Corrosion",
					spells : ["acid splash"],
					selection : ["acid splash"]
				}, {
					name : "Putrid Corrosion",
					spells : ["poison spray"],
					selection : ["poison spray"]
				}],
				eval : "var ToAdd = ['warden', 'classfeature7', 'putrid corrosion']; if (classes.known.warden.level >= 7 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'classfeature9'; if (classes.known.warden.level >= 11 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'classfeature11'; if (classes.known.warden.level >= 20 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
            },
        },
        "classfeature6" : {
            name : "Glamour",
            source : ["HB: Warden", 4],
            minlevel : 5,
            description : desc([
                "I create a harmless elemental sensory affect from my body",
				"I can expend a power die and add it to an Intimidation, Persuasion, or Deception roll.",
			]),
		},
		"classfeature7" : {
            name : "Prime Elemental Shield",
            source : ["HB: Warden", 4],
            minlevel : 7,
            description : desc([
                "Use the \"Choose Features\" button above to select the effect"
			]),
			choices : ["flaming bravery", "stoic chill", "unrelenting storm", "putrid corrosion"],
			choicesNotInMenu : true,
			"flaming bravery" : {
                name : "Prime Elemental Shield: Flaming Bravery",
				description : desc([
					"If I am grappled, as a reaction I can end the effect and deal fire damage equal to my Wis mod"
				]),
				action : ["reaction", ""]
			},
			"stoic chill" : {
                name : "Prime Elemental Shield: Stoic Chill",
				description : desc([
					"If I am struck with a melee attack, I can use my reaction to make the attacker do a Con save",
					"On a failure, the weapon freezes, and the creature drops it"
				]),
				action : ["reaction", ""]
			},
			"unrelenting storm" : {
                name : "Prime Elemental Shield: Unrelenting Storm",
				description : desc([
					"If I am targeted with a ranged attack, I can use my reaction to create a wind barrier",
					"The effective range of the attack is half,",
					"If I am outside the effective range, the attack automatically misses"
				]),
				action : ["reaction", ""]
			},
			"putrid corrosion" : {
                name : "Prime Elemental Shield: Putrid Corrosion",
				description : desc([
					"If a spell causes forced movement, I can react and halve or double the distance moved"
				]),
				action : ["reaction", ""]
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?warden,classfeature5,(flaming bravery|stoic chill|unrelenting storm|putrid corrosion).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'warden,classfeature7,' + FeaChoice, false);};};"
		},
		"classfeature8" : {
            name : "Nature Sense",
            source : ["HB: Warden", 4],
            minlevel : 10,
            description : desc([
                "Spend 1 minute attuning to a natural focus, can shift perspective as if looking at any point on that surface 100 ft away.",
				"This can last up to 10 mins and be ended anytime or until interrupted."
			]),
		},
		"classfeature9" : {
            name : "Prime Elemental Burst",
            source : ["HB: Warden", 5],
            minlevel : 11,
            description : desc([
                "Use the \"Choose Features\" button above to select the effect"
			]),
			choices : ["flaming bravery", "stoic chill", "unrelenting storm", "putrid corrosion"],
			choicesNotInMenu : true,
			"flaming bravery" : {
                name : "Prime Elemental Burst: Flaming Bravery",
				description : desc([
					"When I hit with a weapon attack, I can expend a power die",
					"Each creature within 5 ft takes 2d8 fire damage"
				]),
			},
			"stoic chill" : {
                name : "Prime Elemental Burst: Stoic Chill",
				description : desc([
					"When I hit with a weapon attack, I can expend a power die",
					"Each creature within 5 ft takes 2d8 cold damage"
				]),
			},
			"unrelenting storm" : {
                name : "Prime Elemental Burst: Unrelenting Storm",
				description : desc([
					"When I hit with a weapon attack, I can expend a power die",
					"Each creature within 5 ft takes 2d8 lightning damage"
				]),
			},
			"putrid corrosion" : {
                name : "Prime Elemental Burst: Putrid Corrosion",
				description : desc([
					"When I hit with a weapon attack, I can expend a power die",
					"Each creature within 5 ft takes 2d8 acid damage"
				]),
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?warden,classfeature5,(flaming bravery|stoic chill|unrelenting storm|putrid corrosion).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'warden,classfeature9,' + FeaChoice, false);};};"
		},
		"classfeature10" : {
            name : "Recovery",
            source : ["HB: Warden", 5],
            minlevel : 15,
            description : desc([
                "As a bonus action I can expend 4 power dice to regain a single spell slot"
			]),
			action : ["bonus action", ""],
			usages: 1,
			recovery : "long rest",
		},
		"classfeature11" : {
            name : "Master of Elements",
            source : ["HB: Warden", 5],
            minlevel : 20,
            description : desc([
                "Use the \"Choose Features\" button above to select the effect",
			]),
			usages : 1,
			recovery : "long rest", 
			choices : ["flaming bravery", "stoic chill", "unrelenting storm", "putrid corrosion"],
			choicesNotInMenu : true,
			"flaming bravery" : {
                name : "Master of Elements: Flaming Bravery",
				description : desc([
					"I can cast Investiture of Flame once per long rest",
					"This spell requires no concentration to maintain"
				]),
				spellcastingBonus : [{
					name : "Master of Elements",
					spells : ["investiture of flame"],
					selection : ["investiture of flame"]
				}]
			},
			"stoic chill" : {
                name : "Master of Elements: Stoic Chill",
				description : desc([
					"I can cast Investiture of Ice once per long rest",
					"This spell requires no concentration to maintain"
				]),
				spellcastingBonus : [{
					name : "Master of Elements",
					spells : ["investiture of ice"],
					selection : ["investiture of ice"]
				}]
			},
			"unrelenting storm" : {
                name : "Master of Elements: Unrelenting Storm",
				description : desc([
					"I can cast Investiture of Wind once per long rest",
					"This spell requires no concentration to maintain"
				]),
				spellcastingBonus : [{
					name : "Master of Elements",
					spells : ["investiture of wind"],
					selection : ["investiture of wind"]
				}]
			},
			"putrid corrosion" : {
                name : "Master of Elements: Putrid Corrosion",
				description : desc([
					"I can cast Investiture of Stone once per long rest",
					"This spell requires no concentration to maintain"
				]),
				spellcastingBonus : [{
					name : "Master of Elements",
					spells : ["investiture of stone"],
					selection : ["investiture of stone"]
				}]
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?warden,classfeature5,(flaming bravery|stoic chill|unrelenting storm|putrid corrosion).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'warden,classfeature11,' + FeaChoice, false);};};"
		}
    }
}

//Subclass for Man-At-Arms
ClassSubList["man-at-arms"] = {
    regExpSearch : /^(?=.*man-at-arms).*$/i,
    subname : "Man-At-Arms",
    source : ["HB: Warden", 5],
	spellcastingExtra : ["ensnaring strike", "thunderous smite", "flame blade", "snilloc's snowball storm", "elemental weapon", "wall of water", "elemental bane", "stoneskin"],
	features : {
		"subclassfeature1" : {
			name : "Weapon Training",
			source : ["HB: Warden", 5],
			minlevel : 1,
			description : desc([
				"I gain proficiency in martial weapons, shields, and heavy armor"
			]),
			armor : [false, false, true, true],
			weapons : [false, true]
		},
		"subclassfeature2" : {
			name : "Strength of the Elements",
			source : ["HB: Warden", 5],
			minlevel : 6,
			description : desc([
				"When I use my power die via Natural Power, I can decide to use the max output after rolling"
			]),
			usages : "Wis mod per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Wis Mod\").value);",
			recovery : "long rest"
		},
		"subclassfeature3" : {
			name : "Element Shielding Aura",
			source : ["HB: Warden", 5],
			minlevel : 10,
			description : desc([
				"When I or an ally I see within 30 ft take acid, cold, fire, or lightning dmg, I can reduce dmg by half"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature4" : {
			name : "Nature's Fury",
			source : ["HB: Warden", 5],
			minlevel : 14,
			description : desc([
				"When I make a weapon attack, I can spend a power die to make a bonus action attack",
				"If the attack uses Strength, I can add the result of power die to damage",
				"If the attack uses Dexterity, I can add the result of power die to hit",
			]),
			action : ["bonus action", ""]
		}
	}
}

//Subclass for Primal Champion
ClassSubList["primal champion"] = {
    regExpSearch : /^(?=.*primal champion).*$/i,
    subname : "Primal Champion",
    source : ["HB: Warden", 6],
	spellcastingExtra : ["absorb elements", "bane", "earthbind", "maximilian's earthen grasp", "wind wall", "haste", "fire shield", "storm sphere"],
	features : {
		"subclassfeature1" : {
			name : "Pugilist",
			source : ["HB: Warden", 6],
			minlevel : 1,
			description : desc([
				"I am more trained in unarmed combat and can roll a die equal to my power die for damage",
				"I can use Wisdom in place of Strength for my unarmed strikes",
				"When I use the unarmed strike on my turn, I can make an additional unarmed strike as a bonus action",
				"When using cantrips, my unarmed strikes count as melee weapons"
			]),
			action : ["bonus action", " (with Unarmed Strike action)"],
			calcChanges : {
				atkAdd : ["var wardenDie = function(n) {return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;}; if (classes.known.warden && classes.known.warden.level && theWea && (/unarmed strike/i).test(theWea.name)) {var aWardenDie = wardenDie(classes.known.warden.level); try {var curDie = eval(fields.Damage_Die.replace('d', '*'));} catch (e) {var curDie = 'x';}; if (isNaN(curDie) || curDie < aWardenDie) {fields.Damage_Die = '1d' + aWardenDie;}; fields.Mod = What('Wis Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') ? 5 : fields.Mod;}; ", "I can use either Strength or Wisdom and my Power Die damage die in place of the normal damage die for any Unarmed Strike."]
			}
		},
		"subclassfeature2" : {
			name : "Burst of Power",
			source : ["HB: Warden", 6],
			minlevel : 6,
			description : desc([
				"When I use my power die via Natural Power for an unarmed strike, I can roll the power die an additional time for more damage"
			]),
			usages : "Wis mod per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Wis Mod\").value);",
			recovery : "long rest"
		},
		"subclassfeature3" : {
			name : "Elemental Stance",
			source : ["HB: Warden", 6],
			minlevel : 10,
			description : desc([
				"When I take the attack action and have both hands free, my reach increases 10 ft"
			]),
		},
		"subclassfeature4" : {
			name : "Form of Nature",
			source : ["HB: Warden", 6],
			minlevel : 14,
			description : desc([
				"As an action I take a the form of nature stance for 1 minute",
				"See the \Notes\ Page for more details"
			]),
			action : ["action", ""],
			eval : "AddString(\"Extra.Notes\", \"Form of Nature:\\n\\u25C6 My feet are covered in flame and my movement is doubled\\n\\u25C6 My unarmed strikes deal additional damage equal to my Proficiency bonus.\\n\\u25C6 I feel the wind at my back.  I won't automatically fall if my feet leave the ground.  I can move horizontally or descend but not ascend.  I can also ignore the effects that force movement or knock me back.  At end of duration, I will begin falling.\\n\\u25C6 Water swirls about me.  All ranked attacks made against me are treated as if I have half cover.\\n\\u25C6 A cloud of ichor swirls about me.  If another creature steps into a space I occupied since I last moved, they must make a Con saving throw.  If they fail they take 4d8 poison damage.  Cloud disperses after Form of Nature ends\", true);",
			removeeval : "RemoveString(\"Extra.Notes\", \"Form of Nature:\\n\\u25C6 My feet are covered in flame and my movement is doubled\\n\\u25C6 My unarmed strikes deal additional damage equal to my Proficiency bonus.\\n\\u25C6 I feel the wind at my back.  I won't automatically fall if my feet leave the ground.  I can move horizontally or descend but not ascend.  I can also ignore the effects that force movement or knock me back.  At end of duration, I will begin falling.\\n\\u25C6 Water swirls about me.  All ranked attacks made against me are treated as if I have half cover.\\n\\u25C6 A cloud of ichor swirls about me.  If another creature steps into a space I occupied since I last moved, they must make a Con saving throw.  If they fail they take 4d8 poison damage.  Cloud disperses after Form of Nature ends\", true);",
			recovery : "long rest",
			usages : 1
		}
	}
}

//Subclass for Primal Focus
ClassSubList["primal focus"] = {
    regExpSearch : /^(?=.*primal focus).*$/i,
    subname : "Primal Focus",
    source : ["HB: Warden", 7],
	spellcastingExtra : ["faerie fire", "tasha's hideous laughter", "blur", "moonbeam", "blink", "daylight", "freedom of movement", "polymorph"],
	features : {
		"subclassfeature1" : {
			name : "Natural Weapon",
			source : ["HB: Warden", 7],
			minlevel : 1,
			description : desc([
				"I gain the shillelagh cantrip"
			]),
			spellcastingBonus : [{
				name : "Natural Weapon",
				spells : ["shillelagh"],
				selection : ["shillelagh"]
			}]
		},
		"subclassfeature2" : {
			name : "Innate Potential",
			source : ["HB: Warden", 7],
			minlevel : 6,
			description : desc([
				"I can expend 2 power dice to cast the following as a 1st-level spell:",
				"Burning Hands, Earth Tremor, Ice Knife, or Thunderwave",
				"These spells are added to your spells known, if you already know any of them you may replace with another spell you have the spell slots to cast"
			]),
		},
		"subclassfeature3" : {
			name : "Primal Dance",
			source : ["HB: Warden", 7],
			minlevel : 10,
			description : desc([
				"I can expend a power die as a bonus action to add result to my AC until start of next turn"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature4" : {
			name : "Duplicity",
			source : ["HB: Warden", 7],
			minlevel : 14,
			description : desc([
				"Select a second element from the duplicity class feature",
				"I gain the benefits of having both elements at once, but all limitations still apply",
				"For my prime elemental shield, I can use my reaction if either condition is triggered",
				"For my prime elemental burst, I can select either element for each attack",
				"For my master of elements, I can activate either investiture, but can still only do 1x long rest",
				"See the \Notes\ Page for more details"
			]),
			extraname : "Duplicity",
			extrachoices : ["Duplicity Flaming Bravery", "Duplicity Stoic Chill", "Duplicity Unrelenting Storm", "Duplicity Putrid Corrosion", "Duplicity Master of Elements: Flaming Bravery", "Duplicity Master of Elements: Stoic Chill", "Duplicity Master of Elements: Unrelenting Storm", "Duplicity Master of Elements: Putrid Corrosion"],
            "duplicity flaming bravery" : {
                name : "Duplicity Flaming Bravery",
                source : ["HB: Warden", 4],
                description : desc([
					"**Prime Element: Flaming Bravery**",
					"I learn the cantrips firebolt and green-flame blade",
					"I can use a reaction to spend a power die and gain the roll to AC",
					"If the attack misses, the creature takes fire dmg equal to Wis + Str mods",
					"**Prime Elemental Shield: Flaming Bravery**",
					"If I am grappled, as a reaction I can end the effect and deal fire damage equal to my Wis mod",
					"**Prime Elemental Burst: Flaming Bravery**",
					"When I hit with a weapon attack, I can expend a power die",
					"Each creature within 5 ft takes 2d8 fire damage"
				]),
				action : ["reaction", " (AC)"],
				spellcastingBonus : [{
					name : "Duplicity: Flaming Bravery",
					spells : ["fire bolt"],
					selection : ["fire bolt"]
				}, {
					name : "Duplicity: Flaming Bravery",
					spells : ["green-flame blade"],
					selection : ["green-flame blade"]
				}],
				eval : "AddAction('reaction', 'Prime Elemental Shield: Flaming Bravery (when grappled)', 'via Duplicity');",
				removeeval : "RemoveAction('reaction', 'Prime Elemental Shield: Flaming Bravery (when grappled)');"
            },
			"duplicity master of elements: flaming bravery" : {
                name : "Duplicity Master of Elements: Flaming Bravery",
                source : ["HB: Warden", 4],
                description : desc([
					"**Master of Elements: Flaming Bravery**",
					"At level 20 I can cast Investiture of Flame once per long rest",
					"This spell requires no concentration to maintain"
				]),
				spellcastingBonus : [{
					name : "Duplicity: Master of Elements",
					spells : ["investiture of flame"],
					selection : ["investiture of flame"]
				}],
				prereqeval : "classes.known.warden.level === 20",
			},
            "duplicity stoic chill" : {
                name : "Duplicity Stoic Chill",
                source : ["HB: Warden", 4],
                description : desc([
					"**Prime Element: Stoic Chill**",
					"I learn the cantrips frostbite and ray of frost",
					"I can use a reaction to spend a power die and add it to a saving throw",
					"If the saving throw succeeds, 20 ft radius is covered in ice, all creatures must make a dex saving throw or fall prone, lasts 1 minute",
					"**Prime Elemental Shield: Stoic Chill**",
					"If I am struck with a melee attack, I can use my reaction to make the attacker do a Con save",
					"On a failure, the weapon freezes, and the creature drops it",
					"**Prime Elemental Burst: Stoic Chill**",
					"When I hit with a weapon attack, I can expend a power die",
					"Each creature within 5 ft takes 2d8 cold damage"
				]),
				action : ["reaction", " (Save)"],
				spellcastingBonus : [{
					name : "Duplicity: Stoic Chill",
					spells : ["frostbite"],
					selection : ["frostbite"]
				}, {
					name : "Duplicity: Stoic Chill",
					spells : ["ray of frost"],
					selection : ["ray of frost"]
				}],
				eval : "AddAction('reaction', 'Prime Elemental Shield: Stoic Chill (when hit melee)', 'via Duplicity');",
				removeeval : "RemoveAction('reaction', 'Prime Elemental Shield: Stoic Chill (when hit melee)');"
            },
			"duplicity master of elements: stoic chill" : {
                name : "Duplicity Master of Elements: Stoic Chill",
                source : ["HB: Warden", 4],
                description : desc([
					"**Master of Elements: Stoic Chill**",
					"At level 20 I can cast Investiture of Ice once per long rest",
					"This spell requires no concentration to maintain"
				]),
				spellcastingBonus : [{
					name : "Duplicity: Master of Elements",
					spells : ["investiture of ice"],
					selection : ["investiture of ice"]
				}],
				prereqeval : "classes.known.warden.level === 20",
			},
            "duplicity unrelenting storm" : {
                name : "Duplicity Unrelenting Storm",
                source : ["HB: Warden", 4],
                description : desc([
					"**Prime Element: Unrelenting Storm**",
					"I learn the cantrips lightning lure and booming blade",
					"When I make a weapon attack roll, can expend a power die and add to attack roll",
					"On a hit, all creatures hit within 5 ft make a Con saving throw, or are knocked back 5 ft",
					"**Prime Elemental Shield: Unrelenting Storm**",
					"If I am targeted with a ranged attack, I can use my reaction to create a wind barrier",
					"The effective range of the attack is half,",
					"If I am outside the effective range, the attack automatically misses",
					"**Prime Elemental Burst: Unrelenting Storm**",
					"When I hit with a weapon attack, I can expend a power die",
					"Each creature within 5 ft takes 2d8 lightning damage"
				]),
				spellcastingBonus : [{
					name : "Duplicity: Unrelenting Storm",
					spells : ["lightning lure"],
					selection : ["lightning lure"]
				}, {
					name : "Duplicity: Unrelenting Storm",
					spells : ["booming blade"],
					selection : ["booming blade"]
				}],
				action : ["reaction", " (Shield)"],
            },
			"duplicity master of elements: unrelenting storm" : {
                name : "Duplicity Master of Elements: Unrelenting Storm",
                source : ["HB: Warden", 4],
                description : desc([
					"**Master of Elements: Unrelenting Storm**",
					"At level 20 I can cast Investiture of Wind once per long rest",
					"This spell requires no concentration to maintain"
				]),
				spellcastingBonus : [{
					name : "Duplicity: Master of Elements",
					spells : ["investiture of wind"],
					selection : ["investiture of wind"]
				}],
				prereqeval : "classes.known.warden.level === 20",
			},
            "duplicity putrid corrosion" : {
                name : "Duplicity Putrid Corrosion",
                source : ["HB: Warden", 4],
                description : desc([
					"**Prime Element: Putrid Corrosion**",
					"I learn the cantrips acid splash and poison spray",
					"When I use a spell that forces a saving throw, I can expend a power die",
					"If the spell worked, at the beginning of the creatures turn, they must make a Con saving throw or take acid damage equal to the power die spent.  Save ends.",
					"**Prime Elemental Shield: Putrid Corrosion**",
					"If a spell causes forced movement, I can react and halve or double the distance moved",
					"**Prime Elemental Burst: Putrid Corrosion**",
					"When I hit with a weapon attack, I can expend a power die",
					"Each creature within 5 ft takes 2d8 acid damage",
					"**Master of Elements: Putrid Corrosion**",
					"At level 20 I can cast Investiture of Stone once per long rest",
					"This spell requires no concentration to maintain"
				]),
				spellcastingBonus : [{
					name : "Duplicity: Putrid Corrosion",
					spells : ["acid splash"],
					selection : ["acid splash"]
				}, {
					name : "Duplicity: Putrid Corrosion",
					spells : ["poison spray"],
					selection : ["poison spray"]
				}, {
					name : "Duplicity: Master of Elements",
					prereq: 20,
					spells : ["investiture of stone"],
					selection : ["investiture of stone"]
				}],
				action : ["reaction", " (Shield)"],
            },
			"duplicity master of elements: putrid corrosion" : {
                name : "Duplicity Master of Elements: Putrid Corrosion",
                source : ["HB: Warden", 4],
                description : desc([
					"**Master of Elements: Putrid Corrosion**",
					"At level 20 I can cast Investiture of Stone once per long rest",
					"This spell requires no concentration to maintain"
				]),
				spellcastingBonus : [{
					name : "Duplicity: Master of Elements",
					spells : ["investiture of stone"],
					selection : ["investiture of stone"]
				}],
				prereqeval : "classes.known.warden.level === 20",
			}
		}
	}
}

//add the source
SourceList["HB: Warden"] = {
    name : "Homebrew: Warden Class",
    abbreviation : "HB: Warden",
    group : "Homebrew by /u/layhnet",
    url : "https://drive.google.com/file/d/0Bz74Lu7ft9syNkdUR0dCLVhzTmc/view"
};