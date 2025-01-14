/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import { SEARCH_TRAILER_SUCCESS, SEARCH_TRAILER_ERROR, CLOSE_MODAL } from '../actions/actionTypes'

const initialState = {
  open: false,
  trailer: {},
  error: null,
}

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TRAILER_SUCCESS:
      return {
        ...state,
        open: true,
        trailer: action.payload,
      }
    case SEARCH_TRAILER_ERROR:
      return {
        ...state,
        open: false,
        error: action.payload,
      }
    case CLOSE_MODAL:
      return initialState
    default:
      return state
  }
}

export default trailerReducer
