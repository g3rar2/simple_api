const express= require('express');
const app = express();
const PORT=3000;

app.use(express.json())


const equipos=[]


app.get('/',(req,res)=>{
    res.send({status:200,message:"Hello World!",data:equipos});
})

app.post('/',(req,res)=>{
    const equipo=req.body;
    equipos.push(equipo);
    res.send({status:200,message:"Sucess",data:equipo});

})


app.put('/',(req,res)=>{

    const equipo=req.body;
    let exist=false;

    equipos.forEach(cequipo=>{


        if(cequipo.id===equipo.id){
            exist=true;
            cequipo.modelo=equipo.modelo;
            cequipo.marca=equipo.marca;
            cequipo.anio=equipo.anio;
            cequipo.estado=equipo.estado;
        }

        if(exist){
            res.send({status:200,message:"Sucess",data:equipo});
        }else{
            res.send({status:200,message:"Sucess",data:null});
        }

    })






    res.send({status:200,message:"Actualizado",data:equipo});
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})