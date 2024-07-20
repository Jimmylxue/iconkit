export function checkPathType(path: string) {
	// 判断是否为远程路径
	if (/^https?:\/\//.test(path)) {
		return 'remote'
	}
	// 判断是否为绝对路径
	if (path.startsWith('/')) {
		return 'absolute'
	}
	// 剩下的就是相对路径
	return 'relative'
}
