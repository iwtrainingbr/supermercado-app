import {useState, useEffect} from "react";
import { Divider, CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import {API_URL} from "../../Config/";
import Loading from "../../components/Loading";

import "./styles.scss";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL + '/products.json')
    .then(response => response.json())
    .then(response => {
      let data = [];

      for (let id in response) {
        response[id].id = id;

        data.push(response[id]);
      }

      setTimeout(() => {
        setProducts(data);
      }, 3000);
    });
  }, []);

  if (products.length === 0) {
    return (<Loading/>);
  }

  return (
    <section className="page-products">
      <div className="title">
        - Produtos -
        <Divider/>
      </div>

      {products.map(prod => {
        return (
          <Card style={{marginBottom: 20}}>
             <CardActionArea onClick={() => alert(prod.id)}>
               <CardMedia
                 component="img"
                 height="140"
                 image={prod.image}
                 alt="green iguana"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   {prod.name}
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                   {prod.description}
                 </Typography>
               </CardContent>
             </CardActionArea>
           </Card>
        );
      })}
      </section>
  )
}
