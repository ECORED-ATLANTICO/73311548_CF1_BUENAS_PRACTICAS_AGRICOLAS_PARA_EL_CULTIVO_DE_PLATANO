<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Agroquímicos y abonos orgánicos
    .bloque-texto-g.color-secundario-s10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Representan dos categorías de insumos agrícolas que, aunque con naturalezas y funciones diferentes, son esenciales para la productividad y sostenibilidad del sector agrícola. En el marco de las Buenas Prácticas Agrícolas (BPA), ambos insumos deben manejarse de forma responsable y técnica, de modo que contribuyan tanto al incremento de la productividad como a la protección de los recursos naturales y la seguridad alimentaria, siendo fundamentales para el cultivo del plátano y otros sistemas agrícolas de importancia económica y social.

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Agroquímicos

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Compuestos de origen sintético o químico, se emplean principalmente para proteger los cultivos del ataque de plagas, malezas y enfermedades, así como para proveer nutrientes de manera rápida y específica; sin embargo, su uso debe estar estrictamente regulado para evitar impactos negativos en la salud humana, el medio ambiente y la inocuidad de los alimentos.

    .row.justify-content-center.mb-3
      .col-12
        .p-2.rounded-top-4.bg-color-secundario.text-white.text-center
          p.mb-0.fw-bold Los tipos de agroquímicos son los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema7/2.png', alt='Imagen ilustrativa' data-aos='fade-up')
      .col-lg-8.p-5.bg-slider.rounded-3
        .tarjeta.tarjeta--blanca.p-4.py-5
          SlyderA(tipo="b")
            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema7/3.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Herbicidas
                p.mb-0 Diseñados para el control de malezas que compiten con el plátano por luz, agua y nutrientes.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema7/4.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Insecticidas
                p.mb-0 Empleados para reducir o eliminar insectos plaga, como el picudo negro (<em>Cosmopolites sordidus</em>).

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema7/5.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Fungicidas
                p.mb-0 Utilizados contra hongos que afectan hojas y frutos, siendo la <em>Sigatoka negra</em> la enfermedad más crítica.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema7/6.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Nematicidas
                p.mb-0 Enfocados en controlar nematodos que deterioran las raíces del plátano.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema7/7.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Fertilizantes sintéticos
                p.mb-0 Formulaciones químicas que aportan nutrientes esenciales (N, P, K, Ca, Mg, micronutrientes) de manera rápida y precisa.

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Abonos orgánicos

    p.mb-5 Elaborados a partir de materiales naturales de origen animal, vegetal o mixto, promueven la mejora de la fertilidad del suelo, la actividad biológica y el equilibrio ecológico, reduciendo la dependencia de productos químicos y fortaleciendo la sostenibilidad agrícola.

    .row.align-items-center.justify-content-center
      .col-8.col-sm-6.col-xl-4
        figure
          img.mb-4.mb-xl-0(src='@/assets/curso/temas/tema7/8.png', alt='Imagen ilustrativa' data-aos='fade-down')
      .col-xl-8
        TabsA.color-acento-botones
          .tarjeta.bg-palmera.p-4.pt-5(titulo="Compost")
            h5.mb-4 Compost
            p Resultado de la descomposición aeróbica de residuos orgánicos vegetales y animales, rico en materia orgánica estable.

          .tarjeta.bg-palmera.p-4.pt-5(titulo="Estiércol compostado")
            h4.mb-4 Estiércol compostado
            p Excretas animales tratadas, que aportan nitrógeno, fósforo y microorganismos benéficos.

          .tarjeta.bg-palmera.p-4.pt-5(titulo="Humus de lombriz")
            h4.mb-4 Humus de lombriz
            p Obtenido de la acción de lombrices en procesos de vermicompostaje, con alta disponibilidad de nutrientes y microorganismos vivos.

          .tarjeta.bg-palmera.p-4.pt-5(titulo="Abonos verdes")
            h5.mb-4 Abonos verdes
            p Cultivos (como leguminosas) que se incorporan al suelo para fijar nitrógeno y mejorar la estructura del terreno.

          .tarjeta.bg-palmera.p-4.pt-5(titulo="Biofertilizantes")
            h4.mb-4 Biofertilizantes
            p insumos biológicos basados en microorganismos (ej. <em>Rhizobium, Azotobacter</em>, micorrizas) que mejoran la disponibilidad de nutrientes y la salud del suelo.


</template>

<script>
export default {
  name: 'Tema7',
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
