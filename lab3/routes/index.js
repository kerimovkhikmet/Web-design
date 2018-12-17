var express = require('express');
var router = express.Router();
var fs = require('fs');

var _tree = [
	"Корінь",
	[
		["Кольори",
			[
				["Червоний",[]],
				["Зелений",[]],
				["Синій",[]],
				["Жовтий",[]]	
			]
		],
		["Предмети",
			[
				["Комп.графіка",
					[
						["доц. Клятченко Я. М.",
							[["107-15 Лаб",[]]]
						]
					]
				],
				["ВЕБ-дизайн",
					[
						["доц. Петрашенко А. В.",
							[["511-19 Лек",[]]]
						]
					]
				],
				["Арх. комп'ютерів",[]],
				["Комп. схемотехіка",[]]
			]
		],
		["Файли",
			[
				["index.html",[]],
				["main.js",[]]
			]
		],
		["Автор",
			[
				["Коваленко В.О.", []]	
			]
		]
	]
];	


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/data', function(req, res) {
	if (req.query.data == undefined){
	var obj;
	fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
		res.send(JSON.stringify( ["Помилка",[]] ));
    } else {
    res.send(data);
	}});	
	//res.send(JSON.stringify(_tree));
	}
	else{
		//_tree = JSON.parse(req.query.data);
		fs.writeFile('data.json',req.query.data, 'utf8', () => {}); 
		res.send(true);	
	}
});


module.exports = router;
