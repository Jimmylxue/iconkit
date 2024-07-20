import { GenerateError } from 'src/base/error'
import { argument } from './agument'
import { downloadFile } from './api'
import { readFile } from 'fs/promises'
import { resolve } from 'path'
import { LOCAL_SOURCE_INPUT_ERROR } from 'src/const'

export async function handleRemoteSource(path: string) {
	await downloadFile(path)
}

export async function handleRelativeSource(path: string) {
	try {
		const sourceBuffer = await readFile(resolve(process.cwd(), path))
		argument.updateSourceBuffer(sourceBuffer)
	} catch (error: any) {
		throw new GenerateError(LOCAL_SOURCE_INPUT_ERROR, error.message)
	}
}

export async function handleAbsoluteSource(path: string) {
	try {
		const sourceBuffer = await readFile(path)
		argument.updateSourceBuffer(sourceBuffer)
	} catch (error: any) {
		throw new GenerateError(LOCAL_SOURCE_INPUT_ERROR, error.message)
	}
}
