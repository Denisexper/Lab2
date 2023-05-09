form.addEventlistener ("sumit", funtion(Event))
{
    Event.Calcularprecio();
    
    const row=document.createElement("tx")
    
    const CostoBase = 200;

    const partida=document.getElementById("Partida").value;

    const Destino=document.getElementById("Destino").value;

    const fecha= new Date(Document.getElementById("fecha").value);

    const hora= parseInt(Document.getElementById("hora").value.substring(0,2));

    const dia = fecha.getDay();

    if(partida |= destino)
    {
        costoBase += 50 ;
    }
    if(dia == 5 || dia == 6 || dia ==0)
    {
        costoBase +=50;
    }
    if((hora >=6 && hora <=8)|| (hora >=12 && hora <=13) || (hora >=17 && hora <=16))
    {
        costoBase +=50;
    }
    
    row.innerHTML
    `<td>${partida.toFixed(2)}<td>
    <td>${destino.toFixed(2)}<td>
    <td>${fecha.toFixed(2)}<td>
    <td>${hora.toFixed(2)}<td>
    ` ;




}




