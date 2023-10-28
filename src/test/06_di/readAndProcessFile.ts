import { readFileSync } from 'node:fs'

export function readAndProcessFile(filePath: string) {
  const content: string = readFileSync(filePath, { encoding: 'utf8' })
  return `${content.trim()} --> test unit`
}

export class FileReader {
  read(filePath: string): string {
    return readFileSync(filePath, { encoding: 'utf8' })
  }
}
export function readAndProcessFileDi(filePath: string, fileReader: FileReader) {
  const content: string = fileReader.read(filePath)
  return `${content.trim()} --> test unit`
}
