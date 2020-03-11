const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://workshop.buildinthe.cloud/connect/getting-started",
		"gaTrackingId": null,
		"trailingSlash": false
	},
	"header": {
		"logo": "https://zimtech.awsapps.com/connect/home",
		"logoLink": "https://www.buildinthe.cloud",
		"title": "Amazon Connect - Getting Started Workshop",
		"githubUrl": "",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "introduction",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction", // add trailing slash if enabled above
			"/connectSetup",
			"/firstInboundFlow",
			"/addingInteractivity",
			"/validatingOurLogging",
			"/enablingAgents"
		],
    	"collapsedNav": [
			  "/connectSetup", // add trailing slash if enabled above
			  "/firstInboundFlow",
			  "/addingInteractivity",
			  "/validatingOurLogging",
			  "/enablingAgents"
    	],
		"links": [
			{ "text": "Amazon Connect", "link": "https://aws.amazon.com/connect/"},
			{ "text": "Amazon Connect Console", "link": "https://console.aws.amazon.com/connect/home"},
			{ "text": "Build In The Cloud", "link": "https://www.buildinthe.cloud"},
			{ "text": "AWS Programming & Tools", "link": "https://www.meetup.com/Melbourne-AWS-Programming-and-Tools-Meetup/"}
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Amazon Connect - Getting Started Workshop",
		"description": "A workshop designed to get users up and running with Amazon Connect",
		"ogImage": null,
		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Amazon Connect Getting Started",
			"short_name": "CEACGettingStarted",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
