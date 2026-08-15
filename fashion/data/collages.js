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
  }


];

function getCollage(id) {
  return collages.find(c => c.id === id);
}