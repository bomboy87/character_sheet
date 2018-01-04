var iFileName = "hb_backgrounds.js";
RequiredSheetVersion(12.999);
// This file adds Homebrew Content for Custom Backgrounds

// Define the source
SourceList["HB: 80"] = {
    name : "80 Custom Backgrounds",
    abbreviation : "HB: 80",
    group : "Homebrew",
    url : "http://www.dmsguild.com/product/171771"
};

// Apprentice Alchemist
BackgroundList["apprentice alchemist"] = {
        regExpSearch : /^(?=.*(apprentice))(?=.*alchemist).*$/i,
        name : "Apprentice Alchemist",
        source : ["HB: 80", 11],
        skills : ["Arcana", "choose one from: Investigation, Medicine, Nature, and Persuasion"],
        gold : 10,
        equipleft : [
            ["Alchemists' Supplies", "", ""],
            ["Book of Alchemical Recipes", "", 3],
			["Scroll case", "", 4],
			["Sheet of Parchment", 5, ""],
			["Ink and Quill", "", ""]
        ],
        equipright : [
            ["Robes", "", 1],
            ["Belt pouch (with coins)", "", 1]
        ],
        feature : "Alchemical Familiarity",
        trait : [
            "I am often lost in thought.",
            "I use big and complicated words.",
            "I always try to help others.",
            "I am a perfectionist and need things to be just so.",
            "I am very awkward in social situations.",
            "I am always trying to learn new recipes, formulas, or techniques by reading or watching others work."     
        ],
        ideal : [
            ["Service",
                "Service: Helping others is the most important thing in the world. (Good)"
            ],
            ["Power",
                "Power: Knowledge is the key to power and authority. (Evil)"
            ],
            ["Logic",
                "Logic: There is a systematic way to do and understand everything. (Lawful)"
            ],
            ["Discovery",
                "Discovery: There are new magics awaiting discovery. (Chaotic)"
            ],
            ["Knowledge",
                "Knowledge: Understanding the world and its mysteries is its own reward. (Neutral)"
            ],
            ["Self-Improvement",
                "Self-Improvement: Bettering yourself is essntial in life."
            ]
        ],
        bond : [
            "I have a mentor I admire and need to impress.",
			"I had a mentor who was cruel and secretly corrupted my home, I must expose him/her.",
			"My family relies on my support.",
			"I am determined to cure the disease that killed my family.",
			"I need to be known for my contributions, discoveries, and skill.", 
			"I helped a noble without thought of reward and now that noble family are quiet but loyal patrons."
        ],
        flaw : [
            "I avoid others troubles when not actively working as an alchemist or healer.",
			"I treat people like they are stupid.",
			"I resent the people who come to me for help for their weakness.",
			"I wish to be left alone to my work.",
			"I prove my intellect by pointing out others mistakes.",
			"I have difficulty telling people no."
        ],
        languages : [],
        variant : [],
        tools : ["Alchemists' Supplies", "Choose either Herbalism or Poisoner Kit"],
        lifestyle : "modest"
};
 
BackgroundFeatureList["alchemical familiarity"] = {  
    description : "I have an ongoing relationship with my mentor, whom I am able to contact to request advice or assistance, even when far away.  I can often identify potions, salves, oils, and other mundane and magical consumables by sight.  In addition, my familiarity with alchemy enables me to work in an Alchemist's lab or shop to earn a modest living during my down time.",
    source : ["HB: 80", 11]
};

// Bodyguard
BackgroundList["bodyguard"] = {
        regExpSearch : /^(?=.*(bodyguard)).*$/i,
        name : "Bodyguard",
        source : ["HB: 80", 11],
        skills : ["Intimidation and Perception"],
        gold : 15,
        equipleft : [
            ["Gaming Set", "", ""],
            ["Club or Dagger", "", ""]
        ],
        equipright : [
            ["Common Clothes", "", 1],
            ["Belt pouch (with coins)", "", 1]
        ],
        feature : "You Saved Me!",
        trait : [
			"I'm always polite and respectful.",
			"I’m haunted by memories of war. I can’t get the images of violence out of my mind.",
			"I’ve lost too many friends, and I’m slow to make new ones.",
			"I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
			"I can stare down a hell hound without flinching.",
			"I enjoy being strong and like breaking things.",
			"I have a crude sense of humor.",
			"I face problems head-on. A simple, direct solution is the best path to success."
        ],
        ideal : [
            ["Greater Good",
                "Greater Good: Our lot is to lay down our lives in defense of others. (Good)"
            ],
            ["Responsibility",
                "Responsibility: I do what I must and obey just authority. (Lawful)"
            ],
            ["Independence",
                "Independence: When people follow orders blindly, they embrace a kind of tyranny (Chaotic)"
            ],
            ["Might",
                "Might: In life as in war, the stronger force wins. (Evil)"
            ],
            ["Live and Let Live",
                "Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
            ],
            ["Nation",
                "Nation: My city, nation, or people are all that matter."
            ]
        ],
        bond : [
			"I would still lay down my life for the people I served with.",
			"Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
			"My honor is my life.",
			"I’ll never forget the crushing defeat my company suffered or the enemies who dealt it.",
			"Those who fight beside me are those worth dying for.",
			"I fight for those who cannot fight for themselves."
        ],
        flaw : [
            "The monstrous enemy we faced in battle still leaves me quivering with fear.",
			"I have little respect for anyone who is not a proven warrior.",
			"I made a terrible mistake in battle cost many lives— and I would do anything to keep that mistake secret.",
			"My hatred of my enemies is blind and unreasoning.",
			"I obey the law, even if the law causes misery.",
			"I’d rather eat my armor than admit when I’m wrong."
        ],
        languages : [],
        variant : [],
        tools : ["Land Vehicles", "Choose 1 type of Gaming Set"],
        lifestyle : "modest"
};
 
BackgroundFeatureList["you saved me!"] = {  
    description : "Several people owe me their life thanks to my skills as a bodyguard. The people that can afford to hire bodyguards tend to be the rich and powerful, from mayors to merchants, and possibly criminal bosses as well. I can call in these favors or utilize them as contacts. I also know how security is typically set up in various places and situations.",
    source : ["HB: 80", 11]
};

// Primitive Tribe Member
BackgroundList["primitive tribe member"] = {
        regExpSearch : /^(?=.*(primitive))(?=.*tribe).*$/i,
        name : "Primitive Tribe Member",
        source : ["HB: 80", 63],
        skills : ["Nature", "choose one from: Animal Handling, Athletics, Stealth, or Survival"],
        gold : 10,
        equipleft : [
            ["Significant Tribal item", "", ""],
            ["One set of proficient tools", "", ""],
        ],
        equipright : [
            ["Traveler's clothes", "", 4],
            ["Belt pouch (with coins)", "", 1]
        ],
        feature : "At One with Nature",
        trait : [
            "I am undyingly loyal to and protective of my tribe.",
            "I am direct and do not understand subtlety.",
            "I am contemptuous of civilization.",
            "I do not trust magic or magic users.",
            "I am naïve and friendly to everyone.",
            "I am awestruck by cities and grand architecture."     
        ],
        ideal : [
            ["Humility",
                "Humility: I am no better or worse than anyone else in this world. (Good)"
            ],
            ["Xenophobia",
                "Xenophobia: I do not understand the ways of worldly people, but know they are wrong. (Evil)"
            ],
            ["Order",
                "Order: Every place has rules which must be followed for everyone's good. (Lawful)"
            ],
            ["Freedom",
                "Freedom: There is one rule in the wild; do what you can to live. (Chaotic)"
            ],
            ["Balance",
                "Balance: All things and ways of being are natural and necessary. (Neutral)"
            ],
            ["Unity",
                "Unity: A tribe that works together is strong. (Lawful)"
            ]
        ],
        bond : [
            "My family and my tribe are everything to me.",
			"I left my tribe to prove my right to a prominent place in the tribe hierarchy.",
			"I love a prominent tribe member and must prove I am worth their love.",
			"My tribe is threatened and I must protect them.",
			"My tribe was destroyed and I must have vengeance.",
			"I was dishonored and thrown out of my tribe; I must prove my worth"
        ],
        flaw : [
            "I don’t understand social nuances.",
			"I drink (or overindulge in other things) to excess.",
			"I don’t trust anyone not of my tribe.",
			"I trust everyone to say what they mean.",
			"I believe might proves right and will not listen to those who are “weak”.",
			"I am insecure since my tribe appears weak compared to larger, more modern societies."
        ],
        languages : [],
        variant : [],
        tools : ["+2 from Primitive Tribal Member"],
        lifestyle : "modest"
};
 
BackgroundFeatureList["at one with nature"] = {  
    description : "I am intimately familiar with the geography of my home region.  I know exactly where water, shelter, and food can be found within several miles of my ome and am good at finding these areas when outside of my home region as well when in a climate much like it.",
    source : ["HB: 80", 63]
};

UpdateDropdown("background");
UpdateDropdown("backgroundfeature");