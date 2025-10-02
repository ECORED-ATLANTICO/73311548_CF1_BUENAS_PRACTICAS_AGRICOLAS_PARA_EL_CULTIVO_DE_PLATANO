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
      .px-3.py-4.py-md-5.bg-color-terciario-t10(titulo="Condiciones de la bodega" :icono="require('@/assets/curso/temas/tema6/8.svg')")
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

      .px-3.py-4.py-md-5.bg-color-terciario-t10(titulo="Organización interna" :icono="require('@/assets/curso/temas/tema6/9.svg')")
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

      .px-3.py-4.py-md-5.bg-color-terciario-t10(titulo="Seguridad y bioseguridad" :icono="require('@/assets/curso/temas/tema6/10.svg')")
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

      .px-3.py-4.py-md-5.bg-color-terciario-t10(titulo="Manejo de residuos y envases" :icono="require('@/assets/curso/temas/tema6/11.svg')")
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

      .px-3.py-4.py-md-5.bg-color-terciario-t10(titulo="Documentación y trazabilidad" :icono="require('@/assets/curso/temas/tema6/12.svg')")
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

    Separador
    #t_6_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 6.3 Equipos, utensilios y herramientas 

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema6/18.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-terciario-t20
          p.mb-0 El uso adecuado de equipos, utensilios y herramientas constituye un pilar fundamental en la implementación de las BPA, pues de su correcta selección, mantenimiento y manipulación depende la eficiencia de las labores agrícolas, la seguridad del trabajador y la inocuidad del producto. Una gestión deficiente de estos recursos puede provocar accidentes, contaminación cruzada, pérdidas económicas y afectación en la calidad del plátano.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--primario-p20")
      .row.justify-content-center.align-items-center(titulo="Selección adecuada de equipos y herramientas")
        .col-lg-7
          ul.checklist
            li Deben ser apropiados para el tipo de labor agrícola, evitando improvisaciones que pongan en riesgo al trabajador o al cultivo.
            li Se recomienda emplear herramientas certificadas y de buena calidad, que garanticen resistencia y durabilidad.
            li En el caso de equipos motorizados (fumigadoras, motosierras, bombas de riego, etc.), estos deben cumplir con las normas de seguridad industrial.
        .col-sm-8.col-lg-5.col-xl-4
          figure
            img(src='@/assets/curso/temas/tema6/19.png', alt='Imagen de acompañamiento')
      .row.justify-content-center.align-items-center(titulo="Mantenimiento preventivo y correctivo")
        .col-lg-7
          ul.checklist
            li Todo equipo y herramienta debe someterse a planes de mantenimiento periódico (lubricación, afilado, limpieza, calibración).
            li El mantenimiento preventivo reduce la probabilidad de fallas durante las labores agrícolas y alarga la vida útil del equipo.
            li Cuando se detecte un daño, debe aplicarse un mantenimiento correctivo inmediato para evitar riesgos de accidentes.
        .col-sm-8.col-lg-5.col-xl-4
          figure
            img(src='@/assets/curso/temas/tema6/20.png', alt='Imagen de acompañamiento')
      .row.justify-content-center.align-items-center(titulo="Higiene y limpieza")
        .col-lg-7
          ul.checklist
            li Las herramientas y utensilios en contacto con el plátano o con insumos agrícolas deben limpiarse y desinfectarse antes y después de cada uso.
            li Es indispensable evitar la contaminación cruzada entre insumos químicos y productos destinados al consumo humano.
            li El almacenamiento debe hacerse en lugares específicos, ventilados y libres de humedad para evitar corrosión.
        .col-sm-8.col-lg-5.col-xl-4
          figure
            img(src='@/assets/curso/temas/tema6/21.png', alt='Imagen de acompañamiento')
      .row.justify-content-center.align-items-center(titulo="Seguridad en el uso")
        .col-lg-7
          ul.checklist
            li Los trabajadores deben recibir capacitación en el uso seguro de cada herramienta o equipo.
            li Es obligatorio el uso de equipos de protección personal (EPP) como guantes, gafas, cascos, botas de seguridad y protectores auditivos en el caso de maquinaria ruidosa.
            li Se deben establecer protocolos claros de operación, transporte y almacenamiento de los equipos.
        .col-sm-8.col-lg-5.col-xl-4
          figure
            img(src='@/assets/curso/temas/tema6/22.png', alt='Imagen de acompañamiento')
      .row.justify-content-center.align-items-center(titulo="Registro y control")
        .col-lg-7
          ul.checklist
            li Es recomendable llevar inventarios de equipos y herramientas, con registro de fechas de mantenimiento y asignación a los trabajadores.
            li En equipos de aplicación de agroquímicos, deben documentarse las calibraciones realizadas y el personal autorizado para su uso.
            li Estos registros son exigidos en auditorías de certificaciones como NTC 5400, pues demuestran trazabilidad y responsabilidad en el manejo de recursos.
        .col-sm-8.col-lg-5.col-xl-4
          figure
            img(src='@/assets/curso/temas/tema6/22.png', alt='Imagen de acompañamiento')

    Separador
    #t_6_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 6.4 Agua, suelo y semillas

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11
        p.mb-0 El agua, el suelo y las semillas son recursos fundamentales en la producción agrícola, pues constituyen la base para garantizar el rendimiento, la inocuidad y la sostenibilidad del cultivo de plátano. La implementación de BPA exige que estos elementos se manejen con criterios técnicos, ambientales y sanitarios que aseguren la calidad del producto y la protección de los ecosistemas.
      .d-none.d-lg-block.col-lg-1
        figure
          img.z-2(src="@/assets/curso/temas/tema6/24.svg", alt="Imagen decorativa" data-aos="fade-up")

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Agua

    .row.justify-content-center.mb-4
      .col-lg-10
        .p-2.subtitle.text-white.text-center
          p.mb-0.fw-bold El agua utilizada en la agricultura debe cumplir con estándares de calidad que eviten la contaminación del cultivo y del producto final.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema6/25.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.bg-color-secundario-s20
            h4.mb-4 Fuente segura
            p Debe provenir de sistemas de abastecimiento limpios y protegidos, evitando contacto con aguas residuales o contaminadas.

      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema6/26.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.bg-color-terciario-t20
            h4.mb-4 Monitoreo de calidad
            p Análisis periódicos de parámetros fisicoquímicos y microbiológicos (pH, coliformes, turbidez, metales pesados).

      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema6/27.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.bg-color-secundario-s20
            h4.mb-4 Uso eficiente
            p Implementación de sistemas de riego tecnificado (goteo, aspersión) para reducir pérdidas por evaporación y escorrentía.

      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema6/28.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.bg-color-terciario-t20
            h4.mb-4 Protección de cuerpos de agua
            p Mantener franjas de amortiguación y no aplicar agroquímicos cerca de ríos, quebradas o nacimientos.

    h4(data-aos='zoom-in-right').mb-5
      span.banana-title Suelo

    .row.justify-content-center.mb-4
      .col-lg-10
        .p-2.subtitle.text-white.text-center
          p.mb-0.fw-bold El suelo es el soporte físico y biológico del cultivo, por lo que su manejo adecuado es determinante para la productividad y sostenibilidad.

    .row.align-items-center.justify-content-center
      .col-8.col-sm-6.col-xl-4
        figure
          img.mb-4.mb-xl-0(src='@/assets/curso/temas/tema6/29.png', alt='Imagen ilustrativa' data-aos='fade-down')
      .col-xl-8
        TabsA.color-acento-contenido
          .tarjeta.bg-palmera.bg-palmera--black.p-4.pt-5(titulo="Análisis de fertilidad")
            .row.align-items-center.pt-lg-4
              .col-8
                p.mb-0 Antes de la siembra, se debe realizar un diagnóstico para identificar pH, nutrientes y necesidades de corrección.
              .col-3
                figure
                  img.w-83(src="@/assets/curso/temas/tema6/30.svg")
          .tarjeta.bg-palmera.bg-palmera--black.p-4.pt-5(titulo="Conservación")
            .row.align-items-center.pt-lg-4
              .col-8
                p.mb-0 Prácticas como rotación de cultivos, siembra de coberturas vivas y barreras contra erosión.
              .col-3
                figure
                  img.w-83(src="@/assets/curso/temas/tema6/31.svg")
          .tarjeta.bg-palmera.bg-palmera--black.p-4.pt-5(titulo="Fertilización balanceada")
            .row.align-items-center.pt-lg-4
              .col-8
                p.mb-0 Aplicación de nutrientes de acuerdo con los resultados de análisis de suelos, evitando excesos que perjudiquen el ambiente.
              .col-3
                figure
                  img.w-83(src="@/assets/curso/temas/tema6/32.svg")
          .tarjeta.bg-palmera.bg-palmera--black.p-4.pt-5(titulo="Manejo de residuos")
            .row.align-items-center.pt-lg-4
              .col-8
                p.mb-0 Incorporación de materia orgánica y desechos de cosecha para mejorar la estructura y la biodiversidad del suelo.
              .col-3
                figure
                  img.w-83(src="@/assets/curso/temas/tema6/33.svg")









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
