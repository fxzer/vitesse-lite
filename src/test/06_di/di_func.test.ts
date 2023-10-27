import { it, expect, describe } from 'vitest'
import { readAndProcessFile, readAndProcessFileDi } from './readAndProcessFile'

describe('readAndProcessFile', () => {
  it('should return the content of the file', () => {
    const result = readAndProcessFile('./src/test/06_di/file.txt')
    expect(result).toBe('Hello world --> test unit')
  })

  it('依赖注入---函数',() => {
    class FileReaderMock {
      read():string{
        return 'Hello world'
      }
    }
    const result = readAndProcessFileDi('./src/test/06_di/file.txt', new FileReaderMock())
    expect(result).toBe('Hello world --> test unit')
  })
})

