const { default: Script } = require("next/script");

<Script>
console.log(0.1+0.2==0.3);
console.log(((0.1+0.2).toFixed(1)==0.3))
</Script>