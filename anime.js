const request = require('request') //
const readline = require('readline')
const cheerio = require('cheerio')
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
rl.question('輸入你要查的動漫名稱\n',(name)=>{
	const url = `https://www.eyny.com/channel/UCYrHXcc_kb/tag/${name}/&orderby=date`
	const encodeurl = encodeURI(url)
	request(encodeurl,(err,res,body)=>{
		const $ = cheerio.load(body)
		$(".fixwidth").last().each(((i,elem)=>{
			console.log($(elem).text())
		}))
	})
	rl.close()
})
//伊莉查動畫更新用.js
