import React,{useEffect,useState} from "react";
import axios from "axios";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const options={
    plugins:{
        legend:{
            position:'top',
        }
    },
}
const CBar=()=>{
    const [bardata, setBardata]=useState(null);


    useEffect(()=>{
        axios.get("https://dummyjson.com/users").then((res)=>{
            // console.log(res.data.users);
            if(res.data.users.length>0){
                setBardata({
                    labels:res.data.users.map((item)=>item.firstName),
                    datasets:[
                    {
                        label:'height',
                        data:res.data.users.map((item)=>item.height),
                        backgroundColor:[
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor:[
                            'rgb(54, 162, 235)',
                        ],
                        borderWidth: 1,
                        
                    },
                    {
                        label:'weight',
                        data:res.data.users.map((item)=>item.weight),
                        backgroundColor:[
                            'pink',
                        ],
                        borderColor:[
                            'rgb(75, 192, 192)',
                        ],
                        borderWidth: 1,
                    }
                ]
                })
            }else{
                console.log("no data found");
            }
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])

    return(
        <div>
            <p style={{color:"rgb(255, 205, 86)",textAlign:"center"}}>height & Weight</p>
          {bardata!==null?(
            <div style={{ display: "flex", justifycontent: "center",alignitems:"center",margin:"auto"}}>
                <Bar options={options} data={bardata}/>
            </div>
           ):(
            <div>Data is null</div>
           )}  
        </div>
    )
}
export default CBar