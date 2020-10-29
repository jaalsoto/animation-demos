//
//  animations.js
//  github.com/jaalsoto/animation-demos
//
//  Golfed HTML5 canvas animations written with only 140 characters using the
//  default shortcuts provided by Dwitter:
//
//  t: Elapsed time in seconds.
//  S: Shorthand for Math.sin.
//  C: Shorthand for Math.cos.
//  T: Shorthand for Math.tan.
//  R: Function that generates rgba-strings, usage ex.: R(255, 255, 255, 0.5)
//  c: A 1920x1080 canvas.
//  x: A 2D context for that canvas.
//

/* Giphy Imitation */
function u_01(t)
{
  c.width=960;for(i=8,x.fillRect(0,0,960,550);i--;)a=S(4*t-i),b=20+a*-9,d=
  290+50*i,x.fillStyle=`hsl(${d} 99% 70%)`,x.fillRect(d,230+a*35,b,b)
}

/* Blue Tiles */
function u_02(t)
{
  for(i=350;i--;x.fillStyle=R((a=S(t+i**5)+2)*125,200+a*25,255))x.fillRect
  (i%25*77,i%14*78,68,68)
}

/* Rotating EU Flag */
function u_03(t)
{
  c.width|=0;c.style.background='#039';for(i=12;i--;x.fillText('⭐',925+345
  *C(b=i*.52+t/4),575+345*S(b)))x.font="5em'"
}

/* Pixel Art World Map - remix of d/5600 by u/p01 */
function u_04(t)
{
  for(i=512;i--;)'ᰀ`෼\u1FFD腾៿샸࿿恼߽쀼៼߯͋O臀ԇπ π΀㠋ƀ㰁退䀀'.charCodeAt(i/16)
  >>i%16&1&&x.fillRect(i%32*60,(i/32|0)*60,60,60)
}

/* Psychedelic Spiral */
function u_05(t)
{
  c.width|=0;x.translate(960,540);for(i=0;i<1e3;i++)x.fillStyle=`hsl(${i*
  T(t)} 99% 65%)`,x.rotate(2),x.fillRect(i,i,220,220)
}

/* Spears - remix of d/???? by u/???? */
function u_06(t)
{
  c.width|=1;x.globalCompositeOperation='xor';x.translate(960,540);for(i=
  99;i--;x.rotate(15))x.fillRect(50,99*T(t+i*.1),9,200)
}

/* JSFuck Console Timer */
function u_07(t)
{
  throw eval((!+[]+[])[+[]])
}

/* Music Player - remix of d/14120, d/14126 by u/KilledByAPixel */
function u_08(t)
{
  localStorage.m=`onclick=_=>(a=new AudioContext(),o=a.createOscillator(),
  o.connect(a.destination),o.start())`;
}

/* Aerith's Theme [LOUD] - remix of d/14120, d/14126 by u/KilledByAPixel */
function u_09(t)
{
  n='űƸɋɋɋȋƸŉŉŉűƸɋȪʓɋǭȪƸƸƸŉŉŉ';eval(localStorage.m);t?o.frequency.value=
  n.charCodeAt((t*2)%24):0
}

/* Morrison's Jig [LOUD] - remix of d/14120, d/14126 by u/KilledByAPixel */
function u_10(t)
{
  n='ŊŊǮŊǮŊǮŊƸŲĦŊŊǮŊǮɋȪǮƸŲĦŊŊǮŊǮŊǮŊƸŲĦƈƈŲƈƸǮƸƈŲŊĦ';eval(localStorage.m);
  t?o.frequency.value=n.charCodeAt((t*5)%44):0;
}

