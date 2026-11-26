const API_URL = 'https://rubrika.mx/api/v1';

export async function obtenerToken(correo, licencia) {
    const respuesta = await fetch(`${API_URL}/auth/token`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        email: correo,
        license_key: licencia
    })
})

const datos = await respuesta.json()

console.log('Respuesta de Rubrika:', datos)

if (!respuesta.ok) {
    throw new Error(datos.error || 'No se pudo obtener el token')
}

    return datos
}


