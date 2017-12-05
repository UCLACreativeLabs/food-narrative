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
				"My family used to meet up once a month to cook together and feast together. We would have a giant barbeque and everyone would eat together at the table. It wasn’t just a meal, it was a chance to bond with my family",
				"Falafel: Deep fried balls or patties made with fava beans, chickpeas, or both. It is often eaten as a snack or an appetizer. During Ramadan, it is sometimes eaten in the iftar, the meal that breaks the daily fast after sunset.",
				"Grape leaves wrapped around a rice and meat stuffing. The preparation for it is known to be time consuming, but worth it. The traditional method involves rolling the grape leaves about the size of a person’s pinky.",
				"Knafeh: Cheese pastry that is soaked in a sweet, sugar-based syrup. It can be served in pie form or as individually wrapped rolls. The pastry is also typically infused with rose or orange flower water."
			]
		},

	]
}
export default config
