/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

const getQueryCategory = (key) => {
  switch (key) {
    case 0:
      return '/popular'
    case 1:
      return '/top_rated'
    case 2:
      return '/upcoming'
    default:
      return '/popular'
  }
}

export default getQueryCategory
