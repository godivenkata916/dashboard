import React,{useEffect,useState} from "react";
import axios from "axios";
import {Chart} from 'chart.js/auto';
import {Line} from 'react-chartjs-2';

const options={
    plugins:{
        legend:{
            position:'right'
        }
    },
}

const CLine=()=>{
    const [data,setData]=useState(null);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products/category/smartphones")
        .then((res)=>{
            // console.log(res.data.products)
            if(res.data.products.length>0){
                setData({
                    labels:res.data.products.map((brand)=>brand.brand),
                    datasets:[{
                        label:"stock",
                        data:res.data.products.map((brand)=>brand.stock),
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor:"rgb(24,77,5)",
                    }]
                })
            }else{
                console.log("no data found")
            }
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
    // console.log(data);
    return(
        <div>
            <p style={{color:"rgb(75, 192, 192)",textAlign:"center"}}>Products Stock</p>
           {data!==null?(
            <div>
                <Line options={options} data={data}/>
            </div>
           ):(
            <div>Data is null</div>
           )}
        </div>
    )
}
export default CLine