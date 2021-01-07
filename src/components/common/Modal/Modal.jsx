/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import YouTube from 'react-youtube'
import { closeModal } from '../../../redux/actions/fetchTrailer'
import styles from './Modal.scss'

const Modal = () => {
  const dispatch = useDispatch()
  const { open, trailer } = useSelector((state) => state.trailer)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }
  return (
    open &&
    ReactDOM.createPortal(
      <div onClick={() => dispatch(closeModal())} className={styles.modal}>
        <YouTube videoId={trailer.results[0].key} opts={opts} />
      </div>,
      document.querySelector('#modal-root'),
    )
  )
}

export default Modal
