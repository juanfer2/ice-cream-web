import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd'

function ModalContainer({ show, setShow, children }) {
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={show}
        onOk={() => setShow(false)}
        onCancel={() => setShow(false)}
      >
        {children}
      </Modal>
    </div>
  )
}

ModalContainer.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  children: PropTypes.element,
  titleButton: PropTypes.string,
}

export default ModalContainer
