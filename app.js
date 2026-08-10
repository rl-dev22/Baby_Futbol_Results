// app.js - Lógica para conectar la interfaz y calcular tablas dinámicas

const CATEGORIAS_STANDARD = [
  { id: "2020", nombre: "2020" },
  { id: "2019", nombre: "2019" },
  { id: "2018", nombre: "2018" },
  { id: "2017", nombre: "2017" },
  { id: "2016", nombre: "2016" },
  { id: "2015", nombre: "2015" },
  { id: "2014", nombre: "2014" },
  { id: "2013", nombre: "2013" }
];

function inicializarApp() {
  const selectLiga = document.getElementById("select-liga");
  selectLiga.innerHTML = "";

  ZONA_8_DB.ligas.forEach((liga) => {
    const option = document.createElement("option");
    option.value = liga.id;
    option.textContent = liga.nombre;
    selectLiga.appendChild(option);
  });

  cambiarLiga();
}

function cambiarLiga() {
  const idLiga = document.getElementById("select-liga").value;
  const ligaSeleccionada = ZONA_8_DB.ligas.find((l) => l.id === idLiga);
  const selectSerie = document.getElementById("select-serie");

  selectSerie.innerHTML = "";

  if (ligaSeleccionada && ligaSeleccionada.series) {
    ligaSeleccionada.series.forEach((serie) => {
      const option = document.createElement("option");
      option.value = serie.id;
      option.textContent = serie.nombre;
      selectSerie.appendChild(option);
    });
  }

  cambiarSerie();
}

function cambiarSerie() {
  const idLiga = document.getElementById("select-liga").value;
  const idSerie = document.getElementById("select-serie").value;
  const selectCat = document.getElementById("select-categoria");
  
  selectCat.innerHTML = "";

  const liga = ZONA_8_DB.ligas.find((l) => l.id === idLiga);
  const serie = liga ? liga.series.find((s) => s.id === idSerie) : null;

  // Si la serie tiene definidas sus propias categorías en db.js, usamos esas:
  if (serie && serie.categorias && serie.categorias.length > 0) {
    serie.categorias.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat.id;
      option.textContent = cat.id;
      selectCat.appendChild(option);
    });
  } else {
    // Si no tiene categorías aún en db.js, mostramos la lista estándar por defecto
    CATEGORIAS_STANDARD.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat.id;
      option.textContent = cat.nombre;
      selectCat.appendChild(option);
    });
  }

  actualizarVista();
}

// Lógica para calcular posiciones
function calcularTabla(serie, idCat) {
  if (!serie || !serie.clubes) return [];

  // Inicializar estadísticas por club
  const tabla = {};
  serie.clubes.forEach((club) => {
    tabla[club] = {
      nombre: club,
      pj: 0, pg: 0, pe: 0, pp: 0,
      gf: 0, gc: 0, dg: 0, pts: 0
    };
  });

  // Si no hay datos de categorías o fechas para esta selección, devolvemos la tabla en cero
  if (!serie.categorias) return Object.values(tabla);

  const catData = serie.categorias.find((c) => c.id === idCat);
  if (!catData || !catData.fechas) return Object.values(tabla);

  // Procesar cada partido
  catData.fechas.forEach((fecha) => {
    fecha.partidos.forEach((p) => {
      const local = tabla[p.local];
      const visitante = tabla[p.visitante];

      if (local && visitante && p.gl !== null && p.gv !== null) {
        local.pj++;
        visitante.pj++;

        local.gf += p.gl;
        local.gc += p.gv;
        visitante.gf += p.gv;
        visitante.gc += p.gl;

        if (p.gl > p.gv) {
          local.pg++;
          local.pts += 2;
          visitante.pp++;
        } else if (p.gl < p.gv) {
          visitante.pg++;
          visitante.pts += 2;
          local.pp++;
        } else {
          local.pe++;
          local.pts += 1;
          visitante.pe++;
          visitante.pts += 1;
        }

        local.dg = local.gf - local.gc;
        visitante.dg = visitante.gf - visitante.gc;
      }
    });
  });

  // Ordenar: Puntos -> Diferencia de Goles -> Goles a Favor -> Nombre
  return Object.values(tabla).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dg !== a.dg) return b.dg - a.dg;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.nombre.localeCompare(b.nombre);
  });
}

function actualizarVista() {
  const idLiga = document.getElementById("select-liga").value;
  const idSerie = document.getElementById("select-serie").value;
  const idCat = document.getElementById("select-categoria").value;

  const liga = ZONA_8_DB.ligas.find((l) => l.id === idLiga);
  if (!liga) return;

  const serie = liga.series.find((s) => s.id === idSerie);
  const listaUl = document.getElementById("lista-clubes");
  const tituloH2 = document.getElementById("titulo-liga");
  const tbodyPos = document.getElementById("body-tabla-posiciones");

  tituloH2.textContent = `${liga.nombre} - ${serie ? serie.nombre : ""} (Generación ${idCat})`;
  
  // Renderizar clubes
  listaUl.innerHTML = "";
  if (serie && serie.clubes) {
    serie.clubes.forEach((club) => {
      const li = document.createElement("li");
      li.textContent = `⚽ ${club}`;
      listaUl.appendChild(li);
    });
  }

  // Renderizar Tabla de Posiciones
  if (tbodyPos) {
    tbodyPos.innerHTML = "";
    const datosTabla = calcularTabla(serie, idCat);

    datosTabla.forEach((equipo, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${index + 1}</strong></td>
        <td class="equipo-nombre">${equipo.nombre}</td>
        <td><strong>${equipo.pts}</strong></td>
        <td>${equipo.pj}</td>
        <td>${equipo.pg}</td>
        <td>${equipo.pe}</td>
        <td>${equipo.pp}</td>
        <td>${equipo.gf}</td>
        <td>${equipo.gc}</td>
        <td>${equipo.dg > 0 ? '+' + equipo.dg : equipo.dg}</td>
      `;
      tbodyPos.appendChild(tr);
    });
  }
}

document.addEventListener("DOMContentLoaded", inicializarApp);