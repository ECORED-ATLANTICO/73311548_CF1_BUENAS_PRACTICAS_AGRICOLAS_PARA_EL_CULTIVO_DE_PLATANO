<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/intro/1.png" alt="Icono decorativa")
      .col-lg-9
        .p-4.bg-color-secundario-s5.rounded-4
          .row.justify-content-center.align-items-center
            .col-xl-9.mb-4.mb-xl-0
              p.mb-0 El componente formativo "Generalidades de las prácticas agrícolas para el cultivo del plátano" se enfoca en orientar al aprendiz en la producción limpia del plátano, implementando buenas prácticas agrícolas (BPA). Su objetivo es proporcionar los conocimientos necesarios sobre el funcionamiento y los lineamientos que le permitirán, desde el comienzo, iniciar un sistema de producción platanero con bases de planeación y control aplicadas a las BPA, garantizando la calidad e inocuidad del producto. Bienvenido a este componente formativo.
            .d-none.d-xl-block.col-sm-8.col-xl-3
              figure
                img(data-aos="fade-up")(src="@/assets/curso/intro/2.png" alt="Imagen decorativa")
    
    figure.mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
