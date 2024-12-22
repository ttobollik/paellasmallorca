import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.CKflF48N.js","_app/immutable/chunks/disclose-version.CigVdElO.js","_app/immutable/chunks/runtime.c6cF1dC6.js","_app/immutable/chunks/legacy.Dz6pyQS0.js","_app/immutable/chunks/attributes.CzhSTXRl.js","_app/immutable/chunks/paths.2m6Akj7J.js"];
export const stylesheets = ["_app/immutable/assets/0.ZLcbcCpS.css"];
export const fonts = [];
