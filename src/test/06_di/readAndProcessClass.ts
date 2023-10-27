export interface FileReader{
  read(filePath:string):string
}
export function readAndProcessFileDi(filePath:string, fileReader:FileReader){
  const content:string = fileReader.read(filePath);
  return content.trim() + ' --> test unit'
}
