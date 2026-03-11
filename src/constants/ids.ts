export const FAKE_MASONRY_ITEM_ID = {
  intro: "fake-masonry-intro-item",
  moreAbout: "fake-masonry-more-about-item",
  greeting: "fake-masonry-greeting-item",
  moreProjects: "fake-masonry-more-projects-item",
  experience: "fake-masonry-experience-item",
  education: "fake-masonry-education-item",
  myStack: "fake-masonry-my-stack-item",
  lastSongListened: "fake-masonry-last-song-listened-item",
}

export const HOME_SECTION_ID = {
  projects: "projects",
  aboutMe: "about",
}

export const CONTACT_MODAL_ID = "contact-modal"

export type FakeMasonryItemKey = keyof typeof FAKE_MASONRY_ITEM_ID
export type HomeSectionIdKey = keyof typeof HOME_SECTION_ID
