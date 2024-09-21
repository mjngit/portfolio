const conn = require('./conn');
const User = require('./User');
const  Product  = require('./Product');
const  Review  = require('./Review');
const Order = require('./Order');
const LineItem  = require('./LineItem');
const Fighter = require('./Fighter');
const Assessment = require('./Assessment');
const Message = require('./Message')
const Stock = require('./Stock')
const Friend = require('./Friend')
const Hype = require('./Hype')
const Transaction = require('./Transaction');
const HappyNote = require('./HappyNote');
const axios = require('axios');
require('dotenv').config()

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product); 
Product.hasMany(Review)
Review.belongsTo(Product)
Review.belongsTo(User)
HappyNote.belongsTo(User)

Message.belongsTo(User, { as: 'from' });
Message.belongsTo(User, { as: 'to' });
Transaction.belongsTo(User);
Transaction.belongsTo(Stock);
Friend.belongsTo(User, { as: 'from' });
Friend.belongsTo(User, { as: 'to' });
Hype.belongsTo(User, { as: 'from' });
Hype.belongsTo(User, { as: 'to' });
Assessment.belongsTo(User);

const fighterOptions = {
  method: 'GET',
  url: 'https://mma-stats.p.rapidapi.com/September_28_2024',
  params: {offset: '0', limit: '15'},
  headers: {
    'X-RapidAPI-Key': process.env.UFC_API_KEY,
    'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
  }
};




const syncAndSeed = async ()=> {
  await conn.sync({ force: true });

  const sp500List = 'MMM,AOS,ABT,ABBV,ABMD,ACN,ATVI,ADM,ADBE,AAP,AMD,AES,AFL,A,APD,AKAM,ALB,ALK,ARE,ALGN,ALLE,LNT,ALL,GOOGL,GOOG,MO,AMZN,AMCR,AEE,AAL,AEP,AXP,AIG,AMT,AWK,AMP,ABC,AME,AMGN,APH,ADI,ANSS,ANTM,AON,APA,AAPL,AMAT,APTV,ANET,AJG,AIZ,T,ATO,ADSK,ADP,AZO,AVB,AVY,BKR,BLL,BAC,BBWI,BAX,BDX,BRK.B,BBY,BIO,TECH,BIIB,BLK,BK,BA,BKNG,BWA,BXP,BSX,BMY,AVGO,BR,BRO,BF.B,CHRW,CDNS,CZR,CPB,COF,CAH,KMX,CCL,CARR,CTLT,CAT,CBOE,CBRE,CDW,CE,CNC,CNP,CDAY,CERN,CF,CRL,SCHW,CHTR,CVX,CMG,CB,CHD,CI,CINF,CTAS,CSCO,C,CFG,CTXS,CLX,CME,CMS,KO,CTSH,CL,CMCSA,CMA,CAG,COP,ED,STZ,CPRT,GLW,CTVA,COST,CTRA,CCI,CSX,CMI,CVS,DHI,DHR,DRI,DVA,DE,DAL,XRAY,DVN,DXCM,FANG,DLR,DFS,DISCA,DISCK,DISH,DG,NWL,NEM,NWSA,NWS,NEE,NLSN,NKE,NI,NSC,NTRS,NOC,NLOK'
  
  const secondSetSP200 = 'DLTR,D,DPZ,DOV,DOW,DTE,DUK,DRE,DD,DXC,EMN,ETN,EBAY,ECL,EIX,EW,EA,LLY,EMR,ENPH,ETR,EOG,EFX,EQIX,EQR,ESS,EL,ETSY,RE,EVRG,ES,EXC,EXPE,EXPD,EXR,XOM,FFIV,FB,FAST,FRT,FDX,FIS,FITB,FRC,FE,FISV,FLT,FMC,F,FTNT,FTV,FBHS,FOXA,FOX,BEN,FCX,GPS,GRMN,IT,GNRC,GD,GE,GIS,GM,GPC,GILD,GPN,GL,GS,HAL,HBI,HAS,HCA,PEAK,HSIC,HES,HPE,HLT,HOLX,HD,HON,HRL,HST,HWM,HPQ,HUM,HBAN,HII,IBM,IEX,IDXX,INFO,ITW,ILMN,INCY,IR,INTC,ICE,IFF,IP,IPG,INTU,ISRG,IVZ,IPGP,IQV,IRM,JBHT,JKHY,J,SJM,JNJ,JCI,JPM,JNPR,KSU,K,KEY,KEYS,KMB,KIM,KMI,KLAC,KHC,KR,LHX,LH,LRCX,LW,LVS,LEG,LDOS,LEN,LNC,LIN,LYV,LKQ,LMT,L,LOW,LUMN,LYB,MTB,MRO,MPC,MKTX,MAR,MMC,MLM,MAS,MA,MTCH,MKC,MCD,MCK,MDT,MRK,MET,MTD,MGM,MCHP,MU,MSFT,MAA,MRNA,MHK,TAP,MDLZ,MPWR,MNST,MCO,MS,MSI,MSCI,NDAQ,NTAP,NFLX'

  const thirdSet = 'NCLH,NRG,NUE,NVDA,NVR,NXPI,ORLY,OXY,ODFL,OMC,OKE,ORCL,OGN,OTIS,PCAR,PKG,PH,PAYX,PAYC,PYPL,PENN,PNR,PBCT,PEP,PKI,PFE,PM,PSX,PNW,PXD,PNC,POOL,PPG,PPL,PFG,PG,PGR,PLD,PRU,PTC,PEG,PSA,PHM,PVH,QRVO,QCOM,PWR,DGX,RL,RJF,RTX,O,REG,REGN,RF,RSG,RMD,RHI,ROK,ROL,ROP,ROST,RCL,SPGI,CRM,SBAC,SLB,STX,SEE,SRE,NOW,SHW,SPG,SWKS,SNA,SO,LUV,SWK,SBUX,STT,STE,SYK,SIVB,SYF,SNPS,SYY,TMUS,TROW,TTWO,TPR,TGT,TEL,TDY,TFX,TER,TSLA,TXN,TXT,COO,HIG,HSY,MOS,TRV,DIS,TMO,TJX,TSCO,TT,TDG,TRMB,TFC,TWTR,TYL,TSN,USB,UDR,ULTA,UAA,UA,UNP,UAL,UPS,URI,UNH,UHS,VLO,VTR,VRSN,VRSK,VZ,VRTX,VFC,VIAC,VTRS,V,VNO,VMC,WRB,GWW,WAB,WBA,WMT,WM,WAT,WEC,WFC,WELL,WST,WDC,WU,WRK,WY,WHR,WMB,WLTW,WYNN,XEL,XLNX,XYL,YUM,ZBRA,ZBH,ZION,ZTS, UBER, CAVA, RIDE, PLTR'

  const fourth = 'A,AA,AA$B,AAC,AAN,AAT,AAV,AB,ABB,ABBV,ABC,ABEV,ABG,ABM,ABR,ABR$A,ABR$B,ABR$C,ABRN,ABT,ABX,ACC,ACCO,ACE,ACG,ACH,ACI,ACM,ACMP,ACN,ACP,ACRE,ACT,ACW,ADC,ADM,ADPT,ADS,ADT,ADX,AEB,AEC,AED,AEE,AEG,AEH,AEK,AEL,AEM,AEO,AEP,AER,AES,AES$C,AET,AF,AF$C,AFA,AFB,AFC,AFG,AFGE,AFL,AFM,AFQ,AFSD,AFSI$A,AFSI$B,AFSI$C,AFT,AFW,AG,AGC,AGCO,AGD,AGI,AGM,AGM$A,AGM$B,AGM$C,AGM.A,AGN,AGO,AGO$B,AGO$E,AGO$F,AGRO,AGU,AGX,AHC,AHH,AHL,AHL$A,AHL$B,AHL$C,AHP,AHS,AHT,AHT$A,AHT$D,AHT$E,AI,AIB,AIF,AIG,AIG.W,AIN,AIR,AIT,AIV,AIV$A,AIV$Z,AIW,AIY,AIZ,AJG,AKO.A,AKO.B,AKP,AKR,AKS,AL,ALB,ALDW,ALE,ALEX,ALG,ALJ,ALK,ALL,ALL$A,ALL$B,ALL$C,ALL$D,ALL$E,ALL$F,ALLE,ALLY,ALLY$A,ALLY$B,ALP$N,ALP$O,ALP$P,ALR,ALR$B,ALSN,ALU,ALV,ALX,AM,AMBR,AMC,AME,AMFW,AMG,AMH,AMH$A,AMH$B,AMH$C,AMID,AMP,AMRC,AMRE,AMT,AMT$A,AMTD,AMTG,AMTG$A,AMX,AN,ANET,ANF,ANFI,ANH,ANH$A,ANH$B,ANN,ANR,ANTM,ANW,AOD,AOI,AOL,AON,AOS,AP,APA,APAM,APB,APC,APD,APF,APH,APL,APL$E,APO,APU,AR'
  
  const fifth = 'ARC,ARCO,ARCX,ARDC,ARE,ARE$E,ARES,ARG,ARH$C,ARI,ARI$A,ARL,ARMF,ARMK,ARN,ARO,ARP,ARP$D,ARPI,ARR,ARR$A,ARR$B,ARU,ARW,ARY,ASA,ASB,ASB$B,ASC,ASG,ASGN,ASH,ASPN,ASR,ASX,AT,ATE,ATEN,ATHM,ATI,ATK,ATLS,ATO,ATR,ATTO,ATU,ATV,ATW,AU,AUO,AUQ,AUY,AV,AVA,AVAL,AVB,AVD,AVG,AVH,AVIV,AVK,AVOL,AVP,AVT,AVV,AVX,AVY,AWF,AWH,AWI,AWK,AWP,AWR,AXE,AXL,AXLL,AXP,AXR,AXS,AXS$C,AXS$D,AXTA,AYI,AYN,AYR,AZN,AZO,AZZ,B,BA,BABA,BAC,BAC$D,BAC$E,BAC$I,BAC$L,BAC$W,BAC$Z,BAC.A,BAC.B,BAF,BAH,BAK,BALT,BAM,BANC,BANC$C,BAP,BAS,BAX,BBD,BBDO,BBF,BBG,BBK,BBL,BBN,BBT,BBT$D,BBT$E,BBT$F,BBT$G,BBVA,BBW,BBX,BBY,BC,BCA,BCC,BCE,BCEI,BCH,BCO,BCR,BCRH,BCS,BCS$,BCS$A,BCS$C,BCS$D,BCX,BDC,BDJ,BDN,BDN$E,BDX,BEE,BEL,BEN,BEP,BERY,BF.A,BF.B,BFAM,BFK,BFO,BFR,BFS,BFS$C,BFZ,BG,BGB,BGC,BGCA,BGE$B,BGG,BGH,BGR,BGS,BGT,BGX,BGY,BH,BHE,BHI,BHK,BHL,BHLB,BHP,BID,BIE,BIF,BIG,BIN,BIO,BIO.B,BIOA,BIOA.W,BIP,BIT,BITA,BJZ,BK,BK$C,BKD,BKE,BKH,BKK,BKN,BKS,BKT,BKU,BLH,BLK,BLL,BLOX,BLT,BLW,BLX,BMA,BME,BMI'

  const sixth = 'BML$G,BML$H,BML$I,BML$J,BML$L,BMO,BMR,BMS,BMY,BNJ,BNK,BNS,BNY,BOCA,BOE,BOH,BOI,BOOT,BORN,BOXC,BP,BPI,BPK,BPL,BPT,BPY,BPZ,BQH,BR,BRC,BRFS,BRK.A,BRK.B,BRO,BRP,BRS,BRSS,BRT,BRX,BSAC,BSBR,BSD,BSE,BSI,BSL,BSMX,BST,BSX,BT,BTA,BTE,BTF,BTH,BTO,BTT,BTU,BTZ,BUD,BUI,BURL,BVN,BWA,BWC,BWG,BWP,BWS,BX,BXC,BXE,BXMT,BXMX,BXP,BXP$B,BXS,BYD,BYM,BZH,BZT,C,C$C,C$J,C$K,C$L,C$N,C$P,C.A,C.B,CAB,CACI,CAE,CAF,CAG,CAH,CAJ,CALX,CAM,CAP,CAPL,CAS,CAT,CATO,CB,CBA,CBB,CBB$B,CBD,CBG,CBI,CBK,CBL,CBL$D,CBL$E,CBM,CBPX,CBR,CBS,CBS.A,CBT,CBU,CBZ,CCC,CCE,CCG,CCG$A,CCI,CCI$A,CCJ,CCK,CCL,CCM,CCO,CCS,CCSC,CCU,CCV,CCZ,CDE,CDE.W,CDI,CDR,CDR$B,CE,CEA,CEB,CEE,CEL,CELP,CEM,CEN,CEO,CEQP,CF,CFC$A,CFC$B,CFG,CFI,CFN,CFR,CFR$A,CFX,CGA,CGG,CGI,CHA,CHD,CHE,CHGG,CHH,CHK,CHK$D,CHKR,CHL,CHMI,CHMT,CHN,CHS,CHSP,CHSP$A,CHT,CHU,CI,CIA,CIB,CIE,CIEN,CIF,CIG,CIG.C,CII,CIM,CIO,CIR,CIT,CIVI'
  
  const seventh = 'CJES,CKH,CKP,CL,CLA,CLB,CLC,CLD,CLDT,CLF,CLGX,CLH,CLI,CLNY,CLNY$A,CLNY$B,CLR,CLS,CLV,CLW,CLX,CM,CMA,CMA.W,CMC,CMCM,CMG,CMI,CMK,CMLP,CMN,CMO,CMO$E,CMP,CMRE,CMRE$B,CMRE$C,CMS,CMS$B,CMU,CNA,CNC,CNCO,CNHI,CNI,CNK,CNL,CNNX,CNO,CNP,CNQ,CNS,CNW,CNX,CO,CODE,CODI,COF,COF$C,COF$D,COF$P,COF.W,COG,COH,COL,COO,COP,COR,COR$A,CORR,COT,COTY,COUP,COV,CP,CPA,CPAC,CPB,CPE,CPE$A,CPF,CPG,CPK,CPL,CPN,CPS,CPT,CR,CRC,CRCM,CRD.A,CRD.B,CRH,CRI,CRK,CRL,CRM,CRR,CRS,CRT,CRY,CS,CSC,CSG,CSH,CSI,CSL,CSLT,CSS,CST,CSTM,CSU,CSV,CSX,CTB,CTL,CTLT,CTQ,CTR,CTS,CTT,CTU,CTV,CTW,CTX,CTY,CUB,CUBE,CUBE$A,CUBI,CUBS,CUDA,CUK,CUZ,CVA,CVB,CVC,CVD,CVE,CVEO,CVG,CVI,CVO,CVRR,CVS,CVT,CVX,CW,CWEI,CWT,CX,CXE,CXH,CXO,CXP,CXW,CYD,CYH,CYN,CYN$C,CYN$D,CYNI,CYS,CYS$A,CYS$B,CYT,CZZ,D,DAC,DAL,DAN,DANG,DAR'

  const note1 = 'Hey friends! 🌸✨ \n \ Today, I wanted to share a little burst of happiness with you all. 🤗 This morning, I found a tiny caterpillar in my garden, and I decided to create a cozy home for it in a jar with some leaves. 🐛💚 Watching it wiggle around and munch on its leafy feast brought so much joy to my day! \n \ Life can be hectic, but sometimes it is the small, simple moments that make everything brighter. What is something little that brought a smile to your face recently? Spread some positivity and share your heartwarming stories! 🌻💕 \n \ Remember, your joy might just be the sunshine someone else needs today. ☀️✨ \n \ #SpreadJoy #LittleMoments #Gratitude #PositiveVibes'

  const options = {
  method: 'GET',
  url: 'https://mboum-finance.p.rapidapi.com/qu/quote',
  params: {
    symbol: `${sp500List}`
  },
  headers: {
    'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
    'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
  }
};

const options2 = {
  method: 'GET',
  url: 'https://mboum-finance.p.rapidapi.com/qu/quote',
  params: {
    symbol: `${secondSetSP200}`
  },
  headers: {
    'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
    'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
  }
};

const options3 = {
  method: 'GET',
  url: 'https://mboum-finance.p.rapidapi.com/qu/quote',
  params: {
    symbol: `${thirdSet}`
  },
  headers: {
    'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
    'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	//console.log(response.data);
  for(let i = 0; i < response.data.body.length; i++) {
    let stock = response.data.body[i]
    await Stock.create({ currentPrice: `${stock.ask}` , ticker: `${stock.symbol}`, name: `${stock.shortName}` })
  }
} catch (error) {
	console.error(error);
}




  try {
    const fighterResponse = await axios.request(fighterOptions);
    const [moe, lucy, larry, ethyl, admin] = await Promise.all([
    
    User.create({ username: 'moe', password: '123' }),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
    User.create({ username: 'admin', password: 'admin', adminStatus: true }),

  ]);

  const [moe1] = await Promise.all([
    Message.create({ txt: 'hi', fromId: moe.id, toId: lucy.id }),
  ]);

  const moe2 = await Message.create({ txt: 'hello', fromId: moe.id, toId: ethyl.id })
  const lucy1 = await Message.create({ txt: 'hi there moe ', fromId: lucy.id, toId: moe.id })
  const ethyl1 = await Message.create({ txt: 'oh hey there, nice to hear from you!', fromId: ethyl.id, toId: moe.id })
  const moe3 = await Message.create({ txt: 'hows it going??', fromId: moe.id, toId: lucy.id })
  const moe4 = await Message.create({ txt: "haven't talked in a while!", fromId: moe.id, toId: ethyl.id })
  const lucy2 = await Message.create({ txt: 'good without your financial advice!', fromId: lucy.id, toId: moe.id })
  const ethyl2 = await Message.create({ txt: "Yea that's cause you gave me bad financial advice!!" , fromId: ethyl.id, toId: moe.id })

  const happy1 = await HappyNote.create({ userId: moe.id, subject: '🌈 Celebrating Small Joys in Life! 🌟', content: 'Hey friends! 🌸✨ \n \ Today, I wanted to share a little burst of happiness with you all. 🤗 This morning, I found a tiny caterpillar in my garden, and I decided to create a cozy home for it in a jar with some leaves. 🐛💚 Watching it wiggle around and munch on its leafy feast brought so much joy to my day! \n \ Life can be hectic, but sometimes it is the small, simple moments that make everything brighter. What is something little that brought a smile to your face recently? Spread some positivity and share your heartwarming stories! 🌻💕 \n \ Remember, your joy might just be the sunshine someone else needs today. ☀️✨ \n \ #SpreadJoy #LittleMoments #Gratitude #PositiveVibes' })
  const happy2 = await HappyNote.create({ userId: lucy.id, subject: '🚀 Exciting News! 🌐 Introducing Happy Notes! 🎉', content: 'Hello, wonderful community! 🌈✨ \n \ We are absolutely thrilled to share some exciting updates with you! 🚀 Today, we have added a brand-new section to our website, and we cannot wait for you to explore it!' })
  const happy3 = await HappyNote.create({ userId: larry.id, subject: "🌻 A Gratitude Post - Let's Count Our Blessings! 🌈", content: "Hello, lovely souls! 🌸💖 In the spirit of spreading joy and gratitude, let's take a moment to reflect on the beautiful things in our lives. ✨💕 Today I am thankful for a surprise call from a friend that turned a regular day into something extraordinary." })

  await Assessment.create({score: 25, userId: moe.id})

  for(let i = 0; i < fighterResponse.data.length; i++){
    let first = fighterResponse.data[i].matchup[0]
    let second = fighterResponse.data[i].matchup[1]
    let num = i + 1
    console.log(first)
    console.log(second)
    console.log(i)
    console.log(2 * i + 1)
    await Promise.all([
       Fighter.create({
          name: fighterResponse.data[i].matchup[0],
          defense: fighterResponse.data[i].tale_of_the_tape.Defense[first],
          reach: fighterResponse.data[i].tale_of_the_tape.Reach[first],
          strikesAbsorbedPerMin: fighterResponse.data[i].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][first],
          strikesLandedPerMin: fighterResponse.data[i].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][first],
          avgFightTime: fighterResponse.data[i].tale_of_the_tape['Average Fight Time'][first],
          avgSubPer15: fighterResponse.data[i].tale_of_the_tape['Submission Average/15 min.'][first],
          takedownAcc: fighterResponse.data[i].tale_of_the_tape['Takedown Accuracy'][first],
          takedownDef: fighterResponse.data[i].tale_of_the_tape['Takedown Defense'][first],
          avgTakedownsPer15: fighterResponse.data[i].tale_of_the_tape['Takedowns Average/15 min.'][first],
          dob: fighterResponse.data[i].tale_of_the_tape.DOB[first],
          height: fighterResponse.data[i].tale_of_the_tape.Height[first],
          id: 2 * i,
          matchupId: i,
          record: fighterResponse.data[i].tale_of_the_tape['Wins/Losses/Draws'][first],                                                                      
        }),
        Fighter.create({
            name: fighterResponse.data[i].matchup[1],
            defense: fighterResponse.data[i].tale_of_the_tape.Defense[second],
            reach: fighterResponse.data[i].tale_of_the_tape.Reach[second],
            strikesAbsorbedPerMin: fighterResponse.data[i].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][second],
            strikesLandedPerMin: fighterResponse.data[i].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][second],
            avgFightTime: fighterResponse.data[i].tale_of_the_tape['Average Fight Time'][second],
            avgSubPer15: fighterResponse.data[i].tale_of_the_tape['Submission Average/15 min.'][second],
            takedownAcc: fighterResponse.data[i].tale_of_the_tape['Takedown Accuracy'][second],
            takedownDef: fighterResponse.data[i].tale_of_the_tape['Takedown Defense'][second],
            avgTakedownsPer15: fighterResponse.data[i].tale_of_the_tape['Takedowns Average/15 min.'][second],
            dob: fighterResponse.data[i].tale_of_the_tape.DOB[second],
            height: fighterResponse.data[i].tale_of_the_tape.Height[second],
            id: 2 * i + 1,
            matchupId: i ,
            record: fighterResponse.data[i].tale_of_the_tape['Wins/Losses/Draws'][second],                                                                           
        })
    ])
  }
  
  try {
    const response = await axios.request(options3);
    //console.log(response.data);
    for(let i = 0; i < response.data.body.length; i++) {
      let stock = response.data.body[i]
      await Stock.create({ currentPrice: `${stock.ask}` , ticker: `${stock.symbol}`, name: `${stock.shortName}` })
    }
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await axios.request(options2);
    //console.log(response.data.body);
    for(let i = 0; i < response.data.body.length; i++) {
      let stock = response.data.body[i]
      await Stock.create({ currentPrice: `${stock.ask}` , ticker: `${stock.symbol}`, name: `${stock.shortName}` })
    }
  } catch (error) {
    console.error(error);
  }

  const JavaMug = await Product.create({ 
    name: "Java Mug", 
    imageUrl: "https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3464&q=80", 
    category: "mug",
    description:'This mug is the perfect vessel for whatever liquid you want to put in it and will give you the spirit and confidence to push on til the day!',
    price: 15.00,
  });
  
  const ScriptForJavaMug = await Product.create({ 
    name: "Script For Java Mug", 
    imageUrl: "https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3464&q=80", 
    category: "mug",
    description:'Our high-quality mugs are designed with one of our cafe logos and are great for enjoying your favorite coffee or tea in the comfort of your home, office, or anywhere in the world!',
    price: 15.00,
  });
  
  const Coffee = await Product.create({
    name: "Coffee",
    imageUrl: 'https://i.ibb.co/kmqWxwc/coffees.jpg',
    category: "coffee",
    description: 'Our freshly brewed coffee is made from premium roasted beans and served hot with the option to select any variety of milks or sugars.',
    price: 4.00,
  });
  

  const Cappuccino = await Product.create({
    name: "Cappuccino",
    imageUrl: "https://images.unsplash.com/photo-1513175112772-985b903e3fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    category: "coffee",
    description: 'A classic Italian espresso-based drink, made with a shot of espresso, steamed milk, and a layer of velvety frothed milk on top.',
    price: 6.00,
  });

  const Latte = await Product.create({
    name: "Latte",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/0*DGNIpvHTN_EWoAGI",
    category: "coffee",
    description: 'A smooth and creamy espresso-based drink, made with a shot of espresso, steamed milk, and a thin layer of froth on top.',
    price: 6.00, 
  });

  const IcedCoffee = await Product.create({
    name: "Iced Coffee",
    imageUrl: "https://cdn.shopify.com/s/files/1/2103/9669/articles/singleserve_macchiato_1024x1024.jpg?v=1657604587",
    category: "coffee",
    description: ' Our chilled and refreshing coffee is brewed strong and served over ice, perfect for a hot summer day.',
    price: 5.00,
  });

  const IcedLatte = await Product.create({
    name: "Iced Latte",
    imageUrl: "https://images.unsplash.com/photo-1534414671319-4fc58cc112e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    category: "coffee",
    description: 'A delicious and creamy iced coffee drink made with a shot of espresso, chilled milk, and served over ice.',
    price: 7.00,
  });

  const Espresso = await Product.create({
    name: "Espresso",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "coffee",
    description: 'A single shot of premium quality espresso, perfect for a quick and powerful caffeine boost.',
    price: 4.00,
  });

  const ColdBrew = await Product.create({
    name: "Cold Brew",
    imageUrl: "https://images.unsplash.com/photo-1558122104-355edad709f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3310&q=80",
    category: "coffee",
    description: 'Our signature cold brew is steeped overnight for a smooth and full-bodied taste, served over ice for a refreshing experience.',
    price: 6.00,
  });

  const BlackTea = await Product.create({
    name: "Black Tea",
    imageUrl: "https://images.unsplash.com/photo-1606163017137-888c0177b3dd",
    category: "tea",
    description: 'A classic and bold tea, served hot with the option to add milk or sweetener to taste.',
    price: 4.00,
  });

  const IcedTea = await Product.create({
    name: "Iced Tea",
    imageUrl: "https://images.unsplash.com/photo-1654923064639-834d2bf32716",
    category: "tea",
    description: 'Our iced tea is made from freshly brewed tea, chilled and served over ice, with a variety of flavors to choose from.',
    price: 4.00,
  });

  const GreenTea = await Product.create({
    name: "Green Tea",
    imageUrl: "https://images.unsplash.com/photo-1622480916113-9000ac49b79d",
    category: "tea",
    description: 'A light and delicate tea, made from freshly steeped green tea leaves, perfect for those who prefer a milder taste.',
    price: 5.00,
  });

  const PeppermintTea = await Product.create({
    name: "Peppermint Tea",
    imageUrl: "https://images.unsplash.com/photo-1655252205284-4b184957de44",
    category: "tea",
    description: 'Our refreshing peppermint tea is made from freshly brewed peppermint leaves, great for soothing digestion and cooling down.',
    price: 5.00,
  });

  const Matcha = await Product.create({
    name: "Matcha",
    imageUrl: "https://cdn.shopify.com/s/files/1/0285/0082/0054/products/matcha_madness_4f1fd621-8f16-43ad-a27a-9997b4071e0d_900x.jpg?v=1660066856",
    category: "tea",
    description: 'A traditional Japanese tea made from finely ground green tea leaves, served with a frothy layer of milk for a creamy and satisfying experience.',
    price: 7.00,
  });

  const IcedMatcha = await Product.create({
    name: "Iced Matcha",
    imageUrl: "https://images.unsplash.com/photo-1617892165107-76fb45f50f7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    category: "tea",
    description: 'Our iced matcha is a refreshing and delicious drink made with chilled matcha powder and milk, served over ice for a sweet and creamy taste.',
    price: 7.00,
  });

  const GreenSmoothie = await Product.create({
    name: "Greens Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1557753478-d111aef068be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80",
    category: "smoothie",
    description: 'Our refreshing green smoothie is made with fresh spinach, kale, apple, banana, and honey for a delicious and healthy way to start your day.',
    price: 9.00,
  });

  const StrawberryBananaSmoothie = await Product.create({
    name: "Strawberry Banana Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1586707101133-4f0c4ce4e554",
    category: "smoothie",
    description: 'Our classic smoothie is made with ripe strawberries, sweet banana, and a touch of honey, blended with almond milk for a creamy and satisfying drink.',
    price: 9.00,
  });

  const ProteinSmoothie = await Product.create({
    name: "Protein Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1645783916385-1c99860a2a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "smoothie",
    description: 'Our protein-packed smoothie is made with a blend of whey protein, banana, almond milk, and peanut butter for a nutritious and delicious drink that will keep you fueled throughout the day.',
    price: 9.00,
  });

  const Tshirt = await Product.create({
    name: "T-Shirt",
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
    category: "shirt",
    description: 'Our soft and comfortable t-shirts are made from high-quality materials, featuring our cafe logo and a stylish design to show off your love for our coffee.',
    price: 15.00,
  });

  const Hat = await Product.create({
    name: "Baseball hat",
    imageUrl: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3243&q=80",
    category: "hat",
    description: 'Our adjustable hats are perfect for sunny days and are embroidered with our cafe logo, providing a stylish accessory for your coffee runs and outdoor activities.',
    price: 1.00,
  });


const reviews = [
  {
    subject: 'Love this place!',
    description: 'This is the best coffee I have ever had!',
    rating: 10,
    userId: moe.id,
    productId: Coffee.id
  },
  {
    subject: 'Always a long line',
    description: 'My cold brew coffee is great everytime, but I hate waiting in the long line, so I order ahead now for faster service.',
    rating: 7,
    userId: larry.id,
    productId: ColdBrew.id
  },
  {
    subject: 'More Hats Please',
    description: 'I love my hat so much. Please make more designs!',
    rating: 8,
    userId: larry.id,
    productId: Hat.id
  },
  {
    subject: 'Big Smile from my barista',
    description: 'The best barista in the morning. I always get greeted by name.',
    rating: 9,
    userId: lucy.id,
    productId: Latte.id
  },
  {
    subject: 'Great Smoothie',
    description: 'I love the strawberry smoothie. It is always perfect and hits the spot',
    rating: 9,
    userId: lucy.id,
    productId: StrawberryBananaSmoothie.id
  },
  {
    subject: 'More Java!',
    description: 'I get so many compliments on my shirt!',
    rating: 10,
    userId: moe.id,
    productId: Tshirt.id
  },
];



await Promise.all(reviews.map(async (review) => {
  const newReview = await Review.create(review);
  const product = await Product.findByPk(review.productId);
  await newReview.setProduct(product);
}));


  const cart = await ethyl.getCart();
  await ethyl.addToCart({ product: Hat, quantity: 3});
  await ethyl.addToCart({ product: ScriptForJavaMug, quantity: 2});
  return {
    users: {
      moe,
      lucy,
      larry,
      ethyl,
      admin
    }
  } 
}catch(error){
   console.log(error) 
}
}


module.exports = {
  syncAndSeed,
  User,
  Product,
  LineItem,
  Order,
  Review,
  Fighter,
  Assessment,
  Message,
  Stock,
  Transaction,
  Friend,
  Hype,
  HappyNote
};
