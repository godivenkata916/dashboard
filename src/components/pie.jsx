import React,{useEffect,useState} from "react";
import axios from "axios";
import {Chart,ArcElement,PieController,Legend,Title,Tooltip} from 'chart.js/auto';
import {Pie} from "react-chartjs-2";
import './comp.css';
Chart.register(
    ArcElement,PieController,Legend,Title,Tooltip
)


const options={
    plugins:{
        legend:{
            position:'top',
        }
}
}
// console.log(options)
const CPie=()=>{
    const [piedata, setPiedata]=useState(null);

        useEffect(()=>{
            axios.get("https://dummyjson.com/products")
            .then((res)=>{
                // console.log(res.data.products)
                if(res.data.products.length>0){
                    setPiedata({
                        labels:res.data.products.map((item)=>item.title),
                        datasets: [{
                            label: 'price',
                            data: res.data.products.map((item)=>item.price),
                            backgroundColor: [
                              'rgb(255, 99, 132)',
                              'rgb(54, 162, 235)',
                              'rgb(255, 205, 86)',
                            ],
                            hoverOffset: 4
                          }]
                    })
                }else{
                    console.log("no data found");
                }
            }).catch((err)=>{
                console.log(err.message);
            });
        },[])

    return(
        <div>
            <p style={{color:"rgb(255, 205, 86)",textAlign:"center"}}>Product Price</p>
          {piedata!==null?(
            <div style={{maxWidth:"900px", display: "flex", justifycontent: "center",alignitems:"center",margin:"auto"}}>
                <Pie options={options} data={piedata}/>
            </div>
           ):(
            <div>Data is null</div>
           )} 
        </div>
    )
}
export default CPie