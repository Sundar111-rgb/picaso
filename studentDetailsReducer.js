const initialState = {
    employeeDetails: {
        name: '',
        schoolName: '',
        boardName: ''
    },
    studentName: '',
    studentDetailsData: []
};
const employeeDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_STUDENT_DETAIL': {
            return {
                ...state,
                studentDetails: action.studentDetails
            }
        }
        case 'SAVE_STUDENT_DETAIL_DATA': {
            return {
                ...state,
                studentDetailsData: action.studentDetails
            }
        }
        case 'SAVE_STUDENT_NAME': {
            return {
                ...state,
                studentName: action.name
            }
        }
        default: {
            return state;
        }
    }
}
export default employeeDetailReducer;