import React,{useEffect,useState} from "react";
import axios from "axios";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";


const options={
    plugins:{
        legend:{
            position:'top',
        }
}
}
const CDoughnut=()=>{
    const [dough, setDuogh]=useState(null);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products/search?q=Laptop").then((res)=>{
                console.log(res.data.products);
                if(res.data.products.length>0){
                    setDuogh({
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
                    console.log("Data is not Found")
                }
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

    return(
        <div>
             <p style={{color:"rgb(255, 205, 86)",textAlign:"center"}}>Product Price</p>
          {dough!==null?(
            <div style={{maxWidth:"900px", display: "flex", justifycontent: "center",alignitems:"center",margin:"auto"}}>
                <Doughnut options={options} data={dough}/>
            </div>
           ):(
            <div>Data is null</div>
           )} 
        </div>
    )
}
export default CDoughnut