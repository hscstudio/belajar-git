const contributors = [
  { name: "Hafid Mukhlasin", link: "https://github.com/hscstudio" },
  { name: "Kungfu Koding", link: "https://github.com/kungfukoding" },
  { name: "easyphpframework", link: "https://github.com/easyphpframework" },
  { name: "Tio Andri Prasetyo", link: "https://github.com/tioandri91" },
  { name: "Tesmo", link: "https://github.com/tesmoinc/belajar-git" },
  { name: "Sigdewa", link: "https://github.com/sigdewa/belajar-git" },
  { name: "Fathul Muiin", link: "https://github.com/fmuiin14/belajar-git" },

  // { name: 'namamu', link: 'link_githubmu' },
];

const found = (contributor) => {
  const result = contributors.find((item) => {
    return contributor === item.name;
  });
  return result ? true : false;
};

module.exports = found;
