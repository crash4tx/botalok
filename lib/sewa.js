function _0x5dde(_0x468bee,_0x453277){const _0x30d2c3=_0x30d2();return _0x5dde=function(_0x5ddeb7,_0x5cca01){_0x5ddeb7=_0x5ddeb7-0x84;let _0x1bc939=_0x30d2c3[_0x5ddeb7];return _0x1bc939;},_0x5dde(_0x468bee,_0x453277);}const _0x4ba98e=_0x5dde;(function(_0x22ca49,_0x3d7b64){const _0x18ed4e=_0x5dde,_0xe9d51d=_0x22ca49();while(!![]){try{const _0x2b2dc9=-parseInt(_0x18ed4e(0x94))/0x1+parseInt(_0x18ed4e(0x86))/0x2*(parseInt(_0x18ed4e(0x87))/0x3)+-parseInt(_0x18ed4e(0x92))/0x4+-parseInt(_0x18ed4e(0x8b))/0x5+-parseInt(_0x18ed4e(0x91))/0x6*(-parseInt(_0x18ed4e(0x88))/0x7)+-parseInt(_0x18ed4e(0x8d))/0x8*(parseInt(_0x18ed4e(0x8f))/0x9)+-parseInt(_0x18ed4e(0x93))/0xa*(-parseInt(_0x18ed4e(0x85))/0xb);if(_0x2b2dc9===_0x3d7b64)break;else _0xe9d51d['push'](_0xe9d51d['shift']());}catch(_0xbb97b){_0xe9d51d['push'](_0xe9d51d['shift']());}}}(_0x30d2,0xc64f8));function _0x30d2(){const _0x3e5939=['keys','@adiwajshing/baileys','1811455GorQgr','./database/sewa.json','24ZNLgXj','push','3954645kPgDYl','writeFileSync','5186964PItgoG','2526196vLUHzr','220JjTSnD','316788IObQmB','exports','forEach','894839LasnYq','1573902ilbYml','3AuSybZ','7yCxRFc'];_0x30d2=function(){return _0x3e5939;};return _0x30d2();}const fs=require('fs'),toMs=require('ms'),{MessageType}=require(_0x4ba98e(0x8a)),sleep=async _0x3522bf=>{return new Promise(_0x252702=>setTimeout(_0x252702,_0x3522bf));},addSewaGroup=(_0x56f3af,_0x7e6658,_0x53ad64)=>{const _0x42b88e=_0x4ba98e,_0x3ad8af={'id':_0x56f3af,'expired':Date['now']()+toMs(_0x7e6658),'status':!![]};_0x53ad64[_0x42b88e(0x8e)](_0x3ad8af),fs[_0x42b88e(0x90)](_0x42b88e(0x8c),JSON['stringify'](_0x53ad64));},getSewaPosition=(_0x3a650e,_0x36ddfe)=>{let _0x3186f9=null;Object['keys'](_0x36ddfe)['forEach'](_0x1da986=>{_0x36ddfe[_0x1da986]['id']===_0x3a650e&&(_0x3186f9=_0x1da986);});if(_0x3186f9!==null)return _0x3186f9;},getSewaExpired=(_0x35aed2,_0x41cd01)=>{const _0x1cfe9c=_0x4ba98e;let _0x1de725=null;Object[_0x1cfe9c(0x89)](_0x41cd01)[_0x1cfe9c(0x84)](_0x52686c=>{_0x41cd01[_0x52686c]['id']===_0x35aed2&&(_0x1de725=_0x52686c);});if(_0x1de725!==null)return _0x41cd01[_0x1de725]['expired'];},checkSewaGroup=(_0x26ee03,_0x584602)=>{const _0x2abf5b=_0x4ba98e;let _0x459bd7=![];return Object['keys'](_0x584602)[_0x2abf5b(0x84)](_0x546310=>{_0x584602[_0x546310]['id']===_0x26ee03&&(_0x459bd7=!![]);}),_0x459bd7;},getAllPremiumUser=_0x57720c=>{const _0x3f64ed=_0x4ba98e,_0x274811=[];return Object[_0x3f64ed(0x89)](_0x57720c)[_0x3f64ed(0x84)](_0x39aa8b=>{const _0x45ae9a=_0x3f64ed;_0x274811[_0x45ae9a(0x8e)](_0x57720c[_0x39aa8b]['id']);}),_0x274811;};module[_0x4ba98e(0x95)]={'addSewaGroup':addSewaGroup,'getSewaExpired':getSewaExpired,'getSewaPosition':getSewaPosition,'checkSewaGroup':checkSewaGroup,'getAllPremiumUser':getAllPremiumUser};