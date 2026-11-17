// Plantilla editable. Los ejemplos NO son resultados reales del equipo.
window.DAM_TEAM = [
 {nombre:'Integrante 01',deporte:'Tu deporte o especialidad',bio:'Aquí irá una presentación breve: trayectoria deportiva, intereses y relación con la actividad física.'},
 {nombre:'Integrante 02',deporte:'Tu deporte o especialidad',bio:'Aquí irá una presentación breve: trayectoria deportiva, intereses y relación con la actividad física.'},
 {nombre:'Integrante 03',deporte:'Tu deporte o especialidad',bio:'Aquí irá una presentación breve: trayectoria deportiva, intereses y relación con la actividad física.'},
 {nombre:'Integrante 04',deporte:'Tu deporte o especialidad',bio:'Aquí irá una presentación breve: trayectoria deportiva, intereses y relación con la actividad física.'}
];
const pending='<p class="placeholder">Pendiente de incorporar vuestro contenido real.</p>';
const video='<div class="media-placeholder"><span>▶</span><strong>Vuestro vídeo aparecerá aquí</strong><small>Podremos insertar un vídeo de YouTube sin salir de la página.</small></div>';
const photo='<div class="media-placeholder image-placeholder"><span>▧</span><strong>Fotografía o esquema</strong><small>Añadiremos la imagen y su leyenda cuando la tengáis.</small></div>';
window.DAM_SECTIONS={
 habilidades:[
 ['Presentación de la actividad','Nombre original, intención, habilidad principal y secundarias, etapa evolutiva, ámbito, participantes y objetivos específicos. '+pending],
 ['Diseño y desarrollo','Descripción de la tarea nuclear, dominios de acción motriz, materiales en unidades, espacio, seguridad, inclusión y criterios pedagógicos. '+pending+photo],
 ['Variables y progresiones','Variable espaciotemporal, cognitivomotriz y de ejecución: subvariables, cambios propuestos y progresión de dificultad. '+pending],
 ['Vídeo y representación gráfica','Grabación de la tarea nuclear y sus variables, más representación gráfica con leyenda. '+video+photo],
 ['Aplicación y valoración','Valoración de la aplicación real y con compañeros: aspectos que mantener, aspectos que mejorar y propuestas concretas. '+pending]
 ],
 coordinacion:[
 ['Qué es la coordinación','Breve explicación teórica y tipos de coordinación relacionados con vuestra prueba. '+pending],
 ['Presentación del test','Objetivos, participantes, etapa, ámbito, materiales, espacio y organización. '+pending],
 ['Ejercicios y variables','Descripción de cada ejercicio, tipo de coordinación, variables, subvariables y criterios pedagógicos. '+pending+photo],
 ['Vídeo y resultados','Vídeo de aplicación, tabla de observación y resultados obtenidos. '+video],
 ['Valoración final','Qué funcionó, dificultades detectadas y propuestas de mejora. '+pending]
 ],
 equilibrio:[
 ['Conceptos básicos','Breve introducción al equilibrio estático y dinámico y a las variables que se trabajan. '+pending],
 ['Descripción de la tarea','Objetivos, participantes, material, espacio, instrucciones y seguridad. '+pending],
 ['Ejercicios y progresiones','Desarrollo de los ejercicios y adaptaciones de dificultad. '+pending+photo],
 ['Vídeo y evidencias','Grabación y material gráfico de la aplicación. '+video],
 ['Valoración de la aplicación','Observaciones, resultados y mejoras. '+pending]
 ],
 lateralidad:[
 ['Qué es la lateralidad','Concepto, tipos y explicación breve del test utilizado. '+pending],
 ['Procedimiento del test','Pruebas de mano, pie, ojo y oído, materiales e instrucciones. '+pending],
 ['Registro de resultados','Tablas, fotografías y observaciones de la aplicación. '+pending+photo],
 ['Análisis y conclusiones','Interpretación de los resultados y reflexión final, sin anticipar conclusiones. '+pending]
 ],
 revision:[['Revisión realizada','Criterios utilizados y comentarios constructivos sobre otra propuesta. '+pending],['Revisión recibida','Comentarios de compañeros y aspectos que se pueden mejorar. '+pending],['Cambios aplicados','Cómo hemos utilizado las aportaciones para revisar el trabajo. '+pending]],
 referencias:[['Bibliografía académica','Referencias realmente consultadas, siguiendo el formato solicitado. '+pending],['Recursos digitales y audiovisuales','Vídeos, herramientas y recursos empleados en el proyecto. '+pending],['Material docente','Materiales de clase utilizados, citados según las indicaciones del profesor. '+pending]],
 diario:[['Reflexiones individuales','Un espacio para las entradas personales de los cuatro integrantes. '+pending],['Aprendizajes y evolución','Qué hemos descubierto, qué nos ha costado y cómo ha cambiado nuestra perspectiva. '+pending]]
};
