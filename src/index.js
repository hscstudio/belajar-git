const contributors = [
  { name: 'Hafid Mukhlasin', link: 'https://github.com/hscstudio' },
  { name: 'Kungfu Koding', link: 'https://github.com/kungfukoding' },
  { name: 'easyphpframework', link: 'https://github.com/easyphpframework' },
  
  // { name: 'namamu', link: 'link_githubmu' },
]

const found = (contributor) => {
  const result = contributors.find((item) => {
    return contributor === item.name
  })
  return result ? true : false
}

module.exports = found
