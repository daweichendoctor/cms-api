exports.andCondition = (query) => {
	let str = '1=1'
	for(let key in query) {
		str += ` and ${key}='${query[key]}'`
	}
	return str
}