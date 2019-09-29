const _ = require('lodash')

module.exports = {
	all: [
		{ "date": "2018-01-01", "region": "RU-ALT", "value": 7.3 },	{ "date": "2017-01-01", "region": "RU-ALT", "value": 6.9 },	{ "date": "2016-01-01", "region": "RU-ALT", "value": 8.6 },	{ "date": "2015-01-01", "region": "RU-ALT", "value": 8.9 },
		{ "date": "2018-01-01", "region": "RU-AMU", "value": 5.1 },	{ "date": "2017-01-01", "region": "RU-AMU", "value": 4.8 },	{ "date": "2016-01-01", "region": "RU-AMU", "value": 5.2 },	{ "date": "2015-01-01", "region": "RU-AMU", "value": 7.7 },
		{ "date": "2018-01-01", "region": "RU-ARK", "value": 4.8 },	{ "date": "2017-01-01", "region": "RU-ARK", "value": 6 },	{ "date": "2016-01-01", "region": "RU-ARK", "value": 5.6 },	{ "date": "2015-01-01", "region": "RU-ARK", "value": 6.1 },
		{ "date": "2018-01-01", "region": "RU-AST", "value": 6 },	{ "date": "2017-01-01", "region": "RU-AST", "value": 5.8 },	{ "date": "2016-01-01", "region": "RU-AST", "value": 5.8 },	{ "date": "2015-01-01", "region": "RU-AST", "value": 8 },
		{ "date": "2018-01-01", "region": "RU-BEL", "value": 4.9 },	{ "date": "2017-01-01", "region": "RU-BEL", "value": 5 },	{ "date": "2016-01-01", "region": "RU-BEL", "value": 6.2 },	{ "date": "2015-01-01", "region": "RU-BEL", "value": 6.3 },
		{ "date": "2018-01-01", "region": "RU-BRY", "value": 4 },	{ "date": "2017-01-01", "region": "RU-BRY", "value": 8.2 },	{ "date": "2016-01-01", "region": "RU-BRY", "value": 7.7 },	{ "date": "2015-01-01", "region": "RU-BRY", "value": 7.9 },
		{ "date": "2018-01-01", "region": "RU-VLA", "value": 4.9 },	{ "date": "2017-01-01", "region": "RU-VLA", "value": 5.7 },	{ "date": "2016-01-01", "region": "RU-VLA", "value": 6.2 },	{ "date": "2015-01-01", "region": "RU-VLA", "value": 6.7 },
		{ "date": "2018-01-01", "region": "RU-VGG", "value": 4.9 },	{ "date": "2017-01-01", "region": "RU-VGG", "value": 4.2 },	{ "date": "2016-01-01", "region": "RU-VGG", "value": 5.9 },	{ "date": "2015-01-01", "region": "RU-VGG", "value": 6.4 },
		{ "date": "2018-01-01", "region": "RU-VLG", "value": 5.1 },	{ "date": "2017-01-01", "region": "RU-VLG", "value": 6.3 },	{ "date": "2016-01-01", "region": "RU-VLG", "value": 6.6 },	{ "date": "2015-01-01", "region": "RU-VLG", "value": 5.8 },
		{ "date": "2018-01-01", "region": "RU-VOR", "value": 4.7 },	{ "date": "2017-01-01", "region": "RU-VOR", "value": 4.7 },	{ "date": "2016-01-01", "region": "RU-VOR", "value": 4.9 },	{ "date": "2015-01-01", "region": "RU-VOR", "value": 4.9 },
		{ "date": "2018-01-01", "region": "RU-MOW", "value": 5.3 },	{ "date": "2017-01-01", "region": "RU-MOW", "value": 5.7 },	{ "date": "2016-01-01", "region": "RU-MOW", "value": 5.7 },	{ "date": "2015-01-01", "region": "RU-MOW", "value": 6 },
		{ "date": "2018-01-01", "region": "RU-SPE", "value": 3.8 },	{ "date": "2017-01-01", "region": "RU-SPE", "value": 3.6 },	{ "date": "2016-01-01", "region": "RU-SPE", "value": 3.9 },	{ "date": "2015-01-01", "region": "RU-SPE", "value": 4.4 },
		{ "date": "2018-01-01", "region": "RU-YEV", "value": 9.5 },	{ "date": "2017-01-01", "region": "RU-YEV", "value": 10.6 },	{ "date": "2016-01-01", "region": "RU-YEV", "value": 16.2 },	{ "date": "2015-01-01", "region": "RU-YEV", "value": 12.8 },
		{ "date": "2018-01-01", "region": "RU-ZAB", "value": 7.1 },	{ "date": "2017-01-01", "region": "RU-ZAB", "value": 5.7 },	{ "date": "2016-01-01", "region": "RU-ZAB", "value": 7 },	{ "date": "2015-01-01", "region": "RU-ZAB", "value": 7.9 },
		{ "date": "2018-01-01", "region": "RU-IVA", "value": 3.4 },	{ "date": "2017-01-01", "region": "RU-IVA", "value": 3.5 },	{ "date": "2016-01-01", "region": "RU-IVA", "value": 5.9 },	{ "date": "2015-01-01", "region": "RU-IVA", "value": 5.5 },
		{ "date": "2018-01-01", "region": "RU-IRK", "value": 7.1 },	{ "date": "2017-01-01", "region": "RU-IRK", "value": 7 },	{ "date": "2016-01-01", "region": "RU-IRK", "value": 6 },	{ "date": "2015-01-01", "region": "RU-IRK", "value": 7.7 },
		{ "date": "2018-01-01", "region": "RU-KB", "value": 4.9 },	{ "date": "2017-01-01", "region": "RU-KB", "value": 4.5 },	{ "date": "2016-01-01", "region": "RU-KB", "value": 6.7 },	{ "date": "2015-01-01", "region": "RU-KB", "value": 6.8 },
		{ "date": "2018-01-01", "region": "RU-KGD", "value": 4.4 },	{ "date": "2017-01-01", "region": "RU-KGD", "value": 4.5 },	{ "date": "2016-01-01", "region": "RU-KGD", "value": 4.5 },	{ "date": "2015-01-01", "region": "RU-KGD", "value": 6.1 },
		{ "date": "2018-01-01", "region": "RU-KLU", "value": 4.7 },	{ "date": "2017-01-01", "region": "RU-KLU", "value": 4.5 },	{ "date": "2016-01-01", "region": "RU-KLU", "value": 6.8 },	{ "date": "2015-01-01", "region": "RU-KLU", "value": 8.7 },
		{ "date": "2018-01-01", "region": "RU-KAM", "value": 5.7 },	{ "date": "2017-01-01", "region": "RU-KAM", "value": 5.9 },	{ "date": "2016-01-01", "region": "RU-KAM", "value": 9 },	{ "date": "2015-01-01", "region": "RU-KAM", "value": 9.4 },
		{ "date": "2018-01-01", "region": "RU-KC", "value": 6.8 },	{ "date": "2017-01-01", "region": "RU-KC", "value": 6.9 },	{ "date": "2016-01-01", "region": "RU-KC", "value": 8.9 },	{ "date": "2015-01-01", "region": "RU-KC", "value": 8.4 },
		{ "date": "2018-01-01", "region": "RU-KEM", "value": 5.1 },	{ "date": "2017-01-01", "region": "RU-KEM", "value": 6.9 },	{ "date": "2016-01-01", "region": "RU-KEM", "value": 6 },	{ "date": "2015-01-01", "region": "RU-KEM", "value": 6.3 },
		{ "date": "2018-01-01", "region": "RU-KIR", "value": 4.5 },	{ "date": "2017-01-01", "region": "RU-KIR", "value": 4.1 },	{ "date": "2016-01-01", "region": "RU-KIR", "value": 5 },	{ "date": "2015-01-01", "region": "RU-KIR", "value": 4.2 },
		{ "date": "2018-01-01", "region": "RU-KOS", "value": 5.7 },	{ "date": "2017-01-01", "region": "RU-KOS", "value": 7.1 },	{ "date": "2016-01-01", "region": "RU-KOS", "value": 7.6 },	{ "date": "2015-01-01", "region": "RU-KOS", "value": 7 },
		{ "date": "2018-01-01", "region": "RU-KDA", "value": 4.9 },	{ "date": "2017-01-01", "region": "RU-KDA", "value": 4.3 },	{ "date": "2016-01-01", "region": "RU-KDA", "value": 5 },	{ "date": "2015-01-01", "region": "RU-KDA", "value": 5.4 },
		{ "date": "2018-01-01", "region": "RU-KYA", "value": 5.5 },	{ "date": "2017-01-01", "region": "RU-KYA", "value": 6.2 },	{ "date": "2016-01-01", "region": "RU-KYA", "value": 7.2 },	{ "date": "2015-01-01", "region": "RU-KYA", "value": 7.6 },
		{ "date": "2018-01-01", "region": "RU-KGN", "value": 6.5 },	{ "date": "2017-01-01", "region": "RU-KGN", "value": 4.6 },	{ "date": "2016-01-01", "region": "RU-KGN", "value": 6.5 },	{ "date": "2015-01-01", "region": "RU-KGN", "value": 5.8 },
		{ "date": "2018-01-01", "region": "RU-KRS", "value": 5.2 },	{ "date": "2017-01-01", "region": "RU-KRS", "value": 5.6 },	{ "date": "2016-01-01", "region": "RU-KRS", "value": 6 },	{ "date": "2015-01-01", "region": "RU-KRS", "value": 4.7 },
		{ "date": "2018-01-01", "region": "RU-LEN", "value": 3.2 },	{ "date": "2017-01-01", "region": "RU-LEN", "value": 4.6 },	{ "date": "2016-01-01", "region": "RU-LEN", "value": 4.2 },	{ "date": "2015-01-01", "region": "RU-LEN", "value": 6 },
		{ "date": "2018-01-01", "region": "RU-LIP", "value": 3.5 },	{ "date": "2017-01-01", "region": "RU-LIP", "value": 3.4 },	{ "date": "2016-01-01", "region": "RU-LIP", "value": 7.4 },	{ "date": "2015-01-01", "region": "RU-LIP", "value": 7.4 },
		{ "date": "2018-01-01", "region": "RU-MAG", "value": 3.4 },	{ "date": "2017-01-01", "region": "RU-MAG", "value": 3.7 },	{ "date": "2016-01-01", "region": "RU-MAG", "value": 3.7 },	{ "date": "2015-01-01", "region": "RU-MAG", "value": 5.1 },
		{ "date": "2018-01-01", "region": "RU-MOS", "value": 4.1 },	{ "date": "2017-01-01", "region": "RU-MOS", "value": 4.1 },	{ "date": "2016-01-01", "region": "RU-MOS", "value": 4.5 },	{ "date": "2015-01-01", "region": "RU-MOS", "value": 4.9 },
		{ "date": "2018-01-01", "region": "RU-MUR", "value": 5.1 },	{ "date": "2017-01-01", "region": "RU-MUR", "value": 5.4 },	{ "date": "2016-01-01", "region": "RU-MUR", "value": 3.9 },	{ "date": "2015-01-01", "region": "RU-MUR", "value": 5.8 },
		{ "date": "2018-01-01", "region": "RU-NIZ", "value": 5.7 },	{ "date": "2017-01-01", "region": "RU-NIZ", "value": 5.2 },	{ "date": "2016-01-01", "region": "RU-NIZ", "value": 6.4 },	{ "date": "2015-01-01", "region": "RU-NIZ", "value": 6.8 },
		{ "date": "2018-01-01", "region": "RU-NEN", "value": 1.7 },	{ "date": "2017-01-01", "region": "RU-NEN", "value": 7.4 },	{ "date": "2016-01-01", "region": "RU-NEN", "value": 1.3 },	{ "date": "2015-01-01", "region": "RU-NEN", "value": 5.3 },
		{ "date": "2018-01-01", "region": "RU-NGR", "value": 4.4 },	{ "date": "2017-01-01", "region": "RU-NGR", "value": 5.8 },	{ "date": "2016-01-01", "region": "RU-NGR", "value": 4.4 },	{ "date": "2015-01-01", "region": "RU-NGR", "value": 6 },
		{ "date": "2018-01-01", "region": "RU-NVS", "value": 4.9 },	{ "date": "2017-01-01", "region": "RU-NVS", "value": 4.9 },	{ "date": "2016-01-01", "region": "RU-NVS", "value": 6.2 },	{ "date": "2015-01-01", "region": "RU-NVS", "value": 7 },
		{ "date": "2018-01-01", "region": "RU-OMS", "value": 6.7 },	{ "date": "2017-01-01", "region": "RU-OMS", "value": 6.8 },	{ "date": "2016-01-01", "region": "RU-OMS", "value": 7.2 },	{ "date": "2015-01-01", "region": "RU-OMS", "value": 6.7 },
		{ "date": "2018-01-01", "region": "RU-ORE", "value": 5.4 },	{ "date": "2017-01-01", "region": "RU-ORE", "value": 7.6 },	{ "date": "2016-01-01", "region": "RU-ORE", "value": 6.4 },	{ "date": "2015-01-01", "region": "RU-ORE", "value": 6.9 },
		{ "date": "2018-01-01", "region": "RU-ORL", "value": 5.1 },	{ "date": "2017-01-01", "region": "RU-ORL", "value": 5.8 },	{ "date": "2016-01-01", "region": "RU-ORL", "value": 6.5 },	{ "date": "2015-01-01", "region": "RU-ORL", "value": 9.1 },
		{ "date": "2018-01-01", "region": "RU-PNZ", "value": 4 },	{ "date": "2017-01-01", "region": "RU-PNZ", "value": 4.1 },	{ "date": "2016-01-01", "region": "RU-PNZ", "value": 5.6 },	{ "date": "2015-01-01", "region": "RU-PNZ", "value": 4.3 },
		{ "date": "2018-01-01", "region": "RU-PER", "value": 4.1 },	{ "date": "2017-01-01", "region": "RU-PER", "value": 5.2 },	{ "date": "2016-01-01", "region": "RU-PER", "value": 5.7 },	{ "date": "2015-01-01", "region": "RU-PER", "value": 5.9 },
		{ "date": "2018-01-01", "region": "RU-PRI", "value": 4.9 },	{ "date": "2017-01-01", "region": "RU-PRI", "value": 6.2 },	{ "date": "2016-01-01", "region": "RU-PRI", "value": 6.6 },	{ "date": "2015-01-01", "region": "RU-PRI", "value": 7.8 },
		{ "date": "2018-01-01", "region": "RU-PSK", "value": 3.6 },	{ "date": "2017-01-01", "region": "RU-PSK", "value": 5.3 },	{ "date": "2016-01-01", "region": "RU-PSK", "value": 7.6 },	{ "date": "2015-01-01", "region": "RU-PSK", "value": 7.7 },
		{ "date": "2018-01-01", "region": "RU-AD", "value": 3.7 },	{ "date": "2017-01-01", "region": "RU-AD", "value": 6.7 },	{ "date": "2016-01-01", "region": "RU-AD", "value": 4.6 },	{ "date": "2015-01-01", "region": "RU-AD", "value": 7.5 },
		{ "date": "2018-01-01", "region": "RU-AL", "value": 7.5 },	{ "date": "2017-01-01", "region": "RU-AL", "value": 9.6 },	{ "date": "2016-01-01", "region": "RU-AL", "value": 10.2 },	{ "date": "2015-01-01", "region": "RU-AL", "value": 9.9 },
		{ "date": "2018-01-01", "region": "RU-BA", "value": 5.2 },	{ "date": "2017-01-01", "region": "RU-BA", "value": 6.8 },	{ "date": "2016-01-01", "region": "RU-BA", "value": 6 },	{ "date": "2015-01-01", "region": "RU-BA", "value": 7.3 },
		{ "date": "2018-01-01", "region": "RU-BU", "value": 5.9 },	{ "date": "2017-01-01", "region": "RU-BU", "value": 6.3 },	{ "date": "2016-01-01", "region": "RU-BU", "value": 4.8 },	{ "date": "2015-01-01", "region": "RU-BU", "value": 4.8 },
		{ "date": "2018-01-01", "region": "RU-DA", "value": 8.3 },	{ "date": "2017-01-01", "region": "RU-DA", "value": 8.7 },	{ "date": "2016-01-01", "region": "RU-DA", "value": 10.1 },	{ "date": "2015-01-01", "region": "RU-DA", "value": 12 },
		{ "date": "2018-01-01", "region": "RU-IN", "value": 6 },	{ "date": "2017-01-01", "region": "RU-IN", "value": 7.3 },	{ "date": "2016-01-01", "region": "RU-IN", "value": 10.4 },	{ "date": "2015-01-01", "region": "RU-IN", "value": 11.2 },
		{ "date": "2018-01-01", "region": "RU-KL", "value": 6.3 },	{ "date": "2017-01-01", "region": "RU-KL", "value": 4.8 },	{ "date": "2016-01-01", "region": "RU-KL", "value": 7.1 },	{ "date": "2015-01-01", "region": "RU-KL", "value": 8 },
		{ "date": "2018-01-01", "region": "RU-KR", "value": 5.6 },	{ "date": "2017-01-01", "region": "RU-KR", "value": 6.7 },	{ "date": "2016-01-01", "region": "RU-KR", "value": 6.9 },	{ "date": "2015-01-01", "region": "RU-KR", "value": 5.7 },
		{ "date": "2018-01-01", "region": "RU-KO", "value": 4.5 },	{ "date": "2017-01-01", "region": "RU-KO", "value": 4.2 },	{ "date": "2016-01-01", "region": "RU-KO", "value": 5.6 },	{ "date": "2015-01-01", "region": "RU-KO", "value": 4.4 },
		{ "date": "2018-01-01", "region": "RU-ME", "value": 5.7 },	{ "date": "2017-01-01", "region": "RU-ME", "value": 4.3 },	{ "date": "2016-01-01", "region": "RU-ME", "value": 5.2 },	{ "date": "2015-01-01", "region": "RU-ME", "value": 7.6 },
		{ "date": "2018-01-01", "region": "RU-MO", "value": 3.3 },	{ "date": "2017-01-01", "region": "RU-MO", "value": 5 },	{ "date": "2016-01-01", "region": "RU-MO", "value": 4.4 },	{ "date": "2015-01-01", "region": "RU-MO", "value": 4.3 },
		{ "date": "2018-01-01", "region": "RU-SA", "value": 5.4 },	{ "date": "2017-01-01", "region": "RU-SA", "value": 5.3 },	{ "date": "2016-01-01", "region": "RU-SA", "value": 6.5 },	{ "date": "2015-01-01", "region": "RU-SA", "value": 7.6 },
		{ "date": "2018-01-01", "region": "RU-SE", "value": 4.1 },	{ "date": "2017-01-01", "region": "RU-SE", "value": 5.4 },	{ "date": "2016-01-01", "region": "RU-SE", "value": 7.1 },	{ "date": "2015-01-01", "region": "RU-SE", "value": 9.4 },
		{ "date": "2018-01-01", "region": "RU-TA", "value": 4.5 },	{ "date": "2017-01-01", "region": "RU-TA", "value": 5.1 },	{ "date": "2016-01-01", "region": "RU-TA", "value": 5.3 },	{ "date": "2015-01-01", "region": "RU-TA", "value": 6 },
		{ "date": "2018-01-01", "region": "RU-TY", "value": 9.4 },	{ "date": "2017-01-01", "region": "RU-TY", "value": 8.8 },	{ "date": "2016-01-01", "region": "RU-TY", "value": 6.5 },	{ "date": "2015-01-01", "region": "RU-TY", "value": 7 },
		{ "date": "2018-01-01", "region": "RU-KK", "value": 4.3 },	{ "date": "2017-01-01", "region": "RU-KK", "value": 5.1 },	{ "date": "2016-01-01", "region": "RU-KK", "value": 11.3 },	{ "date": "2015-01-01", "region": "RU-KK", "value": 14.6 },
		{ "date": "2018-01-01", "region": "RU-ROS", "value": 5.1 },	{ "date": "2017-01-01", "region": "RU-ROS", "value": 6.5 },	{ "date": "2016-01-01", "region": "RU-ROS", "value": 6.6 },	{ "date": "2015-01-01", "region": "RU-ROS", "value": 6.6 },
		{ "date": "2018-01-01", "region": "RU-RYA", "value": 4.8 },	{ "date": "2017-01-01", "region": "RU-RYA", "value": 4.5 },	{ "date": "2016-01-01", "region": "RU-RYA", "value": 4.5 },	{ "date": "2015-01-01", "region": "RU-RYA", "value": 6.2 },
		{ "date": "2018-01-01", "region": "RU-SAM", "value": 4.5 },	{ "date": "2017-01-01", "region": "RU-SAM", "value": 4.6 },	{ "date": "2016-01-01", "region": "RU-SAM", "value": 5.1 },	{ "date": "2015-01-01", "region": "RU-SAM", "value": 5.6 },
		{ "date": "2018-01-01", "region": "RU-SAR", "value": 4.7 },	{ "date": "2017-01-01", "region": "RU-SAR", "value": 5.3 },	{ "date": "2016-01-01", "region": "RU-SAR", "value": 6.4 },	{ "date": "2015-01-01", "region": "RU-SAR", "value": 7 },
		{ "date": "2018-01-01", "region": "RU-SAK", "value": 2.8 },	{ "date": "2017-01-01", "region": "RU-SAK", "value": 4.7 },	{ "date": "2016-01-01", "region": "RU-SAK", "value": 3.6 },	{ "date": "2015-01-01", "region": "RU-SAK", "value": 6.2 },
		{ "date": "2018-01-01", "region": "RU-SVE", "value": 4.6 },	{ "date": "2017-01-01", "region": "RU-SVE", "value": 4.8 },	{ "date": "2016-01-01", "region": "RU-SVE", "value": 5.8 },	{ "date": "2015-01-01", "region": "RU-SVE", "value": 5.5 },
		{ "date": "2018-01-01", "region": "RU-SMO", "value": 6.6 },	{ "date": "2017-01-01", "region": "RU-SMO", "value": 5.4 },	{ "date": "2016-01-01", "region": "RU-SMO", "value": 6.5 },	{ "date": "2015-01-01", "region": "RU-SMO", "value": 7.7 },
		{ "date": "2018-01-01", "region": "RU-STA", "value": 6.3 },	{ "date": "2017-01-01", "region": "RU-STA", "value": 8 },	{ "date": "2016-01-01", "region": "RU-STA", "value": 8.4 },	{ "date": "2015-01-01", "region": "RU-STA", "value": 8.1 },
		{ "date": "2018-01-01", "region": "RU-TAM", "value": 3.7 },	{ "date": "2017-01-01", "region": "RU-TAM", "value": 2.4 },	{ "date": "2016-01-01", "region": "RU-TAM", "value": 3.8 },	{ "date": "2015-01-01", "region": "RU-TAM", "value": 3.7 },
		{ "date": "2018-01-01", "region": "RU-TVE", "value": 4.7 },	{ "date": "2017-01-01", "region": "RU-TVE", "value": 4.5 },	{ "date": "2016-01-01", "region": "RU-TVE", "value": 7.3 },	{ "date": "2015-01-01", "region": "RU-TVE", "value": 6.6 },
		{ "date": "2018-01-01", "region": "RU-TOM", "value": 5.1 },	{ "date": "2017-01-01", "region": "RU-TOM", "value": 4.4 },	{ "date": "2016-01-01", "region": "RU-TOM", "value": 6.1 },	{ "date": "2015-01-01", "region": "RU-TOM", "value": 6.1 },
		{ "date": "2018-01-01", "region": "RU-TUL", "value": 4.7 },	{ "date": "2017-01-01", "region": "RU-TUL", "value": 6.8 },	{ "date": "2016-01-01", "region": "RU-TUL", "value": 6.5 },	{ "date": "2015-01-01", "region": "RU-TUL", "value": 6.8 },
		{ "date": "2018-01-01", "region": "RU-TYU", "value": 3.7 },	{ "date": "2017-01-01", "region": "RU-TYU", "value": 4.7 },	{ "date": "2016-01-01", "region": "RU-TYU", "value": 4.6 },	{ "date": "2015-01-01", "region": "RU-TYU", "value": 5.7 },
		{ "date": "2018-01-01", "region": "RU-UD", "value": 4.4 },	{ "date": "2017-01-01", "region": "RU-UD", "value": 4.6 },	{ "date": "2016-01-01", "region": "RU-UD", "value": 5.3 },	{ "date": "2015-01-01", "region": "RU-UD", "value": 5.6 },
		{ "date": "2018-01-01", "region": "RU-ULY", "value": 5.2 },	{ "date": "2017-01-01", "region": "RU-ULY", "value": 5.1 },	{ "date": "2016-01-01", "region": "RU-ULY", "value": 6.8 },	{ "date": "2015-01-01", "region": "RU-ULY", "value": 6.5 },
		{ "date": "2018-01-01", "region": "RU-KHA", "value": 5 },	{ "date": "2017-01-01", "region": "RU-KHA", "value": 5.8 },	{ "date": "2016-01-01", "region": "RU-KHA", "value": 5.9 },	{ "date": "2015-01-01", "region": "RU-KHA", "value": 6.4 },
		{ "date": "2018-01-01", "region": "RU-KHM", "value": 2.8 },	{ "date": "2017-01-01", "region": "RU-KHM", "value": 4.6 },	{ "date": "2016-01-01", "region": "RU-KHM", "value": 4.1 },	{ "date": "2015-01-01", "region": "RU-KHM", "value": 4.9 },
		{ "date": "2018-01-01", "region": "RU-CHE", "value": 5.4 },	{ "date": "2017-01-01", "region": "RU-CHE", "value": 6.2 },	{ "date": "2016-01-01", "region": "RU-CHE", "value": 5.9 },	{ "date": "2015-01-01", "region": "RU-CHE", "value": 6.5 },
		{ "date": "2018-01-01", "region": "RU-CE", "value": 6.6 },	{ "date": "2017-01-01", "region": "RU-CE", "value": 9.2 },	{ "date": "2016-01-01", "region": "RU-CE", "value": 10.2 },	{ "date": "2015-01-01", "region": "RU-CE", "value": 11.7 },
		{ "date": "2018-01-01", "region": "RU-CU", "value": 3.8 },	{ "date": "2017-01-01", "region": "RU-CU", "value": 3.3 },	{ "date": "2016-01-01", "region": "RU-CU", "value": 3.2 },	{ "date": "2015-01-01", "region": "RU-CU", "value": 3.3 },
		{ "date": "2018-01-01", "region": "RU-CHU", "value": 11.1 },	{ "date": "2017-01-01", "region": "RU-CHU", "value": 10.5 },	{ "date": "2016-01-01", "region": "RU-CHU", "value": 16.4 },	{ "date": "2015-01-01", "region": "RU-CHU", "value": 17.5 },
		{ "date": "2018-01-01", "region": "RU-YAN", "value": 5.6 },	{ "date": "2017-01-01", "region": "RU-YAN", "value": 6.5 },	{ "date": "2016-01-01", "region": "RU-YAN", "value": 5.4 },	{ "date": "2015-01-01", "region": "RU-YAN", "value": 7.1 },
		{ "date": "2018-01-01", "region": "RU-YAR", "value": 3.2 },	{ "date": "2017-01-01", "region": "RU-YAR", "value": 6.1 },	{ "date": "2016-01-01", "region": "RU-YAR", "value": 5.2 },	{ "date": "2015-01-01", "region": "RU-YAR", "value": 6 }
	]
}