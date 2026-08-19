// app.js - Lógica para conectar la interfaz y calcular tablas dinámicas

const CATEGORIAS_STANDARD = [
  { id: "2020", nombre: "2020" },
  { id: "2019", nombre: "2019" },
  { id: "2018", nombre: "2018" },
  { id: "2017", nombre: "2017" },
  { id: "2016", nombre: "2016" },
  { id: "2015", nombre: "2015" },
  { id: "2014", nombre: "2014" },
  { id: "2013", nombre: "2013" },
];

function inicializarApp() {
  const selectLiga = document.getElementById("select-liga");
  if (!selectLiga) return;

  selectLiga.innerHTML = "";

  ZONA_8_DB.ligas.forEach((liga) => {
    const option = document.createElement("option");
    option.value = liga.id;
    option.textContent = liga.nombre;
    selectLiga.appendChild(option);
  });

  // Escuchar cambios en el selector de torneo (si existe en la vista)
  const selectTorneo = document.getElementById("select-torneo");
  if (selectTorneo) {
    selectTorneo.addEventListener("change", actualizarVista);
  }

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

  // 1. Opción "Tabla General" al inicio del selector
  const optionGeneral = document.createElement("option");
  optionGeneral.value = "general";
  optionGeneral.textContent = "Tabla General (Acumulado)";
  selectCat.appendChild(optionGeneral);

  const liga = ZONA_8_DB.ligas.find((l) => l.id === idLiga);
  const serie = liga ? liga.series.find((s) => s.id === idSerie) : null;

  // 2. Opciones de categorías individuales
  if (serie && serie.categorias && serie.categorias.length > 0) {
    serie.categorias.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat.id;
      option.textContent = `Categoría ${cat.id}`;
      selectCat.appendChild(option);
    });
  } else {
    CATEGORIAS_STANDARD.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat.id;
      option.textContent = `Categoría ${cat.nombre}`;
      selectCat.appendChild(option);
    });
  }

  actualizarVista();
}

/**
 * Devuelve el número de fechas que abarca el Apertura según la cantidad de clubes
 */
function obtenerLimiteApertura(serie) {
  if (!serie || !serie.clubes) return 0;
  const n = serie.clubes.length;
  return n % 2 === 0 ? n - 1 : n;
}

/**
 * Devuelve el nombre legible del torneo
 */
function obtenerNombreTorneo(torneoKey) {
  switch (torneoKey) {
    case "apertura":
      return "Apertura";
    case "clausura":
      return "Clausura";
    default:
      return "Tabla Anual";
  }
}

/**
 * Calcula la tabla de posiciones combinando categoría ('general' o id específico)
 * y fase del torneo ('apertura', 'clausura' o 'anual')
 */
/**
 * Calcula la tabla de posiciones combinando categoría ('general' o id específico)
 * y fase del torneo ('apertura', 'clausura' o 'anual')
 */
function calcularTabla(serie, idCat, puntosPG = 2, torneo = "anual") {
  if (!serie || !serie.clubes) return [];

  // Estructura inicial de acumulados por club
  const tabla = {};
  serie.clubes.forEach((club) => {
    tabla[club] = {
      nombre: club,
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
    };
  });

  if (!serie.categorias) return Object.values(tabla);

  const limiteApertura = obtenerLimiteApertura(serie);

  // Si idCat es "general", procesamos todas las categorías; de lo contrario, solo la seleccionada
  const categoriasAProcesar =
    idCat === "general"
      ? serie.categorias
      : serie.categorias.filter((c) => c.id === idCat);

  categoriasAProcesar.forEach((catData) => {
    if (!catData || !catData.fechas) return;

    // Filtrar fechas según la fase de torneo solicitada
    const fechasTorneo = catData.fechas.filter((fecha) => {
      if (torneo === "apertura") return fecha.num <= limiteApertura;
      if (torneo === "clausura") return fecha.num > limiteApertura;
      return true; // "anual"
    });

    // Sumar partidos jugados
    fechasTorneo.forEach((fecha) => {
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
            local.pts += puntosPG;
            visitante.pp++;
          } else if (p.gl < p.gv) {
            visitante.pg++;
            visitante.pts += puntosPG;
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
  });

// APLICAR SANCIONES / QUITA DE PUNTOS SEGÚN EL TORNEO
categoriasAProcesar.forEach((catData) => {
    // 1. Definimos qué diccionarios de sanciones incluir según el torneo seleccionado
    let dictsASumar = [];

    if (torneo === "apertura" && catData.sancionesApertura) {
      dictsASumar.push(catData.sancionesApertura);
    } else if (torneo === "clausura" && catData.sancionesClausura) {
      dictsASumar.push(catData.sancionesClausura);
    } else if (torneo === "anual") {
      // Si es Anual, acumulamos tanto apertura como clausura si existen
      if (catData.sancionesApertura) dictsASumar.push(catData.sancionesApertura);
      if (catData.sancionesClausura) dictsASumar.push(catData.sancionesClausura);
    }

    // 2. Procesar cada diccionario de penalizaciones aplicable acumulando los valores
    dictsASumar.forEach((sancionesDict) => {
      Object.keys(sancionesDict).forEach((clubNombre) => {
        if (tabla[clubNombre]) {
          const penalizacion = Math.abs(sancionesDict[clubNombre]);
          
          // Descontamos los puntos de la tabla general de posiciones
          tabla[clubNombre].pts -= penalizacion;
          
          // Acumulamos todas las sanciones sumando los valores negativos
          tabla[clubNombre].ptsInf = (tabla[clubNombre].ptsInf || 0) + (-penalizacion);
        }
      });
    });
  });

  // Asegurar que los clubes sin sanción tengan 0 en esa propiedad
  Object.values(tabla).forEach((club) => {
    if (club.ptsInf === undefined) {
      club.ptsInf = 0;
    }
  });

  // 👇 ¡ESTO ES LO QUE FALTABA! Retornar la tabla convertida en array ordenable
// Convertir el objeto a un array y ordenarlo por Puntos, Diferencia de Goles y Goles a Favor
  return Object.values(tabla).sort((a, b) => {
    if (b.pts !== a.pts) {
      return b.pts - a.pts; // Mayor cantidad de puntos
    }
    if (b.dg !== a.dg) {
      return b.dg - a.dg; // Mayor diferencia de goles
    }
    return b.gf - a.gf; // Mayor cantidad de goles a favor
  });
}
/*
 * Obtiene las fechas disputadas para la vista de fixture (solo categorías individuales)
 */
function obtenerFechasDisputadas(serie, idCat, torneo = "anual") {
  if (!serie || !serie.categorias || idCat === "general") return [];

  const catData = serie.categorias.find((c) => c.id === idCat);
  if (!catData || !catData.fechas) return [];

  const limiteApertura = obtenerLimiteApertura(serie);

  return catData.fechas.filter((fecha) => {
    if (torneo === "apertura" && fecha.num > limiteApertura) return false;
    if (torneo === "clausura" && fecha.num <= limiteApertura) return false;

    return true;

    /*return fecha.partidos.some((p) => p.gl !== null && p.gv !== null);*/
  });
}

/**
 * Renderiza el fixture de partidos
 */
function renderizarFechas(
  serie,
  idCat,
  contenedorId = "contenedor-fechas",
  torneo = "anual",
) {
  const contenedorFechas = document.getElementById(contenedorId);
  if (!contenedorFechas) return;

  contenedorFechas.innerHTML = "";

  // En Tabla General no mostramos el desglose de fixture
  if (idCat === "general") return;

  const fechasDisputadas = obtenerFechasDisputadas(serie, idCat, torneo);

  if (fechasDisputadas.length === 0) {
    contenedorFechas.innerHTML =
      "<p>No hay fechas disputadas en este torneo/categoría.</p>";
    return;
  }

  const limiteApertura = obtenerLimiteApertura(serie);

fechasDisputadas.forEach((fecha) => {
    const cardFecha = document.createElement("div");
    cardFecha.className = "card-fecha";

    let numMostrar = fecha.num;
    if (torneo === "clausura" || fecha.num > limiteApertura) {
      if (torneo === "clausura") {
        numMostrar = fecha.num - limiteApertura;
      }
    }

    let partidosHTML = "";
    fecha.partidos.forEach((p) => {
      const gl = p.gl !== null ? p.gl : "-";
      const gv = p.gv !== null ? p.gv : "-";
      partidosHTML += `
        <tr>
          <td class="equipo-local">${p.local}</td>
          <td class="resultado"><strong>${gl} - ${gv}</strong></td>
          <td class="equipo-visitante">${p.visitante}</td>
        </tr>
      `;
    });

    const labelFecha =
      torneo === "clausura"
        ? `Fecha ${numMostrar} (Clausura) ▾`
        : `Fecha ${fecha.num} ▾`;

    cardFecha.innerHTML = `
      <details>
        <summary>${labelFecha}</summary>
        <table class="tabla-partidos">
          <tbody>
            ${partidosHTML}
          </tbody>
        </table>
      </details>
    `;

    contenedorFechas.appendChild(cardFecha);
  });
}

/**
 * Renderiza los datos calculados dentro del <tbody>
 */
function renderizarTablaEnHTML(tbodyElement, datosTabla) {
  if (!tbodyElement) return;
  tbodyElement.innerHTML = "";

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
      <td>${equipo.dg > 0 ? "+" + equipo.dg : equipo.dg}</td>
      <td>${equipo.ptsInf}</td> <!-- NUEVA CELDA -->
    `;
    tbodyElement.appendChild(tr);
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

  const selectTorneo = document.getElementById("select-torneo");
  const torneoActual = selectTorneo ? selectTorneo.value : "anual";
  const nombreTorneo = obtenerNombreTorneo(torneoActual);

  // Titulo dinamico según la categoría y el torneo seleccionado
  if (tituloH2) {
    const etiquetaCategoria =
      idCat === "general"
        ? `Tabla General de Clubes - ${nombreTorneo}`
        : `Cat ${idCat} - ${nombreTorneo}`;

    tituloH2.textContent = `${liga.nombre} - ${serie ? serie.nombre : ""} (${etiquetaCategoria})`;
  }

  // Lista de clubes
  if (listaUl) {
    listaUl.innerHTML = "";
    if (serie && serie.clubes) {
      serie.clubes.forEach((club) => {
        const li = document.createElement("li");
        li.textContent = `⚽ ${club}`;
        listaUl.appendChild(li);
      });
    }
  }

  // 1. Caso de un único selector de torneo (#select-torneo)
  const tbodyPos = document.getElementById("body-tabla-posiciones");
  if (tbodyPos) {
    const datosTabla = calcularTabla(serie, idCat, liga.puntosPG, torneoActual);
    renderizarTablaEnHTML(tbodyPos, datosTabla);

    if (idCat !== "general") {
      renderizarFechas(serie, idCat, "contenedor-fechas", torneoActual);
    } else {
      const contenedorFechas = document.getElementById("contenedor-fechas");
      if (contenedorFechas) contenedorFechas.innerHTML = "";
    }
  }

  // 2. Caso de tablas separadas simultáneamente en el HTML
  const tbodyApertura = document.getElementById("body-tabla-apertura");
  if (tbodyApertura) {
    renderizarTablaEnHTML(
      tbodyApertura,
      calcularTabla(serie, idCat, liga.puntosPG, "apertura"),
    );
    if (idCat !== "general") {
      renderizarFechas(serie, idCat, "contenedor-fechas-apertura", "apertura");
    } else {
      const cont = document.getElementById("contenedor-fechas-apertura");
      if (cont) cont.innerHTML = "";
    }
  }

  const tbodyClausura = document.getElementById("body-tabla-clausura");
  if (tbodyClausura) {
    renderizarTablaEnHTML(
      tbodyClausura,
      calcularTabla(serie, idCat, liga.puntosPG, "clausura"),
    );
    if (idCat !== "general") {
      renderizarFechas(serie, idCat, "contenedor-fechas-clausura", "clausura");
    } else {
      const cont = document.getElementById("contenedor-fechas-clausura");
      if (cont) cont.innerHTML = "";
    }
  }

  const tbodyAnual = document.getElementById("body-tabla-anual");
  if (tbodyAnual) {
    renderizarTablaEnHTML(
      tbodyAnual,
      calcularTabla(serie, idCat, liga.puntosPG, "anual"),
    );
  }
}

document.addEventListener("DOMContentLoaded", inicializarApp);
