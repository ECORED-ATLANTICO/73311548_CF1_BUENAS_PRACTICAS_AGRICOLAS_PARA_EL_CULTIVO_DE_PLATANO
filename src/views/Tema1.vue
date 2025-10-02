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

    .row.justify-content-center.mb-4
      .col-lg-10
        .p-2.subtitle.text-white.text-center
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

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Estructura General de la NTC 5400

    ImagenInfograficaB.color-secundario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/map.png', alt='Mapa con una granja')

      div(x="9%" y="80%" numero="1")
        .row.justify-content-center.m-0
          .col-lg-10.position-relative
            img.hojas-platano-icono(src='@/assets/curso/temas/tema1/leafs.svg', alt='hojas')
            .number-platano 
              span 1
            .row.bg-color-secundario-s10.p-3.p-lg-0.align-items-center.modal-content-card
              .col-lg-3.p-0.d-none.d-lg-block           
                img(src='@/assets/curso/temas/tema1/8.png', alt='Imagen decorativa')
              .col-lg-7
                .px-lg-4
                  h5 Objeto y alcance
                  p Brindar requisitos generales para la implementación de buenas prácticas agrícolas (BPA) en frutas, hierbas aromáticas culinarias y hortalizas frescas, con énfasis en la inocuidad alimentaria, sostenibilidad y seguridad laboral.

      div(x="18%" y="80%" numero="2")
        .row.justify-content-center.m-0
          .col-lg-10.position-relative
            img.hojas-platano-icono(src='@/assets/curso/temas/tema1/leafs.svg', alt='hojas')
            .number-platano 
              span 2
            .row.bg-color-secundario-s10.p-3.p-lg-0.align-items-center.modal-content-card
              .col-lg-3.p-0.d-none.d-lg-block           
                img(src='@/assets/curso/temas/tema1/9.png', alt='Imagen decorativa')
              .col-lg-7
                .px-lg-4
                  h5 Planeación del cultivo
                  p Incluye criterios para la selección de terrenos, análisis de riesgos, manejo de suelos y planificación agronómica sostenible.

      div(x="27%" y="80%" numero="3")
        .row.justify-content-center.m-0
          .col-lg-10.position-relative
            img.hojas-platano-icono(src='@/assets/curso/temas/tema1/leafs.svg', alt='hojas')
            .number-platano 
              span 3
            .row.bg-color-secundario-s10.p-3.p-lg-0.align-items-center.modal-content-card
              .col-lg-3.p-0.d-none.d-lg-block           
                img(src='@/assets/curso/temas/tema1/10.png', alt='Imagen decorativa')
              .col-lg-7
                .px-lg-4
                  h5 Manejo del agua
                  p Detalla el uso del agua en distintas etapas:
                  ul.checklist
                    li Riego: características fisicoquímicas y microbiológicas adecuadas según normativa.
                    li Aplicación de insumos: parámetros específicos como pH y dureza.
                    li Poscosecha: agua potable según la legislación nacional.
                  p Además, impone la necesidad de sistemas seguros de almacenamiento y registros adecuados.

      div(x="36%" y="80%" numero="4")
        .row.justify-content-center.m-0
          .col-lg-10.position-relative
            img.hojas-platano-icono(src='@/assets/curso/temas/tema1/leafs.svg', alt='hojas')
            .number-platano 
              span 4
            .row.bg-color-secundario-s10.p-3.p-lg-0.align-items-center.modal-content-card
              .col-lg-3.p-0.d-none.d-lg-block           
                img(src='@/assets/curso/temas/tema1/11.png', alt='Imagen decorativa')
              .col-lg-7
                .px-lg-4
                  h5 Manejo del suelo
                  p Incluye obligaciones como:
                  ul.checklist
                    li Realizar análisis fisicoquímicos y microbiológicos del suelo.
                    li Adoptar medidas para prevenir erosión, compactación y pérdida de materia orgánica.
                    li Promover prácticas como rotación de cultivos, cobertura del suelo y drenaje adecuado.

      div(x="45%" y="80%" numero="5")
        .row.justify-content-center.m-0
          .col-lg-10.position-relative
            img.hojas-platano-icono(src='@/assets/curso/temas/tema1/leafs.svg', alt='hojas')
            .number-platano 
              span 5
            .row.bg-color-secundario-s10.p-3.p-lg-0.align-items-center.modal-content-card
              .col-lg-3.p-0.d-none.d-lg-block           
                img(src='@/assets/curso/temas/tema1/12.png', alt='Imagen decorativa')
              .col-lg-7
                .px-lg-4
                  h5 Material de propagación
                  p Exige que el material utilizado (semillas, estacas, plántulas, etc.):
                  ul.checklist
                    li Sea certificado, libre de plagas y enfermedades.
                    li Tenga procedencia documentada y cumpla con requisitos sanitarios.

      div(x="54%" y="80%" numero="6")
        .row.justify-content-center.m-0
          .col-lg-10.position-relative
            img.hojas-platano-icono(src='@/assets/curso/temas/tema1/leafs.svg', alt='hojas')
            .number-platano 
              span 6
            .row.bg-color-secundario-s10.p-3.p-lg-0.align-items-center.modal-content-card
              .col-lg-3.p-0.d-none.d-lg-block           
                img(src='@/assets/curso/temas/tema1/13.png', alt='Imagen decorativa')
              .col-lg-7
                .px-lg-4
                  h5 Nutrición de las plantas
                  p Incluye criterios sobre:
                  ul.checklist
                    li Diseño de programas de fertilización según análisis de suelo y tejido foliar.
                    li Registro de aplicaciones (dosis, tipos, fechas).
                    li Preferencia por abonos orgánicos registrados y su manejo seguro.
                    li Limpieza y desinfección de herramientas usadas, y almacenamiento seguro de abonos orgánicos.

      div(x="63%" y="80%" numero="7")
        .row.justify-content-center.m-0
          .col-lg-10.position-relative
            img.hojas-platano-icono(src='@/assets/curso/temas/tema1/leafs.svg', alt='hojas')
            .number-platano 
              span 7
            .row.bg-color-secundario-s10.p-3.p-lg-0.align-items-center.modal-content-card
              .col-lg-3.p-0.d-none.d-lg-block           
                img(src='@/assets/curso/temas/tema1/14.png', alt='Imagen decorativa')
              .col-lg-7
                .px-lg-4
                  h5 Prácticas de cosecha y poscosecha
                  p Establece lineamientos para:
                  ul.checklist
                    li Higiene y limpieza de herramientas y maquinaria de cosecha.
                    li Protección del producto contra contaminantes como lubricantes o vidrios.
                    li Registro de condiciones y medidas preventivas en estas etapas

      div(x="72%" y="80%" numero="8")
        .row.justify-content-center.m-0
          .col-lg-10.position-relative
            img.hojas-platano-icono(src='@/assets/curso/temas/tema1/leafs.svg', alt='hojas')
            .number-platano 
              span 8
            .row.bg-color-secundario-s10.p-3.p-lg-0.align-items-center.modal-content-card
              .col-lg-3.p-0.d-none.d-lg-block           
                img(src='@/assets/curso/temas/tema1/15.png', alt='Imagen decorativa')
              .col-lg-7
                .px-lg-4
                  h5 Registros y trazabilidad
                  p Define la necesidad de contar con:
                  ul.checklist
                    li Documentación detallada de cada actividad agrícola (aplicaciones, limpieza, uso de insumos).
                    li Sistemas que permitan rastrear el origen y manejo del producto

      div(x="81%" y="80%" numero="9")
        .row.justify-content-center.m-0
          .col-lg-10.position-relative
            img.hojas-platano-icono(src='@/assets/curso/temas/tema1/leafs.svg', alt='hojas')
            .number-platano 
              span 9
            .row.bg-color-secundario-s10.p-3.p-lg-0.align-items-center.modal-content-card
              .col-lg-3.p-0.d-none.d-lg-block           
                img(src='@/assets/curso/temas/tema1/16.png', alt='Imagen decorativa')
              .col-lg-7
                .px-lg-4
                  h5 Bienestar y seguridad laboral
                  p Establece obligaciones relacionadas con:
                  ul.checklist
                    li Condiciones seguras e higiénicas para los trabajadores.
                    li Uso de equipos de protección personal.
                    li Capacitación y salud ocupacional en el entorno productivo

      div(x="90%" y="80%" numero="10")
        .row.justify-content-center.m-0
          .col-lg-10.position-relative
            img.hojas-platano-icono(src='@/assets/curso/temas/tema1/leafs.svg', alt='hojas')
            .number-platano 
              span 10
            .row.bg-color-secundario-s10.p-3.p-lg-0.align-items-center.modal-content-card
              .col-lg-3.p-0.d-none.d-lg-block           
                img(src='@/assets/curso/temas/tema1/17.png', alt='Imagen decorativa')
              .col-lg-7
                .px-lg-4
                  h5 Protección ambiental y sostenibilidad
                  p Promueve la:
                  ul.checklist
                    li Conservación de recursos naturales (suelo, agua).
                    li Disposición adecuada de desechos y control de contaminantes.
                    li Aplicación de prácticas sostenibles como el uso racional de agroquímicos





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
