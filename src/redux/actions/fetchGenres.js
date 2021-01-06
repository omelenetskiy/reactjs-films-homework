/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */
import { SEARCH_GENRES_SUCCESS, SEARCH_GENRES_ERROR } from './actionTypes'

const fetchDataSuccess = (payload) => ({
  type: SEARCH_GENRES_SUCCESS,
  payload,
})

const fetchDataError = (error) => ({
  type: SEARCH_GENRES_ERROR,
  payload: error,
})

const fetchGenresData = () => async (dispatch) => {
  try {
    const responce = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=091df5c39d576cf7fe0bed4dc18564f5&language=en-US`,
    )
    const genresList = await responce.json()
    dispatch(fetchDataSuccess(genresList.genres))
  } catch (error) {
    dispatch(fetchDataError(error))
  }
}

export default fetchGenresData
