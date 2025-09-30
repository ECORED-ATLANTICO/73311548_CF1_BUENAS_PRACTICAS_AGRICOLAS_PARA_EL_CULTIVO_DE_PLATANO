<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ventajas y desventajas de la implementación de las BPA

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-gradiente
          p.mb-0 La implementación de las Buenas Prácticas Agrícolas (BPA) representa una estrategia clave para fortalecer la inocuidad, la sostenibilidad y la competitividad en el sector agrícola. Sin embargo, aunque ofrecen múltiples beneficios en términos de calidad, acceso a mercados y protección ambiental, también implican ciertos retos y limitaciones que deben ser considerados por los productores.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4.z-2
          h5 Tabla 1.
          span Ventajas y desventajas de las BPA

        .tabla-a.color-secundario.z-2.mb-4.mb-lg-5
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead
              tr(style="background-color: #ECEEF1;")
                th Ventajas
                th Desventajas
            tbody
              tr
                td Garantizan seguridad alimentaria, al ofrecer productos libres de contaminantes.
                td Requieren altos costos iniciales en infraestructura, certificaciones y tecnologías.
              tr(style="background-color: #E8F5F5;")
                td Facilitan el acceso a mercados internacionales con exigencias de calidad.
                td Generan complejidad administrativa debido a la necesidad de registros y auditorías.
              tr
                td Promueven la protección ambiental, con un uso racional de recursos y reducción de impactos negativos.
                td Existe resistencia al cambio en pequeños productores por desconocimiento o limitaciones económicas.
              tr(style="background-color: #E8F5F5;")
                td Mejoran la trazabilidad y confianza en los consumidores al documentar los procesos.
                td Mantener estándares de forma continua exige disciplina, seguimiento y recursos permanentes.
              tr
                td Impulsan el bienestar laboral, con capacitación y condiciones de trabajo seguras.
                td Pueden generar desigualdades entre productores grandes y pequeños en capacidad de implementación.


</template>

<script>
export default {
  name: 'Tema4',
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
