/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

const timeFormat = (time) => {
  const hour = Math.floor(time / 60)
  const min = time - hour * 60
  return `${hour}h ${min}min`
}

export default timeFormat
