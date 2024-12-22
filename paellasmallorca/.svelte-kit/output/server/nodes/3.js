

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CN15LFeE.js","_app/immutable/chunks/disclose-version.CigVdElO.js","_app/immutable/chunks/runtime.c6cF1dC6.js","_app/immutable/chunks/legacy.Dz6pyQS0.js"];
export const stylesheets = [];
export const fonts = [];
