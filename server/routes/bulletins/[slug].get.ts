import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createError, defineEventHandler, getRouterParam, setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }

  const filePath = join(process.cwd(), 'public', 'bulletins', `${slug}.html`)

  try {
    const html = await readFile(filePath, 'utf-8')
    setHeader(event, 'Content-Type', 'text/html; charset=utf-8')
    return html
  } catch {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})
