import styled from 'styled-components';
import { useState } from 'react';

const CultureDetailModal = ({ showModal, setShowModal }) => {
  if (showModal) {
    return <ModalWrap></ModalWrap>;
  } else {
    return <></>;
  }
};

const ModalWrap = styled.div`
  height: 500px;
  width: 500px;
  background-color: red;

  .black-bg {
    display: none;
  }

  .show-modal {
    display: block;
  }
`;

export default CultureDetailModal;
