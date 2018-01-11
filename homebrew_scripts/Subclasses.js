var iFileName = "hb_subclasses.js";
RequiredSheetVersion(12.999);
// This file adds Homebrew Content for Custom Subclasses

// Define the source
SourceList["HB: Subclasses"] = {
    name : "Homebrew Subclasses",
    abbreviation : "HB: Subclasses",
    group : "Homebrew",
    url : "http://www.dmsguild.com/product/171771"
};

// Barbarian: Path of the Brawler
ClassSubList["path of the brawler"] = {
    regExpSearch : /^(?=.*path)(?=.*brawler).*$/i,
    subname : "Path of the Brawler",
    source : ["HB: Subclasses", 7],
    fullname : "Barbarian (Path of the Brawler)",
    features : {
        "subclassfeature3" : {
            name : "Brawler",
            source : ["HB: Subclasses", 1],
            minlevel : 3,
            description : "\n   " + "While raging, when I make an unarmed strike, I can take a -5 to the attack to deal +10 dmg" + "\n   " + "While raging I can make an additional unarmed strike as a bonus" + "\n   " + "While raging my unarmed strikes deal increased damage",
			calcChanges : {
					atkAdd : ["var barbarianDie = function(n) {return n < 6 ? 6 : n < 10 ? 8 : n < 14 ? 10 : 12;}; if (isMeleeWeapon && (/unarmed strike/i).test(WeaponName)) {var aBarbarianDie = barbarianDie(classes.known.barbarian.level); try {var curDie = eval(fields.Damage_Die.replace('d', '*'));} catch (e) {var curDie = 'x';}; if (isNaN(curDie) || curDie < aBarbarianDie) {fields.Damage_Die = '1d4' ;} {fields.Description += 'While raging, my unarmed strikes deal 1d' + aBarbarianDie + ' dmg';};}; ", "As a brawler, by default my damage with unarmed strikes increases to 1d4."],
			}
        },
        "owlbear wrestler" : {
            name : "Owlbear Wrestler",
            source : ["HB: Subclasses", 1],
            minlevel : 6,
            description : "\n   " + "Gain adv. on grapples vs creatures of same size or smaller" + "\n   " + "While raging, considered 1 size larger for grappling and can grapple any size category" + "\n   " + "While grappling, can shove as a bonus action, shove = 5 * Str score ft" + "\n   " + "May choose to maintain grapple, moving with creature shoved" ,
			
        },
        "heavyweight champion" : {
            name : "Heavyweight Champion",
            source : ["HB: Subclasses", 1],
            minlevel : 10,
            description : "\n   " + "Gain proficiency in Intimidation and Persuasion" + "\n   " + "Intimidation and Persuasion key off of Str rather than Cha",
        },
        "haymaker" : {
            name : "Haymaker",
            source : ["HB: Subclasses", 1],
            minlevel : 14,
            description : "\n   " + "If all attacks made vs 1 creature, send them flying" + "\n   " + "Creature is shoved 5ft/10dmg, taking 1d6/10ft" + "\n   " + "If creature is sent straight up, it falls if it has no means to stay floating",
        },
    }
}

ClassList["barbarian"].subclasses[1].push("path of the brawler");

// Rogue: Archaeologist
ClassSubList["archaeologist"] = {
    regExpSearch : /^(?=.*(rogue))(?=.*archaeologist).*$/i,
    subname : "Archaeologist",
    source : ["HB: Subclasses", 0],
    features : {
        "subclassfeature3" : {
            name : "Archaeological Expertise",
            source : ["HB: Subclasses", 0],
            minlevel : 3,
            description : "\n   " + "Gain proficiency in two skills of your choice: Arcana, History, Investigation, or Religion.  Also learn two languages" + "\n   " + "When you make an Intelligence (History) check related to magic items or artifacts, you can add twice your proficiency bonus" + "\n   " + "You can attempt an Intelligence (History) check to decipher any written dead languages you don't know",
            skills : ["\n\n" + toUni("Rogue Archaeologist") + ": Choose two from Arcana, History, Investigation, or Religion."],
            },
        "subclassfeature3.1" : {
            name : "Whip Mastery",
            source : ["HB: Subclasses", 0],
            minlevel : 3,
            description : "\n   " + "I gain a proficiency with the whip" + "\n   " + "As an action, I can use the weapon as a third hand to perform feats like punching a button, retrieiving objects or disarm at range" + "\n   " + "I can use my whip to trip a creature, using an action like a shove (PHB 195), except that I make an attack roll using the whip instead of a Strength (Athletics) check, and can only knock prone or pull 5 ft closer",
            action : ["action", ""]
        },
        "subclassfeature9" : {
            name : "Supreme Sneak",
            source : ["HB: Subclasses", 0],
            minlevel : 9,
            description : "\n   " + "I have advantage on Dexerity (Stealth) checks if I move no more than half my speed on the same turn",
            action : ["action", ""]
        },
        "subclassfeature13" : {
            name : "Use Magic Device",
            source : ["HB: Subclasses", 0],
            minlevel : 13,
            description : "\n   " + "I can improve the use of any ancient artifact or magical device ignoring all class, race, or level requirements on the use",
        },
        "subclassfeature17" : {
            name : "Spell Resistance",
            source : ["HB: Subclasses", 0],
            minlevel : 17,
            description : "\n   " + "I have advantage on saving throws against spells" + "\n   " + "Also I have resistance against the damage of spells",
        }
    }
};
ClassList.rogue.subclasses[1].push("archaeologist");

// Fighter: The Gunslinger
ClassSubList["gunslinger"] = {
    regExpSearch : /^(?=.*fighter)(?=.*gunslinger).*$/i,
    subname : "Gunslinger",
    source : ["HB: Subclasses", 7],
    fullname : "Fighter (Gunslinger)",
    features : {
        "subclassfeature1" : {
            name : "Firearm Proficiency",
            source : ["HB: Subclasses", 1],
            minlevel : 3,
			description : desc([
				"I gain proficiency in firearms",
				]),
			weaponprofs : [false, false, "firearms"],
        },
        "subclassfeature2" : {
            name : "Gunsmith",
            source : ["HB: Subclasses", 1],
            minlevel : 3,
			description : desc([
				"I gain proficiency in Tinker's Tools",
				"I can use them to craft ammunition, repair damaged firearms, or create new ones"
				]),
			toolProfs : ["Tinker's Tools"],
        },
        "subclassfeature3" : {
            name : "Grit",
            source : ["HB: Subclasses", 1],
            minlevel : 3,
			description : desc([
				"I have a number of grit points I can spend on various shot attacks with my firearms",
				"An attack can only be affected by a single shot feature",
				"In addition to a short or long rest, I can recover grit points by getting a killing blow or a critical hit with a firearm"
				]),
			usages : "Wis mod per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Wis Mod\").value);",
			recovery : "short rest",
        },
        "subclassfeature4" : {
            name : "Deadeye Shot",
            source : ["HB: Subclasses", 1],
            minlevel : 3,
			action : ["action", ""],
			description : desc([
				"I can spend 1 grit pt to gain adv on next attack roll w/ a firearm"
				]),
        },
        "subclassfeature5" : {
            name : "Violent Shot",
            source : ["HB: Subclasses", 1],
            minlevel : 7,
			action : ["action", ""],
            description : desc([
				"I can spend 1 or more grit pts before an attack roll",
				"Each grit pt spent increases the firearm misfire score by +2",
				"If the atk hits, I can roll 1 additional wpn dmg die per grit pt spent"
				]),
        },
		"subclassfeature6" : {
            name : "Trick Shot",
            source : ["HB: Subclasses", 1],
            minlevel : 10,
			action : ["action", ""],
            description : desc([
				"I can spend 1 grit pt before an attack roll to target a specific spot on a creature",
				"The Trick Shot DC is 8 + my proficiency bonus + Dex mod",
				"Head: Target makes a Con save or suffers disadv. til end of next turn",
				"Arms: Target makes a Str save or drop 1 held item of my choice",
				"Torso: Target is pushed 10 ft away from me",
				"Legs/Wngs: Target makes a Str save or gets knocked prone"
				]),
        },
		"subclassfeature7" : {
            name : "Lightning Reload",
            source : ["HB: Subclasses", 1],
            minlevel : 15,
			action : ["bonus action", ""],
            description : desc([
				"I can reload any firearm as a bonus action"
				]),
        },
		"subclassfeature8" : {
            name : "Piercing Shot",
            source : ["HB: Subclasses", 1],
            minlevel : 15,
			action : ["action", ""],
            description : desc([
				"I can spend 1 grit pt before an attack roll with a firearm that does piercing dmg",
				"On a hit, I make an attack roll against every creature in a line directly behind target within range",
				"Only the 1st attack can misfire"
				]),
        },
		"subclassfeature9" : {
            name : "Vicious Intent",
            source : ["HB: Subclasses", 1],
            minlevel : 18,
            description : desc([
				"I can crit with a firearm on a roll of 19-20"
				]),
			calcChanges : {
					atkAdd : ["if (!isSpell && classes.known.fighter && classes.known.fighter.level > 17 && (/firearm/i).test(theWea.list) && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "My weapon attacks score a critical on a to hit roll of both 19 and 20."]
				}
        },
		"subclassfeature10" : {
            name : "Hemorrhaging Critical",
            source : ["HB: Subclasses", 1],
            minlevel : 18,
            description : desc([
				"On a critical from firearm, the target suffers half the damage from the atk at the end of its next turn"
				]),
        },
	}
}

ClassList["fighter"].subclasses[1].push("gunslinger");
