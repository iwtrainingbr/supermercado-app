import {useState, useEffect} from "react";
import { Divider, CardActionArea, Typography, Grid, CardMedia, CardContent, Card } from '@mui/material';
import {API_URL} from "../../Config/";
import "./styles.scss";

export default function Deliveryman(props) {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    fetch(API_URL + '/deliverymen.json')
      .then(response => response.json())
      .then(response => {
        let data = [];

        for (let id in response) {
          response[id].id = id;

          data.push(response[id]);
        }

        setDeliverymen(data);
      });
  }, []);

  return  (
      <section className="page-deliveryman">
        <div className="title">
          - Entregadores -
          <Divider/>
        </div>

        {deliverymen.map(del => {
          return (
            <Card style={{marginBottom: 20}}>
                 <CardContent>
                 <Grid container>
                   <Grid item>
                      <img src={del.photo} width="100"/>
                   </Grid>

                   <Grid item>
                       <Typography gutterBottom variant="h5" component="div">
                         {del.name}
                       </Typography>
                       <Typography variant="body2" color="text.secondary">
                         {del.phone}
                       </Typography>
                   </Grid>
                 </Grid>

                 </CardContent>
             </Card>
          );
        })}
      </section>
  )
}
