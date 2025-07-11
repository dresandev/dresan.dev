export const fakeMasonryItemId = {
  intro: "fake-masonry-intro-item",
  moreAbout: "fake-masonry-more-about-item",
  greeting: "fake-masonry-greeting-item",
  moreProjects: "fake-masonry-more-projects-item",
  experience: "fake-masonry-experience-item",
  education: "fake-masonry-education-item",
  myStack: "fake-masonry-my-stack-item",
  lastSongListened: "fake-masonry-last-song-listened-item",
}

export type FakeMasonryItemKey = keyof typeof fakeMasonryItemId
export type FakeMasonryItemValue = (typeof fakeMasonryItemId)[keyof typeof fakeMasonryItemId];

