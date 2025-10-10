<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Seguridad y bienestar social del trabajador
    .bloque-texto-g.color-secundario-s10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La seguridad y el bienestar social del trabajador agrícola constituyen un eje fundamental dentro de las Buenas Prácticas Agrícolas (BPA) y de la gestión sostenible en el cultivo del plátano. Garantizar condiciones adecuadas de salud, seguridad y desarrollo social no solo protege a la fuerza laboral, sino que también contribuye a la calidad del producto y al cumplimiento de normativas nacionales e internacionales.

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Seguridad en el trabajo agrícola

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 El cultivo del plátano implica actividades de riesgo como la manipulación de agroquímicos, el uso de herramientas cortopunzantes, el transporte de racimos pesados y la exposición prolongada a condiciones climáticas adversas. Para minimizar estos riesgos, se deben implementar medidas como:

    .row.mb-5.align-items-stretch.justify-content-center
      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario.h-100(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.py-xl-5.pe-xl-5
              h4.mt-5.mb-4 Equipos de Protección Personal (EPP)
              p Uso de guantes, botas, gafas, mascarillas y ropa adecuada en las labores de campo y manipulación de agroquímicos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/2.png')})`}")
      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario.h-100(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.py-xl-5.pe-xl-5
              h4.mt-5.mb-4 Capacitación continua
              p Formación en el manejo seguro de insumos, primeros auxilios, ergonomía y protocolos de emergencia.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/3.png')})`}")
      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario.h-100(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.py-xl-5.pe-xl-5
              h4.mt-5.mb-4 Señalización y bioseguridad
              p Identificación de áreas de riesgo, normas de higiene y puntos de lavado de manos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/4.png')})`}")
      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario.h-100(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.py-xl-5.pe-xl-5
              h4.mt-5.mb-4 Prevención de intoxicaciones
              p Almacenamiento seguro de plaguicidas y capacitación en su uso responsable.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/5.png')})`}")

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Bienestar social del trabajador

    p.mb-4 Más allá de la seguridad física, el bienestar social garantiza condiciones dignas de trabajo y respeto a los derechos laborales, lo que impacta directamente en la productividad y sostenibilidad de la actividad agrícola. Esto incluye:

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema5/6.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.bg-color-terciario-t20
            h4.mb-4 Condiciones laborales justas
            p Contratos legales, pago oportuno de salarios, afiliación a seguridad social y cumplimiento de jornadas laborales establecidas.

      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema5/7.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.bg-color-secundario-s20
            h4.mb-4 Acceso a servicios básicos
            p Suministro de agua potable, instalaciones sanitarias, áreas de descanso y comedores en fincas o centros de acopio.

      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema5/8.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.bg-color-terciario-t20
            h4.mb-4 Equidad e inclusión
            p Igualdad de oportunidades para hombres y mujeres, evitando la discriminación y fomentando la participación comunitaria.

      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema5/9.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.pt-4.pt-md-2.pt-lg-4.pt-xl-2.bg-color-secundario-s20
            h4.mb-4 Programas de salud ocupacional
            p Vacunación, chequeos médicos periódicos y actividades de prevención de enfermedades laborales.



</template>

<script>
export default {
  name: 'Tema5',
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
