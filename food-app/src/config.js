import frame1 from "./images/sample/1.png";
import frame2 from "./images/sample/2.png";
import frame3 from "./images/sample/3.png";
import frame1a from "./images/sample/1a.jpg";
import frame2a from "./images/sample/2a.gif";
import frame3a from "./images/sample/3a.png";
import home1 from "./images/Home/home1.jpg";
import home2 from "./images/Home/home2.png";
import home3 from "./images/Home/home3.png";
import home4 from "./images/Home/home4.png";
import home5 from "./images/Home/home5.png";
import homemusic from "./images/music/main.mp3";
import palestine1 from "./images/palestine/palestine1.jpg";
import palestine2 from "./images/palestine/palestine2.png";
import palestine3 from "./images/palestine/palestine3.png";
import palestine4 from "./images/palestine/palestine4.png";

import palestinemusic from "./images/music/palestine.mp3";
import columbiamusic from "./images/music/columbia.mp3";
import indiamusic from "./images/music/india.mp3";

import palestine2a from "./images/palestine2/palestine2a.jpg";
import palestine2b from "./images/palestine2/palestine2b.png";
import palestine2c from "./images/palestine2/palestine2c.png";
import palestine2d from "./images/palestine2/palestine2d.png";
import palestine2daya from "./images/palestine2day/palestine2daya.jpg";
import palestine2dayb from "./images/palestine2day/palestine2dayb.png";
import palestine2dayc from "./images/palestine2day/palestine2dayc.png";
import palestine2dayd from "./images/palestine2day/palestine2dayd.png";

import columbia1a from "./images/columbia1/columbia1a.jpg";

import columbia2a from "./images/columbia2/columbia2a.jpg";
import columbia2b from "./images/columbia2/columbia2b.png";
import columbia2c from "./images/columbia2/columbia2c.png";

import columbia3a from "./images/columbia3/columbia3a.jpg";
import columbia3b from "./images/columbia3/columbia3b.png";

import delhi1a from "./images/delhi1/delhi1a.jpg";
import delhi1b from "./images/delhi1/delhi1b.png";
import delhi1c from "./images/delhi1/delhi1c.png";
import delhi1d from "./images/delhi1/delhi1d.png";

import delhi2a from "./images/delhi2/delhi2a.jpg";

import delhi3a from "./images/delhi3/delhi3a.jpg";
import delhi3b from "./images/delhi3/delhi3b.png";

// add text to container

var config = {
	"containers": [
		{
			"containerId": "H1",
			"frames": [
				{
					"image": frame1,
					"text": "frameE1-1",
				},
				{
					"image": frame2,
					"text": "frameE1-2",
				},
				{
					"image": frame3,
					"text": "frameE1-3",
				}

			],
			"scene": {
				"layers":[
					{
						"order": 1,
						"image": home1,
						"elements": []
					},
					{
						"order": 2,
						"image": home2,
						"elements": []
					},
					{
						"order": 3,
						"image": "",
						"elements": [
						]
					},
					{
						"order": 4,
						"image": "",
						"elements": [
							{
								"name": "india",
								"clickFunction": "changeScene",
								"clickTarget": "I1",
								"image":home4,
								"x":57,
								"y":32,
								"width":352,
								"height":371,
							},
							{
								"name": "india",
								"clickFunction": "changeScene",
								"clickTarget": "I1",
								"image":home3,
								"x":27,
								"y":37,
								"width":742,
								"height":694,
							},
							{
								"name": "india",
								"clickFunction": "changeScene",
								"clickTarget": "I1",
								"image":home5,
								"x":40,
								"y":27,
								"width":166,
								"height":111,
							},
						]
					}
				]
			},
			"music": homemusic,
			"caption": ["Food and Culture", "A Journey Through Memories"]
		},
		{
			"containerId": "P1",
			"frames": [
				{
					"image": frame1a,
					"text": "frameE2-1",
				},
				{
					"image": frame2a,
					"text": "frameE2-2",
				},
				{
					"image": frame3a,
					"text": "frameE2-3",
				}

			],
			"scene": {
				"layers":[
					{
						"order": 1,
						"image": palestine1,
						"elements": []
					},
					{
						"order": 2,
						"image": palestine2,
						"elements": []
					},
					{
						"order": 3,
						"image": palestine3,
						"elements": []
					},
					{
						"order": 4,
						"image": palestine4,
						"elements": []
					}
				]
			},
			"music": palestinemusic,
			"caption": [
				"Lebanon",
				"My family used to meet up once a month to cook together and feast together. We would have a giant barbeque and everyone would eat together at the table. It wasn't just a meal, it was a chance to bond with my family",
				"Falafel: Deep fried balls or patties made with fava beans, chickpeas, or both. It is often eaten as a snack or an appetizer. During Ramadan, it is sometimes eaten in the iftar, the meal that breaks the daily fast after sunset.",
				"Grape leaves wrapped around a rice and meat stuffing. The preparation for it is known to be time consuming, but worth it. The traditional method involves rolling the grape leaves about the size of a person's pinky.",
				"Knafeh: Cheese pastry that is soaked in a sweet, sugar-based syrup. It can be served in pie form or as individually wrapped rolls. The pastry is also typically infused with rose or orange flower water."
			]
		},
		{
			"containerId": "P2day",
			"frames": [
				{
					"image": frame1a,
					"text": "frameE2-1",
				},
				{
					"image": frame2a,
					"text": "frameE2-2",
				},
				{
					"image": frame3a,
					"text": "frameE2-3",
				}

			],
			"scene": {
				"layers":[
					{
						"order": 1,
						"image": palestine2daya,
						"elements": []
					},
					{
						"order": 2,
						"image": palestine2dayb,
						"elements": []
					},
					{
						"order": 3,
						"image": palestine2dayc,
						"elements": []
					},
					{
						"order": 4,
						"image": palestine2dayd,
						"elements": []
					}
				]
			},
			"music": palestinemusic,
			"caption": [
				"Lebanon",
				"My first Ramadan tested me. Even though we had to fast from sunrise until sunset, I felt compelled to break my fast and eat. I really had to dig deep to embrace my tradition, but I found comfort and appreciation for my ummah.",
			]
		},
		{
			"containerId": "P2",
			"frames": [
				{
					"image": frame1a,
					"text": "frameE2-1",
				},
				{
					"image": frame2a,
					"text": "frameE2-2",
				},
				{
					"image": frame3a,
					"text": "frameE2-3",
				}
			],
			"scene": {
				"layers":[
					{
						"order": 1,
						"image": palestine2a,
						"elements": []
					},
					{
						"order": 2,
						"image": palestine2b,
						"elements": []
					},
					{
						"order": 3,
						"image": palestine2c,
						"elements": []
					},
					{
						"order": 4,
						"image": palestine2d,
						"elements": []
					}
				]
			},
			"music": palestinemusic,
			"caption": [
				"Lebanon",
				"After we say that we break our fast with one date and a cup of water as it is easily digested, making them a quick source of energy and nutrients",
				"In Ramadan we ate many types of food including hummus, falafel, kabob, warak enab, shawarma, chicken soup, chicken and beef shawarma, rice and shrimp vegetable egg rolls.",
				"At times there are events where people show up and give food to anyone who is breaking their fast, there are also times where restaurants open up late at night and donate food to those who are breaking their fast. However, most of the time people break their fast with their family and eat together at their own homes as it brings together the family and friends.",
			]
		},
		{
			"containerId": "C1",
			"frames": [],
			"scene": {
				"layers":[
					{
						"order": 1,
						"image": columbia1a,
						"elements": []
					},
					{
						"order": 2,
						"image": columbia1a,
						"elements": []
					},
					{
						"order": 3,
						"image": columbia1a,
						"elements": []
					},
					{
						"order": 4,
						"image": columbia1a,
						"elements": []
					}
				]
			},
			"music": columbiamusic,
			"caption": [
				"Columbia",
				"As a child, I remember waking up to fresh morcillas for breakfast. My dad would leave really early in the mornings for the Galeria Alameda, our local marketplace, just to buy some for my brother and I once a month. ",
				"Morcillas: Blood sausages that are sometimes also stuffed with rice, onions, and seasoning spices. It is often served as an appetizer known as a 'picada'.",
				"Galleria: Outdoor marketplace where fruits, vegetables, and other foods are bought and sold. Similar to a Farmer's market."
			]
		},
		{
			"containerId": "C2",
			"frames": [],
			"scene": {
				"layers":[
					{
						"order": 1,
						"image": columbia2a,
						"elements": []
					},
					{
						"order": 2,
						"image": columbia2b,
						"elements": []
					},
					{
						"order": 3,
						"image": columbia2c,
						"elements": []
					},
					{
						"order": 4,
						"image": "",
						"elements": []
					}
				]
			},
			"music": columbiamusic,
			"caption": [
				"Columbia",
				"One time, we went on a family trip to meet with all of my dad's family. Someone rented a house in the country and everyone spent the weekend there.",
				"One of my aunts cooked really well and she made enough morcillas for everyone for the whole weekend and it was crazy. I remember eating morcillas all the time for those three days: breakfast, lunch and dinner.",
			]
		},
		{
			"containerId": "C3",
			"frames": [],
			"scene": {
				"layers":[
					{
						"order": 1,
						"image": columbia3a,
						"elements": []
					},
					{
						"order": 2,
						"image": columbia3b,
						"elements": []
					},
					{
						"order": 3,
						"image": columbia3a,
						"elements": []
					},
					{
						"order": 4,
						"image": columbia3b,
						"elements": []
					}
				]
			},
			"music": columbiamusic,
			"caption": [
				"Columbia",
				"My grandmother loves empanadas -- like a lot. But then again, so do my brother and I. Every once in awhile, my mom would treat my brother, my grandma, and me to empanadas. I still remember sitting around a small plastic table while we stuffed our faces and ate to our heart's content… of empanadas. ",
				"My grandmother loves empanadas -- like a lot. But then again, so do my brother and I. Every once in awhile, my mom would treat my brother, my grandma, and me to empanadas. I still remember sitting around a small plastic table while we stuffed our faces and ate to our heart's content… of empanadas. ",
			]
		},
		{
			"containerId": "I1",
			"frames": [],
			"scene": {
				"layers":[
					{
						"order": 1,
						"image": delhi1a,
						"elements": []
					},
					{
						"order": 2,
						"image": delhi1b,
						"elements": []
					},
					{
						"order": 3,
						"image": delhi1c,
						"elements": []
					},
					{
						"order": 4,
						"image": delhi1d,
						"elements": []
					}
				]
			},
			"music": indiamusic,
			"caption": [
				"India",
				"My grandfather used to carry me on his shoulders when we walked to the park, and I would get to play around the park with him. There were always different vendors near the park and my grandfather would bargain for a fresh coconut. It was so cool watching the vendors skillfully crack open coconuts.",
				"My grandfather used to carry me on his shoulders when we walked to the park, and I would get to play around the park with him. There were always different vendors near the park and my grandfather would bargain for a fresh coconut. It was so cool watching the vendors skillfully crack open coconuts.",
			]
		},
		{
			"containerId": "I2",
			"frames": [],
			"scene": {
				"layers":[
					{
						"order": 1,
						"image": delhi2a,
						"elements": []
					},
					{
						"order": 2,
						"image": "",
						"elements": []
					},
					{
						"order": 3,
						"image": "",
						"elements": []
					},
					{
						"order": 4,
						"image": "",
						"elements": []
					}
				]
			},
			"music": indiamusic,
			"caption": [
				"India",
				"There was a big street market near my house that my whole family would go together. My mom bought groceries but we would make a trip out of it: my bua and chachu would buy foods from the stalls for us and we would all eat ice cream together. Even though everyone’s grown up now, I still love to go with my cousins and walk around the market.",
				"There was a big street market near my house that my whole family would go together. My mom bought groceries but we would make a trip out of it: my bua and chachu would buy foods from the stalls for us and we would all eat ice cream together. Even though everyone’s grown up now, I still love to go with my cousins and walk around the market.",
			]
		},
		{
			"containerId": "I3",
			"frames": [],
			"scene": {
				"layers":[
					{
						"order": 1,
						"image": delhi3a,
						"elements": []
					},
					{
						"order": 2,
						"image": delhi3b,
						"elements": []
					},
					{
						"order": 3,
						"image": "",
						"elements": []
					},
					{
						"order": 4,
						"image": "",
						"elements": []
					}
				]
			},
			"music": indiamusic,
			"caption": [
				"India",
				"Every other week, I went to to my Nani’s house and met with my extended family for dinner. My cousins and I would play cricket or tag in the garden while my Nani cooked. I remember smelling the delicious food from outside and watching her cook. Sometimes, there were so many people that the kids would continue to play while the adults started eating, and then we would join mid-meal.",
				"Every other week, I went to to my Nani’s house and met with my extended family for dinner. My cousins and I would play cricket or tag in the garden while my Nani cooked. I remember smelling the delicious food from outside and watching her cook. Sometimes, there were so many people that the kids would continue to play while the adults started eating, and then we would join mid-meal.",
			]
		},
	]
}
export default config
