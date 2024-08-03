import { ItemType } from "../models/projects";

export const codeProjects = [
	{
		header: '- This site -',
		subheader: 'dompetriella.com',
		status: 'Work in Progress (v0.2.1)',
		info: 'Recursion, much?',
		sourceCodeLink: "https://github.com/dompetriella/Personal-Website-2.0",

		imageFileName: 'dompetriella.png',
		imageAlt: 'my face .png',
		languageUsed: 'Sveltekit',
		hasButton: true,
		buttonText: "Goto Site",
		buttonRedirectURL: "https://www.dompetriella.com"
	},
	{
		header: 'Simple Roller',
		subheader: 'A Simpler Way to Roll',
		status: 'Feature Complete (v1.3.4)',
		info: 'A simple dice rolling app for tabletop games with theming to fit your style.  Available on iOS and Android',
		sourceCodeLink: "https://github.com/dompetriella/Simple-Roller",
		imageFileName: 'simple-roller.png',
		imageAlt: 'the simple roller icon',
		languageUsed: 'Flutter'
	},
	{
		header: 'Note Jogger',
		subheader: 'Catch Up on Your Musical Exercises',
		status: '0.5.6a',
		info: "Make a game out of learning music with Note Jogger! (For iOS and Android, Web may run into issues)",
		sourceCodeLink: "https://github.com/dompetriella/Note-Jogger",
		imageFileName: 'note-jogger.png',
		imageAlt: 'note jogger logo',
		languageUsed: 'Flutter',
		hasButton: true,
		buttonText: "Play Demo",
		buttonRedirectURL: "https://note-jogger.web.app/"
	},
];

export const artProjects = [
	{
		itemType: ItemType.Art,
		header: 'Icons',
		subheader: 'A picture worth a thousand clicks',
		info: "Some favorite app icon designs I've made over the years",
		imageFileName: 'pokeball-icon.png',
		imageAlt: 'a pokeball',
		imageList: [
			{ imageFileName: 'proto-jogger-icon.png', imageAltDescription: 'a stylized keyboard piano' },
			{ imageFileName: 'poseidon-icon.png', imageAltDescription: 'a trident fighting blue waves' },
			{ imageFileName: 'pokeball-icon.png', imageAltDescription: 'a pokeball' },
			{ imageFileName: 'maritime-mines.png', imageAltDescription: 'a mine floating at sea' },
			{ imageFileName: 'watchtower-icon.png', imageAltDescription: 'a purple lighthouse' },
			{ imageFileName: 'meet2eat-icon.png', imageAltDescription: 'a dinner being revealed' },
		],
		hasButton: false,
		buttonText: "See More",
	},
];

export const gameProjects = [

	{
		header: 'New Bark Town (remake)',
		subheader: 'Come along as we remake a classic',
		status: 'Work in Progress (0.0.1)',
		info: 'A small remake of New Bark Town from Pokemon Silver/Gold/Crystal.  One part learning Godot, one part nostalgia',
		sourceCodeLink: "https://github.com/dompetriella/new_bark_town",
		imageFileName: 'new-bark-town.png',
		imageAlt: 'totodile!',
		languageUsed: 'Godot (Gdscript)',
		hasButton: true,
		buttonRedirectURL: "https://aquaticanuran.itch.io/new-bark-town",
		buttonText: "Play"
	},
	{
		header: 'Peak Efficiency',
		subheader: 'Kenney 2024 Game Jam - "Connections',
		status: 'Game Jam!',
		info: "A little space shooter with some economy actions.  Its a one way trip, so strive for peak efficiency and beat your high score",
		sourceCodeLink: "https://github.com/dompetriella/precious_cargo",
		imageFileName: 'peak-efficiency.png',
		imageAlt: 'peak efficiency space',
		languageUsed: 'Godot (Gdscript)',
		hasButton: true,
		buttonRedirectURL: "https://aquaticanuran.itch.io/peak-efficiency",
		buttonText: "Play"
	},
	{
		header: 'Maritime Mines',
		subheader: 'Minesweeper at sea',
		status: 'Complete?',
		sourceCodeLink: "https://github.com/dompetriella/maritime-mines",
		info: 'This was my very first game I ever made, and holds a special place in my heart <3',
		imageFileName: 'maritime-mines.png',
		imageAlt: 'maritime mines logo',
		languageUsed: 'HTML/CSS/JS',
		hasButton: true,
		buttonText: "Play",
		buttonRedirectURL: "https://maritime-mines.dompetriella.repl.co/"
	},


];