<script lang="ts">
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
	style="background-color: {buttonAttributes.bgColor}; box-shadow: -0.1em 0.1em 0 0.1em {buttonAttributes.shadowColor}; color: {buttonAttributes.textColor};  font-size: {textSize}em; padding: {verticalPadding}em {horizontalPadding}em;"
	class="action-button"
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
	}
</style>
