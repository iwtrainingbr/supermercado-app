import * as React from 'react';
import {useState, useEffect} from "react";
import { Divider, Typography, CardMedia, CardContent, Card, Chip, Stack } from '@mui/material';
import {API_URL} from "../../Config/";
import { CardActionArea } from '@mui/material';
import "./styles.scss"
import {CalendarToday} from "@mui/icons-material"
export default function Orders () {

  const [orders, setOrders] = useState([]);

  useEffect( () => {
    fetch(API_URL + '/orders.json')
    .then(response => response.json())
    .then (response => {
      let data = [];

      for (let id in response) {
        response[id].id = id
        data.push(response[id])
      }

      setOrders(data)
    })
}, [])

  return(
    <section className="page-orders">
      <div className="title">
        - Seus Pedidos -
        <Divider/>
      </div>

      {orders.map(order => {
        let status = 'warning';

        if (order.status === "Finalizado") {
          status = "success"
        }

        if (order.status === "Cancelado"){
          status = "error"
        }

        if (order.status === "Pendente"){
          status = "warning"
        }
        return (
          <Card style={{marginBottom: 20}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="text.primary">
                <Stack direction="row" spacing={3}>
                  <Chip color={status} label={

                    <Typography style={{marginTop: 10, marginBottom: 10}} gutterBottom variant="h6" component="div" color="text.white">
                      {order.date} - {order.hour}
                    </Typography>}

                      icon={<CalendarToday/>}
                  />
                </Stack>
                </Typography>

                <Divider/>

                <Typography variant="body1" color="text.black">
                <strong>Valor Total: R$ {order.total} </strong>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </section>
  );
}
