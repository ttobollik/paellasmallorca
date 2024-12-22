

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.B6jOLxiJ.js","_app/immutable/chunks/disclose-version.CigVdElO.js","_app/immutable/chunks/runtime.c6cF1dC6.js","_app/immutable/chunks/legacy.Dz6pyQS0.js"];
export const stylesheets = [];
export const fonts = [];
