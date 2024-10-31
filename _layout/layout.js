const { getFile } = require("../server/utils");
const Footer = require("./footer");
const Head = require("./head");
const Main = require("./main");
const Navigation = require("./navigation");

const Layout = async (config) => {
  let injectBody = await getFile("inject_body.txt");
  return `<!DOCTYPE html>
<html>
<head>
<meta name="google-site-verification" content="Ppu_vxPxV1RrCckwXbRjhf4XUnGfL5aYGtNh7wI1TEI" />
<meta name="yandex-verification" content="4de0820e0f25fb2a" />
<!--Script iklan Adsense-->
<center><ins class="adsbygoogle" style="display: block; height: 280px;" data-ad-client="ca-pub-5742205514321536" data-ad-slot="4989369774" data-ad-format="auto" data-full-width-responsive="true" data-adsbygoogle-status="done" data-ad-status="filled"><div id="aswift_3_host" style="border: none; height: 280px; width: 620px; margin: 0px; padding: 0px; position: relative; visibility: visible; background-color: transparent; display: inline-block; overflow: visible;"><iframe id="aswift_3" name="aswift_3" browsingtopics="true" style="left:0;position:absolute;top:0;border:0;width:620px;height:280px;" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" width="620" height="280" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allow="attribution-reporting; run-ad-auction" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-5742205514321536&amp;output=html&amp;h=280&amp;slotname=4989369774&amp;adk=4086520295&amp;adf=4097700723&amp;pi=t.ma~as.4989369774&amp;w=620&amp;abgtt=7&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1726476860&amp;rafmt=1&amp;format=620x280&amp;url=https%3A%2F%2Fnimila.me%2Freal-estate-investment-trusts%2F&amp;host=ca-host-pub-2644536267352236&amp;fwr=0&amp;fwrattr=true&amp;rpe=1&amp;resp_fmts=3&amp;wgl=1&amp;uach=WyJXaW5kb3dzIiwiMTUuMC4wIiwieDg2IiwiIiwiMTI4LjAuNjYxMy4xMzgiLG51bGwsMCxudWxsLCI2NCIsW1siQ2hyb21pdW0iLCIxMjguMC42NjEzLjEzOCJdLFsiTm90O0E9QnJhbmQiLCIyNC4wLjAuMCJdLFsiR29vZ2xlIENocm9tZSIsIjEyOC4wLjY2MTMuMTM4Il1dLDBd&amp;dt=1726476859705&amp;bpp=1&amp;bdt=484&amp;idt=362&amp;shv=r20240911&amp;mjsv=m202409100101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D94736c078b939a32%3AT%3D1726476855%3ART%3D1726476855%3AS%3DALNI_MZ-SLnz40rMUK8xxD3iu2b-kRGvSw&amp;gpic=UID%3D00000f0b6a369ae2%3AT%3D1726476855%3ART%3D1726476855%3AS%3DALNI_MYZn8oI9KRC3y8DyxJrJA5FLvqKgA&amp;eo_id_str=ID%3D35b006aebc688157%3AT%3D1726476855%3ART%3D1726476855%3AS%3DAA-AfjYNT2jWyDzKR9gSSit-ZVRy&amp;prev_fmts=0x0%2C620x280%2C620x280&amp;nras=1&amp;correlator=653253515730&amp;frm=20&amp;pv=1&amp;u_tz=540&amp;u_his=2&amp;u_h=720&amp;u_w=1280&amp;u_ah=672&amp;u_aw=1280&amp;u_cd=24&amp;u_sd=1.5&amp;dmc=4&amp;adx=147&amp;ady=1061&amp;biw=1263&amp;bih=551&amp;scr_x=0&amp;scr_y=0&amp;eid=44759876%2C44759927%2C44759842%2C44795922%2C95332923%2C95338228%2C95341664%2C95341670&amp;oid=2&amp;pvsid=1027455646363243&amp;tmod=979767020&amp;uas=0&amp;nvt=1&amp;ref=https%3A%2F%2Fnimila.me%2F&amp;fc=1920&amp;brdim=0%2C0%2C0%2C0%2C1280%2C0%2C1280%2C672%2C1280%2C551&amp;vis=1&amp;rsz=%7C%7CeEbr%7C&amp;abl=CS&amp;pfx=0&amp;fu=128&amp;bc=31&amp;bz=1&amp;td=1&amp;tdf=2&amp;psd=W251bGwsbnVsbCxudWxsLDNd&amp;nt=1&amp;ifi=4&amp;uci=a!4&amp;btvi=2&amp;fsb=1&amp;dtd=367" data-google-container-id="a!4" tabindex="0" title="Advertisement" aria-label="Advertisement" data-google-query-id="CKjo_8GLx4gDFVxEwgUdy-w2nA" data-load-complete="true"></iframe></div></ins></center>
${await Head(config)}
</head>
<body>
${Navigation(config)}
${await Main(config)}
${Footer(config)}
${injectBody}
</body>
</html>`;
};

module.exports = Layout;
