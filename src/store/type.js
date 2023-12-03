// LinkProvider
export const INITIAL_LINK_DATA = {
  name: '',
  owner: {
    name: '',
    profileImageSource: '',
  },
  links: [],
};

// FolderProvider
export const INITIAL_FOLDER_DATA = [
  {
    id: 0,
    created_at: '',
    url: '',
    title: '',
    description: '',
    image_source: '',
    folder_id: 0,
  },
];

// Profile
export const INITIAL_PROFILE_DATA = {
  email: '',
  image_source: '',
};

// Filter
export const INITIAL_FILTER_DATA = [
  {
    id: 0,
    name: '',
    link: {},
  },
];
