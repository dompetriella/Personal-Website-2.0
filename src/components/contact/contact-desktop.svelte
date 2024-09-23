<script lang="ts">
	import ContactForm from './contact-form.svelte';

	import { lightMode } from '../../stores';
	import ActionButton from '../action-button.svelte';
	import { Theme } from '../../models/theme';

	enum ButtonType {
		Primary,
		Secondary
	}

	$: textColor = $lightMode ? Theme.darkGreenText : Theme.darkModeSplashPrimary;
</script>

<div class="contact-area">
	<div class="contact-text-area">
		<div style="color: {textColor}" class="title">CONTACT</div>
		<div class="contact-buttons">
			<a
				href={'https://www.linkedin.com/in/dominicpetriella/'}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
					height="60"
					width="60"
					alt="icon"
					style="cursor: pointer;"
				/>
			</a>

			<a href={'https://github.com/dompetriella'} target="_blank" rel="noopener noreferrer">
				<img
					src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
					height="50"
					width="50"
					alt="icon"
					style="cursor: pointer;"
				/>
			</a>

			<div style="width: 1.5em" />
			<ActionButton buttonType={ButtonType.Secondary} text="RESUMÉ" route={'/resume'} />
		</div>
		<ul style="color: {textColor}">
			<li>For website freelance</li>
			<li>For UI/UX design</li>
			<li>App development</li>
			<li>Game dev</li>
			<li>Music composition</li>
			<li>Or just to chat!</li>
		</ul>
	</div>
	<div class="contact-input-area">
		<ContactForm width={40} />
	</div>
</div>

<style>
	.contact-area {
		display: flex;
		justify-content: space-around;
		width: 100%;
		padding: 10em 0em;
	}

	.contact-text-area {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.contact-buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.title {
		font-size: 3.5em;
		letter-spacing: 8px;
	}

	ul li {
		padding: 1em;
		font-size: 1.2em;
		letter-spacing: 3px;
	}

	.contact-input-area {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: end;
	}

	@media (min-width: 481px) and (max-width: 1000px) {
		.contact-area {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}

		.contact-text-area {
			margin-left: -20em;
			margin-bottom: 3em;
		}
	}
</style>
