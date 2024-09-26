import * as file from 'node:fs'
import * as path from 'node:path'

export default defineEventHandler(async (event) => {
    const localPath = path.join(process.cwd(), 'public', 'b.json')
    const data = await file.promises.readFile(localPath, 'utf-8')

    const json = JSON.parse(data)

    return json
})
