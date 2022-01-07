const initialState = {
    employeeDetails: {
        name: '',
        schoolName: '',
        companyName: ''
    },
    employeeName: '',
    employeeDetailsData: []
};
const employeeDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_EMPLOYEE_DETAIL': {
            return {
                ...state,
                employeeDetails: action.employeeDetails
            }
        }
        case 'SAVE_EMPLOYEE_DETAIL_DATA': {
            return {
                ...state,
                employeeDetailsData: action.employeeDetails
            }
        }
        case 'SAVE_EMPLOYEE_NAME': {
            return {
                ...state,
                employeeName: action.name
            }
        }
        default: {
            return state;
        }
    }
}
export default employeeDetailReducer;