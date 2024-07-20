import { buildFailHandle } from './base/error'
import { spinner } from './base/spinner'
import { handleArgument } from './core/agument'
import { svgHandle } from './core/svg'

async function main() {
	try {
		spinner.info('Icon Generating In Progress......')
		await handleArgument()
		await svgHandle()
		spinner.stop()
		spinner.succeed('Icon Generating Success')
	} catch (error: any) {
		buildFailHandle(error)
	}
}

export default () => {
	main()
}
