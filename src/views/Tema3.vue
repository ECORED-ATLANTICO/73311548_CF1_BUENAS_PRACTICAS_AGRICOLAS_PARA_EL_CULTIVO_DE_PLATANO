<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Inocuidad en el plátano y protección sanitaria

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-7.col-lg-3
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/1.png', alt='Imagen ilustrativa' data-aos="fade-down")
      .col-lg-9
        .cajon.color-secundario.p-4
          p La inocuidad son las condiciones y medidas necesarias para garantizar que los alimentos sean seguros para el consumo humano y estén libres de contaminantes físicos, químicos o biológicos. En el caso del plátano, un cultivo de gran importancia económica y alimentaria en Colombia y otros países tropicales, la inocuidad es clave para asegurar la aceptación en los mercados nacionales e internacionales.
          p.mb-0 El plátano, al ser un fruto climatérico, es altamente perecedero y susceptible a contaminaciones en cualquier fase de la producción: desde la siembra hasta la poscosecha. Por ello, la implementación de prácticas adecuadas resulta esencial para reducir pérdidas, prolongar la vida útil y cumplir con requisitos sanitarios internacionales.

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Principales riesgos para la inocuidad del plátano

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-8.p-5.bg-slider.rounded-3
        .tarjeta.tarjeta--blanca.p-4.py-5
          SlyderA(tipo="b")
            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-3.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema3/3.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-8.col-xl-9
                h5.mb-4 Contaminación biológica
                p.mb-0 Bacterias, hongos y virus que afectan tanto al cultivo como a la salud humana. Enfermedades críticas incluyen la Sigatoka negra (<em>Mycosphaerella fijiensis</em>) y el mal de Panamá (<em>Fusarium oxysporum f. sp. cubense</em>).

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-3.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema3/4.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-8.col-xl-9
                h5.mb-4 Contaminación química
                p.mb-0 Residuos de plaguicidas y fertilizantes aplicados en exceso o de manera inadecuada. Los límites máximos de residuos deben cumplir con el <em>Codex alimentarius</em> y normativas locales.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-3.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema3/5.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-8.col-xl-9
                h5.mb-4 Contaminación física
                p.mb-0 Daños mecánicos, presencia de cuerpos extraños en el fruto o mal manejo en la cosecha y transporte.

      .col-8.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/2.png', alt='Imagen ilustrativa' data-aos='fade-up')

    h4(data-aos='zoom-in-right').mb-4
      span.banana-title Protección sanitaria

    p.mb-4 Se enfoca en prevenir, controlar y erradicar plagas y enfermedades que afectan al plátano, garantizando su calidad y seguridad. Entre las estrategias principales se encuentran:

    TabsC.color-acento-contenido.mb-5
      .p-4.py-5.bg-color-primario-p5(titulo="Manejo integrado de plagas (MIP)")
        .row.align-items-center
          .col-md-8.col-lg-7.mb-4.mb-md-0
            h5.mb-4 Manejo integrado de plagas (MIP)
            p.mb-0 Combinación de prácticas culturales, biológicas y químicas para reducir la incidencia de plagas de manera sostenible
          .col-md-4
            figure
              img.my-3(src='@/assets/curso/temas/tema3/6.png', alt='Imagen decorativa')

      .p-4.py-5.bg-color-primario-p5(titulo="Uso responsable de agroquímicos")
        .row.align-items-center
          .col-md-8.col-lg-7.mb-4.mb-md-0
            h5.mb-4 Uso responsable de agroquímicos
            p.mb-0 Aplicación solo de productos autorizados, en dosis correctas, con registros detallados y evitando riesgos de intoxicación en trabajadores.
          .col-md-4
            figure
              img.my-3(src='@/assets/curso/temas/tema3/7.png', alt='Imagen decorativa')

      .p-4.py-5.bg-color-primario-p5(titulo="Higiene y bioseguridad")
        .row.align-items-center
          .col-md-8.col-lg-7.mb-4.mb-md-0
            h5.mb-4 Higiene y bioseguridad
            p.mb-0 Limpieza de herramientas, control del acceso de personas y vehículos a las áreas de cultivo para reducir la diseminación de patógenos.
          .col-md-4
            figure
              img.my-3(src='@/assets/curso/temas/tema3/8.png', alt='Imagen decorativa')

      .p-4.py-5.bg-color-primario-p5(titulo="Monitoreo y diagnóstico temprano")
        .row.align-items-center
          .col-md-8.col-lg-7.mb-4.mb-md-0
            h5.mb-4 Monitoreo y diagnóstico temprano
            p.mb-0 Inspecciones periódicas de lotes para identificar plagas y enfermedades, y tomar decisiones rápidas de control.
          .col-md-4
            figure
              img.my-3(src='@/assets/curso/temas/tema3/10.png', alt='Imagen decorativa')

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Importancia de la Inocuidad y la Protección Sanitaria

    .cajon.color-secundario.p-4.mb-5
      p La inocuidad y la protección sanitaria en la producción agrícola, especialmente en cultivos como el plátano, son fundamentales para garantizar alimentos seguros, libres de contaminantes y con calidad óptima para el consumo humano. Su importancia radica en:

    .row.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-xl-0
        .p-3.py-4.bg-color-primario-p5.list-image
          img.list-image__img(src='@/assets/curso/temas/tema3/11.svg', alt='Imagen decorativa' data-aos="fade-right")
          ul.checklist
            li 
              h5.mb-4 Salud pública: 
          p.mb-0 evita riesgos de intoxicaciones y transmisión de enfermedades.
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-xl-0
        .p-3.py-4.bg-color-primario-p5.list-image
          img.list-image__img(src='@/assets/curso/temas/tema3/12.svg', alt='Imagen decorativa' data-aos="fade-right")
          ul.checklist
            li 
              h5.mb-0 Acceso a mercados: 
          p.mb-0 el cumplimiento de normas internacionales abre oportunidades de exportación.
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-xl-0
        .p-3.py-4.bg-color-primario-p5.list-image
          img.list-image__img(src='@/assets/curso/temas/tema3/13.svg', alt='Imagen decorativa' data-aos="fade-right")
          ul.checklist
            li 
              h5.mb-4 Sostenibilidad: 
          p.mb-0 reduce el impacto ambiental de la producción intensiva.
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-xl-0
        .p-3.py-4.bg-color-primario-p5.list-image
          img.list-image__img(src='@/assets/curso/temas/tema3/14.svg', alt='Imagen decorativa' data-aos="fade-right")
          ul.checklist
            li 
              h5.mb-4 Competitividad: 
          p.mb-0 fortalece la reputación del productor y del país exportador.
</template>

<script>
export default {
  name: 'Tema3',
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
