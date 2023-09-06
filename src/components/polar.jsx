import React,{useEffect,useState} from "react";
import axios from "axios";
import { Chart } from "chart.js/auto";
import { PolarArea } from "react-chartjs-2";

const options={
    plugins:{
        legend:{
            position:'top',
        }
}
}

const CPloar=()=>{
    const [ploar,setPloar]=useState(null);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
            if(res.data.products.length>0){
                setPloar({
                    labels:res.data.products.map((item)=>item.title),
                    datasets:[{
                        label:'rating',
                        data:res.data.products.map((item)=>item.rating),
                        backgroundColor: [
                            'rgb(201, 203, 207)',
                            'rgb(54, 162, 235)'
                          ],},{
                            label:'discountPercentage',
                            data:res.data.products.map((item)=>item.discountPercentage),
                            backgroundColor: [
                                'rgb(75, 192, 192)',
                                'rgb(255, 205, 86)',
                                
                              ]
                          },
                        ]
                });
            }else{
                console.log("data is not found");
            }
        }).catch((err)=>{
            console.log(err.message);
        });
    },[])

    return(
        <div>
             <p style={{color:"rgb(255, 205, 86)",textAlign:"center"}}>Rating & Percentage</p>
          {ploar!==null?(
            <div style={{maxWidth:"900px", display: "flex", justifycontent: "center",alignitems:"center",margin:"auto"}}>
                <PolarArea options={options} data={ploar}/>
            </div>
           ):(
            <div>Data is null</div>
           )} 
        </div>
    )
}
export default CPloar