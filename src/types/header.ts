export interface HeaderLink {
  href: Lowercase<HeaderTextLink>;
  text: HeaderTextLink;
}

type HeaderTextLink = "Images" | "Repositories";
