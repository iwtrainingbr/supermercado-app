import {useState, useEffect} from "react";
import { Divider, CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import {API_URL} from "../../Config/";
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

      setProducts(data);
    });
  }, []);

  return (
    <section className="page-products">
      <div className="title">
        - Produtos -
        <Divider/>
      </div>

      {products.map(cat => {
        return (
          <Card style={{marginBottom: 20}}>
             <CardActionArea onClick={() => alert(cat.id)}>
               <CardMedia
                 component="img"
                 height="140"
                 image={cat.image}
                 alt="green iguana"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   {cat.name}
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                   {cat.description}
                 </Typography>
               </CardContent>
             </CardActionArea>
           </Card>
        );
      })}
      </section>
  )
}
