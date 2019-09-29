import {clamp} from './math'

/*/!* Convert an RGB triplet to a hex string *!/
export function convertToHex(rgb) {
	return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}

/!* Remove '#' in color hex string *!/
function trim(s) {
	return (s.charAt(0) === '#') ? s.substring(1, 7) : s
}

/!* Convert a hex string to an RGB triplet *!/
export function convertToRGB(hex) {
	let color = [];
	color[0] = parseInt((trim(hex)).substring(0, 2), 16);
	color[1] = parseInt((trim(hex)).substring(2, 4), 16);
	color[2] = parseInt((trim(hex)).substring(4, 6), 16);
	return color;
}*/

function trim(str) {
	return (str.charAt(0) === '#') ? str.substr(1, 6) : str
}

export function intToHex(int) {
	let hex = clamp(0, 255, int).toString(16)
	return hex.length > 1 ? hex.substr(0, 2) : `0${hex}`
}

export function hexToInt(str) {
	return parseInt(trim(str), 16)
}

export function hexToRgb(str) {
	str = trim(str)

	if (str.length === 3)
		return [hexToInt(str[0]), hexToInt(str[1]), hexToInt(str[2])]
	if (str.length === 6)
		return [hexToInt(str.substr(0, 2)), hexToInt(str.substr(2, 2)), hexToInt(str.substr(4, 2))]
	return undefined
}

export function rgbToHex(arr) {
	return '#' + intToHex(arr[0]) + intToHex(arr[1]) + intToHex(arr[2]);
}

export function rgbGradient(beginRgb, endRgb, percent) {
	return [Math.round(beginRgb[0] * percent + endRgb[0] * (1 - percent)),
		Math.round(beginRgb[1] * percent + endRgb[1] * (1 - percent)),
		Math.round(beginRgb[2] * percent + endRgb[2] * (1 - percent))];
}

export function hexGradient(begin, end, percent) {
	let rgb = rgbGradient(hexToRgb(end), hexToRgb(begin), percent)
	return rgbToHex(rgb)
}

export function stepGradient(scale, percent) {
	let keys = _.keys(scale).map(it => parseInt(it))
	let available = keys.filter(it => it <= percent)
	return available.length === 0 ? scale[_.min(keys)] : scale[_.max(available)];

}