/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import genresReducer from './genresReducer'
import navbarReducer from './navbarReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  navbar: navbarReducer,
})

export default rootReducer
