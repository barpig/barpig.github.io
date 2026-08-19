// ============================================
//  FASHION ARCHIVE – ALL COLLAGES
// ============================================
//
//  HOW TO ADD A NEW DAY:
//  1. Copy the TEMPLATE
//  2. Paste it at the TOP of the collages array
//  3. Fill in id, date, and posts
//  4. Save
// ============================================

const collages = [

  // ========== TEMPLATE (copy this when you get a new day) ==========
  /*
  {
    id: "2026-08-15",
    date: "August 15, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
      // paste posts here
    ]
  },
  */
  // ================================================================
// ---------- August 19, 2026 ----------
  {
    id: "2026-08-19",
    date: "August 19, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
  {img:"https://pbs.twimg.com/media/HP-kh61WEAAVudH.jpg", link:"https://x.com/beautifulcelebz/status/2089569660484173897", likes:6504, title:"Victoria Justice 😍"},
  {img:"https://pbs.twimg.com/media/HQAfKylWAAAcDxS.jpg", link:"https://x.com/beautyshowcase/status/2089734564855873974", likes:2596, title:"Elite genetics 🏆"},
  {img:"https://pbs.twimg.com/media/HQAeST5W8AAr1Vm.jpg", link:"https://x.com/beautyshowcase/status/2089774330754498911", likes:1811, title:"Gym girls >>"},
  {img:"https://pbs.twimg.com/media/HQAeLumXMAAJKu2.jpg", link:"https://x.com/beautyshowcase/status/2089703433817174216", likes:1646, title:"Good morning ❤️"},
  {img:"https://pbs.twimg.com/media/HP-EBuPWkAAZLfD.jpg", link:"https://x.com/BaddiesBae_/status/2089534030144233525", likes:1368, title:"Morgan Mamolen - Alabama 🇺🇸"},
  {img:"https://pbs.twimg.com/media/HQCTNMqXQAAJV5m.jpg", link:"https://x.com/BaddiesBae_/status/2089832097577922702", likes:704, title:"Lexi Figoras - Florida Atlantic 🇺🇸"},
  {img:"https://pbs.twimg.com/media/HQCAFTqWwAAd-JA.jpg", link:"https://x.com/Kevin10919728/status/2089811179354951963", likes:653, title:"CINDY CRAWFORD"},
  {img:"https://pbs.twimg.com/media/HQAwem9XwAA1vRu.jpg", link:"https://x.com/Kevin10919728/status/2089723692087382052", likes:649, title:"SOFIA VERGARA & HEIDI KLUM"},
  {img:"https://pbs.twimg.com/media/HQAVFFEWQAE9CHd.jpg", link:"https://x.com/Kevin10919728/status/2089693469493088405", likes:619, title:"LACEY CHABERT"},
  {img:"https://pbs.twimg.com/media/HQBxlB3WUAATxaH.jpg", link:"https://x.com/beautifulcelebz/status/2089795117875921360", likes:601, title:"Jessica Alba 😍"}
    ]
  }, 
  // ---------- August 18, 2026 ----------
  {
    id: "2026-08-18",
    date: "August 18, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
  {img:"https://pbs.twimg.com/media/HP-XGIwWsAAeSJz.jpg", link:"https://x.com/JumpTrailers/status/2089554889068208345", likes:2924, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HP9NmhSWcAAXySx.jpg", link:"https://x.com/JumpTrailers/status/2089474081733116210", likes:2423, title:"Inde Navarrette for Gap"},
  {img:"https://pbs.twimg.com/media/HP9t2plW0AAdMbA.jpg", link:"https://x.com/JumpTrailers/status/2089509549636039068", likes:2147, title:"Inde Navarrette"},
  {img:"https://pbs.twimg.com/media/HP-UIX6XUAAbvqG.jpg", link:"https://x.com/JumpTrailers/status/2089551642823700762", likes:2018, title:"Megan Lawless"},
  {img:"https://pbs.twimg.com/media/HP-kh61WEAAVudH.jpg", link:"https://x.com/beautifulcelebz/status/2089569660484173897", likes:1463, title:"Victoria Justice"},
  {img:"https://pbs.twimg.com/media/HP9LfZuXMAEmDs2.jpg", link:"https://x.com/BaddiesBae_/status/2089471896320389142", likes:1421, title:"Maggie Adler - Illinois"},
  {img:"https://pbs.twimg.com/media/HP-gEpTWsAAXRQe.jpg", link:"https://x.com/JumpTrailers/status/2089564761075728746", likes:1173, title:"Madelaine Petsch, Happy Birthday"},
  {img:"https://pbs.twimg.com/media/HP-EBuPWkAAZLfD.jpg", link:"https://x.com/BaddiesBae_/status/2089534030144233525", likes:909, title:"Morgan Mamolen - Alabama"},
  {img:"https://pbs.twimg.com/media/HP93aaxXQAA1kVf.jpg", link:"https://x.com/JumpTrailers/status/2089520069189542092", likes:823, title:"Auli'i Cravalho"},
  {img:"https://pbs.twimg.com/media/HP9b1BaWcAAuwkd.jpg", link:"https://x.com/JumpTrailers/status/2089489729876119776", likes:815, title:"Dafne Keen"}
    ]
  }, 
           // ---------- August 17, 2026 ----------
  {
    id: "2026-08-17",
    date: "August 17, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
  {img:"https://pbs.twimg.com/media/HP466XHWYAAqgXd.jpg", link:"https://x.com/BaddiesBae_/status/2089173161518473340", likes:2030, title:"Amanda Chan"},
  {img:"https://pbs.twimg.com/media/HP4fn8sXsAAWEFG.jpg", link:"https://x.com/JumpTrailers/status/2089142168233386180", likes:1889, title:"Sadie Sink"},
  {img:"https://pbs.twimg.com/media/HP4S0CzWoAA-hl_.jpg", link:"https://x.com/JumpTrailers/status/2089128059072868358", likes:1605, title:"Inde Navarrette for Ashot Magazine"},
  {img:"https://pbs.twimg.com/media/HP34aRqWAAANAvW.jpg", link:"https://x.com/JumpTrailers/status/2089098942487441727", likes:1262, title:"Inde Navarrette"},
  {img:"https://pbs.twimg.com/media/HP4q8o9WEAAI6o4.jpg", link:"https://x.com/JumpTrailers/status/2089154507183714642", likes:1104, title:"Inde Navarrette"},
  {img:"https://pbs.twimg.com/media/HP49QoSXUAE-Sjj.jpg", link:"https://x.com/JumpTrailers/status/2089174886556000527", likes:1055, title:"Sydney Sweeney"},
  {img:"https://pbs.twimg.com/media/HP4dwaxXoAA5L0v.jpg", link:"https://x.com/JumpTrailers/status/2089140107865358592", likes:958, title:"Samara Weaving via IG"},
  {img:"https://pbs.twimg.com/media/HP4MY2qXAAAi18h.jpg", link:"https://x.com/JumpTrailers/status/2089120905729393116", likes:860, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HP5KsoibEAAPzWM.jpg", link:"https://x.com/JumpTrailers/status/2089189453906800930", likes:644, title:"Sadie Sink"},
  {img:"https://pbs.twimg.com/media/HP5vr0QXwAEHsjO.jpg", link:"https://x.com/JumpTrailers/status/2089230123031568634", likes:622, title:"Hailee Steinfeld"}
    ]
  }, 
           // ---------- August 16, 2026 ----------
  {
    id: "2026-08-16",
    date: "August 16, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
  {img:"https://pbs.twimg.com/media/HPwd9tSX0AAdZp2.jpg", link:"https://x.com/beautifulcelebz/status/2088577279798518034", likes:5525, title:"Emilia Clarke by Vincent Peters, Esquire"},
  {img:"https://pbs.twimg.com/media/HPyAwSxWYAAykuT.jpg", link:"https://x.com/JumpTrailers/status/2088685903145291835", likes:4739, title:"Inde Navarrette for Gap"},
  {img:"https://pbs.twimg.com/media/HPyba_AWgAAOA_2.jpg", link:"https://x.com/BaddiesBae_/status/2088741269375742125", likes:4154, title:"Olivia Hopkins - Ole Miss"},
  {img:"https://pbs.twimg.com/media/HPyZ55xWAAAqWT1.jpg", link:"https://x.com/JumpTrailers/status/2088713605361398072", likes:3450, title:"X-MEN cast photographed by Wes Ellis"},
  {img:"https://pbs.twimg.com/media/HPxwWPNW8AASUKE.jpg", link:"https://x.com/JumpTrailers/status/2088667874336383404", likes:3204, title:"Inde Navarrette"},
  {img:"https://pbs.twimg.com/media/HPyBW1PWMAAryJB.jpg", link:"https://x.com/beautyshowcase/status/2088701507206099168", likes:2954, title:"Melimtx (Albanian)"},
  {img:"https://pbs.twimg.com/media/HPyoYZ3WsAAozcw.jpg", link:"https://x.com/JumpTrailers/status/2088729602688520610", likes:2885, title:"Sadie Sink at D23"},
  {img:"https://pbs.twimg.com/media/HPy_BirW0AA9Gly.jpg", link:"https://x.com/JumpTrailers/status/2088754369462202746", likes:2288, title:"Inde Navarrette for Gap"},
  {img:"https://pbs.twimg.com/media/HPyYPuKWwAAKN5D.jpg", link:"https://x.com/JumpTrailers/status/2088711806759965162", likes:2181, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HPzgCCFWgAEDvaN.jpg", link:"https://x.com/JumpTrailers/status/2088790672320905485", likes:2103, title:"Samara Weaving"}
    ]
  },
           // ---------- August 15, 2026 ----------
  {
    id: "2026-08-15",
    date: "August 15, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
{img:"https://pbs.twimg.com/media/HOkBuFnXcAEpUjH.jpg", link:"https://x.com/PinnacleTrends/status/2088203985781973364", likes:26051, title:"Kendall Jenner"},
  {img:"https://pbs.twimg.com/media/HPp6aJzWAAAlMvk.jpg", link:"https://x.com/JumpTrailers/status/2088115972963979553", likes:8015, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HPpmHmSW8AAJaqt.jpg", link:"https://x.com/JumpTrailers/status/2088093741642842380", likes:7541, title:"Madelyn Cline at Netflix's End of Summer Bash"},
  {img:"https://pbs.twimg.com/media/HPp3jtUXAAEM8UJ.jpg", link:"https://x.com/JumpTrailers/status/2088112843350528035", likes:7322, title:"Emilia Mernes"},
  {img:"https://pbs.twimg.com/media/HPsizGVWQAA0fGo.jpg", link:"https://x.com/JumpTrailers/status/2088301136730071090", likes:6829, title:"Sadie Sink"},
  {img:"https://pbs.twimg.com/media/HPqfqGnXgAAlmph.jpg", link:"https://x.com/JumpTrailers/status/2088156938345341080", likes:6713, title:"Auli'i Cravalho"},
  {img:"https://pbs.twimg.com/media/HPr-8UqW0AIH-Ax.jpg", link:"https://x.com/beautyshowcase/status/2088287027515240454", likes:6126, title:"Gali Klugman (Israeli 🇮🇱)"},
  {img:"https://pbs.twimg.com/media/HPpKfezXkAA-Uyb.jpg", link:"https://x.com/JumpTrailers/status/2088063300823031901", likes:5641, title:"Inde Navarrette for Gap"},
  {img:"https://pbs.twimg.com/media/HPp7DkvWEAAw_OL.jpg", link:"https://x.com/JumpTrailers/status/2088116685836271821", likes:4534, title:"Olivia Rodrigo"},
  {img:"https://pbs.twimg.com/media/HPphb3ZXIAAVMUb.jpg", link:"https://x.com/JumpTrailers/status/2088088822064017880", likes:4383, title:"Madelyn Cline at Netflix's End of Summer Bash"}
    ]
  },
  // ---------- August 14, 2026 ----------
  {
    id: "2026-08-14",
    date: "August 14, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
      {img:"https://pbs.twimg.com/media/HPoivCwX0AE6mX1.jpg", link:"https://x.com/JumpTrailers/status/2088019624231084381", likes:6032, title:"Megan Fox via IG"},
      {img:"https://pbs.twimg.com/media/HPp6aJzWAAAlMvk.jpg", link:"https://x.com/JumpTrailers/status/2088115972963979553", likes:3849, title:"Samara Weaving"},
      {img:"https://pbs.twimg.com/media/HPpmHmSW8AAJaqt.jpg", link:"https://x.com/JumpTrailers/status/2088093741642842380", likes:3682, title:"Madelyn Cline at Netflix's End of Summer Bash"},
      {img:"https://pbs.twimg.com/media/HPpKfezXkAA-Uyb.jpg", link:"https://x.com/JumpTrailers/status/2088063300823031901", likes:3607, title:"Inde Navarrette for Gap"},
      {img:"https://pbs.twimg.com/media/HPqfqGnXgAAlmph.jpg", link:"https://x.com/JumpTrailers/status/2088156938345341080", likes:3319, title:"Auli'i Cravalho"},
      {img:"https://pbs.twimg.com/media/HPoe2Z7XsAABsS2.jpg", link:"https://x.com/JumpTrailers/status/2088015348729614526", likes:3245, title:"Emily Ratajkowski"},
      {img:"https://pbs.twimg.com/media/HPp7DkvWEAAw_OL.jpg", link:"https://x.com/JumpTrailers/status/2088116685836271821", likes:2923, title:"Olivia Rodrigo"},
      {img:"https://pbs.twimg.com/media/HPphb3ZXIAAVMUb.jpg", link:"https://x.com/JumpTrailers/status/2088088822064017880", likes:2885, title:"Madelyn Cline at Netflix's End of Summer Bash"},
      {img:"https://pbs.twimg.com/media/HPp3jtUXAAEM8UJ.jpg", link:"https://x.com/JumpTrailers/status/2088112843350528035", likes:2855, title:"Emilia Mernes"},
      {img:"https://pbs.twimg.com/media/HPpUK0vXwAAxF15.jpg", link:"https://x.com/JumpTrailers/status/2088074206080549026", likes:2388, title:"Madelyn Cline"}
    ]
  },

  // ---------- August 13, 2026 ----------
  {
    id: "2026-08-13",
    date: "August 13, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
      {img:"https://pbs.twimg.com/media/HPj7I1JWcAAne3y.jpg", link:"https://x.com/JumpTrailers/status/2087694564093993215", likes:6006, title:"Inde Navarrette for Gap"},
      {img:"https://pbs.twimg.com/media/HPjXPkZWAAA49uF.jpg", link:"https://x.com/JumpTrailers/status/2087655094930014322", likes:2037, title:"Dafne Keen and Amanda Diaz"},
      {img:"https://pbs.twimg.com/media/HPjOzvbXoAAuDEx.jpg", link:"https://x.com/beautifulcelebz/status/2087645821529448907", likes:1777, title:"Sabrina Carpenter by Jack Bridgland"},
      {img:"https://pbs.twimg.com/media/HPkRB5TWsAA01x0.jpg", link:"https://x.com/BaddiesBae_/status/2087720801680191677", likes:1551, title:"Kale Welborn - Arizona"},
      {img:"https://pbs.twimg.com/media/HPjUm-dWcAA1t6T.jpg", link:"https://x.com/beautifulcelebz/status/2087652198608175549", likes:1382, title:"Ana de Armas"},
      {img:"https://pbs.twimg.com/media/HPkk15PWIAAikPJ.jpg", link:"https://x.com/JumpTrailers/status/2087740415747236279", likes:1358, title:"Elle Fanning"},
      {img:"https://pbs.twimg.com/media/HPkvDLFXoAAS_YK.jpg", link:"https://x.com/JumpTrailers/status/2087751639780282765", likes:1210, title:"Samara Weaving"},
      {img:"https://pbs.twimg.com/media/HPjZr_9WQAA8Htr.jpg", link:"https://x.com/BaddiesBae_/status/2087658721778245817", likes:1176, title:"Emma Steele - UW Oshkosh"},
      {img:"https://pbs.twimg.com/media/HPjBn8LWEAAGDUI.jpg", link:"https://x.com/JumpTrailers/status/2087631340829344180", likes:1142, title:"Inde Navarrette"},
      {img:"https://pbs.twimg.com/media/HPlSi1sX0AAXnhT.jpg", link:"https://x.com/JumpTrailers/status/2087790713660424394", likes:1035, title:"Dafne Keen"}
    ]
  },
  
  // ---------- August 11, 2026 ----------
  {
    id: "2026-08-11",
    date: "August 11, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
{img:"https://pbs.twimg.com/media/HPaG-rEW0AAqwnB.jpg", link:"https://x.com/JumpTrailers/status/2087003901077700638", likes:3619, title:"Sadie Sink for Harper's Bazaar"},
  {img:"https://pbs.twimg.com/media/HPag9RYWgAA_baG.jpg", link:"https://x.com/JumpTrailers/status/2087032480993816923", likes:2553, title:"4K | LISA"},
  {img:"https://pbs.twimg.com/media/HPZKJdZWAAABHnl.jpg", link:"https://x.com/JumpTrailers/status/2086937054269628524", likes:2228, title:"Sabrina Carpenter"},
  {img:"https://pbs.twimg.com/media/HPYxO16WcAEbXht.jpg", link:"https://x.com/JumpTrailers/status/2086909791020978366", likes:1947, title:"Camila Mendes"},
  {img:"https://pbs.twimg.com/media/HPaT1PLXoAAaHPX.jpg", link:"https://x.com/beautifulcelebz/status/2087018025820000679", likes:1831, title:"Margaret Qualley by Nina Park"},
  {img:"https://pbs.twimg.com/media/HPZLNALXYAAVcws.jpg", link:"https://x.com/JumpTrailers/status/2086938379929665828", likes:1722, title:"4K | Zara Larsson"},
  {img:"https://pbs.twimg.com/media/HPZNqOnWgAAF99f.jpg", link:"https://x.com/JumpTrailers/status/2086941231808954411", likes:1630, title:"Kylie Jenner, Happy Birthday"},
  {img:"https://pbs.twimg.com/media/HPY6qCPXcAA7wE5.jpg", link:"https://x.com/JumpTrailers/status/2086920139568533699", likes:1586, title:"Megan Flawless"},
  {img:"https://pbs.twimg.com/media/HPY7Rp2XwAAWtIP.jpg", link:"https://x.com/JumpTrailers/status/2086921286396068238", likes:1522, title:"4K | Sadie Sink (Prada)"},
  {img:"https://pbs.twimg.com/media/HPZ05H6XYAAmnbA.jpg", link:"https://x.com/JumpTrailers/status/2086984551826411716", likes:1354, title:"4K | Jennifer Lopez"}
    ]
  },
    // ---------- August 10, 2026 ----------
  {
    id: "2026-08-10",
    date: "August 10, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
  {img:"https://pbs.twimg.com/media/HPTtNANWoAAMvX7.jpg", link:"https://x.com/JumpTrailers/status/2086553341383856314", likes:14329, title:"Inde Navarrette"},
  {img:"https://pbs.twimg.com/media/HPSdDcFWoAAOLFO.jpg", link:"https://x.com/beautyshowcase/status/2086490186947407937", likes:12220, title:"Extremely rare build"},
  {img:"https://pbs.twimg.com/media/HPUeRiRXQAA1bMA.jpg", link:"https://x.com/JumpTrailers/status/2086607295694492116", likes:6053, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HPUtA87W8AAfgyQ.jpg", link:"https://x.com/JumpTrailers/status/2086623509136953640", likes:4947, title:"Sadie Sink"},
  {img:"https://pbs.twimg.com/media/HPUPqEqXwAAib64.jpg", link:"https://x.com/JumpTrailers/status/2086591224165888378", likes:3868, title:"Margaret Qualley"},
  {img:"https://pbs.twimg.com/media/HPU32oKWoAAgYFV.jpg", link:"https://x.com/BaddiesBae_/status/2086635496801751160", likes:3316, title:"Riana Bailey - Texas"},
  {img:"https://pbs.twimg.com/media/HPUAPzsWcAAtUzJ.jpg", link:"https://x.com/JumpTrailers/status/2086574292498583620", likes:3087, title:"Zara Larsson via TikTok"},
  {img:"https://pbs.twimg.com/media/HPTk8XcXEAAtooe.jpg", link:"https://x.com/JumpTrailers/status/2086544713964806171", likes:2661, title:"Dafne Keen at Fan Expo Boston"},
  {img:"https://pbs.twimg.com/media/HPVb3t_XgAAi8VR.jpg", link:"https://x.com/JumpTrailers/status/2086675026569203758", likes:2454, title:"Alysa Liu"},
  {img:"https://pbs.twimg.com/media/HPUqSJYXQAApwcs.jpg", link:"https://x.com/JumpTrailers/status/2086620499526762582", likes:2448, title:"Sydney Sweeney"}
    ]
  },
     // ---------- August 9, 2026 ----------
  {
    id: "2026-08-09",
    date: "August 9, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
{img:"https://pbs.twimg.com/media/HPOGQp-XYAAQgze.jpg", link:"https://x.com/JumpTrailers/status/2086158679674413087", likes:32069, title:"Zara Larsson via IG"},
  {img:"https://pbs.twimg.com/media/HPOinTMW0AAVOj5.jpg", link:"https://x.com/JumpTrailers/status/2086189865264095582", likes:7427, title:"Sydney Sweeney for SYRN"},
  {img:"https://pbs.twimg.com/media/HPPHE_kXgAADt2Q.jpg", link:"https://x.com/JumpTrailers/status/2086229947585114140", likes:7364, title:"Samara Weaving for Marie Claire"},
  {img:"https://pbs.twimg.com/media/HPNHYChXgAAMt6i.jpg", link:"https://x.com/beautyshowcase/status/2086120254200258755", likes:5641, title:"Italian 🇮🇹"},
  {img:"https://pbs.twimg.com/media/HPLkpVsW0AAF0Ez.jpg", link:"https://x.com/JumpTrailers/status/2085980981635203376", likes:4803, title:"Cailee Spaeny"},
  {img:"https://pbs.twimg.com/media/HPLKU6oXwAA7vpv.jpg", link:"https://x.com/JumpTrailers/status/2085952052044124553", likes:2737, title:"Millie Bobby Brown"},
  {img:"https://pbs.twimg.com/media/HPNHqW_WMAAxLgG.jpg", link:"https://x.com/beautyshowcase/status/2086089881244094701", likes:2456, title:"Good morning ❤️"},
  {img:"https://pbs.twimg.com/media/HPPTvg9X0AAPC3R.jpg", link:"https://x.com/JumpTrailers/status/2086243883109753279", likes:1995, title:"Sydney Sweeney for SYRN"},
  {img:"https://pbs.twimg.com/media/HPLBnpyWIAAJeod.jpg", link:"https://x.com/JumpTrailers/status/2085942470651560286", likes:1944, title:"Alysa Liu, Happy Birthday"},
  {img:"https://pbs.twimg.com/media/HPLemn_XAAAQljO.jpg", link:"https://x.com/JumpTrailers/status/2085974338507825522", likes:1898, title:"Anne Hathaway for Vanity Fair"}
    ]
  },
       // ---------- August 7, 2026 ----------
  {
    id: "2026-08-07",
    date: "August 7, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
{img:"https://pbs.twimg.com/media/HPEXrRiW4AA5q9R.jpg", link:"https://x.com/JumpTrailers/status/2085474149078569422", likes:4437, title:"Inde Navarrette"},
  {img:"https://pbs.twimg.com/media/HPEniTRWAAAN5ba.jpg", link:"https://x.com/JumpTrailers/status/2085491578571985324", likes:2958, title:"Sydney Sweeney"},
  {img:"https://pbs.twimg.com/media/HPFEBbiXYAA3ENl.jpg", link:"https://x.com/JumpTrailers/status/2085522966394122669", likes:2839, title:"Kathryn Newton"},
  {img:"https://pbs.twimg.com/media/HPGcC6ZXEAAR7zM.jpg", link:"https://x.com/JumpTrailers/status/2085619684267688140", likes:2799, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HPFHnhUXQAArf2M.jpg", link:"https://x.com/JumpTrailers/status/2085526876005572987", likes:2559, title:"Sydney Sweeney"},
  {img:"https://pbs.twimg.com/media/HPFcAkiXUAAjmoF.jpg", link:"https://x.com/beautifulcelebz/status/2085549276541731138", likes:2052, title:"Kylie Jenner"},
  {img:"https://pbs.twimg.com/media/HPEjSCeWIAANa_9.jpg", link:"https://x.com/JumpTrailers/status/2085486905697702268", likes:1731, title:"Xochitl Gomez"},
  {img:"https://pbs.twimg.com/media/HPFbnalXUAAp60m.jpg", link:"https://x.com/JumpTrailers/status/2085548886844703220", likes:1621, title:"Sadie Sink"},
  {img:"https://pbs.twimg.com/media/HPEVyrVWgAAz0bJ.jpg", link:"https://x.com/JumpTrailers/status/2085472070255722901", likes:1467, title:"Zara Larsson"},
  {img:"https://pbs.twimg.com/media/HPFqCZtWUAAkBQB.jpg", link:"https://x.com/JumpTrailers/status/2085564730433790412", likes:1429, title:"Megan Lawless"}
    ]
  },
         // ---------- August 6, 2026 ----------
  {
    id: "2026-08-06",
    date: "August 6, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
  {img:"https://pbs.twimg.com/media/HO__B7AWUAABAty.jpg", link:"https://x.com/JumpTrailers/status/2085165571117556109", likes:9399, title:"Rowan Blanchard"},
  {img:"https://pbs.twimg.com/media/HO-bZFZWoAAc-B-.jpg", link:"https://x.com/JumpTrailers/status/2085056019474915383", likes:5657, title:"Rowan Blanchard"},
  {img:"https://pbs.twimg.com/media/HPAdg6jWgAASFdz.jpg", link:"https://x.com/JumpTrailers/status/2085199102296338590", likes:4549, title:"Madison Beer"},
  {img:"https://pbs.twimg.com/media/HO9MNy5WgAA-3cX.jpg", link:"https://x.com/beautyshowcase/status/2085002886379893122", likes:3624, title:"Lola Hansen 🇺🇸"},
  {img:"https://pbs.twimg.com/media/HPAuqY_WkAAZxYj.jpg", link:"https://x.com/JumpTrailers/status/2085217954036175119", likes:2858, title:"Inde Navarrette"},
  {img:"https://pbs.twimg.com/media/HO9KR-sW0AAZPOh.jpg", link:"https://x.com/beautyshowcase/status/2085027045562786122", likes:2243, title:"Danish 🇩🇰"},
  {img:"https://pbs.twimg.com/media/HO_KtLGXEAAStIi.jpg", link:"https://x.com/JumpTrailers/status/2085108035916325004", likes:1825, title:"Rowan Blanchard"},
  {img:"https://pbs.twimg.com/media/HPAyF6KXUAAXJlw.jpg", link:"https://x.com/JumpTrailers/status/2085221716247134587", likes:1738, title:"Zara Larsson"},
  {img:"https://pbs.twimg.com/media/HPAfuQJWcAAlaej.jpg", link:"https://x.com/JumpTrailers/status/2085201516516835589", likes:1709, title:"Inde Navarrette"},
  {img:"https://pbs.twimg.com/media/HPAT_x-WcAAChnz.jpg", link:"https://x.com/JumpTrailers/status/2085188646739603808", likes:1478, title:"Inde Navarrette"}
    ]
  },
           // ---------- August 5, 2026 ----------
  {
    id: "2026-08-05",
    date: "August 5, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
  {img:"https://pbs.twimg.com/media/HO61xT3WsAAwpnB.jpg", link:"https://x.com/JumpTrailers/status/2084803556658528681", likes:28701, title:"4K | Zara Larsson performing at Lollapalooza"},
  {img:"https://pbs.twimg.com/media/HO6H0XyX0AA9A3Y.jpg", link:"https://x.com/JumpTrailers/status/2084753018268881078", likes:5797, title:"Inde Navarrette for Vogue"},
  {img:"https://pbs.twimg.com/media/HO71szBW0AIPY_b.jpg", link:"https://x.com/JumpTrailers/status/2084873833345859638", likes:4984, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HO6Ljt9XkAEmm9e.jpg", link:"https://x.com/BaddiesBae_/status/2084757712970129431", likes:4216, title:"Dakota Lynn - Florida State 🇺🇸"},
  {img:"https://pbs.twimg.com/media/HO5eoCsWMAAj6dY.jpg", link:"https://x.com/JumpTrailers/status/2084707729537433849", likes:2281, title:"Kylie Jenner for Khy"},
  {img:"https://pbs.twimg.com/media/HO66FnIWAAA_4bV.jpg", link:"https://x.com/JumpTrailers/status/2084808289951596763", likes:2084, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HO6-AT_WgAAmGNZ.jpg", link:"https://x.com/JumpTrailers/status/2084812595626758154", likes:2049, title:"Erin Moriarty"},
  {img:"https://pbs.twimg.com/media/HO6JPKOXkAAFlGR.jpg", link:"https://x.com/JumpTrailers/status/2084754593851048086", likes:1966, title:"Camila Cabello via IG"},
  {img:"https://pbs.twimg.com/media/HO7O5FJW4AAIBrp.jpg", link:"https://x.com/JumpTrailers/status/2084831178243051827", likes:1800, title:"Chase Infiniti"},
  {img:"https://pbs.twimg.com/media/HO6RjjuXYAEOqyl.jpg", link:"https://x.com/JumpTrailers/status/2084763732245188810", likes:1482, title:"Inde Navarrette"}
    ]
  },
           // ---------- August 4, 2026 ----------
  {
    id: "2026-08-04",
    date: "August 4, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
  {img:"https://pbs.twimg.com/media/HO0bX1HWwAAvz9r.jpg", link:"https://x.com/beautifulcelebz/status/2084352305114042843", likes:10145, title:"Jessica Alba 😍"},
  {img:"https://pbs.twimg.com/media/HO0ah8yWwAAEm7x.jpg", link:"https://x.com/JumpTrailers/status/2084352553156821288", likes:4714, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HO0rlXzW0AEMZrA.jpg", link:"https://x.com/JumpTrailers/status/2084370134387626388", likes:4486, title:"Erin Moriarty"},
  {img:"https://pbs.twimg.com/media/HOzm9Z5XgAA7szE.jpg", link:"https://x.com/beautyshowcase/status/2084294695044173897", likes:3943, title:"Good morning ❤️"},
  {img:"https://pbs.twimg.com/media/HO2I0ofXsAAhmim.jpg", link:"https://x.com/JumpTrailers/status/2084472646859653315", likes:3353, title:"Sydney Sweeney for SYRN"},
  {img:"https://pbs.twimg.com/media/HOzoOy1XsAAVMv1.jpg", link:"https://x.com/beautyshowcase/status/2084320892281360861", likes:2807, title:"Shay Baradut (Israeli 🇮🇱)"},
  {img:"https://pbs.twimg.com/media/HO1VkFLXUAAz7ow.jpg", link:"https://x.com/JumpTrailers/status/2084416294187651532", likes:2687, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HO0l7NTWAAA3hie.jpg", link:"https://x.com/JumpTrailers/status/2084363915417288819", likes:2611, title:"Sydney Sweeney for SYRN"},
  {img:"https://pbs.twimg.com/media/HO2LlVJXYAAQuw0.jpg", link:"https://x.com/JumpTrailers/status/2084475682969592176", likes:1888, title:"Madison Beer"},
  {img:"https://pbs.twimg.com/media/HO1Wh3rWsAAXnj4.jpg", link:"https://x.com/JumpTrailers/status/2084417366918623422", likes:1834, title:"Sophie Thatcher for The Hollywood Reporter"}
    ]
  },
             // ---------- August 3, 2026 ----------
  {
    id: "2026-08-03",
    date: "August 3, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
{img:"https://pbs.twimg.com/media/HOu6fjVWEAAI2-B.jpg", link:"https://x.com/JumpTrailers/status/2083964309319631086", likes:7430, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HOvRv52X0AAeer4.jpg", link:"https://x.com/JumpTrailers/status/2083989897829081589", likes:3438, title:"4K | Emily Ratajkowski"},
  {img:"https://pbs.twimg.com/media/HOvYnbHWAAAYthc.jpg", link:"https://x.com/JumpTrailers/status/2083997450671419468", likes:2278, title:"Hailey Bieber via IG"},
  {img:"https://pbs.twimg.com/media/HOu78MfXMAAE1ZL.jpg", link:"https://x.com/beautyshowcase/status/2083980902086951160", likes:2092, title:"Madeline Hope 🇺🇸"},
  {img:"https://pbs.twimg.com/media/HOvYio7XkAASj0T.jpg", link:"https://x.com/beautifulcelebz/status/2083997348338839747", likes:2078, title:"Emily Ratajkowski 😍"},
  {img:"https://pbs.twimg.com/media/HOwzWEjXQAAp29k.jpg", link:"https://x.com/BaddiesBae_/status/2084097238230352095", likes:1752, title:"Ava Nucci – Mississippi State 🇺🇸"},
  {img:"https://pbs.twimg.com/media/HOw02KKWgAAJ_Lc.jpg", link:"https://x.com/JumpTrailers/status/2084098843436569031", likes:1440, title:"Emily Ratajkowski"},
  {img:"https://pbs.twimg.com/media/HOv4Gh7XwAA6q5O.jpg", link:"https://x.com/BaddiesBae_/status/2084032803616805174", likes:1435, title:"Dani Lichter - Penn State 🇺🇸"},
  {img:"https://pbs.twimg.com/media/HOvvPvwWQAAREnK.jpg", link:"https://x.com/JumpTrailers/status/2084022317722611792", likes:1258, title:"Mckenna Grace at the \"PAW Patrol: The Dino Movie\" premiere."},
  {img:"https://pbs.twimg.com/media/HOxrbFBW8AAM0Tl.jpg", link:"https://x.com/JumpTrailers/status/2084158927768277276", likes:1177, title:"Emily Ratajkowski via IG"}
    ]
  },
             // ---------- August 2, 2026 ----------
  {
    id: "2026-08-02",
    date: "August 2, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
 {img:"https://pbs.twimg.com/media/HOqkjvXWAAA_meE.jpg", link:"https://x.com/JumpTrailers/status/2083658743326117893", likes:12786, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HOp26AkXMAADvqQ.jpg", link:"https://x.com/JumpTrailers/status/2083608524429365672", likes:6474, title:"Madelaine Petsch"},
  {img:"https://pbs.twimg.com/media/HOpBs1AXAAAMb1C.jpg", link:"https://x.com/beautyshowcase/status/2083580262303363222", likes:6437, title:"Ela Beeri (Israeli 🇮🇱)"},
  {img:"https://pbs.twimg.com/media/HOpBnrYW4AEqghY.jpg", link:"https://x.com/beautyshowcase/status/2083636382430335293", likes:4290, title:"PrettyGirls post"},
  {img:"https://pbs.twimg.com/media/HOpCJSsWIAAfc49.jpg", link:"https://x.com/beautyshowcase/status/2083595613279604914", likes:3871, title:"Spanish 🇪🇸"},
  {img:"https://pbs.twimg.com/media/HOrCqj_WsAAAXnL.jpg", link:"https://x.com/JumpTrailers/status/2083691821889151255", likes:3110, title:"Margaret Qualley"},
  {img:"https://pbs.twimg.com/media/HOpAx6gXUAAf0Ow.jpg", link:"https://x.com/beautyshowcase/status/2083621283561119839", likes:3086, title:"Vietnamese 🇻🇳"},
  {img:"https://pbs.twimg.com/media/HOVSUvUW4AA_D05.jpg", link:"https://x.com/BaddiesBae_/status/2083670355835548141", likes:3015, title:"Hannah Kuron - Bowling Green 🇺🇸"},
  {img:"https://pbs.twimg.com/media/HOpb9odWkAE0Cx6.jpg", link:"https://x.com/JumpTrailers/status/2083578916040482902", likes:2512, title:"4K | Olivia Rodrigo"},
  {img:"https://pbs.twimg.com/media/HOrihNIWAAAQRhj.jpg", link:"https://x.com/Kevin10919728/status/2083727056320266353", likes:2035, title:"KATE UPTON SI"}
    ]
  },
             // ---------- August 1, 2026 ----------
  {
    id: "2026-08-01",
    date: "August 1, 2026",
    title: "Top 10 Most Liked • Last 24h",
    posts: [
  {img:"https://pbs.twimg.com/media/HOh-QiZWsAAc4rZ.jpg", link:"https://x.com/JumpTrailers/status/2083053656589439344", likes:7047, title:"Sydney Sweeney for SYRN"},
  {img:"https://pbs.twimg.com/media/HOh6yO-WkAAZV6a.jpg", link:"https://x.com/beautifulcelebz/status/2083049836471816451", likes:4545, title:"Florence Pugh by Alex Babsky"},
  {img:"https://pbs.twimg.com/media/HOlCxZoWIAAl6Xz.jpg", link:"https://x.com/JumpTrailers/status/2083269724331237809", likes:3741, title:"Samara Weaving"},
  {img:"https://pbs.twimg.com/media/HOkQngAWIAAzari.jpg", link:"https://x.com/JumpTrailers/status/2083214588233855456", likes:3732, title:"Rihanna for Savage X Fenty"},
  {img:"https://pbs.twimg.com/media/HOmfxziXAAIK-zW.jpg", link:"https://x.com/BaddiesBae_/status/2083372197855305840", likes:2983, title:"Marley Washenitz - Arizona State"},
  {img:"https://pbs.twimg.com/media/HOkxq3BXgAAM8xj.jpg", link:"https://x.com/JumpTrailers/status/2083250927713108267", likes:2681, title:"Inde Navarrette for Variety"},
  {img:"https://pbs.twimg.com/media/HOhpUAiWEAAgLMd.jpg", link:"https://x.com/JumpTrailers/status/2083030651054243962", likes:2364, title:"Victoria Justice"},
  {img:"https://pbs.twimg.com/media/HOkLVQ2W0AABpgB.jpg", link:"https://x.com/beautifulcelebz/status/2083208768553161132", likes:1863, title:"Rihanna x Savage X Fenty"},
  {img:"https://pbs.twimg.com/media/HOm6HhUWwAA4s1v.jpg", link:"https://x.com/JumpTrailers/status/2083400955463131153", likes:1811, title:"Megan Fox"},
  {img:"https://pbs.twimg.com/media/HOiB8-jXsAET8jp.jpg", link:"https://x.com/JumpTrailers/status/2083057723227144561", likes:1718, title:"Madison Bailey via IG"}
    ]
  },

];

function getCollage(id) {
  return collages.find(c => c.id === id);
}