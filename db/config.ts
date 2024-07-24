import { defineDb, defineTable, column, NOW } from 'astro:db';

const Usuario = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    nombreCompleto: column.text({ optional: false }),
    correo: column.text({ unique: true }),
    contrasena: column.text({ optional: false }),
    icono: column.text({ optional: false }),
    planId: column.number({ optional: false, default: 0 })
  }
});

const Comentario = defineTable({
  columns: {
    usuarioId: column.number({ references: () => Usuario.columns.id }),
    fecha: column.date({ default: NOW }),
    contenido: column.text({ optional: false }),
    calificacion: column.number({ optional: false }),
  }
})

const Pago = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    usuarioId: column.number({ references: () => Usuario.columns.id }),
    monto: column.text({ optional: false }),
    fecha_pago: column.date({ default: NOW })
  }
})

export default defineDb({
  tables: { Usuario, Comentario, Pago }
});
  