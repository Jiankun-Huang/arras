var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app =
/******/function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	/*global require, console*/
	/*jshint -W097*/
	/*jshint browser: true*/
	"use strict";

	// Fundamental requires <3
	//var global = require('./lib/global');
	//var util = require('./lib/util');

	var nanotimer = __webpack_require__(1);
	var timer = new nanotimer();

	//imported manualy cause stuffs going wrong
	var global = {
		// Keys and other mathematical constants and some other shit
		KEY_ESC: 27,
		KEY_ENTER: 13,
		KEY_CHAT: 13,
		KEY_FIREFOOD: 119,
		KEY_SPLIT: 32,
		KEY_LEFT: 65,
		KEY_UP: 87,
		KEY_RIGHT: 68,
		KEY_DOWN: 83,
		KEY_LEFT_ARROW: 37,
		KEY_UP_ARROW: 38,
		KEY_RIGHT_ARROW: 39,
		KEY_DOWN_ARROW: 40,
		KEY_AUTO_SPIN: 67,
		KEY_AUTO_FIRE: 69,
		KEY_OVER_RIDE: 82,
		KEY_UPGRADE_ATK: 49,
		KEY_UPGRADE_HTL: 50,
		KEY_UPGRADE_SPD: 51,
		KEY_UPGRADE_STR: 52,
		KEY_UPGRADE_PEN: 53,
		KEY_UPGRADE_DAM: 54,
		KEY_UPGRADE_RLD: 55,
		KEY_UPGRADE_MOB: 56,
		KEY_UPGRADE_RGN: 57,
		KEY_UPGRADE_SHI: 48,
		KEY_MOUSE_0: 32,
		KEY_MOUSE_1: 86,
		KEY_MOUSE_2: 16,
		KEY_CHOOSE_1: 89,
		KEY_CHOOSE_2: 72,
		KEY_CHOOSE_3: 85,
		KEY_CHOOSE_4: 74,
		KEY_CHOOSE_5: 73,
		KEY_CHOOSE_6: 75,
		KEY_CHOOSE_7: 79,
		KEY_CHOOSE_8: 76,
		KEY_LEVEL_UP: 78,
		KEY_FUCK_YOU: 192,
		KEY_TESTBED: 66,
		KEY_TP: 71,
		KEY_BIGBOI: 77,
		KEY_BIGCHUNGUS: 88,

		// Canvas
		screenWidth: window.innerWidth,
		screenHeight: window.innerHeight,
		gameWidth: 0,
		gameHeight: 0,
		xoffset: -0,
		yoffset: -0,
		gameStart: false,
		disconnected: false,
		died: false,
		kicked: false,
		continuity: false,
		startPingTime: 0,
		toggleMassState: 0,
		backgroundColor: '#f2fbff',
		lineColor: '#000000'
	};

	var submitToLocalStorage = function submitToLocalStorage(name) {
		localStorage.setItem(name + 'Value', document.getElementById(name).value);
		localStorage.setItem(name + 'Checked', document.getElementById(name).checked);
		return false;
	};
	var retrieveFromLocalStorage = function retrieveFromLocalStorage(name) {
		document.getElementById(name).value = localStorage.getItem(name + 'Value');
		document.getElementById(name).checked = localStorage.getItem(name + 'Checked') === 'true';
		return false;
	};
	var handleLargeNumber = function handleLargeNumber(a) {
		var cullZeroes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		if (cullZeroes && a == 0) {
			return '';
		}

		if (a < Math.pow(10, 3)) {
			return '' + a.toFixed(0);
		}

		if (a < Math.pow(10, 6)) {
			return (a / Math.pow(10, 3)).toFixed(2) + "k";
		}

		if (a < Math.pow(10, 9)) {
			return (a / Math.pow(10, 6)).toFixed(2) + "m";
		}

		if (a < Math.pow(10, 12)) {
			return (a / Math.pow(10, 9)).toFixed(2) + "b";
		}

		if (a < Math.pow(10, 15)) {
			return (a / Math.pow(10, 12)).toFixed(2) + "t";
		}

		return (a / Math.pow(10, 15)).toFixed(2) + "q";
	};
	var timeForHumans = function timeForHumans(x) {
		// ought to be in seconds
		var seconds = x % 60;
		x /= 60;
		x = Math.floor(x);
		var minutes = x % 60;
		x /= 60;
		x = Math.floor(x);
		var hours = x % 24;
		x /= 24;
		x = Math.floor(x);
		var days = x;
		var y = '';

		function weh(z, text) {
			if (z) {
				y = y + (y === '' ? '' : ', ') + z + ' ' + text + (z > 1 ? 's' : '');
			}
		}
		weh(days, 'day');
		weh(hours, 'hour');
		weh(minutes, 'minute');
		weh(seconds, 'second');
		if (y === '') {
			y = 'less than a second';
		}
		return y;
	};
	var addArticle = function addArticle(string) {
		return (/[aeiouAEIOU]/.test(string[0]) ? 'an ' + string : 'a ' + string
		);
	};
	var formatLargeNumber = function formatLargeNumber(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	var pullJSON = function pullJSON(filename) {
		var request = new XMLHttpRequest();
		var url = "/json/" + filename + ".json?v=" + VERSION;
		// Set up the request
		console.log("Loading JSON from " + url);
		request.responseType = 'json';
		// Return a promise
		return new Promise(function (resolve, reject) {
			request.open('GET', url);
			request.onload = function () {
				resolve(request.response);
				console.log('JSON load complete.');
			};
			request.onerror = function () {
				reject(request.statusText);
				console.log('JSON load failed.');
				console.log(request.statusText);
			};
			request.send();
		});
	};

	//Get color
	var config = {
		graphical: {
			screenshotMode: false,
			borderChunk: 6,
			barChunk: 5,
			mininumBorderChunk: 3,
			deathBlurAmount: 3,
			darkBorders: false,
			fancyAnimations: true,
			colors: 'normal',
			pointy: true,
			fontSizeBoost: 1,
			neon: false
		},
		gui: {
			expectedMaxSkillLevel: 9
		},
		lag: {
			unresponsive: false,
			memory: 60
		}
	};
	var color = {};
	pullJSON('color').then(function (data) {
		return color = data;
	});

	// Color functions
	var mixColors = function () {
		/** https://gist.github.com/jedfoster/7939513 **/
		function d2h(d) {
			return d.toString(16);
		} // convert a decimal value to hex
		function h2d(h) {
			return parseInt(h, 16);
		} // convert a hex value to decimal 
		return function (color_2, color_1) {
			var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;

			if (weight === 1) return color_1;
			if (weight === 0) return color_2;
			var col = "#";
			for (var i = 1; i <= 6; i += 2) {
				// loop through each of the 3 hex pairs—red, green, and blue, skip the '#'
				var v1 = h2d(color_1.substr(i, 2)),

				// extract the current pairs
				v2 = h2d(color_2.substr(i, 2)),


				// combine the current pairs from each source color, according to the specified weight
				val = d2h(Math.floor(v2 + (v1 - v2) * weight));

				while (val.length < 2) {
					val = '0' + val;
				} // prepend a '0' if val results in a single digit        
				col += val; // concatenate val to our new color string
			}
			return col; // PROFIT!
		};
	}();

	function getColor(colorNumber) {
		switch (colorNumber) {
			case 0:
				return color.teal;
			case 1:
				return color.lgreen;
			case 2:
				return color.orange;
			case 3:
				return color.yellow;
			case 4:
				return color.lavender;
			case 5:
				return color.pink;
			case 6:
				return color.vlgrey;
			case 7:
				return color.lgrey;
			case 8:
				return color.guiwhite;
			case 9:
				return color.black;
			case 10:
				return color.blue;
			case 11:
				return color.green;
			case 12:
				return color.red;
			case 13:
				return color.gold;
			case 14:
				return color.purple;
			case 15:
				return color.magenta;
			case 16:
				return color.grey;
			case 17:
				return color.dgrey;
			case 18:
				return color.white;
			case 19:
				return color.guiblack;
			case 21:
				return '#1058D3';
			case 22:
				return '#8534E2';
			case 23:
				return '#FF1493';
			case 24:
				return '#FF4500';
			case 25:
				return '#EFC74B';
			case 26:
				return '#B9E87E';
			case 27:
				return '#EFC74B';
			case 28:
				return '#A00A00';
			case 29:
				return '#E7896D';
			case 30:
				return '#8D6ADF';

			default:
				return '#FF0000';
		}
	}

	function getColorDark(givenColor) {
		var dark = config.graphical.neon ? color.white : color.black;
		if (config.graphical.darkBorders) return dark;
		return mixColors(givenColor, dark, color.border);
	}

	function setColorBrightness(col, amt) {

		var usePound = false;

		if (col[0] == "#") {
			col = col.slice(1);
			usePound = true;
		}

		var num = parseInt(col, 16);

		var r = (num >> 16) + amt;

		if (r > 255) r = 255;else if (r < 0) r = 0;

		var b = (num >> 8 & 0x00FF) + amt;

		if (b > 255) b = 255;else if (b < 0) b = 0;

		var g = (num & 0x0000FF) + amt;

		if (g > 255) g = 255;else if (g < 0) g = 0;

		return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
	}

	function getZoneColor(cell, real) {
		switch (cell) {
			case 'bas1':
				return color.blue;
			case 'bas2':
				return color.green;
			case 'bas3':
				return color.red;
			case 'bas4':
				return color.pink;
			case 'bas5':
				return color.gold;
			case 'bas6':
				return color.orange;
			case 'nest':
				return real ? color.purple : color.lavender;
			default:
				return real ? color.white : color.lgrey;
		}
	}

	function setColor(context, givenColor) {
		if (config.graphical.neon) {
			context.fillStyle = getColorDark(givenColor);
			context.strokeStyle = givenColor;
		} else {
			context.fillStyle = givenColor;
			context.strokeStyle = setColorBrightness(givenColor, -20);
		}
	}

	// Get mockups <3
	var mockups = [];
	pullJSON('mockups').then(function (data) {
		return mockups = data;
	});
	// Mockup functions
	function getEntityImageFromMockup(index) {
		var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mockups[index].color;

		var mockup = mockups[index];
		return {
			time: 0,
			index: index,
			x: mockup.x,
			y: mockup.y,
			vx: 0,
			vy: 0,
			size: mockup.size,
			realSize: mockup.realSize,
			color: color,
			render: {
				status: {
					getFade: function getFade() {
						return 1;
					},
					getColor: function getColor() {
						return '#FFFFFF';
					},
					getBlend: function getBlend() {
						return 0;
					},
					health: {
						get: function get() {
							return 1;
						}
					},
					shield: {
						get: function get() {
							return 1;
						}
					}
				}
			},
			facing: mockup.facing,
			shape: mockup.shape,
			name: mockup.name,
			score: 0,
			tiggle: 0,
			layer: mockup.layer,
			guns: {
				length: mockup.guns.length,
				getPositions: function getPositions() {
					var a = [];
					//mockup.guns.forEach(() => a.push(0));
					var i = 0;
					var length = mockup.guns.length;
					for (; i < length; i++) {
						a.push(0);
					}
					//for (let i = 0; i < mockup.guns.length; i++) {
					//   a.push(0); 
					//}
					return a;
				},
				update: function update() {}
			},
			turrets: mockup.turrets.map(function (t) {
				var o = getEntityImageFromMockup(t.index);
				o.realSize = o.realSize / o.size * mockup.size * t.sizeFactor;
				o.size = mockup.size * t.sizeFactor;
				o.angle = t.angle;
				o.offset = t.offset;
				o.direction = t.direction;
				o.facing = t.direction + t.angle;
				return o;
			})
		};
	}

	// Define clickable regions
	global.clickables = function () {
		var Region = function () {
			// Protected classes
			function Clickable() {
				var region = {
					x: 0,
					y: 0,
					w: 0,
					h: 0
				};
				var active = false;
				return {
					set: function set(x, y, w, h) {
						region.x = x;
						region.y = y;
						region.w = w;
						region.h = h;
						active = true;
					},
					check: function check(target) {
						var dx = Math.round(target.x - region.x);
						var dy = Math.round(target.y - region.y);
						return active && dx >= 0 && dy >= 0 && dx <= region.w && dy <= region.h;
					},
					hide: function hide() {
						active = false;
					}
				};
			}
			// Return the constructor
			return function (size) {
				// Define the region
				var data = [];
				for (var i = 0; i < size; i++) {
					data.push(Clickable());
				}
				// Return the region methods
				return {
					place: function place(index) {
						var _data$index;

						for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							a[_key - 1] = arguments[_key];
						}

						if (index >= data.length) {
							console.log(index);
							console.log(data);
							throw new Error('Trying to reference a clickable outside a region!');
						}
						(_data$index = data[index]).set.apply(_data$index, a);
					},
					hide: function hide() {
						var i = 0;
						var length = data.length;
						for (; i < length; i++) {
							data[i].hide();
						}
						//for (var r of data) { 
						//    r.hide();
						//}
					},
					check: function check(x) {
						return data.findIndex(function (r) {
							return r.check(x);
						});
					}
				};
			};
		}();
		return {
			stat: Region(10),
			upgrade: Region(8),
			hover: Region(1),
			skipUpgrades: Region(1)
		};
	}();
	global.statHover = false;
	global.upgradeHover = false;

	// Prepare stuff
	var player = { //Set up the player
		id: -1,
		x: global.screenWidth / 2,
		y: global.screenHeight / 2,
		vx: 0,
		vy: 0,
		renderx: global.screenWidth / 2,
		rendery: global.screenHeight / 2,
		renderv: 1,
		slip: 0,
		view: 1,
		time: 0,
		screenWidth: global.screenWidth,
		screenHeight: global.screenHeight,
		target: {
			x: global.screenWidth / 2,
			y: global.screenHeight / 2
		}
	};
	var entities = [],
	    users = [],
	    minimap = [],
	    upgradeSpin = 0,
	    messages = [],
	    messageFade = 0,
	    newMessage = 0,
	    metrics = {
		latency: 0,
		lag: 0,
		rendertime: 0,
		updatetime: 0,
		lastlag: 0,
		lastrender: 0,
		rendergap: 0,
		lastuplink: 0
	},
	    lastPing = 0,
	    renderTimes = 0,
	    updateTimes = 0,
	    target = {
		x: player.x,
		y: player.y
	},
	    roomSetup = [['norm']],
	    roomSpeed = 0;
	var _gui = {
		getStatNames: function getStatNames(num) {
			switch (num) {
				case 1:
					return ['Body Damage', 'Max Health', 'Bullet Speed', 'Bullet Health', 'Bullet Penetration', 'Bullet Damage', 'Engine Acceleration', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				case 2:
					return ['Body Damage', 'Max Health', 'Drone Speed', 'Drone Health', 'Drone Penetration', 'Drone Damage', 'Respawn Rate', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				case 3:
					return ['Body Damage', 'Max Health', 'Drone Speed', 'Drone Health', 'Drone Penetration', 'Drone Damage', 'Max Drone Count', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				case 4:
					return ['Body Damage', 'Max Health', 'Swarm Speed', 'Swarm Health', 'Swarm Penetration', 'Swarm Damage', 'Reload', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				case 5:
					return ['Body Damage', 'Max Health', 'Placement Speed', 'Trap Health', 'Trap Penetration', 'Trap Damage', 'Reload', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				case 6:
					return ['Body Damage', 'Max Health', 'Weapon Speed', 'Weapon Health', 'Weapon Penetration', 'Weapon Damage', 'Reload', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				default:
					return ['Body Damage', 'Max Health', 'Bullet Speed', 'Bullet Health', 'Bullet Penetration', 'Bullet Damage', 'Reload', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
			}
		},
		skills: [{
			amount: 0,
			color: 'purple',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'pink',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'blue',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'lgreen',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'red',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'yellow',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'green',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'teal',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'gold',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'orange',
			cap: 1,
			softcap: 1
		}],
		points: 0,
		upgrades: [],
		playerid: -1,
		__s: function () {
			var truscore = 0;
			var levelscore = 0;
			var deduction = 0;
			var level = 0;
			var score = Smoothbar(0, 10);
			return {
				setScore: function setScore(s) {
					if (s) {
						score.set(s);
						if (deduction > score.get()) {
							level = 0;
							deduction = 0;
						}
					} else {
						score = Smoothbar(0, 10);
						level = 0;
					}
				},
				update: function update() {
					levelscore = Math.ceil(1.8 * Math.pow(level + 1, 1.8) - 2 * level + 1);
					if (score.get() - deduction >= levelscore) {
						deduction += levelscore;
						level += 1;
					}
				},
				getProgress: function getProgress() {
					return levelscore ? Math.min(1, Math.max(0, (score.get() - deduction) / levelscore)) : 0;
				},
				getScore: function getScore() {
					return score.get();
				},
				getLevel: function getLevel() {
					return level;
				}
			};
		}(),
		type: 0,
		fps: 0,
		color: 0,
		accel: 0,
		topspeed: 1
	};
	global.clearUpgrades = function () {
		_gui.upgrades = [];
	};
	// Build the leaderboard object
	var _leaderboard = function () {
		var entries = {};
		// Define a handler for a particular entry
		function Entry() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var bar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

			// The data
			var index = 0,
			    truscore = 0,
			    score = Smoothbar(0, 10);
			// These are the io functions
			return {
				update: function update(i, s) {
					index = i;
					score.set(s);
				},
				publish: function publish() {
					// Return the data package
					var ref = mockups[index];
					return {
						image: getEntityImageFromMockup(index, color),
						position: ref.position,
						barcolor: getColor(bar),
						label: name === '' ? ref.name : name + ' - ' + ref.name,
						score: score.get()
					};
				}
			};
		}
		// Return the leaderboard methods
		return {
			get: function get() {
				var out = [],
				    maxscore = 1;
				for (var e in entries) {
					if (!entries.hasOwnProperty(e)) continue;
					var data = entries[e].publish();
					out.push(data);
					if (data.score > maxscore) {
						maxscore = data.score;
					}
				}
				out.sort(function (a, b) {
					return b.score - a.score;
				});
				return {
					data: out,
					max: maxscore
				};
			},
			remove: function remove(index) {
				if (entries['_' + index] === undefined) {
					console.log('Warning: Asked to removed an unknown leaderboard entry.');
					return -1;
				}
				delete entries['_' + index];
			},
			add: function add(data) {
				var newentry = Entry(data.name, data.barcolor, data.color);
				newentry.update(data.index, data.score);
				entries['_' + data.id] = newentry;
			},
			update: function update(data) {
				if (entries['_' + data.id] === undefined) {
					console.log('Warning: Asked to update an unknown leaderboard entry.');
					return -1;
				}
				entries['_' + data.id].update(data.index, data.score);
			},
			purge: function purge() {
				entries = {};
			}
		};
	}();
	// The ratio finder
	var getRatio = function getRatio() {
		return Math.max(global.screenWidth / player.renderv, global.screenHeight / player.renderv / 9 * 16);
	};

	global.target = target;
	global.player = player;
	global.canUpgrade = false;
	global.canSkill = false;
	global.message = '';
	global.time = 0;

	// Window setup <3
	global.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	var serverName = 'OVERsonic Servers';
	window.onload = function () {
		// Server name stuff
		document.getElementById('serverName').innerHTML = '<h4 class="nopadding">' + serverName + '</h4>';
		// Save forms
		retrieveFromLocalStorage('playerNameInput');
		retrieveFromLocalStorage('playerKeyInput');
		retrieveFromLocalStorage('optScreenshotMode');
		retrieveFromLocalStorage('optPredictive');
		retrieveFromLocalStorage('optFancy');
		retrieveFromLocalStorage('optColors');
		retrieveFromLocalStorage('optNoPointy');
		retrieveFromLocalStorage('optBorders');
		// Set default theme
		if (document.getElementById('optColors').value === '') {
			document.getElementById('optColors').value = 'normal';
		}
		if (document.getElementById('optBorders').value === '') {
			document.getElementById('optBorders').value = 'normal';
		}
		// Game start stuff
		document.getElementById('startButton').onclick = function () {
			return startGame();
		};
		document.onkeydown = function (e) {
			var key = e.which || e.keyCode;
			if (key === global.KEY_ENTER && (global.dead || !global.gameStart)) {
				startGame();
			}
		};
		// Resizing stuff
		window.addEventListener('resize', function () {
			player.screenWidth = c.width = global.screenWidth = window.innerWidth;
			player.screenHeight = c.height = global.screenHeight = window.innerHeight;
		});
	};

	// Prepare canvas stuff
	var Canvas = function () {
		function Canvas(params) {
			_classCallCheck(this, Canvas);

			this.directionLock = false;
			this.target = global.target;
			this.reenviar = true;
			this.socket = global.socket;
			this.directions = [];
			var self = this;

			this.cv = document.getElementById('gameCanvas');
			this.cv.width = global.screenWidth;
			this.cv.height = global.screenHeight;
			this.cv.addEventListener('mousemove', this.gameInput, false);
			this.cv.addEventListener('keydown', this.keyboardDown, false);
			this.cv.addEventListener('keyup', this.keyboardUp, false);
			this.cv.addEventListener("mousedown", this.mouseDown, false);
			this.cv.addEventListener("mouseup", this.mouseUp, false);
			this.cv.parent = self;
			global.canvas = this;
		}

		_createClass(Canvas, [{
			key: "keyboardDown",
			value: function keyboardDown(event) {
				switch (event.keyCode) {
					case 13:
						if (global.died) this.parent.socket.talk('s', global.playerName, 0);
						global.died = false;
						break; // Enter to respawn
					case global.KEY_UP_ARROW:
					case global.KEY_UP:
						this.parent.socket.cmd.set(0, true);
						break;
					case global.KEY_DOWN_ARROW:
					case global.KEY_DOWN:
						this.parent.socket.cmd.set(1, true);
						break;
					case global.KEY_LEFT_ARROW:
					case global.KEY_LEFT:
						this.parent.socket.cmd.set(2, true);
						break;
					case global.KEY_RIGHT_ARROW:
					case global.KEY_RIGHT:
						this.parent.socket.cmd.set(3, true);
						break;
					case global.KEY_MOUSE_0:
						this.parent.socket.cmd.set(4, true);
						break;
					case global.KEY_MOUSE_1:
						this.parent.socket.cmd.set(5, true);
						break;
					case global.KEY_MOUSE_2:
						this.parent.socket.cmd.set(6, true);
						break;
					case global.KEY_LEVEL_UP:
						this.parent.socket.talk('L');
						break;
					case global.KEY_FUCK_YOU:
						this.parent.socket.talk('0');
						break;
					case global.KEY_TP:
						this.parent.socket.talk('K');
						break;
					case global.KEY_FIREFOOD:
						this.parent.socket.talk('P');
						break;
					case global.KEY_TESTBED:
						this.parent.socket.talk('0');
						break;
					case global.KEY_BIGBOI:
						this.parent.socket.talk('B');
						break;
					case global.KEY_BIGCHUNGUS:
						this.parent.socket.talk('X');
						break;
				}
				if (!event.repeat) {
					switch (event.keyCode) {
						case global.KEY_AUTO_SPIN:
							this.parent.socket.talk('t', 0);
							break;
						case global.KEY_AUTO_FIRE:
							this.parent.socket.talk('t', 1);
							break;
						case global.KEY_OVER_RIDE:
							this.parent.socket.talk('t', 2);
							break;
					}
					if (global.canSkill) {
						switch (event.keyCode) {
							case global.KEY_UPGRADE_ATK:
								this.parent.socket.talk('x', 0);
								break;
							case global.KEY_UPGRADE_HTL:
								this.parent.socket.talk('x', 1);
								break;
							case global.KEY_UPGRADE_SPD:
								this.parent.socket.talk('x', 2);
								break;
							case global.KEY_UPGRADE_STR:
								this.parent.socket.talk('x', 3);
								break;
							case global.KEY_UPGRADE_PEN:
								this.parent.socket.talk('x', 4);
								break;
							case global.KEY_UPGRADE_DAM:
								this.parent.socket.talk('x', 5);
								break;
							case global.KEY_UPGRADE_RLD:
								this.parent.socket.talk('x', 6);
								break;
							case global.KEY_UPGRADE_MOB:
								this.parent.socket.talk('x', 7);
								break;
							case global.KEY_UPGRADE_RGN:
								this.parent.socket.talk('x', 8);
								break;
							case global.KEY_UPGRADE_SHI:
								this.parent.socket.talk('x', 9);
								break;
						}
					}
					if (global.canUpgrade) {
						switch (event.keyCode) {
							case global.KEY_CHOOSE_1:
								this.parent.socket.talk('U', 0);
								break;
							case global.KEY_CHOOSE_2:
								this.parent.socket.talk('U', 1);
								break;
							case global.KEY_CHOOSE_3:
								this.parent.socket.talk('U', 2);
								break;
							case global.KEY_CHOOSE_4:
								this.parent.socket.talk('U', 3);
								break;
							case global.KEY_CHOOSE_5:
								this.parent.socket.talk('U', 4);
								break;
							case global.KEY_CHOOSE_6:
								this.parent.socket.talk('U', 5);
								break;
							case global.KEY_CHOOSE_7:
								this.parent.socket.talk('U', 6);
								break;
							case global.KEY_CHOOSE_8:
								this.parent.socket.talk('U', 7);
								break;
						}
					}
				}
			}
		}, {
			key: "keyboardUp",
			value: function keyboardUp(event) {
				switch (event.keyCode) {
					case global.KEY_UP_ARROW:
					case global.KEY_UP:
						this.parent.socket.cmd.set(0, false);
						break;
					case global.KEY_DOWN_ARROW:
					case global.KEY_DOWN:
						this.parent.socket.cmd.set(1, false);
						break;
					case global.KEY_LEFT_ARROW:
					case global.KEY_LEFT:
						this.parent.socket.cmd.set(2, false);
						break;
					case global.KEY_RIGHT_ARROW:
					case global.KEY_RIGHT:
						this.parent.socket.cmd.set(3, false);
						break;
					case global.KEY_MOUSE_0:
						this.parent.socket.cmd.set(4, false);
						break;
					case global.KEY_MOUSE_1:
						this.parent.socket.cmd.set(5, false);
						break;
					case global.KEY_MOUSE_2:
						this.parent.socket.cmd.set(6, false);
						break;
				}
			}
		}, {
			key: "mouseDown",
			value: function mouseDown(mouse) {
				switch (mouse.button) {
					case 0:
						var mpos = {
							x: mouse.clientX,
							y: mouse.clientY
						};
						var statIndex = global.clickables.stat.check(mpos);
						if (statIndex !== -1) this.parent.socket.talk('x', statIndex);else if (global.clickables.skipUpgrades.check(mpos) !== -1) global.clearUpgrades();else {
							var upgradeIndex = global.clickables.upgrade.check(mpos);
							if (upgradeIndex !== -1) this.parent.socket.talk('U', upgradeIndex);else this.parent.socket.cmd.set(4, true);
						}
						break;
					case 1:
						this.parent.socket.cmd.set(5, true);
						break;
					case 2:
						this.parent.socket.cmd.set(6, true);
						break;
				}
			}
		}, {
			key: "mouseUp",
			value: function mouseUp(mouse) {
				switch (mouse.button) {
					case 0:
						this.parent.socket.cmd.set(4, false);
						break;
					case 1:
						this.parent.socket.cmd.set(5, false);
						break;
					case 2:
						this.parent.socket.cmd.set(6, false);
						break;
				}
			}
			// Mouse location (we send target information in the heartbeat)

		}, {
			key: "gameInput",
			value: function gameInput(mouse) {
				this.parent.target.x = mouse.clientX - this.width / 2;
				this.parent.target.y = mouse.clientY - this.height / 2;
				global.target = this.parent.target;
				global.statHover = global.clickables.hover.check({
					x: mouse.clientX,
					y: mouse.clientY
				}) === 0;
			}
		}]);

		return Canvas;
	}();
	window.canvas = new Canvas();
	var c = window.canvas.cv;
	var ctx = c.getContext('2d');
	var c2 = document.createElement('canvas');
	var ctx2 = c2.getContext('2d');
	ctx2.imageSmoothingEnabled = true;

	// Animation things
	function isInView(x, y, r) {
		var mid = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

		var ratio = getRatio();
		r += config.graphical.borderChunk;
		if (mid) {
			ratio *= 2;
			return x > -global.screenWidth / ratio - r && x < global.screenWidth / ratio + r && y > -global.screenHeight / ratio - r && y < global.screenHeight / ratio + r;
		}
		return x > -r && x < global.screenWidth / ratio + r && y > -r && y < global.screenHeight / ratio + r;
	}

	function Smoothbar(value, speed) {
		var sharpness = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

		var time = Date.now();
		var display = value;
		var oldvalue = value;
		return {
			set: function set(val) {
				if (value !== val) {
					oldvalue = display;
					value = val;
					time = Date.now();
				}
			},
			get: function get() {
				var timediff = (Date.now() - time) / 1000;
				display = timediff < speed ? oldvalue + (value - oldvalue) * Math.pow(timediff / speed, 1 / sharpness) : value;
				return display;
			}
		};
	}

	// Some stuff we need before we can set up the socket
	var sync = [];
	var clockDiff = 0;
	var serverStart = 0;
	var lag = function () {
		var lags = [];
		return {
			get: function get() {
				if (!lags.length) return 0;
				var sum = lags.reduce(function (a, b) {
					return a + b;
				});
				return sum / lags.length;
			},
			add: function add(l) {
				lags.push(l);
				if (lags.length > config.lag.memory) {
					lags.splice(0, 1);
				}
			}
		};
	}();
	var getNow = function getNow() {
		return Date.now() - clockDiff - serverStart;
	};
	var player = {
		vx: 0,
		vy: 0,
		lastvx: 0,
		lastvy: 0,
		renderx: player.x,
		rendery: player.y,
		lastx: player.x,
		lasty: player.y,
		target: window.canvas.target,
		name: '',
		lastUpdate: 0,
		time: 0
	};

	// Jumping the gun on motion
	var moveCompensation = function () {
		var xx = 0,
		    yy = 0,
		    vx = 0,
		    vy = 0;
		return {
			reset: function reset() {
				xx = 0;
				yy = 0;
			},
			get: function get() {
				if (config.lag.unresponsive) {
					return {
						x: 0,
						y: 0
					};
				}
				return {
					x: xx,
					y: yy
				};
			},
			iterate: function iterate(g) {
				if (global.died || global.gameStart) return 0;
				// Add motion
				var damp = _gui.accel / _gui.topSpeed,
				    len = Math.sqrt(g.x * g.x + g.y * g.y);
				vx += _gui.accel * g.x / len;
				vy += _gui.accel * g.y / len;
				// Dampen motion
				var motion = Math.sqrt(vx * vx + vy * vy);
				if (motion > 0 && damp) {
					var finalvelocity = motion / (damp / roomSpeed + 1);
					vx = finalvelocity * vx / motion;
					vy = finalvelocity * vy / motion;
				}
				xx += vx;
				yy += vy;
			}
		};
	}();

	// Prepare the websocket for definition
	var socketInit = function () {
		// Inital setup stuff
		window.WebSocket = window.WebSocket || window.MozWebSocket;
		var encode = function () {
			// unsigned 8-bit integer
			var arrUint8 = new Uint8Array(1);
			// unsigned 16-bit integer
			var arrUint16 = new Uint16Array(1);
			var charUint16 = new Uint8Array(arrUint16.buffer);
			// unsigned 32-bit integer
			var arrUint32 = new Uint32Array(1);
			var charUint32 = new Uint8Array(arrUint32.buffer);
			// 32-bit float
			var arrFloat32 = new Float32Array(1);
			var charFloat32 = new Uint8Array(arrFloat32.buffer);
			// build some useful internal functions
			var typeEncoder = function typeEncoder(type, number) {
				var output = '';
				switch (type) {
					case 'RawUint8':
						arrUint8[0] = number;
						return String.fromCharCode(arrUint8[0]);
					case 'RawUint16':
						arrUint16[0] = number;
						return String.fromCharCode(charUint16[0], charUint16[1]);
					case 'Uint8':
						arrUint8[0] = number;
						return '0' + String.fromCharCode(arrUint8[0]);
					case 'Uint16':
						arrUint16[0] = number;
						return '1' + String.fromCharCode(charUint16[0], charUint16[1]);
					case 'Uint32':
						arrUint32[0] = number;
						return '2' + String.fromCharCode(charUint32[0], charUint32[1], charUint32[2], charUint32[3]);
					case 'Sint8':
						arrUint8[0] = -1 - number;
						return '3' + String.fromCharCode(arrUint8[0]);
					case 'Sint16':
						arrUint16[0] = -1 - number;
						return '4' + String.fromCharCode(charUint16[0], charUint16[1]);
					case 'Sint32':
						arrUint32[0] = -1 - number;
						return '5' + String.fromCharCode(charUint32[0], charUint32[1], charUint32[2], charUint32[3]);
					case 'Float32':
						arrFloat32[0] = number;
						return '6' + String.fromCharCode(charFloat32[0], charFloat32[1], charFloat32[2], charFloat32[3]);
					case 'String8':
						return '7' + typeEncoder('RawUint16', number.length) + number;
					case 'String16':
						for (var i = 0, strLen = number.length; i < strLen; i++) {
							output += typeEncoder('RawUint16', number.charCodeAt(i));
						}
						return '8' + typeEncoder('RawUint16', output.length) + output;
					default:
						throw new Error('Unknown encoding type.');
				}
			};
			var findType = function findType(value) {
				if (typeof value === 'string') {
					for (var i = 0; i < value.length; i++) {
						if (value.charCodeAt(i) > 255) return 'String16';
					}
					return 'String8';
				}
				if (typeof value === 'boolean') return 'Uint8';
				if (typeof value !== 'number') {
					console.log(value);
					throw new Error('Unencodable data type');
				}
				if (value != Math.round(value)) return 'Float32';
				if (value < 0) {
					if (value >= -256) return 'Sint8';
					if (value >= -65535) return 'Sint16';
					if (value >= -4294967295) return 'Sint32';
				} else {
					if (value < 256) return 'Uint8';
					if (value < 65535) return 'Uint16';
					if (value < 4294967295) return 'Uint32';
				}
				return 'Float32';
			};
			// build the function
			return function (arr) {
				var verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

				var output = arr.splice(0, 1)[0];
				if (typeof output !== 'string') throw new Error('No identification code!');
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var value = _step.value;

						output += typeEncoder(findType(value), value);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				;
				var len = output.length;
				var buffer = new ArrayBuffer(len);
				var integerView = new Uint8Array(buffer);
				for (var i = 0; i < len; i++) {
					integerView[i] = output.charCodeAt(i);
				}
				if (verbose) {
					console.log('OUTPUT: ' + integerView);
					console.log('RAW OUTPUT: ' + output);
					console.log('SIZE: ' + len);
				}
				return buffer;
			};
		}();

		var decode = function () {
			// unsigned 8-bit integer (none needed)
			// unsigned 16-bit integer
			var arrUint16 = new Uint16Array(1);
			var charUint16 = new Uint8Array(arrUint16.buffer);
			// unsigned 32-bit integer
			var arrUint32 = new Uint32Array(1);
			var charUint32 = new Uint8Array(arrUint32.buffer);
			// 32-bit float
			var arrFloat32 = new Float32Array(1);
			var charFloat32 = new Uint8Array(arrFloat32.buffer);
			// build a useful internal function
			var typeDecoder = function typeDecoder(str, type, offset) {
				switch (type) {
					case 'Uint8':
						return str.charCodeAt(offset++);
					case 'Uint16':
						for (var i = 0; i < 2; i++) {
							charUint16[i] = str.charCodeAt(offset++);
						}
						return arrUint16[0];
					case 'Uint32':
						for (var _i = 0; _i < 4; _i++) {
							charUint32[_i] = str.charCodeAt(offset++);
						}
						return arrUint32[0];
					case 'Sint8':
						return -1 - str.charCodeAt(offset++);
					case 'Sint16':
						for (var _i2 = 0; _i2 < 2; _i2++) {
							charUint16[_i2] = str.charCodeAt(offset++);
						}
						return -1 - arrUint16[0];
					case 'Sint32':
						for (var _i3 = 0; _i3 < 4; _i3++) {
							charUint32[_i3] = str.charCodeAt(offset++);
						}
						return -1 - arrUint32[0];
					case 'Float32':
						for (var _i4 = 0; _i4 < 4; _i4++) {
							charFloat32[_i4] = str.charCodeAt(offset++);
						}
						return arrFloat32[0];
					default:
						throw new Error('Unknown decoding type.');
				}
			};
			// actually decode it 
			return function (raw) {
				try {
					var intView = new Uint8Array(raw);
					var str = '';
					for (var i = 0, len = intView.length; i < len; i++) {
						str += String.fromCharCode(intView[i]);
					}
					var offset = 1;
					var output = [str.charAt(0)];
					while (offset < str.length) {
						switch (str[offset++]) {
							case '0':
								output.push(typeDecoder(str, 'Uint8', offset));
								offset++;
								break;
							case '1':
								output.push(typeDecoder(str, 'Uint16', offset));
								offset += 2;
								break;
							case '2':
								output.push(typeDecoder(str, 'Uint32', offset));
								offset += 4;
								break;
							case '3':
								output.push(typeDecoder(str, 'Sint8', offset));
								offset++;
								break;
							case '4':
								output.push(typeDecoder(str, 'Sint16', offset));
								offset += 2;
								break;
							case '5':
								output.push(typeDecoder(str, 'Sint32', offset));
								offset += 4;
								break;
							case '6':
								output.push(typeDecoder(str, 'Float32', offset));
								offset += 4;
								break;
							case '7':
								{
									// String8
									var _len2 = typeDecoder(str, 'Uint16', offset);offset += 2;
									output.push(str.slice(offset, offset + _len2));
									offset += _len2;
								}
								break;
							case '8':
								{
									// String16
									var _len3 = typeDecoder(str, 'Uint16', offset);offset += 2;
									var arr = str.slice(offset, offset + _len3);
									var buf = new Uint16Array(_len3 / 2);
									for (var _i5 = 0; _i5 < _len3; _i5 += 2) {
										buf[_i5 / 2] = typeDecoder(arr, 'Uint16', _i5);
									}
									output.push(String.fromCharCode.apply(null, buf));
									offset += _len3;
								}
								break;
							default:
								offset = str.length;
								throw new Error('Unknown decoding command. Decoding exited.');
						}
					}
					return output;
				} catch (err) {
					console.log(err);
					return -1;
				}
			};
		}();
		// This is what we use to figure out what the hell the server is telling us to look at
		var convert = function () {
			// Make a data crawler
			var get = function () {
				var index = 0,
				    crawlData = [];
				return {
					next: function next() {
						if (index >= crawlData.length) {
							console.log(crawlData);
							throw new Error('Trying to crawl past the end of the provided data!');
						} else {
							return crawlData[index++];
						}
					},
					set: function set(data) {
						crawlData = data;
						index = 0;
					}
				};
			}();
			// Return our handlers 
			return {
				begin: function begin(data) {
					return get.set(data);
				},
				// Make a data convertor
				data: function () {
					// Make a converter
					var process = function () {
						// Some status manager constructors
						var GunContainer = function () {
							function physics(g) {
								g.isUpdated = true;
								if (g.motion || g.position) {
									// Simulate recoil
									g.motion -= 0.2 * g.position;
									g.position += g.motion;
									if (g.position < 0) {
										// Bouncing off the back
										g.position = 0;
										g.motion = -g.motion;
									}
									if (g.motion > 0) {
										g.motion *= 0.5;
									}
								}
							}
							function updatePhysics(a) {
								var i = 0;
								var length = a.length;
								for (; i < length; i++) {
									physics(a[i]);
								}
							}
							return function (n) {
								var a = [];
								for (var i = 0; i < n; i++) {
									a.push({
										motion: 0,
										position: 0,
										isUpdated: true
									});
								}
								return {
									getPositions: function getPositions() {
										return a.map(function (g) {
											return g.position;
										});
									},
									//update: () => a.forEach(physics),
									update: function update() {
										return updatePhysics(a);
									},
									fire: function fire(i, power) {
										if (a[i].isUpdated) a[i].motion += Math.sqrt(power) / 20;
										a[i].isUpdated = false;
									},
									length: a.length
								};
							};
						}();

						function Status() {
							var state = 'normal',
							    time = getNow();
							return {
								set: function set(val) {
									if (val !== state || state === 'injured') {
										if (state !== 'dying') time = getNow();
										state = val;
									}
								},
								getFade: function getFade() {
									return state === 'dying' || state === 'killed' ? 1 - Math.min(1, (getNow() - time) / 300) : 1;
								},
								getColor: function getColor() {
									return '#FFFFFF';
								},
								getBlend: function getBlend() {
									var o = state === 'normal' || state === 'dying' ? 0 : 1 - Math.min(1, (getNow() - time) / 80);
									if (getNow() - time > 500 && state === 'injured') {
										state = 'normal';
									}
									return o;
								}
							};
						}
						// Return our function
						return function () {
							var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

							var isNew = z.facing == null; // For whatever reason arguments.length is uglified poorly...
							// Figure out what kind of data we're looking at
							var type = get.next();
							// Handle it appropiately
							if (type & 0x01) {
								// issa turret
								z.facing = get.next();
								z.layer = get.next();
							} else {
								// issa something real
								z.interval = metrics.rendergap;
								z.id = get.next();
								// Determine if this is an new entity or if we already know about it
								var iii = entities.findIndex(function (x) {
									return x.id === z.id;
								});
								if (iii !== -1) {
									// remove it if needed (this way we'll only be left with the dead/unused entities)
									z = entities.splice(iii, 1)[0];
								}
								// Change the use of the variable
								isNew = iii === -1;
								// If it's not new, save the memory data
								if (!isNew) {
									z.render.draws = true; // yay!!
									z.render.lastx = z.x;
									z.render.lasty = z.y;
									z.render.lastvx = z.vx;
									z.render.lastvy = z.vy;
									z.render.lastf = z.facing;
									z.render.lastRender = player.time;
								}
								// Either way, keep pulling information
								z.index = get.next();
								z.x = get.next();
								z.y = get.next();
								z.vx = get.next();
								z.vy = get.next();
								z.size = get.next();
								z.facing = get.next();
								z.vfacing = get.next();
								z.twiggle = get.next();
								z.layer = get.next();
								z.color = get.next();
								// Update health, flagging as injured if needed
								if (isNew) {
									z.health = get.next() / 255;
									z.shield = get.next() / 255;
								} else {
									var hh = z.health,
									    ss = z.shield;
									z.health = get.next() / 255;
									z.shield = get.next() / 255;
									// Update stuff
									if (z.health < hh || z.shield < ss) {
										z.render.status.set('injured');
									} else if (z.render.status.getFade() !== 1) {
										// If it turns out that we thought it was dead and it wasn't
										z.render.status.set('normal');
									}
								}
								z.drawsHealth = !!(type & 0x02); // force to boolean
								z.alpha = get.next() / 255;
								// Nameplates
								if (type & 0x04) {
									// has a nameplate
									z.name = get.next();
									z.score = get.next();
								}
								z.nameplate = type & 0x04;
								// If it's new, give it rendering information
								if (isNew) {
									z.render = {
										draws: false,
										expandsWithDeath: z.drawsHealth,
										lastRender: player.time,
										x: z.x,
										y: z.y,
										lastx: z.x - metrics.rendergap * config.roomSpeed * (1000 / 120) * z.vx,
										lasty: z.y - metrics.rendergap * config.roomSpeed * (1000 / 120) * z.vy,
										lastvx: z.vx,
										lastvy: z.vy,
										lastf: z.facing,
										f: z.facing,
										h: z.health,
										s: z.shield,
										interval: metrics.rendergap,
										slip: 0,
										status: Status(),
										health: Smoothbar(z.health, 0.5, 5),
										shield: Smoothbar(z.shield, 0.5, 5)
									};
								}
								// Update the rendering healthbars
								z.render.health.set(z.health);
								z.render.shield.set(z.shield);
								// Figure out if the class changed (and if so, refresh the guns and turrets)
								if (!isNew && z.oldIndex !== z.index) isNew = true;
								z.oldIndex = z.index;
							}
							// If it needs to have a gun container made, make one
							var gunnumb = get.next();
							if (isNew) {
								z.guns = GunContainer(gunnumb);
							} else if (gunnumb !== z.guns.length) {
								throw new Error('Mismatch between data gun number and remembered gun number!');
							}
							// Decide if guns need to be fired one by one
							for (var i = 0; i < gunnumb; i++) {
								var time = get.next(),
								    power = get.next();
								if (time > player.lastUpdate - metrics.rendergap) {
									// shoot it
									z.guns.fire(i, power);
								}
							}
							// Update turrets
							var turnumb = get.next();
							if (turnumb) {
								var b = 1;
							}
							if (isNew) {
								z.turrets = [];
								for (var _i6 = 0; _i6 < turnumb; _i6++) {
									z.turrets.push(process());
								}
							} else {
								if (z.turrets.length !== turnumb) {
									throw new Error('Mismatch between data turret number and remembered turret number!');
								}
								//z.turrets.forEach(tur => { tur = process(tur); });
								var _i7 = 0;
								var length = z.turrets.length;
								for (; _i7 < length; _i7++) {
									z.turrets[_i7] = process(z.turrets[_i7]);
								}
								//for (let tur of z.turrets) {
								//   tur = process(tur); 
								//}
							}
							// Return our monsterous creation
							return z;
						};
					}();
					// And this is the function we return that crawls some given data and reports it
					return function () {
						// Set up the output thingy+
						var output = [];
						// Get the number of entities and work through them
						for (var i = 0, len = get.next(); i < len; i++) {
							output.push(process());
						}
						// Handle the dead/leftover entities
						var f = 0;
						var flength = entities.length;
						//for (var e of entities) {
						for (; f < flength; f++) {
							// Kill them
							var e = entities[f];
							e.render.status.set(e.health === 1 ? 'dying' : 'killed');
							// And only push them if they're not entirely dead and still visible
							if (e.render.status.getFade() !== 0 && isInView(e.render.x - player.renderx, e.render.y - player.rendery, e.size, true)) {
								output.push(e);
							} else {
								if (e.render.textobjs != null) {
									//e.render.textobjs.forEach(o => o.remove());
									var _i8 = 0;
									var length = e.render.textobjs.length;
									for (; _i8 < length; _i8++) {
										e.render.textobjs.remove();
									}
									//for (let o of e.render.textobjs) {
									//   o.remove(); 
									//}
								}
							}
						};
						// Save the new entities list
						entities = output;
						entities.sort(function (a, b) {
							var sort = a.layer - b.layer;
							if (!sort) sort = b.id - a.id;
							if (!sort) throw new Error('tha fuq is up now');
							return sort;
						});
					};
				}(),
				// Define our gui convertor
				gui: function gui() {
					var index = get.next(),


					// Translate the encoded index
					indices = {
						topspeed: index & 0x0100,
						accel: index & 0x0080,
						skills: index & 0x0040,
						statsdata: index & 0x0020,
						upgrades: index & 0x0010,
						points: index & 0x0008,
						score: index & 0x0004,
						label: index & 0x0002,
						fps: index & 0x0001
					};
					// Operate only on the values provided
					if (indices.fps) {
						_gui.fps = get.next();
					}
					if (indices.label) {
						_gui.type = get.next();
						_gui.color = get.next();
						_gui.playerid = get.next();
					}
					if (indices.score) {
						_gui.__s.setScore(get.next());
					}
					if (indices.points) {
						_gui.points = get.next();
					}
					if (indices.upgrades) {
						_gui.upgrades = [];
						for (var i = 0, len = get.next(); i < len; i++) {
							_gui.upgrades.push(get.next());
						}
					}
					if (indices.statsdata) {
						for (var _i9 = 9; _i9 >= 0; _i9--) {
							_gui.skills[_i9].name = get.next();
							_gui.skills[_i9].cap = get.next();
							_gui.skills[_i9].softcap = get.next();
						}
					}
					if (indices.skills) {
						var skk = parseInt(get.next(), 36).toString(16);
						skk = '0000000000'.substr(skk.length) + skk;
						_gui.skills[0].amount = parseInt(skk.slice(0, 1), 16);
						_gui.skills[1].amount = parseInt(skk.slice(1, 2), 16);
						_gui.skills[2].amount = parseInt(skk.slice(2, 3), 16);
						_gui.skills[3].amount = parseInt(skk.slice(3, 4), 16);
						_gui.skills[4].amount = parseInt(skk.slice(4, 5), 16);
						_gui.skills[5].amount = parseInt(skk.slice(5, 6), 16);
						_gui.skills[6].amount = parseInt(skk.slice(6, 7), 16);
						_gui.skills[7].amount = parseInt(skk.slice(7, 8), 16);
						_gui.skills[8].amount = parseInt(skk.slice(8, 9), 16);
						_gui.skills[9].amount = parseInt(skk.slice(9, 10), 16);
					}
					if (indices.accel) {
						_gui.accel = get.next();
					}
					if (indices.topspeed) {
						_gui.topspeed = get.next();
					}
				},
				// Make a minimap convertor
				minimap: function () {
					var loop = function () {
						// A test function
						function challenge(value, challenger) {
							return value[0] === challenger[0] && value[1] === challenger[1] && value[2] === challenger[2];
						}
						// The loop function definition
						return function () {
							// Pull the update order
							var type = get.next(),
							    x = get.next() * global.gameWidth / 255,
							    y = get.next() * global.gameHeight / 255,
							    color = get.next();
							// Fufill the order
							switch (type) {
								case -1:
									{
										// removal
										var index = minimap.findIndex(function (e) {
											return challenge(e, [x, y, color]);
										});
										if (index === -1) {
											console.log('Warning: Remove request for a minimap node we were not aware of.');
										} else {
											minimap.splice(index, 1);
										}
									}
									break;
								case 1:
									{
										//insertion
										minimap.push([x, y, color]);
									}
									break;
								default:
									console.log('Unknown minimap update request.');
							}
						};
					}();
					// The update function
					return function () {
						for (var i = 0, len = get.next(); i < len; i++) {
							loop();
						}
					};
				}(),
				// Define our leaderboard convertor
				leaderboard: function leaderboard() {
					var whoopswedesynced = false;
					// First crawl the remove orders
					var first = get.next();
					if (first === -1) {
						// o shit its a full refresh, nuke it and start over
						_leaderboard.purge();
					} else {
						// Remove things normally
						for (var i = 0, len = first; i < len; i++) {
							_leaderboard.remove(get.next());
						}
					}
					// Then do the next things
					for (var _i10 = 0, _len4 = get.next(); _i10 < _len4; _i10++) {
						var next = get.next();
						if (next < 0) {
							// It's an add index!
							var toadd = {
								id: -next,
								score: get.next(),
								index: get.next(),
								name: get.next(),
								color: get.next(),
								barcolor: get.next()
							};
							_leaderboard.add(toadd);
						} else {
							// It's an update index!
							var w = _leaderboard.update({
								id: next,
								score: get.next(),
								index: get.next()
							});
							if (w === -1) whoopswedesynced = true;
						}
					}
					return whoopswedesynced;
				}
			};
		}();
		// The initialization function (this is returned)
		return function (port) {
			console.log("trying to connect to server");
			var socket = new WebSocket('wss://' + window.location.hostname + ':' + port);
			console.log("Socket opened");
			// Set up our socket
			socket.binaryType = 'arraybuffer';
			socket.open = false;
			// Handle commands
			socket.cmd = function () {
				var flag = false;
				var commands = [false, // up
				false, // down
				false, // left
				false, // right
				false, // lmb
				false, // mmb
				false, // rmb 
				false];
				return {
					set: function set(index, value) {
						if (commands[index] !== value) {
							commands[index] = value;
							flag = true;
						}
					},
					talk: function talk() {
						flag = false;
						var o = 0;
						for (var i = 0; i < 8; i++) {
							if (commands[i]) o += Math.pow(2, i);
						}
						var ratio = getRatio();
						socket.talk('C', Math.round(window.canvas.target.x / ratio), Math.round(window.canvas.target.y / ratio), o);
					},
					check: function check() {
						return flag;
					},
					getMotion: function getMotion() {
						return {
							x: commands[3] - commands[2],
							y: commands[1] - commands[0]
						};
					}
				};
			}();
			// Learn how to talk
			socket.talk = function () {
				for (var _len5 = arguments.length, message = Array(_len5), _key2 = 0; _key2 < _len5; _key2++) {
					message[_key2] = arguments[_key2];
				}

				// Make sure the socket is open before we do anything
				if (!socket.open) return 1;
				socket.send(encode(message));
			};
			// Websocket functions for when stuff happens
			// This is for when the socket first opens
			socket.onopen = function socketOpen() {
				socket.open = true;
				global.message = 'That token is invalid, expired, or already in use on this server. Please try another one!';
				socket.talk('k', global.playerKey);
				console.log('Token submitted to the server for validation.');
				// define a pinging function
				socket.ping = function (payload) {
					socket.talk('p', payload);
				};
				console.log(socket.ping, global.socket, global.socket.ping);
				socket.commandCycle = timer.setInterval(function () {
					if (socket.cmd.check()) socket.cmd.talk();
				}, '', '8.33333333333m');
			};
			// Handle incoming messages
			socket.onmessage = function socketMessage(message) {
				// Make sure it looks legit.
				var m = decode(message.data);
				if (m === -1) {
					throw new Error('Malformed packet.');
				}
				// Decide how to interpret it
				switch (m.splice(0, 1)[0]) {
					case 'w':
						{
							// welcome to the game
							if (m[0]) {
								// Ask to spawn                    
								console.log('The server has welcomed us to the game room. Sending spawn request.');
								socket.talk('s', global.playerName, 1);
								global.message = '';
							}
						}
						break;
					case 'R':
						{
							// room setup
							global.gameWidth = m[0];
							global.gameHeight = m[1];
							roomSetup = JSON.parse(m[2]);
							serverStart = JSON.parse(m[3]);
							config.roomSpeed = m[4];
							console.log('Room data recieved. Commencing syncing process.');
							// Start the syncing process
							socket.talk('S', getNow());
						}
						break;
					case 'c':
						{
							// force camera move
							player.renderx = player.x = m[0];
							player.rendery = player.y = m[1];
							player.renderv = player.view = m[2];
							console.log('Camera moved!');
						}
						break;
					case 'S':
						{
							// clock syncing
							var clientTime = m[0],
							    serverTime = m[1],
							    laten = (getNow() - clientTime) / 2,
							    delta = getNow() - laten - serverTime;
							// Add the datapoint to the syncing data
							sync.push({
								delta: delta,
								latency: laten
							});
							// Do it again a couple times
							if (sync.length < 10) {
								// Wait a bit just to space things out
								setTimeout(function () {
									socket.talk('S', getNow());
								}, 10);
								global.message = "If your name starts with a h, ends with a t, and has 7 letters then i hope you die in real life. - " + sync.length + "/10...";
							} else {
								// Calculate the clock error
								sync.sort(function (e, f) {
									return e.latency - f.latency;
								});
								var median = sync[Math.floor(sync.length / 2)].latency;
								var sd = 0,
								    sum = 0,
								    valid = 0;
								var _iteratorNormalCompletion2 = true;
								var _didIteratorError2 = false;
								var _iteratorError2 = undefined;

								try {
									for (var _iterator2 = sync[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
										var e = _step2.value;

										sd += Math.pow(e.latency - median, 2);
									}
								} catch (err) {
									_didIteratorError2 = true;
									_iteratorError2 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion2 && _iterator2.return) {
											_iterator2.return();
										}
									} finally {
										if (_didIteratorError2) {
											throw _iteratorError2;
										}
									}
								}

								;
								sd = Math.sqrt(sd / sync.length);
								var _iteratorNormalCompletion3 = true;
								var _didIteratorError3 = false;
								var _iteratorError3 = undefined;

								try {
									for (var _iterator3 = sync[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
										var e = _step3.value;

										if (Math.abs(e.latency - median) < sd) {
											sum += e.delta;
											valid++;
										}
									}
								} catch (err) {
									_didIteratorError3 = true;
									_iteratorError3 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion3 && _iterator3.return) {
											_iterator3.return();
										}
									} finally {
										if (_didIteratorError3) {
											throw _iteratorError3;
										}
									}
								}

								;
								clockDiff = Math.round(sum / valid);
								// Start the game
								console.log(sync);
								console.log('Syncing complete, calculated clock difference ' + clockDiff + 'ms. Beginning game.');
								global.gameStart = true;
								global.message = '';
							}
						}
						break;
					case 'm':
						{
							// message
							messages.push({
								text: m[0],
								status: 2,
								alpha: 0,
								time: Date.now()
							});
						}
						break;
					case 'u':
						{
							// uplink
							// Pull the camera info
							var camtime = m[0],
							    camx = m[1],
							    camy = m[2],
							    camfov = m[3],
							    camvx = m[4],
							    camvy = m[5],


							// We'll have to do protocol decoding on the remaining data
							theshit = m.slice(6);
							// Process the data
							if (camtime > player.lastUpdate) {
								// Don't accept out-of-date information. 
								// Time shenanigans
								lag.add(getNow() - camtime);
								player.time = camtime + lag.get();
								metrics.rendergap = camtime - player.lastUpdate;
								if (metrics.rendergap <= 0) {
									console.log('yo some bullshit is up wtf');
								}
								player.lastUpdate = camtime;
								// Convert the gui and entities
								convert.begin(theshit);
								convert.gui();
								convert.data();
								// Save old physics values
								player.lastx = player.x;
								player.lasty = player.y;
								player.lastvx = player.vx;
								player.lastvy = player.vy;
								// Get new physics values
								player.x = camx;
								player.y = camy;
								player.vx = global.died ? 0 : camvx;
								player.vy = global.died ? 0 : camvy;
								// Figure out where we're rendering if we don't yet know
								if (isNaN(player.renderx)) {
									player.renderx = player.x;
								}
								if (isNaN(player.rendery)) {
									player.rendery = player.y;
								}
								moveCompensation.reset();
								// Fov stuff
								player.view = camfov;
								if (isNaN(player.renderv) || player.renderv === 0) {
									player.renderv = 2000;
								}
								// Metrics
								metrics.lastlag = metrics.lag;
								metrics.lastuplink = getNow();
							} else {
								console.log("Old data! Last given time: " + player.time + "; offered packet timestamp: " + camtime + ".");
							}
							// Send the downlink and the target
							socket.talk('d', Math.max(player.lastUpdate, camtime));
							socket.cmd.talk();
							updateTimes++; // metrics                                        
						}
						break;
					case 'b':
						{
							// broadcasted minimap
							convert.begin(m);
							convert.minimap();
							if (convert.leaderboard()) {
								// Request an update because of desync
								socket.talk('z');
							}
						}
						break;
					case 'p':
						{
							// ping
							metrics.latency = global.time - m[0];
						}
						break;
					case 'F':
						{
							// to pay respects
							global.finalScore = Smoothbar(0, 4);global.finalScore.set(m[0]);
							global.finalLifetime = Smoothbar(0, 5);global.finalLifetime.set(m[1]);
							global.finalKills = [Smoothbar(0, 3), Smoothbar(0, 4.5), Smoothbar(0, 2.5)];
							global.finalKills[0].set(m[2]);global.finalKills[1].set(m[3]);global.finalKills[2].set(m[4]);
							global.finalKillers = [];
							for (var i = 0; i < m[5]; i++) {
								global.finalKillers.push(m[6 + i]);
							}
							global.died = true;
							window.onbeforeunload = function () {
								return false;
							};
						}
						break;
					case 'K':
						{
							// kicked
							window.onbeforeunload = function () {
								return false;
							};
						}
						break;
					default:
						throw new Error('Unknown message index.');
				}
			};
			// Handle closing 
			socket.onclose = function socketClose() {
				socket.open = false;
				global.disconnected = true;
				clearInterval(socket.commandCycle);
				window.onbeforeunload = function () {
					return false;
				};
				console.log('Socket closed.');
			};
			// Notify about errors
			socket.onerror = function socketError(error) {
				console.log('WebSocket error: ' + error);
				var weberror = error;
				global.message = 'Socket error. Maybe another server will work.';
			};
			// Gift it to the rest of the world
			return socket;
		};
	}();

	// This starts the game and sets up the websocket
	function startGame() {
		console.log("trying to start game");
		// Get options
		submitToLocalStorage('optScreenshotMode');
		config.graphical.screenshotMode = document.getElementById('optScreenshotMode').checked;
		submitToLocalStorage('optFancy');
		config.graphical.pointy = !document.getElementById('optNoPointy').checked;
		submitToLocalStorage('optNoPointy');
		config.graphical.fancyAnimations = !document.getElementById('optFancy').checked;
		submitToLocalStorage('optPredictive');
		config.lag.unresponsive = document.getElementById('optPredictive').checked;
		submitToLocalStorage('optBorders');
		switch (document.getElementById('optBorders').value) {
			case 'normal':
				config.graphical.darkBorders = config.graphical.neon = false;
				break;
			case 'dark':
				config.graphical.darkBorders = true;
				config.graphical.neon = false;
				break;
			case 'glass':
				config.graphical.darkBorders = false;
				config.graphical.neon = true;
				break;
			case 'neon':
				config.graphical.darkBorders = config.graphical.neon = true;
				break;
		}
		submitToLocalStorage('optColors');
		var a = document.getElementById('optColors').value;
		color = color[a === '' ? 'normal' : a];
		// Other more important stuff
		var playerNameInput = document.getElementById('playerNameInput');
		var playerKeyInput = document.getElementById('playerKeyInput');
		// Name and keys
		submitToLocalStorage('playerNameInput');
		submitToLocalStorage('playerKeyInput');
		global.playerName = player.name = playerNameInput.value;
		global.playerKey = playerKeyInput.value.replace(/(<([^>]+)>)/ig, '').substring(0, 64);
		console.log("Loaded info from local stroage");
		// Change the screen
		global.screenWidth = window.innerWidth;
		global.screenHeight = window.innerHeight;
		document.getElementById('startMenuWrapper').style.maxHeight = '0px';
		document.getElementById('gameAreaWrapper').style.opacity = 1;
		console.log("Changed the screen");
		// Set up the socket
		if (!global.socket) {
			global.socket = socketInit('');
		}
		console.log("tried opening a socket.....");
		console.log(global.socket);
		if (!global.animLoopHandle) {
			animloop();
		}
		window.canvas.socket = global.socket;
		minimap = [];
		setInterval(function () {
			return moveCompensation.iterate(global.socket.cmd.getMotion());
		});
		document.getElementById('gameCanvas').focus();
		window.onbeforeunload = function () {
			return true;
		};
	}

	// Background clearing
	function clearScreen(clearColor, alpha) {
		ctx.fillStyle = clearColor;
		ctx.globalAlpha = alpha;
		ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);
		ctx.globalAlpha = 1;
	}

	// Text functions
	var measureText = function () {
		var div = document.createElement('div');
		document.body.appendChild(div);
		return function (text, fontSize) {
			var twod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			fontSize += config.graphical.fontSizeBoost;
			var w, h;
			div.style.font = 'bold ' + fontSize + 'px Segoe UI';
			div.style.padding = '0';
			div.style.margin = '0';
			div.style.position = 'absolute';
			div.style.visibility = 'hidden';
			div.innerHTML = text;
			w = div.clientWidth;
			h = div.clientHeight;
			return twod ? {
				width: w,
				height: h
			} : w;
		};
	}();
	var TextObj = function () {
		// A thing
		var floppy = function floppy() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var flagged = true;
			// Methods
			return {
				update: function update(newValue) {
					var eh = false;
					if (value == null) {
						eh = true;
					} else {
						if ((typeof newValue === "undefined" ? "undefined" : _typeof(newValue)) != (typeof value === "undefined" ? "undefined" : _typeof(value))) {
							eh = true;
						}
						// Decide what to do based on what type it is
						switch (typeof newValue === "undefined" ? "undefined" : _typeof(newValue)) {
							case 'number':
							case 'string':
								{
									if (newValue !== value) {
										eh = true;
									}
								}
								break;
							case 'object':
								{
									if (Array.isArray(newValue)) {
										if (newValue.length !== value.length) {
											eh = true;
										} else {
											for (var i = 0, len = newValue.length; i < len; i++) {
												if (newValue[i] !== value[i]) eh = true;
											}
										}
										break;
									}
								} // jshint ignore:line
							default:
								console.log(newValue);
								throw new Error('Unsupported type for a floppyvar!');
						}
					}
					// Update if neeeded
					if (eh) {
						flagged = true;
						value = newValue;
					}
				},
				publish: function publish() {
					return value;
				},
				check: function check() {
					if (flagged) {
						flagged = false;
						return true;
					}
					return false;
				}
			};
		};
		// An index
		var index = 0;
		return function () {
			var textcanvas = document.createElement('canvas');
			var canvasId = 'textCanvasNo' + index++;
			textcanvas.setAttribute('id', canvasId);
			var tctx = textcanvas.getContext('2d');
			tctx.imageSmoothingEnabled = false;
			// Init stuff
			var floppies = [floppy(''), floppy(0), floppy(0), floppy(1), floppy('#FF0000'), floppy('left')];
			var vals = floppies.map(function (f) {
				return f.publish();
			});
			var xx = 0;
			var yy = 0;
			return {
				draw: function draw(text, x, y, size, fill) {
					var align = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'left';
					var center = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
					var fade = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;

					size += config.graphical.fontSizeBoost;
					// Update stuff
					floppies[0].update(text);
					floppies[1].update(x);
					floppies[2].update(y);
					floppies[3].update(size);
					floppies[4].update(fill);
					floppies[5].update(align);
					// Check stuff
					if (floppies.some(function (f) {
						return f.check();
					})) {
						// Get text dimensions and resize/reset the canvas
						var offset = Math.max(3, size / 5);
						var dim = measureText(text, size - config.graphical.fontSizeBoost, true);
						tctx.canvas.height = dim.height + 2 * offset;
						tctx.canvas.width = dim.width + 2 * offset;
						// Redraw it
						switch (align) {
							case 'left':
							case 'start':
								xx = offset;
								break;
							case 'center':
								xx = tctx.canvas.width / 2;
								break;
							case 'right':
							case 'end':
								xx = tctx.canvas.width - offset;
								break;
						}
						yy = tctx.canvas.height / 2;
						// Draw it
						tctx.lineWidth = offset;
						tctx.font = 'bold ' + size + 'px Segoe UI';
						tctx.textAlign = align;
						tctx.textBaseline = 'middle';
						tctx.strokeStyle = color.black;
						tctx.fillStyle = fill;
						tctx.lineCap = 'round';
						tctx.lineJoin = 'round';
						tctx.strokeText(text, xx, yy);
						tctx.fillText(text, xx, yy);
					}
					// Draw the cached text
					ctx.save();
					ctx.imageSmoothingEnabled = false;
					ctx.drawImage(tctx.canvas, x - xx, y - yy * (1.05 + !center * 0.45));
					ctx.restore();
				},
				remove: function remove() {
					var element = document.getElementById(canvasId);
					if (element != null) element.parentNode.removeChild(element);
				}
			};
		};
	}();

	// Gui drawing functions
	function drawGuiRect(x, y, length, height) {
		var stroke = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

		switch (stroke) {
			case true:
				ctx.strokeRect(x, y, length, height);
				break;
			case false:
				ctx.fillRect(x, y, length, height);
				break;
		}
	}

	function drawGuiLine(x1, y1, x2, y2) {
		ctx.beginPath();
		ctx.lineTo(Math.round(x1) + 0.5, Math.round(y1) + 0.5);
		ctx.lineTo(Math.round(x2) + 0.5, Math.round(y2) + 0.5);
		ctx.closePath();
		ctx.stroke();
	}

	function drawBar(x1, x2, y, width, color) {
		ctx.beginPath();
		ctx.lineTo(x1, y);
		ctx.lineTo(x2, y);
		ctx.lineWidth = width;
		ctx.strokeStyle = color;
		ctx.closePath();
		ctx.stroke();
	}

	// Entity drawing (this is a function that makes a function)
	var drawEntity = function () {
		// Sub-drawing functions
		function drawPoly(context, centerX, centerY, radius, sides) {
			var angle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
			var fill = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

			angle += sides % 2 ? 0 : Math.PI / sides;
			// Start drawing
			context.beginPath();
			if (Array.isArray(sides)) {
				context.moveTo(centerX, centerY);
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = sides[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var point = _step4.value;

						context.lineTo(centerX + point[0], centerY + point[1]);
					}
					// And for some experimental testing we will draw the bounding box
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}

				var boundingbox = [];
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = sides[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var _point = _step5.value;

						boundingbox.push(_point);
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
			} else if (!sides) {
				// Circle
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
			} else if (sides < 0) {
				// Star
				if (config.graphical.pointy) context.lineJoin = 'miter';
				var dip = 1 - 6 / sides / sides;
				sides = -sides;
				context.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
				for (var i = 0; i < sides; i++) {
					var theta = (i + 1) / sides * 2 * Math.PI;
					var htheta = (i + 0.5) / sides * 2 * Math.PI;
					var c = {
						x: centerX + radius * dip * Math.cos(htheta + angle),
						y: centerY + radius * dip * Math.sin(htheta + angle)
					};
					var p = {
						x: centerX + radius * Math.cos(theta + angle),
						y: centerY + radius * Math.sin(theta + angle)
					};
					context.quadraticCurveTo(c.x, c.y, p.x, p.y);
				}
			} else if (sides > 1769) {
				// Star
				if (config.graphical.pointy) context.lineJoin = 'miter';
				var _dip = 1;
				sides = 1769;
				context.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
				for (var _i11 = 0; _i11 < 4; _i11++) {
					var theta = (_i11 + 1) / 3 * 2 * Math.PI;
					var htheta = (_i11 + 0.5) / 4 * 2 * Math.PI;
					var c = {
						x: centerX + radius * _dip * Math.cos(htheta + angle),
						y: centerY + radius * _dip * Math.sin(htheta + angle)
					};
					var p = {
						x: centerX + radius * Math.cos(theta + angle),
						y: centerY + radius * Math.sin(theta + angle)
					};
					context.quadraticCurveTo(c.x, c.y, p.x, p.y);
				}
			} else if (sides > 0) {
				// Polygon
				for (var _i12 = 0; _i12 < sides; _i12++) {
					var _theta = _i12 / sides * 2 * Math.PI;
					var x = centerX + radius * Math.cos(_theta + angle);
					var y = centerY + radius * Math.sin(_theta + angle);
					context.lineTo(x, y);
				}
			}
			context.closePath();
			context.stroke();
			if (fill) {
				context.fill();
			}
			context.lineJoin = 'round';
		}

		function drawTrapezoid(context, x, y, length, height, aspect, angle) {
			var h = [];
			h = aspect > 0 ? [height * aspect, height] : [height, -height * aspect];
			var r = [Math.atan2(h[0], length), Math.atan2(h[1], length)];
			var l = [Math.sqrt(length * length + h[0] * h[0]), Math.sqrt(length * length + h[1] * h[1])];

			context.beginPath();
			context.lineTo(x + l[0] * Math.cos(angle + r[0]), y + l[0] * Math.sin(angle + r[0]));
			context.lineTo(x + l[1] * Math.cos(angle + Math.PI - r[1]), y + l[1] * Math.sin(angle + Math.PI - r[1]));
			context.lineTo(x + l[1] * Math.cos(angle + Math.PI + r[1]), y + l[1] * Math.sin(angle + Math.PI + r[1]));
			context.lineTo(x + l[0] * Math.cos(angle - r[0]), y + l[0] * Math.sin(angle - r[0]));
			context.closePath();
			context.stroke();
			context.fill();
		}
		// The big drawing function
		return function (x, y, instance, ratio) {
			var alpha = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
			var scale = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
			var rot = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
			var turretsObeyRot = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
			var assignedContext = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
			var turretInfo = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
			var render = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : instance.render;

			var context = assignedContext ? assignedContext : ctx,
			    death = turretInfo ? 1 : render.status.getFade(),
			    fade = (turretInfo ? 1 : render.status.getFade()) * alpha,
			    drawSize = scale * ratio * instance.size,
			    m = mockups[instance.index],
			    xx = x,
			    yy = y,
			    source = turretInfo === false ? instance : turretInfo;
			if (render.expandsWithDeath) drawSize *= 1 + 0.5 * (1 - death);
			if (config.graphical.fancyAnimations && assignedContext != ctx2 && fade !== 1 || !config.graphical.fancyAnimations && fade < 0.05) {
				context = ctx2;
				context.canvas.width = context.canvas.height = drawSize * m.position.axis + ratio * 20;
				xx = context.canvas.width / 2 - drawSize * m.position.axis * m.position.middle.x * Math.cos(rot) / 4;
				yy = context.canvas.height / 2 - drawSize * m.position.axis * m.position.middle.x * Math.sin(rot) / 4;
			}
			context.lineCap = 'round';
			context.lineJoin = 'round';
			// Draw turrets beneath us
			if (source.turrets.length === m.turrets.length) {
				for (var i = 0; i < m.turrets.length; i++) {
					var t = m.turrets[i];
					if (t.layer === 0) {
						var ang = t.direction + t.angle + rot,
						    len = t.offset * drawSize;
						drawEntity(xx + len * Math.cos(ang), yy + len * Math.sin(ang), t, ratio, 1, drawSize / ratio / t.size * t.sizeFactor, source.turrets[i].facing + turretsObeyRot * rot, turretsObeyRot, context, source.turrets[i], render);
					}
				}
			} else {
				throw new Error("Mismatch turret number with mockup.");
			}
			// Draw guns  
			source.guns.update();
			context.lineWidth = Math.max(config.graphical.mininumBorderChunk, ratio * config.graphical.borderChunk);
			setColor(context, mixColors(color.grey, render.status.getColor(), render.status.getBlend()));
			if (source.guns.length === m.guns.length) {
				var positions = source.guns.getPositions();
				for (var _i13 = 0; _i13 < m.guns.length; _i13++) {
					var g = m.guns[_i13],
					    position = positions[_i13] / (g.aspect === 1 ? 2 : 1),
					    gx = g.offset * Math.cos(g.direction + g.angle + rot) + (g.length / 2 - position) * Math.cos(g.angle + rot),
					    gy = g.offset * Math.sin(g.direction + g.angle + rot) + (g.length / 2 - position) * Math.sin(g.angle + rot);
					drawTrapezoid(context, xx + drawSize * gx, yy + drawSize * gy, drawSize * (g.length / 2 - (g.aspect === 1 ? position * 2 : 0)), drawSize * g.width / 2, g.aspect, g.angle + rot);
				}
			} else {
				throw new Error("Mismatch gun number with mockup.");
			}
			// Draw body
			context.globalAlpha = 1;
			setColor(context, mixColors(getColor(instance.color), render.status.getColor(), render.status.getBlend()));
			//if (m.customshape !== undefined) {
			//drawPoly(context, xx, yy, drawSize / m.size * m.realSize, m.customshape, rot);
			//} else {
			drawPoly(context, xx, yy, drawSize / m.size * m.realSize, m.shape, rot);
			//}
			// Draw turrets above us
			if (source.turrets.length === m.turrets.length) {
				for (var _i14 = 0; _i14 < m.turrets.length; _i14++) {
					var _t = m.turrets[_i14];
					if (_t.layer === 1) {
						var _ang = _t.direction + _t.angle + rot,
						    _len6 = _t.offset * drawSize;
						drawEntity(xx + _len6 * Math.cos(_ang), yy + _len6 * Math.sin(_ang), _t, ratio, 1, drawSize / ratio / _t.size * _t.sizeFactor, source.turrets[_i14].facing + turretsObeyRot * rot, turretsObeyRot, context, source.turrets[_i14], render);
					}
				}
			} else {
				throw new Error("Mismatch turret number with mockup.");
			}
			if (assignedContext == false && context != ctx) {
				ctx.save();
				ctx.globalAlpha = fade;
				ctx.imageSmoothingEnabled = false;
				//ctx.globalCompositeOperation = "overlay";
				ctx.filter = 'blur(' + Math.round(config.graphical.deathBlurAmount - config.graphical.deathBlurAmount * fade) + 'px)';
				ctx.drawImage(context.canvas, x - xx, y - yy);
				ctx.restore();
				//ctx.globalCompositeOperation = "source-over";
			}
		};
	}();

	function drawHealth(x, y, instance, ratio, alpha) {
		var fade = instance.render.status.getFade();
		fade *= fade;
		ctx.globalAlpha = fade;
		// Draw health bar
		ctx.globalAlpha = Math.pow(instance.render.status.getFade(), 2);
		var size = instance.size * ratio;
		var m = mockups[instance.index];
		var realSize = size / m.size * m.realSize;
		// Draw health
		if (instance.drawsHealth) {
			var health = instance.render.health.get();
			var shield = instance.render.shield.get();
			if (health < 1 || shield < 1) {
				var yy = y + 1.1 * realSize + 15;
				ctx.globalAlpha = alpha * alpha * fade;
				drawBar(x - size, x + size, yy, 3 + config.graphical.barChunk, color.black);
				drawBar(x - size, x - size + 2 * size * health, yy, 3, color.lgreen);
				if (shield) {
					ctx.globalAlpha = (0.3 + shield * 0.3) * alpha * alpha * fade;
					drawBar(x - size, x - size + 2 * size * shield, yy, 3, color.teal);
					ctx.globalAlpha = 1;
				}
			}
		}
		// Draw label
		if (instance.nameplate && instance.id !== _gui.playerid) {
			if (instance.render.textobjs == null) instance.render.textobjs = [TextObj(), TextObj()];
			ctx.globalAlpha = alpha;
			if (instance.name !== "\0") {
				instance.render.textobjs[0].draw(instance.name, x, y - realSize - 30, 16, color.guiwhite, 'center');
				instance.render.textobjs[1].draw(handleLargeNumber(instance.score, true), x, y - realSize - 16, 8, color.guiwhite, 'center');
			} else {
				instance.render.textobjs[0].draw(x, y - realSize - 30, 16, color.lavender, 'center');
				instance.render.textobjs[1].draw(x, y - realSize - 16, 8, color.lavender, 'center');
			}
			ctx.globalAlpha = 1;
		}
	}

	// Start animation
	window.requestAnimFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
			//timer.setTimeout(callback, '', '8.33333333333m');
		};
	}();
	window.cancelAnimFrame = function () {
		return window.cancelAnimationFrame || window.mozCancelAnimationFrame;
	}();

	// Drawing states
	var gameDraw = function () {
		var statMenu = Smoothbar(0, 0.7, 1.5);
		var upgradeMenu = Smoothbar(0, 2, 3);
		// Define the graph constructor
		function graph() {
			var data = [];
			return function (point, x, y, w, h, col) {
				// Add point and push off old ones
				data.push(point);
				while (data.length > w) {
					data.splice(0, 1);
				}
				// Get scale
				var min = Math.min.apply(Math, data),
				    max = Math.max.apply(Math, data),
				    range = max - min;
				// Draw zero
				if (max > 0 && min < 0) {
					drawBar(x, x + w, y + h * max / range, 2, color.guiwhite);
				}
				// Draw points
				ctx.beginPath();
				var i = -1;
				var _iteratorNormalCompletion6 = true;
				var _didIteratorError6 = false;
				var _iteratorError6 = undefined;

				try {
					for (var _iterator6 = data[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						var p = _step6.value;

						if (!++i) {
							ctx.moveTo(x, y + h * (max - p) / range);
						} else {
							ctx.lineTo(x + i, y + h * (max - p) / range);
						}
					}
				} catch (err) {
					_didIteratorError6 = true;
					_iteratorError6 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion6 && _iterator6.return) {
							_iterator6.return();
						}
					} finally {
						if (_didIteratorError6) {
							throw _iteratorError6;
						}
					}
				}

				;
				ctx.lineWidth = 1;
				ctx.strokeStyle = col;
				ctx.stroke();
			};
		}
		// Lag compensation functions
		var compensation = function () {
			// Protected functions
			function interpolate(p1, p2, v1, v2, ts, tt) {
				var k = Math.cos((1 + tt) * Math.PI);
				return 0.5 * (((1 + tt) * v1 + p1) * (k + 1) + (-tt * v2 + p2) * (1 - k));
			}

			function extrapolate(p1, p2, v1, v2, ts, tt) {
				return p2 + (p2 - p1) * tt; /*v2 + 0.5 * tt * (v2 - v1) * ts*/
			}
			// Useful thing
			function angleDifference(sourceA, targetA) {
				var mod = function mod(a, n) {
					return (a % n + n) % n;
				};
				var a = targetA - sourceA;
				return mod(a + Math.PI, 2 * Math.PI) - Math.PI;
			}
			// Constructor
			return function () {
				// Protected vars
				var timediff = 0,
				    t = 0,
				    tt = 0,
				    ts = 0;
				// Methods
				return {
					set: function set() {
						var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : player.time;
						var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : metrics.rendergap;

						t = Math.max(getNow() - time - 80, -interval);
						if (t > 150 && t < 1000) {
							t = 150;
						}
						if (t > 1000) {
							t = 1000 * 1000 * Math.sin(t / 1000 - 1) / t + 1000;
						}
						tt = t / interval;
						ts = config.roomSpeed * 60 * t / 1000;
					},
					predict: function predict(p1, p2, v1, v2) {
						return t >= 0 ? extrapolate(p1, p2, v1, v2, ts, tt) : interpolate(p1, p2, v1, v2, ts, tt);
					},
					predictFacing: function predictFacing(f1, f2) {
						return f1 + (1 + tt) * angleDifference(f1, f2);
					},
					getPrediction: function getPrediction() {
						return t;
					}
				};
			};
		}();
		// Make graphs
		var timingGraph = graph(),
		    lagGraph = graph(),
		    gapGraph = graph();
		// The skill bar dividers
		var ska = function () {
			function make(x) {
				return Math.log(4 * x + 1) / Math.log(5);
			}
			var a = [];
			for (var i = 0; i < config.gui.expectedMaxSkillLevel * 2; i++) {
				a.push(make(i / config.gui.expectedMaxSkillLevel));
			}
			// The actual lookup function
			return function (x) {
				return a[x];
			};
		}();
		// Text objects
		var text = {
			skillNames: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			skillKeys: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			skillValues: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			skillPoints: TextObj(),
			score: TextObj(),
			name: TextObj(),
			class: TextObj(),
			debug: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			lbtitle: TextObj(),
			leaderboard: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			upgradeNames: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			upgradeKeys: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			skipUpgrades: TextObj()
		};
		// The drawing loop
		return function (ratio) {
			//lag.set();
			var GRAPHDATA = 0;
			// Prep stuff
			renderTimes++;

			var px = void 0,
			    py = void 0;{
				// Move the camera
				var motion = compensation();
				motion.set();
				var smear = {
					x: 0,
					y: 0
				}; // moveCompensation.get();
				GRAPHDATA = motion.getPrediction();
				// Don't move the camera if you're dead. This helps with jitter issues
				player.renderx = motion.predict(player.lastx, player.x, player.lastvx, player.vx) + smear.x;
				player.rendery = motion.predict(player.lasty, player.y, player.lastvy, player.vy) + smear.y;
				//player.renderx += (desiredx - player.renderx) / 5;
				//player.rendery += (desiredy - player.rendery) / 5;
				px = ratio * player.renderx;
				py = ratio * player.rendery;
			}

			{
				// Clear the background + draw grid 
				clearScreen(color.white, 1);
				clearScreen(color.guiblack, 0.1);

				var W = roomSetup[0].length,
				    H = roomSetup.length,
				    i = 0;
				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;

				try {
					for (var _iterator7 = roomSetup[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var row = _step7.value;

						var j = 0;
						var _iteratorNormalCompletion8 = true;
						var _didIteratorError8 = false;
						var _iteratorError8 = undefined;

						try {
							for (var _iterator8 = row[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
								var cell = _step8.value;

								var left = Math.max(0, ratio * j * global.gameWidth / W - px + global.screenWidth / 2),
								    top = Math.max(0, ratio * i * global.gameHeight / H - py + global.screenHeight / 2),
								    right = Math.min(global.screenWidth, ratio * (j + 1) * global.gameWidth / W - px + global.screenWidth / 2),
								    bottom = Math.min(global.screenHeight, ratio * (i + 1) * global.gameHeight / H - py + global.screenHeight / 2);
								ctx.globalAlpha = 1;
								ctx.fillStyle = config.graphical.screenshotMode ? color.guiwhite : color.white;
								ctx.fillRect(left, top, right - left, bottom - top);
								ctx.globalAlpha = 0.3;
								ctx.fillStyle = config.graphical.screenshotMode ? color.guiwhite : getZoneColor(cell, true);
								ctx.fillRect(left, top, right - left, bottom - top);
								j++;
							}
						} catch (err) {
							_didIteratorError8 = true;
							_iteratorError8 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion8 && _iterator8.return) {
									_iterator8.return();
								}
							} finally {
								if (_didIteratorError8) {
									throw _iteratorError8;
								}
							}
						}

						;
						i++;
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7.return) {
							_iterator7.return();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}

				;
				ctx.lineWidth = 1;
				ctx.strokeStyle = config.graphical.screenshotMode ? color.guiwhite : color.guiblack;
				ctx.globalAlpha = 0.04;
				ctx.beginPath();
				var gridsize = 30 * ratio;
				for (var x = (global.screenWidth / 2 - px) % gridsize; x < global.screenWidth; x += gridsize) {
					ctx.moveTo(x, 0);
					ctx.lineTo(x, global.screenHeight);
				}
				for (var y = (global.screenHeight / 2 - py) % gridsize; y < global.screenHeight; y += gridsize) {
					ctx.moveTo(0, y);
					ctx.lineTo(global.screenWidth, y);
				}
				ctx.stroke();
				ctx.globalAlpha = 1;
			}

			{
				// Draw things 
				/*
    entities.forEach(function entitydrawingloop(instance) {
        if (!instance.render.draws) {
            return 1;
        }
        let motion = compensation();
        if (instance.render.status.getFade() === 1) {
            motion.set();
        } else {
            motion.set(instance.render.lastRender, instance.render.interval);
        }
        instance.render.x = motion.predict(instance.render.lastx, instance.x, instance.render.lastvx, instance.vx);
        instance.render.y = motion.predict(instance.render.lasty, instance.y, instance.render.lastvy, instance.vy);
        instance.render.f = (instance.id === gui.playerid && !instance.twiggle) ?
            Math.atan2(target.y, target.x) :
            motion.predictFacing(instance.render.lastf, instance.facing);
        let x = (instance.id === gui.playerid) ? 0 : ratio * instance.render.x - px,
            y = (instance.id === gui.playerid) ? 0 : ratio * instance.render.y - py;
        x += global.screenWidth / 2;
        y += global.screenHeight / 2;
        drawEntity(x, y, instance, ratio, instance.alpha, 1.1, instance.render.f);
    });
    */
				var entitydrawingloop = function entitydrawingloop(instance) {
					if (!instance.render.draws) {
						return 1;
					}
					var motion = compensation();
					if (instance.render.status.getFade() === 1) {
						motion.set();
					} else {
						motion.set(instance.render.lastRender, instance.render.interval);
					}
					instance.render.x = motion.predict(instance.render.lastx, instance.x, instance.render.lastvx, instance.vx);
					instance.render.y = motion.predict(instance.render.lasty, instance.y, instance.render.lastvy, instance.vy);
					instance.render.f = instance.id === _gui.playerid && !instance.twiggle ? Math.atan2(target.y, target.x) : motion.predictFacing(instance.render.lastf, instance.facing);
					var x = instance.id === _gui.playerid ? 0 : ratio * instance.render.x - px,
					    y = instance.id === _gui.playerid ? 0 : ratio * instance.render.y - py;
					x += global.screenWidth / 2;
					y += global.screenHeight / 2;
					drawEntity(x, y, instance, ratio, instance.alpha, 1.1, instance.render.f);
				};

				//let i = entities.length;
				//while (i--) {
				//   entitydrawingloop(entities[i]); 
				//}


				var _i15 = 0;
				var length = entities.length;
				for (; _i15 < length; _i15++) {
					entitydrawingloop(entities[_i15]);
				}

				if (!config.graphical.screenshotMode) {
					/*
     entities.forEach(function entityhealthdrawingloop(instance) {
         let x = (instance.id === gui.playerid) ? 0 : ratio * instance.render.x - px,
             y = (instance.id === gui.playerid) ? 0 : ratio * instance.render.y - py;
         x += global.screenWidth / 2;
         y += global.screenHeight / 2;
         drawHealth(x, y, instance, ratio, instance.alpha);
     });
     */
					var entityhealthdrawingloop = function entityhealthdrawingloop(instance) {
						var x = instance.id === _gui.playerid ? 0 : ratio * instance.render.x - px,
						    y = instance.id === _gui.playerid ? 0 : ratio * instance.render.y - py;
						x += global.screenWidth / 2;
						y += global.screenHeight / 2;
						drawHealth(x, y, instance, ratio, instance.alpha);
					};

					//let j = entities.length;
					//while (j--) {
					//   entityhealthdrawingloop(entities[j]); 
					//}


					var _j = 0;
					var _length = entities.length;
					for (; _j < _length; _j++) {
						entityhealthdrawingloop(entities[_j]);
					}
				}
			}

			// Draw GUI       
			var alcoveSize = 200 / Math.max(global.screenWidth, global.screenHeight * 16 / 9);
			var spacing = 20;
			_gui.__s.update();
			var lb = _leaderboard.get();
			var max = lb.max;

			{
				// Draw messages
				var vspacing = 4;
				var len = 0;
				var height = 18;
				var _x28 = global.screenWidth / 2;
				var _y = spacing;
				// Draw each message
				for (var _i16 = messages.length - 1; _i16 >= 0; _i16--) {
					var msg = messages[_i16],
					    txt = msg.text,
					    _text = txt; //txt[0].toUpperCase() + txt.substring(1);  
					// Give it a textobj if it doesn't have one
					if (msg.textobj == null) msg.textobj = TextObj();
					if (msg.len == null) msg.len = measureText(_text, height - 4);
					// Draw the background
					ctx.globalAlpha = 0.5 * msg.alpha;
					drawBar(_x28 - msg.len / 2, _x28 + msg.len / 2, _y + height / 2, height, color.black);
					// Draw the text
					ctx.globalAlpha = Math.min(1, msg.alpha);
					msg.textobj.draw(_text, _x28, _y + height / 2, height - 4, color.guiwhite, 'center', true);
					// Iterate and move
					_y += vspacing + height;
					if (msg.status > 1) {
						_y -= (vspacing + height) * (1 - Math.sqrt(msg.alpha));
					}
					if (msg.status > 1) {
						msg.status -= 0.05;
						msg.alpha += 0.05;
					} else if (_i16 === 0 && (messages.length > 5 || Date.now() - msg.time > 10000)) {
						msg.status -= 0.05;
						msg.alpha -= 0.05;
						// Remove
						if (msg.alpha <= 0) {
							messages[0].textobj.remove();
							messages.splice(0, 1);
						}
					}
				}
				ctx.globalAlpha = 1;
			}

			{
				var drawASkillBar = function drawASkillBar(skill) {
					// Individual skill bars 
					ticker--;
					var name = namedata[ticker - 1],
					    level = skill.amount,
					    col = color[skill.color],
					    cap = skill.softcap,
					    maxLevel = skill.cap;
					if (cap) {
						_len7 = save;
						var _max = config.gui.expectedMaxSkillLevel,
						    extension = cap > _max,
						    blocking = cap < maxLevel;
						if (extension) {
							_max = cap;
						}
						drawBar(_x29 + _height / 2, _x29 - _height / 2 + _len7 * ska(cap), _y2 + _height / 2, _height - 3 + config.graphical.barChunk, color.black);
						drawBar(_x29 + _height / 2, _x29 + _height / 2 + (_len7 - gap) * ska(cap), _y2 + _height / 2, _height - 3, color.grey);
						drawBar(_x29 + _height / 2, _x29 + _height / 2 + (_len7 - gap) * ska(level), _y2 + _height / 2, _height - 3.5, col);
						// Blocked-off area
						if (blocking) {
							ctx.lineWidth = 1;
							ctx.strokeStyle = color.grey;
							for (var _j2 = cap + 1; _j2 < _max; _j2++) {
								drawGuiLine(_x29 + (_len7 - gap) * ska(_j2), _y2 + 1.5, _x29 + (_len7 - gap) * ska(_j2), _y2 - 3 + _height);
							}
						}
						// Vertical dividers
						ctx.strokeStyle = color.black;
						ctx.lineWidth = 1;
						for (var _j3 = 1; _j3 < level + 1; _j3++) {
							drawGuiLine(_x29 + (_len7 - gap) * ska(_j3), _y2 + 1.5, _x29 + (_len7 - gap) * ska(_j3), _y2 - 3 + _height);
						}
						// Skill name
						_len7 = save * ska(_max);
						var textcolor = level == maxLevel ? col : !_gui.points || cap !== maxLevel && level == cap ? color.grey : color.guiwhite;
						text.skillNames[ticker - 1].draw(name, Math.round(_x29 + _len7 / 2) + 0.5, _y2 + _height / 2, _height - 5, textcolor, 'center', true);
						// Skill key
						text.skillKeys[ticker - 1].draw('[' + ticker % 10 + ']', Math.round(_x29 + _len7 - _height * 0.25) - 1.5, _y2 + _height / 2, _height - 5, textcolor, 'right', true);
						if (textcolor === color.guiwhite) {
							// If it's active
							global.clickables.stat.place(ticker - 1, _x29, _y2, _len7, _height);
						}
						// Skill value
						if (level) {
							text.skillValues[ticker - 1].draw(textcolor === col ? 'MAX' : '+' + level, Math.round(_x29 + _len7 + 4) + 0.5, _y2 + _height / 2, _height - 5, col, 'left', true);
						}
						// Move on 
						_y2 -= _height + _vspacing;
					}
				};

				// Draw skill bars
				global.canSkill = !!_gui.points;
				statMenu.set(0 + (global.canSkill || global.died || global.statHover));
				global.clickables.stat.hide();

				var _vspacing = 4;
				var _height = 15;
				var gap = 35;
				var _len7 = alcoveSize * global.screenWidth; // The 30 is for the value modifiers
				var save = _len7;
				var _x29 = -spacing - 2 * _len7 + statMenu.get() * (2 * spacing + 2 * _len7);
				var _y2 = global.screenHeight - spacing - _height;
				var ticker = 11;
				var namedata = _gui.getStatNames(mockups[_gui.type].statnames || -1);
				var _iteratorNormalCompletion9 = true;
				var _didIteratorError9 = false;
				var _iteratorError9 = undefined;

				try {
					for (var _iterator9 = _gui.skills[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
						var skill = _step9.value;

						drawASkillBar(skill);
					}
				} catch (err) {
					_didIteratorError9 = true;
					_iteratorError9 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion9 && _iterator9.return) {
							_iterator9.return();
						}
					} finally {
						if (_didIteratorError9) {
							throw _iteratorError9;
						}
					}
				}

				global.clickables.hover.place(0, 0, _y2, 0.8 * _len7, 0.8 * (global.screenHeight - _y2));
				if (_gui.points !== 0) {
					// Draw skillpoints to spend
					text.skillPoints.draw('x' + _gui.points, Math.round(_x29 + _len7 - 2) + 0.5, Math.round(_y2 + _height - 4) + 0.5, 20, color.guiwhite, 'right');
				}
			}

			{
				// Draw name, exp and score bar
				var _vspacing2 = 4;
				var _len8 = 1.65 * alcoveSize * global.screenWidth;
				var _height2 = 25;
				var _x30 = (global.screenWidth - _len8) / 2;
				var _y3 = global.screenHeight - spacing - _height2;

				ctx.lineWidth = 1;
				// Handle exp
				// Draw the exp bar
				drawBar(_x30, _x30 + _len8, _y3 + _height2 / 2, _height2 - 3 + config.graphical.barChunk, color.black);
				drawBar(_x30, _x30 + _len8, _y3 + _height2 / 2, _height2 - 3, color.grey);
				drawBar(_x30, _x30 + _len8 * _gui.__s.getProgress(), _y3 + _height2 / 2, _height2 - 3.5, color.gold);
				// Draw the class type
				text.class.draw('Level ' + _gui.__s.getLevel() + ' ' + mockups[_gui.type].name, _x30 + _len8 / 2, _y3 + _height2 / 2, _height2 - 4, color.guiwhite, 'center', true);
				_height2 = 14;
				_y3 -= _height2 + _vspacing2;
				// Draw the %-of-leader bar
				drawBar(_x30 + _len8 * 0.1, _x30 + _len8 * 0.9, _y3 + _height2 / 2, _height2 - 3 + config.graphical.barChunk, color.black);
				drawBar(_x30 + _len8 * 0.1, _x30 + _len8 * 0.9, _y3 + _height2 / 2, _height2 - 3, color.grey);
				drawBar(_x30 + _len8 * 0.1, _x30 + _len8 * (0.1 + 0.8 * (max ? Math.min(1, _gui.__s.getScore() / max) : 1)), _y3 + _height2 / 2, _height2 - 3.5, color.green);
				// Draw the score
				text.score.draw('Score: ' + handleLargeNumber(_gui.__s.getScore()), _x30 + _len8 / 2, _y3 + _height2 / 2, _height2 - 2, color.guiwhite, 'center', true);
				// Draw the name
				ctx.lineWidth = 4;
				text.name.draw(player.name, Math.round(_x30 + _len8 / 2) + 0.5, Math.round(_y3 - 10 - _vspacing2) + 0.5, 32, color.guiwhite, 'center');
			}

			{
				// Draw minimap and FPS monitors
				var _len9 = alcoveSize * global.screenWidth;
				var _height3 = _len9;
				var _x31 = global.screenWidth - _len9 - spacing;
				var _y4 = global.screenHeight - _height3 - spacing;

				ctx.globalAlpha = 0.5;
				var _W = roomSetup[0].length,
				    _H = roomSetup.length,
				    _i17 = 0;
				var _iteratorNormalCompletion10 = true;
				var _didIteratorError10 = false;
				var _iteratorError10 = undefined;

				try {
					for (var _iterator10 = roomSetup[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
						var row = _step10.value;

						var _j4 = 0;
						var _iteratorNormalCompletion12 = true;
						var _didIteratorError12 = false;
						var _iteratorError12 = undefined;

						try {
							for (var _iterator12 = row[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
								var cell = _step12.value;

								ctx.fillStyle = getZoneColor(cell, false);
								drawGuiRect(_x31 + _j4++ * _len9 / _W, _y4 + _i17 * _height3 / _H, _len9 / _W, _height3 / _H);
							}
						} catch (err) {
							_didIteratorError12 = true;
							_iteratorError12 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion12 && _iterator12.return) {
									_iterator12.return();
								}
							} finally {
								if (_didIteratorError12) {
									throw _iteratorError12;
								}
							}
						}

						;
						_i17++;
					}
				} catch (err) {
					_didIteratorError10 = true;
					_iteratorError10 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion10 && _iterator10.return) {
							_iterator10.return();
						}
					} finally {
						if (_didIteratorError10) {
							throw _iteratorError10;
						}
					}
				}

				;
				ctx.fillStyle = color.grey;
				drawGuiRect(_x31, _y4, _len9, _height3);
				var _iteratorNormalCompletion11 = true;
				var _didIteratorError11 = false;
				var _iteratorError11 = undefined;

				try {
					for (var _iterator11 = minimap[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
						var o = _step11.value;

						if (o[2] === 17) {
							ctx.fillStyle = mixColors(getColor(o[2]), color.black, 0.5);
							ctx.globalAlpha = 0.8;
							drawGuiRect(_x31 + o[0] / global.gameWidth * _len9, _y4 + o[1] / global.gameHeight * _height3, 1, 1);
						} else {
							ctx.strokeStyle = mixColors(getColor(o[2]), color.black, 0.5);
							ctx.lineWidth = 1;
							ctx.globalAlpha = 1;
							drawGuiRect(_x31 + o[0] / global.gameWidth * _len9 - 1, _y4 + o[1] / global.gameWidth * _height3 - 1, 3, 3, true);
							ctx.lineWidth = 3;
						}
					}
				} catch (err) {
					_didIteratorError11 = true;
					_iteratorError11 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion11 && _iterator11.return) {
							_iterator11.return();
						}
					} finally {
						if (_didIteratorError11) {
							throw _iteratorError11;
						}
					}
				}

				;
				ctx.globalAlpha = 1;
				ctx.lineWidth = 1;
				ctx.strokeStyle = color.black;
				drawGuiRect( // My position
				_x31 + player.x / global.gameWidth * _len9 - 1, _y4 + player.y / global.gameWidth * _height3 - 1, 3, 3, true);
				ctx.lineWidth = 3;
				ctx.fillStyle = color.black;
				drawGuiRect(_x31, _y4, _len9, _height3, true); // Border

				drawGuiRect(_x31, _y4 - 40, _len9, 30);
				lagGraph(lag.get(), _x31, _y4 - 40, _len9, 30, color.teal);
				gapGraph(metrics.rendergap, _x31, _y4 - 40, _len9, 30, color.pink);
				timingGraph(GRAPHDATA, _x31, _y4 - 40, _len9, 30, color.yellow);
				// Text
				text.debug[5].draw('Prediction: ' + Math.round(GRAPHDATA) + 'ms', _x31 + _len9, _y4 - 50 - 5 * 14, 10, color.guiwhite, 'right');
				text.debug[4].draw('Update Rate: ' + metrics.updatetime + 'Hz', _x31 + _len9, _y4 - 50 - 4 * 14, 10, color.guiwhite, 'right');
				text.debug[3].draw('Latency: ' + metrics.latency + 'ms', _x31 + _len9, _y4 - 50 - 3 * 14, 10, color.guiwhite, 'right');
				text.debug[2].draw('Client FPS: ' + metrics.rendertime, _x31 + _len9, _y4 - 50 - 2 * 14, 10, color.guiwhite, 'right');
				text.debug[1].draw('Server Speed: ' + (100 * _gui.fps).toFixed(2) + '%' + (_gui.fps === 1 ? '' : ' OVERLOADED!'), _x31 + _len9, _y4 - 50 - 1 * 14, 10, _gui.fps === 1 ? color.guiwhite : color.orange, 'right');
				text.debug[0].draw(serverName, _x31 + _len9, _y4 - 50, 10, color.guiwhite, 'right');
			}

			{
				// Draw leaderboard
				var _vspacing3 = 4;
				var _len10 = alcoveSize * global.screenWidth;
				var _height4 = 14;
				var _x32 = global.screenWidth - _len10 - spacing;
				var _y5 = spacing + _height4 + 7;
				text.lbtitle.draw('Leaderboard:', Math.round(_x32 + _len10 / 2) + 0.5, Math.round(_y5 - 6) + 0.5, _height4 + 4, color.guiwhite, 'center');
				var _i18 = 0;
				var _iteratorNormalCompletion13 = true;
				var _didIteratorError13 = false;
				var _iteratorError13 = undefined;

				try {
					for (var _iterator13 = lb.data[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
						var entry = _step13.value;

						drawBar(_x32, _x32 + _len10, _y5 + _height4 / 2, _height4 - 3 + config.graphical.barChunk, color.black);
						drawBar(_x32, _x32 + _len10, _y5 + _height4 / 2, _height4 - 3, color.grey);
						var shift = Math.min(1, entry.score / max);
						drawBar(_x32, _x32 + _len10 * shift, _y5 + _height4 / 2, _height4 - 3.5, entry.barcolor);
						// Leadboard name + score 
						text.leaderboard[_i18++].draw(entry.label + ': ' + handleLargeNumber(Math.round(entry.score)), _x32 + _len10 / 2, _y5 + _height4 / 2, _height4 - 5, color.guiwhite, 'center', true);
						// Mini-image
						var scale = _height4 / entry.position.axis,
						    xx = _x32 - 1.5 * _height4 - scale * entry.position.middle.x * 0.707,
						    yy = _y5 + 0.5 * _height4 + scale * entry.position.middle.x * 0.707;
						drawEntity(xx, yy, entry.image, 1 / scale, 1, scale * scale / entry.image.size, -Math.PI / 4, true);
						// Move down
						_y5 += _vspacing3 + _height4;
					}
				} catch (err) {
					_didIteratorError13 = true;
					_iteratorError13 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion13 && _iterator13.return) {
							_iterator13.return();
						}
					} finally {
						if (_didIteratorError13) {
							throw _iteratorError13;
						}
					}
				}

				;
			}

			{
				// Draw upgrade menu
				upgradeMenu.set(0 + (global.canUpgrade || global.upgradeHover));
				var glide = upgradeMenu.get();
				global.clickables.upgrade.hide();
				if (_gui.upgrades.length > 0) {
					var drawAnUpgrade = function drawAnUpgrade(model) {
						if (_y6 > yo) yo = _y6;
						xxx = _x33;
						global.clickables.upgrade.place(_i19++, _x33, _y6, _len11, _height5);
						// Draw box
						ctx.globalAlpha = 0.5;
						ctx.fillStyle = getColor(colorIndex);
						drawGuiRect(_x33, _y6, _len11, _height5);
						ctx.globalAlpha = 0.1;
						ctx.fillStyle = getColor(-10 + colorIndex++);
						if (colorIndex === 14) colorIndex = 21;
						drawGuiRect(_x33, _y6, _len11, _height5 * 0.6);
						ctx.fillStyle = color.black;
						drawGuiRect(_x33, _y6 + _height5 * 0.6, _len11, _height5 * 0.4);
						ctx.globalAlpha = 1;
						// Find offset location with rotation
						var picture = getEntityImageFromMockup(model, _gui.color),
						    position = mockups[model].position,
						    scale = 0.6 * _len11 / position.axis,
						    xx = _x33 + 0.5 * _len11 - scale * position.middle.x * Math.cos(upgradeSpin),
						    yy = _y6 + 0.5 * _height5 - scale * position.middle.x * Math.sin(upgradeSpin);
						drawEntity(xx, yy, picture, 1, 1, scale / picture.size, upgradeSpin, true);
						// Tank name
						text.upgradeNames[_i19 - 1].draw(picture.name, _x33 + 0.9 * _len11 / 2, _y6 + _height5 - 6, _height5 / 8 - 3, color.guiwhite, 'center');
						// Upgrade key
						text.upgradeKeys[_i19 - 1].draw('[' + getClassUpgradeKey(_ticker) + ']', _x33 + _len11 - 4, _y6 + _height5 - 6, _height5 / 8 - 3, color.guiwhite, 'right');
						ctx.strokeStyle = color.black;
						ctx.globalAlpha = 1;
						ctx.lineWidth = 3;
						drawGuiRect(_x33, _y6, _len11, _height5, true); // Border
						if (_ticker++ % 2) {
							_y6 -= _height5 + internalSpacing;
							_x33 += glide * (_len11 + internalSpacing);
						} else {
							_y6 += _height5 + internalSpacing;
						}
					};
					//gui.upgrades.forEach();


					global.canUpgrade = true;
					var getClassUpgradeKey = function getClassUpgradeKey(number) {
						switch (number) {
							case 0:
								return 'y';
							case 1:
								return 'h';
							case 2:
								return 'u';
							case 3:
								return 'j';
							case 4:
								return 'i';
							case 5:
								return 'k';
							case 6:
								return 'o';
							case 7:
								return 'l';
						}
					};
					var internalSpacing = 8;
					var _len11 = alcoveSize * global.screenWidth / 2 * 1;
					var _height5 = _len11;
					var _x33 = glide * 2 * spacing - spacing;
					var _y6 = spacing;
					var xo = _x33;
					var xxx = 0;
					var yo = _y6;
					var _ticker = 0;
					upgradeSpin += 0.01;
					var colorIndex = 10;
					var _i19 = 0;
					var z = 0;
					var _length2 = _gui.upgrades.length;
					for (; z < _length2; z++) {
						drawAnUpgrade(_gui.upgrades[z]);
					}
					//for (var model of gui.upgrades) {
					//   drawAnUpgrade(model); 
					//}
					// Draw box
					var h = 14,
					    _msg = "Ignore",
					    m = measureText(_msg, h - 3) + 10;
					var _xx = xo + (xxx + _len11 + internalSpacing - xo) / 2,
					    _yy = yo + _height5 + internalSpacing;
					drawBar(_xx - m / 2, _xx + m / 2, _yy + h / 2, h + config.graphical.barChunk, color.black);
					drawBar(_xx - m / 2, _xx + m / 2, _yy + h / 2, h, color.white);
					text.skipUpgrades.draw(_msg, _xx, _yy + h / 2, h - 2, color.guiwhite, 'center', true);
					global.clickables.skipUpgrades.place(0, _xx - m / 2, _yy, m, h);
				} else {
					global.canUpgrade = false;
					global.clickables.upgrade.hide();
					global.clickables.skipUpgrades.hide();
				}
			}

			metrics.lastrender = getNow();
		};
	}();

	var gameDrawDead = function () {
		var text = {
			taunt: TextObj(),
			level: TextObj(),
			score: TextObj(),
			time: TextObj(),
			kills: TextObj(),
			death: TextObj(),
			playagain: TextObj()
		};
		var getKills = function getKills() {
			var finalKills = [Math.round(global.finalKills[0].get()), Math.round(global.finalKills[1].get()), Math.round(global.finalKills[2].get())];
			var b = finalKills[0] + 0.5 * finalKills[1] + 3 * finalKills[2];
			return (b === 0 ? '🌼' : b < 4 ? '🎯' : b < 8 ? '💥' : b < 15 ? '💢' : b < 25 ? '🔥' : b < 50 ? '💣' : b < 75 ? '👺' : b < 100 ? '🌶️' : '💯') + (finalKills[0] || finalKills[1] || finalKills[2] ? ' ' + (finalKills[0] ? finalKills[0] + ' kills' : '') + (finalKills[0] && finalKills[1] ? ' and ' : '') + (finalKills[1] ? finalKills[1] + ' assists' : '') + ((finalKills[0] || finalKills[1]) && finalKills[2] ? ' and ' : '') + (finalKills[2] ? finalKills[2] + ' visitors defeated' : '') : 'You have stopped being alive.') + '.';
		};
		var getDeath = function getDeath() {
			var txt = '';
			if (global.finalKillers.length) {
				txt = '🔪 oh no! he died to';
				global.finalKillers.forEach(function (e) {
					txt += ' ' + addArticle(mockups[e].name) + ' and';
				});
				txt = txt.slice(0, -4) + '.';
			} else {
				txt += 'CONGRATULATIONS! You commited suicide!';
			}
			return txt;
		};
		return function () {
			clearScreen(color.black, 0.25);
			var x = global.screenWidth / 2,
			    y = global.screenHeight / 2 - 50;
			var picture = getEntityImageFromMockup(_gui.type, _gui.color),
			    len = 140,
			    position = mockups[_gui.type].position,
			    scale = len / position.axis,
			    xx = global.screenWidth / 2 - scale * position.middle.x * 0.707,
			    yy = global.screenHeight / 2 - 35 + scale * position.middle.x * 0.707;
			drawEntity(xx - 190 - len / 2, yy - 10, picture, 1.5, 1, 0.5 * scale / picture.realSize, -Math.PI / 4, true);
			text.taunt.draw('YOU DEEEEAD SONNAYBOYYYYYYY', x, y - 80, 11, color.guiwhite, 'center');
			text.level.draw('n-level = ' + _gui.__s.getLevel() + ' ' + mockups[_gui.type].name + '.', x - 170, y - 30, 24, color.guiwhite);
			text.score.draw('The Grand total is: ' + formatLargeNumber(Math.round(global.finalScore.get())), x - 170, y + 25, 50, color.guiwhite);
			text.time.draw('Existed for ' + timeForHumans(Math.round(global.finalLifetime.get())) + '.', x - 170, y + 55, 16, color.guiwhite);
			text.kills.draw(getKills(), x - 170, y + 77, 16, color.guiwhite);
			text.death.draw(getDeath(), x - 170, y + 99, 16, color.guiwhite);
			text.playagain.draw('Press enter to play again!', x, y + 125, 16, color.guiwhite, 'center');
		};
	}();

	var gameDrawBeforeStart = function () {
		var text = {
			connecting: TextObj(),
			message: TextObj()
		};
		return function () {
			clearScreen(color.white, 0.5);
			text.connecting.draw('Server initilizing...', global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, 'center');
			text.message.draw(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.lgreen, 'center');
		};
	}();

	var gameDrawDisconnected = function () {
		var text = {
			disconnected: TextObj(),
			message: TextObj()
		};
		return function () {
			clearScreen(mixColors(color.red, color.guiblack, 0.3), 0.25);
			text.disconnected.draw('bitconnec', global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, 'center');
			text.message.draw(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.orange, 'center');
		};
	}();

	// The main function
	function animloop() {
		global.animLoopHandle = window.requestAnimFrame(animloop);
		player.renderv += (player.view - player.renderv) / 60;
		var ratio = config.graphical.screenshotMode ? 2 : getRatio();
		// Set the drawing style
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.filter = 'none';
		// Draw the game
		if (global.gameStart && !global.disconnected) {
			global.time = getNow();
			if (global.time - lastPing > 1000) {
				// Latency
				// Do ping.
				global.socket.ping(global.time);
				lastPing = global.time;
				// Do rendering speed.
				metrics.rendertime = renderTimes;
				renderTimes = 0;
				// Do update rate.
				metrics.updatetime = updateTimes;
				updateTimes = 0;
			}
			metrics.lag = global.time - player.time;
		}
		if (global.gameStart) {
			gameDraw(ratio);
		} else if (!global.disconnected) {
			gameDrawBeforeStart();
		}
		if (global.died) {
			gameDrawDead();
		}
		if (global.disconnected) {
			gameDrawDisconnected();
		}
	}

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (process, setImmediate, clearImmediate) {
		function NanoTimer(log) {

			var version = process.version;
			var major = version.split('.')[0];
			major = major.split('v')[1];
			var minor = version.split('.')[1];

			if (major == 0 && minor < 10) {
				console.log('Error: Please update to the latest version of node! This library requires 0.10.x or later');
				process.exit(0);
			}

			//Time reference variables
			this.intervalT1 = null;
			this.timeOutT1 = null;
			this.intervalCount = 1;

			//Deferred reference indicator variables.  Indicate whether the timer used/will use the deferred call. ie - delay/interval > 25ms
			this.deferredInterval = false;
			this.deferredTimeout = false;

			//Deferred reference variables.  Used to clear the native js timeOut calls
			this.deferredTimeoutRef = null;
			this.deferredIntervalRef = null;

			//Callback reference variables.  Used to be able to still successfully call callbacks when timeouts or intervals are cleared.
			this.timeoutCallbackRef = null;
			this.intervalCallbackRef = null;

			//Immediate reference variables. Used to clear functions scheduled with setImmediate from running in the event timeout/interval is cleared.
			this.timeoutImmediateRef = null;
			this.intervalImmediateRef = null;

			this.intervalErrorChecked = false;

			this.intervalType = "";

			this.timeoutTriggered = false;

			if (log) {
				this.logging = true;
			}
		}

		NanoTimer.prototype.time = function (task, args, format, callback) {
			//Asynchronous task
			if (callback) {
				var t1 = process.hrtime();

				if (args) {

					args.push(function () {
						var time = process.hrtime(t1);
						if (format == 's') {
							callback(time[0] + time[1] / 1000000000);
						} else if (format == 'm') {
							callback(time[0] * 1000 + time[1] / 1000000);
						} else if (format == 'u') {
							callback(time[0] * 1000000 + time[1] / 1000);
						} else if (format == 'n') {
							callback(time[0] * 1000000000 + time[1]);
						} else {
							callback(time);
						}
					});

					task.apply(null, args);
				} else {
					task(function () {
						var time = process.hrtime(t1);
						if (format == 's') {
							callback(time[0] + time[1] / 1000000000);
						} else if (format == 'm') {
							callback(time[0] * 1000 + time[1] / 1000000);
						} else if (format == 'u') {
							callback(time[0] * 1000000 + time[1] / 1000);
						} else if (format == 'n') {
							callback(time[0] * 1000000000 + time[1]);
						} else {
							callback(time);
						}
					});
				}

				//Synchronous task
			} else {
				var t1 = process.hrtime();

				if (args) {
					task.apply(null, args);
				} else {
					task();
				}

				var t2 = process.hrtime(t1);

				if (format == 's') {
					return t2[0] + t2[1] / 1000000000;
				} else if (format == 'm') {
					return t2[0] * 1000 + t2[1] / 1000000;
				} else if (format == 'u') {
					return t2[0] * 1000000 + t2[1] / 1000;
				} else if (format == 'n') {
					return t2[0] * 1000000000 + t2[1];
				} else {
					return process.hrtime(t1);
				}
			}
		};

		NanoTimer.prototype.setInterval = function (task, args, interval, callback) {

			if (!this.intervalErrorChecked) {
				//Task error handling
				if (!task) {
					console.log("A task function must be specified to setInterval");
					process.exit(1);
				} else {
					if (typeof task != "function") {
						console.log("Task argument to setInterval must be a function reference");
						process.exit(1);
					}
				}

				//Interval error handling
				if (!interval) {
					console.log("An interval argument must be specified");
					process.exit(1);
				} else {
					if (typeof interval != "string") {
						console.log("Interval argument to setInterval must be a string specified as an integer followed by 's' for seconds, 'm' for milli, 'u' for micro, and 'n' for nanoseconds. Ex. 2u");
						process.exit(1);
					}
				}

				//This ref is used if deferred timeout is cleared, so the callback can still be accessed
				if (callback) {
					if (typeof callback != "function") {
						console.log("Callback argument to setInterval must be a function reference");
						process.exit(1);
					} else {
						this.intervalCallbackRef = callback;
					}
				}

				this.intervalType = interval[interval.length - 1];

				if (this.intervalType == 's') {
					this.intervalTime = interval.slice(0, interval.length - 1) * 1000000000;
				} else if (this.intervalType == 'm') {
					this.intervalTime = interval.slice(0, interval.length - 1) * 1000000;
				} else if (this.intervalType == 'u') {
					this.intervalTime = interval.slice(0, interval.length - 1) * 1000;
				} else if (this.intervalType == 'n') {
					this.intervalTime = interval.slice(0, interval.length - 1);
				} else {
					console.log('Error with argument: ' + interval + ': Incorrect interval format. Format is an integer followed by "s" for seconds, "m" for milli, "u" for micro, and "n" for nanoseconds. Ex. 2u');
					process.exit(1);
				}

				this.intervalErrorChecked = true;
			}

			//Avoid dereferencing inside of function objects later
			//Must be performed on every execution 
			var thisTimer = this;

			if (this.intervalTime > 0) {

				//Check and set constant t1 value.
				if (this.intervalT1 == null) {
					this.intervalT1 = process.hrtime();
				}

				//Check for overflow.  Every 8,000,000 seconds (92.6 days), this will overflow
				//and the reference time T1 will be re-acquired.  This is the only case in which error will 
				//propagate.
				if (this.intervalTime * this.intervalCount > 8000000000000000) {
					this.intervalT1 = process.hrtime();
					this.intervalCount = 1;
				}

				//Get comparison time
				this.difArray = process.hrtime(this.intervalT1);
				this.difTime = this.difArray[0] * 1000000000 + this.difArray[1];

				//If updated time < expected time, continue
				//Otherwise, run task and update counter
				if (this.difTime < this.intervalTime * this.intervalCount) {

					//Can potentially defer to less accurate setTimeout if intervaltime > 25ms
					if (this.intervalTime > 25000000) {
						if (this.deferredInterval == false) {
							this.deferredInterval = true;
							var msDelay = (this.intervalTime - 25000000) / 1000000.0;
							this.deferredIntervalRef = setTimeout(function () {
								thisTimer.setInterval(task, args, interval, callback);
							}, msDelay);
						} else {
							this.deferredIntervalRef = null;
							this.intervalImmediateRef = setImmediate(function () {
								thisTimer.setInterval(task, args, interval, callback);
							});
						}
					} else {
						this.intervalImmediateRef = setImmediate(function () {
							thisTimer.setInterval(task, args, interval, callback);
						});
					}
				} else {

					this.intervalImmediateRef = null;

					if (this.logging) {
						console.log('nanotimer log: ' + 'cycle time at - ' + this.difTime);
					}

					if (args) {
						task.apply(null, args);
					} else {
						task();
					}

					//Check if the intervalT1 is still not NULL. If it is, that means the task cleared the interval so it should not run again.
					if (this.intervalT1) {
						this.intervalCount++;
						this.deferredInterval = false;
						this.intervalImmediateRef = setImmediate(function () {
							thisTimer.setInterval(task, args, interval, callback);
						});
					}
				}

				//If interval = 0, run as fast as possible.
			} else {

				//Check and set constant t1 value.
				if (this.intervalT1 == null) {
					this.intervalT1 = process.hrtime();
				}

				if (args) {
					task.apply(null, args);
				} else {
					task();
				}

				// This needs to be re-checked here incase calling task turned this off
				if (this.intervalT1) {
					this.intervalImmediateRef = setImmediate(function () {
						thisTimer.setInterval(task, args, interval, callback);
					});
				}
			}
		};

		NanoTimer.prototype.setTimeout = function (task, args, delay, callback) {

			//Task error handling
			if (!task) {
				console.log("A task function must be specified to setTimeout");
				process.exit(1);
			} else {
				if (typeof task != "function") {
					console.log("Task argument to setTimeout must be a function reference");
					process.exit(1);
				}
			}

			//Delay error handling
			if (!delay) {
				console.log("A delay argument must be specified");
				process.exit(1);
			} else {
				if (typeof delay != "string") {
					console.log("Delay argument to setTimeout must be a string specified as an integer followed by 's' for seconds, 'm' for milli, 'u' for micro, and 'n' for nanoseconds. Ex. 2u");
					process.exit(1);
				}
			}

			//This ref is used if deferred timeout is cleared, so the callback can still be accessed
			if (callback) {
				if (typeof callback != "function") {
					console.log("Callback argument to setTimeout must be a function reference");
					process.exit(1);
				} else {
					this.timeoutCallbackRef = callback;
				}
			}

			//Avoid dereferencing
			var thisTimer = this;

			if (this.timeoutTriggered) {
				this.timeoutTriggered = false;
			}

			var delayType = delay[delay.length - 1];

			if (delayType == 's') {
				var delayTime = delay.slice(0, delay.length - 1) * 1000000000;
			} else if (delayType == 'm') {
				var delayTime = delay.slice(0, delay.length - 1) * 1000000;
			} else if (delayType == 'u') {
				var delayTime = delay.slice(0, delay.length - 1) * 1000;
			} else if (delayType == 'n') {
				var delayTime = delay.slice(0, delay.length - 1);
			} else {
				console.log('Error with argument: ' + delay + ': Incorrect delay format. Format is an integer followed by "s" for seconds, "m" for milli, "u" for micro, and "n" for nanoseconds. Ex. 2u');
				process.exit(1);
			}

			//Set marker
			if (this.timeOutT1 == null) {
				this.timeOutT1 = process.hrtime();
			}

			var difArray = process.hrtime(this.timeOutT1);
			var difTime = difArray[0] * 1000000000 + difArray[1];

			if (difTime < delayTime) {
				//Can potentially defer to less accurate setTimeout if delayTime > 25ms
				if (delayTime > 25000000) {
					if (this.deferredTimeout == false) {
						this.deferredTimeout = true;
						var msDelay = (delayTime - 25000000) / 1000000.0;
						this.deferredTimeoutRef = setTimeout(function () {
							thisTimer.setTimeout(task, args, delay, callback);
						}, msDelay);
					} else {
						this.deferredTimeoutRef = null;
						this.timeoutImmediateRef = setImmediate(function () {
							thisTimer.setTimeout(task, args, delay, callback);
						});
					}
				} else {
					this.timeoutImmediateRef = setImmediate(function () {
						thisTimer.setTimeout(task, args, delay, callback);
					});
				}
			} else {
				this.timeoutTriggered = true;
				this.timeoutImmediateRef = null;
				this.timeOutT1 = null;
				this.deferredTimeout = false;

				if (this.logging == true) {
					console.log('nanotimer log: ' + 'actual wait - ' + difTime);
				}

				if (args) {
					task.apply(null, args);
				} else {
					task();
				}

				if (callback) {
					var data = { 'waitTime': difTime };
					callback(data);
				}
			}
		};

		NanoTimer.prototype.clearInterval = function () {

			if (this.deferredIntervalRef) {
				clearTimeout(this.deferredIntervalRef);

				this.deferredInterval = false;
			}

			if (this.intervalImmediateRef) {
				clearImmediate(this.intervalImmediateRef);
			}

			this.intervalT1 = null;
			this.intervalCount = 1;
			this.intervalErrorChecked = false;

			if (this.intervalCallbackRef) {
				this.intervalCallbackRef();
			}
		};

		NanoTimer.prototype.clearTimeout = function () {

			// Only do something if this is not being called as a result
			// of the timeout triggering
			if (this.timeoutTriggered == false) {
				if (this.deferredTimeoutRef) {
					clearTimeout(this.deferredTimeoutRef);

					if (this.timeOutT1) {
						var difArray = process.hrtime(this.timeOutT1);
						var difTime = difArray[0] * 1000000000 + difArray[1];
					}

					this.deferredTimeout = false;
				}

				if (this.timeoutImmediateRef) {
					clearImmediate(this.timeoutImmediateRef);
				}

				this.timeOutT1 = null;

				if (this.timeoutCallbackRef) {
					var data = { 'waitTime': difTime };
					this.timeoutCallbackRef(data);
				}
			}
		};

		NanoTimer.prototype.hasTimeout = function () {
			return this.timeOutT1 != null;
		};

		module.exports = NanoTimer;

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(2), __webpack_require__(3).setImmediate, __webpack_require__(3).clearImmediate);

	/***/
},
/* 2 */
/***/function (module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
		throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
		throw new Error('clearTimeout has not been defined');
	}
	(function () {
		try {
			if (typeof setTimeout === 'function') {
				cachedSetTimeout = setTimeout;
			} else {
				cachedSetTimeout = defaultSetTimout;
			}
		} catch (e) {
			cachedSetTimeout = defaultSetTimout;
		}
		try {
			if (typeof clearTimeout === 'function') {
				cachedClearTimeout = clearTimeout;
			} else {
				cachedClearTimeout = defaultClearTimeout;
			}
		} catch (e) {
			cachedClearTimeout = defaultClearTimeout;
		}
	})();
	function runTimeout(fun) {
		if (cachedSetTimeout === setTimeout) {
			//normal enviroments in sane situations
			return setTimeout(fun, 0);
		}
		// if setTimeout wasn't available but was latter defined
		if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
			cachedSetTimeout = setTimeout;
			return setTimeout(fun, 0);
		}
		try {
			// when when somebody has screwed with setTimeout but no I.E. maddness
			return cachedSetTimeout(fun, 0);
		} catch (e) {
			try {
				// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
				return cachedSetTimeout.call(null, fun, 0);
			} catch (e) {
				// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
				return cachedSetTimeout.call(this, fun, 0);
			}
		}
	}
	function runClearTimeout(marker) {
		if (cachedClearTimeout === clearTimeout) {
			//normal enviroments in sane situations
			return clearTimeout(marker);
		}
		// if clearTimeout wasn't available but was latter defined
		if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
			cachedClearTimeout = clearTimeout;
			return clearTimeout(marker);
		}
		try {
			// when when somebody has screwed with setTimeout but no I.E. maddness
			return cachedClearTimeout(marker);
		} catch (e) {
			try {
				// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
				return cachedClearTimeout.call(null, marker);
			} catch (e) {
				// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
				// Some versions of I.E. have different rules for clearTimeout vs setTimeout
				return cachedClearTimeout.call(this, marker);
			}
		}
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
		if (!draining || !currentQueue) {
			return;
		}
		draining = false;
		if (currentQueue.length) {
			queue = currentQueue.concat(queue);
		} else {
			queueIndex = -1;
		}
		if (queue.length) {
			drainQueue();
		}
	}

	function drainQueue() {
		if (draining) {
			return;
		}
		var timeout = runTimeout(cleanUpNextTick);
		draining = true;

		var len = queue.length;
		while (len) {
			currentQueue = queue;
			queue = [];
			while (++queueIndex < len) {
				if (currentQueue) {
					currentQueue[queueIndex].run();
				}
			}
			queueIndex = -1;
			len = queue.length;
		}
		currentQueue = null;
		draining = false;
		runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
		var args = new Array(arguments.length - 1);
		if (arguments.length > 1) {
			for (var i = 1; i < arguments.length; i++) {
				args[i - 1] = arguments[i];
			}
		}
		queue.push(new Item(fun, args));
		if (queue.length === 1 && !draining) {
			runTimeout(drainQueue);
		}
	};

	// v8 likes predictible objects
	function Item(fun, array) {
		this.fun = fun;
		this.array = array;
	}
	Item.prototype.run = function () {
		this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
		return [];
	};

	process.binding = function (name) {
		throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
		return '/';
	};
	process.chdir = function (dir) {
		throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
		return 0;
	};

	/***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (global) {
		var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
		var apply = Function.prototype.apply;

		// DOM APIs, for completeness

		exports.setTimeout = function () {
			return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
		};
		exports.setInterval = function () {
			return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
		};
		exports.clearTimeout = exports.clearInterval = function (timeout) {
			if (timeout) {
				timeout.close();
			}
		};

		function Timeout(id, clearFn) {
			this._id = id;
			this._clearFn = clearFn;
		}
		Timeout.prototype.unref = Timeout.prototype.ref = function () {};
		Timeout.prototype.close = function () {
			this._clearFn.call(scope, this._id);
		};

		// Does not start the time, just sets up the members needed.
		exports.enroll = function (item, msecs) {
			clearTimeout(item._idleTimeoutId);
			item._idleTimeout = msecs;
		};

		exports.unenroll = function (item) {
			clearTimeout(item._idleTimeoutId);
			item._idleTimeout = -1;
		};

		exports._unrefActive = exports.active = function (item) {
			clearTimeout(item._idleTimeoutId);

			var msecs = item._idleTimeout;
			if (msecs >= 0) {
				item._idleTimeoutId = setTimeout(function onTimeout() {
					if (item._onTimeout) item._onTimeout();
				}, msecs);
			}
		};

		// setimmediate attaches itself to the global object
		__webpack_require__(4);
		// On some exotic environments, it's not clear which object `setimmediate` was
		// able to install onto.  Search each possibility in the same order as the
		// `setimmediate` library.
		exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
		exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;

		/* WEBPACK VAR INJECTION */
	}).call(exports, function () {
		return this;
	}());

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (global, process) {
		(function (global, undefined) {
			"use strict";

			if (global.setImmediate) {
				return;
			}

			var nextHandle = 1; // Spec says greater than zero
			var tasksByHandle = {};
			var currentlyRunningATask = false;
			var doc = global.document;
			var registerImmediate;

			function setImmediate(callback) {
				// Callback can either be a function or a string
				if (typeof callback !== "function") {
					callback = new Function("" + callback);
				}
				// Copy function arguments
				var args = new Array(arguments.length - 1);
				for (var i = 0; i < args.length; i++) {
					args[i] = arguments[i + 1];
				}
				// Store and register the task
				var task = { callback: callback, args: args };
				tasksByHandle[nextHandle] = task;
				registerImmediate(nextHandle);
				return nextHandle++;
			}

			function clearImmediate(handle) {
				delete tasksByHandle[handle];
			}

			function run(task) {
				var callback = task.callback;
				var args = task.args;
				switch (args.length) {
					case 0:
						callback();
						break;
					case 1:
						callback(args[0]);
						break;
					case 2:
						callback(args[0], args[1]);
						break;
					case 3:
						callback(args[0], args[1], args[2]);
						break;
					default:
						callback.apply(undefined, args);
						break;
				}
			}

			function runIfPresent(handle) {
				// From the spec: "Wait until any invocations of this algorithm started before this one have completed."
				// So if we're currently running a task, we'll need to delay this invocation.
				if (currentlyRunningATask) {
					// Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
					// "too much recursion" error.
					setTimeout(runIfPresent, 0, handle);
				} else {
					var task = tasksByHandle[handle];
					if (task) {
						currentlyRunningATask = true;
						try {
							run(task);
						} finally {
							clearImmediate(handle);
							currentlyRunningATask = false;
						}
					}
				}
			}

			function installNextTickImplementation() {
				registerImmediate = function registerImmediate(handle) {
					process.nextTick(function () {
						runIfPresent(handle);
					});
				};
			}

			function canUsePostMessage() {
				// The test against `importScripts` prevents this implementation from being installed inside a web worker,
				// where `global.postMessage` means something completely different and can't be used for this purpose.
				if (global.postMessage && !global.importScripts) {
					var postMessageIsAsynchronous = true;
					var oldOnMessage = global.onmessage;
					global.onmessage = function () {
						postMessageIsAsynchronous = false;
					};
					global.postMessage("", "*");
					global.onmessage = oldOnMessage;
					return postMessageIsAsynchronous;
				}
			}

			function installPostMessageImplementation() {
				// Installs an event handler on `global` for the `message` event: see
				// * https://developer.mozilla.org/en/DOM/window.postMessage
				// * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

				var messagePrefix = "setImmediate$" + Math.random() + "$";
				var onGlobalMessage = function onGlobalMessage(event) {
					if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
						runIfPresent(+event.data.slice(messagePrefix.length));
					}
				};

				if (global.addEventListener) {
					global.addEventListener("message", onGlobalMessage, false);
				} else {
					global.attachEvent("onmessage", onGlobalMessage);
				}

				registerImmediate = function registerImmediate(handle) {
					global.postMessage(messagePrefix + handle, "*");
				};
			}

			function installMessageChannelImplementation() {
				var channel = new MessageChannel();
				channel.port1.onmessage = function (event) {
					var handle = event.data;
					runIfPresent(handle);
				};

				registerImmediate = function registerImmediate(handle) {
					channel.port2.postMessage(handle);
				};
			}

			function installReadyStateChangeImplementation() {
				var html = doc.documentElement;
				registerImmediate = function registerImmediate(handle) {
					// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
					// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
					var script = doc.createElement("script");
					script.onreadystatechange = function () {
						runIfPresent(handle);
						script.onreadystatechange = null;
						html.removeChild(script);
						script = null;
					};
					html.appendChild(script);
				};
			}

			function installSetTimeoutImplementation() {
				registerImmediate = function registerImmediate(handle) {
					setTimeout(runIfPresent, 0, handle);
				};
			}

			// If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
			var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
			attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

			// Don't get fooled by e.g. browserify environments.
			if ({}.toString.call(global.process) === "[object process]") {
				// For Node.js before 0.9
				installNextTickImplementation();
			} else if (canUsePostMessage()) {
				// For non-IE10 modern browsers
				installPostMessageImplementation();
			} else if (global.MessageChannel) {
				// For web workers, where supported
				installMessageChannelImplementation();
			} else if (doc && "onreadystatechange" in doc.createElement("script")) {
				// For IE 6–8
				installReadyStateChangeImplementation();
			} else {
				// For older browsers
				installSetTimeoutImplementation();
			}

			attachTo.setImmediate = setImmediate;
			attachTo.clearImmediate = clearImmediate;
		})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);

		/* WEBPACK VAR INJECTION */
	}).call(exports, function () {
		return this;
	}(), __webpack_require__(2));

	/***/
}]
/******/);