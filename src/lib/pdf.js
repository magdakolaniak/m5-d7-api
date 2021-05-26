import PdfPrinter from 'pdfmake';
import striptags from 'striptags';
import axios from 'axios';

const fonts = {
  Roboto: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique',
  },
};
const printer = new PdfPrinter(fonts);

export const generateBlogPDF = async (post) => {
  //   let imagePart = {};
  //   if (post.cover) {
  //     const response = await axios.get(post.cover, {
  //       responseType: 'arraybuffer',
  //     });
  //     const postCoverURLParts = post.cover.split('/');
  //     const fileName = postCoverURLParts[postCoverURLParts.length - 1];
  //     const [id, extension] = fileName.split('.');
  //     const base64 = response.data.toString('base64');
  //     const base64Image = `data:image/${extension}, ${base64}`;
  //     imagePart = { image: base64Image, width: 500 };
  //   }

  const docDefinition = {
    content: [
      //   imagePart,
      { text: post.title, fontSize: 20, bold: true, margin: [200, 0, 0, 20] },
      { text: striptags(post.content), lineHeight: 3 },
    ],
  };
  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  return pdfDoc;
};
