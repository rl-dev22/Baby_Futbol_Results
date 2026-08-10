// db.js - Base de datos ONFI (Zona 8)

const ZONA_8_DB = {
  zona: "Zona 8",
  ligas: [
    //Palermo
    {
      id: "palermo",
      nombre: "Liga Palermo",
      fundacion: "13 de mayo de 1963",
      series: [
        {
          id: "palermo-a",
          nombre: "Serie A",
          clubes: [
            "Rinconada", "Enrique López", "Carabelas", "Poco Sitio", "Rayo Rojo",
            "Mirador", "Don Bosco", "La Escalinata", "La Picada", "Euskalerría",
            "Maeso", "Urunday", "Estrella del Sur", "Unión Vecinal"
          ],
          categorias: [
            {
              id: "2020",
              fechas: [
                { num: 1, partidos: [{ local: "Urunday", visitante: "Poco Sitio", gl: 1, gv: 3 }, { local: "Enrique López", visitante: "Carabelas", gl: 0, gv: 3 }, { local: "Maeso", visitante: "La Escalinata", gl: 1, gv: 0 }, { local: "Mirador", visitante: "Euskalerría", gl: 6, gv: 1 }, { local: "La Picada", visitante: "Rinconada", gl: 0, gv: 2 }, { local: "Rayo Rojo", visitante: "Don Bosco", gl: 0, gv: 1 }, { local: "Estrella del Sur", visitante: "Unión Vecinal", gl: 1, gv: 0 }] },
                { num: 2, partidos: [{ local: "Poco Sitio", visitante: "Enrique López", gl: 3, gv: 1 }, { local: "La Escalinata", visitante: "Urunday", gl: 7, gv: 0 }, { local: "Euskalerría", visitante: "Carabelas", gl: 0, gv: 7 }, { local: "Rinconada", visitante: "Maeso", gl: 2, gv: 3 }, { local: "Mirador", visitante: "Rayo Rojo", gl: 2, gv: 0 }, { local: "Estrella del Sur", visitante: "La Picada", gl: 0, gv: 2 }, { local: "Unión Vecinal", visitante: "Don Bosco", gl: 3, gv: 0 }] },
                { num: 3, partidos: [{ local: "Poco Sitio", visitante: "La Escalinata", gl: 2, gv: 3 }, { local: "Enrique López", visitante: "Euskalerría", gl: 3, gv: 0 }, { local: "Urunday", visitante: "Rinconada", gl: 1, gv: 1 }, { local: "Carabelas", visitante: "Rayo Rojo", gl: 5, gv: 0 }, { local: "Maeso", visitante: "Estrella del Sur", gl: 3, gv: 1 }, { local: "Mirador", visitante: "Unión Vecinal", gl: 0, gv: 1 }, { local: "Don Bosco", visitante: "La Picada", gl: 0, gv: 0 }] },
                { num: 4, partidos: [{ local: "Euskalerría", visitante: "Poco Sitio", gl: 2, gv: 1 }, { local: "La Escalinata", visitante: "Rinconada", gl: 1, gv: 1 }, { local: "Rayo Rojo", visitante: "Enrique López", gl: 0, gv: 2 }, { local: "Estrella del Sur", visitante: "Urunday", gl: 2, gv: 0 }, { local: "Unión Vecinal", visitante: "Carabelas", gl: 0, gv: 0 }, { local: "Maeso", visitante: "Don Bosco", gl: 7, gv: 0 }, { local: "La Picada", visitante: "Mirador", gl: 1, gv: 7 }] },
                { num: 5, partidos: [{ local: "Poco Sitio", visitante: "Rinconada", gl: 0, gv: 5 }, { local: "Euskalerría", visitante: "Rayo Rojo", gl: 0, gv: 0 }, { local: "La Escalinata", visitante: "Estrella del Sur", gl: 0, gv: 2 }, { local: "Enrique López", visitante: "Unión Vecinal", gl: 1, gv: 1 }, { local: "Urunday", visitante: "Don Bosco", gl: 0, gv: 1 }, { local: "Carabelas", visitante: "La Picada", gl: 2, gv: 2 }, { local: "Mirador", visitante: "Maeso", gl: 2, gv: 1 }] },
                { num: 6, partidos: [{ local: "Poco Sitio", visitante: "Rayo Rojo", gl: 5, gv: 1 }, { local: "Rinconada", visitante: "Estrella del Sur", gl: 1, gv: 1 }, { local: "Urunday", visitante: "Mirador", gl: 0, gv: 4 }, { local: "Don Bosco", visitante: "La Escalinata", gl: 0, gv: 0 }, { local: "Maeso", visitante: "Carabelas", gl: 5, gv: 1 }, { local: "Unión Vecinal", visitante: "Euskalerría", gl: 1, gv: 1 }, { local: "La Picada", visitante: "Enrique López", gl: 1, gv: 6 }] },
                { num: 7, partidos: [{ local: "Estrella del Sur", visitante: "Poco Sitio", gl: 4, gv: 0 }, { local: "Unión Vecinal", visitante: "Rayo Rojo", gl: 6, gv: 0 }, { local: "Rinconada", visitante: "Don Bosco", gl: 2, gv: 0 }, { local: "La Picada", visitante: "Euskalerría", gl: 0, gv: 3 }, { local: "La Escalinata", visitante: "Mirador", gl: 0, gv: 1 }, { local: "Enrique López", visitante: "Maeso", gl: 1, gv: 6 }, { local: "Carabelas", visitante: "Urunday", gl: 5, gv: 3 }] },
                { num: 8, partidos: [{ local: "Unión Vecinal", visitante: "Poco Sitio", gl: 3, gv: 1 }, { local: "Don Bosco", visitante: "Estrella del Sur", gl: 1, gv: 2 }, { local: "Rayo Rojo", visitante: "La Picada", gl: 2, gv: 4 }, { local: "Mirador", visitante: "Rinconada", gl: 2, gv: 0 }, { local: "Euskalerría", visitante: "Maeso", gl: 0, gv: 3 }, { local: "Carabelas", visitante: "La Escalinata", gl: 3, gv: 0 }, { local: "Urunday", visitante: "Enrique López", gl: 0, gv: 0 }] },
                { num: 9, partidos: [{ local: "La Picada", visitante: "Unión Vecinal", gl: 0, gv: 0 }, { local: "Estrella del Sur", visitante: "Mirador", gl: 1, gv: 1 }, { local: "Maeso", visitante: "Rayo Rojo", gl: 7, gv: 0 }, { local: "Rinconada", visitante: "Carabelas", gl: 3, gv: 3 }, { local: "Euskalerría", visitante: "Urunday", gl: 3, gv: 0 }, { local: "Enrique López", visitante: "La Escalinata", gl: 0, gv: 4 }, { local: "Poco Sitio", visitante: "Don Bosco", gl: 3, gv: 0 }] },
                { num: 10, partidos: [{ local: "Poco Sitio", visitante: "La Picada", gl: 3, gv: 0 }, { local: "Don Bosco", visitante: "Mirador", gl: 0, gv: 4 }, { local: "Unión Vecinal", visitante: "Maeso", gl: 2, gv: 3 }, { local: "Carabelas", visitante: "Estrella del Sur", gl: 1, gv: 1 }, { local: "Urunday", visitante: "Rayo Rojo", gl: 6, gv: 0 }, { local: "Enrique López", visitante: "Rinconada", gl: 2, gv: 2 }, { local: "La Escalinata", visitante: "Euskalerría", gl: 3, gv: 1 }] },
                { num: 11, partidos: [{ local: "Mirador", visitante: "Poco Sitio", gl: 3, gv: 0 }, { local: "Maeso", visitante: "La Picada", gl: 3, gv: 0 }, { local: "Carabelas", visitante: "Don Bosco", gl: 4, gv: 0 }, { local: "Unión Vecinal", visitante: "Urunday", gl: 1, gv: 5 }, { local: "Estrella del Sur", visitante: "Enrique López", gl: 1, gv: 0 }, { local: "Rayo Rojo", visitante: "La Escalinata", gl: 1, gv: 4 }, { local: "Euskalerría", visitante: "Rinconada", gl: 1, gv: 4 }] },
                { num: 12, partidos: [{ local: "Mirador", visitante: "Carabelas", gl: 3, gv: 3 }, { local: "La Picada", visitante: "Urunday", gl: 2, gv: 3 }, { local: "Enrique López", visitante: "Don Bosco", gl: 1, gv: 1 }, { local: "La Escalinata", visitante: "Unión Vecinal", gl: 0, gv: 1 }, { local: "Rinconada", visitante: "Rayo Rojo", gl: 1, gv: 0 }, { local: "Poco Sitio", visitante: "Maeso", gl: 0, gv: 3 }, { local: "Estrella del Sur", visitante: "Euskalerría", gl: 3, gv: 0 }] },
                { num: 13, partidos: [{ local: "Carabelas", visitante: "Poco Sitio", gl: 1, gv: 0 }, { local: "Urunday", visitante: "Maeso", gl: 0, gv: 6 }, { local: "Mirador", visitante: "Enrique López", gl: 2, gv: 0 }, { local: "La Escalinata", visitante: "La Picada", gl: 6, gv: 0 }, { local: "Don Bosco", visitante: "Euskalerría", gl: 0, gv: 1 }, { local: "Rinconada", visitante: "Unión Vecinal", gl: 0, gv: 4 }, { local: "Estrella del Sur", visitante: "Rayo Rojo", gl: 4, gv: 0 }] },
                { num: 14, partidos: [{ local: "Poco Sitio", visitante: "Urunday", gl: 4, gv: 2 }, { local: "Carabelas", visitante: "Enrique López", gl: 2, gv: 0 }, { local: "La Escalinata", visitante: "Maeso", gl: 5, gv: 0 }, { local: "Euskalerría", visitante: "Mirador", gl: 0, gv: 2 }, { local: "Rinconada", visitante: "La Picada", gl: 2, gv: 0 }, { local: "Don Bosco", visitante: "Rayo Rojo", gl: 0, gv: 0 }, { local: "Unión Vecinal", visitante: "Estrella del Sur", gl: 1, gv: 1 }] },
                { num: 15, partidos: [{ local: "Enrique López", visitante: "Poco Sitio", gl: 1, gv: 0 }, { local: "Urunday", visitante: "La Escalinata", gl: 0, gv: 1 }, { local: "Carabelas", visitante: "Euskalerría", gl: 5, gv: 0 }, { local: "Maeso", visitante: "Rinconada", gl: 4, gv: 0 }, { local: "Rayo Rojo", visitante: "Mirador", gl: 1, gv: 3 }, { local: "La Picada", visitante: "Estrella del Sur", gl: 0, gv: 2 }, { local: "Don Bosco", visitante: "Unión Vecinal", gl: 0, gv: 1 }] }
              ]
            },
            {
              id: "2019",
              fechas: [
                { num: 1, partidos: [{ local: "Urunday", visitante: "Poco Sitio", gl: 0, gv: 3 }, { local: "Enrique López", visitante: "Carabelas", gl: 6, gv: 3 }, { local: "Maeso", visitante: "La Escalinata", gl: 0, gv: 1 }, { local: "Mirador", visitante: "Euskalerría", gl: 3, gv: 0 }, { local: "La Picada", visitante: "Rinconada", gl: 2, gv: 1 }, { local: "Rayo Rojo", visitante: "Don Bosco", gl: 0, gv: 1 }, { local: "Estrella del Sur", visitante: "Unión Vecinal", gl: 1, gv: 3 }] },
                { num: 2, partidos: [{ local: "Poco Sitio", visitante: "Enrique López", gl: 1, gv: 4 }, { local: "La Escalinata", visitante: "Urunday", gl: 6, gv: 1 }, { local: "Euskalerría", visitante: "Carabelas", gl: 1, gv: 3 }, { local: "La Rinconada", visitante: "Maeso", gl: 4, gv: 0 }, { local: "Mirador", visitante: "Rayo Rojo", gl: 1, gv: 0 }, { local: "Estrella del Sur", visitante: "La Picada", gl: 0, gv: 2 }, { local: "Unión Vecinal", visitante: "Don Bosco", gl: 6, gv: 0 }] },
                { num: 3, partidos: [{ local: "Poco Sitio", visitante: "La Escalinata", gl: 0, gv: 6 }, { local: "Enrique López", visitante: "Euskalerría", gl: 8, gv: 0 }, { local: "Urunday", visitante: "Rinconada", gl: 0, gv: 5 }, { local: "Carabelas", visitante: "Rayo Rojo", gl: 3, gv: 0 }, { local: "Maeso", visitante: "Estrella del Sur", gl: 2, gv: 1 }, { local: "Mirador", visitante: "Unión Vecinal", gl: 3, gv: 5 }, { local: "Don Bosco", visitante: "La Picada", gl: 1, gv: 0 }] },
                { num: 4, partidos: [{ local: "Euskalerría", visitante: "Poco Sitio", gl: 0, gv: 0 }, { local: "La Escalinata", visitante: "Rinconada", gl: 2, gv: 1 }, { local: "Rayo Rojo", visitante: "Enrique López", gl: 0, gv: 7 }, { local: "Estrella del Sur", visitante: "Urunday", gl: 1, gv: 1 }, { local: "Unión Vecinal", visitante: "Carabelas", gl: 4, gv: 0 }, { local: "Maeso", visitante: "Don Bosco", gl: 2, gv: 0 }, { local: "La Picada", visitante: "Mirador", gl: 1, gv: 1 }] },
                { num: 5, partidos: [{ local: "Poco Sitio", visitante: "Rinconada", gl: 1, gv: 3 }, { local: "Euskalerría", visitante: "Rayo Rojo", gl: 0, gv: 0 }, { local: "La Escalinata", visitante: "Estrella del Sur", gl: 4, gv: 0 }, { local: "Enrique López", visitante: "Unión Vecinal", gl: 4, gv: 1 }, { local: "Urunday", visitante: "Don Bosco", gl: 3, gv: 2 }, { local: "Carabelas", visitante: "La Picada", gl: 2, gv: 1 }, { local: "Mirador", visitante: "Maeso", gl: 2, gv: 0 }] },
                { num: 6, partidos: [{ local: "Poco Sitio", visitante: "Rayo Rojo", gl: 3, gv: 1 }, { local: "Rinconada", visitante: "Estrella del Sur", gl: 4, gv: 0 }, { local: "Urunday", visitante: "Mirador", gl: 0, gv: 1 }, { local: "Don Bosco", visitante: "La Escalinata", gl: 0, gv: 3 }, { local: "Maeso", visitante: "Carabelas", gl: 0, gv: 0 }, { local: "Unión Vecinal", visitante: "Euskalerría", gl: 5, gv: 0 }, { local: "La Picada", visitante: "Enrique López", gl: 1, gv: 2 }] },
                { num: 7, partidos: [{ local: "Estrella del Sur", visitante: "Poco Sitio", gl: 0, gv: 0 }, { local: "Unión Vecinal", visitante: "Rayo Rojo", gl: 7, gv: 0 }, { local: "Rinconada", visitante: "Don Bosco", gl: 7, gv: 0 }, { local: "La Picada", visitante: "Euskalerría", gl: 5, gv: 1 }, { local: "La Escalinata", visitante: "Mirador", gl: 1, gv: 0 }, { local: "Enrique López", visitante: "Maeso", gl: 4, gv: 0 }, { local: "Carabelas", visitante: "Urunday", gl: 3, gv: 3 }] },
                { num: 8, partidos: [{ local: "Unión Vecinal", visitante: "Poco Sitio", gl: 2, gv: 0 }, { local: "Don Bosco", visitante: "Estrella del Sur", gl: 1, gv: 1 }, { local: "Rayo Rojo", visitante: "La Picada", gl: 0, gv: 4 }, { local: "Mirador", visitante: "Rinconada", gl: 1, gv: 0 }, { local: "Euskalerría", visitante: "Maeso", gl: 0, gv: 0 }, { local: "Carabelas", visitante: "La Escalinata", gl: 2, gv: 4 }, { local: "Urunday", visitante: "Enrique López", gl: 3, gv: 2 }] },
                { num: 9, partidos: [{ local: "La Picada", visitante: "Unión Vecinal", gl: 0, gv: 3 }, { local: "Estrella del Sur", visitante: "Mirador", gl: 2, gv: 2 }, { local: "Maeso", visitante: "Rayo Rojo", gl: 0, gv: 1 }, { local: "Rinconada", visitante: "Carabelas", gl: 2, gv: 1 }, { local: "Euskalerría", visitante: "Urunday", gl: 0, gv: 2 }, { local: "Enrique López", visitante: "La Escalinata", gl: 2, gv: 2 }, { local: "Poco Sitio", visitante: "Don Bosco", gl: 4, gv: 0 }] },
                { num: 10, partidos: [{ local: "Poco Sitio", visitante: "La Picada", gl: 1, gv: 1 }, { local: "Don Bosco", visitante: "Mirador", gl: 0, gv: 1 }, { local: "Unión Vecinal", visitante: "Maeso", gl: 2, gv: 0 }, { local: "Carabelas", visitante: "Estrella del Sur", gl: 2, gv: 1 }, { local: "Urunday", visitante: "Rayo Rojo", gl: 0, gv: 0 }, { local: "Enrique López", visitante: "Rinconada", gl: 1, gv: 4 }, { local: "La Escalinata", visitante: "Euskalerría", gl: 8, gv: 0 }] },
                { num: 11, partidos: [{ local: "Mirador", visitante: "Poco Sitio", gl: 1, gv: 1 }, { local: "Maeso", visitante: "La Picada", gl: 2, gv: 3 }, { local: "Carabelas", visitante: "Don Bosco", gl: 2, gv: 2 }, { local: "Unión Vecinal", visitante: "Urunday", gl: 8, gv: 0 }, { local: "Estrella del Sur", visitante: "Enrique López", gl: 0, gv: 4 }, { local: "Rayo Rojo", visitante: "La Escalinata", gl: 0, gv: 5 }, { local: "Euskalerría", visitante: "Rinconada", gl: 1, gv: 4 }] },
                { num: 12, partidos: [{ local: "Mirador", visitante: "Carabelas", gl: 3, gv: 2 }, { local: "La Picada", visitante: "Urunday", gl: 4, gv: 1 }, { local: "Enrique López", visitante: "Don Bosco", gl: 7, gv: 1 }, { local: "La Escalinata", visitante: "Unión Vecinal", gl: 4, gv: 0 }, { local: "Rinconada", visitante: "Rayo Rojo", gl: 6, gv: 0 }, { local: "Poco Sitio", visitante: "Maeso", gl: 2, gv: 3 }, { local: "Estrella del Sur", visitante: "Euskalerría", gl: 0, gv: 1 }] },
                { num: 13, partidos: [{ local: "Carabelas", visitante: "Poco Sitio", gl: 2, gv: 0 }, { local: "Urunday", visitante: "Maeso", gl: 0, gv: 2 }, { local: "Mirador", visitante: "Enrique López", gl: 4, gv: 2 }, { local: "La Escalinata", visitante: "La Picada", gl: 1, gv: 2 }, { local: "Don Bosco", visitante: "Euskalerría", gl: 0, gv: 0 }, { local: "Rinconada", visitante: "Unión Vecinal", gl: 1, gv: 1 }, { local: "Estrella del Sur", visitante: "Rayo Rojo", gl: 0, gv: 0 }] },
                { num: 14, partidos: [{ local: "Poco Sitio", visitante: "Urunday", gl: 2, gv: 1 }, { local: "Carabelas", visitante: "Enrique López", gl: 1, gv: 5 }, { local: "La Escalinata", visitante: "Maeso", gl: 5, gv: 0 }, { local: "Euskalerría", visitante: "Mirador", gl: 0, gv: 0 }, { local: "Rinconada", visitante: "La Picada", gl: 2, gv: 0 }, { local: "Don Bosco", visitante: "Rayo Rojo", gl: 0, gv: 1 }, { local: "Unión Vecinal", visitante: "Estrella del Sur", gl: 2, gv: 0 }] },
                { num: 15, partidos: [{ local: "Enrique López", visitante: "Poco Sitio", gl: 5, gv: 0 }, { local: "Urunday", visitante: "La Escalinata", gl: 1, gv: 4 }, { local: "Carabelas", visitante: "Euskalerría", gl: 5, gv: 0 }, { local: "Maeso", visitante: "Rinconada", gl: 0, gv: 1 }, { local: "Rayo Rojo", visitante: "Mirador", gl: 0, gv: 5 }, { local: "La Picada", visitante: "Estrella del Sur", gl: 4, gv: 0 }, { local: "Don Bosco", visitante: "Unión Vecinal", gl: 0, gv: 4 }] }
              ]
            }
            ,
            { id: "2018", fechas: [] },
            { id: "2017", fechas: [] },
            { id: "2016", fechas: [] },
            { id: "2015", fechas: [] },
            { id: "2014", fechas: [] },
            { id: "2013", fechas: [] }

        ]
        },
        {
          id: "palermo-b",
          nombre: "Serie B",
          clubes: [
            "Dryco", "Oriental", "Alas Rojas", "Terremoto", "Rincón del Reducto",
            "Aebu", "Nuevo Amanecer", "Intermezzo", "Stockolmo", "Sur2000",
            "Nuevo América", "Uruguay Buceo", "Estudiantes de la Unión",
            "Exploradores", "Nueva Palmira"
          ],
          categorias: [
            {
              id: "2020",
              fechas: [
                { num: 1, partidos: [{ local: "Intermezzo", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Rincón del Reducto", visitante: "Sur2000", gl: 2, gv: 0 }, { local: "Oriental", visitante: "Nuevo América", gl: 2, gv: 0 }, { local: "Nueva Palmira", visitante: "Uruguay Buceo", gl: 0, gv: 2 }, { local: "Aebu", visitante: "Stockolmo", gl: 0, gv: 2 }, { local: "Alas Rojas", visitante: "Exploradores", gl: 2, gv: 0 }, { local: "Terremoto", visitante: "Estudiantes de la Unión", gl: 8, gv: 0 }] },
                { num: 2, partidos: [{ local: "Estudiantes de la Unión", visitante: "Alas Rojas", gl: 0, gv: 8 }, { local: "Exploradores", visitante: "Aebu", gl: 2, gv: 0 }, { local: "Stockolmo", visitante: "Nueva Palmira", gl: 2, gv: 0 }, { local: "Uruguay Buceo", visitante: "Oriental", gl: 0, gv: 2 }, { local: "Nuevo América", visitante: "Rincón del Reducto", gl: 0, gv: 2 }, { local: "Intermezzo", visitante: "Dryco", gl: 0, gv: 2 }] },
                { num: 3, partidos: [{ local: "Dryco", visitante: "Sur2000", gl: 2, gv: 0 }, { local: "Nuevo Amanecer", visitante: "Nuevo América", gl: 0, gv: 8 }, { local: "Rincón del Reducto", visitante: "Uruguay Buceo", gl: 0, gv: 3 }, { local: "Oriental", visitante: "Stockolmo", gl: 0, gv: 0 }, { local: "Nueva Palmira", visitante: "Exploradores", gl: 0, gv: 2 }, { local: "Aebu", visitante: "Estudiantes de la Unión", gl: 0, gv: 2 }, { local: "Alas Rojas", visitante: "Terremoto", gl: 3, gv: 0 }] },
                { num: 4, partidos: [{ local: "Terremoto", visitante: "Aebu", gl: 2, gv: 0 }, { local: "Estudiantes de la Unión", visitante: "Nueva Palmira", gl: 2, gv: 0 }, { local: "Exploradores", visitante: "Oriental", gl: 0, gv: 2 }, { local: "Stockolmo", visitante: "Rincón del Reducto", gl: 0, gv: 2 }, { local: "Uruguay Buceo", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Nuevo América", visitante: "Dryco", gl: 0, gv: 2 }] },
                { num: 5, partidos: [{ local: "Dryco", visitante: "Uruguay Buceo", gl: 2, gv: 0 }, { local: "Nuevo Amanecer", visitante: "Stockolmo", gl: 0, gv: 2 }, { local: "Rincón del Reducto", visitante: "Exploradores", gl: 0, gv: 0 }, { local: "Oriental", visitante: "Estudiantes de la Unión", gl: 7, gv: 0 }, { local: "Nueva Palmira", visitante: "Terremoto", gl: 0, gv: 2 }, { local: "Aebu", visitante: "Alas Rojas", gl: 0, gv: 2 }] },
                { num: 6, partidos: [{ local: "Terremoto", visitante: "Oriental", gl: 5, gv: 0 }, { local: "Uruguay Buceo", visitante: "Intermezzo", gl: 2, gv: 0 }, { local: "Alas Rojas", visitante: "Nueva Palmira", gl: 2, gv: 0 }, { local: "Estudiantes de la Unión", visitante: "Rincón del Reducto", gl: 0, gv: 8 }, { local: "Exploradores", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Nuevo América", visitante: "Sur2000", gl: 0, gv: 2 }, { local: "Stockolmo", visitante: "Dryco", gl: 0, gv: 7 }] },
                { num: 7, partidos: [{ local: "Sur2000", visitante: "Uruguay Buceo", gl: 0, gv: 2 }, { local: "Intermezzo", visitante: "Stockolmo", gl: 0, gv: 2 }, { local: "Dryco", visitante: "Exploradores", gl: 2, gv: 0 }, { local: "Nuevo Amanecer", visitante: "Estudiantes de la Unión", gl: 0, gv: 2 }, { local: "Rincón del Reducto", visitante: "Terremoto", gl: 0, gv: 8 }, { local: "Oriental", visitante: "Alas Rojas", gl: 0, gv: 6 }] },
                { num: 8, partidos: [{ local: "AEBU", visitante: "Oriental", gl: 0, gv: 2 }, { local: "Alas Rojas", visitante: "Rincón del Reducto", gl: 7, gv: 1 }, { local: "Terremoto", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Estudiantes de la Unión", visitante: "Dryco", gl: 0, gv: 8 }, { local: "Exploradores", visitante: "Intermezzo", gl: 2, gv: 0 }, { local: "Stockolmo", visitante: "Sur2000", gl: 2, gv: 0 }, { local: "Uruguay Buceo", visitante: "Nuevo América", gl: 2, gv: 0 }] },
                { num: 9, partidos: [{ local: "Nuevo América", visitante: "Stockolmo", gl: 0, gv: 2 }, { local: "Sur2000", visitante: "Exploradores", gl: 0, gv: 2 }, { local: "Intermezzo", visitante: "Estudiantes de la Unión", gl: 0, gv: 2 }, { local: "Dryco", visitante: "Terremoto", gl: 0, gv: 6 }, { local: "Nuevo Amanecer", visitante: "Alas Rojas", gl: 0, gv: 2 }, { local: "Rincón del Reducto", visitante: "Aebu", gl: 2, gv: 0 }, { local: "Oriental", visitante: "Nueva Palmira", gl: 2, gv: 0 }] },
                { num: 10, partidos: [{ local: "Nueva Palmira", visitante: "Rincón del Reducto", gl: 0, gv: 2 }, { local: "Alas Rojas", visitante: "Dryco", gl: 5, gv: 1 }, { local: "Terremoto", visitante: "Intermezzo", gl: 2, gv: 0 }, { local: "Estudiantes de la Unión", visitante: "Sur2000", gl: 2, gv: 0 }, { local: "Exploradores", visitante: "Nuevo América", gl: 2, gv: 0 }, { local: "Stockolmo", visitante: "Uruguay Buceo", gl: 1, gv: 1 }] },
                { num: 11, partidos: [{ local: "Sur2000", visitante: "Terremoto", gl: 0, gv: 2 }, { local: "Uruguay Buceo", visitante: "Exploradores", gl: 2, gv: 3 }, { local: "Intermezzo", visitante: "Alas Rojas", gl: 0, gv: 2 }, { local: "Dryco", visitante: "Aebu", gl: 2, gv: 0 }, { local: "Nuevo América", visitante: "Estudiantes de la Unión", gl: 0, gv: 2 }, { local: "Oriental", visitante: "Rincón del Reducto", gl: 4, gv: 1 }] },
                { num: 12, partidos: [{ local: "Alas Rojas", visitante: "Sur2000", gl: 2, gv: 0 }, { local: "Exploradores", visitante: "Stockolmo", gl: 4, gv: 0 }, { local: "Terremoto", visitante: "Nuevo América", gl: 2, gv: 0 }, { local: "Nueva Palmira", visitante: "Dryco", gl: 0, gv: 2 }, { local: "Estudiantes de la Unión", visitante: "Uruguay Buceo", gl: 0, gv: 2 }, { local: "Oriental", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }] },
                { num: 13, partidos: [{ local: "Nuevo América", visitante: "Alas Rojas", gl: 0, gv: 2 }, { local: "Uruguay Buceo", visitante: "Terremoto", gl: 0, gv: 7 }, { local: "Stockolmo", visitante: "Estudiantes de la Unión", gl: 6, gv: 0 }, { local: "Rincón del Reducto", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Dryco", visitante: "Oriental", gl: 1, gv: 4 }] },
                { num: 14, partidos: [{ local: "Terremoto", visitante: "Stockolmo", gl: 2, gv: 0 }, { local: "Rincón del Reducto", visitante: "Dryco", gl: 1, gv: 2 }, { local: "Alas Rojas", visitante: "Uruguay Buceo", gl: 8, gv: 0 }, { local: "Nueva Palmira", visitante: "Exploradores", gl: 0, gv: 8 }, { local: "Oriental", visitante: "Intermezzo", gl: 2, gv: 0 }] },
                { num: 15, partidos: [{ local: "Dryco", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Sur2000", visitante: "Oriental", gl: 0, gv: 2 }, { local: "Uruguay Buceo", visitante: "Aebu", gl: 2, gv: 0 }, { local: "Stockolmo", visitante: "Alas Rojas", gl: 0, gv: 6 }, { local: "Exploradores", visitante: "Terremoto", gl: 0, gv: 3 }, { local: "Nuevo América", visitante: "Nueva Palmira", gl: 0, gv: 2 }] }
              ]
            },
            {
              id: "2019",
              fechas: [
                { num: 1, partidos: [{ local: "Intermezzo", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Rincón del Reducto", visitante: "Sur2000", gl: 2, gv: 0 }, { local: "Oriental", visitante: "Nuevo América", gl: 2, gv: 0 }, { local: "Nueva Palmira", visitante: "Uruguay Buceo", gl: 3, gv: 3 }, { local: "Aebu", visitante: "Stockolmo", gl: 0, gv: 2 }, { local: "Alas Rojas", visitante: "Exploradores", gl: 8, gv: 0 }, { local: "Terremoto", visitante: "Estudiantes de la Unión", gl: 6, gv: 1 }] },
                { num: 2, partidos: [{ local: "Estudiantes de la Unión", visitante: "Alas Rojas", gl: 1, gv: 8 }, { local: "Exploradores", visitante: "Aebu", gl: 2, gv: 0 }, { local: "Stockolmo", visitante: "Nueva Palmira", gl: 3, gv: 1 }, { local: "Uruguay Buceo", visitante: "Oriental", gl: 0, gv: 6 }, { local: "Nuevo América", visitante: "Rincón del Reducto", gl: 0, gv: 2 }, { local: "Intermezzo", visitante: "Dryco", gl: 1, gv: 4 }] },
                { num: 3, partidos: [{ local: "Dryco", visitante: "Sur2000", gl: 2, gv: 0 }, { local: "Nuevo Amanecer", visitante: "Nuevo América", gl: 0, gv: 0 }, { local: "Rincón del Reducto", visitante: "Uruguay Buceo", gl: 3, gv: 0 }, { local: "Oriental", visitante: "Stockolmo", gl: 0, gv: 1 }, { local: "Nueva Palmira", visitante: "Exploradores", gl: 1, gv: 1 }, { local: "Aebu", visitante: "Estudiantes de la Unión", gl: 0, gv: 2 }, { local: "Alas Rojas", visitante: "Terremoto", gl: 2, gv: 2 }] },
                { num: 4, partidos: [{ local: "Terremoto", visitante: "Aebu", gl: 2, gv: 0 }, { local: "Estudiantes de la Unión", visitante: "Nueva Palmira", gl: 1, gv: 5 }, { local: "Exploradores", visitante: "Oriental", gl: 0, gv: 4 }, { local: "Stockolmo", visitante: "Rincón del Reducto", gl: 4, gv: 0 }, { local: "Uruguay Buceo", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Nuevo América", visitante: "Dryco", gl: 0, gv: 2 }] },
                { num: 5, partidos: [{ local: "Dryco", visitante: "Uruguay Buceo", gl: 1, gv: 4 }, { local: "Nuevo Amanecer", visitante: "Stockolmo", gl: 0, gv: 2 }, { local: "Rincón del Reducto", visitante: "Exploradores", gl: 1, gv: 1 }, { local: "Oriental", visitante: "Estudiantes de la Unión", gl: 8, gv: 0 }, { local: "Nueva Palmira", visitante: "Terremoto", gl: 0, gv: 3 }, { local: "Aebu", visitante: "Alas Rojas", gl: 0, gv: 2 }] },
                { num: 6, partidos: [{ local: "Terremoto", visitante: "Oriental", gl: 1, gv: 0 }, { local: "Uruguay Buceo", visitante: "Intermezzo", gl: 2, gv: 1 }, { local: "Alas Rojas", visitante: "Nueva Palmira", gl: 7, gv: 0 }, { local: "Estudiantes de la Unión", visitante: "Rincón del Reducto", gl: 1, gv: 1 }, { local: "Exploradores", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Stockolmo", visitante: "Dryco", gl: 2, gv: 0 }] },
                { num: 7, partidos: [{ local: "Sur2000", visitante: "Uruguay Buceo", gl: 0, gv: 2 }, { local: "Intermezzo", visitante: "Stockolmo", gl: 0, gv: 5 }, { local: "Dryco", visitante: "Exploradores", gl: 2, gv: 0 }, { local: "Nuevo Amanecer", visitante: "Estudiantes de la Unión", gl: 0, gv: 2 }, { local: "Rincón del Reducto", visitante: "Terremoto", gl: 1, gv: 7 }, { local: "Oriental", visitante: "Alas Rojas", gl: 3, gv: 0 }] },
                { num: 8, partidos: [{ local: "AEBU", visitante: "Oriental", gl: 0, gv: 2 }, { local: "Alas Rojas", visitante: "Rincón del Reducto", gl: 7, gv: 0 }, { local: "Terremoto", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Estudiantes de la Unión", visitante: "Dryco", gl: 1, gv: 1 }, { local: "Exploradores", visitante: "Intermezzo", gl: 1, gv: 0 }, { local: "Stockolmo", visitante: "Sur2000", gl: 2, gv: 0 }, { local: "Uruguay Buceo", visitante: "Nuevo América", gl: 2, gv: 0 }] },
                { num: 9, partidos: [{ local: "Nuevo América", visitante: "Stockolmo", gl: 0, gv: 2 }, { local: "Sur2000", visitante: "Exploradores", gl: 0, gv: 2 }, { local: "Intermezzo", visitante: "Estudiantes de la Unión", gl: 2, gv: 1 }, { local: "Dryco", visitante: "Terremoto", gl: 0, gv: 5 }, { local: "Nuevo Amanecer", visitante: "Alas Rojas", gl: 0, gv: 2 }, { local: "Rincón del Reducto", visitante: "Aebu", gl: 2, gv: 0 }, { local: "Oriental", visitante: "Nueva Palmira", gl: 4, gv: 0 }] },
                { num: 10, partidos: [{ local: "Nueva Palmira", visitante: "Rincón del Reducto", gl: 7, gv: 0 }, { local: "Alas Rojas", visitante: "Dryco", gl: 2, gv: 0 }, { local: "Terremoto", visitante: "Intermezzo", gl: 4, gv: 0 }, { local: "Estudiantes de la Unión", visitante: "Sur2000", gl: 2, gv: 0 }, { local: "Exploradores", visitante: "Nuevo América", gl: 2, gv: 0 }, { local: "Stockolmo", visitante: "Uruguay Buceo", gl: 0, gv: 1 }] },
                { num: 11, partidos: [{ local: "Sur2000", visitante: "Terremoto", gl: 0, gv: 2 }, { local: "Uruguay Buceo", visitante: "Exploradores", gl: 5, gv: 1 }, { local: "Intermezzo", visitante: "Alas Rojas", gl: 1, gv: 3 }, { local: "Dryco", visitante: "Aebu", gl: 2, gv: 0 }, { local: "Nuevo América", visitante: "Estudiantes de la Unión", gl: 0, gv: 2 }, { local: "Oriental", visitante: "Rincón del Reducto", gl: 8, gv: 0 }] },
                { num: 12, partidos: [{ local: "Alas Rojas", visitante: "Sur2000", gl: 2, gv: 0 }, { local: "Exploradores", visitante: "Stockolmo", gl: 0, gv: 3 }, { local: "Terremoto", visitante: "Nuevo América", gl: 2, gv: 0 }, { local: "Nueva Palmira", visitante: "Dryco", gl: 4, gv: 1 }, { local: "Estudiantes de la Unión", visitante: "Uruguay Buceo", gl: 1, gv: 3 }, { local: "Oriental", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }] },
                { num: 13, partidos: [{ local: "Nuevo América", visitante: "Alas Rojas", gl: 0, gv: 2 }, { local: "Uruguay Buceo", visitante: "Terremoto", gl: 1, gv: 4 }, { local: "Stockolmo", visitante: "Estudiantes de la Unión", gl: 7, gv: 0 }, { local: "Rincón del Reducto", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Dryco", visitante: "Oriental", gl: 0, gv: 7 }] },
                { num: 14, partidos: [{ local: "Terremoto", visitante: "Stockolmo", gl: 4, gv: 2 }, { local: "Rincón del Reducto", visitante: "Dryco", gl: 0, gv: 5 }, { local: "Alas Rojas", visitante: "Uruguay Buceo", gl: 4, gv: 1 }, { local: "Nueva Palmira", visitante: "Exploradores", gl: 2, gv: 0 }, { local: "Oriental", visitante: "Intermezzo", gl: 4, gv: 0 }] },
                { num: 15, partidos: [{ local: "Dryco", visitante: "Nuevo Amanecer", gl: 2, gv: 0 }, { local: "Sur2000", visitante: "Oriental", gl: 0, gv: 2 }, { local: "Uruguay Buceo", visitante: "Aebu", gl: 5, gv: 1 }, { local: "Stockolmo", visitante: "Alas Rojas", gl: 4, gv: 2 }, { local: "Exploradores", visitante: "Terremoto", gl: 1, gv: 6 }] }
              ]
            },
            { id: "2018", fechas: [] },
            { id: "2017", fechas: [] },
            { id: "2016", fechas: [] },
            { id: "2015", fechas: [] },
            { id: "2014", fechas: [] },
            { id: "2013", fechas: [] }
          ]
        }
      ]
    },
    // Prado
    {
      id: "prado",
      nombre: "Liga Prado",
      series: [
        {
          id: "prado-unica",
          nombre: "Serie Única",
          clubes: [
            "San Francisco", "Las Flores", "Yegros", "Isidro Fynn", "Bochas",
            "Urreta", "Malvín Alto", "Deportivo Uruguayo", "Estrella del Norte",
            "3 de Abril", "Ombú Jrs.", "Cosmos Corinto", "Pablan",
            "Libertad Washington", "Covicenova", "Aviación Lezica"
          ],
          categorias: [
            {
              id: "2021",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "San Francisco", visitante: "Las Flores", gl: null, gv: null },
                    { local: "Yegros", visitante: "Isidro Fynn", gl: 2, gv: 2 },
                    { local: "Bochas", visitante: "Urreta", gl: 0, gv: 3 },
                    { local: "Malvín Alto", visitante: "Deportivo Uruguayo", gl: 3, gv: 0 },
                    { local: "Estrella del Norte", visitante: "3 de Abril", gl: 0, gv: 8 },
                    { local: "Ombú Jrs.", visitante: "Cosmos Corinto", gl: 2, gv: 0 },
                    { local: "Pablan", visitante: "Libertad Washington", gl: 3, gv: 3 },
                    { local: "Covicenova", visitante: "Aviación Lezica", gl: 0, gv: 1 }
                  ]
                }
              ]
            },
            {
              id: "2020",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "San Francisco", visitante: "Las Flores", gl: null, gv: null },
                    { local: "Yegros", visitante: "Isidro Fynn", gl: 3, gv: 0 },
                    { local: "Bochas", visitante: "Urreta", gl: 0, gv: 8 },
                    { local: "Malvín Alto", visitante: "Deportivo Uruguayo", gl: 0, gv: 3 },
                    { local: "Estrella del Norte", visitante: "3 de Abril", gl: 1, gv: 0 },
                    { local: "Ombú Jrs.", visitante: "Cosmos Corinto", gl: 1, gv: 1 },
                    { local: "Pablan", visitante: "Libertad Washington", gl: 0, gv: 0 },
                    { local: "Covicenova", visitante: "Aviación Lezica", gl: 0, gv: 5 }
                  ]
                },
                { num: 2, partidos: [{ local: "Las Flores", visitante: "Aviación Lezica", gl: null, gv: null }, { local: "Libertad Washington", visitante: "Covicenova", gl: null, gv: null }, { local: "Cosmos Corinto", visitante: "Pablan", gl: null, gv: null }, { local: "3 de Abril", visitante: "Ombú Jrs.", gl: null, gv: null }, { local: "Deportivo Uruguayo", visitante: "Estrella del Norte", gl: null, gv: null }, { local: "Urreta", visitante: "Malvín Alto", gl: null, gv: null }, { local: "Isidro Fynn", visitante: "Bochas", gl: null, gv: null }, { local: "San Francisco", visitante: "Yegros", gl: null, gv: null }] },
                { num: 3, partidos: [{ local: "Yegros", visitante: "Las Flores", gl: null, gv: null }, { local: "Bochas", visitante: "San Francisco", gl: null, gv: null }, { local: "Malvín Alto", visitante: "Isidro Fynn", gl: null, gv: null }, { local: "Estrella del Norte", visitante: "Urreta", gl: null, gv: null }, { local: "Ombú Jrs.", visitante: "Deportivo Uruguayo", gl: null, gv: null }, { local: "Pablan", visitante: "3 de Abril", gl: null, gv: null }, { local: "Covicenova", visitante: "Cosmos Corinto", gl: null, gv: null }, { local: "Aviación Lezica", visitante: "Libertad Washington", gl: null, gv: null }] },
                { num: 4, partidos: [{ local: "Las Flores", visitante: "Libertad Washington", gl: null, gv: null }, { local: "Cosmos Corinto", visitante: "Aviación Lezica", gl: null, gv: null }, { local: "3 de Abril", visitante: "Covicenova", gl: null, gv: null }, { local: "Deportivo Uruguayo", visitante: "Pablan", gl: null, gv: null }, { local: "Urreta", visitante: "Ombú Jrs.", gl: null, gv: null }, { local: "Isidro Fynn", visitante: "Estrella del Norte", gl: null, gv: null }, { local: "San Francisco", visitante: "Malvín Alto", gl: null, gv: null }, { local: "Yegros", visitante: "Bochas", gl: null, gv: null }] },
                { num: 5, partidos: [{ local: "Bochas", visitante: "Las Flores", gl: null, gv: null }, { local: "Malvín Alto", visitante: "Yegros", gl: null, gv: null }, { local: "Estrella del Norte", visitante: "San Francisco", gl: null, gv: null }, { local: "Ombú Jrs.", visitante: "Isidro Fynn", gl: null, gv: null }, { local: "Pablan", visitante: "Urreta", gl: null, gv: null }, { local: "Covicenova", visitante: "Deportivo Uruguayo", gl: null, gv: null }, { local: "Aviación Lezica", visitante: "3 de Abril", gl: null, gv: null }, { local: "Libertad Washington", visitante: "Cosmos Corinto", gl: null, gv: null }] },
                { num: 6, partidos: [{ local: "Las Flores", visitante: "Cosmos Corinto", gl: null, gv: null }, { local: "3 de Abril", visitante: "Libertad Washington", gl: null, gv: null }, { local: "Deportivo Uruguayo", visitante: "Aviación Lezica", gl: null, gv: null }, { local: "Urreta", visitante: "Covicenova", gl: null, gv: null }, { local: "Isidro Fynn", visitante: "Pablan", gl: null, gv: null }, { local: "San Francisco", visitante: "Ombú Jrs.", gl: null, gv: null }, { local: "Yegros", visitante: "Estrella del Norte", gl: null, gv: null }, { local: "Bochas", visitante: "Malvín Alto", gl: null, gv: null }] },
                { num: 7, partidos: [{ local: "Malvín Alto", visitante: "Las Flores", gl: null, gv: null }, { local: "Estrella del Norte", visitante: "Bochas", gl: null, gv: null }, { local: "Ombú Jrs.", visitante: "Yegros", gl: null, gv: null }, { local: "Pablan", visitante: "San Francisco", gl: null, gv: null }, { local: "Covicenova", visitante: "Isidro Fynn", gl: null, gv: null }, { local: "Aviación Lezica", visitante: "Urreta", gl: null, gv: null }, { local: "Libertad Washington", visitante: "Deportivo Uruguayo", gl: null, gv: null }, { local: "Cosmos Corinto", visitante: "3 de Abril", gl: null, gv: null }] },
                { num: 8, partidos: [{ local: "Las Flores", visitante: "3 de Abril", gl: null, gv: null }, { local: "Deportivo Uruguayo", visitante: "Cosmos Corinto", gl: null, gv: null }, { local: "Urreta", visitante: "Libertad Washington", gl: null, gv: null }, { local: "Isidro Fynn", visitante: "Aviación Lezica", gl: null, gv: null }, { local: "San Francisco", visitante: "Covicenova", gl: null, gv: null }, { local: "Yegros", visitante: "Pablan", gl: null, gv: null }, { local: "Bochas", visitante: "Ombú Jrs.", gl: null, gv: null }, { local: "Malvín Alto", visitante: "Estrella del Norte", gl: null, gv: null }] },
                { num: 9, partidos: [{ local: "Estrella del Norte", visitante: "Las Flores", gl: null, gv: null }, { local: "Ombú Jrs.", visitante: "Malvín Alto", gl: null, gv: null }, { local: "Pablan", visitante: "Bochas", gl: null, gv: null }, { local: "Covicenova", visitante: "Yegros", gl: null, gv: null }, { local: "Aviación Lezica", visitante: "San Francisco", gl: null, gv: null }, { local: "Libertad Washington", visitante: "Isidro Fynn", gl: null, gv: null }, { local: "Cosmos Corinto", visitante: "Urreta", gl: null, gv: null }, { local: "3 de Abril", visitante: "Deportivo Uruguayo", gl: null, gv: null }] },
                { num: 10, partidos: [{ local: "Las Flores", visitante: "Deportivo Uruguayo", gl: null, gv: null }, { local: "Urreta", visitante: "3 de Abril", gl: null, gv: null }, { local: "Isidro Fynn", visitante: "Cosmos Corinto", gl: null, gv: null }, { local: "San Francisco", visitante: "Libertad Washington", gl: null, gv: null }, { local: "Yegros", visitante: "Aviación Lezica", gl: null, gv: null }, { local: "Bochas", visitante: "Covicenova", gl: null, gv: null }, { local: "Malvín Alto", visitante: "Pablan", gl: null, gv: null }, { local: "Estrella del Norte", visitante: "Ombú Jrs.", gl: null, gv: null }] },
                { num: 11, partidos: [{ local: "Ombú Jrs.", visitante: "Las Flores", gl: null, gv: null }, { local: "Pablan", visitante: "Estrella del Norte", gl: null, gv: null }, { local: "Covicenova", visitante: "Malvín Alto", gl: null, gv: null }, { local: "Aviación Lezica", visitante: "Bochas", gl: null, gv: null }, { local: "Libertad Washington", visitante: "Yegros", gl: null, gv: null }, { local: "Cosmos Corinto", visitante: "San Francisco", gl: null, gv: null }, { local: "3 de Abril", visitante: "Isidro Fynn", gl: null, gv: null }, { local: "Deportivo Uruguayo", visitante: "Urreta", gl: null, gv: null }] },
                { num: 12, partidos: [{ local: "Las Flores", visitante: "Urreta", gl: null, gv: null }, { local: "Isidro Fynn", visitante: "Deportivo Uruguayo", gl: null, gv: null }, { local: "San Francisco", visitante: "3 de Abril", gl: null, gv: null }, { local: "Yegros", visitante: "Cosmos Corinto", gl: null, gv: null }, { local: "Bochas", visitante: "Libertad Washington", gl: null, gv: null }, { local: "Malvín Alto", visitante: "Aviación Lezica", gl: null, gv: null }, { local: "Estrella del Norte", visitante: "Covicenova", gl: null, gv: null }, { local: "Ombú Jrs.", visitante: "Pablan", gl: null, gv: null }] },
                { num: 13, partidos: [{ local: "Pablan", visitante: "Las Flores", gl: null, gv: null }, { local: "Covicenova", visitante: "Ombú Jrs.", gl: null, gv: null }, { local: "Aviación Lezica", visitante: "Estrella del Norte", gl: null, gv: null }, { local: "Libertad Washington", visitante: "Malvín Alto", gl: null, gv: null }, { local: "Cosmos Corinto", visitante: "Bochas", gl: null, gv: null }, { local: "3 de Abril", visitante: "Yegros", gl: null, gv: null }, { local: "Deportivo Uruguayo", visitante: "San Francisco", gl: null, gv: null }, { local: "Urreta", visitante: "Isidro Fynn", gl: null, gv: null }] },
                { num: 14, partidos: [{ local: "Las Flores", visitante: "Isidro Fynn", gl: null, gv: null }, { local: "San Francisco", visitante: "Urreta", gl: null, gv: null }, { local: "Yegros", visitante: "Deportivo Uruguayo", gl: null, gv: null }, { local: "Bochas", visitante: "3 de Abril", gl: null, gv: null }, { local: "Malvín Alto", visitante: "Cosmos Corinto", gl: null, gv: null }, { local: "Estrella del Norte", visitante: "Libertad Washington", gl: null, gv: null }, { local: "Ombú Jrs.", visitante: "Aviación Lezica", gl: null, gv: null }, { local: "Pablan", visitante: "Covicenova", gl: null, gv: null }] },
                { num: 15, partidos: [{ local: "Covicenova", visitante: "Las Flores", gl: null, gv: null }, { local: "Aviación Lezica", visitante: "Pablan", gl: null, gv: null }, { local: "Libertad Washington", visitante: "Ombú Jrs.", gl: null, gv: null }, { local: "Cosmos Corinto", visitante: "Estrella del Norte", gl: null, gv: null }, { local: "3 de Abril", visitante: "Malvín Alto", gl: null, gv: null }, { local: "Deportivo Uruguayo", visitante: "Bochas", gl: null, gv: null }, { local: "Urreta", visitante: "Yegros", gl: null, gv: null }, { local: "Isidro Fynn", visitante: "San Francisco", gl: null, gv: null }] }
              ]
            },
            {
              id: "2019",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "San Francisco", visitante: "Las Flores", gl: null, gv: null },
                    { local: "Yegros", visitante: "Isidro Fynn", gl: 0, gv: 6 },
                    { local: "Bochas", visitante: "Urreta", gl: 0, gv: 3 },
                    { local: "Malvín Alto", visitante: "Deportivo Uruguayo", gl: 0, gv: 3 },
                    { local: "Estrella del Norte", visitante: "3 de Abril", gl: null, gv: null },
                    { local: "Ombú Jrs.", visitante: "Cosmos Corinto", gl: 0, gv: 5 },
                    { local: "Pablan", visitante: "Libertad Washington", gl: 2, gv: 0 },
                    { local: "Covicenova", visitante: "Aviación Lezica", gl: 1, gv: 3 }
                  ]
                }
                // (Mismo patrón de fechas 2-15)
              ]
            },
            {
              id: "2018",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "San Francisco", visitante: "Las Flores", gl: null, gv: null },
                    { local: "Yegros", visitante: "Isidro Fynn", gl: 0, gv: 8 },
                    { local: "Bochas", visitante: "Urreta", gl: 1, gv: 3 },
                    { local: "Malvín Alto", visitante: "Deportivo Uruguayo", gl: 1, gv: 4 },
                    { local: "Estrella del Norte", visitante: "3 de Abril", gl: null, gv: null },
                    { local: "Ombú Jrs.", visitante: "Cosmos Corinto", gl: 0, gv: 0 },
                    { local: "Pablan", visitante: "Libertad Washington", gl: 2, gv: 3 },
                    { local: "Covicenova", visitante: "Aviación Lezica", gl: 0, gv: 2 }
                  ]
                }
              ]
            },
            {
              id: "2017",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "San Francisco", visitante: "Las Flores", gl: null, gv: null },
                    { local: "Yegros", visitante: "Isidro Fynn", gl: 0, gv: 4 },
                    { local: "Bochas", visitante: "Urreta", gl: 0, gv: 8 },
                    { local: "Malvín Alto", visitante: "Deportivo Uruguayo", gl: 0, gv: 1 },
                    { local: "Estrella del Norte", visitante: "3 de Abril", gl: 5, gv: 2 },
                    { local: "Ombú Jrs.", visitante: "Cosmos Corinto", gl: 1, gv: 1 },
                    { local: "Pablan", visitante: "Libertad Washington", gl: 7, gv: 0 },
                    { local: "Covicenova", visitante: "Aviación Lezica", gl: 2, gv: 0 }
                  ]
                }
              ]
            },
            {
              id: "2016",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "San Francisco", visitante: "Las Flores", gl: null, gv: null },
                    { local: "Yegros", visitante: "Isidro Fynn", gl: 1, gv: 1 },
                    { local: "Bochas", visitante: "Urreta", gl: 0, gv: 6 },
                    { local: "Malvín Alto", visitante: "Deportivo Uruguayo", gl: 2, gv: 2 },
                    { local: "Estrella del Norte", visitante: "3 de Abril", gl: 1, gv: 0 },
                    { local: "Ombú Jrs.", visitante: "Cosmos Corinto", gl: 0, gv: 2 },
                    { local: "Pablan", visitante: "Libertad Washington", gl: 1, gv: 0 },
                    { local: "Covicenova", visitante: "Aviación Lezica", gl: 0, gv: 2 }
                  ]
                }
              ]
            },
            {
              id: "2015",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "San Francisco", visitante: "Las Flores", gl: null, gv: null },
                    { local: "Yegros", visitante: "Isidro Fynn", gl: 3, gv: 2 },
                    { local: "Bochas", visitante: "Urreta", gl: 0, gv: 7 },
                    { local: "Malvín Alto", visitante: "Deportivo Uruguayo", gl: 1, gv: 1 },
                    { local: "Estrella del Norte", visitante: "3 de Abril", gl: 1, gv: 8 },
                    { local: "Ombú Jrs.", visitante: "Cosmos Corinto", gl: 1, gv: 3 },
                    { local: "Pablan", visitante: "Libertad Washington", gl: 1, gv: 1 },
                    { local: "Covicenova", visitante: "Aviación Lezica", gl: 2, gv: 1 }
                  ]
                }
              ]
            },
            {
              id: "2014",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "San Francisco", visitante: "Las Flores", gl: null, gv: null },
                    { local: "Yegros", visitante: "Isidro Fynn", gl: 0, gv: 2 },
                    { local: "Bochas", visitante: "Urreta", gl: 0, gv: 5 },
                    { local: "Malvín Alto", visitante: "Deportivo Uruguayo", gl: 0, gv: 2 },
                    { local: "Estrella del Norte", visitante: "3 de Abril", gl: 7, gv: 0 },
                    { local: "Ombú Jrs.", visitante: "Cosmos Corinto", gl: 6, gv: 2 },
                    { local: "Pablan", visitante: "Libertad Washington", gl: 1, gv: 1 },
                    { local: "Covicenova", visitante: "Aviación Lezica", gl: 4, gv: 0 }
                  ]
                }
              ]
            },
            {
              id: "2013",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "San Francisco", visitante: "Las Flores", gl: null, gv: null },
                    { local: "Yegros", visitante: "Isidro Fynn", gl: 0, gv: 2 },
                    { local: "Bochas", visitante: "Urreta", gl: 0, gv: 2 },
                    { local: "Malvín Alto", visitante: "Deportivo Uruguayo", gl: 3, gv: 0 },
                    { local: "Estrella del Norte", visitante: "3 de Abril", gl: 0, gv: 1 },
                    { local: "Ombú Jrs.", visitante: "Cosmos Corinto", gl: 0, gv: 3 },
                    { local: "Pablan", visitante: "Libertad Washington", gl: 2, gv: 1 },
                    { local: "Covicenova", visitante: "Aviación Lezica", gl: 0, gv: 3 }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    //Piedras Blancas
    {
      id: "piedras-blancas",
      nombre: "Liga Piedras Blancas",
      series: [
        {
          id: "pb-unica",
          nombre: "Serie Única",
          clubes: [
            "Celiar", "Once Rojo", "Integración", "Alumni", "Punta de Rieles",
            "Juana de América", "Ituzaingó", "Libertad", "Parque Guaraní",
            "Estrella de Oro", "J de Manga", "Fray Bentos"
          ]
        }
      ]
    },
    //Uruguaya
    {
      id: "uruguaya",
      nombre: "Liga Uruguaya",
      series: [
        {
          id: "uruguaya-unica",
          nombre: "Serie Única",
          clubes: [
            "Cohami", "Marconi", "Ciclón del Cerrito", "La Tentación", "Santa Ana",
            "Juventud Unida", "Niágara", "Fabián Perea", "Royal", "Siete Estrellas",
            "Carlitos Prado"
          ]
        }
      ]
    },
    // Paso Molino
    {
      id: "paso-molino",
      nombre: "Liga Paso Molino",
      series: [
        {
          id: "paso-molino-unica",
          nombre: "Serie Única",
          clubes: [
            "Naranja Mecánica", "Holanda", "Nuevo Juventud", "Santa Catalina",
            "Brandi", "Independiente Lezica", "Papotes", "Beco", "Cerromar",
            "Tigre", "Zorzal", "Sauce", "Estrella Federal", "Iriarte",
            "Los Magos", "Los Bulevares", "Pesca", "Olimpo Jrs", "Universal", "Cerro Jrs"
          ],
          categorias: [
            {
              id: "2021",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "Naranja Mecánica", visitante: "Holanda", gl: 0, gv: 2 },
                    { local: "Nuevo Juventud", visitante: "Santa Catalina", gl: 2, gv: 0 },
                    { local: "Brandi", visitante: "Independiente Lezica", gl: 0, gv: 2 },
                    { local: "Papotes", visitante: "Beco", gl: null, gv: null },
                    { local: "Cerromar", visitante: "Tigre", gl: null, gv: null },
                    { local: "Zorzal", visitante: "Sauce", gl: 1, gv: 0 },
                    { local: "Estrella Federal", visitante: "Iriarte", gl: 2, gv: 0 },
                    { local: "Los Magos", visitante: "Los Bulevares", gl: 2, gv: 0 },
                    { local: "Pesca", visitante: "Olimpo Jrs", gl: 0, gv: 2 },
                    { local: "Universal", visitante: "Cerro Jrs", gl: 1, gv: 9 }
                  ]
                }
              ]
            },
            {
              id: "2020",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "Naranja Mecánica", visitante: "Holanda", gl: 0, gv: 2 },
                    { local: "Nuevo Juventud", visitante: "Santa Catalina", gl: 2, gv: 0 },
                    { local: "Brandi", visitante: "Independiente Lezica", gl: 0, gv: 2 },
                    { local: "Papotes", visitante: "Beco", gl: 2, gv: 0 },
                    { local: "Cerromar", visitante: "Tigre", gl: 0, gv: 8 },
                    { local: "Zorzal", visitante: "Sauce", gl: 1, gv: 1 },
                    { local: "Estrella Federal", visitante: "Iriarte", gl: 2, gv: 0 },
                    { local: "Los Magos", visitante: "Los Bulevares", gl: 2, gv: 0 },
                    { local: "Pesca", visitante: "Olimpo Jrs", gl: 0, gv: 2 },
                    { local: "Universal", visitante: "Cerro Jrs", gl: 2, gv: 2 }
                  ]
                }
              ]
            },
            {
              id: "2019",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "Naranja Mecánica", visitante: "Holanda", gl: 0, gv: 2 },
                    { local: "Nuevo Juventud", visitante: "Santa Catalina", gl: 9, gv: 0 },
                    { local: "Brandi", visitante: "Independiente Lezica", gl: 0, gv: 5 },
                    { local: "Papotes", visitante: "Beco", gl: 2, gv: 0 },
                    { local: "Cerromar", visitante: "Tigre", gl: 1, gv: 0 },
                    { local: "Zorzal", visitante: "Sauce", gl: 6, gv: 0 },
                    { local: "Estrella Federal", visitante: "Iriarte", gl: 2, gv: 0 },
                    { local: "Los Magos", visitante: "Los Bulevares", gl: null, gv: null },
                    { local: "Pesca", visitante: "Olimpo Jrs", gl: 0, gv: 2 },
                    { local: "Universal", visitante: "Cerro Jrs", gl: 2, gv: 0 }
                  ]
                }
              ]
            },
            {
              id: "2018",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "Naranja Mecánica", visitante: "Holanda", gl: 1, gv: 9 },
                    { local: "Nuevo Juventud", visitante: "Santa Catalina", gl: 3, gv: 1 },
                    { local: "Brandi", visitante: "Independiente Lezica", gl: 1, gv: 8 },
                    { local: "Papotes", visitante: "Beco", gl: 0, gv: 2 },
                    { local: "Cerromar", visitante: "Tigre", gl: 2, gv: 0 },
                    { local: "Zorzal", visitante: "Sauce", gl: 4, gv: 2 },
                    { local: "Estrella Federal", visitante: "Iriarte", gl: 2, gv: 0 },
                    { local: "Los Magos", visitante: "Los Bulevares", gl: 1, gv: 3 },
                    { local: "Pesca", visitante: "Olimpo Jrs", gl: 0, gv: 7 },
                    { local: "Universal", visitante: "Cerro Jrs", gl: 3, gv: 7 }
                  ]
                }
              ]
            },
            {
              id: "2017",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "Naranja Mecánica", visitante: "Holanda", gl: 0, gv: 0 },
                    { local: "Nuevo Juventud", visitante: "Santa Catalina", gl: 3, gv: 0 },
                    { local: "Brandi", visitante: "Independiente Lezica", gl: 0, gv: 7 },
                    { local: "Papotes", visitante: "Beco", gl: 1, gv: 2 },
                    { local: "Cerromar", visitante: "Tigre", gl: 9, gv: 0 },
                    { local: "Zorzal", visitante: "Sauce", gl: 0, gv: 2 },
                    { local: "Estrella Federal", visitante: "Iriarte", gl: 5, gv: 0 },
                    { local: "Los Magos", visitante: "Los Bulevares", gl: 2, gv: 0 },
                    { local: "Pesca", visitante: "Olimpo Jrs", gl: 0, gv: 5 },
                    { local: "Universal", visitante: "Cerro Jrs", gl: 3, gv: 0 }
                  ]
                }
              ]
            },
            {
              id: "2016",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "Naranja Mecánica", visitante: "Holanda", gl: 1, gv: 2 },
                    { local: "Nuevo Juventud", visitante: "Santa Catalina", gl: 0, gv: 0 },
                    { local: "Brandi", visitante: "Independiente Lezica", gl: 0, gv: 9 },
                    { local: "Papotes", visitante: "Beco", gl: 1, gv: 0 },
                    { local: "Cerromar", visitante: "Tigre", gl: 2, gv: 3 },
                    { local: "Zorzal", visitante: "Sauce", gl: 0, gv: 1 },
                    { local: "Estrella Federal", visitante: "Iriarte", gl: 2, gv: 0 },
                    { local: "Los Magos", visitante: "Los Bulevares", gl: 9, gv: 1 },
                    { local: "Pesca", visitante: "Olimpo Jrs", gl: 0, gv: 4 },
                    { local: "Universal", visitante: "Cerro Jrs", gl: 1, gv: 3 }
                  ]
                }
              ]
            },
            {
              id: "2015",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "Naranja Mecánica", visitante: "Holanda", gl: 0, gv: 2 },
                    { local: "Nuevo Juventud", visitante: "Santa Catalina", gl: 7, gv: 0 },
                    { local: "Brandi", visitante: "Independiente Lezica", gl: 0, gv: 8 },
                    { local: "Papotes", visitante: "Beco", gl: 2, gv: 6 },
                    { local: "Cerromar", visitante: "Tigre", gl: 8, gv: 0 },
                    { local: "Zorzal", visitante: "Sauce", gl: 0, gv: 2 },
                    { local: "Estrella Federal", visitante: "Iriarte", gl: 2, gv: 0 },
                    { local: "Los Magos", visitante: "Los Bulevares", gl: 8, gv: 0 },
                    { local: "Pesca", visitante: "Olimpo Jrs", gl: 1, gv: 2 },
                    { local: "Universal", visitante: "Cerro Jrs", gl: 4, gv: 2 }
                  ]
                }
              ]
            },
            {
              id: "2014",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "Naranja Mecánica", visitante: "Holanda", gl: 1, gv: 0 },
                    { local: "Nuevo Juventud", visitante: "Santa Catalina", gl: 2, gv: 1 },
                    { local: "Brandi", visitante: "Independiente Lezica", gl: 0, gv: 2 },
                    { local: "Papotes", visitante: "Beco", gl: 2, gv: 2 },
                    { local: "Cerromar", visitante: "Tigre", gl: 1, gv: 0 },
                    { local: "Zorzal", visitante: "Sauce", gl: 1, gv: 1 },
                    { local: "Estrella Federal", visitante: "Iriarte", gl: 2, gv: 0 },
                    { local: "Los Magos", visitante: "Los Bulevares", gl: 6, gv: 0 },
                    { local: "Pesca", visitante: "Olimpo Jrs", gl: 2, gv: 0 },
                    { local: "Universal", visitante: "Cerro Jrs", gl: 0, gv: 2 }
                  ]
                }
              ]
            },
            {
              id: "2013",
              fechas: [
                {
                  num: 1,
                  partidos: [
                    { local: "Naranja Mecánica", visitante: "Holanda", gl: 0, gv: 5 },
                    { local: "Nuevo Juventud", visitante: "Santa Catalina", gl: 2, gv: 0 },
                    { local: "Brandi", visitante: "Independiente Lezica", gl: 0, gv: 5 },
                    { local: "Papotes", visitante: "Beco", gl: 0, gv: 2 },
                    { local: "Cerromar", visitante: "Tigre", gl: 3, gv: 3 },
                    { local: "Zorzal", visitante: "Sauce", gl: 7, gv: 3 },
                    { local: "Estrella Federal", visitante: "Iriarte", gl: 5, gv: 0 },
                    { local: "Los Magos", visitante: "Los Bulevares", gl: 6, gv: 0 },
                    { local: "Pesca", visitante: "Olimpo Jrs", gl: 1, gv: 2 },
                    { local: "Universal", visitante: "Cerro Jrs", gl: 5, gv: 1 }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "arm",
      nombre: "Asociación Regional de Montevideo (ARM)",
      series: [
        {
          id: "arm-unica",
          nombre: "Serie Única",
          clubes: [
            "Toledo Chico", "Primavera", "Galácticos", "Málaga", "San Martín Bonomi",
            "Flores Palmas", "Fénix", "Montevideo Belgrano", "Potencia", "Celtic Jrs",
            "Rocha", "Tacuarembó", "Flor de Maroñas", "Arapey Mendoza", "La Lata"
          ]
        }
      ]
    }
  ]
};