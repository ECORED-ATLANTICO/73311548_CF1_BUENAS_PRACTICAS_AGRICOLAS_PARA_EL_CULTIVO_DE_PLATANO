<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Las prácticas agrícolas para el cultivo del plátano comprenden acciones orientadas a lograr una producción eficiente, inocua y sostenible. Estas incluyen el manejo adecuado del suelo, agua y semillas, el uso responsable de insumos agrícolas, agroquímicos y abonos orgánicos, así como el mantenimiento de instalaciones, equipos y herramientas en condiciones óptimas. 
        p.mb-4.mb-lg-0 La implementación de estas prácticas conlleva beneficios, aunque también implica retos en costos y capacitación. Además, se prioriza la seguridad y el bienestar del trabajador. Finalmente, el plan de manejo ambiental integra acciones de conservación de recursos naturales, disposición adecuada de residuos y cuidado de la biodiversidad, asegurando que la producción de plátano sea rentable, responsable y alineada con las exigencias del sector agrícola.
      .col-md-6.col-lg-4
        figure
          img(src="@/assets/curso/sintesis/1.png", alt="El componente") 

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Las prácticas agrícolas en el cultivo de plátano buscan optimizar la producción con criterios de sostenibilidad e inocuidad. Incluyen el manejo eficiente del suelo, agua y material vegetal, el uso responsable de insumos y fertilizantes, y el mantenimiento preventivo de equipos y herramientas. Además, promueven la seguridad laboral y la implementación de planes de manejo ambiental, orientados a la conservación de recursos naturales, la gestión de residuos y la protección de la biodiversidad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
