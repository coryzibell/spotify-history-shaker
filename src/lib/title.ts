import figlet, { type Fonts } from 'figlet'

export default function title (version: string): string {
  const figFonts: Fonts[] = figlet.fontsSync()
  const title: string = figlet.textSync('shs', figFonts[Math.floor(Math.random() * figFonts.length)])
  return `${title}\nspotify history shaker\nv${version}`
}
