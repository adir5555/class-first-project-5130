import { LineChart, Line, XAxis, YAxis } from 'recharts';
const LineCharts = () => {
   
    const student = [
        { id: 1, name: 'Student 1', mathMarks: 85 },
        { id: 2, name: 'Student 2', mathMarks: 90 },
        { id: 3, name: 'Student 3', mathMarks: 70 },
        { id: 4, name: 'Student 4', mathMarks: 60 },
        { id: 5, name: 'Student 5', mathMarks: 75 },
        { id: 6, name: 'Student 6', mathMarks: 80 },
        { id: 7, name: 'Student 7', mathMarks: 95 },
        { id: 8, name: 'Student 8', mathMarks: 65 },
        { id: 9, name: 'Student 9', mathMarks: 78 },
        { id: 10, name: 'Student 10', mathMarks: 88 },



        { id: 1, name: 'Student 1', mathMarks: 85, physicsMarks: 70 },
        { id: 2, name: 'Student 2', mathMarks: 90, physicsMarks: 75 },
        { id: 3, name: 'Student 3', mathMarks: 70, physicsMarks: 65 },
        { id: 4, name: 'Student 4', mathMarks: 60, physicsMarks: 50 },
        { id: 5, name: 'Student 5', mathMarks: 75, physicsMarks: 80 },
        { id: 6, name: 'Student 6', mathMarks: 80, physicsMarks: 85 },
        { id: 7, name: 'Student 7', mathMarks: 95, physicsMarks: 90 },
        { id: 8, name: 'Student 8', mathMarks: 65, physicsMarks: 60 },
        { id: 9, name: 'Student 9', mathMarks: 78, physicsMarks: 73 },
        { id: 10, name: 'Student 10', mathMarks: 88, physicsMarks: 82 }
      ];
      
    return (
        <div>
            <LineChart width={800} height={400} data={student}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
              <Line dataKey={'mathMarks'} stroke= 'red'></Line>
              <Line dataKey={'physicsMarks'} stroke= 'blue'></Line>
            </LineChart>
        </div>
    );
};

export default LineCharts;