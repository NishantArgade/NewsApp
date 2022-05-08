import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component"; //vertical scrolling/loading 


export default class News extends Component {

	static defaultProps = {
		pageSize: 6,
		country: "in",
		category: "general"
	}
	static propsTypes = {
		pageSize: PropTypes.number,
		country: PropTypes.string,
		category: PropTypes.string
	}

	articles = [
		{
			"source": {
				"id": "reuters",
				"name": "Reuters"
			},
			"author": "Reuters Editorial",
			"title": "Apple sues Israeli spyware firm NSO Group  Reuters",
			"description": "Apple said on Tuesday it has filed a lawsuit against Israeli cyber firm NSO Group and its parent company OSY Technologies for alleged surveillance and targeting of U.S. Apple users with its Pegasus spyware.",
			"url": "https://www.reuters.com/video/watch/idPEwC?now=true",
			"urlToImage": "https://ajo.prod.reuters.tv/api/v2/img/619db4f1e4b09631b0e43acc1637725425580?location=LANDSCAPE",
			"publishedAt": "20211124T06:23:25Z",
			"content": "Posted \r\nApple said on Tuesday it has filed a lawsuit against Israeli cyber firm NSO Group and its parent company OSY Technologies for alleged surveillance and targeting of U.S. Apple users with its … [+15 chars]"
		},
		{
			"source": {
				"id": "reuters",
				"name": "Reuters"
			},
			"author": "Reuters Editorial",
			"title": "Apple sues Israeli spyware company NSO Group  Reuters",
			"description": "Apple said on Tuesday it has filed a lawsuit against Israeli cyber firm NSO Group and its parent company OSY Technologies for alleged surveillance and targeting of U.S. Apple users with its Pegasus spyware.  Flora BradleyWatson reports.",
			"url": "https://www.reuters.com/video/watch/idOVF4YQ2DN",
			"urlToImage": "https://static.reuters.com/resources/r/?d=20211124&i=OVF4YQ2DN&r=OVF4YQ2DN&t=2",
			"publishedAt": "20211124T06:43:14Z",
			"content": "Posted \r\nApple said on Tuesday it has filed a lawsuit against Israeli cyber firm NSO Group and its parent company OSY Technologies for alleged surveillance and targeting of U.S. Apple users with its … [+45 chars]"
		},
		{
			"source": {
				"id": "reuters",
				"name": "Reuters"
			},
			"author": null,
			"title": "China Oct smartphone shipments up 30.6% y/y, likely driven by iPhone  Reuters",
			"description": "Shipments of smartphones within China rose 30.6% yearonyear to 32.7 million handsets in October, the China Academy of Information and Communications (CAICT) reported late on Tuesday.",
			"url": "https://www.reuters.com/technology/chinaoctsmartphoneshipmentsup306yylikelydrivenbyiphone20211124/",
			"urlToImage": "https://www.reuters.com/resizer/0pn6xMGITbqhffUrL_vie7rP2hU=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/SWOHMXTPYJNZNEZZ2GLBO2ABDY.jpg",
			"publishedAt": "20211124T04:55:00Z",
			"content": "SHANGHAI, Nov 24 (Reuters)  Shipments of smartphones within China rose 30.6% yearonyear to 32.7 million handsets in October, the China Academy of Information and Communications (CAICT) reported la… [+1359 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "MacRumors"
			},
			"author": "Eric Slivka",
			"title": "TSMC to Begin Producing AppleDesigned 5G Modems for iPhones in 2023",
			"description": "Apple's main chip manufacturing partner TSMC will beginning producing Apple's first inhouse 5G modem chips for the iPhone in 2023, according to a report from Nikkei Asia. The move, which has been under development for several years and enhanced by Apple's 20…",
			"url": "https://www.macrumors.com/2021/11/23/tsmcapple5gmodem2023/",
			"urlToImage": "https://images.macrumors.com/t/7FWh5ByskU5VH_lm9RuaVIWhCbs=/1810x/articlenew/2021/05/Apple5GModemFeatureTriad.jpg",
			"publishedAt": "20211124T03:37:45Z",
			"content": "Apple's main chip manufacturing partner TSMC will beginning producing Apple's first inhouse 5G modem chips for the iPhone in 2023, according to a report from Nikkei Asia. The move, which has been un… [+1525 chars]"
		},
		{
			"source": {
				"id": "businessinsider",
				"name": "Business Insider"
			},
			"author": "wantonelli@insider.com (William Antonelli)",
			"title": "How to back up an iPhone to iCloud, your computer, or an external hard drive",
			"description": "You can back up your iPhone's data and make sure it's safe with iCloud, or using a connected Mac or PC.",
			"url": "https://www.businessinsider.com/howtobackupiphone",
			"urlToImage": "https://i.insider.com/5ff62873d184b30018aad62e?width=1200&format=jpeg",
			"publishedAt": "20211124T00:10:20Z",
			"content": "When was the last time you backed up your iPhone? Hopefully it wasn't too long ago otherwise, you're one accident away from losing a lot of your data.\r\nExperts recommend keeping all of your data back… [+4980 chars]"
		},
		{
			"source": {
				"id": "thenextweb",
				"name": "The Next Web"
			},
			"author": "Napier Lopez",
			"title": "The Pixel 6 just launched, but Pixel 6a leaks already look great",
			"description": "The Pixel 6 and Pixel 6 Pro may have just launched — heck even the Pixel 5a only arrived in August — but rumors and leaks about the Pixel 6a are already making the rounds. Based on what we (think we) know so far, the Pixel 6a is shaping up to be a very attrac…",
			"url": "https://thenextweb.com/news/pixel6aeverythingweknow",
			"urlToImage": "https://imgcdn.tnwcdn.com/image/plugged?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2021%2F11%2FGooglePixel6andPixel6Pro4of5e1637723799262.jpg&signature=09a7a77f2b7f11ac3110b307e37783aa",
			"publishedAt": "20211124T03:26:28Z",
			"content": "The Pixel 6 and Pixel 6 Pro may have just launched heck even the Pixel 5a only arrived in August but rumors and leaks about the Pixel 6a are already making the rounds. Based on what we (think we) kno… [+6416 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "Apple Newsroom"
			},
			"author": "John Gruber",
			"title": "The Apple v. NSO Group Complaint (PDF)",
			"description": null,
			"url": "https://www.apple.com/newsroom/pdfs/Apple_v_NSO_Complaint_112321.pdf",
			"urlToImage": null,
			"publishedAt": "20211124T00:39:16Z",
			"content": "The opening paragraph:\n\n\n Defendants are notorious hackers — amoral 21st century\nmercenaries who have created highly sophisticated\ncybersurveillance machinery that invites routine and flagrant\nabuse… [+491 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "heise online"
			},
			"author": "Frank Schräer",
			"title": "Mittwoch: Apple zieht SpywareEntwickler vor Gericht, neue ElektroZweiräder '22",
			"description": "AppleKlage gegen NSO Group + Nius neue Elektroflotte + Eons Milliarden für grünen Strom + CoronaWarnApp zur Kontaktnachverfolgung + Atomreaktor für den Mond",
			"url": "https://www.heise.de/news/MittwochAppleziehtSpywareEntwicklervorGerichtneueElektroZweiraeder226275222.html",
			"urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/3/2/1/9/4/2/4/mittwochf53d7362f153a7c8.webp",
			"publishedAt": "20211124T05:30:00Z",
			"content": "Die PegasusSpyware auf iPhones hat Apple zur Klage gegen die Entwickler dieser Überwachungssoftware bewegt. Der Softwarehersteller ist sich aber keiner Schuld bewusst, denn er liefere nur an Regieru… [+3408 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "heise online"
			},
			"author": "Sebastian Trepesch",
			"title": "heise+ | Stromfresser im AppleHaushalt finden: Im Homeoffice Energie und Geld sparen",
			"description": "Wir helfen Ihnen, die Stromverbraucher im Haushalt einzuordnen und liefern Tipps für Einsparungen. Davon profitieren Geldbeutel und Umwelt.",
			"url": "https://www.heise.de/ratgeber/StromfresserimAppleHaushaltfindenImHomeofficeEnergieundGeldsparen5049164.html",
			"urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/3/0/5/3/1/8/1/Bildschirmfoto_20210208_um_185743fe9c251e5ed1.png",
			"publishedAt": "20211124T06:00:00Z",
			"content": "Inhaltsverzeichnis\r\nDie Energiepreise explodieren im Winter 2021/2022. Ein guter Zeitpunkt also, um den Energiebedarf in den eigenen vier Wänden zu optimieren und so die Kosten zu senken. Wie und wom… [+2132 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "9to5Mac"
			},
			"author": "Filipe Espósito",
			"title": "Mozilla to end support for Firefox Lockwise password manager in December",
			"description": "Mozilla, the company behind the popular web browser Firefox, recently announced that it will end support for its Firefox Lockwise password manager next month. Although the app will continue to work, it will no longer be available for download and will not rec…",
			"url": "https://9to5mac.com/2021/11/23/mozillatoendsupportforfirefoxlockwisepasswordmanagerindecember/",
			"urlToImage": "https://i2.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2021/11/firefox.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
			"publishedAt": "20211124T00:58:39Z",
			"content": "Mozilla, the company behind the popular web browser Firefox, recently announced that it will end support for its Firefox Lockwise password manager next month. Although the app will continue to work, … [+1666 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "9to5Mac"
			},
			"author": "Sponsored Post",
			"title": "Roborock smart vacuums and mops see massive price drops for Black Friday at up to $290 off",
			"description": "The Roborock Black Friday smart robotic vacuum and mop deals have arrived with some of the best prices ever. Roborock has quickly become one of the best options in the robotic cleaning business, and just about all of its most popular models are now much more …",
			"url": "https://9to5mac.com/2021/11/23/roborocksmartvacuumsmopsblackfriday/",
			"urlToImage": "https://i1.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2021/11/RoborockS7BlackFriday1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
			"publishedAt": "20211124T00:45:58Z",
			"content": "The Roborock Black Friday smart robotic vacuum and mop deals have arrived with some of the best prices ever. Roborock has quickly become one of the best options in the robotic cleaning business, and … [+6519 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "Abduzeedo.com"
			},
			"author": "AoiroStudio",
			"title": "Finch Movie — 'Jeff' Concept Art",
			"description": "Finch Movie — 'Jeff' Concept Art\n \n\n AoiroStudio1123—21\n This past weekend, I was able to watch the movie 'Finch' starring Tom Hanks on Apple TV+. In the movie, Tom Hanks's character is named Finch and he shares the screen with a robot named 'Jeff'. Not to gi…",
			"url": "https://abduzeedo.com/node/87003",
			"urlToImage": null,
			"publishedAt": "20211124T00:06:04Z",
			"content": "This past weekend, I was able to watch the movie 'Finch' starring Tom Hanks on Apple TV+. In the movie, Tom Hanks's character is named Finch and he shares the screen with a robot named 'Jeff'. Not to… [+557 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "Gizmodo.jp"
			},
			"author": "塚本直樹",
			"title": "うわさのアップルカー、僕らは所有できない!?",
			"description": "長らくテック業界にて噂されてきた、Apple（アップル）が独自の自動車「Apple Car（アップルカー）」を開発しているとの情報。こちらについて、アップルカーは購入形式ではなくシェアサービスとして登場するとの予測が、海外アナリストから伝えられているんです。",
			"url": "https://www.gizmodo.jp/2021/11/applecarissharingvehicle.html",
			"urlToImage": "https://assets.mediaplatform.com/gizmodo/dist/images/2021/11/22/Apple_carw960.jpg",
			"publishedAt": "20211124T00:00:00Z",
			"content": "Copyright © mediagene Inc. All Rights Reserved."
		},
		{
			"source": {
				"id": null,
				"name": "Gizmodo.jp"
			},
			"author": "塚本直樹",
			"title": "アップルが最新デジカメを作ったら、こんなデザインに？",
			"description": "アップルが独自イヤホンをデザインしたらこんな感じかも…というコンセプト画像「Apple Camera」が、海外にて公開されています。",
			"url": "https://www.gizmodo.jp/2021/11/applecameraconcept.html",
			"urlToImage": "https://assets.mediaplatform.com/gizmodo/dist/images/2021/11/22/FElBgBfVcAELG4sw960.jpeg",
			"publishedAt": "20211124T01:00:00Z",
			"content": "Copyright © mediagene Inc. All Rights Reserved."
		},
		{
			"source": {
				"id": null,
				"name": "Gizmodo.jp"
			},
			"author": "岡本玄介",
			"title": "ちゃんと眠れてる？ 内蔵センサーで睡眠の質を測る折りたたみ式ベッド。電動リクライニングで起きるの楽チン",
			"description": "「スリープクオリティベッド AXBEA701」がATEXより発売。マットレスが睡眠状態を計測して、スマホアプリでデータ確認できる。",
			"url": "https://www.gizmodo.jp/2021/11/atexsleepqualitybedaxbea701.html",
			"urlToImage": "https://assets.mediaplatform.com/gizmodo/dist/images/2021/11/22/211123_sleepbedw960.jpg",
			"publishedAt": "20211124T06:00:00Z",
			"content": "AXBEA701ATEX\r\nVideo: ATEXmovie / YouTube\r\n2\r\nImage: ATEX\r\n6520 AXBEA701121088000\r\nApple Watch\r\nSource: YouTube, ATEX (1, 2) via"
		},
		{
			"source": {
				"id": "engadget",
				"name": "Engadget"
			},
			"author": "Kiyoshi Tane",
			"title": "アップル、米国での「iPhoneデジタル免許証」を2022年初頭まで延期",
			"description": "アップルは、米国の一部の州でiPhoneやApple Watchに運転免許証や州のID（身分証明書）カードを追加できる機能を2022年初頭まで延期したことを静かに発表しました。",
			"url": "https://japanese.engadget.com/appledelaysdigitalid2022062100510.html",
			"urlToImage": "https://s.yimg.com/os/creatruploadedimages/202111/b83dc3804ce511ecbeefa587546a656f",
			"publishedAt": "20211124T06:21:00Z",
			"content": "iOS 15iPhoneApple WatchID20222021\r\n9\r\n1124iOS 15Coming early 20222022MacRumorsiOS 15.2\r\nIDTSA\r\nWalletIDiPhoneApple WatchIDTSAID\r\nIDWalletFace ID\r\nID\r\nApple Watch\r\nSource:Apple\r\nvia:MacRumors"
		},
		{
			"source": {
				"id": null,
				"name": "Journal du geek"
			},
			"author": "Redac JDGe",
			"title": "OnePlus 9 : AliExpress attendait Black Friday, il casse le prix de 70%",
			"description": "Les OnePlus 9 et OnePlus 9 Pro sont les deux derniers smartphones premium de la marque du même nom. Pour Black Friday, AliExpress humilie (presque) les appareils avec des réductions entre 50 et 70% par rapport à leur prix de sortie.\nOnePlus 9 : AliExpress att…",
			"url": "https://www.journaldugeek.com/2021/11/24/oneplus9aliexpressattendaitblackfridayilcasseleprixde70/",
			"urlToImage": "https://www.journaldugeek.com/content/uploads/2021/11/oneplus9.jpg",
			"publishedAt": "20211124T06:30:21Z",
			"content": "Les OnePlus 9 et OnePlus 9 Pro sont les deux derniers smartphones premium de la marque du même nom. Pour Black Friday, AliExpress humilie (presque) les appareils avec des réductions entre 50 et 70% p… [+5366 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "Pressecitron"
			},
			"author": "Pressecitron",
			"title": "MacBook Air M1 : Amazon met KO Apple, il sacrifie ses ordinateurs ",
			"description": "Improbable. Les excellents MacBook Air M1 voient leur prix dégringoler sur le site d'Amazon. Pour le Black Friday, le premier ecommerçant de France s'attaque aux marques les plus prestigieuses.",
			"url": "https://www.pressecitron.net/macbookairamazonmetkoappleilsacrifiesesordinateurs/",
			"urlToImage": "https://www.pressecitron.net/app/uploads/2021/01/macbookairm1.jpg",
			"publishedAt": "20211124T06:40:58Z",
			"content": "Si vous connaissez Apple, vous avez déjà remarqué que la marque ne faisait jamais de ristourne. Cela vaut aussi bien pour ses magasins physiques que sur son site officiel. Pendant longtemps, elle int… [+5271 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "HYPEBEAST"
			},
			"author": "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
			"title": "Apple Files Lawsuit Against the Maker of Pegasus Spyware",
			"description": "Apple has filed a lawsuit against the maker of Pegasus spyware, the Israelibased technology firm NSO Group. The company announced the news of the lawsuit on Tuesday, responding to alleged surveillance abuses carried out against Apple users by NSO Group.Accor…",
			"url": "https://hypebeast.com/2021/11/applelawsuitpegasusspywarensogroup",
			"urlToImage": "https://imagecdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F11%2FAppleFilesLawsuitAgainsttheMakerofPegasusSpywaretw.jpg?w=960&cbr=1&q=90&fit=max",
			"publishedAt": "20211124T01:01:17Z",
			"content": "Apple has filed a lawsuit against the maker of Pegasus spyware, the Israelibased technology firm NSO Group. The company announced the news of the lawsuit on Tuesday, responding to alleged surveillan… [+1414 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "Pressecitron"
			},
			"author": "Alix Petit",
			"title": "Black Friday : Amazon humilie ses rivaux, 10 deals ce mercredi (80%)",
			"description": "En ce mercredi de Black Friday, Amazon nous a offert une nouvelle démonstration de sa puissance. Voici les meilleures offres regroupées entre les différents marchands : Amazon, Cdiscount, AliExpress ou Fnac.",
			"url": "https://www.pressecitron.net/blackfridayamazonexploselesprixvoiciles10dealsfousdecemercredi80/",
			"urlToImage": "https://www.pressecitron.net/app/uploads/2021/11/BlackFriday5.jpg",
			"publishedAt": "20211124T05:40:26Z",
			"content": "Alors que Black Friday sur Amazon a démarré, les offres reviennent de plus belle ce mercredi. Face au marchand américain, les acteurs français Fnac, Darty et Cdiscount se battent. AliExpress est auss… [+5439 chars]"
		}
	]
	articles2 =
		[
			{
				"source": {
					"id": "bbc-news",
					"name": "BBC News"
				},
				"author": "BBC News",
				"title": "Channel migrants: UK and France agree need to step up effort against crossings",
				"description": "After at least 27 people die in the Channel, Boris Johnson and Emmanuel Macron say cooperation is needed.",
				"url": "http://www.bbc.co.uk/news/uk-59412329",
				"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E158/production/_121788675_f8a6c166-4aae-4acb-a62e-4b99bfe33f4c.jpg",
				"publishedAt": "2021-11-25T05:37:22.2791732Z",
				"content": "Media caption, BBC Newsnight: Lewis Goodall reports from Dunkirk's new migrant camp.\r\nThe UK and France will keep \"all options on the table\" as they try to stop migrants crossing the Channel. \r\nThe U… [+4074 chars]"
			},
			{
				"source": {
					"id": "bbc-news",
					"name": "BBC News"
				},
				"author": "BBC News",
				"title": "Allahabad High Court: Outrage as court reduces child sex abuse sentence",
				"description": "The Allahabad high court reduced the jail term of the convict from 10 years to seven years.",
				"url": "http://www.bbc.co.uk/news/world-asia-india-59401179",
				"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B5C3/production/_121613564_gettyimages-1065711066-170667a.jpg",
				"publishedAt": "2021-11-25T04:22:21.0157016Z",
				"content": "By Geeta PandeyBBC News, Delhi\r\nImage source, Getty Images\r\nImage caption, An Indian government study suggested that boys were equally at risk of being abused\r\nJust days after India's Supreme Court s… [+4437 chars]"
			},
			{
				"source": {
					"id": "bbc-news",
					"name": "BBC News"
				},
				"author": "BBC News",
				"title": "Germany's Scholz seals deal to end Merkel era",
				"description": "Olaf Scholz will head a three-party coalition with broad plans for transition to a green economy.",
				"url": "http://www.bbc.co.uk/news/world-europe-59399702",
				"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A364/production/_121782814_coalition.jpg",
				"publishedAt": "2021-11-25T03:37:23.5873156Z",
				"content": "Image caption, Olaf Scholz (third from L) presented the deal in Berlin with leaders of the Greens and Free Democrats\r\nOlaf Scholz will head a three-party coalition with broad plans for Germany's tran… [+5267 chars]"
			},
			{
				"source": {
					"id": "bbc-news",
					"name": "BBC News"
				},
				"author": "BBC News",
				"title": "Russian troop build-up: View from Ukraine front line",
				"description": "BBC correspondent Abdujalil Abdurasulov visits eastern Ukraine as soldiers contemplate Russia's military presence at the border nearby.",
				"url": "http://www.bbc.co.uk/news/world-europe-59402658",
				"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4E00/production/_121786991_mediaitem121786990.jpg",
				"publishedAt": "2021-11-25T03:37:16.9327233Z",
				"content": "Nato and the United States are worried about a build-up of Russian troops on its border with eastern Ukraine which has led to speculation over an invasion.\r\nBBC correspondent Abdujalil Abdurasulov ha… [+89 chars]"
			},
			{
				"source": {
					"id": "bbc-news",
					"name": "BBC News"
				},
				"author": "BBC News",
				"title": "Sweden's first female PM resigns hours after appointment",
				"description": "Magdalena Andersson resigns after her coalition partner quit the government in a row over the budget.",
				"url": "http://www.bbc.co.uk/news/world-europe-59400539",
				"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4125/production/_121777661_swede.jpg",
				"publishedAt": "2021-11-25T01:37:21.1171908Z",
				"content": "Image caption, Many MPs gave Magdalena Andersson (right) a standing ovation in the Riksdag earlier on Wednesday\r\nSweden's first ever female prime minister has resigned just hours after she was appoin… [+2873 chars]"
			},
			{
				"source": {
					"id": "bbc-news",
					"name": "BBC News"
				},
				"author": "BBC News",
				"title": "The America I give thanks for (as I depart)",
				"description": "Thanksgiving is the best of America and here's why, writes Jon Sopel in his farewell column.",
				"url": "http://www.bbc.co.uk/news/world-us-canada-59395804",
				"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6C1D/production/_121777672_gettyimages-1339537007.jpg",
				"publishedAt": "2021-11-24T23:52:23.2264207Z",
				"content": "Jon SopelNorth America editor@bbcjonsopelon Twitter\r\nImage source, Getty Images\r\nAcross America in a few hours' time, turkeys will be going into ovens, millions will be hurrying from regional airport… [+7571 chars]"
			},
			{
				"source": {
					"id": "bbc-news",
					"name": "BBC News"
				},
				"author": "BBC News",
				"title": "What I learnt eating at 8,000 Chinese restaurants",
				"description": "David R Chan's decades of dining at 8,000 Chinese eateries has taught him about America and himself.",
				"url": "http://www.bbc.co.uk/news/world-us-canada-59356176",
				"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16989/production/_121735529_b5b58bd4-aec4-4174-8acf-acd686f15123.jpg",
				"publishedAt": "2021-11-24T23:37:22.12775Z",
				"content": "By Zhaoyin FengBBC News\r\nImage source, Courtesy of David R.Chan\r\nImage caption, \r\nMany people in America love Chinese food, but David R Chan is perhaps in a league of his own.\r\nMr Chan, a 72-year-old… [+6887 chars]"
			},
			{
				"source": {
					"id": "bbc-news",
					"name": "BBC News"
				},
				"author": "BBC News",
				"title": "What a young jogger's murder exposes about America",
				"description": "Ahmaud Arbery died in a 'modern-day lynching' - locals say the spectre of racism is always present.",
				"url": "http://www.bbc.co.uk/news/world-us-canada-59410920",
				"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/167B8/production/_121788029_p0b67cdj.jpg",
				"publishedAt": "2021-11-24T23:22:18.4516912Z",
				"content": "Three white men have been found guilty of murdering Ahmaud Arbery in whats been described as a modern-day lynching. \r\nBut the long path to justice exposed a long history of unresolved racial tension … [+284 chars]"
			},
			{
				"source": {
					"id": "bbc-news",
					"name": "BBC News"
				},
				"author": "BBC News",
				"title": "Ahmaud Arbery: Three US men guilty of murdering black jogger",
				"description": "The white men pursued and shot dead Ahmaud Arbery in Georgia in what some called a modern-day lynching.",
				"url": "http://www.bbc.co.uk/news/world-us-canada-59411030",
				"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1322A/production/_121787387_arbery.jpg",
				"publishedAt": "2021-11-24T22:22:21.7880007Z",
				"content": "Media caption, Watch: Key moments from Ahmaud Arbery murder trial\r\nThree men accused of killing a black jogger, Ahmaud Arbery, last year have been found guilty of murder in a trial that has gripped t… [+5163 chars]"
			},
			{
				"source": {
					"id": "bbc-news",
					"name": "BBC News"
				},
				"author": "BBC News",
				"title": "JPMorgan: Boss 'regrets' saying bank will outlast Chinese Communist Party",
				"description": "Jamie Dimon has apologised after saying that his Wall Street bank would outlast China's ruling party.",
				"url": "http://www.bbc.co.uk/news/business-59409508",
				"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A260/production/_121786514_gettyimages-1163276640.jpg",
				"publishedAt": "2021-11-24T22:07:24.1596333Z",
				"content": "Image source, Getty Images\r\nJP Morgan boss Jamie Dimon has apologised after saying his Wall Street bank would outlast China's Communist Party.\r\nThe comments, made at a US event, sparked anger in Chin… [+2496 chars]"
			}

		]

	constructor() {
		super();
		// console.log("hello this is constructonr from news component");
		this.state = {
			totalResults: 0,
			articles: this.articles2,
			loading: false,
			page: 1
		}
	}
	// ComponentDidMount is used to execute the code 
	componentDidMount() {
		this.pageHandler(this.state.page);
	}
	async pageHandler(updPage) {
		this.props.updateProgress(10);
		this.setState({ loading: true });
		this.props.updateProgress(70);
		const result = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${updPage}&pageSize=${this.props.pageSize}`);
		// this.props.updateProgress(9l0);
		const data = await result.json();
		this.props.updateProgress(90);
		this.setState({
			totalResults: data.totalResults,
			articles: data.articles, //for offline use fake api 
			page: updPage,
			loading: false
		})
		this.props.updateProgress(100);
	}
	fetchMoreData = async () => {

		this.setState({ loading: true, page: this.state.page + 1 });
		const result = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`);
		const data = await result.json();

		this.setState({
			totalResults: data.totalResults,
			articles: this.state.articles.concat(data.articles),
			loading: false
		});
	};
	
	render() {
		// console.log("rendering");
		return (
			<div className="container my-3 ">
				<h2 className="text-center mb-5">NewFeed Top Headline</h2>

				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={< Spinner />}
				>
					<div className="container">
						<div className="row">
							{
								this.state.articles.map((ele) => {
									return <div className="col-md-4" key={ele.url}>
										<NewsItem title={ele.title} description={ele.description} ImgURL={ele.urlToImage} newsURL={ele.url} />
									</div>
								})
							}
						</div>
					</div>
				</InfiniteScroll>

				{/* Left Right button */}
				{/* <form action="#" className="d-flex justify-content-between my-3">
					<input type="submit" value="&larr; Previous" className="btn btn-dark" onClick={() => this.pageHandler(this.state.page - 1)} disabled={this.state.page <= 1} />
					<input type="submit" value="Next &rarr;" disabled={this.state.articles.length < this.props.pageSize || this.state.totalResults === this.props.pageSize * this.state.page} className="btn btn-dark" onClick={() => this.pageHandler(this.state.page + 1)} />
				</form> */}
			</div >
		)
	}
}
