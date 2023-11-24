type Blog = {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
  excerpt: string;
  date: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Why I am better than you",
    thumbnail: "/blog-images/nvim/thumbnail.webp",
    url: "/blog/blogs/nvim",
    excerpt:
      "Step back, watch me code with the Neovim flow. Fingers on the keys, yeah, watch me bro. I'm the real deal, I'm the MVP. Watch you struggle to merge your GIT-TREE. Efficient workflows, yeah, that's my style. Lines of code dancing, rank me top of the pile. Vs-code in your hands, I can hear you scream. Your coding attempts are like a bad dream. Trash talkin cause I'm on another level. Neovim power, yeah, it's surreal.",
    date: "Nov 15, 2023",
  },
  {
    id: 3,
    title: "A Journey into Web Development",
    thumbnail: "/blog-images/journey/thumbnail.webp",
    url: "/blog/blogs/journey",
    excerpt:
      "The world of coding is a captivating realm, a blend of dopamine-fueled exhilaration and nail-biting frustration. It's a domain where problem-solving artistry reigns supreme, and the learning curve stretches endlessly into the horizon. In this ever-evolving landscape, the power to conjure into existence whatever your imagination envisions is truly awe-inspiring.",
    date: "Dec 12, 2021",
  },
];
