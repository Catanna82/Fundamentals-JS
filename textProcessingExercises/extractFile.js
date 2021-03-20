function extractFile(text) {
    let i = text.lastIndexOf('.');
    let extention = text.substring(i + 1);
    let fileName = text.slice((text.lastIndexOf('\\')) + 1, i)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extention}`);
}


extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');