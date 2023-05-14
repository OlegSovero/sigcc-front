import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<></>}>
    <Component {...props} />
  </Suspense>
);

const ListExample = Loader(
  lazy(() => import('@features/ExampleModule/features/ListExample'))
);

const RegisterExample = Loader(
  lazy(() => import('@features/ExampleModule/features/ListExample'))
);

const EvaluacionContinuaIndex = Loader(
  lazy(() => import('@features/Modulo3/screens/EvaluacionContinua/Index'))
);

const EvaluacionContinuaHistory = Loader(
  lazy(() => import('@features/Modulo3/screens/EvaluacionContinua/History'))
);

const EvaluacionContinuaCreate = Loader(
  lazy(() => import('@features/Modulo3/screens/EvaluacionContinua/Create'))
);

const EvaluacionContinuaDetail = Loader(
  lazy(() => import('@features/Modulo3/screens/EvaluacionContinua/Detail'))
);

const AscensosCandidatos = Loader(
  lazy(() => import('@features/Modulo3/screens/Ascensos/Candidates'))
);

/** HERE YOU DEFINE ALL THE ROUTES OF THE APP */

const routes: RouteObject[] = [
  {
    path: '',
    element: <Navigate to="/example/list" replace />
  },
  {
    path: 'example',
    children: [
      {
        path: 'list',
        element: <ListExample />
      },
      {
        path: 'register',
        element: <RegisterExample />
      },
    ]
  },
  {
    path: 'modulo0',
    children: [
      {
        path: 'submodulo0',
        children: [
          {
            path: 'list',
            element: <ListExample />
          },
          {
            path: 'register',
            element: <ListExample />
          },
        ]
      },
      {
        path: 'submodulo1',
        children: [
          {
            path: 'list',
            element: <ListExample />
          },
          {
            path: 'register',
            element: <ListExample />
          },
        ]
      },
    ]
  },
  {
    path: 'skillManagement',
    children: [
      {
        path: 'continuousEvaluation',
        children: [
          {
            path: 'index',
            element: <EvaluacionContinuaIndex/>
          },
          {
            path: 'history',
            element: <EvaluacionContinuaHistory/>
          },
          {
            path: 'detail',
            element: (
              <EvaluacionContinuaDetail
                employee={{
                  id: 1,
                  FullName: 'Angela Quispe Ramirez',
                }}
                categories={[
                  { id: 1, name: 'Rendimiento', subcategories: [
                    'Consecución de objetivos',
                    'Calidad del trabajo',
                    'Atención al detalle',
                    'Puntualidad de las entregas',
                    'Gestionar la carga de trabajo y cumplir los plazos'
                  ] },
                  { id: 2, name: 'Habilidades blandas', subcategories: [
                    'Liderazgo',
                    'Comunicación',
                    'Resolución de problemas',
                    'Pensamiento crítico',
                    'Trabajo en equipo'
                  ] },
                  { id: 3, name: 'Conocimientos técnicos', subcategories: [
                    'Capacidad analítica',
                    'Aprendizaje continuo y desarrollo profesional',
                    'Conocimientos técnicos',
                    'Conocimiento del producto',
                    'Resolución de problemas técnicos'
                  ] },
                  { id: 4, name: 'Orientación al cliente', subcategories: [
                    'Respuesta a las consultas y peticiones',
                    'Comprender las necesidades y preferencias',
                    'Resolución eficaz de los problemas',
                    'Mejora continua de los productos o servicios',
                    'Creación y mantenimiento de relaciones positivas',
                  ] },
                  { id: 5, name: 'Creatividad e iniciativa', subcategories: [
                    'Asunción de riesgos',
                    'Mentalidad abierta',
                    'Colaboración',
                    'Feedback',
                    'Nuevas ideas',
                  ] },
                ]}
                projects={[
                  { id: 1, name: 'BLF-KC-0012' },
                  { id: 2, name: 'BLF-KC-0013' },
                  { id: 3, name: 'BLF-KC-0014' },
                  { id: 4, name: 'BLF-KC-0015' },
                  { id: 5, name: 'BLF-KC-0016' },
                ]}
                form={{
                  evaluationCategory: 1,
                  projectId: 2,
                  evaluation: [0,1,2,3,4],
                  additionalComments: 'Todo bien la verdad, sigue así.'
                }}
              />
            ),
          },
          {
            path: 'create',
            element: (
              <EvaluacionContinuaCreate
                employee={{
                  id: 1,
                  FullName: 'Angela Quispe Ramirez',
                }}
                categories={[
                  { id: 1, name: 'Rendimiento', subcategories: [
                    'Consecución de objetivos',
                    'Calidad del trabajo',
                    'Atención al detalle',
                    'Puntualidad de las entregas',
                    'Gestionar la carga de trabajo y cumplir los plazos'
                  ] },
                  { id: 2, name: 'Habilidades blandas', subcategories: [
                    'Liderazgo',
                    'Comunicación',
                    'Resolución de problemas',
                    'Pensamiento crítico',
                    'Trabajo en equipo'
                  ] },
                  { id: 3, name: 'Conocimientos técnicos', subcategories: [
                    'Capacidad analítica',
                    'Aprendizaje continuo y desarrollo profesional',
                    'Conocimientos técnicos',
                    'Conocimiento del producto',
                    'Resolución de problemas técnicos'
                  ] },
                  { id: 4, name: 'Orientación al cliente', subcategories: [
                    'Respuesta a las consultas y peticiones',
                    'Comprender las necesidades y preferencias',
                    'Resolución eficaz de los problemas',
                    'Mejora continua de los productos o servicios',
                    'Creación y mantenimiento de relaciones positivas',
                  ] },
                  { id: 5, name: 'Creatividad e iniciativa', subcategories: [
                    'Asunción de riesgos',
                    'Mentalidad abierta',
                    'Colaboración',
                    'Feedback',
                    'Nuevas ideas',
                  ] },
                ]}
                projects={[
                  { id: 1, name: 'BLF-KC-0012' },
                  { id: 2, name: 'BLF-KC-0013' },
                  { id: 3, name: 'BLF-KC-0014' },
                  { id: 4, name: 'BLF-KC-0015' },
                  { id: 5, name: 'BLF-KC-0016' },
                ]}
              />
            ),
          },
        ],
      },
      {
        path: 'promotions',
        children: [
          {
            path: 'candidates',
            element: <AscensosCandidatos promotionPosition='UX/UI Designer'/>
          },
        ]
      }
    ]
  }
]

export default routes;