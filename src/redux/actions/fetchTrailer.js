/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import { SEARCH_TRAILER_SUCCESS, SEARCH_TRAILER_ERROR, CLOSE_MODAL } from './actionTypes'
import { API_KEY } from '../../utils/constants'

const fetchDataSuccess = (payload) => ({
  type: SEARCH_TRAILER_SUCCESS,
  payload,
})

const fetchDataError = (error) => ({
  type: SEARCH_TRAILER_ERROR,
  payload: error,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})

export const fetchTrailerData = (id) => async (dispatch) => {
  try {
    const responce = await fetch(
      // eslint-disable-next-line max-len
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
    )
    const film = await responce.json()
    dispatch(fetchDataSuccess(film))
  } catch (error) {
    dispatch(fetchDataError(error))
  }
}
