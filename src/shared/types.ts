export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitsCard {
  id: number;
  title: string;
  desc: string;
  icon: JSX.Element;
}

export interface OurClassesCard {
  id: number;
  title: string;
  desc?: string;
  image: string;
}
