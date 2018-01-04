var iFileName = "hb_feats.js";
RequiredSheetVersion(12.999);
// This file adds Homebrew Content for Custom Feats

// Define the source
SourceList["HB: Feats"] = {
    name : "Homebrew Feats",
    abbreviation : "HB: Feats",
    group : "Homebrew",
    url : "http://www.dmsguild.com/product/171771"
};

// Magic Font
FeatsList["magic font (dark)"] = {
	name : "Magic Font (Dark)",
	source : ["HB: Feats", 0],
	description : "You embody the draconic power of dark and shadow.  Deal 2x damage against Light elementals, but only half to other Dark users.  You resist Dark.", 
	eval: "AddResistance(\"Dark\");",
	removeeval: "RemoveResistance(\"Dark\");",
};

FeatsList["magic font (light)"] = {
	name : "Magic Font (Light)",
	source : ["HB: Feats", 0],
	description : "You embody the draconic power of light and photons.  Deal 2x damage against Dark elementals, but only half to other Light users.  You resist Light.", 
	eval: "AddResistance(\"Light\");",
	removeeval: "RemoveResistance(\"Light\");",
};

FeatsList["magic font (fire)"] = {
	name : "Magic Font (Fire)",
	source : ["HB: Feats", 0],
	description : "You embody the draconic power of fire and flame.  Deal 2x damage against Metal elementals, but only half to other those of the Water element.  You resist Metal.", 
	eval: "AddResistance(\"Metal\");",
	removeeval: "RemoveResistance(\"Metal\");",
};

FeatsList["magic font (metal)"] = {
	name : "Magic Font (Metal)",
	source : ["HB: Feats", 0],
	description : "You embody the draconic power of metal and steel.  Deal 2x damage against Air elementals, but only half to other those of the Fire element.  You resist Air.", 
	eval: "AddResistance(\"Air\");",
	removeeval: "RemoveResistance(\"Air\");",
};

FeatsList["magic font (air)"] = {
	name : "Magic Font (Air)",
	source : ["HB: Feats", 0],
	description : "You embody the draconic power of wind and air.  Deal 2x damage against Earth elementals, but only half to other those of the Metal element.  You resist Earth.", 
	eval: "AddResistance(\"Earth\");",
	removeeval: "RemoveResistance(\"Earth\");",
};

FeatsList["magic font (earth)"] = {
	name : "Magic Font (Earth)",
	source : ["HB: Feats", 0],
	description : "You embody the draconic power of earth and forest.  Deal 2x damage against Water elementals, but only half to other those of the Air element.  You resist Water.", 
	eval: "AddResistance(\"Water\");",
	removeeval: "RemoveResistance(\"Water\");",
};

FeatsList["magic font (water)"] = {
	name : "Magic Font (Water)",
	source : ["HB: Feats", 0],
	description : "You embody the draconic power of water and ice.  Deal 2x damage against Fire elementals, but only half to other those of the Earth element.  You resist Fire.", 
	eval: "AddResistance(\"Fire\");",
	removeeval: "RemoveResistance(\"Fire\");",
};

FeatsList["magic font (space)"] = {
	name : "Magic Font (Space)",
	source : ["HB: Feats", 0],
	description : "You embody the celestial power of gravity and space.  Deal 2x damage against Time elementals, but only half to other Space users.  You resist Space.", 
	eval: "AddResistance(\"Space\");",
	removeeval: "RemoveResistance(\"Space\");",
};

FeatsList["magic font (time)"] = {
	name : "Magic Font (Time)",
	source : ["HB: Feats", 0],
	description : "You embody the celestial power over time itself.  Deal 2x damage against Space elementals, but only half to other Time users.  You resist Time.", 
	eval: "AddResistance(\"Time\");",
	removeeval: "RemoveResistance(\"Time\");",
};

FeatsList["magic font (poison)"] = {
	name : "Magic Font (Poison)",
	source : ["HB: Feats", 0],
	description : "You embody the celestial power of poisons and venom.  Deal 2x damage against Body elementals, but only half to other those of the Kinetic element.  You resist Body.", 
	eval: "AddResistance(\"Body\");",
	removeeval: "RemoveResistance(\"Body\");",
};

FeatsList["magic font body"] = {
	name : "Magic Font (Body)",
	source : ["HB: Feats", 0],
	description : "You embody the celestial power over your body's entire structure.  Deal 2x damage against Spirit elementals, but only half to other those of the Poison element.  You resist Spirit.", 
	eval: "AddResistance(\"Spirit\");",
	removeeval: "RemoveResistance(\"Spirit\");",
};

FeatsList["magic font (spirit)"] = {
	name : "Magic Font (Spirit)",
	source : ["HB: Feats", 0],
	description : "You embody the celestial power of the soul and empathy.  Deal 2x damage against Divinity elementals, but only half to other those of the Body element.  You resist Divinity.", 
	eval: "AddResistance(\"Divinity\");",
	removeeval: "RemoveResistance(\"Divinity\");",
};

FeatsList["magic font (divinity)"] = {
	name : "Magic Font (Divinity)",
	source : ["HB: Feats", 0],
	description : "You embody the celestial power of holy and unholy.  Deal 2x damage against Kinetic elementals, but only half to other those of the Spirit element.  You resist Kinetic.", 
	eval: "AddResistance(\"Kinetic\");",
	removeeval: "RemoveResistance(\"Kinetic\");",
};

FeatsList["magic font (kinetic)"] = {
	name : "Magic Font (Kinetic)",
	source : ["HB: Feats", 0],
	description : "You embody the celestial power of explosive power and kinetic energy.  Deal 2x damage against Poison elementals, but only half to other those of the Divinity element.  You resist Poison.", 
	eval: "AddResistance(\"Poison\");",
	removeeval: "RemoveResistance(\"Poison\");",
};

UpdateDropdown("feat");