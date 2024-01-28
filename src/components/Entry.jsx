import UilUniversity from "./University.jsx";

export default function Entry() {
    return <div className="grid grid-cols-1 md:grid-cols-2 pt-12 pb-12">
        <div className="text-center">
            <p>This a basic dynamic GPA calculator for university students worldwide.</p>
            <p>Calculations are depending on the quarter system.</p>
            <p>Formula is ((Course1 Credit * Course1 Grade) + (Course2 Credit * Course2 Grade)) / Total Credit</p>
        </div>
        <UilUniversity/>
    </div>
}