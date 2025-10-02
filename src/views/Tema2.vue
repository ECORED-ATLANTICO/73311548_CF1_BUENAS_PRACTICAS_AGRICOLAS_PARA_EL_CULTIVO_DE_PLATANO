<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Calidad en el sector agrícola

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/1.png', alt='Imagen ilustrativa' data-aos="fade-down")
      .col-lg-8
        p La calidad en el sector agrícola hace referencia al conjunto de características y atributos que hacen que los productos del campo cumplan con los estándares de inocuidad, frescura, uniformidad, sostenibilidad y valor nutritivo exigidos por consumidores, mercados e instituciones reguladoras. Este concepto abarca tanto el proceso de producción como el resultado final, garantizando alimentos seguros, saludables y competitivos.
        .p-4.bg-color-primario-p10.rounded-3
          .row.align-items-center.justify-content-between
            .col-lg-9
              p En primer lugar, la calidad está estrechamente relacionada con la inocuidad alimentaria, entendida como la producción de alimentos libres de contaminantes físicos, químicos o biológicos que puedan afectar la salud. Para ello, se implementan protocolos como las Buenas Prácticas Agrícolas (BPA) y la trazabilidad, que permiten controlar y documentar cada etapa del proceso productivo.
            .d-none.d-lg-block.col-lg-3
              figure
                img.mb-4.mb-lg-0.w-101(src='@/assets/curso/temas/tema2/2.png', alt='Imagen ilustrativa' data-aos="fade-down")

    .cajon.color-secundario.p-4.mb-4
      p Otro aspecto fundamental es la calidad organoléptica y comercial, que comprende atributos visibles y medibles como tamaño, color, sabor, textura y aroma, además de criterios de empaque, presentación y vida útil. Estos factores inciden directamente en la aceptación del producto por parte de los mercados nacionales e internacionales.
      p.mb-0 La calidad en la agricultura también se vincula con la gestión ambiental y la sostenibilidad, garantizando un uso responsable de los recursos naturales, la reducción de impactos negativos y la adopción de tecnologías limpias que contribuyan a la competitividad del sector.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        p.mb-0 Por último, la calidad depende de la formación y bienestar de los trabajadores agrícolas, ya que su capacitación en buenas prácticas, seguridad laboral y manejo de tecnologías asegura la eficiencia de los procesos y el cumplimiento de los estándares establecidos.
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/3.png', alt='Imagen ilustrativa' data-aos="fade-down")

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Entes certificadores de las BPA

    .row.justify-content-center.justify-content-lg-start.align-items-center.mb-5
      .col-sm-8.col-lg-5.col-xl-4
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/4.png', alt='Imagen ilustrativa' data-aos="fade-down")
      .col-lg-7
        .p-4.bg-color-primario-p10.rounded-3
          p Son instituciones nacionales e internacionales encargadas de verificar que los procesos productivos cumplan con estándares de calidad, sostenibilidad y seguridad alimentaria. Estas entidades evalúan aspectos como el manejo del suelo, el uso adecuado de insumos, la protección de los trabajadores y la preservación del medio ambiente.

    .row.justify-content-center.mb-4
      .col-lg-10
        .p-2.subtitle.text-white.text-center
          p.mb-0.fw-bold En Colombia, quienes tienen relación con la certificación en buenas prácticas agropecuarias son:

    .row.align-items-stretch.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-terciario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema2/5.png', alt='Imagen decorativa' data-aos="fade-right")

          h3.text-center.mb-4 ICA
          p Instituto Colombiano Agropecuario (ICA) es la autoridad sanitaria y fitosanitaria de Colombia. Su función principal es vigilar, regular y certificar la producción agrícola y pecuaria, garantizando la inocuidad, la sanidad vegetal y la calidad de los productos. Además, es el ente encargado de otorgar la certificación en buenas prácticas agrícolas (BPA) a los productores que cumplen con los requisitos establecidos.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-terciario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema2/6.png', alt='Imagen decorativa' data-aos="fade-down")

          h3.text-center.mb-4 ICONTEC
          p Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC) es una entidad que lidera en Colombia la normalización, certificación y metrología. Su labor principal es establecer normas técnicas y otorgar certificaciones de calidad, seguridad e inocuidad a diferentes sectores, incluido el agrícola. A través de sus certificaciones, respalda que los procesos productivos cumplan con estándares nacionales e internacionales.

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.color-terciario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema2/7.png', alt='Imagen decorativa' data-aos="fade-left")

          h3.text-center.mb-4 GLOBALG.A.P
          p GlobalG.A.P. es una norma internacional que certifica las Buenas Prácticas Agrícolas. Su objetivo es garantizar la inocuidad de los alimentos, la sostenibilidad ambiental y el bienestar de los trabajadores en la producción agrícola, pecuaria y acuícola. Esta certificación abre oportunidades en mercados internacionales, pues es exigida por muchos compradores y cadenas de distribución en el mundo.
</template>

<script>
export default {
  name: 'Tema2',
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
