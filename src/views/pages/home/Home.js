import homeSectionOne from '../components/sections/homeSectionOne'
import homeSectionTwo from '../components/sections/homeSectionTwo'


let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            <h1>Olá meu amorzinhoooooooo s2 s2 s2 s2 s2</div>
            ${homeSectionOne}
            ${homeSectionTwo}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;