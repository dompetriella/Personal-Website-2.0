export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dark-contact.png","dark-home.png","dark-projects.png","fonts/Alata-Regular.ttf","fullmoon.png","light-contact.png","light-home.png","light-projects.png","moon.png","sun.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a777773f.js","imports":["_app/immutable/entry/start.a777773f.js","_app/immutable/chunks/index.c6eae6a2.js","_app/immutable/chunks/singletons.bb193384.js","_app/immutable/chunks/index.f1b6d812.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.9b15d090.js","imports":["_app/immutable/entry/app.9b15d090.js","_app/immutable/chunks/index.c6eae6a2.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
