import { Z as bind_props, T as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function Section($$payload, $$props) {
  let title = $$props["title"];
  let description = $$props["description"];
  let image = $$props["image"];
  let link = $$props["link"];
  $$payload.out += `<section class="mb-8 p-4 border rounded-lg shadow flex flex-col items-center text-center"><img${attr("src", `${base}/${image}`)}${attr("alt", title)} class="mt-4 w-full h-[200px] object-cover rounded"> <h2 class="text-xl font-semibold my-2">${escape_html(title)}</h2> <p class="text-gray-700 mb-4">${escape_html(description)}</p> <a${attr("href", `${base}/${link}`)} class="bg-teal-500 text-white py-2 px-4 w-full rounded hover:bg-teal-600 focus:ring focus:ring-teal-300 font-medium transition-all duration-200">Learn More</a></section>`;
  bind_props($$props, { title, description, image, link });
}
function _page($$payload, $$props) {
  const prerender = true;
  $$payload.out += `<div class="flex justify-center my-4"><img${attr("src", `${stringify(base)}/images/LogoFullLg.png`)} alt="Paella Experience Logo" class="h-48"></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;
  Section($$payload, {
    title: "Who Are We",
    description: "Learn about our story and vision.",
    image: "images/1.png",
    link: "whoweare"
  });
  $$payload.out += `<!----> `;
  Section($$payload, {
    title: "What Do We Do",
    description: "Discover the amazing services we provide.",
    image: "images/2.png",
    link: "whatwedo"
  });
  $$payload.out += `<!----> `;
  Section($$payload, {
    title: "Where Are We",
    description: "Find out where you can join us.",
    image: "images/3.png",
    link: "whereweare"
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { prerender });
}
export {
  _page as default
};
