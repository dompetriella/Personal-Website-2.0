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
		header: 'Maritime Mines',
		subheader: 'Minesweeper at sea',
		status: 'Complete?',
		sourceCodeLink: "https://github.com/dompetriella/maritime-mines",
		imageFileName: 'maritime-mines.png',
		imageAlt: 'maritime mines logo',
		languageUsed: 'HTML/CSS/JS',
		hasButton: true,
		buttonText: "Play",
		buttonRedirectURL: "https://maritime-mines.dompetriella.repl.co/"
	},
	{
		header: 'Elementals',
		subheader: '',
		status: 'Work in Progress (0.3.0)',
		info: 'Harness one of the four elements in a multiplayer 1v1 card game',
		sourceCodeLink: "https://github.com/dompetriella/Elementals",
		imageFileName: 'elementals.png',
		imageAlt: 'elementals game logo',
		languageUsed: 'Flutter',
	},

];