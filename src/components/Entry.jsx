import UilUniversity from "./University.jsx";

export default function Entry() {
    return <>
        <h1 id="info" className="text-center text-4xl font-bold mt-8"> Welcome To GPA Calculator</h1>
        <div className="text-center mt-4">
        <p>The university grade point average is calculated based on the credits</p>
        <p>of the courses and the letter grades you receive. These credits and grades</p>
        <p>are multiplied to obtain the GPA.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-12 pb-12">
        <div className="text-center">
            <table className="m-auto mt-3 rounded-xl bg-[#313c41] w-3/4 lg:w-[60%]">
                <thead className="">
                <tr>
                    <th className="p-2">Letter Grade System</th>
                    <th className="p-2">4-Point Grade System</th>
                    <th className="p-2">Percentage Grade System</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>AA</td>
                    <td>4.00</td>
                    <td>90-100</td>
                </tr>
                <tr>
                    <td>BA</td>
                    <td>3.50</td>
                    <td>85-89</td>
                </tr>
                <tr>
                    <td>BB</td>
                    <td>3.00</td>
                    <td>80-84</td>
                </tr>
                <tr>
                    <td>CB</td>
                    <td>2.50</td>
                    <td>70-79</td>
                </tr>
                <tr>
                    <td>CC</td>
                    <td>2.00</td>
                    <td>60-69</td>
                </tr>
                <tr>
                    <td>DC</td>
                    <td>1.50</td>
                    <td>50-59</td>
                </tr>
                <tr>
                    <td>DD</td>
                    <td>1.00</td>
                    <td>45-49</td>
                </tr>
                <tr>
                    <td>FF</td>
                    <td>0.00</td>
                    <td>0-44</td>
                </tr>
                </tbody>
            </table>
        </div>
        <UilUniversity/>
    </div></>
}