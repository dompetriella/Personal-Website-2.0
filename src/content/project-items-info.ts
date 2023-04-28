import { ItemType } from "../models/projects";

export const codeProjects = [
	{
		header: '- This site -',
		subheader: 'dompetriella.com',
		status: 'Work in Progress (v0.1.6)',
		info: 'Recursion, much?',
		sourceCodeLink: "https://github.com/dompetriella/Personal-Website-2.0",
		imageFileName: 'dompetriella.png',
		imageAlt: ' my face .png',
		languageUsed: 'Sveltekit',
		hasButton: true,
		buttonText: "Goto Site",
		buttonRedirectURL: "https://www.dompetriella.com"
	},
	{
		header: 'Simple Roller',
		subheader: 'A Simpler Way to Roll',
		status: 'Feature Complete (v1.3.4)',
		info: 'A simple dice rolling app for tabletop games, with theming to fit your style.  Available on iOS and Android',
		sourceCodeLink: "https://github.com/dompetriella/Simple-Roller",
		imageFileName: 'simple-roller.png',
		imageAlt: 'the simple roller icon',
		languageUsed: 'Flutter'
	},
	{
		header: 'Ocebot',
		subheader: 'A Pet Project- literally',
		status: 'Complete (v1.1.5)',
		info: 'Data keeping app for my pet snake, Ocelot, made in the style of Stardew Valley.',
		sourceCodeLink: "https://github.com/dompetriella/OceBot-2.0",
		imageFileName: 'ocebot.png',
		imageAlt: 'hognose snake pixelated',
		languageUsed: 'Flutter'
	}
];

export const artProjects = [
	{
		itemType: ItemType.Art,
		header: 'Point of Sale Demo',
		subheader: 'Whatcha.. buyin?',
		info: 'Demo design for point of sale system for school lunches',
		hasButton: true,
		buttonText: "View Figma",
		buttonRedirectURL: "https://www.figma.com/file/7LM8Y5qKJnZbEOSWPBUDcB/POS-Design?node-id=0-1&t=gf4qM1YygA2BRcpq-0"
	}
];

export const gameProjects = [
	{
		header: 'Elementals',
		subheader: '',
		status: 'Work in Progress (0.3.0)',
		info: 'Harness one of the four elements in a multiplayer 1v1 card game',
		sourceCodeLink: "https://github.chttps://github.com/dompetriella/Elementals",
		imageFileName: 'elementals.png',
		imageAlt: 'elementals game logo',
		languageUsed: 'Flutter',
	},
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
	}
];