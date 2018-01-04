var iFileName = "hb_races.js";
RequiredSheetVersion(12.999);
// This file adds Homebrew Content for Custom Races

// Define the source
SourceList["HB: Races"] = {
    name : "Homebrew Races",
    abbreviation : "HB: Races",
    group : "Homebrew",
    url : "http://www.dmsguild.com/product/171771"
};

// Mul
RaceList["mul"] = { 
	regExpSearch : /^(?=.*mul).*$/i, 	
	name : "Mul", 	
	source : ["HB: Races", 0],
	plural : "Muls", 	
	size : 3,	
	speed : [30, 20],	
	languages : ["Common", "Dwarvish"],
	vision : "Darkvision 60 ft", 	
	dmgres : ["poison"],	
	savetxt : "Adv. vs. poison saving throws",	
	age : " reach adulthood around 20 and can live over 140 years",	
	height : " range from 5 and a half to over 6 feet tall (5'6\" + 1d8\")",	
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Mul: +2 Constitution, +1 Strength and Wisdom;", 
	scores : [1, 0, 2, 0, 1, 0],
	trait : "Mul (+2 Constitution, +1 Strength and Wisdom)\nDwarven Toughness:\n   My HP max increases by 1 for every level.",	
	features : { 
		"dwarven toughness" : {
			name : "Dwarven Toughness",
			minlevel : 1, 
			calcChanges : {
				hp : "extrahp += totalhd * 1; extrastring += '\\n + ' + totalhd + ' \\u00D7 1 from Dwarven Toughness feat (' + (totalhd * 1) + ')';"
			}
		}
	}
};

UpdateDropdown("race");