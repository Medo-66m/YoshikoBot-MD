/*
💥 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
✨️ Creado Para : 
• Ai Yaemori - MD
*/

var handler = async (m, { text,  usedPrefix, command }) => {

//rollwaifus
const waifus = [
{ nombre: 'Mikasa Ackerman', anime: 'Shingeki no Kyojin', precio: '10' },
{ nombre: 'Asuna Yuuki', anime: 'Sword Art Online', precio: '50' },
{ nombre: 'Hestia', anime: 'DanMachi', precio: '100' },
{ nombre: 'Rias Gremory', anime: 'High School DxD', precio: '200' },
{ nombre: 'Saber', anime: 'Fate/stay night', precio: '300' },
// Agrega más waifus aquí...
]

// Función para obtener una waifu aleatoria
function obtenerWaifuAleatoria() {
const indiceAleatorio = Math.floor(Math.random() * waifus.length)
return waifus[indiceAleatorio]}

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
conn.reply(m.chat, `🚩 Nombre: ${waifu.nombre}\n✨️ Base: ${waifu.anime}\n💰 Valor: ${waifu.precio}`, m, rcanal)}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria)}

handler.command = ['rw', 'rollwaifu']
handler.help = ['rw']
handler.tags = ['anime']
handler.premium = false
export default handler