<script lang="ts">
	import { Theme } from '../models/theme';
	import { lightMode } from '../stores';
	enum ButtonType {
		Primary,
		Secondary
	}

	export let text: String = 'BUTTON';
	export let buttonType: ButtonType = ButtonType.Primary;
	export let textSize: number = 1.5;
	export let verticalPadding: number = 0.4;
	export let horizontalPadding: number = 2;
	export let isSubmitButton: boolean = false;
	export let buttonRedirectURL: string = '';
	export let route: string = 'javascript:void(0)';
	export let onClick = () => {};

	let isPressed = false;

	$: buttonAttributes = determineButtonAttributes($lightMode, buttonType);

	function determineButtonAttributes(mode: any, buttonType: ButtonType) {
		let buttonAttributes = {
			bgColor: '',
			textColor: '',
			shadowColor: ''
		};

		if ($lightMode) {
			if (buttonType === ButtonType.Primary) {
				buttonAttributes.bgColor = Theme.darkModeHighlight;
				buttonAttributes.shadowColor = Theme.lightModeHighlight;
				buttonAttributes.textColor = Theme.lightText;
			}
			if (buttonType === ButtonType.Secondary) {
				buttonAttributes.bgColor = Theme.lightModeSplashSecondary;
				buttonAttributes.shadowColor = Theme.darkBlueText;
				buttonAttributes.textColor = Theme.lightText;
			}
		} else {
			if (buttonType === ButtonType.Primary) {
				buttonAttributes.bgColor = Theme.darkModeHighlight;
				buttonAttributes.shadowColor = Theme.darkModeHighlightSecondary;
				buttonAttributes.textColor = Theme.darkText;
			}
			if (buttonType === ButtonType.Secondary) {
				buttonAttributes.bgColor = Theme.darkModeSplashSecondary;
				buttonAttributes.shadowColor = Theme.darkText;
				buttonAttributes.textColor = Theme.lightText;
			}
		}
		return buttonAttributes;
	}
</script>

<a data-sveltekit-reload href={route}>
	<button
		class="action-button"
		type={isSubmitButton ? 'submit' : 'button'}
		class:pressed={isPressed}
		style={`background-color: ${buttonAttributes.bgColor};
          color: ${buttonAttributes.textColor};
          font-size: ${textSize}em;
          padding: ${verticalPadding}em ${horizontalPadding}em;
          box-shadow: ${isPressed ? '0px 3px 0px 2px' : '-3px 5px 0 0.075em'} ${
			buttonAttributes.shadowColor
		};`}
		on:mousedown={() => (isPressed = true)}
		on:touchstart={() => (isPressed = true)}
		on:mouseup={() => (isPressed = false)}
		on:touchend={() => (isPressed = true)}
		on:click={() => onClick()}
	>
		{text}
	</button>
</a>

<style>
	a {
		text-decoration: none;
	}

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}

	.action-button {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.5em;
		width: max-content;
		cursor: pointer;
		user-select: none;
		transition: box-shadow 0.2s ease-out, transform 0.2s ease-out;
	}

	.action-button:hover {
		filter: brightness(105%);
	}

	.action-button.pressed {
		box-shadow: 1px 1px 1px 1px var(--lightModeHighlight);
		transform: translateY(5px) scale(0.95);
	}
</style>
