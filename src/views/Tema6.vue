<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Requisitos para la implementación de las BPA
    .bloque-texto-g.color-secundario-s10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La implementación de las Buenas Prácticas Agrícolas (BPA) no se limita únicamente al cumplimiento de normas técnicas, sino que constituye un proceso integral que involucra aspectos productivos, ambientales, sociales y administrativos en la gestión agrícola. Estos requisitos buscan asegurar que los productos obtenidos sean inocuos, de calidad, sostenibles y competitivos en el mercado. Para ello, se deben considerar elementos clave como la adecuación y mantenimiento de instalaciones, la correcta gestión de insumos y equipos, el uso responsable del agua y del suelo, la selección adecuada de semillas y el manejo eficiente de materias primas. En conjunto, estas condiciones permiten optimizar la productividad, proteger la salud de los consumidores, garantizar la seguridad de los trabajadores y mitigar los impactos negativos sobre el medio ambiente.

    Separador

    #t_6_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 6.1 Instalaciones

    p.mb-5 Las instalaciones agrícolas son un componente esencial en la aplicación de las BPA, ya que permiten garantizar la inocuidad del producto, la seguridad de los trabajadores y la eficiencia del proceso productivo. La normatividad, incluida la NTC 5400 y estándares internacionales, establece que estas deben diseñarse, ubicarse y mantenerse bajo criterios técnicos, higiénicos y ambientales. Los aspectos a tener en cuenta son los siguientes:

    .tarjeta.bg-color-secundario-s5.p-4.pt-xl-5.mb-5
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema6/2.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Ubicación y diseño
            ul.checklist
              li Las instalaciones deben situarse en lugares seguros, lejos de fuentes de contaminación como basureros, aguas residuales, zonas industriales o áreas con alta aplicación de plaguicidas.
              li El diseño debe contemplar áreas diferenciadas para almacenamiento de insumos, manipulación de cosecha, oficinas y espacios de descanso, evitando el cruce entre actividades limpias y contaminantes.
              li Los accesos deben estar controlados y señalizados, permitiendo la identificación clara de cada zona

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema6/3.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Infraestructura
            ul.checklist
              li Pisos y paredes: resistentes, lavables, antideslizantes y fáciles de desinfectar.
              li Cubiertas y techos: impermeables, con sistemas de drenaje adecuados que eviten filtraciones de agua.
              li Ventilación e iluminación: natural o artificial suficiente para garantizar un ambiente seguro e higiénico.
              li Drenajes: deben facilitar la evacuación de aguas residuales sin riesgo de estancamiento ni contaminación.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema6/4.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Áreas funcionales mínimas
            ul.checklist
              li Almacenamiento de insumos agrícolas: bodegas ventiladas, con señalización de riesgos y estanterías elevadas del suelo.
              li Almacenamiento de producto cosechado: lugares limpios, secos y protegidos de plagas.
              li Áreas de empaque y selección: espacios diseñados para manipular el producto en condiciones de higiene.
              li Servicios sanitarios y agua potable: obligatorios y accesibles para los trabajadores.
              li Zonas de descanso y bienestar: lugares destinados a alimentación y reposo, alejados de los insumos químicos.
        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema6/5.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Bioseguridad e inocuidad
            ul.checklist
              li Contar con puntos de lavado de manos y estaciones de higiene.
              li Instalación de sistemas de control de plagas en bodegas y áreas de almacenamiento.
              li Protocolos de limpieza y desinfección periódica en todas las instalaciones
        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema6/6.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Sostenibilidad ambiental
            ul.checklist
              li Manejo adecuado de residuos sólidos y líquidos mediante áreas específicas para su disposición.
              li Implementación de sistemas de ahorro energético e hídrico.
              li Uso de materiales locales y sostenibles en las construcciones cuando sea posible.

    Separador
    #t_6_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 6.2 Almacenamiento de los insumos agrícolas    

    .bloque-texto-g.color-secundario-s10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/7.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El almacenamiento adecuado de los insumos agrícolas constituye un requisito esencial para la implementación de las BPA, ya que asegura la eficacia de los productos, la inocuidad de los alimentos, la salud de los trabajadores y la protección del medio ambiente. Una gestión inadecuada de fertilizantes, plaguicidas y otros insumos puede generar riesgos de contaminación, accidentes laborales y pérdidas económicas.

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Componentes del almacenamiento de los insumos agrícolas

    TabsB.color-acento-contenido
      .py-4.py-md-5.bg-color-terciario-t10(titulo="Condiciones de la bodega" :icono="require('@/assets/curso/temas/tema6/8.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-7.mb-4.mb-md-0
            h4 Condiciones de la bodega
            ul.checklist
              li Ubicación de áreas específicas, separadas de los cultivos, área de empaque y zona de descanso de los trabajadores.
              li El piso debe ser firme y fácil de limpiar.
              li Las paredes y techos deben proteger de la humedad.
              li Contar con ventilación natural o forzada que evite acumulaciones de vapores tóxicos.
          .col-md-4.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema6/13.png', alt='Imagen decorativa')

      .py-4.py-md-5.bg-color-terciario-t10(titulo="Organización interna" :icono="require('@/assets/curso/temas/tema6/9.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-7.mb-4.mb-md-0
            h4 Organización interna
            ul.checklist
              li Los insumos deben almacenarse en estanterías resistentes, nunca en contacto directo con el suelo.
              li Se recomienda la separación por categorías: plaguicidas fertilizantes, bio insumos y equipos de aplicación.
              li Los productos deben estar identificados y etiquetados.
              li Implementar el método PEPS (primero en entrar, primero en salir) para evitar vencimiento de productos.
          .col-md-4.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema6/14.png', alt='Imagen decorativa')

      .py-4.py-md-5.bg-color-terciario-t10(titulo="Seguridad y bioseguridad" :icono="require('@/assets/curso/temas/tema6/10.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-7.mb-4.mb-md-0
            h4 Seguridad y bioseguridad
            ul.checklist
              li La bodega debe estar cerrada con llave y el acceso  debe ser restringido.
              li Contar con señalización visible de riesgo químico, inflamable o tóxico.
              li Disponer de equipos de protección personal para la manipulación de insumos.
              li Tener un botiquín de primeros auxilios y un kit para derrames.
              li Contar con extintores y protocolos de emergencia visibles.
          .col-md-4.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema6/15.png', alt='Imagen decorativa')

      .py-4.py-md-5.bg-color-terciario-t10(titulo="Manejo de residuos y envases" :icono="require('@/assets/curso/temas/tema6/11.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-7.mb-4.mb-md-0
            h4 Manejo de residuos y envases
            ul.checklist
              li Los envases vacíos deben enjuagarse, perforarse y almacenarse en contenedores específicos.
              li Nunca deben desecharse en fuentes de aguas, y no mezclarse con basura con basura común.
              li Debe existir un convenio o plan con gestores autorizados para la recolección de residuos peligrosos.
          .col-md-4.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema6/16.png', alt='Imagen decorativa')

      .py-4.py-md-5.bg-color-terciario-t10(titulo="Documentación y trazabilidad" :icono="require('@/assets/curso/temas/tema6/12.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-7.mb-4.mb-md-0
            h4 Documentación y trazabilidad
            ul.checklist
              li Mantener registros actualizados del inventario de insumos: cantidades fechas de ingreso, uso y responsable.
              li Documentar la aplicación en campo: lote, dosis, trabajador que lo aplico y condiciones climáticas.
              li Los registros facilitan auditorias, certificaciones y garantizan la trazabilidad en toda la cadena de producción.
          .col-md-4.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema6/17.png', alt='Imagen decorativa')










</template>

<script>
export default {
  name: 'Tema6',
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
