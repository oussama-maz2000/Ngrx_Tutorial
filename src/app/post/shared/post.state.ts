import { PostState } from './post.model';

export const postInitialState: PostState = {
  posts: [
    {
      id: 1,
      title: 'Elon Mask',
      description:
        'Il est cofondateur et président-directeur général de la société astronautique SpaceX et directeur général de la société automobile Tesla.',
      img: 'https://media.gettyimages.com/id/872508684/photo/elon-musk-multi-millionaire-rocket-scientist-tesla-and-space-x-founder-and-the-man-who.jpg?s=612x612&w=0&k=20&c=0SAwBM6KvgYbd-Gb3y4qI6k0URFy_HMyUoRijnyTpbs=',
    },
    {
      id: 2,
      title: 'Mark Zuckerberg',
      description:
        'Il est le principal cofondateur du site et réseau social Facebook en 2004. Mark Zuckerberg est actuellement un actionnaire important et le dirigeant du Groupe Meta.',
      img: 'https://media.gettyimages.com/id/961785536/photo/facebook-ceo-mark-zuckerberg-speaks-during-a-press-conference-in-paris-on-may-23-2018.jpg?s=612x612&w=gi&k=20&c=pUDsppjVpY4vzO2ADjDYpljpryi4RHVfLecuUZ1j2cE=',
    },
    {
      id: 3,
      title: 'steve jobs',
      description:
        " Cofondateur, directeur général et président du conseil d'administration de l'entreprise multinationale américaine Apple Inc",
      img: 'https://media.gettyimages.com/id/98328574/photo/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-april-8-2010-in-cupertino-california.jpg?s=612x612&w=0&k=20&c=9VV8dwtUBZCi8CelGEhkxILRAaE2OKV-YwmXMAp8tvw=',
    },
  ],
};
