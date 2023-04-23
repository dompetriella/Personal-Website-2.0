import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { l as lightMode } from "../../chunks/stores.js";
const app = "";
const navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-g34zsi{text-decoration:none}img.svelte-g34zsi{cursor:pointer}@media(max-width: 480px){nav.mobile.svelte-g34zsi{position:fixed;bottom:1em;display:flex;align-items:center;align-self:center;justify-content:space-around;width:85vw;height:3em;border-radius:1em;z-index:999}.icon-image.svelte-g34zsi{padding-top:5px;padding-left:1em;animation:fadeIn 1s}.right-nav.svelte-g34zsi{display:none}.nav-text.svelte-g34zsi{display:none}}@media(min-width: 480px){nav.mobile.svelte-g34zsi{display:none}nav.desktop.svelte-g34zsi{position:fixed;top:1em;display:flex;align-items:center;justify-content:center;align-self:center;justify-content:space-between;width:90vw;height:3em;border-radius:15px;z-index:999}.nav-text.svelte-g34zsi{font-size:1.2em;font-weight:100;letter-spacing:1px;padding:0em 1em;cursor:pointer}.left-nav.svelte-g34zsi{display:flex;flex-direction:row;justify-content:flex-start}.right-nav.svelte-g34zsi{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navbarBackground;
  let navbarBoxShadow;
  let textColor;
  let $lightMode, $$unsubscribe_lightMode;
  $$unsubscribe_lightMode = subscribe(lightMode, (value) => $lightMode = value);
  $$result.css.add(css$1);
  navbarBackground = $lightMode ? "var(--lightModeSecondary)" : "var(--darkModeSecondary)";
  navbarBoxShadow = $lightMode ? "-5px 5px 0px 2px var(--darkGreenText)" : "-5px 5px 0px 2px var(--darkText)";
  textColor = $lightMode ? "var(--darkGreenText)" : "var(--lightText)";
  $$unsubscribe_lightMode();
  return `<nav class="mobile svelte-g34zsi" style="${"background-color: " + escape(navbarBackground, true) + "; box-shadow: " + escape(navbarBoxShadow, true) + ";"}"><a href="#home" class="svelte-g34zsi"><img class="icon-image svelte-g34zsi"${add_attribute("src", $lightMode ? "/light-home.png" : "/dark-home.png", 0)} alt="home" height="35" width="35"></a>

	<a href="#projects-m" class="svelte-g34zsi"><img class="icon-image svelte-g34zsi"${add_attribute(
    "src",
    $lightMode ? "/light-projects.png" : "/dark-projects.png",
    0
  )} alt="projects" height="35" width="35"></a>

	<a href="#contact-m" class="svelte-g34zsi"><img class="icon-image svelte-g34zsi"${add_attribute("src", $lightMode ? "/light-contact.png" : "/dark-contact.png", 0)} alt="contact" height="35" width="35"></a>

	<img${add_attribute("src", $lightMode ? "/sun.png" : "/moon.png", 0)}${add_attribute("alt", $lightMode ? "sun" : "moon", 0)} height="70" width="70" class="svelte-g34zsi"></nav>

<nav class="desktop svelte-g34zsi" style="${"background-color: " + escape(navbarBackground, true) + "; box-shadow: " + escape(navbarBoxShadow, true) + ";"}"><div class="left-nav svelte-g34zsi"><a href="#home" class="svelte-g34zsi"><div class="nav-text svelte-g34zsi" style="${"color: " + escape(textColor, true)}">HOME
			</div></a></div>

	<div class="right-nav svelte-g34zsi"><a href="#projects" class="svelte-g34zsi"><div class="nav-text svelte-g34zsi" style="${"color: " + escape(textColor, true)}">PROJECTS
			</div></a>

		<a href="#contact" class="svelte-g34zsi"><div class="nav-text svelte-g34zsi" style="${"color: " + escape(textColor, true)}">CONTACT
			</div></a>

		<img${add_attribute("src", $lightMode ? "/sun.png" : "/moon.png", 0)}${add_attribute("alt", $lightMode ? "sun" : "moon", 0)} height="70" width="70" class="svelte-g34zsi"></div>
</nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-m3m00r{display:flex;flex-direction:column;margin:0;padding:0}main.svelte-m3m00r{width:100%;height:100%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lightMode, $$unsubscribe_lightMode;
  $$unsubscribe_lightMode = subscribe(lightMode, (value) => $lightMode = value);
  $$result.css.add(css);
  $$unsubscribe_lightMode();
  return `<div class="app svelte-m3m00r">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

	<main${add_attribute(
    "style",
    $lightMode ? "background-color: var(--lightModePrimary);" : "background-color: var(--darkModePrimary);",
    0
  )} class="svelte-m3m00r">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
