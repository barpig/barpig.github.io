// ============================================
//  Shared logic for the fashion site
// ============================================

// ----- Modal -----
function openModal(imgSrc, link, likes, title) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalInfo = document.getElementById('modalInfo');

  // Make the name part clickable
  const nameLink = makeNameLinks(title);

  modalImg.src = imgSrc;
  modalInfo.innerHTML = `
    <a href="${link}" target="_blank" rel="noopener">
      <strong>${likes.toLocaleString()} Likes</strong> • ${nameLink} → View on X
    </a>`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ----- Turn names into clickable tags -----
function makeNameLinks(title) {
  // The whole title becomes a searchable tag link
  const encoded = encodeURIComponent(title);
  return `<a href="tag.html?q=${encoded}" class="tag-link" onclick="event.stopPropagation()">${title}</a>`;
}

// ----- Render a collage grid -----
function renderCollage(posts, containerId = 'grid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  if (!posts || posts.length === 0) {
    grid.innerHTML = `<div class="empty">No posts for this day yet.</div>`;
    return;
  }

  grid.innerHTML = '';
  posts.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" loading="lazy" alt="${p.title}">
      <div class="info">
        <strong>${p.likes.toLocaleString()}</strong> Likes • ${makeNameLinks(p.title)}
      </div>`;
    card.onclick = () => openModal(p.img, p.link, p.likes, p.title);
    grid.appendChild(card);
  });
}

// ----- Render archive (homepage) -----
function renderArchive(containerId = 'archive') {
  const container = document.getElementById(containerId);
  if (!container || typeof collages === 'undefined') return;

  container.innerHTML = '';

  // Sort newest first
  const sorted = [...collages].sort((a, b) => b.id.localeCompare(a.id));

  sorted.forEach(c => {
    if (!c.posts || c.posts.length === 0) return;

    const thumb = c.posts[0]?.img || '';
    const card = document.createElement('a');
    card.className = 'archive-card';
    card.href = `collage.html?id=${c.id}`;
    card.innerHTML = `
      <img src="${thumb}" loading="lazy" alt="${c.date}">
      <div class="archive-info">
        <div class="date">${c.date}</div>
        <div class="title">${c.title}</div>
        <div class="count">${c.posts.length} looks</div>
      </div>`;
    container.appendChild(card);
  });
}

// ----- Get all posts that match a search term -----
function getPostsByName(query) {
  if (!query || typeof collages === 'undefined') return [];

  const q = query.toLowerCase().trim();
  const results = [];

  collages.forEach(c => {
    if (!c.posts) return;
    c.posts.forEach(p => {
      if (p.title.toLowerCase().includes(q)) {
        results.push({
          ...p,
          date: c.date,
          collageId: c.id
        });
      }
    });
  });

  // Sort by likes (highest first)
  results.sort((a, b) => b.likes - a.likes);
  return results;
}

// ----- Render tag / search results -----
function renderTagResults(query, containerId = 'grid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const posts = getPostsByName(query);

  if (posts.length === 0) {
    grid.innerHTML = `<div class="empty">No looks found for “${query}”</div>`;
    return;
  }

  grid.innerHTML = '';
  posts.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" loading="lazy" alt="${p.title}">
      <div class="info">
        <strong>${p.likes.toLocaleString()}</strong> Likes • ${p.title}
        <div class="card-date">${p.date}</div>
      </div>`;
    card.onclick = () => openModal(p.img, p.link, p.likes, p.title);
    grid.appendChild(card);
  });
}

// ----- Get URL parameter -----
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}