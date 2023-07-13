const fs = require ("fs");
const request = require ("request");
const utils = require ("daveutils");

const urlValidator = "https://validator.w3.org/feed/check.cgi?url=";
const urlFeedToCheck = "http://scripting.com/rss.xml";

function checkValidator (feedUrl, callback) {
	const url = urlValidator + encodeURIComponent (feedUrl);
	request (url, function (err, response, htmltext) { 
		if (!err && response.statusCode == 200) {
			const flValid = utils.stringContains (htmltext, "<img alt=\"[Valid RSS]\" title=\"Valid RSS\" src=\"images/valid-rss-rogers.png\" />");
			callback (undefined, flValid);
			}
		else {
			callback (undefined);
			}
		});
	}

function checkNow () {
	checkValidator (urlFeedToCheck, function (err, flValid) {
		const nowstring = new Date ().toLocaleTimeString ();
		if (err) {
			console.log (nowstring + ": err.message == " + err.message);
			}
		else {
			const validates = (flValid) ? "validates" : "does not validate";
			console.log (nowstring + ": " + urlFeedToCheck + " " + validates + ".");
			}
		});
	}
function everyMinute () {
	const now = new Date ();
	if (now.getMinutes () == 0) {
		checkNow ();
		}
	}

console.log ("");
checkNow (); //run once at startup, then every hour on the hour
utils.runEveryMinute (everyMinute);

