import React, { useState } from "react";
import { useRouter } from 'next/router'


// const ArticleViewer = () => {
//   const reactPdf = require("react-pdf/dist/esm/entry.webpack5");
//   const { Document, Page } = reactPdf;
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages }: any) {
//     setNumPages(numPages);
//   }
//   return (
//       <div style={{ textAlign: "center" }}>
//           <Document
//       file="https://nftstorage.link/ipfs/bafybeiae5utnautsfe4yekkbi66zbpsxpriduf6ht4lkhdcnn3fmgkplwq"
//       onLoadSuccess={onDocumentLoadSuccess}
//     >
//       {Array.from(
//         new Array(numPages),
//         (el, index) => (
//           <Page
//           renderMode="none"
//             key={`page_${index + 1}`}
//             pageNumber={index + 1}
//           />
//         ),
//       )}
//     </Document>

//       </div>
//   );
// };
// export default ArticleViewer;

//pdfurl is data.properties.files.uri

const ArticleViewer = () => {

    const router = useRouter();
    const data = router.query;

    console.log(`This is the data for: ${data}`);
    console.log(Object.keys(data)[0]);

    const reactPdf = require("react-pdf/dist/esm/entry.webpack5");
    const { Document, Page } = reactPdf;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }: any) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

    return (
        <div style={{ textAlign: "center" }}>
            <nav>
                <button onClick={goToPrevPage} style = {{backgroundColor:"#D4D4D4"}}>Prev</button>
                <button onClick={goToNextPage} style = {{backgroundColor:"#D4D4D4"}}>Next</button>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </nav>
            <div>
                <Document
                    file= {Object.keys(data)[0]}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <div style={{ textAlign: "center" }}>
                        <Page
                            renderMode="none"
                            // renderTextLayer={false}
                            pageNumber={pageNumber}
                            width={700}
                        />
                    </div>
                </Document>
            </div>
        </div>
    );
}

export default ArticleViewer;