export default {
  global: {
    Name:
      'Generalidades de las prácticas agrícolas para el cultivo del plátano. ',
    Description:
      'Las prácticas agrícolas para el cultivo del plátano son un conjunto de técnicas y métodos utilizados para cultivar, cuidar y cosechar esta planta de manera eficiente y sostenible. Estas prácticas incluyen la selección adecuada del terreno, la preparación del suelo, la siembra de hijuelos, el riego, la fertilización, el control de plagas y enfermedades, la poda y el manejo postcosecha. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de las buenas prácticas agrícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'NTC 5400',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calidad en el sector agrícola',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Inocuidad en el plátano y protección sanitaria',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ventajas y desventajas de la implementación de las BPA',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad y bienestar social del trabajador',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Requisitos para la implementación de las BPA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Instalaciones',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Almacenamiento de los insumos agrícolas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Equipos, utensilios y herramientas',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Agua, suelo y semillas',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Materias primas e insumos agrícolas',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Agroquímicos y abonos orgánicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Plan de manejo ambiental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Generalidades de las prácticas agrícolas para el cultivo del plátano',
      referencia: 'Ecosistema recursos SENA [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=sFjg8f_ehb0&t=2s&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Guía práctica para el cultivo del plátano.',
      referencia: 'Biblioteca Digital Agropecuaria de Colombia',
      tipo: 'Artículo',
      link:
        'https://repository.agrosavia.co/handle/20.500.12324/11689?utm_source=chatgpt.com',
    },
  ],
  glosario: [
    {
      termino: 'Agroquímicos',
      significado:
        'Son productos de origen químico diseñados para apoyar la producción agrícola, ya sea controlando plagas, enfermedades y malezas o mejorando la fertilidad del suelo y el rendimiento de los cultivos. Incluyen fertilizantes, insecticidas, fungicidas y herbicidas.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Es el conjunto de medidas, normas y prácticas destinadas a prevenir riesgos biológicos que puedan afectar la salud de los trabajadores, los cultivos, ambiente. En agricultura, la bioseguridad se aplica mediante controles que reducen la entrada y propagación de plagas, enfermedades o contaminantes.',
    },
    {
      termino: 'Certificaciones de calidad',
      significado:
        'Son reconocimientos otorgados por entidades nacionales o internacionales que verifican que un producto, proceso o servicio cumple con estándares establecidos de calidad, inocuidad, sostenibilidad o responsabilidad social. Funcionan como una garantía ante consumidores y mercados, y facilitan la apertura comercial. En el sector agrícola y en cultivos como el plátano, estas certificaciones demuestran que se aplican prácticas adecuadas en el manejo de suelos, agua, insumos, protección sanitaria y bienestar del trabajador.',
    },
    {
      termino: '<em>Codex alimentarius</em>',
      significado:
        'Es un conjunto de normas, directrices y códigos de práctica elaborados por la Comisión del <em>Codex alimentarius</em>, creada en 1963 por la FAO y la OMS, con el fin de proteger la salud de los consumidores y garantizar prácticas justas en el comercio de alimentos. En la agricultura, el <em>Codex alimentarius</em> establece parámetros internacionales sobre inocuidad, límites máximos de residuos de plaguicidas, higiene en la producción y procesamiento, así como estándares de calidad.',
    },
    {
      termino: 'Coliformes',
      significado:
        'Son un grupo de bacterias que se encuentran comúnmente en el ambiente, el suelo, la vegetación y en el intestino de animales y humanos. Se utilizan como indicadores de contaminación fecal y de calidad del agua y los alimentos, ya que su presencia en niveles altos puede evidenciar riesgos sanitarios.',
    },
    {
      termino: 'Cormos',
      significado:
        'Son estructuras subterráneas engrosadas que funcionan como órganos de reserva y reproducción vegetativa en plantas como el plátano y el banano. Tienen una apariencia similar a un tallo corto y grueso, del cual surgen raíces y brotes (hijos o retoños) que permiten la propagación del cultivo.',
    },
    {
      termino: 'Cultivo',
      significado:
        'Este cultivo implica una serie de prácticas que incluyen la selección del terreno adecuado, la preparación del suelo, la siembra de hijuelos, el riego, la fertilización, el control de plagas y enfermedades, y la cosecha de los frutos.',
    },
    {
      termino: 'Hijuelos',
      significado:
        'Son los brotes laterales que nacen alrededor del cormo principal de la planta de plátano o banano. Estos hijuelos se utilizan como material de propagación vegetativa para establecer nuevas plantas, ya que poseen las mismas características genéticas de la planta madre.',
    },
    {
      termino: 'Manejo integrado de plagas',
      significado:
        'Es una estrategia agrícola que combina diferentes métodos de control biológicos, culturales, mecánicos y químicos, para mantener las poblaciones de plagas en niveles que no causen daños económicos al cultivo, reduciendo al mismo tiempo los riesgos para la salud humana y el medio ambiente.',
    },
    {
      termino: 'Nutrientes',
      significado:
        'Los nutrientes del plátano son los componentes esenciales que contribuyen a su valor nutricional y que son beneficiosos para la salud humana.',
    },
    {
      termino: 'Plátano',
      significado:
        'El plátano es una fruta tropical que pertenece al género Musa. Se caracteriza por su forma alargada y curvada, con una piel amarilla, verde o roja, dependiendo de la variedad. El plátano es conocido por su pulpa suave y dulce, que es rica en nutrientes como potasio, fibra y vitaminas.',
    },
    {
      termino: 'Vermicompostaje',
      significado:
        'Es una técnica de producción de abono orgánico mediante la descomposición de residuos orgánicos (restos vegetales, estiércol, residuos de cosecha) a través de la acción de lombrices, principalmente de la especie <em>Eisenia foetida</em> (lombriz roja californiana). El resultado es el humus de lombriz, un fertilizante natural rico en nutrientes y microorganismos benéficos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agrosavia. (s. f.). <em>Capítulo III: Generalidades Buenas Prácticas Agrícolas (BPA)</em>.',
      link:
        'https://editorial.agrosavia.co/index.php/publicaciones/catalog/download/162/147/1122-1?inline=1 editorial.agrosavia.co',
    },
    {
      referencia:
        'Castañeda Sánchez, D. A., Valenzuela Vergara, E., Gilchrist Ramelli, E., & Cano Londoño, N. (2016). <em>Buenas prácticas ambientales en el cultivo del plátano. Medellín, Colombia</em>',
      link: '',
    },
    {
      referencia:
        'Buenas Prácticas Agrícolas para frutas, hierbas aromáticas culinarias y hortalizas frescas (NTC 5400). (2005, 27 de julio). <em>Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC), 2005, 02 de agosto.</em>',
      link: '',
    },
    {
      referencia:
        'FAO. (2011). <em>Buenas Prácticas Agrícolas (BPA): de la teoría a la práctica</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: 'https://www.fao.org/4/a1374s/a1374s02.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2009). <em>Mis buenas prácticas agrícolas: Guía para agroempresarios. Bogotá, Colombia: Autor.</em>',
      link:
        'https://www.ica.gov.co/areas/agricola/servicios/inocuidad-agricola/capacitacion/cartillabpa.aspx',
    },
    {
      referencia:
        'Moreno, J., Candanoza, J. y Olarte, F. (2009). <em>Buenas Prácticas Agrícolas en el de cultivo de plátano de exportación en la región de Urabá</em>. Medellín, Colombia: Comunicaciones Augura.',
      link: '',
    },
    {
      referencia:
        'Revista SENNOVA. (2020). Buenas prácticas agrícolas y normatividad en Colombia: análisis y perspectivas. <em>Información Tecnológica</em>, 31(6), 87-96.',
      link: 'https://revistas.sena.edu.co/index.php/inf_tec/article/view/3642',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yasmín Andreina Maldonado Escobar',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
