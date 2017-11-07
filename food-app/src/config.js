import frame1 from "./images/sample/1.png";
import frame2 from "./images/sample/2.png";
import frame3 from "./images/sample/3.png";
import frame1a from "./images/sample/1a.jpg";
import frame2a from "./images/sample/2a.gif";
import frame3a from "./images/sample/3a.png";

var config = {
	"containers": [
		{
			"containerId": "E1",
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
						"image": "http://via.placeholder.com/1000x500",
						"elements": []
					},
					{
						"order": 2,
						"image": "http://via.placeholder.com/1000x600",
						"elements": []
					},
					{
						"order": 3,
						"image": "http://via.placeholder.com/1000x700",
						"elements": []
					},
					{
						"order": 4,
						"image": "http://via.placeholder.com/1000x800",
						"elements": [
							{
								"name": "person1"
							}
						]
					}
				]
			},
			"music": "soundcloudlink",
		},
		{
			"containerId": "E2",
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
						"image": "http://via.placeholder.com/1000x500",
						"elements": []
					},
					{
						"order": 2,
						"image": "http://via.placeholder.com/1000x500",
						"elements": []
					},
					{
						"order": 3,
						"image": "http://via.placeholder.com/1000x500",
						"elements": []
					},
					{
						"order": 4,
						"image": "http://via.placeholder.com/1000x500",
						"elements": [
							{
								"name": "person2"
							}
						]
					}
				]
			},
			"music": "soundcloudlink",
		},

	]
}
export default config
