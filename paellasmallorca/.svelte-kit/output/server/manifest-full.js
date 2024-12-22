export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "paellasmallorca/_app",
	assets: new Set(["favicon.png","images/1.png","images/2.png","images/3.png","images/Logo.png","images/LogoFull.png","images/LogoFullLg.png","images/LogoSimple.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BEpPyK1b.js","app":"_app/immutable/entry/app.Cu_q6eQv.js","imports":["_app/immutable/entry/start.BEpPyK1b.js","_app/immutable/chunks/entry.DHXQnHKt.js","_app/immutable/chunks/runtime.c6cF1dC6.js","_app/immutable/chunks/paths.2m6Akj7J.js","_app/immutable/entry/app.Cu_q6eQv.js","_app/immutable/chunks/runtime.c6cF1dC6.js","_app/immutable/chunks/store.5P63JBDA.js","_app/immutable/chunks/disclose-version.CigVdElO.js","_app/immutable/chunks/props.tciT8f_Y.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/whatwedo",
				pattern: /^\/whatwedo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/whereweare",
				pattern: /^\/whereweare\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/whoweare",
				pattern: /^\/whoweare\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
