export const saveStudentDetails = (studentDetails) => (
    {
        type: 'SAVE_STUDENT_DETAIL',
        studentDetails: {
            name: studentDetails.name,
            schoolName: studentDetails.schoolName,
            boardName: studentDetails.board
        }
    });

export const saveStudentDetailsData = (studentDetails) => (
    {
        type: 'SAVE_STUDENT_DETAIL_DATA',
        studentDetails: [...studentDetails]
    });

export const saveStudentName = (name) => (
    {
        type: 'SAVE_STUDENT_NAME',
        studentName: name
    });