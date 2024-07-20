import ora from 'ora'
import { TGenerateError } from 'src/types/type'

export class GenerateError extends Error {
	failMessage?: TGenerateError = undefined
	originErrorMessage?: string
	constructor(failMessage: TGenerateError, originErrorMessage: string) {
		super()
		this.failMessage = failMessage
		this.originErrorMessage = originErrorMessage
	}
}

export function buildFailHandle(error: GenerateError) {
	const spinner = ora()
	spinner.fail(
		`error: ${error.failMessage?.message}, code: ${error.failMessage?.code}, message: ${error?.originErrorMessage}`
	)
	spinner.clear()
}
