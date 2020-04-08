
export function isName(name){

	var reg = /^[^!<>,;?=+()@#"°{}_$%~:]+$/;
	return (reg.test(name) || name.length == 0);
}


export function isPostCode(s, pattern, iso_code)
{
	if (typeof iso_code === 'undefined' || iso_code == '')
		iso_code = '[A-Z]{2}';
	if (typeof(pattern) == 'undefined' || pattern.length == 0)
		pattern = '[a-zA-Z 0-9-]+';
	else
	{
		var replacements = {
			' ': '(?:\ |)',
			'-': '(?:-|)',
			'N': '[0-9]',
			'L': '[a-zA-Z]',
			'C': iso_code
		};

		for (var new_value in replacements)
			pattern = pattern.split(new_value).join(replacements[new_value]);
	}
	var reg = new RegExp('^' + pattern + '$');
	return (reg.test(s) || s.length == 0);
}


export function isAddress(s)
{
	var reg = /^[^!<>?=+@{}_$%]+$/;
	return (reg.test(s) || s.length == 0);
}
export function isNumber(s)
{
	var reg = /^[+1-9. ()-]+$/;
	return (reg.test(s) || s.length == 0);
}

export function isEmail(email){
	var reg = /^[a-z\p{L}0-9!#$%&'*+\/=?^`{}|~_-]+[.a-z\p{L}0-9!#$%&'*+\/=?^`{}|~_-]*@[a-z\p{L}0-9]+[._a-z\p{L}0-9-]*\.[a-z\p{L}0-9]+$/i ;
	return (reg.test(email) || email.length == 0);
	
}
