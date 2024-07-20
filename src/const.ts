export const squareName = 'ic_launcher.png'
export const roundName = 'ic_launcher_round.png'
export const resourceMap = [
	{
		dirname: 'mipmap-hdpi',
		size: 72,
	},
	{
		dirname: 'mipmap-mdpi',
		size: 48,
	},
	{
		dirname: 'mipmap-xhdpi',
		size: 96,
	},
	{
		dirname: 'mipmap-xxhdpi',
		size: 144,
	},
	{
		dirname: 'mipmap-xxxhdpi',
		size: 192,
	},
]

export const EMPTY_USER_INPUT_ERROR = {
	code: 10000,
	message: '--input参数未输入，请检查--input输入',
}

export const REMOTE_SOURCE_INPUT_ERROR = {
	code: 10001,
	message: '--input配置的远程地址下载失败，请检查路径是否正确与网络环境',
}

export const LOCAL_SOURCE_INPUT_ERROR = {
	code: 10002,
	message: '--input配置的本地地址获取，请检查路径是否正确',
}

export const GENERATE_CIRCLE_ICON_ERROR = {
	code: 10003,
	message: '生成圆角icon资源失败，请检查图标或联系作者',
}

export const GENERATE_SOURCE_ERROR = {
	code: 10004,
	message: '生成icon资源失败，请检查文件是否含有相同文件',
}
