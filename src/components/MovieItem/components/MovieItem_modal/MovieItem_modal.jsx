/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Info } from '../../../common/Info'
import { Button } from '../../../common/Button'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MovieItem_modal.scss'

export const MovieItem_modal = ({ film, onModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__window}>
        <FontAwesomeIcon onClick={onModal} className={styles.modal__cross} icon={faTimesCircle} />
        <Info className={styles} film={film} />
        <div className={styles.modal__description}>{film.overview}</div>
        <Button className={styles.modal__button}>Watch Now</Button>
      </div>
    </div>
  )
}

MovieItem_modal.propTypes = {
  film: PropTypes.object.isRequired,
  onModal: PropTypes.func.isRequired,
}
