import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { useState } from "react";
import { FaReact } from 'react-icons/fa';

function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title/>
      <UploadForm></UploadForm>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>}
      <div className="footer">
        <div>Created using React</div>
        <FaReact/>
      </div>
    </div>
  );
}

export default App;
