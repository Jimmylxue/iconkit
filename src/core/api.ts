import axios from 'axios'
import { argument } from './agument'
import { GenerateError } from 'src/base/error'
import { REMOTE_SOURCE_INPUT_ERROR } from 'src/const'

export async function downloadFile(path: string) {
	try {
		const response = await axios({
			method: 'get',
			url: path,
			responseType: 'arraybuffer', // 设置响应类型为 arraybuffer
		})
		const buffer = Buffer.from(response.data)
		argument.updateSourceBuffer(buffer)
	} catch (error: any) {
		throw new GenerateError(REMOTE_SOURCE_INPUT_ERROR, error.message)
	}
}
