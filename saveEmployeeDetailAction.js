export const saveEmployeeDetails = (employeeDetails) => (
    {
        type: 'SAVE_EMPLOYEE_DETAIL',
        employeeDetails: {
            name: employeeDetails.name,
            schoolName: employeeDetails.schoolName,
            companyName: employeeDetails.companyName
        }
    });

export const saveEmployeeDetailsData = (employeeDetails) => (
    {
        type: 'SAVE_EMPLOYEE_DETAIL_DATA',
        employeeDetails: [...employeeDetails]
    });

export const saveEmployeeName = (name) => (
    {
        type: 'SAVE_EMPLOYEE_NAME',
        employeeName: name
    });