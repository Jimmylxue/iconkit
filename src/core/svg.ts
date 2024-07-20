import svg2png from 'svg2png'
import sharp from 'sharp'
import { resolve } from 'path'
import { writeFile, mkdir, stat } from 'fs/promises'
import {
	GENERATE_CIRCLE_ICON_ERROR,
	GENERATE_SOURCE_ERROR,
	resourceMap,
	roundName,
	squareName,
} from 'src/const'
import { argument } from './agument'
import { GenerateError } from 'src/base/error'
import { otherSpinner } from 'src/base/spinner'

function shapeFn(
	diameter: number,
	inputImagePath: string,
	outputImagePath: string
) {
	return new Promise(resolve => {
		const r = diameter / 2,
			circleShape = Buffer.from(
				`<svg><circle cx="${r}" cy="${r}" r="${r}" /></svg>`
			)
		sharp(inputImagePath)
			.resize(diameter, diameter)
			.composite([
				{
					input: circleShape,
					blend: 'dest-in',
				},
			])

			.toFile(outputImagePath, (err, info) => {
				resolve(true)
				if (err) {
					throw new GenerateError(GENERATE_CIRCLE_ICON_ERROR, err.message)
				}
			})
	})
}

export async function svgHandle() {
	try {
		const sourceBuffer = argument.sourceBuffer!
		for (const item of resourceMap) {
			const pngBuffer = await svg2png(sourceBuffer, {
				width: item.size,
				height: item.size,
			})

			const dirPath = resolve(process.cwd(), item.dirname)
			if (!stat(dirPath)) {
				await mkdir(dirPath)
			}

			await writeFile(
				resolve(process.cwd(), item.dirname, squareName),
				pngBuffer
			)
			await shapeFn(
				item.size,
				resolve(process.cwd(), item.dirname, squareName),
				resolve(process.cwd(), item.dirname, roundName)
			)
			otherSpinner.succeed(`✅ Generate Success In ${item.dirname}`)
		}
	} catch (error: any) {
		throw new GenerateError(GENERATE_SOURCE_ERROR, error.message)
	}
}
