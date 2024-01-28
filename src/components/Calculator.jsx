// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


export default function Calculator() {
    const [lessonCount, setLessonCount] = useState(0);
    const [lessons, setLessons] = useState([]);
    const [result, setResult] = useState(null);

    const convertGrade = (grade) => {
        if (grade < 0 || grade > 100) {
            return 'Invalid grade';
        } else if (grade >= 90) {
            return 4;
        } else if (grade >= 85) {
            return 3.5;
        } else if (grade >= 80) {
            return 3;
        } else if (grade >= 70) {
            return 2.5;
        } else if (grade >= 60) {
            return 2;
        } else if (grade >= 50) {
            return 1.5;
        } else if (grade >= 45) {
            return 1;
        } else {
            return 0;
        }
    };

    const calcGPA = () => {
        let totalCredit = 0;
        let totalGrade = 0;
        const grades = {};

        lessons.forEach((lesson, index) => {
            const { hasLab, credit, midterm, final, homework, midtermPercentage, finalPercentage, homeworkPercentage } = lesson;

            totalCredit += parseFloat(credit);

            let grade;
            if (hasLab === 'y') {
                grade =
                    midterm * (midtermPercentage / 100) +
                    final * (finalPercentage / 100) +
                    homework * (homeworkPercentage / 100);
            } else {
                grade = midterm * (midtermPercentage / 100) + final * (finalPercentage / 100);
            }

            const convertedGrade = convertGrade(grade);
            const lessonGrade = convertedGrade * parseFloat(credit);

            grades[`Lesson ${index + 1}`] = [lessonGrade, convertedGrade];
            totalGrade += lessonGrade;
        });

        setResult({
            grades,
            totalCredit,
            totalGrade,
            gpa: totalCredit !== 0 ? totalGrade / totalCredit : 0,
        });
    };


    const handleLessonChange = (index, field, value) => {
        const updatedLessons = [...lessons];
        updatedLessons[index][field] = value;
        setLessons(updatedLessons);
    };

    const handleLessonCountChange = (event) => {
        const count = parseInt(event.target.value, 10) || 0;
        setLessonCount(count);
        setLessons(Array.from({ length: count }, (_, i) => (i < lessons.length ? lessons[i] : {})));
    };

    return (
        <div id="tool" className="Calculator">
            <h1 className="font-bold text-center text-2xl">GPA Calculator</h1>
            <div className="flex justify-center p-3">
                <label className="" htmlFor="lessonCount">How many lessons do you have?</label>
                <br/>
                <input className="text-stone-950"
                    type="number"
                    id="lessonCount"
                    name="lessonCount"
                    value={lessonCount}
                    onChange={handleLessonCountChange}
                />
            </div>


            {lessons.map((lesson, index) => (
                <div key={index} className="lesson w-3/4 bg-[#313c41] rounded-xl m-auto mb-4 p-2 grid grid-cols-1 sm:block">
                    <hr />
                    <label htmlFor={`hasLab_${index}`}>Do you have lab for this lesson? (y/n):</label>
                    <input className=""
                        type="text"
                        id={`hasLab_${index}`}
                        name={`hasLab_${index}`}
                        value={lesson.hasLab || ''}
                        onChange={(e) => handleLessonChange(index, 'hasLab', e.target.value)}
                    />

                    <label htmlFor={`credit_${index}`}>Credit:</label>
                    <input
                        type="number"
                        id={`credit_${index}`}
                        name={`credit_${index}`}
                        value={lesson.credit || ''}
                        onChange={(e) => handleLessonChange(index, 'credit', e.target.value)}
                    />

                    <label htmlFor={`midtermPercentage_${index}`}>Midterm Percentage:</label>
                    <input
                        type="number"
                        id={`midtermPercentage_${index}`}
                        name={`midtermPercentage_${index}`}
                        value={lesson.midtermPercentage || ''}
                        onChange={(e) => handleLessonChange(index, 'midtermPercentage', e.target.value)}
                    />

                    <label htmlFor={`midterm_${index}`}>Midterm Grade:</label>
                    <input
                        type="number"
                        id={`midterm_${index}`}
                        name={`midterm_${index}`}
                        value={lesson.midterm || ''}
                        onChange={(e) => handleLessonChange(index, 'midterm', e.target.value)}
                    />

                    <label htmlFor={`finalPercentage_${index}`}>Final Percentage:</label>
                    <input
                        type="number"
                        id={`finalPercentage_${index}`}
                        name={`finalPercentage_${index}`}
                        value={lesson.finalPercentage || ''}
                        onChange={(e) => handleLessonChange(index, 'finalPercentage', e.target.value)}
                    />

                    <label htmlFor={`final_${index}`}>Final Grade:</label>
                    <input
                        type="number"
                        id={`final_${index}`}
                        name={`final_${index}`}
                        value={lesson.final || ''}
                        onChange={(e) => handleLessonChange(index, 'final', e.target.value)}
                    />

                    {lesson.hasLab === 'y' && (
                        <div className="grid grid-cols-1 sm:block">
                            <label htmlFor={`homeworkPercentage_${index}`}>Homework Percentage:</label>
                            <input
                                type="number"
                                id={`homeworkPercentage_${index}`}
                                name={`homeworkPercentage_${index}`}
                                value={lesson.homeworkPercentage || ''}
                                onChange={(e) => handleLessonChange(index, 'homeworkPercentage', e.target.value)}
                            />

                            <label htmlFor={`homework_${index}`}>Homework Grade:</label>
                            <input
                                type="number"
                                id={`homework_${index}`}
                                name={`homework_${index}`}
                                value={lesson.homework || ''}
                                onChange={(e) => handleLessonChange(index, 'homework', e.target.value)}
                            />
                        </div>
                    )}
                </div>
            ))}


            <button className="block border border-stone-400 shadow rounded p-1 m-auto mt-3 mb-8 bg-stone-600" type="button" onClick={calcGPA}>
                Calculate GPA
            </button>

            {result && (
                <div className="result text-center w-1/2 m-auto mb-12 ">
                    <table className="m-auto bg-[#313c41] rounded-xl">
                        <thead>
                        <tr>
                            <th className="p-2">Lesson Name</th>
                            <th className="p-2">Grade*Credit</th>
                            <th className="p-2">Grade</th>
                        </tr>
                        </thead>
                        <tbody className="text">
                        {Object.entries(result.grades).map(([lesson, data]) => (
                            <tr key={lesson}>
                                <td>{lesson}</td>
                                <td>{data[0]}</td>
                                <td>{data[1]}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="3">Total Credit: {result.totalCredit}</td>
                        </tr>
                        <tr>
                            <td colSpan="3">Total Grade: {result.totalGrade}</td>
                        </tr>
                        <tr>
                            <td colSpan="3">Total GPA: {result.gpa}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}