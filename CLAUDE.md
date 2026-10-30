# Instrucciones para Claude

## Publicar cambios: siempre pedir permiso antes

- **Nunca publiques cambios sin mi permiso explícito en esa misma conversación.** Esto incluye:
  - correr `render.sh` (o `Actualizar rutina.command`) de la carpeta `rutina_gimnasio`, porque hace commit y push de `rutina/index.html`;
  - cualquier `git push` de este repositorio.
- Puedes editar `progreso.csv`, `rutina.md` y otros archivos locales. Cuando termines, dime qué cambió y pregúntame si quiero publicarlo.
- Un permiso vale solo para esa vez. No lo uses para publicaciones futuras.

## Rutina de gimnasio

- Los datos no están en este repo. Están en `~/Desktop/personal/athletic/rutina_gimnasio/`:
  - `progreso.csv`: una fila por serie;
  - `rutina.md`: la rutina y las notas de progreso de cada día;
  - `render.sh`: genera `rutina/index.html` en este repo, hace commit y push. Solo se corre con permiso (ver arriba).
- Para ver la página sin publicar, genérala a un archivo temporal en vez de correr `render.sh`.
- Equivalencias de nombres en mis apuntes:
  - "Dominadas" → *Weighted pull up*;
  - "Row" → *Seated row*;
  - "Low Row" → *Low rows*;
  - "Sumo smith deadlift" → *Smith machine sumo deadlift*;
  - "Adductor/Abductor" → una fila para *Adductor (superset)* y otra para *Abductor (superset)*.
- Desde el 21 oct 2026, el Día 1 usa la máquina *Iso-lateral chest press (plate-loaded)*. Las filas anteriores de *Bench press* eran con Smith machine. En las notas, mantén las recomendaciones de los dos ejercicios.
- Los datos de Melissa no van en `progreso.csv`.
