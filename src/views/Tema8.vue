<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Plan de manejo ambiental
    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-gradiente
          p.mb-0 Es un conjunto de medidas, programas y estrategias diseñadas para prevenir, mitigar, corregir y compensar los impactos negativos que las actividades agrícolas pueden generar sobre el entorno natural y social. En el cultivo del plátano, el PMA constituye un instrumento esencial de planificación que busca garantizar la sostenibilidad del sistema productivo, la conservación de los recursos naturales y el cumplimiento de la normatividad ambiental, articulándose directamente con las buenas prácticas agrícolas (BPA). Para diseñar uno, se debe tener en cuenta lo siguiente:

    .tarjeta.bg-color-secundario-s5.p-4
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema8/2.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 1. Diagnóstico inicial del sistema productivo.
            ul.checklist
              li Evaluar las condiciones actuales del cultivo: localización, clima, topografía y prácticas agrícolas empleadas.
              li Identificar los impactos ambientales más frecuentes: uso excesivo de agua, erosión del suelo, uso de agroquímicos, deforestación y manejo de residuos.
              li Realizar un inventario de recursos naturales presentes: fuentes de agua, calidad del suelo, biodiversidad asociada.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema8/3.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 2. Identificación de impactos ambientales.
            ul.checklist
              li Analizar las actividades del ciclo productivo (siembra, fertilización, riego, control de plagas, cosecha y poscosecha).
              li Determinar los impactos potenciales de cada actividad: contaminación del agua por lixiviación de nutrientes, compactación del suelo, deforestación, pérdida de hábitat, etc.
              li Clasificar los impactos en: preventivos, mitigables y compensables.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema8/4.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 3. Definición de objetivos del PMA.
            ul.checklist
              li Conservar y mejorar la fertilidad de los suelos.
              li Garantizar un uso eficiente y responsable del agua en el riego y poscosecha.
              li Minimizar el uso de agroquímicos y promover alternativas sostenibles como el control biológico.
              li Establecer un plan de manejo de residuos orgánicos y plásticos agrícolas.
              li Proteger la biodiversidad y la salud de los trabajadores.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema8/5.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 4. Diseño de programas de manejo ambiental.
            ul.checklist
              li Manejo del suelo: terrazas, coberturas vivas, abonos orgánicos.
              li Manejo del agua: riego tecnificado, cosecha de aguas lluvias, monitoreo de calidad.
              li Manejo de agroquímicos: almacenamiento seguro, registro de aplicaciones, uso de EPP.
              li Residuos sólidos y orgánicos: compostaje de restos de poda y frutos descartados, reciclaje de plásticos.
              li Protección de biodiversidad: conservación de franjas forestales, corredores biológicos.
              li Seguridad y bienestar del trabajador: capacitación en seguridad ocupacional, ergonomía y salud.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema8/6.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 5. Establecimiento de indicadores de seguimiento.
            ul.checklist
              li Erosión controlada (% reducción).
              li Ahorro en consumo de agua (m³ por hectárea).
              li Reducción en el uso de agroquímicos (%).
              li Número de trabajadores capacitados en BPA.
              li Porcentaje de residuos orgánicos aprovechados.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema8/7.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 6. Implementación del PMA.
            ul.checklist
              li Asignar responsables para cada actividad.
              li Definir cronogramas de ejecución (corto, mediano y largo plazo).
              li Establecer mecanismos de financiamiento (apoyo gubernamental, certificaciones ambientales, cooperación).

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema8/8.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 7. Monitoreo, evaluación y mejora continua.
            ul.checklist
              li Revisar periódicamente los resultados frente a los indicadores.
              li Ajustar las prácticas según los cambios en las condiciones ambientales o productivas.
              li Documentar avances para procesos de certificación.


</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
