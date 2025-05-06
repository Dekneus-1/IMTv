const searchBar = document.getElementById('searchBar'),
      searchIcon = document.getElementById('searchIcon'),
      overlay = document.getElementById('searchOverlay'),
      searchInput = searchBar.querySelector('input');

    function updateSearchVisibility() {
      if (window.innerWidth <= 768) {
        if (window.scrollY === 0) {
          searchBar.classList.add('visible');
          searchIcon.classList.remove('visible');
          overlay.classList.remove('active');
        } else {
          searchBar.classList.remove('visible');
          searchIcon.classList.add('visible');
          overlay.classList.remove('active');
        }
      }
    }
    window.addEventListener('DOMContentLoaded', updateSearchVisibility);
    window.addEventListener('scroll', updateSearchVisibility);
    window.addEventListener('resize', updateSearchVisibility);

    searchIcon.addEventListener('click', e => {
      e.stopPropagation();
      searchBar.classList.add('visible');
      searchIcon.classList.remove('visible');
      overlay.classList.add('active');
      searchInput.focus();
    });

    searchInput.addEventListener('blur', () => overlay.classList.remove('active'));
    document.body.addEventListener('click', e => {
      if (window.innerWidth <= 768 &&
        !searchBar.contains(e.target) &&
        !searchIcon.contains(e.target)) {
        searchBar.classList.remove('visible');
        searchIcon.classList.add('visible');
        overlay.classList.remove('active');
      }
    });

    document.addEventListener('mousemove', e => {
      if (window.innerWidth > 768) {
        if (e.clientY < 60) searchBar.classList.add('visible');
        else if (e.clientY > 120) searchBar.classList.remove('visible');
      }
    });

    const back = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      back.classList.toggle('visible', window.scrollY > 300);
    });
    back.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const bannerData = [
      {
        image: 'https://bgr.com/wp-content/uploads/2025/02/thunderbolts-super-bowl-trailer-poster.jpg?quality=82&strip=all&resize=1400,1050',
        title: 'Thunderbolts',
        genres: ['Drama', 'Superhero', 'Action', 'Adventure', 'Crime', 'Fantasy', 'Sci-fi'],
        rating: '★ 7.7',
        desc: 'After finding themselves ensnared in a death trap, an unconventional team of antiheroes must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.'
      },
      {
        image: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/11/last-of-us-tv-2.png?fit=1323%2C750&ssl=1',
        title: 'The Last of Us',
        genres: ['Drama', 'Survival', 'Action', 'Zombie', 'Horror', 'Adventure', 'Thriller'],
        rating: '★ 8.7',
        desc: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope."

      },
      {
        image: 'https://static1.squarespace.com/static/63bb3e8a824d7e2f7eedf0d3/t/67f3ea55dfd8146435adf7f9/1744038485096/Havoc+5.jpg?format=1500w',
        title: 'Havoc',
        genres: ['Conspiracy', 'Thriller', 'Crime', 'Martial arts', 'Action'],
        rating: '★ 5.7',
        desc: "After a drug deal gone wrong, a bruised detective must fight his way through the criminal underworld to rescue a politician's estranged son, unraveling a deep web of corruption and conspiracy that ensnares his entire city."
      }
    ];
    const sectionData = [
      {
        heading: 'Trending',
        movies: [
          { img: 'https://m.media-amazon.com/images/M/MV5BYjVkMzI2MjAtYzA3NC00OGE1LWEyZDMtODc0YTc5NTZjYzFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Extraterritorial' },
          { img: 'https://i.marvelousnews.com/g/generated/Thunderbolts-Final-Trailer/Final-Trailer__scaled_800.jpg', title: 'Thunderbolts' },
          { img: 'https://m.media-amazon.com/images/M/MV5BZWJjMjdhNGEtZjEyMi00OTg2LTllMzQtN2JlZWNjYzI4YzFhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Havoc' },
          { img: 'https://upload.wikimedia.org/wikipedia/en/6/66/A_Minecraft_Movie_poster.jpg', title: 'A Minecraft Movie' },
          { img: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Rust_%282024_film%29_poster.jpg', title: 'Rust' },
          { img: 'https://m.media-amazon.com/images/M/MV5BNjUzMjhkZjktNTU5Mi00MzhmLWJhMTQtZjhkYjczOTEzM2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Death of a Unicorn' },
          { img: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Captain_America_Brave_New_World_poster.jpg', title: 'Captain America: Brave new World' },
          { img: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Another_Simple_Favor_film_poster.png', title: 'Another Simple Favor' },
          { img: 'https://resizing.flixster.com/VR3Tfr9zpNllsU6RchvnbhGmPkc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VhOTdiZDNjLTlmODQtNGNlYi1iZWYwLWNkYjY2YmI5YzZjYS5qcGc=', title: 'Sinners' }
        ]
      },
      {
        heading: 'Recent',
        movies: [
          { img: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Rust_%282024_film%29_poster.jpg', title: 'Rust' },
          { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBBUeq1LGsrc4rOxDexLsr92sa0eU-g6v7A&s', title: 'Adult Best Friends' },
          { img: 'https://images.justwatch.com/poster/330560003/s718/pajaros.jpg', title: 'Birds Flying East' },
          { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOOCy3z4ei1FYxWICfxcRBilpsj94ZBc-Vg&s', title: 'ROB1N' },
          { img: 'https://m.media-amazon.com/images/M/MV5BOTUyNGFlZTAtMDA3Ny00YzAzLWEzMmMtZmJiZDk1ZWFjYWQxXkEyXkFqcGc@._V1_.jpg', title: 'In the Land of Brothers' },
          { img: 'https://m.media-amazon.com/images/M/MV5BNTg5Njc2ZjUtN2QwOC00MjdiLWJjYmQtYTc0MDg3OGE4Y2ExXkEyXkFqcGc@._V1_.jpg', title: 'Lilies Not for Me' },
          { img: 'https://i.marvelousnews.com/g/generated/Thunderbolts-Final-Trailer/Final-Trailer__scaled_800.jpg', title: 'Thunderbolts' },
          { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrAvI9vmNvWjCmqCVM3zWON5M6si7xNGdwg&s', title: 'The Surfer' },
          { img: 'https://m.media-amazon.com/images/M/MV5BOWFiNTA2MzItNzY1Mi00YzRlLTljY2MtMTQ2MDJhMmUzOTM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'On Swift Horses' },
          { img: 'https://m.media-amazon.com/images/M/MV5BZWU4NDY0ODktOGI3OC00NWE1LWIwYmQtNmJiZWU3NmZlMDhkXkEyXkFqcGc@._V1_.jpg', title: 'Until Dawn' }
        ]
      },
      {
        heading: 'Top rated',
        movies: [
          { img: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'The Shawshank Redemption' },
          { img: 'https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'The Godfather' },
          { img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg', title: 'The Dark Knight' },
          { img: 'https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'The Godfather PT2' },
          { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZq9OAtD0TkmW6dqQZo-6ik0RE3yA0UlwNQQ&s', title: 'Twelve Angry Men' },
          { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGgqGBhf1RfD92Y3G2ngc_24Rq6y454QVag&s', title: 'The Lord of the Rings: The Return of the King' },
          { img: 'https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: "Schindler's list" },
          { img: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg', title: 'Pulp Fiction' },
          { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjvtARVQAFZvjgby4i1ev7I2h0OgHcG8YoQ&s', title: 'The Lord of the Rings: The Fellowship of the Ring' },
          { img: 'https://m.media-amazon.com/images/I/81keqIN-tlL._AC_UF894,1000_QL80_.jpg', title: 'The Good, the Bad and the Ugly' }
        ]
      }
    ];

    const banner = document.getElementById('banner');
    bannerData.forEach((b, i) => {
      const slide = document.createElement('div');
      slide.className = 'slide' + (i === 0 ? ' active' : '');
      slide.style.backgroundImage = `url('${b.image}')`;
      slide.innerHTML = `
        <div class="overlay"></div>
        <div class="content">
          <div class="title-box">${b.title}</div>
          <div class="genres">
            ${b.genres.map(g => `<span>${g}</span>`).join('')}
            <span class="rating">${b.rating}</span>
          </div>
          <p class="description">${b.desc}</p>
        </div>`;
      banner.appendChild(slide);
    });
    ['left', 'right'].forEach(dir => {
      const btn = document.createElement('button');
      btn.className = `banner-arrow ${dir}`;
      btn.innerHTML = dir === 'left' ? '&#10094;' : '&#10095;';
      banner.appendChild(btn);
    });
    const dots = document.createElement('div');
    dots.className = 'dots';
    bannerData.forEach((_, i) => {
      const d = document.createElement('span');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      d.dataset.index = i;
      dots.appendChild(d);
    });
    banner.appendChild(dots);

    let current = 0;
    const slides = banner.querySelectorAll('.slide'),
      dotEls = banner.querySelectorAll('.dot');
    function goTo(n) {
      slides[current].classList.remove('active');
      dotEls[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dotEls[current].classList.add('active');
    }
    banner.querySelector('.banner-arrow.left').onclick = () => goTo(current - 1);
    banner.querySelector('.banner-arrow.right').onclick = () => goTo(current + 1);
    dotEls.forEach(d => d.onclick = () => goTo(+d.dataset.index));
    setInterval(() => goTo(current + 1), 5000);

    const main = document.getElementById('mainContent');
    sectionData.forEach(sec => {
      const sectionEl = document.createElement('section');
      sectionEl.innerHTML = `<h2>${sec.heading}</h2>`;
      const carousel = document.createElement('div');
      carousel.className = 'carousel';

      const pc = document.createElement('div');
      pc.className = 'posters-container';
      ['left', 'right'].forEach(dir => {
        const a = document.createElement('button');
        a.className = `arrow ${dir}`;
        a.innerHTML = dir === 'left' ? '&#10094;' : '&#10095;';
        pc.appendChild(a);
      });
      const posters = document.createElement('div');
      posters.className = 'posters';
      sec.movies.forEach(m => {
        const mv = document.createElement('div');
        mv.className = 'movie';
        mv.innerHTML = `
          <img src="${m.img}" alt="${m.title}"/>
          <div class="movie-title">${m.title}</div>`;
        posters.appendChild(mv);
      });
      pc.appendChild(posters);
      carousel.appendChild(pc);
      sectionEl.appendChild(carousel);
      main.appendChild(sectionEl);

      const l = pc.querySelector('.arrow.left'),
        r = pc.querySelector('.arrow.right');
      l.onclick = () => posters.scrollBy({ left: -posters.clientWidth, behavior: 'smooth' });
      r.onclick = () => posters.scrollBy({ left: posters.clientWidth, behavior: 'smooth' });
    });

    window.addEventListener('DOMContentLoaded', handleSearchScroll);