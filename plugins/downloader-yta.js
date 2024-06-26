import { youtubedl, youtubedlv2 } from '@bochilteam/scraper' 
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
let handler = async (m, { text, conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, '🌻 *Ingrese el comando mas un enlace de youtube*', m, fake)
let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0]; 
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `🍒 *No se encontro un enlace para ese numero ingresa un numero del 1 al ${matchingItem.urls.length}*`;
}} else {
throw `🍓 Para poder usar este comando de la manera (${usedPrefix + command} <numero>), realiza la busqueda de videos con ${usedPrefix}playlist <texto>*`;
}} else {
throw `🍓 *Para poder usar este comando de la manera (${usedPrefix + command} <numero>), realiza la busqueda de videos con ${usedPrefix}playlist <texto>*`;
}}}  
await conn.reply(m.chat, `⏰ Espere un momento`, fkontak, m)
try {
let q = '128kbps'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: fkontak })  
} catch {   
try {
let searchh = await yts(youtubeLink)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: fkontak })  
} catch (e) {
await conn.reply(m.chat, `🫐 Error`, fkontak, m)
console.log(`🌸 Ocurrió Un Error🌸`)
console.log(e)}
}}}
handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i
export default handler