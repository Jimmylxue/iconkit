import { GenerateError } from 'src/base/error'
import { EMPTY_USER_INPUT_ERROR } from 'src/const'
import { TArgument, TUserInputArgument } from 'src/types/type'
import { checkPathType } from 'src/utils'
import {
	handleAbsoluteSource,
	handleRelativeSource,
	handleRemoteSource,
} from './file'

export const argument: TArgument = {
	sourceBuffer: undefined,
	updateSourceBuffer(buffer) {
		this.sourceBuffer = buffer
	},
}

async function getInputSource() {
	switch (argument.pathType) {
		case 'remote':
			await handleRemoteSource(argument['--input']!)
			return
		case 'relative':
			await handleRelativeSource(argument['--input']!)
			return
		case 'absolute':
			await handleAbsoluteSource(argument['--input']!)
			return
		default:
			console.log('inputSourceType异常')
			return
	}
}

/**
 * 检查是否是合法输入
 */
export async function checkArgument(userInputArgs: TUserInputArgument) {
	if (!userInputArgs['--input']) {
		throw new GenerateError(EMPTY_USER_INPUT_ERROR, 'check --input')
	}
	if (userInputArgs['--input']) {
		argument['--input'] = userInputArgs['--input']
		argument.pathType = checkPathType(userInputArgs['--input'])
		await getInputSource()
	}
}

export async function handleArgument() {
	const commandArgument = process.argv.slice(2)
	const userInputArgs: TUserInputArgument = {}
	commandArgument.forEach(item => {
		const [key, value] = item.split('=')
		userInputArgs[key] = value
	})
	await checkArgument(userInputArgs)
}
