import {useState, useEffect} from "react";
import { Divider, CardActionArea, Typography, CardContent, Card } from '@mui/material';
import {API_URL} from "../../Config/";
import "./styles.scss";

export default function Vehicles(){
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch(API_URL + '/vehicles.json')
      .then(response => response.json())
      .then(response => {
        let data = [];

        for (let id in response) {
          response[id].id = id;

          data.push(response[id]);
        }

        setVehicles(data);
      });
  }, []);

  return(
    <section className="page-vehicles">
      <div className="title">
        - Veiculos -
        <Divider/>
      </div>

      {vehicles.map(vec => {
        return (
          <Card style={{marginBottom: 20}}>
             <CardActionArea onClick={() => alert(vec.id)}>

               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   {vec.plate}
                 </Typography>
                 <Divider/>
                 <Typography variant="body2" style={{marginTop: 10}} color="text.secondary">
                   <strong>{vec.make}</strong> {vec.model}
                 </Typography>
               </CardContent>
             </CardActionArea>
           </Card>
        );
      })}
    </section>


  )
}
