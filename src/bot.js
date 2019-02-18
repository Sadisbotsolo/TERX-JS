const LineConnect = require('./connect');
const LINE = require('./main.js');
console.info("\n\
   GUNAKAN BOTS DENGAN BIJAK\n\
 JANNGAN MAIN BAKAR ROOM ORANG\n\
HANYA KARNA MASALAH SEPELE  ,,,,\n\
HARGAILAH SESAMAMU JIKA ENGKAU \n\
DAN CINTAILAH HATI NURANI KALIAN  \n\
 KARNA HIDUPMU ADALAH SATU\n\
  ***NAFSU JANGAN JADIKAN GURU***\n\
                 ***TERX-BOTS TEAM***                           \n");
console.info("\n\
=========================================\n\
BotName: LINE Alphat JS\n\
Version: FORKED VERSION\n\
Thanks to @Alfathdirk @TCR_TEAM\n\
=========================================\n\
\nNOTE : This bot is made by @TERX-BOTS @TCR_TEAM and has been forked by @TERX !\n\
***Copyright belongs to the author***");

/*
| This constant is for auth/login
| 
| Change it to your authToken / your email & password
*/
const auth = {
	authToken: '',
	certificate: '',
	email: '',
	password: ''
}

let client =  new LineConnect();
//let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		LINE.aLike() AutoLike (CAUSE LAG)
	}
});
