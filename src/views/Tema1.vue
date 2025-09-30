<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de las buenas prácticas agrícolas

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema1/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-gradiente
          p.mb-0 Las buenas prácticas agrícolas (BPA), son un conjunto de principios, normas y procedimientos aplicados en la producción, cosecha y poscosecha de los cultivos agrícolas, cuyo propósito principal es garantizar alimentos seguros, de calidad y obtenidos de manera sostenible. Se fundamentan en el equilibrio entre productividad, cuidado del medio ambiente, bienestar de los trabajadores y satisfacción de los consumidores.

    .row.justify-content-center.mb-2
      .col
        .p-2.rounded-top-4.bg-color-secundario.text-white.text-center
          p.mb-0.fw-bold Los principios de las BPA son los siguientes:

    .tarjeta.bg-color-secundario-s5.p-4.mb-5
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/2.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Inocuidad de los alimentos
            p.mb-0 Los productos deben ser aptos para el consumo humano y estén libres de contaminantes físicos, químicos o biológicos que puedan afectar la salud. Esto implica un manejo adecuado del agua, el suelo, fertilizantes, los plaguicidas y las instalaciones de almacenamiento.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/3.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Sostenibilidad ambiental
            p.mb-0 Promueve prácticas que conserven la fertilidad del suelo, reduzcan el uso indiscriminado de agroquímicos, protejan la biodiversidad y hagan un uso eficiente de los recursos naturales, como el agua y la energía.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/4.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Bienestar y seguridad de los trabajadores rurales
            p.mb-0 Garantiza condiciones laborales dignas, el uso de equipos de protección personal y la capacitación constante para prevenir riesgos en el manejo de herramientas, insumos y procesos agrícolas.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/5.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Trazabilidad
            p.mb-0 Hace referencia al registro y documentación de cada etapa del proceso productivo, desde la siembra hasta la comercialización. Esto permite dar confianza a los consumidores y facilita la certificación de calidad frente a mercados nacionales e internacionales.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/6.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Competitividad y rentabilidad del sector agrícola
            p.mb-0 Busca el fortalecimiento de la reputación de los productores, facilitando el acceso a mercados más exigentes y fomentan la innovación en el uso de tecnologías y prácticas sostenibles.

    .cajon.color-secundario.p-4
      p.mb-0 Las buenas prácticas agrícolas están diseñadas para regir tanto en el sector privado como en el público, ambos deben interactuar en la construcción de directrices de gestión, que controlen los sistemas de producción, basándose en los principios de las BPA.

    Separador
    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.1 NTC 5400

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/7.png', alt='Imagen ilustrativa' data-aos="fade-down")
      .col-lg-8
        p La Norma Técnica Colombiana NTC 5400 establece los requisitos generales para la implementación de las buenas prácticas agrícolas (BPA) en la producción de frutas, hierbas aromáticas culinarias y hortalizas frescas; con el propósito de garantizar la inocuidad de los alimentos, la sostenibilidad ambiental y la seguridad de los trabajadores rurales.
        p.mb-0 Esta norma, elaborada por ICONTEC en articulación con el sector agrícola, se convierte en una guía esencial para pequeños, medianos y grandes productores, al traducir los principios de las BPA en acciones concretas aplicables en el campo. Además, su adopción permite fortalecer la competitividad del sector, facilitar el acceso a mercados nacionales e internacionales y contribuir al desarrollo sostenible del agro colombiano.

    h4(data-aos='zoom-in-right').mb-4
      span.banana-title Estructura General de la NTC 5400
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
