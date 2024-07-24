import { db, Usuario, Comentario } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

	await db.insert(Usuario).values([
		{ id: 1, nombreCompleto: "Juan Pérez", correo: "juan.perez@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/lego/6.jpg", planId: 0 },
		{ id: 2, nombreCompleto: "María López", correo: "maria.lopez@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/women/2.jpg", planId: 0 },
		{ id: 3, nombreCompleto: "Carlos Fernández", correo: "carlos.fernandez@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/men/3.jpg", planId: 0 },
		{ id: 4, nombreCompleto: "Ana Gómez", correo: "ana.gomez@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/women/4.jpg", planId: 0 },
		{ id: 5, nombreCompleto: "Luis Rodríguez", correo: "luis.rodriguez@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/men/5.jpg", planId: 0 },
		{ id: 6, nombreCompleto: "Patricia Martínez", correo: "patricia.martinez@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/women/6.jpg", planId: 0 },
		{ id: 7, nombreCompleto: "Javier Díaz", correo: "javier.diaz@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/men/7.jpg", planId: 0 },
		{ id: 8, nombreCompleto: "Laura Torres", correo: "laura.torres@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/women/8.jpg", planId: 0 },
		{ id: 9, nombreCompleto: "Miguel Sánchez", correo: "miguel.sanchez@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/men/9.jpg", planId: 0 },
		{ id: 10, nombreCompleto: "Carolina Ramírez", correo: "carolina.ramirez@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/women/10.jpg", planId: 0 },
		{ id: 11, nombreCompleto: "Fernando Ruiz", correo: "fernando.ruiz@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/men/11.jpg", planId: 0 },
		{ id: 12, nombreCompleto: "Sofía Morales", correo: "sofia.morales@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/women/12.jpg", planId: 0 },
		{ id: 13, nombreCompleto: "Ricardo Herrera", correo: "ricardo.herrera@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/men/13.jpg", planId: 0 },
		{ id: 14, nombreCompleto: "Gabriela Méndez", correo: "gabriela.mendez@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/women/14.jpg", planId: 0 },
		{ id: 15, nombreCompleto: "Diego Paredes", correo: "diego.paredes@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/men/15.jpg", planId: 0 },
		{ id: 16, nombreCompleto: "Martina Ortega", correo: "martina.ortega@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/women/16.jpg", planId: 0 },
		{ id: 17, nombreCompleto: "Pablo Álvarez", correo: "pablo.alvarez@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/men/17.jpg", planId: 0 },
		{ id: 18, nombreCompleto: "Lucía Castro", correo: "lucia.castro@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/women/18.jpg", planId: 0 },
		{ id: 19, nombreCompleto: "Alejandro Vega", correo: "alejandro.vega@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/men/19.jpg", planId: 0 },
		{ id: 20, nombreCompleto: "Isabel Reyes", correo: "isabel.reyes@example.com", contrasena: "password123", icono: "https://randomuser.me/api/portraits/women/20.jpg", planId: 0 }
	  ]);
	  

	await db.insert(Comentario).values([
		{ usuarioId: 1, contenido: "Excelente servicio, muy satisfecho con el resultado final.", calificacion: 5 },
		{ usuarioId: 2, contenido: "Buen servicio, pero hubo algunos retrasos en la entrega.", calificacion: 4 },
		{ usuarioId: 3, contenido: "El equipo fue muy profesional y atento a nuestras necesidades.", calificacion: 5 },
		{ usuarioId: 4, contenido: "El servicio fue aceptable, aunque el soporte podría mejorar.", calificacion: 3 },
		{ usuarioId: 5, contenido: "Muy buen trabajo, la página web quedó tal como la queríamos.", calificacion: 5 },
		{ usuarioId: 6, contenido: "La experiencia fue bastante buena, aunque el proceso fue un poco largo.", calificacion: 4 },
		{ usuarioId: 7, contenido: "La calidad del trabajo es excelente, el equipo es muy profesional.", calificacion: 5 },
		{ usuarioId: 8, contenido: "Buen servicio, pero podría mejorar en la comunicación.", calificacion: 3 },
		{ usuarioId: 9, contenido: "El resultado final superó nuestras expectativas.", calificacion: 5 },
		{ usuarioId: 10, contenido: "El proceso fue muy eficiente y el resultado final fue excelente.", calificacion: 5 },
		{ usuarioId: 11, contenido: "La página web quedó muy bien, aunque tardó un poco más de lo esperado.", calificacion: 4 },
		{ usuarioId: 12, contenido: "Estamos muy contentos con el servicio y el soporte recibido.", calificacion: 5 },
		{ usuarioId: 13, contenido: "El equipo fue muy profesional y eficiente en todo momento.", calificacion: 5 },
		{ usuarioId: 14, contenido: "El servicio fue bueno, aunque el precio es un poco alto.", calificacion: 4 },
		{ usuarioId: 15, contenido: "Estamos muy satisfechos con el resultado final.", calificacion: 5 },
		{ usuarioId: 16, contenido: "El proceso fue rápido y eficiente, estamos muy contentos.", calificacion: 5 },
		{ usuarioId: 17, contenido: "El servicio fue aceptable, pero la comunicación podría mejorar.", calificacion: 3 },
		{ usuarioId: 18, contenido: "La calidad del trabajo es muy buena, estamos satisfechos.", calificacion: 5 },
		{ usuarioId: 19, contenido: "El resultado final fue excelente, superó nuestras expectativas.", calificacion: 5 },
		{ usuarioId: 20, contenido: "El equipo fue muy profesional y atento, estamos muy contentos.", calificacion: 5 }
	  ]);


}
