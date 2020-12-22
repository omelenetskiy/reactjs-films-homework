/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import PropTypes from 'prop-types'
import { faStar as solidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Stars = ({ res, styles }) => {
  const getStars = (vote) => {
    const halfVote = Math.round(vote) / 2
    const averageVote = Math.round(vote / 2)
    return Array(5)
      .fill()
      .map((star, index) => {
        const key = index
        return halfVote == index + 0.5 ? (
          <FontAwesomeIcon className={styles.description__raiting_star} icon={faStarHalfAlt} key={key} />
        ) : averageVote < index + 1 ? (
          <FontAwesomeIcon className={styles.description__raiting_star} icon={regStar} key={key} />
        ) : (
          <FontAwesomeIcon className={styles.description__raiting_star} icon={solidStar} key={key} />
        )
      })
  }
  return <div className={styles}>{getStars(res.vote_average)}</div>
}

Stars.proptypes = {
  res: PropTypes.object.isRequired,
  styles: PropTypes.string.isRequired,
}
export default Stars
