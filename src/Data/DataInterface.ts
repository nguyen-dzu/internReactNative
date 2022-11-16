export type ICategories = {
  id: string;
  title: String;
  data: [IDepartment];
  child: ICategories[];
};

export type IDepartment = {
  id: string;
  name: string;
  desc: string;
  img: string;
};
