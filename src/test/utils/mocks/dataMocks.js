export const initialContextFilters = {
  filters: {
    version: '1.0.0',
    language: 'es-CO',
    filters: [
      {
        label: 'Categoría(s) laboral(es)',
        field: 'sectors_id',
        type: 'EQUAL',
        renderType: 'MULTI_SELECT',
        repository: {
          type: 'storage',
          defaultFilter: {
            active: true,
          },
          defaultOrder: {
            name: 'ASC',
          },
          source: 'sectors',
          fieldsAlias: {
            id: 'id',
            label: 'name',
          },
        },
        values: [
          {
            id: 1,
            label: 'Administración y oficina',
          },
          {
            id: 16,
            label: 'Bodega, logística y transporte',
          },
          {
            id: 26,
            label: 'Call center, tele mercadeo, BPO y afines',
          },
          {
            id: 27,
            label: 'Compras y comercio exterior',
          },
          {
            id: 31,
            label: 'Comunicación y Periodismo',
          },
          {
            id: 21,
            label: 'Construcción e infraestructura',
          },
          {
            id: 4,
            label: 'Contabilidad, finanzas, impuestos y afines',
          },
          {
            id: 5,
            label: 'Deporte y recreación',
          },
          {
            id: 6,
            label: 'Derecho, Asesoría y afines',
          },
          {
            id: 28,
            label: 'Dirección y Gerencia',
          },
          {
            id: 7,
            label: 'Diseño, arquitectura, artes gráficas y afines',
          },
          {
            id: 22,
            label: 'Docencia, educación, licenciaturas y afines',
          },
          {
            id: 8,
            label: 'Economía, estadística, matemáticas y afines',
          },
          {
            id: 9,
            label: 'Gastronomía, bebidas/alimentos y restaurantes',
          },
          {
            id: 10,
            label: 'Hotelería y turismo',
          },
          {
            id: 11,
            label: 'Idiomas y traducción',
          },
          {
            id: 12,
            label: 'Industria de la aviación y afines',
          },
          {
            id: 14,
            label: 'Ingenierías',
          },
          {
            id: 15,
            label: 'Inversiones y mercado bursátil',
          },
          {
            id: 29,
            label: 'Investigación y Calidad',
          },
          {
            id: 30,
            label: 'Mantenimiento y Reparaciones',
          },
          {
            id: 17,
            label: 'Mecánica y sector automotriz',
          },
          {
            id: 18,
            label: 'Medicina, sector de la salud y Ciencias',
          },
          {
            id: 3,
            label: 'Mercadeo y Publicidad',
          },
          {
            id: 19,
            label: 'Otras',
          },
          {
            id: 20,
            label: 'Política, ONGS, sector Gobierno y fundaciones',
          },
          {
            id: 13,
            label: 'Producción, Operarios y Manufactura',
          },
          {
            id: 2,
            label: 'Recursos Humanos',
          },
          {
            id: 24,
            label: 'Servicio al cliente y afines',
          },
          {
            id: 32,
            label: 'Servicios generales, Aseo y Seguridad',
          },
          {
            id: 23,
            label: 'Software, informática y telecomunicaciones',
          },
          {
            id: 34,
            label: 'Transportador de Energía',
          },
          {
            id: 25,
            label: 'Ventas',
          },
          {
            id: 33,
            label: 'Zoología, Veterinario y sector Agro Industrial',
          },
        ],
      },
      {
        label: 'Nivel de estudios',
        field: 'education_level_id',
        type: 'EQUAL',
        renderType: 'SELECTION_LIST',
        repository: {
          type: 'storage',
          defaultFilter: {},
          defaultOrder: {
            order: 'ASC',
          },
          source: 'education_levels',
          fieldsAlias: {
            id: 'id',
            label: 'name',
          },
        },
        values: [
          {
            id: 8,
            label: 'Básica primaria',
          },
          {
            id: 7,
            label: 'Bachillerato (grados 6°, 7° u 8°)',
          },
          {
            id: 6,
            label: 'Bachillerato (grados 9°, 10° y 11°)',
          },
          {
            id: 1,
            label: 'Bachillerato completo',
          },
          {
            id: 2,
            label: 'Técnico',
          },
          {
            id: 3,
            label: 'Tecnólogo',
          },
          {
            id: 4,
            label: 'Profesional',
          },
          {
            id: 5,
            label: 'Especialización/ Maestría',
          },
          {
            id: 9,
            label: 'Doctorado',
          },
        ],
      },
      {
        label: 'Aspiración salarial mínima',
        field: 'salary',
        type: 'RANGE',
        renderType: 'SELECTION_LIST',
        repository: {
          type: 'valueList',
          defaultFilter: {},
          defaultOrder: {},
          source: null,
          fieldsAlias: null,
        },
        values: [
          {
            from: null,
            to: 1200000,
            id: 'BK-01',
            label: 'Hasta $1.200.000',
          },
          {
            from: 1200000,
            to: 1700000,
            id: 'BK-02',
            label: '$1.200.000 a $1.700.000',
          },
          {
            from: 1700000,
            to: 2500000,
            id: 'BK-03',
            label: '$1700000 a $2.500.000',
          },
          {
            from: 2500000,
            to: 3500000,
            id: 'BK-04',
            label: '$2.500.000 a $3.500.000',
          },
          {
            from: 3500000,
            to: 5000000,
            id: 'BK-05',
            label: '$3.500.000 a $5.000.000',
          },
          {
            from: 5000000,
            to: 7000000,
            id: 'BK-06',
            label: '$5.000.000 a $7.000.000',
          },
        ],
      },
      {
        label: 'Experiencia total',
        field: 'years_experience',
        type: 'RANGE',
        renderType: 'SELECTION_LIST',
        repository: {
          type: 'valueList',
          defaultFilter: {},
          defaultOrder: {},
          source: null,
          fieldsAlias: null,
        },
        values: [
          {
            from: null,
            to: 0,
            id: 'BK-01',
            label: 'Sin experiencia',
          },
          {
            from: 1,
            to: 2,
            id: 'BK-02',
            label: '1 a 2 años',
          },
          {
            from: 2,
            to: 4,
            id: 'BK-03',
            label: '1 a 4 años',
          },
          {
            from: 4,
            to: 7,
            id: 'BK-04',
            label: '4 a 7 años',
          },
          {
            from: 7,
            to: 11,
            id: 'BK-04',
            label: '7 a 11 años',
          },
          {
            from: 11,
            to: null,
            id: 'BK-05',
            label: 'más de 11 años',
          },
        ],
      },
      {
        label: 'Nacionalidad',
        field: 'country_birth',
        type: 'EQUAL',
        renderType: 'SEARCH',
        repository: {
          type: 'endPoint',
          defaultFilter: {},
          defaultOrder: {},
          source: 'v1/country/search',
          fieldsAlias: null,
        },
        values: [],
      },
      {
        label: 'Idiomas',
        field: 'languages_ids',
        type: 'EQUAL',
        renderType: 'SEARCH',
        repository: {
          type: 'endPoint',
          defaultFilter: {},
          defaultOrder: {},
          source: 'v1/language/search',
          fieldsAlias: null,
        },
        values: [],
      },
      {
        label: 'Perfil completado al',
        field: 'profile_percent',
        type: 'RANGE',
        renderType: 'SELECTION_LIST',
        repository: {
          type: 'valueList',
          defaultFilter: {},
          defaultOrder: {},
          source: null,
          fieldsAlias: null,
        },
        values: [
          {
            from: 80,
            to: 100,
            id: 'BK-01',
            label: '80 a 100 %',
          },
          {
            from: 60,
            to: 80,
            id: 'BK-02',
            label: '60 a 80 %',
          },
          {
            from: 40,
            to: 60,
            id: 'BK-03',
            label: '40 a 60 %',
          },
          {
            from: 20,
            to: 40,
            id: 'BK-04',
            label: '20 a 40 %',
          },
          {
            from: 10,
            to: 20,
            id: 'BK-05',
            label: '10 a 20 %',
          },
        ],
      },
      {
        label: 'Edad',
        field: 'birthdate',
        type: 'RANGE',
        renderType: 'SELECTION_LIST',
        repository: {
          type: 'valueList',
          defaultFilter: {},
          defaultOrder: {},
          source: null,
          fieldsAlias: null,
        },
        values: [
          {
            from: 'now-17y/y',
            to: 'now-17y/y',
            id: 'BK-01',
            label: 'Menor de edad',
          },
          {
            from: 'now-24y/y',
            to: 'now-18y/y',
            id: 'BK-02',
            label: '18 a 24',
          },
          {
            from: 'now-30y/y',
            to: 'now-25y/y',
            id: 'BK-03',
            label: '24 a 30',
          },
          {
            from: 'now-38y/y',
            to: 'now-31y/y',
            id: 'BK-04',
            label: '30 a 38',
          },
          {
            from: 'now-48y/y',
            to: 'now-39y/y',
            id: 'BK-05',
            label: '38 a 48',
          },
          {
            from: null,
            to: 'now-49y/y',
            id: 'BK-06',
            label: 'Más de 48',
          },
        ],
      },
      {
        label: 'Disponibilidad horaria',
        field: 'journeys_id',
        type: 'EQUAL',
        renderType: 'SELECTION_LIST',
        repository: {
          type: 'storage',
          defaultFilter: {
            active: true,
          },
          defaultOrder: {
            id: 'ASC',
          },
          source: 'journeys',
          fieldsAlias: {
            id: 'id',
            label: 'name',
          },
        },
        values: [
          {
            id: 1,
            label: 'Tiempo completo',
          },
          {
            id: 2,
            label: 'Medio tiempo',
          },
          {
            id: 3,
            label: 'Por horas',
          },
          {
            id: 4,
            label: 'Jornada diurno',
          },
          {
            id: 5,
            label: 'Jornada nocturna',
          },
          {
            id: 6,
            label: 'Fines de semana',
          },
          {
            id: 7,
            label: 'Temporada fin de año',
          },
          {
            id: 8,
            label: 'Otras temporadas',
          },
        ],
      },
      {
        label: 'Género',
        field: 'gender',
        type: 'EQUAL',
        renderType: 'SELECTION_LIST',
        repository: {
          type: 'valueList',
          defaultFilter: {},
          defaultOrder: {},
          source: null,
          fieldsAlias: null,
        },
        values: [
          {
            id: 'male',
            label: 'Masculino',
          },
          {
            id: 'female',
            label: 'Femenino',
          },
          {
            id: 'unknown',
            label: 'Perfiero no decirlo',
          },
          {
            id: 'other_gender',
            label: 'Otro género',
          },
          {
            id: '',
            label: 'Sin género indicado',
          },
        ],
      },
    ],
    order: {
      mobile: {
        default: {
          field: 'profile_percent',
          order: 'DESC',
        },
        fields: [
          {
            field: 'profile_percent',
            label: 'Completitud del perfil',
          },
          {
            field: 'birthdate',
            label: 'Edad',
          },
          {
            field: 'cv_updated_at',
            label: 'Actualización del perfil',
          },
          {
            field: 'salary',
            label: 'Salario',
          },
        ],
      },
      desktop: {
        default: {
          field: 'profile_percent',
          order: 'DESC',
        },
        fields: [
          {
            field: 'profile_percent',
            label: 'Completitud del perfil',
          },
          {
            field: 'birthdate',
            label: 'Edad',
          },
          {
            field: 'cv_updated_at',
            label: 'Actualización del perfil',
          },
          {
            field: 'salary',
            label: 'Salario',
          },
        ],
      },
    },
    pagination: {
      mobile: {
        defaultPageSize: 10,
        pageSizeOptions: [10, 20, 30],
      },
      desktop: {
        defaultPageSize: 20,
        pageSizeOptions: [20, 30, 60],
      },
    },
  },
  filter: {
    filters: {
      sectors_id: [],
      education_level_id: [8, 7],
      salary: [],
      years_experience: [],
      country_birth: [],
      languages_ids: [],
      profile_percent: [],
      birthdate: [],
      journeys_id: [],
      gender: [],
    },
    order: {
      field: 'profile_percent',
      order: 'DESC',
    },
    paginator: {
      page: 1,
      pageSize: 20,
    },
    device: 'desktop',
  },
  setFilters: () => {},
}
