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
  }


];

function getCollage(id) {
  return collages.find(c => c.id === id);
}