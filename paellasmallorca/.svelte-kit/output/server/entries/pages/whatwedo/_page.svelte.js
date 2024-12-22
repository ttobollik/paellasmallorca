import { T as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<h2 class="text-3xl font-bold mb-4">What we do</h2> <p class="text-gray-700 mb-4">We are passionate about creating the best paella experiences in Mallorca. Learn more about our story, team, and values.</p> <img${attr("src", `${stringify(base)}/images/1.png`)} alt="Who Are We" class="rounded-lg shadow w-full">`;
}
export {
  _page as default
};
