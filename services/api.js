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

// Consulta los datos del alumno dueño del token
export async function obtenerPerfil(){
    const token = localStorage.getItem('token')
// 1. Leer el token que guardamos en el Entregable 2
if (!token) {
    throw new Error('No hay token guardado. Inicia  sesion primero.')
}

// 2. Pedir el perfil enviando el token en el header Authorization
const respuesta = await fetch(`${API_URL}/me`, {
method: 'GET',
headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
})

const datos = await respuesta.json()

// 3. Si el token no sirve o expiro, lo borramos
if (respuesta.status === 401) {
    localStorage.removeItem('token')
    throw new Error('Tu token no es válido o ya expiró. Vuelve a iniciar sesión.')
}
// 4. Caulquier otro error
if (!respuesta.ok) {
    throw new Error(datos.error || 'No se pudo consultar el perfil')
}

return datos
}