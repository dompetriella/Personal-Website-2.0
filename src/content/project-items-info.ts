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
		header: 'Note Jogger (wireframes)',
		subheader: 'Where the music magic happens',
		info: 'Designs and wireframes for the revamped UI in the Note Jogger app',
		hasButton: true,
		buttonText: "View Figma",
		buttonRedirectURL: "https://www.figma.com/file/FnMg9ygZ9hylYLqntLmbiJ/Note-Jogger?type=design&fuid=1081230008261467704"
	},

	{
		itemType: ItemType.Art,
		header: '- This site -',
		subheader: 'Wireframes for dompetriella.com',
		info: 'The wireframes for the site.  Might even hide some new features on the horizon 👀',
		hasButton: true,
		buttonText: "View Figma",
		buttonRedirectURL: "https://www.figma.com/file/RbLkYXbhG1OcCJtrdHPhar/Personal-Site-Redesign?type=design&t=WiRhzv7fmK4TlpOh-0"
	},
];

export const gameProjects = [
	{
		header: 'Note Jogger',
		subheader: 'Catch Up on Your Musical Exercises',
		status: '0.5.6a',
		info: "Make a game out of learning music with Note Jogger!",
		sourceCodeLink: "https://github.com/dompetriella/Note-Jogger",
		imageFileName: 'note-jogger.png',
		imageAlt: 'note jogger logo',
		languageUsed: 'Flutter',
		hasButton: true,
		buttonText: "Play",
		buttonRedirectURL: "https://note-jogger.web.app/"
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