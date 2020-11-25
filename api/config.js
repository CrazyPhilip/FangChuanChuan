let prod = {
	server: "http://47.108.202.57:8087/WebService.asmx",
	outerServer: "https://gl.junjunhouse.com"
}

let dev = {
	server: "http://47.108.202.57:8087/WebService.asmx",
	outerServer: "https://gl.junjunhouse.com"
}

let config = null
if (process.env.NODE_ENV === "development"){
	config = prod
} else {
	config = dev
}

export default config