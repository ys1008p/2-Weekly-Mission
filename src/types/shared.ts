export interface SharedFolder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links:
    | [
        {
          id: number;
          createdAt: string;
          url: string;
          title: string;
          description: string;
          imageSource: string;
        },
      ]
    | [];
  count: number;
}
