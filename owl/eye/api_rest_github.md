# Recursos en la API de REST

## Versión actual

Predeterminadamente, todas las solicitudes a https://api.github.com reciben la versiónv3 de la API de REST. Te alentamos a solicitar explícitamente esta versión a través del encabezado Aceptar.

Accept: application/vnd.github.v3+json

Para obtener información acerca de la API de GraphQL de GitHub, consulta la documentación de la V4. Para obtener más información acerca de migrarse a GraphQL, consulta la sección "Migrarse desde REST".

## Modelo

Todos los accesos de las API son através de HTTPS, y se accede a desde https://api.github.com. Todos los datos se envían y reciben como JSON.

## Representaciones de resumen

Cuando recuperas una lista de recursos, la respuesta incluye un subconjunto de los atributos para ese recurso. Esta es la representación "resumen" del recurso. (Algunos atributos son caros en términos de cómputo para que la API los proporcione. Por razones de rendimiento, la representación de resumen excluye esos atributos. Para obtener estos atributos, recupera la representación "detallada").

Ejemplo: Cuando obtienes una lista de repositorios, obtienes la representación de resumen de cada uno de ellos. Aquí, recuperamos la lista de repositorios que pertenecen a la organización octokit:
```
GET /orgs/octokit/repos
```

< ### Representaciones detalladas

Cuando recuperas un recurso individual, la respuesta incluye habitualmente todos los atributos para ese recurso. Esta es la representación "detallada" del recurso. (Nota que la autorización algunas veces influencia la cantidad de detalles que se incluyen en la representación).

Ejemplo: Cuando obtienes un repositorio individual, obtienes la representación detallada del repositorio. Aquí, recuperamos el repositorio octokit/octokit.rb:

GET /repos/octokit/octokit.rb

La documentación proporciona un ejemplo de respuesta para cada método de la API. La respuesta de ejemplo ilustra todos los atributos que se regresan con ese método.

### Representaciones detalladas

Cuando recuperas un recurso individual, la respuesta incluye habitualmente todos los atributos para ese recurso. Esta es la representación "detallada" del recurso. (Nota que la autorización algunas veces influencia la cantidad de detalles que se incluyen en la representación).

Ejemplo: Cuando obtienes un repositorio individual, obtienes la representación detallada del repositorio. Aquí, recuperamos el repositorio octokit/octokit.rb:

```
GET /repos/octokit/octokit.rb
```

La documentación proporciona un ejemplo de respuesta para cada método de la API. La respuesta de ejemplo ilustra todos los atributos que se regresan con ese método.

