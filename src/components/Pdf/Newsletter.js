// import React, { Component } from 'react'
// import axios from 'axios'

// class Newsletter extends Component {
//     state = {
//         selectedFile: null
//     }
//     fileSelectedHandler = event => {
//        this.setState({
//            selectedFile: event.target.files[0]
//        })

//     }

//     fileUploadHandler = () => {
//         const fd = new FormData();
//         fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
//         axios.post('', fd, {
//             onUploadProgress: progressEvent => {
//                 console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
//             }
//         })
           
//         .then(res => {
//             console.log(res)
//         })

//     }
//     render() {
//         return(
//             <div className="Newsletter">
//             <input 
//             type="file" 
//             style={{display: 'none'}}
//             onChange={this.fileSelectedHandler}
//             ref={fileInput => this.fileInput = fileInput}/>
//             <button onClick={() => this.fileInput.click()}>Pick File</button>
//             <button onClick={this.fileUploadHandler}>Upload</button>
//             </div>
//         )
//     }

// }
// export default Newsletter 

import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
// import Pdf from './Documents/AlexLeResume.pdf'


// class Download extends Component {

//   render() {

//     return (
//       <div className = "App">
//         <a href = {Pdf} target = "_blank">Date of Newsletter</a>
//       </div>
//     );
//   }
// }

// export default Download;

class Newsletter extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }
   
    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }
   
    render() {
      const { pageNumber, numPages } = this.state;
   
      return (
        <div>
          <Document
            file="/AlexLeResume.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      );
    }
  }

  export default Newsletter