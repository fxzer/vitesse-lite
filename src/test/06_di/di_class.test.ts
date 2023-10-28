import { describe, expect, it } from 'vitest'
import type { FileReader } from './readAndProcessClass'
import { readAndProcessFileDi } from './readAndProcessClass'

class FileReaderMock implements FileReader {
  read(): string {
    return 'Hello world'
  }
}
describe('依赖注入---类', () => {
  it('should return the content of the file', () => {
    const result = readAndProcessFileDi('./src/test/06_di/file.txt', new FileReaderMock())
    expect(result).toBe('Hello world --> test unit')
  })
})
