var iFileName = "hb_weapons.js";
RequiredSheetVersion(12.999);
// This file adds Homebrew Content for Weapons

// Define the source
SourceList["HB: Weapons"] = {
    name : "Homewbrew Weapons",
    abbreviation : "HB: Weapons",
    group : "Homebrew",
    url : "http://www.dmsguild.com/product/171771"
};

WeaponsList["pistol"] = {
	regExpSearch : /^(?=.*pistol).*$/i,
	name : "Pistol",
	source : ["D", 268],
	list : "firearm",
	ability : 2, 
	type: "Martial",
	damage : [1, 10, "piercing"],
	range : "30/90 ft",
	weight : 3,
	description : "Ammunition, loading",
	abilitytodamage : true,
	ammo : "bullet"
};
WeaponsList["musket"] = {
	regExpSearch : /^(?=.*musket).*$/i,
	name : "Musket",
	source : ["D", 268],
	list : "firearm",
	ability : 2, 
	type: "Martial",
	damage : [1, 12, "piercing"],
	range : "40/120 ft",
	weight : 10,
	description : "Ammunition, loading, two handed",
	abilitytodamage : true,
	ammo : "bullet"
};
WeaponsList["revolver"] = {
	regExpSearch : /^(?=.*revolver).*$/i,
	name : "Revolver",
	source : ["D", 268],
	list : "firearm",
	ability : 2, 
	type: "Martial",
	damage : [2, 8, "piercing"],
	range : "40/120 ft",
	weight : 3,
	description : "Ammunition, reload (6 shots)",
	abilitytodamage : true,
	ammo : "bullet"
};
WeaponsList["rifle hunting"] = {
	regExpSearch : /^(?=.*hunting)(?=.*rifle).*$/i,
	name : "Hunting Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2, 
	type: "Martial",
	damage : [2, 10, "piercing"],
	range : "80/240 ft",
	weight : 8,
	description : "Ammunition, reload (5 shots), two handed",
	abilitytodamage : true,
	ammo : "bullet"
};
WeaponsList["shotgun"] = {
	regExpSearch : /^(?=.*shotgun).*$/i,
	name : "Shotgun",
	source : ["D", 268],
	list : "firearm",
	ability : 2, 
	type: "Martial",
	damage : [2, 8, "piercing"],
	range : "30/90 ft",
	weight : 7,
	description : "Ammunition, reload (2 shots), two handed",
	abilitytodamage : true,
	ammo : "bullet"
};

WeaponsList["punchdagger"] = {
	regExpSearch : /^(?=.*punch)(?=.*dagger).*$/i,
	name : "Punch Dagger",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Simple",
	damage : [1, 4, "piercing"],
	range : "Melee",
	weight : 1,
	description : "Finesse, Light, advantage on sleight of hand when used",
	abilitytodamage : true,
};

WeaponsList["scythe"] = {
	regExpSearch : /^(?=.*scythe).*$/i,
	name : "Scythe",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Simple",
	damage : [1, 10, "slashing"],
	range : "Melee",
	weight : 10,
	description : "Heavy, Two-Handed",
	abilitytodamage : true,
};

WeaponsList["bastardsword"] = {
	regExpSearch : /^(?=.*bastard)(?=.*sword).*$/i,
	name : "Bastard Sword",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 10, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy, Versatile (1d12)",
	abilitytodamage : true,
};

WeaponsList["clawbracer"] = {
	regExpSearch : /^(?=.*claw)(?=.*bracer).*$/i,
	name : "Claw Bracer",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 6, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, Light, Can't be disarmed",
	abilitytodamage : true,
};

WeaponsList["falchion"] = {
	regExpSearch : /^(?=.*falchion).*$/i,
	name : "Falchion",
	source : ["HB: Weapons", 4],
	list : "melee",
	ability : 1, 
	type: "Martial",
	damage : [2, 4, "slashing"],
	range : "Melee",
	weight : 8,
	description : "Heavy, Two-Handed",
	abilitytodamage : true,
};

WeaponsList["fullblade"] = {
	regExpSearch : /^(?=.*full)(?=.*blade).*$/i,
	name : "Full Blade",
	source : ["HB: Weapons", 4],
	list : "melee",
	ability : 1, 
	type: "Martial",
	damage : [2, 8, "slashing"],
	range : "Melee",
	weight : 20,
	description : "Heavy, Two-Handed",
	abilitytodamage : true,
};

WeaponsList["heavyflail"] = {
	regExpSearch : /^(?=.*heavy)(?=.*flail).*$/i,
	name : "Heavy Flail",
	source : ["HB: Weapons", 4],
	list : "melee",
	ability : 1, 
	type: "Martial",
	damage : [2, 6, "bludgeoning"],
	range : "Melee",
	weight : 10,
	description : "Heavy, Two-Handed",
	abilitytodamage : true,
};

WeaponsList["jitte"] = {
	regExpSearch : /^(?=.*jitte).*$/i,
	name : "Jitte",
	source : ["HB: Weapons", 4],
	list : "melee",
	ability : 1, 
	type: "Martial",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "Finesse, Light",
	abilitytodamage : true,
	monkweapon : true,
};

WeaponsList["kama"] = {
	regExpSearch : /^(?=.*kama).*$/i,
	name : "Kama",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 4, "slashing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, Light",
	abilitytodamage : true,
};

WeaponsList["katana"] = {
	regExpSearch : /^(?=.*katana).*$/i,
	name : "Katana",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, Versatile (1d10)",
	abilitytodamage : true,
};

WeaponsList["katar"] = {
	regExpSearch : /^(?=.*katar).*$/i,
	name : "katar",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 6, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, Light",
	abilitytodamage : true,
};

WeaponsList["kusarigama"] = {
	regExpSearch : /^(?=.*kusarigama).*$/i,
	name : "Kusarigama",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 4, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, Light, Reach, Two-Handed",
	abilitytodamage : true,
	monkweapon : true,
};

WeaponsList["nekode"] = {
	regExpSearch : /^(?=.*nekode).*$/i,
	name : "Nekode",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 4, "piercing"],
	range : "Melee",
	weight : 3,
	description : "Light",
	abilitytodamage : true,
};

WeaponsList["ninjato"] = {
	regExpSearch : /^(?=.*ninjato).*$/i,
	name : "Ninjato",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, Light",
	abilitytodamage : true,
};

WeaponsList["nunchaku"] = {
	regExpSearch : /^(?=.*nunchaku).*$/i,
	name : "Nunchaku",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "Finesse, Light",
	abilitytodamage : true,
	monkweapon : true,
};

WeaponsList["tonfa"] = {
	regExpSearch : /^(?=.*tonfa).*$/i,
	name : "Tonfa",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 3,
	description : "Finesse, Light",
	abilitytodamage : true,
	monkweapon : true,
};

WeaponsList["war fan"] = {
	regExpSearch : /^(?=.*war)(?=.*fan).*$/i,
	name : "War Fan",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, Light",
	abilitytodamage : true,
	monkweapon : true,
};

WeaponsList["war scythe"] = {
	regExpSearch : /^(?=.*war)(?=.*scythe).*$/i,
	name : "War Scythe",
	source : ["HB: Weapons", 4],
	ability : 1, 
	type: "Martial",
	damage : [1, 12, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Heavy, Reach, Two-Handed",
	abilitytodamage : true,
};

UpdateDropdown("weapon");