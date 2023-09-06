import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DiscountIcon from '@mui/icons-material/Discount';
import ReviewsIcon from '@mui/icons-material/Reviews';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CDoughnut from './dougthnut';
import CPloar from './polar';
import CPie from './pie';
import "./comp.css";
import CountUp from 'react-countup';
import { color } from '@mui/system';

 const Display=()=>{
    const [price, setPrice]=useState("");
    const [stock, setstock]=useState("");
    const [discount, setDiscount]=useState("");
    const [rating, setRating]=useState("");
    // const [carddata1, setCardData]=useState(0);
    

    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
            // console.log(res.data.products)
            if(res.data.products.length>0){
                setPrice(res.data.products.reduce((acc, item) => acc + item.price, 0));
                setstock(res.data.products.reduce((acc, item) => acc + item.stock, 0));
                setDiscount(res.data.products.reduce((maxPrice, product) => {
                    return Math.max(maxPrice, product.discountPercentage);
                  }, -Infinity));
                setRating(res.data.products.reduce((maxPrice, product) => {
                    return Math.max(maxPrice, product.rating);
                  }, -Infinity));
            }
        })
    },[])
    
    return(
        <div className='bgcolor'>
            <Box heigth={70}/>
            <Box sx={{ display:"flex"}}>
                <Box component="main" sx={{ flexGrow: 1, p:3}}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                    <Stack spacing={2} direction="row">
                    <Card sx={{ minWidth: 49 + "%", height:150}} className='gradient'>
                        <CardContent>
                            <div style={{color:"aliceblue"}}>
                                <CreditCardIcon/>
                            </div>
                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                            $ <CountUp start={-875.039} end={price} duration={2.75}/>.00
                            
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                            Total amount
                            </Typography>
                            
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 49 + "%", height:150 }} className='gradient'>
                            <div style={{marginTop:"10px",marginLeft:"20px",color:"aliceblue"}}>
                                <ShowChartIcon/>
                            </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                            +/- <CountUp start={-875.039} end={stock} duration={2.75}/>.00
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                            Total Stocks
                            </Typography>
                            
                        </CardContent>
                    </Card>
                    </Stack>
                    </Grid>
                    <Grid item xs={4}>
                    <Stack spacing={2} >
                    <Card sx={{ maxWidth: 395, }} className='gradientligth'>

                        <Stack spacing={2} direction="row">
                            <div style={{marginTop:"20px",marginLeft:"20px",color:"aliceblue"}}>
                            <DiscountIcon />
                            </div>
                            <div className='paddingall'>
                            <span className='discounttitle'><CountUp start={-875.039} end={discount} duration={3.75}/> % </span>
                            <br/>
                            <span className='discountsubtitle'>Top Discount</span>
                            </div>
                            </Stack>
                        
                    </Card>
                    <Card sx={{ maxWidth: 395,}} className='gradientligth'>
                        
                        <Stack spacing={2} direction="row">
                            <div style={{marginTop:"20px",marginLeft:"20px",color:"aliceblue"}}>
                            <ReviewsIcon />
                            </div>
                            <div className='paddingall'>
                            <span className='discounttitle'><CountUp start={-875.039} end={rating} duration={3.75}/></span>
                            <br/>
                            <span className='discountsubtitle'>Top Rating</span>
                            </div>
                            </Stack>
                        
                    </Card>
                    </Stack>
                    </Grid>
                </Grid>

                <Box heigth={20}/>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                    <Card sx={{ height:120 + "vh", marginTop:1}}>
                        <CardContent>
                            <CPloar/>
                        </CardContent>
                    </Card>
                    
                    </Grid>
                    <Grid item xs={4}>
                      
                    <Card sx={{ height:120 + "vh",marginTop:1}}>
                        <CardContent>
                            <CDoughnut/>
                            <CPie/>
                        </CardContent>
                    </Card>
                    
                    </Grid>
                </Grid>
                </Box> 
            </Box>
        </div>
    )
}

export default Display