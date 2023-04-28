<script lang="ts">
	import { fade } from 'svelte/transition';
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
				buttonAttributes.bgColor = 'var(--darkModeHighlight)';
				buttonAttributes.shadowColor = 'var(--lightModeHighlight)';
				buttonAttributes.textColor = 'var(--lightText)';
			}
			if (buttonType === ButtonType.Secondary) {
				buttonAttributes.bgColor = 'var(--lightModeSplashSecondary)';
				buttonAttributes.shadowColor = 'var(--darkBlueText)';
				buttonAttributes.textColor = 'var(--lightText)';
			}
		} else {
			if (buttonType === ButtonType.Primary) {
				buttonAttributes.bgColor = 'var(--darkModeHighlight)';
				buttonAttributes.shadowColor = 'var(--darkModeHighlightSecondary)';
				buttonAttributes.textColor = 'var(--darkText)';
			}
			if (buttonType === ButtonType.Secondary) {
				buttonAttributes.bgColor = 'var(--darkModeSplashSecondary)';
				buttonAttributes.shadowColor = 'var(--darkText)';
				buttonAttributes.textColor = 'var(--lightText)';
			}
		}
		return buttonAttributes;
	}
</script>

<div
	class="action-button"
	class:pressed={isPressed}
	style={`background-color: ${buttonAttributes.bgColor};
          color: ${buttonAttributes.textColor};
          font-size: ${textSize}em;
          padding: ${verticalPadding}em ${horizontalPadding}em;
          box-shadow: ${isPressed ? '0px 3px 0px 2px' : '-3px 5px 0 0.075em'} ${
		buttonAttributes.shadowColor
	};`}
	on:mousedown={() => (isPressed = true)}
	on:mouseup={() => (isPressed = false)}
>
	{text}
</div>

<style>
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
