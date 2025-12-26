/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let pref = strs[0];
	let prefLength = pref.length;

	for (let i = 1; i <= strs.length - 1; i++) {
		let mystr = strs[i];
		while (pref !== mystr.substring(0, prefLength)) {
			prefLength--;
			pref = pref.substring(0, prefLength);
		}
	}
	return pref;
};