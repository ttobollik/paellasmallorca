import { T as stringify, V as slot } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function Header($$payload) {
  $$payload.out += `<header class="bg-gray-100 shadow p-4"><nav class="flex justify-between items-center"><ul class="hidden md:flex space-x-4"><li><a${attr("href", `${stringify(base)}/`)} class="text-gray-700 hover:text-blue-500">Home</a></li> <li><a${attr("href", `${stringify(base)}/contact`)} class="text-gray-700 hover:text-blue-500">Contact</a></li> <li><a${attr("href", `${stringify(base)}/gallery`)} class="text-gray-700 hover:text-blue-500">Gallery</a></li></ul> <button class="block md:hidden text-gray-700 focus:outline-none" aria-label="Open navigation menu"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button> <a${attr("href", `${stringify(base)}/`)} class="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 font-medium transition-all duration-200">Book Now</a></nav></header>`;
}
function _layout($$payload, $$props) {
  Header($$payload);
  $$payload.out += `<!----> <main class="px-8 py-2"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main>`;
}
export {
  _layout as default
};
