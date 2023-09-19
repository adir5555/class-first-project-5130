
import axios from "axios";
import { useState } from "react";
import { BarChart, Bar,  XAxis, YAxis,  Tooltip, } from 'recharts';
import { Audio } from 'react-loader-spinner'
const Phones = () => {
    const [phone, setPones] = useState([]);
    const [lodding, setlodding]=useState(true);
    useState(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data =>setPones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(data => console.log(data.data.data));
            .then(data => {
                const phonedata = data.data.data;
                const newdata = phonedata.map(phone => {
                    const obj = {
                        name: phone.phone_name,

                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(newdata);
                setPones(newdata);
                setlodding(false);
            });
    }, [])
    return (
        <div>
           
            {
              lodding && <div> <Audio
                height = "80"
                width = "80"
                radius = "9"
                color = 'green'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
              />
                 </div> }
            <h2 className="text-3xl">phones:{phone.length}</h2>
            <BarChart width={900} height={600} data={phone}>
                <Bar dataKey={"price"} fill={'red'} />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>

            </BarChart>
        </div>
    );
};

export default Phones;