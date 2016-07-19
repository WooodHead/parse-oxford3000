var fs = require('fs');

run();

function run() {
	var content = fs.readFileSync('wordlist.html').toString().trim();
	var regex2 = '<SPAN style="font-family:\'sans-serif\'; font-size:7.7pt; font-weight:normal; color:#221E1F">(.*?)</SPAN';
	var regex = new RegExp('<SPAN style="font-family:\'sans-serif\'; font-size:7\.7pt; font-weight:normal; color:#221E1F"\r\n>(.*?)</SPAN\r\n><SPAN style="font-family:\'sans-serif\'; font-size:7.7pt; font-style:italic; font-weight:normal; color:#221E1F"\r\n>(.*?)</SPAN', 'g');

	var words = [];
	while (r = regex.exec(content)) {
		let one = {};
		let w = r[1].replace('(', '').replace(')', '').trim();
		if (w) {
			one.word = w;
			one.part = r[2].trim();
			words.push(one);
		}
	}

	fs.writeFileSync('result.json', JSON.stringify(words, null, 4));

	console.log(words);

	//var matches = content.match(regex);
	var matches = [];
	console.log(content.length);
	if (matches) {
		console.log(matches.length);
		console.log(matches[0]);
	} else {
		console.log('no match');
	}
}
