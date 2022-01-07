
import { get } from 'lodash'

import { useSelector } from 'react-redux';

export const studentDetails = useSelector((state) =>
get(state, 'studentDetails', {}),
)

export const studentDetailsData = useSelector((state) =>
get(state, 'studentDetailsData', []),
)