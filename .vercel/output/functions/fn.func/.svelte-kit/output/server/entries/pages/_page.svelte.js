import { c as create_ssr_component, b as subscribe, e as escape, f as null_to_empty, d as add_attribute, v as validate_component, h as each, i as add_styles } from "../../chunks/index2.js";
import { l as lightMode } from "../../chunks/stores.js";
const actionButton_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".action-button.svelte-cw39c6{display:flex;justify-content:center;align-items:center;border-radius:0.5em;width:max-content;cursor:pointer;user-select:none}.action-button.svelte-cw39c6:hover{filter:brightness(105%)}",
  map: null
};
const Action_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonAttributes;
  let $lightMode, $$unsubscribe_lightMode;
  $$unsubscribe_lightMode = subscribe(lightMode, (value) => $lightMode = value);
  let { text = "BUTTON" } = $$props;
  let { buttonType = 0 } = $$props;
  let { textSize = 1.5 } = $$props;
  let { verticalPadding = 0.4 } = $$props;
  let { horizontalPadding = 2 } = $$props;
  function determineButtonAttributes(mode, buttonType2) {
    let buttonAttributes2 = {
      bgColor: "",
      textColor: "",
      shadowColor: ""
    };
    if ($lightMode) {
      if (buttonType2 === 0) {
        buttonAttributes2.bgColor = "var(--darkModeHighlight)";
        buttonAttributes2.shadowColor = "var(--lightModeHighlight)";
        buttonAttributes2.textColor = "var(--lightText)";
      }
      if (buttonType2 === 1) {
        buttonAttributes2.bgColor = "var(--lightModeSplashSecondary)";
        buttonAttributes2.shadowColor = "var(--darkBlueText)";
        buttonAttributes2.textColor = "var(--lightText)";
      }
    } else {
      if (buttonType2 === 0) {
        buttonAttributes2.bgColor = "var(--darkModeHighlight)";
        buttonAttributes2.shadowColor = "var(--darkModeHighlightSecondary)";
        buttonAttributes2.textColor = "var(--darkText)";
      }
      if (buttonType2 === 1) {
        buttonAttributes2.bgColor = "var(--darkModeSplashSecondary)";
        buttonAttributes2.shadowColor = "var(--darkText)";
        buttonAttributes2.textColor = "var(--lightText)";
      }
    }
    return buttonAttributes2;
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.buttonType === void 0 && $$bindings.buttonType && buttonType !== void 0)
    $$bindings.buttonType(buttonType);
  if ($$props.textSize === void 0 && $$bindings.textSize && textSize !== void 0)
    $$bindings.textSize(textSize);
  if ($$props.verticalPadding === void 0 && $$bindings.verticalPadding && verticalPadding !== void 0)
    $$bindings.verticalPadding(verticalPadding);
  if ($$props.horizontalPadding === void 0 && $$bindings.horizontalPadding && horizontalPadding !== void 0)
    $$bindings.horizontalPadding(horizontalPadding);
  $$result.css.add(css$6);
  buttonAttributes = determineButtonAttributes($lightMode, buttonType);
  $$unsubscribe_lightMode();
  return `<div style="${"background-color: " + escape(buttonAttributes.bgColor, true) + "; box-shadow: -0.1em 0.15em 0 0.075em " + escape(buttonAttributes.shadowColor, true) + "; color: " + escape(buttonAttributes.textColor, true) + "; font-size: " + escape(textSize, true) + "em; padding: " + escape(verticalPadding, true) + "em " + escape(horizontalPadding, true) + "em;"}" class="action-button svelte-cw39c6">${escape(text)}
</div>`;
});
const contactForm_svelte_svelte_type_style_lang = "";
const splashBackgroundContactMobile_svelte_svelte_type_style_lang = "";
const contactDesktop_svelte_svelte_type_style_lang = "";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_lightMode;
  $$unsubscribe_lightMode = subscribe(lightMode, (value) => value);
  $$unsubscribe_lightMode();
  return `

<section id="contact" class="contact-area">${``}
	${``}</section>`;
});
const headerSign_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "div.svelte-1mvxmdu{display:flex;align-items:center;justify-content:center;border-radius:7px;border:var(--lightText) solid 3px;letter-spacing:0.03em;user-select:none}",
  map: null
};
const Header_sign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bgColor;
  let color;
  let textShadow;
  let textStroke;
  let boxShadow;
  let border;
  let $lightMode, $$unsubscribe_lightMode;
  $$unsubscribe_lightMode = subscribe(lightMode, (value) => $lightMode = value);
  let { text = "WELCOME" } = $$props;
  let { fontSize = 2.7 } = $$props;
  let { width = 6 } = $$props;
  let { verticalPadding = 0.2 } = $$props;
  let { horizontalPadding = 0 } = $$props;
  let { animationDelay = 2e3 } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.verticalPadding === void 0 && $$bindings.verticalPadding && verticalPadding !== void 0)
    $$bindings.verticalPadding(verticalPadding);
  if ($$props.horizontalPadding === void 0 && $$bindings.horizontalPadding && horizontalPadding !== void 0)
    $$bindings.horizontalPadding(horizontalPadding);
  if ($$props.animationDelay === void 0 && $$bindings.animationDelay && animationDelay !== void 0)
    $$bindings.animationDelay(animationDelay);
  $$result.css.add(css$5);
  bgColor = $lightMode ? "var(--lightModeSplashPrimary)" : "rgb(0,0,0,.25)";
  color = $lightMode ? "var(--darkModeSecondary)" : "var(--darkModeHighlight)";
  textShadow = $lightMode ? "var(--lightModePrimary) 1px 0 5px" : "var(--darkModeHighlight) 0px 0px 20px";
  textStroke = $lightMode ? "0px" : "2px var(--darkModeSplashTertiary)";
  boxShadow = $lightMode ? "-3px 3px 0px 1px var(--darkBlueText)" : "0px 0px 0px 5px var(--darkModeHighlight), 0px 0px 30px 10px var(--darkModeHighlight), -5px 5px 0px 4px var(--darkModeHighlightSecondary)";
  border = $lightMode ? "border: var(--lightText) solid 3px;" : "border: none";
  $$unsubscribe_lightMode();
  return `<div class="${escape(null_to_empty($lightMode ? "light-animation" : "dark-animation"), true) + " svelte-1mvxmdu"}" style="${"font-size: " + escape(fontSize, true) + "em; width: " + escape(width, true) + "em; background-color: " + escape(bgColor, true) + "; color: " + escape(color, true) + "; text-shadow: " + escape(textShadow, true) + "; -webkit-text-stroke: " + escape(textStroke, true) + "; box-shadow: " + escape(boxShadow, true) + "; padding: " + escape(verticalPadding, true) + "em " + escape(horizontalPadding, true) + "em; " + escape(border, true) + "; animation-delay: " + escape(animationDelay, true) + "ms;"}">${escape(text)}
</div>`;
});
var ItemType = /* @__PURE__ */ ((ItemType2) => {
  ItemType2[ItemType2["Code"] = 0] = "Code";
  ItemType2[ItemType2["Art"] = 1] = "Art";
  ItemType2[ItemType2["Game"] = 2] = "Game";
  return ItemType2;
})(ItemType || {});
const projectItem_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "a.svelte-16ootn4{text-decoration:none}.project-item-container.svelte-16ootn4{width:18em;padding:1em;border-radius:0.5em;margin-top:1.5em}.project-item-data.svelte-16ootn4{display:flex;flex-direction:column}.heading-container.svelte-16ootn4{display:flex;justify-content:space-between}.heading-text.svelte-16ootn4{width:12em;padding-bottom:1em}.status-text.svelte-16ootn4{display:flex;flex-direction:column;justify-content:start;padding-bottom:1em}.source-info.svelte-16ootn4{display:flex;flex-direction:row;justify-content:space-between;padding-top:1em}.site-button.svelte-16ootn4{padding-top:1em;display:flex;justify-content:center}",
  map: null
};
const Project_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headerTextColor;
  let subTextColor;
  let highlight;
  let containerColor;
  let containerBoxShadowColor;
  let $lightMode, $$unsubscribe_lightMode;
  $$unsubscribe_lightMode = subscribe(lightMode, (value) => $lightMode = value);
  let { itemType = ItemType.Code } = $$props;
  let { header = "Placeholder" } = $$props;
  let { subheader = "" } = $$props;
  const imageString = "";
  let { status = "Work in Progress" } = $$props;
  let { info } = $$props;
  let { sourceCodeLink } = $$props;
  let { languageUsed = "Svelte" } = $$props;
  let { hasButton = false } = $$props;
  let { buttonText = "Visit Site" } = $$props;
  let { buttonRedirectURL = "" } = $$props;
  if ($$props.itemType === void 0 && $$bindings.itemType && itemType !== void 0)
    $$bindings.itemType(itemType);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.subheader === void 0 && $$bindings.subheader && subheader !== void 0)
    $$bindings.subheader(subheader);
  if ($$props.imageString === void 0 && $$bindings.imageString && imageString !== void 0)
    $$bindings.imageString(imageString);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  if ($$props.sourceCodeLink === void 0 && $$bindings.sourceCodeLink && sourceCodeLink !== void 0)
    $$bindings.sourceCodeLink(sourceCodeLink);
  if ($$props.languageUsed === void 0 && $$bindings.languageUsed && languageUsed !== void 0)
    $$bindings.languageUsed(languageUsed);
  if ($$props.hasButton === void 0 && $$bindings.hasButton && hasButton !== void 0)
    $$bindings.hasButton(hasButton);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  if ($$props.buttonRedirectURL === void 0 && $$bindings.buttonRedirectURL && buttonRedirectURL !== void 0)
    $$bindings.buttonRedirectURL(buttonRedirectURL);
  $$result.css.add(css$4);
  headerTextColor = $lightMode ? "var(--darkGreenText )" : "var(--lightText)";
  subTextColor = $lightMode ? "var(--lightModePrimary)" : "var(--darkModeSplashSecondary)";
  highlight = $lightMode ? "var(--lightText)" : "var(--darkModeHighlight)";
  containerColor = $lightMode ? "var(--lightModeSecondary)" : "var(--darkModeSecondary)";
  containerBoxShadowColor = $lightMode ? "var(--darkGreenText)" : "var(--darkText)";
  $$unsubscribe_lightMode();
  return `<div style="${"background-color: " + escape(containerColor, true) + "; box-shadow: -5px 5px 0px 3px " + escape(containerBoxShadowColor, true) + ";"}" class="project-item-container svelte-16ootn4"><div class="project-item-data svelte-16ootn4"><div class="heading-container svelte-16ootn4"><div class="heading-text svelte-16ootn4"><div style="${"color: " + escape(headerTextColor, true) + "; font-size: 1.5em"}">${escape(header.toUpperCase())}</div>
				<div style="${"color: " + escape(subTextColor, true)}">${escape(subheader)}</div></div>

			<div style="width: 4em; height: 4em; background-color: black"></div></div>
		<div class="status-text svelte-16ootn4"><div style="${"color: " + escape(headerTextColor, true) + "; padding-right: 1em;"}">STATUS:</div>
			<div style="${"color: " + escape(subTextColor, true)}">${escape(status)}</div></div>

		${info ? `<div class="status-text svelte-16ootn4"><div style="${"color: " + escape(subTextColor, true)}">${escape(info)}</div></div>` : ``}

		${itemType != ItemType.Art ? `<div class="source-info svelte-16ootn4"><a${add_attribute("href", sourceCodeLink, 0)} target="_blank" rel="noopener noreferrer" class="svelte-16ootn4"><div style="${"color: " + escape(highlight, true) + "; cursor: pointer"}">SOURCE CODE</div></a>

				<div style="${"color: " + escape(subTextColor, true)}">${escape(languageUsed)}</div></div>` : ``}

		${hasButton ? `<a${add_attribute("href", buttonRedirectURL, 0)} class="svelte-16ootn4"><div class="site-button svelte-16ootn4">${validate_component(Action_button, "ActionButton").$$render(
    $$result,
    {
      buttonType: 1,
      textSize: 1.2,
      text: buttonText,
      horizontalPadding: 4
    },
    {},
    {}
  )}</div></a>` : ``}</div>
</div>`;
});
const splashButton_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".splash-body.svelte-1n0rb4w{width:11em;position:relative;display:flex;justify-content:center;padding:0em 3em}.expanded-body.svelte-1n0rb4w{display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.sign-body.svelte-1n0rb4w{display:flex;flex-direction:column;justify-content:center;align-items:center;height:7.5em;width:7.5em;left:1.7em;top:2.7em;cursor:pointer}.project-items.svelte-1n0rb4w{position:relative;display:flex;flex-direction:column}.primary-splash.svelte-1n0rb4w{position:absolute;display:flex;justify-content:center;align-items:center;height:7.5em;width:7.5em;left:4.7em;top:2.7em;border-radius:50%;z-index:3;box-shadow:0px 3px 0px 1px rgba(0, 0, 0, 0.25);cursor:pointer}.primary-splash.svelte-1n0rb4w:hover{filter:brightness(102%)}.text.svelte-1n0rb4w{position:absolute;font-size:1.6em;letter-spacing:2px;user-select:none}.secondary-splash.svelte-1n0rb4w{position:absolute;height:9em;width:9em;left:4em;top:1.5em;border-radius:50%;background-color:grey;z-index:2}.tertiary-splash.svelte-1n0rb4w{position:absolute;height:11em;width:11em;border-radius:50%;background-color:black;z-index:1}@media(max-width: 480px){.splash-body.svelte-1n0rb4w{margin-bottom:12em}}@media(min-width: 480px){.splash-body.svelte-1n0rb4w{margin:7em 2em}}",
  map: null
};
const Splash_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textColor;
  let primarySplash;
  let secondarySplash;
  let tertiarySplash;
  let $lightMode, $$unsubscribe_lightMode;
  $$unsubscribe_lightMode = subscribe(lightMode, (value) => $lightMode = value);
  let { itemType } = $$props;
  let { projectItems = [] } = $$props;
  let { text = "TEXT" } = $$props;
  let { expanded = false } = $$props;
  if ($$props.itemType === void 0 && $$bindings.itemType && itemType !== void 0)
    $$bindings.itemType(itemType);
  if ($$props.projectItems === void 0 && $$bindings.projectItems && projectItems !== void 0)
    $$bindings.projectItems(projectItems);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  $$result.css.add(css$3);
  textColor = $lightMode ? "var(--lightText)" : "var(--darkText)";
  primarySplash = $lightMode ? "var(--lightModeSplashPrimary)" : "var(--darkModeSplashPrimary)";
  secondarySplash = $lightMode ? "var(--lightModeSplashSecondary)" : "var(--darkModeSplashSecondary)";
  tertiarySplash = $lightMode ? "var(--lightModeSplashTertiary)" : "var(--darkModeSplashTertiary)";
  $$unsubscribe_lightMode();
  return `<div class="splash-body svelte-1n0rb4w">${!expanded ? `<div class="primary-splash svelte-1n0rb4w" style="${"background-color: " + escape(primarySplash, true)}"><div class="text svelte-1n0rb4w" style="${"color: " + escape(textColor, true)}">${escape(text)}</div></div>
		<div class="secondary-splash svelte-1n0rb4w" style="${"background-color: " + escape(secondarySplash, true)}"></div>
		<div class="tertiary-splash svelte-1n0rb4w" style="${"background-color: " + escape(tertiarySplash, true)}"></div>` : `<div class="expanded-body svelte-1n0rb4w"><div class="sign-body svelte-1n0rb4w">${validate_component(Header_sign, "HeaderSign").$$render(
    $$result,
    {
      text,
      verticalPadding: 0.2,
      horizontalPadding: 2,
      width: 2,
      animationDelay: 500
    },
    {},
    {}
  )}</div>
			<div class="project-items svelte-1n0rb4w">${each(projectItems, (projectItem, i) => {
    return `<div>${validate_component(Project_item, "ProjectItem").$$render($$result, Object.assign({}, projectItem), {}, {})}
					</div>`;
  })}</div></div>`}
</div>`;
});
const projectHeader_svelte_svelte_type_style_lang = "";
const codeProjects = [
  {
    header: "- This site -",
    subheader: "dompetriella.com",
    status: "Work in Progress (v0.1.2)",
    info: "Recursion, much?",
    sourceCodeLink: "https://github.com/dompetriella/Personal-Website-2.0",
    languageUsed: "Sveltekit",
    hasButton: true,
    buttonText: "Goto Site",
    buttonRedirectURL: "https://www.dompetriella.com"
  },
  {
    header: "Simple Roller",
    subheader: "A Simpler Way to Roll",
    status: "Feature Complete (v1.3.4)",
    info: "A simple dice rolling app for tabletop games, with theming to fit your style.  Available on iOS and Android",
    sourceCodeLink: "https://github.com/dompetriella/Simple-Roller",
    languageUsed: "Flutter"
  },
  {
    header: "Ocebot",
    subheader: "A Pet Project- literally",
    status: "Complete (v1.1.5)",
    info: "Data keeping app for my pet snake, Ocelot, made in the style of Stardew Valley.",
    sourceCodeLink: "https://github.com/dompetriella/OceBot-2.0",
    languageUsed: "Flutter"
  }
];
const artProjects = [
  {
    itemType: ItemType.Art,
    header: "Point of Sale Demo",
    subheader: "Whatcha.. buyin?",
    info: "Demo design for point of sale system for school lunches",
    hasButton: true,
    buttonText: "View Figma",
    buttonRedirectURL: "https://www.figma.com/file/7LM8Y5qKJnZbEOSWPBUDcB/POS-Design?node-id=0-1&t=gf4qM1YygA2BRcpq-0"
  }
];
const gameProjects = [
  {
    header: "Elementals",
    subheader: "",
    status: "Work in Progress (0.3.0)",
    info: "Harness one of the four elements in a multiplayer 1v1 card game",
    sourceCodeLink: "https://github.chttps://github.com/dompetriella/Elementals",
    languageUsed: "Flutter"
  },
  {
    header: "Maritime Mines",
    subheader: "Minesweeper at sea",
    status: "Complete?",
    sourceCodeLink: "https://github.com/dompetriella/maritime-mines",
    languageUsed: "HTML/CSS/JS",
    hasButton: true,
    buttonText: "Play",
    buttonRedirectURL: "https://maritime-mines.dompetriella.repl.co/"
  }
];
const Projects_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".splash-buttons.svelte-wdb652{display:flex;flex-direction:row;justify-content:space-around;align-items:start;flex-wrap:wrap}.projects-section.svelte-wdb652{display:flex;flex-direction:column;align-items:center}@media(max-width: 480px){.splash-buttons.svelte-wdb652{row-gap:5em;margin-bottom:10em}}@media(min-width: 480px){.projects-section.svelte-wdb652{padding:5em 0em}.splash-buttons.svelte-wdb652{width:100vw}}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `

<section id="projects" class="projects-section svelte-wdb652">${``}
	<div class="splash-buttons svelte-wdb652">${validate_component(Splash_button, "SplashButton").$$render(
    $$result,
    {
      text: "CODE",
      itemType: ItemType.Code,
      projectItems: codeProjects
    },
    {},
    {}
  )}
		${validate_component(Splash_button, "SplashButton").$$render(
    $$result,
    {
      text: "ART",
      itemType: ItemType.Art,
      projectItems: artProjects
    },
    {},
    {}
  )}
		${validate_component(Splash_button, "SplashButton").$$render(
    $$result,
    {
      text: "GAMES",
      itemType: ItemType.Game,
      projectItems: gameProjects
    },
    {},
    {}
  )}</div>
</section>`;
});
const splashBackgroundDesktop_svelte_svelte_type_style_lang = "";
const splashBackgroundProjectsMobile_svelte_svelte_type_style_lang = "";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".light-header-sign.svelte-1bwud9q{animation-name:svelte-1bwud9q-fade-in-text;animation-duration:600ms;animation-fill-mode:backwards}.header-text.svelte-1bwud9q{padding-top:1em;text-align:center;letter-spacing:2px}.light-text-animation.svelte-1bwud9q{animation-name:svelte-1bwud9q-fade-in-text;animation-duration:600ms;animation-fill-mode:backwards}@keyframes svelte-1bwud9q-fade-in-text{0%{transform:translateY(-1em);opacity:0}100%{opacity:100}}.header.svelte-1bwud9q{z-index:50}.splash-buttons.svelte-1bwud9q{display:flex;flex-direction:row;justify-content:space-around;align-items:start;flex-wrap:wrap}.projects-section.svelte-1bwud9q{display:flex;flex-direction:column;align-items:center}@media(max-width: 480px){.header-section.svelte-1bwud9q{padding-top:2em;display:flex;flex-direction:column;justify-content:center;align-items:center}.splash-buttons.svelte-1bwud9q{row-gap:5em;margin-bottom:10em}}@media(min-width: 480px){.main-tree.svelte-1bwud9q{align-items:start;margin:0;padding:0}.header-section.svelte-1bwud9q{display:flex;flex-direction:row;justify-content:space-between}.header.svelte-1bwud9q{padding-left:10em;padding-top:15em}.header-text.svelte-1bwud9q{font-size:1.5em}.projects-section.svelte-1bwud9q{padding:5em 0em}}@media(min-width: 481px) and (max-width: 1000px){.header-text.svelte-1bwud9q{color:var(--darkText) !important}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fontSize;
  let textColor;
  let animationType;
  let $lightMode, $$unsubscribe_lightMode;
  $$unsubscribe_lightMode = subscribe(lightMode, (value) => $lightMode = value);
  $$result.css.add(css$1);
  fontSize = 2.7;
  textColor = $lightMode ? "var(--darkText)" : "var(--lightText)";
  animationType = $lightMode ? "light-text-animation" : "dark-text-animation";
  $$unsubscribe_lightMode();
  return `

<section id="home" class="header-section svelte-1bwud9q"><div class="header svelte-1bwud9q"><div class="${escape(null_to_empty(animationType), true) + " svelte-1bwud9q"}">${validate_component(Header_sign, "HeaderSign").$$render($$result, { fontSize }, {}, {})}</div>

		<div style="${"color: " + escape(textColor, true)}" class="header-text svelte-1bwud9q"><div class="${escape(null_to_empty(animationType), true) + " svelte-1bwud9q"}"${add_styles({
    "animation-delay": $lightMode ? "200ms" : "0ms"
  })}>I&#39;M DOM PETRIELLA
			</div>
			<div class="${escape(null_to_empty(animationType), true) + " svelte-1bwud9q"}"${add_styles({
    "animation-delay": $lightMode ? "400ms" : "0ms"
  })}>${escape($lightMode ? "FULL STACK DEVELOPER" : "VISUAL DESIGNER")}</div>
			<div class="${escape(null_to_empty(animationType), true) + " svelte-1bwud9q"}"${add_styles({
    "animation-delay": $lightMode ? "600ms" : "0ms"
  })}>${escape($lightMode ? "BY DAY" : "BY NIGHT")}</div></div></div>
	${``}
	${``}
</section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-tree.svelte-a3kxlb{display:flex;flex-direction:column;margin:0;padding:0}@media(min-width: 480px){.main-tree.svelte-a3kxlb{align-items:start}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<div class="main-tree svelte-a3kxlb">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
	${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
